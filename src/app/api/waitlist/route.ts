import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface WaitlistEntry {
  name: string;
  email: string;
  organization: string;
  timestamp: string;
  id: string;
}

interface WaitlistData {
  entries: WaitlistEntry[];
}

const WAITLIST_FILE_PATH = path.join(process.cwd(), 'data', 'waitlist.json');

// Ensure the data directory and file exist
async function ensureWaitlistFile(): Promise<void> {
  try {
    const dataDir = path.dirname(WAITLIST_FILE_PATH);
    await fs.mkdir(dataDir, { recursive: true });
    
    try {
      await fs.access(WAITLIST_FILE_PATH);
    } catch {
      // File doesn't exist, create it with empty structure
      const initialData: WaitlistData = { entries: [] };
      await fs.writeFile(WAITLIST_FILE_PATH, JSON.stringify(initialData, null, 2));
    }
  } catch (error) {
    console.error('Error ensuring waitlist file:', error);
    throw error;
  }
}

// Read waitlist data from file
async function readWaitlistData(): Promise<WaitlistData> {
  try {
    await ensureWaitlistFile();
    const fileContent = await fs.readFile(WAITLIST_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent) as WaitlistData;
  } catch (error) {
    console.error('Error reading waitlist data:', error);
    return { entries: [] };
  }
}

// Write waitlist data to file
async function writeWaitlistData(data: WaitlistData): Promise<void> {
  try {
    await fs.writeFile(WAITLIST_FILE_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing waitlist data:', error);
    throw error;
  }
}

// Generate a simple ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Check if email already exists
function emailExists(entries: WaitlistEntry[], email: string): boolean {
  return entries.some(entry => entry.email.toLowerCase() === email.toLowerCase());
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, organization } = body;

    // Validate required fields
    if (!name || !email || !organization) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and organization are required' },
        { status: 400 }
      );
    }

    // Validate field types and lengths
    if (typeof name !== 'string' || typeof email !== 'string' || typeof organization !== 'string') {
      return NextResponse.json(
        { error: 'Invalid field types: all fields must be strings' },
        { status: 400 }
      );
    }

    if (name.trim().length === 0 || email.trim().length === 0 || organization.trim().length === 0) {
      return NextResponse.json(
        { error: 'Empty fields: all fields must contain valid content' },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 100 || organization.length > 100) {
      return NextResponse.json(
        { error: 'Field too long: maximum 100 characters per field' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Read existing waitlist data
    const waitlistData = await readWaitlistData();

    // Check if email already exists
    if (emailExists(waitlistData.entries, email)) {
      return NextResponse.json(
        { error: 'Email already registered in waitlist' },
        { status: 409 }
      );
    }

    // Create new entry
    const newEntry: WaitlistEntry = {
      id: generateId(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      organization: organization.trim(),
      timestamp: new Date().toISOString()
    };

    // Add to waitlist
    waitlistData.entries.push(newEntry);

    // Write back to file
    await writeWaitlistData(waitlistData);

    // Return success response
    return NextResponse.json(
      { 
        ok: true, 
        message: 'Successfully added to waitlist',
        id: newEntry.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve waitlist data (for admin purposes)
export async function GET() {
  try {
    const waitlistData = await readWaitlistData();
    
    // Return summary data (without exposing sensitive information)
    return NextResponse.json({
      total: waitlistData.entries.length,
      latest: waitlistData.entries.length > 0 
        ? waitlistData.entries[waitlistData.entries.length - 1].timestamp 
        : null
    });
  } catch (error) {
    console.error('Error retrieving waitlist data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
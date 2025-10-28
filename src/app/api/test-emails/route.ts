import { NextRequest, NextResponse } from 'next/server';
import { EmailService, EmailNotificationData } from '@/lib/email';

// Test data for email templates
const testData: EmailNotificationData = {
  companyName: "Test Farm Co.",
  contactName: "Areez",
  email: "areez.bd@gmail.com",
  companySize: "Medium (50-200 employees)",
  timeline: "3-6 months",
  currentChallenges: ["Inventory Management", "Supply Chain Optimization", "Data Analytics"],
  interestedFeatures: ["Real-time Monitoring", "Automated Reporting", "Mobile Access"],
  phone: "+1234567890",
  submittedAt: new Date().toISOString()
};

export async function POST(request: NextRequest) {
  try {
    const { emailType } = await request.json();
    
    let result = false;
    let message = '';
    
    switch (emailType) {
      case 'admin':
        result = await EmailService.sendAdminNotification(testData);
        message = 'Admin notification email';
        break;
        
      case 'confirmation':
        result = await EmailService.sendApplicantConfirmation(testData);
        message = 'Applicant confirmation email';
        break;
        
      case 'approval':
        result = await EmailService.sendApprovalNotification(testData);
        message = 'Approval notification email';
        break;
        
      case 'rejection':
        result = await EmailService.sendRejectionNotification(testData, "Limited pilot capacity for this testing cycle");
        message = 'Rejection notification email';
        break;
        
      case 'all':
        console.log('🧪 Sending all email templates...\n');
        
        // Send all emails with delays
        const adminResult = await EmailService.sendAdminNotification(testData);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const confirmationResult = await EmailService.sendApplicantConfirmation(testData);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const approvalResult = await EmailService.sendApprovalNotification(testData);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const rejectionResult = await EmailService.sendRejectionNotification(testData, "Limited pilot capacity for this testing cycle");
        
        return NextResponse.json({
          success: true,
          message: 'All email templates sent',
          results: {
            admin: adminResult,
            confirmation: confirmationResult,
            approval: approvalResult,
            rejection: rejectionResult
          }
        });
        
      default:
        return NextResponse.json({
          success: false,
          error: 'Invalid email type. Use: admin, confirmation, approval, rejection, or all'
        }, { status: 400 });
    }
    
    return NextResponse.json({
      success: result,
      message: `${message} ${result ? 'sent successfully' : 'failed to send'}`,
      emailType,
      recipient: testData.email
    });
    
  } catch (error) {
    console.error('Error sending test email:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to send test email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Email testing endpoint',
    usage: 'POST with { "emailType": "admin|confirmation|approval|rejection|all" }',
    testRecipient: testData.email
  });
}
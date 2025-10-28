export interface EmailNotificationData {
  companyName: string;
  contactName: string;
  email: string;
  companySize: string;
  timeline: string;
  currentChallenges: string[];
  interestedFeatures: string[];
  phone?: string;
  submittedAt: string;
}

export class EmailService {
  private static readonly ADMIN_EMAIL = 'contact@farmroket.com';
  private static readonly FROM_EMAIL = 'FarmRoket™ <noreply@farmroket.com>';
  private static readonly SITE_NAME = 'FarmRoket™';
  private static readonly SITE_URL = 'https://farmroket.com';
  private static readonly CURRENT_YEAR = new Date().getFullYear();

  /**
   * Send notification to admin about new pilot application
   */
  static async sendAdminNotification(data: EmailNotificationData): Promise<boolean> {
    try {
      const subject = `New Pilot Application: ${data.companyName}`;
      const htmlContent = this.generateAdminEmailTemplate(data);
      
      // In development mode, log the email but also send if Resend API key is available
      if (process.env.NODE_ENV === 'development') {
        console.log('\n📧 ADMIN EMAIL NOTIFICATION:');
        console.log('=====================================');
        console.log(`To: ${this.ADMIN_EMAIL}`);
        console.log(`From: ${this.FROM_EMAIL}`);
        console.log(`Subject: ${subject}`);
        console.log(`Company: ${data.companyName}`);
        console.log(`Contact: ${data.contactName} (${data.email})`);
        console.log(`Size: ${data.companySize} | Timeline: ${data.timeline}`);
        console.log(`Phone: ${data.phone || 'Not provided'}`);
        console.log(`Challenges: ${data.currentChallenges.join(', ')}`);
        console.log(`Features: ${data.interestedFeatures.join(', ')}`);
        console.log(`Submitted: ${new Date(data.submittedAt).toLocaleString()}`);
        console.log('=====================================\n');
        
        // If no Resend API key, just log and return
        if (!process.env.RESEND_API_KEY) {
          console.log('⚠️ No RESEND_API_KEY found - email logged only\n');
          return true;
        }
        console.log('📤 Sending email via Resend...\n');
      }
      
      // Send email directly using Resend API
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: this.FROM_EMAIL,
          to: [this.ADMIN_EMAIL],
          subject,
          html: htmlContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Failed to send admin notification:', errorData);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error sending admin notification:', error);
      return false;
    }
  }

  /**
   * Send confirmation email to applicant
   */
  static async sendApplicantConfirmation(data: EmailNotificationData): Promise<boolean> {
    try {
      const subject = `Thank you for your pilot application - ${this.SITE_NAME}`;
      const htmlContent = this.generateApplicantEmailTemplate(data);
      
      // In development mode, log the email but also send if Resend API key is available
      if (process.env.NODE_ENV === 'development') {
        console.log('\n📧 APPLICANT CONFIRMATION EMAIL:');
        console.log('=====================================');
        console.log(`To: ${data.email}`);
        console.log(`From: ${this.FROM_EMAIL}`);
        console.log(`Subject: ${subject}`);
        console.log(`Dear ${data.contactName},`);
        console.log(`Thank you for submitting your pilot application for ${data.companyName}.`);
        console.log(`We will review your application and get back to you within 2-3 business days.`);
        console.log('=====================================\n');
        
        // If no Resend API key, just log and return
        if (!process.env.RESEND_API_KEY) {
          console.log('⚠️ No RESEND_API_KEY found - email logged only\n');
          return true;
        }
        console.log('📤 Sending email via Resend...\n');
      }
      
      // Send email directly using Resend API
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: this.FROM_EMAIL,
          to: [data.email],
          subject,
          html: htmlContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Failed to send applicant confirmation:', errorData);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error sending applicant confirmation:', error);
      return false;
    }
  }

  /**
   * Send approval notification to applicant
   */
  static async sendApprovalNotification(data: EmailNotificationData): Promise<boolean> {
    try {
      const subject = `🎉 Congratulations! Your pilot application has been approved - ${this.SITE_NAME}`;
      const htmlContent = this.generateApprovalEmailTemplate(data);
      
      // In development mode, log the email but also send if Resend API key is available
      if (process.env.NODE_ENV === 'development') {
        console.log('\n📧 APPLICATION APPROVAL EMAIL:');
        console.log('=====================================');
        console.log(`To: ${data.email}`);
        console.log(`From: ${this.FROM_EMAIL}`);
        console.log(`Subject: ${subject}`);
        console.log(`Dear ${data.contactName},`);
        console.log(`Great news! Your pilot application for ${data.companyName} has been approved.`);
        console.log(`Our team will contact you within 24 hours to begin the onboarding process.`);
        console.log('=====================================\n');
        
        // If no Resend API key, just log and return
        if (!process.env.RESEND_API_KEY) {
          console.log('⚠️ No RESEND_API_KEY found - email logged only\n');
          return true;
        }
        console.log('📤 Sending email via Resend...\n');
      }
      
      // Send email directly using Resend API
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: this.FROM_EMAIL,
          to: [data.email],
          subject,
          html: htmlContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Failed to send approval notification:', errorData);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error sending approval notification:', error);
      return false;
    }
  }

  /**
   * Send rejection notification to applicant
   */
  static async sendRejectionNotification(data: EmailNotificationData, reason?: string): Promise<boolean> {
    try {
      const subject = `Update on your pilot application - ${this.SITE_NAME}`;
      const htmlContent = this.generateRejectionEmailTemplate(data, reason);
      
      // In development mode, log the email but also send if Resend API key is available
      if (process.env.NODE_ENV === 'development') {
        console.log('\n📧 APPLICATION REJECTION EMAIL:');
        console.log('=====================================');
        console.log(`To: ${data.email}`);
        console.log(`From: ${this.FROM_EMAIL}`);
        console.log(`Subject: ${subject}`);
        console.log(`Dear ${data.contactName},`);
        console.log(`Thank you for your interest in the ${this.SITE_NAME} pilot program.`);
        console.log(`Unfortunately, we cannot move forward with your application at this time.`);
        if (reason) {
          console.log(`Reason: ${reason}`);
        }
        console.log('=====================================\n');
        
        // If no Resend API key, just log and return
        if (!process.env.RESEND_API_KEY) {
          console.log('⚠️ No RESEND_API_KEY found - email logged only\n');
          return true;
        }
        console.log('📤 Sending email via Resend...\n');
      }
      
      // Send email directly using Resend API
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: this.FROM_EMAIL,
          to: [data.email],
          subject,
          html: htmlContent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Failed to send rejection notification:', errorData);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error sending rejection notification:', error);
      return false;
    }
  }

  /**
   * Generate HTML template for admin notification
   */
  private static generateAdminEmailTemplate(data: EmailNotificationData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Pilot Application</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
          
          body { 
            font-family: 'Inter', sans-serif; 
            line-height: 1.5; 
            color: #1f2937; 
            margin: 0; 
            padding: 20px; 
            background-color: #f8fafc; 
            font-size: 15px;
          }
          
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: #ffffff; 
            border-radius: 12px; 
            box-shadow: 0 4px 16px rgba(0,0,0,0.08); 
            overflow: hidden; 
            border: 1px solid #e5e7eb; 
          }
          
          .header { 
            background: #55883d; 
            color: #ffffff; 
            padding: 24px; 
            text-align: center; 
          }
          
          .header h1 { 
            margin: 0; 
            font-size: 24px; 
            font-weight: 600; 
          }
          
          .header p { 
            margin: 8px 0 0 0; 
            opacity: 0.9; 
            font-size: 15px; 
          }
          
          .content { 
            padding: 24px; 
            background: #ffffff; 
          }
          
          .field { 
            margin-bottom: 20px; 
            border-bottom: 1px solid #f3f4f6; 
            padding-bottom: 16px; 
          }
          
          .field:last-child { 
            border-bottom: none; 
            margin-bottom: 0; 
            padding-bottom: 0; 
          }
          
          .field-label { 
            font-weight: 600; 
            color: #374151; 
            margin-bottom: 6px; 
            font-size: 14px; 
          }
          
          .field-value { 
            color: #4b5563; 
            font-size: 15px; 
            line-height: 1.5; 
          }
          
          .field-value strong { 
            color: #1f2937; 
            font-weight: 500; 
          }
          
          .highlight { 
            background: #f0f9e8; 
            border: 1px solid #a5ce39; 
            padding: 16px; 
            margin: 20px 0; 
            border-radius: 8px; 
          }
          
          .footer { 
            background: #f8fafc; 
            padding: 20px; 
            text-align: center; 
            color: #6b7280; 
            font-size: 13px; 
            border-top: 1px solid #e5e7eb; 
          }
          
          .badge { 
            display: inline-block; 
            background: #a5ce39; 
            color: #ffffff; 
            padding: 6px 12px; 
            border-radius: 16px; 
            font-size: 12px; 
            font-weight: 500; 
          }
          
          .cta-button { 
            display: inline-block; 
            background: #ffffff; 
            color: #55883d; 
            border: 2px solid #55883d; 
            padding: 12px 24px; 
            border-radius: 6px; 
            text-decoration: none; 
            font-weight: 500; 
            font-size: 15px; 
            margin: 16px 0; 
            transition: all 0.2s ease; 
          }
          
          .cta-button:hover { 
            background: #55883d; 
            color: #ffffff; 
          }
          
          .footer a { 
            color: #a5ce39; 
            text-decoration: none; 
          }
          
          .footer a:hover { 
            color: #55883d; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Pilot Application</h1>
            <p>A new company has applied for the pilot program</p>
          </div>
          
          <div class="content">
            <div class="highlight">
              <strong>Company:</strong> ${data.companyName}<br>
              <strong>Contact:</strong> ${data.contactName}<br>
              <strong>Timeline:</strong> <span class="badge">${data.timeline}</span>
            </div>
            
            <div class="field">
              <div class="field-label">Contact Information</div>
              <div class="field-value">
                <strong>Email:</strong> ${data.email}<br>
                <strong>Phone:</strong> ${data.phone || 'Not provided'}
              </div>
            </div>
            
            <div class="field">
              <div class="field-label">Company Details</div>
              <div class="field-value">
                <strong>Size:</strong> ${data.companySize} employees
              </div>
            </div>
            
            <div class="field">
              <div class="field-label">Current Challenges</div>
              <div class="field-value">${data.currentChallenges.join(', ')}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Interested Features</div>
              <div class="field-value">${data.interestedFeatures.join(', ')}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Submitted</div>
              <div class="field-value">${new Date(data.submittedAt).toLocaleString()}</div>
            </div>
            
            <div style="text-align: center; margin-top: 32px;">
              <a href="${this.SITE_URL}/admin/dashboard" class="cta-button">Review Application</a>
            </div>
          </div>
          
          <div class="footer">
            <p>Manage all applications in your <a href="${this.SITE_URL}/admin/dashboard">Admin Dashboard</a></p>
            <p>© ${this.CURRENT_YEAR} ${this.SITE_NAME}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  /**
   * Generate HTML template for applicant confirmation
   */
  private static generateApplicantEmailTemplate(data: EmailNotificationData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Received</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
          
          body { 
            font-family: 'Inter', sans-serif; 
            line-height: 1.5; 
            color: #1f2937; 
            margin: 0; 
            padding: 24px; 
            background-color: #f1f5f9; 
            font-size: 16px;
          }
          
          .container { 
            max-width: 560px; 
            margin: 0 auto; 
            background: #ffffff; 
            border-radius: 12px; 
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); 
            overflow: hidden; 
            border: 1px solid #e2e8f0; 
          }
          
          .header { 
            background: #a5ce39; 
            color: #ffffff; 
            padding: 32px 24px; 
            text-align: center; 
          }
          
          .header h1 { 
            margin: 0; 
            font-size: 28px; 
            font-weight: 600; 
            letter-spacing: -0.025em; 
          }
          
          .header p { 
            margin: 12px 0 0 0; 
            opacity: 0.95; 
            font-size: 16px; 
            font-weight: 400; 
          }
          
          .content { 
            padding: 32px 24px; 
            background: #ffffff; 
          }
          
          .content p { 
            margin-bottom: 16px; 
            font-size: 16px; 
            line-height: 1.5; 
          }
          
          .content strong { 
            color: #1f2937; 
            font-weight: 600; 
          }
          
          .highlight { 
            background: #f0f9e8; 
            border: 1px solid #a5ce39; 
            padding: 20px; 
            margin: 24px 0; 
            border-radius: 8px; 
            text-align: center; 
          }
          
          .highlight p { 
            margin: 0; 
            font-size: 16px; 
            font-weight: 500; 
          }
          
          .timeline { 
            background: #fef7e8; 
            border: 1px solid #a5ce39; 
            padding: 20px; 
            border-radius: 8px; 
            margin: 24px 0; 
          }
          
          .timeline strong { 
            color: #1f2937; 
            font-size: 16px; 
            font-weight: 600; 
            display: block; 
            margin-bottom: 12px; 
          }
          
          .timeline ul { 
            margin: 0; 
            padding-left: 16px; 
            list-style: none; 
          }
          
          .timeline li { 
            margin-bottom: 8px; 
            position: relative; 
            padding-left: 20px; 
            font-size: 16px; 
            line-height: 1.5; 
          }
          
          .timeline li:before { 
            content: '•'; 
            color: #a5ce39; 
            font-weight: bold; 
            position: absolute; 
            left: 0; 
            font-size: 16px; 
          }
          
          .cta { 
            background: #ffffff; 
            color: #a5ce39; 
            padding: 12px 24px; 
            border: 2px solid #a5ce39; 
            border-radius: 6px; 
            text-decoration: none; 
            display: inline-block; 
            margin: 24px 0; 
            font-weight: 500; 
            font-size: 16px; 
            transition: all 0.2s ease; 
          }
          
          .cta:hover { 
            background: #a5ce39; 
            color: #ffffff; 
          }
          
          .footer { 
            background: #f8fafc; 
            padding: 24px; 
            text-align: center; 
            color: #64748b; 
            font-size: 14px; 
            border-top: 1px solid #e2e8f0; 
          }
          
          .footer a { 
            color: #a5ce39; 
            text-decoration: none; 
            font-weight: 500; 
          }
          
          .footer a:hover { 
            color: #55883d; 
          }
          
          .content a { 
            color: #a5ce39; 
            text-decoration: none; 
            font-weight: 500; 
          }
          
          .content a:hover { 
            color: #55883d; 
          }
          
          .signature { 
            margin-top: 32px; 
            padding-top: 20px; 
            border-top: 1px solid #f1f5f9; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Application Received!</h1>
            <p>Thank you for your interest in ${this.SITE_NAME}</p>
          </div>
          
          <div class="content">
            <p>Dear <strong>${data.contactName}</strong>,</p>
            
            <div class="highlight">
              <p><strong>Great news!</strong> We've successfully received your pilot application for <strong>${data.companyName}</strong>.</p>
            </div>
            
            <p>Our team is excited to learn about your agriculture supply-chain operations and how ${this.SITE_NAME} can help optimize a compliant process.</p>
            
            <div class="timeline">
              <strong>What happens next?</strong>
              <ul>
                <li>Our team will review your application within <strong>2-3 business days</strong></li>
                <li>We'll reach out to schedule a discovery call</li>
                <li>If selected, we'll set up your pilot program</li>
              </ul>
            </div>
            
            <p>In the meantime, feel free to explore our website to learn more about how we're revolutionizing farm management using blockchain technologies to ensure trust and transparency.</p>
            
            <div style="text-align: center;">
              <a href="${this.SITE_URL}" class="cta">Visit Our Website</a>
            </div>
            
            <p>If you have any questions, don't hesitate to reach out to us at <a href="mailto:contact@farmroket.com">contact@farmroket.com</a>.</p>
            
            <div class="signature">
              <p>Best regards,<br>
              <strong>The ${this.SITE_NAME} Team</strong></p>
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent because you applied for our pilot program.</p>
            <p>© ${this.CURRENT_YEAR} ${this.SITE_NAME}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  /**
   * Generate HTML template for application approval
   */
  private static generateApprovalEmailTemplate(data: EmailNotificationData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Approved!</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
          
          body { 
            font-family: 'Inter', sans-serif; 
            line-height: 1.5; 
            color: #1f2937; 
            margin: 0; 
            padding: 24px; 
            background-color: #f1f5f9; 
            font-size: 16px;
          }
          
          .container { 
            max-width: 560px; 
            margin: 0 auto; 
            background: #ffffff; 
            border-radius: 12px; 
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); 
            overflow: hidden; 
            border: 1px solid #e2e8f0; 
          }
          
          .header { 
            background: #a5ce39; 
            color: #ffffff; 
            padding: 32px 24px; 
            text-align: center; 
          }
          
          .header h1 { 
            margin: 0; 
            font-size: 28px; 
            font-weight: 600; 
            letter-spacing: -0.025em; 
          }
          
          .header p { 
            margin: 12px 0 0 0; 
            opacity: 0.95; 
            font-size: 16px; 
            font-weight: 400; 
          }
          
          .content { 
            padding: 32px 24px; 
            background: #ffffff; 
          }
          
          .content p { 
            margin-bottom: 16px; 
            font-size: 16px; 
            line-height: 1.5; 
          }
          
          .content strong { 
            color: #1f2937; 
            font-weight: 600; 
          }
          
          .celebration { 
            background: #f0f9e8; 
            border: 1px solid #a5ce39; 
            padding: 24px; 
            margin: 24px 0; 
            border-radius: 8px; 
            text-align: center; 
          }
          
          .celebration h2 { 
            color: #55883d; 
            margin: 0 0 12px 0; 
            font-size: 20px; 
            font-weight: 600; 
          }
          
          .celebration p { 
            margin: 0; 
            font-size: 16px; 
            font-weight: 500; 
          }
          
          .next-steps { 
            background: #f0f9e8; 
            border: 1px solid #a5ce39; 
            padding: 20px; 
            margin: 24px 0; 
            border-radius: 8px; 
          }
          
          .next-steps h3 { 
            color: #55883d; 
            margin: 0 0 16px 0; 
            font-size: 18px; 
            font-weight: 600; 
          }
          
          .next-steps p { 
            margin-bottom: 12px; 
            font-size: 16px; 
            line-height: 1.5; 
          }
          
          .benefits { 
            background: #fef7e8; 
            border: 1px solid #a5ce39; 
            padding: 20px; 
            border-radius: 8px; 
            margin: 24px 0; 
          }
          
          .benefits h3 { 
            color: #a5ce39; 
            margin: 0 0 16px 0; 
            font-size: 18px; 
            font-weight: 600; 
          }
          
          .benefit-item { 
            margin: 12px 0; 
            padding-left: 20px; 
            position: relative; 
            color: #374151; 
            font-size: 16px; 
            line-height: 1.5; 
          }
          
          .benefit-item:before { 
            content: "✓"; 
            position: absolute; 
            left: 0; 
            color: #a5ce39; 
            font-weight: bold; 
            font-size: 16px; 
          }
          
          .cta { 
            background: #ffffff; 
            color: #a5ce39; 
            padding: 12px 24px; 
            border: 2px solid #a5ce39; 
            border-radius: 6px; 
            text-decoration: none; 
            display: inline-block; 
            margin: 24px 0; 
            font-weight: 500; 
            font-size: 16px; 
            transition: all 0.2s ease; 
          }
          
          .cta:hover { 
            background: #a5ce39; 
            color: #ffffff; 
          }
          
          .footer { 
            background: #f8fafc; 
            padding: 24px; 
            text-align: center; 
            color: #64748b; 
            font-size: 14px; 
            border-top: 1px solid #e2e8f0; 
          }
          
          .footer a { 
            color: #a5ce39; 
            text-decoration: none; 
            font-weight: 500; 
          }
          
          .footer a:hover { 
            color: #55883d; 
          }
          
          .content a { 
            color: #a5ce39; 
            text-decoration: none; 
            font-weight: 500; 
          }
          
          .content a:hover { 
            color: #55883d; 
          }
          
          .signature { 
            margin-top: 32px; 
            padding-top: 20px; 
            border-top: 1px solid #f1f5f9; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Congratulations!</h1>
            <p>Your pilot application has been approved</p>
          </div>
          
          <div class="content">
            <p>Dear <strong>${data.contactName}</strong>,</p>
            
            <div class="celebration">
              <h2>Welcome to the ${this.SITE_NAME} Pilot Program!</h2>
              <p>We're excited to partner with <strong>${data.companyName}</strong> on this journey.</p>
            </div>
            
            <p>After reviewing your application, we believe ${this.SITE_NAME} is perfectly positioned to help address your challenges with <em>${data.currentChallenges.join(', ')}</em> and deliver the features you're most interested in.</p>
            
            <div class="next-steps">
              <h3>What happens next?</h3>
              <p>Our team will contact you within <strong>24 hours</strong> to:</p>
              <p>• Schedule your onboarding call</p>
              <p>• Set up your pilot environment</p>
              <p>• Begin the implementation process</p>
            </div>
            
            <div class="benefits">
              <h3>Your pilot program includes:</h3>
              <div class="benefit-item">Full access to ${this.SITE_NAME} platform</div>
              <div class="benefit-item">Dedicated support team</div>
              <div class="benefit-item">Custom training sessions</div>
              <div class="benefit-item">Regular progress reviews</div>
            </div>
            
            <p>We're committed to ensuring your success and look forward to demonstrating how ${this.SITE_NAME} can transform your agricultural operations.</p>
            
            <div style="text-align: center;">
              <a href="${this.SITE_URL}" class="cta">Learn More</a>
            </div>
            
            <p>If you have any immediate questions, please don't hesitate to reach out to us at <a href="mailto:contact@farmroket.com">contact@farmroket.com</a>.</p>
            
            <div class="signature">
              <p>Welcome aboard!<br>
              <strong>The ${this.SITE_NAME} Team</strong></p>
            </div>
          </div>
          
          <div class="footer">
            <p>You're receiving this email because your pilot application was approved.</p>
            <p>© ${this.CURRENT_YEAR} ${this.SITE_NAME}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  /**
   * Generate HTML template for application rejection
   */
  private static generateRejectionEmailTemplate(data: EmailNotificationData, reason?: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Update</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
          
          body { 
            font-family: 'Inter', sans-serif; 
            line-height: 1.5; 
            color: #1f2937; 
            margin: 0; 
            padding: 24px; 
            background-color: #f1f5f9; 
            font-size: 16px;
          }
          
          .container { 
            max-width: 560px; 
            margin: 0 auto; 
            background: #ffffff; 
            border-radius: 12px; 
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); 
            overflow: hidden; 
            border: 1px solid #e2e8f0; 
          }
          
          .header { 
            background: #a5ce39; 
            color: #ffffff; 
            padding: 32px 24px; 
            text-align: center; 
          }
          
          .header h1 { 
            margin: 0; 
            font-size: 28px; 
            font-weight: 600; 
            letter-spacing: -0.025em; 
          }
          
          .header p { 
            margin: 12px 0 0 0; 
            opacity: 0.95; 
            font-size: 16px; 
            font-weight: 400; 
          }
          
          .content { 
            padding: 32px 24px; 
            background: #ffffff; 
          }
          
          .content p { 
            margin-bottom: 16px; 
            font-size: 16px; 
            line-height: 1.5; 
          }
          
          .content strong { 
            color: #1f2937; 
            font-weight: 600; 
          }
          
          .message-box { 
            background: #fef7e8; 
            border: 1px solid #a5ce39; 
            padding: 20px; 
            margin: 24px 0; 
            border-radius: 8px; 
            text-align: center; 
          }
          
          .message-box p { 
            margin: 0; 
            font-size: 16px; 
            font-weight: 500; 
          }
          
          .reason-box { 
            background: #f8fafc; 
            border: 1px solid #e2e8f0; 
            padding: 20px; 
            margin: 24px 0; 
            border-radius: 8px; 
          }
          
          .reason-box h4 { 
            color: #374151; 
            margin: 0 0 12px 0; 
            font-size: 16px; 
            font-weight: 600; 
          }
          
          .reason-box p { 
            margin: 0; 
            color: #4b5563; 
            font-size: 16px; 
            line-height: 1.5; 
          }
          
          .future-opportunities { 
            background: #f0f9e8; 
            border: 1px solid #a5ce39; 
            padding: 20px; 
            margin: 24px 0; 
            border-radius: 8px; 
          }
          
          .future-opportunities h3 { 
            color: #55883d; 
            margin: 0 0 16px 0; 
            font-size: 18px; 
            font-weight: 600; 
          }
          
          .future-opportunities p { 
            margin-bottom: 12px; 
            font-size: 16px; 
            line-height: 1.5; 
          }
          
          .cta { 
            background: #ffffff; 
            color: #a5ce39; 
            padding: 12px 24px; 
            border: 2px solid #a5ce39; 
            border-radius: 6px; 
            text-decoration: none; 
            display: inline-block; 
            margin: 24px 0; 
            font-weight: 500; 
            font-size: 16px; 
            transition: all 0.2s ease; 
          }
          
          .cta:hover { 
            background: #a5ce39; 
            color: #ffffff; 
          }
          
          .footer { 
            background: #f8fafc; 
            padding: 24px; 
            text-align: center; 
            color: #64748b; 
            font-size: 14px; 
            border-top: 1px solid #e2e8f0; 
          }
          
          .footer a { 
            color: #a5ce39; 
            text-decoration: none; 
            font-weight: 500; 
          }
          
          .footer a:hover { 
            color: #55883d; 
          }
          
          .content a { 
            color: #a5ce39; 
            text-decoration: none; 
            font-weight: 500; 
          }
          
          .content a:hover { 
            color: #55883d; 
          }
          
          .signature { 
            margin-top: 32px; 
            padding-top: 20px; 
            border-top: 1px solid #f1f5f9; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Application Update</h1>
            <p>Thank you for your interest in ${this.SITE_NAME}</p>
          </div>
          
          <div class="content">
            <p>Dear <strong>${data.contactName}</strong>,</p>
            
            <p>Thank you for taking the time to submit your pilot application for <strong>${data.companyName}</strong>. We truly appreciate your interest in ${this.SITE_NAME} and the detailed information you provided about your farming operation.</p>
            
            <div class="message-box">
              <p><strong>After careful consideration, we are unable to move forward with your application for our current pilot program.</strong></p>
            </div>
            
            ${reason ? `
            <div class="reason-box">
              <h4>Reason for this decision:</h4>
              <p>${reason}</p>
            </div>
            ` : ''}
            
            <p>This decision was not made lightly, and it doesn't reflect the quality of your operation or your potential as a ${this.SITE_NAME} customer. Our pilot program has limited capacity, and we must carefully select participants based on specific criteria that align with our current development priorities.</p>
            
            <div class="future-opportunities">
              <h3>Future Opportunities</h3>
              <p><strong>We'd love to stay connected!</strong> Here's how:</p>
              <p>• <strong>Waitlist:</strong> We'll notify you when we open our next pilot cohort</p>
              <p>• <strong>Product Launch:</strong> Be among the first to know when ${this.SITE_NAME} becomes publicly available</p>
              <p>• <strong>Updates:</strong> Receive updates on new features and capabilities</p>
            </div>
            
            <p>We believe ${this.SITE_NAME} could still be valuable for addressing your challenges with <em>${data.currentChallenges.join(', ')}</em>, and we hope to have the opportunity to work with you in the future.</p>
            
            <div style="text-align: center;">
              <a href="${this.SITE_URL}/waitlist" class="cta">Join Our Waitlist</a>
            </div>
            
            <p>Thank you again for your interest, and we wish you continued success with your farming operation.</p>
            
            <p>If you have any questions about this decision or would like to discuss future opportunities, please feel free to reach out to us at <a href="mailto:contact@farmroket.com">contact@farmroket.com</a>.</p>
            
            <div class="signature">
              <p>Best regards,<br>
              <strong>The ${this.SITE_NAME} Team</strong></p>
            </div>
          </div>
          
          <div class="footer">
            <p>You're receiving this email because you applied for our pilot program.</p>
            <p>© ${this.CURRENT_YEAR} ${this.SITE_NAME}. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}
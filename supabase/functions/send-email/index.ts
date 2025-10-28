import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

interface EmailRequest {
  to: string
  from: string
  subject: string
  html: string
  type: 'admin_notification' | 'applicant_confirmation'
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
    })
  }

  try {
    const { to, from, subject, html, type }: EmailRequest = await req.json()

    // Validate required fields
    if (!to || !from || !subject || !html) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // For development, log the email instead of sending
    if (!RESEND_API_KEY) {
      console.log('📧 Email would be sent:', {
        to,
        from,
        subject,
        type,
        timestamp: new Date().toISOString()
      })
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Email logged (development mode)',
          data: { to, subject, type }
        }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Send email using Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error('Resend API error:', errorData)
      
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email',
          details: errorData
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    const result = await emailResponse.json()
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        data: result
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in send-email function:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error.message
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
})
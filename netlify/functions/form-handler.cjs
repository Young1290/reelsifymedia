exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse form data
    const formData = new URLSearchParams(event.body);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      eventDate: formData.get('event-date'),
      venue: formData.get('venue'),
      coverage: formData.get('coverage'),
      deliverables: formData.get('deliverables'),
      notes: formData.get('notes')
    };

    // Format message for WhatsApp
    const message = `🎬 *New Event Inquiry - Reelsify Media*

👤 *Client Details:*
• Name: ${data.name}
• Email: ${data.email}
• Phone: ${data.phone}

📅 *Event Information:*
• Date: ${data.eventDate}
• Venue: ${data.venue}
• Coverage: ${data.coverage}
• Deliverables: ${data.deliverables}

📝 *Additional Notes:*
${data.notes || 'No additional notes provided'}

---
Submitted via reelsify.co contact form`;

    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=60127183499&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

    // For development/testing, you can also send an email notification
    // or integrate with other services like Zapier, Make.com, etc.

    // Return success response with redirect to success page
    return {
      statusCode: 302,
      headers: {
        Location: '/success.html'
      },
      body: ''
    };

  } catch (error) {
    console.error('Form submission error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html'
      },
      body: `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Submission Error</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="min-h-screen bg-red-50 flex items-center justify-center p-4">
          <div class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h1 class="text-2xl font-bold text-slate-900 mb-4">Submission Error</h1>
            <p class="text-slate-600 mb-6">There was an error processing your form. Please try again or contact us directly.</p>
            <div class="space-y-3">
              <a href="/" class="block w-full bg-slate-900 text-white py-3 px-4 rounded-xl hover:bg-slate-800">Back to Homepage</a>
              <a href="https://api.whatsapp.com/send/?phone=60127183499&text=Hi%2C%20I%20had%20trouble%20with%20the%20contact%20form&type=phone_number&app_absent=0" class="block w-full border border-slate-300 text-slate-700 py-3 px-4 rounded-xl hover:bg-slate-50">WhatsApp Us</a>
            </div>
          </div>
        </body>
        </html>
      `
    };
  }
};

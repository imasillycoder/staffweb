export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { action } = req.body;
    const webhookUrl = process.env.WEBHOOK_URL;
    
    if (!webhookUrl) {
      return res.status(500).json({ success: false, message: 'Webhook URL not set' });
    }

    // Log action to webhook
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, timestamp: new Date().toISOString() }),
      });

      // Handle the action (e.g., connect to RCON, perform action, etc.)
      switch (action) {
        case 'kick':
          // Implement RCON command for kick
          break;
        case 'mute':
          // Implement RCON command for mute
          break;
        case 'warn':
          // Implement RCON command for warn
          break;
        default:
          throw new Error('Unknown action');
      }

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Only POST requests allowed' });
  }
}

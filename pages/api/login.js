export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    
    // Retrieve admin credentials from environment variables
    const adminUser = process.env.ADMIN_USER;
    const adminPass = process.env.ADMIN_PASS;

    if (username === adminUser && password === adminPass) {
      // Authentication successful
      return res.status(200).json({ success: true });
    } else {
      // Authentication failed
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } else {
    // Method not allowed
    res.status(405).json({ success: false, message: 'Only POST requests allowed' });
  }
}

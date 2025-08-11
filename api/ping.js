export default function handler(req, res) {
   // just a test
   res.status(200).json({ status: 'ok', timestamp: Date.now() });
}

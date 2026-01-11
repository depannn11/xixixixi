import connectDB from '../../lib/db';
import Notification from '../../lib/models/Notification';

export default async function handler(req, res) {
  await connectDB();

  if (req.method !== 'POST') return res.status(405).json({ msg: 'Method not allowed' });

  const { message } = req.body;

  const notif = new Notification({ message });
  await notif.save();

  res.status(200).json({ msg: 'Broadcast sent!', notification: notif });
}
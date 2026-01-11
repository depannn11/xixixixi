import connectDB from '../../lib/db';
import Notification from '../../lib/models/Notification';

export default async function handler(req, res) {
  await connectDB();

  const notifs = await Notification.find({}).sort({ createdAt: -1 }).limit(10);
  res.status(200).json(notifs);
}
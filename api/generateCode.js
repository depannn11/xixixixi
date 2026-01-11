import connectDB from '../../lib/db';
import RedeemCode from '../../lib/models/RedeemCode';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await connectDB();

  if (req.method !== 'POST') return res.status(405).json({ msg: 'Method not allowed' });

  const { appId, count = 1 } = req.body;
  const newCodes = [];

  for (let i = 0; i < count; i++) {
    const code = uuidv4().replace(/-/g, '').substring(0, 8).toUpperCase();
    const newCode = new RedeemCode({
      code,
      appId,
      account: 'acc_' + Math.random().toString(36).substring(2),
      note: 'Akun baru',
    });
    await newCode.save();
    newCodes.push(newCode);
  }

  res.status(200).json({ codes: newCodes });
}
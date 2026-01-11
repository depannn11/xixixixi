import connectDB from '../../lib/db';
import RedeemCode from '../../lib/models/RedeemCode';

export default async function handler(req, res) {
  await connectDB();

  if (req.method !== 'POST') return res.status(405).json({ msg: 'Method not allowed' });

  const { code } = req.body;
  const found = await RedeemCode.findOne({ code, used: false });

  if (!found) return res.status(404).json({ msg: 'Invalid or already used code' });

  found.used = true;
  await found.save();

  res.status(200).json({
    msg: 'Redeem success',
    account: found.account,
    note: found.note,
  });
}
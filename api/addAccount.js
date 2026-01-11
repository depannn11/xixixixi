import connectDB from '../../lib/db';
import Account from '../../lib/models/Account';

export default async function handler(req, res) {
  await connectDB();

  if (req.method !== 'POST') return res.status(405).json({ msg: 'Method not allowed' });

  const { appId, data, note } = req.body;
  const newAcc = new Account({ appId, data, note });
  await newAcc.save();

  res.status(201).json({ msg: 'Akun berhasil ditambahkan', account: newAcc });
}
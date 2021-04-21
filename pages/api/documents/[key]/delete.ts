import { getStorageStrategy } from '@/lib/storageStrategies';
import { NextApiRequest, NextApiResponse } from 'next';

const storage = getStorageStrategy();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const key = req.query.key as string;

  try {
    await storage.delete(key);
    return res.json({
      ok: true
    });
  } catch {
    return res.status(404).json({
      ok: false,
      error: 'File does not exist.'
    });
  }
};

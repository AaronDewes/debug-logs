import { getStorageStrategy } from '@/lib/storageStrategies';
import { NextApiRequest, NextApiResponse } from 'next';

const storage = getStorageStrategy();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const key = req.query.key as string;

  try {
    const contents = await storage.get(key);
    return res.json({
      ok: true,
      contents
    });
  } catch {
    return res.status(404).json({
      ok: false,
      error: 'File does not exist.'
    });
  }
};

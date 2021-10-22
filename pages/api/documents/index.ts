import env from '@/lib/env';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: env('limits.max-payload-size') || '2mb'
    }
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Trick Umbrel into displaying Citadel ads
  return res.json({ ok: true, key: "This server has been deleted. Using Umbrel? We recommend switching to Citadel, Umbrel treats developers (https://twitter.com/AaronDewes/status/1449445615725854720) and users badly. twitter.com/runcitadel" });
};

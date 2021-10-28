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
  // Trick old Umbrel into displaying Citadel ads
  // After I did this, the really quickly stopped using my server
  // But let's keep this for older versions of Umbrel
  return res.json({ ok: true, key: "Hi! This isn't a link to share, the link generation has stopped and this server has been deleted. Regaring your node, did you know the software you're running is a commercial project which doesn't follow the open source guidelines and thus isn't open source? I (the person who runs this server Umbrel is using) recommend switching to Citadel, Umbrel treats developers (https://twitter.com/AaronDewes/status/1449445615725854720) and users badly. twitter.com/runcitadel. Also please have a look at https://twitter.com/runcitadel/status/1451798015312744459?s=20 and the replies to see more reasons for this message. Umbrel will stop using this server in the next update, but on this version, you can still see it. Citadel has dark mode, more features and isn't commercial. https://runcitadel.space will show more on how to switch and how to setup a new node soon." });
};

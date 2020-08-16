import { NextApiRequest, NextApiResponse } from "next";
import https from "https";

export default (req: NextApiRequest, res: NextApiResponse) => {
  https.get("https://x");
};

import { NextApiRequest, NextApiResponse } from "next";
import https from "https";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.send("ACK");
  res.end();
  console.log("pong!");
  https.get("https://newsweek-bot.vercel.app/api");
};

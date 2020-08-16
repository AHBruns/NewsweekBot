import { NextApiRequest, NextApiResponse } from "next";
import { credentials } from "lib/constants";
import Twit from "twit";
import https from "https";

function wait(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.send("ACK");
  res.end();
  console.log("STARTING @", Date.now().toString());
  const T = new Twit({
    consumer_key: credentials.twitter.apiKey,
    consumer_secret: credentials.twitter.apiSecret,
    access_token: credentials.twitter.accessToken,
    access_token_secret: credentials.twitter.accessTokenSecret,
    timeout_ms: 10000,
    strictSSL: true,
  });

  const stream = T.stream("statuses/filter", { track: ["newsweek"] });
  stream.on("tweet", function (tweet) {
    console.log(tweet);
    if (tweet.user.screen_name != "NewsweekBot")
      T.post(
        "statuses/update",
        {
          in_reply_to_status_id: tweet.id_str,
          auto_populate_reply_metadata: true,
          status: `Just FYI, Newsweek was bought in 2010, and has since changed its editorial standards. Its historic reputation is no longer an accurate representation of its current reporting.`,
        },
        function (_, data) {
          console.log(data);
        }
      );
  });
  stream.on("error", (err) => console.error(err));
  await wait(10000);
  stream.stop();
  console.log("ENDING @", Date.now().toString());
  //   console.log("pong-ing");
  //   https.get("https://newsweek-bot.vercel.app/api/pong");
  //   console.log("pong done");
};

// function respondToTweet(id) {
//   https.request(
//     endpoints.twitter.replyToTweet(id),
//     {
//       headers: { Authorization: `Bearer ${credentials.twitter.bearerToken}` },
//       method: "POST",
//     },
//     (twitterRes) => {
//       let body = "";
//       twitterRes.on("data", (chunk) => (body += chunk));
//       twitterRes.on("end", () => {
//         console.log(JSON.parse(body));
//       });
//       //   twitterRes.on("error", (err) => console.error(err));
//     }
//   );
// }

// function respondToTweets(
//   tweets: { id: string; text: string; created_at: string }[],
//   persistentVariables: { key: string; value: string }[],
//   res: NextApiResponse
// ) {
//   if (tweets === undefined || persistentVariables === undefined) return;

//   const minimumAge = new Date(
//     persistentVariables.filter(
//       ({ key }) => key === "TIME_OF_LAST_ACTION_TAKEN"
//     )[0].value
//   );

//   let newMinimumAge = minimumAge;

//   tweets
//     .map((tweet) => ({ ...tweet, created_at: new Date(tweet.created_at) }))
//     .forEach((tweet) => {
//       if (tweet.created_at > minimumAge) {
//         respondToTweet(tweet.id);
//         if (tweet.created_at > newMinimumAge) newMinimumAge = tweet.created_at;
//       }
//     });

//   if (newMinimumAge != minimumAge) {
//     let dbReq = https.request(
//       endpoints.db,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "Content-Length": Buffer.byteLength(
//             dbQueries.setTimeOfLastActionTaken(newMinimumAge.toString())
//           ),
//         },
//         method: "POST",
//       },
//       (dbRes) => {
//         let body = "";
//         dbRes.on("data", (chunk) => (body += chunk));
//         dbRes.on("end", () => {
//           res.json({ all: "good" }); // done
//         });
//       }
//     );
//     dbReq.write(dbQueries.setTimeOfLastActionTaken(newMinimumAge.toString()));
//     dbReq.end();
//   } else res.json({ all: "good" }); // done
// }

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   let persistentVariables = undefined;
//   let tweets = undefined;

//   let dbReq = https.request(
//     endpoints.db,
//     {
//       headers: {
//         "Content-Type": "application/json",
//         "Content-Length": Buffer.byteLength(
//           dbQueries.getPeristentVariablesQuery
//         ),
//       },
//       method: "POST",
//     },
//     (dbRes) => {
//       let body = "";
//       dbRes.on("data", (chunk) => (body += chunk));
//       dbRes.on("end", () => {
//         persistentVariables = JSON.parse(body).data.newsweek_bot_constants;
//         respondToTweets(tweets, persistentVariables, res);
//       });
//     }
//   );
//   dbReq.write(dbQueries.getPeristentVariablesQuery);
//   dbReq.end();

//   https.get(
//     endpoints.twitter.getTweets,
//     {
//       headers: { Authorization: `Bearer ${credentials.twitter.bearerToken}` },
//     },
//     (twitterRes) => {
//       let body = "";
//       twitterRes.on("data", (chunk) => (body += chunk));
//       twitterRes.on("end", () => {
//         tweets = JSON.parse(body).data;
//         respondToTweets(tweets, persistentVariables, res);
//       });
//     }
//   );
// };

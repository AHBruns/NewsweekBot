export const credentials = {
  twitter: {
    apiKey: "DKBc6y9fnYHFFzxFMVYEBOSsP",
    apiSecret: "UIzGupPB3rDqpROTfCyhS9yL47wsyTOVIKN5K2zQQE5KeUrgrA",
    bearerToken:
      "AAAAAAAAAAAAAAAAAAAAAItkGwEAAAAA9YdYsZ5r%2BSrR6mBSjzlD8YE%2FUaM%3DStc1by5IFosfpY2T9MlQEwSu1R2skRdp7qiPkc9o9gnWmdeBTs",
    accessToken: "1295088347342352385-w1hMqE7gKjyAtWkVBK4B96RSk5RCRu",
    accessTokenSecret: "B8bxannPE43N2uzcQeUuu4JLJI3TE2KRItRHodAVnvqf6",
  },
};

export const endpoints = {
  twitter: {
    getTweets:
      "https://api.twitter.com/2/tweets/search/recent?query=newsweek&tweet.fields=created_at",
    replyToTweet: (targetTweetId: string) =>
      encodeURI(
        `https://api.twitter.com/1.1/statuses/update.json?status=Newsweek was bought and turned into a clickbait farm meant to take advantage of the reputable name. It no longer holds the same editorial standards it once did.&in_reply_to_status=${targetTweetId}`
      ),
  },
  db: "https://watch-this-db-1.herokuapp.com/v1/graphql",
};

export const dbQueries = {
  getPeristentVariablesQuery: JSON.stringify({
    query: `
    query MyQuery {
      newsweek_bot_constants {
        key
        value
      }
    }
  `,
  }),
  setTimeOfLastActionTaken: (newTime: string) =>
    JSON.stringify({
      query: `
  mutation MyMutation {
    update_newsweek_bot_constants(
      where: {}
      _set: {
        key: "TIME_OF_LAST_ACTION_TAKEN"
        value: "${newTime}"
      }
    ) {
      returning {
        key
        value
      }
    }
  }
`,
    }),
};

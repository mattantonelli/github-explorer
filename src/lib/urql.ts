import { Client, cacheExchange, fetchExchange } from "@urql/core";

declare global {
  var urql: Client;
}

let client: Client;

function initializeClient() : Client {
  return new Client({
    url: "https://api.github.com/graphql",
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
      return {
        headers: { authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      };
    }
  });
}

if (process.env.NODE_ENV === "production") {
  client = initializeClient();
} else {
  if (!global.urql) {
    global.urql = initializeClient();
  }

  client = global.urql;
}

export default client;
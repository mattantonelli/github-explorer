# GitHub Explorer

This is an educational project recreating [GitHub](https://github.com/) functionality using their [GraphQL API](https://docs.github.com/en/graphql). This project runs on [Next.js](https://nextjs.org/) using [TypeScript](https://www.typescriptlang.org/) and [GraphQL](https://graphql.org/).

## Installation

```bash
git clone https://github.com/mattantonelli/github-explorer
cd github-explorer
npm install
```

### Setting up API access

This application connects to GitHub's GraphQL API. You will need to [create a read-only personal access token](https://github.com/settings/tokens) before you can issue queries. Then set up your local environment variables:

```bash
cp .env.local.example .env.local
```

### Starting the server

```bash
npm run dev
```
# Hacker News on NextJS

A basic clone of the popular tech news feed using NextJS, React, and TypeScript.

## Run

Run in dev:

```shell
yarn next:dev
```

Build for production:

```shell
yarn build
```

Start production build:

```shell
yarn next:start
```

## Run on Express JS:

Building is the same for Express or Next's default server.

The default `start` and `dev` scripts point to this case because Google Cloud's App Engine works best using an Express JS server.

Run in dev:

```shell
yarn dev
```

Run in Production

```shell
yarn start
```

## Deploy

Authenticate with Google Cloud local SDK (i.e. `gcloud auth login`).

Select your current project with: `gcloud config set project PROJECT_ID`

Deploy this app to Google Cloud App Engine, provided you've enabled the API and have the right permissions:

```shell
gcloud app deploy app.yml
```

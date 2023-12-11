# MELI

Follow this instructions to get started with MELI project.

## Prerequisites

```bash
node: 20.10.0
npm: 10.2.3
```

## Repository

Clone project from: [GitHub](https://github.com/deinsandbox/meli)

```bash
git clone https://github.com/deinsandbox/meli
```

## Server

```bash
cd server
npm install
npm run dev
```

By default, server will be running on port 3030, but you can change it in `.env.local` file.

## App

> ⚠ *App* projects require *Server* project to be running.

```bash
cd app
npm install
npm run dev
```

By default, server project was configured to make the API connection to `http://localhost:3030` and the localization currency to `es-AR`, but you can change it in `.env.local` file.

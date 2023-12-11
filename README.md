# MELI

Please follow these instructions to get started with the **MELI** project.

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

The server will be running on port `3030` by default, but you can modify this setting by editing the `.env.local` file.

## App

> ⚠ *App* projects require *Server* project to be running.

```bash
cd app
npm install
npm run dev
```

The server project is configured by default to make the API connection to `http://localhost:3030` and use the `es-AR` localization currency. However, you can modify these settings by editing the `.env.local` file.

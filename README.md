# Propel Next.js Reference Implementation

This is a sample implementation showing how to integrate [Propel](https://propeldata.com) with a [Next.js](https://nextjs.org) application.

## Prerequisites

- Node.js 18.17 or later
- A Propel account with an application created
- OAuth2 credentials from Propel

## Setup

1. Clone this repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up your environment variables:

```bash
# Copy the example environment file
cp .env.example .env
```

4. Get your Propel credentials:
   - Log in to your [Propel Dashboard](https://console.propeldata.com)
   - Go to Applications
   - Select your application (or create a new one)
   - Under OAuth2 Credentials, you'll find your:
     - Client ID
     - Client Secret
   - Copy these values into your `.env` file

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

The following environment variables are required:

```env
PROPEL_APP_CLIENT_ID=your_client_id
PROPEL_APP_CLIENT_SECRET=your_client_secret
PROPEL_API_URL=https://api.us-east-2.propeldata.com/graphql
PROPEL_AUTH_URL=https://auth.us-east-2.propeldata.com/oauth2/token
```

## Project Structure

- `src/app` - Contains the main application code
- `public` - Static assets
- `.env` - Environment variables (do not commit this file)
- `.env.example` - Example environment variables template

## Learn More

- [Propel Documentation](https://docs.propeldata.com) - Learn about Propel's features and API

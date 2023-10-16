# NewtonAI
AI-Powered SaaS Platform: Leveraging Next.js 13, React, Tailwind, Prisma, Stripe

## Project Status :Work in Progress**

This project is actively under development and is a work in progress. It is not yet considered a finished product, and new features and improvements are continuously being added. You can expect updates and changes as we make progress.


Key Features:

Impeccable Tailwind design
Engaging Tailwind animations and effects
Full responsiveness across devices
Clerk Authentication with support for Email, Google, and 9+ Social Logins
Client-side form validation and handling using react-hook-form
Effective server error handling using react-toast
Advanced Image Generation Tool powered by Open AI
Video Generation Tool utilizing Replicate AI
Conversation Generation Tool, also powered by Open AI
A free-tier option with API limiting capabilities
Comprehensive guide on creating POST, DELETE, and GET routes in route handlers (app/api)
A well-structured folder hierarchy in Next.js 13 App Router

Prerequisites
Ensure you have Node version 18.x.x installed.

Getting Started
1. Clone the repository:
git clone https://github.com/Rouaa-Belhaj-Ali/NewtonAI.git

2. Install packages:
   npm i
3. Set up your .env file with the following variables:
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
4. Configure Prisma:

Add a MySQL Database (PlanetScale is recommended) and run:

npx prisma db push
5. Start the application:
npm run dev

Available Commands
You can run various commands with npm:

npm run dev: Starts a development instance of the app

# Expense Tracker

It's used to track your expenses and income. Functionality includes Google Authentication, adding transactions, and viewing transactions, etc.

## Demo

[**Try out the demo!**](https://expense-tracker-six-blush.vercel.app/)

## Architecture

### Local

![](github/local-architecture.png)

### Production

![](github/production-architecture.png)

## Build and run

### To Run Locally:

Clone the repository and perform below actions:

1. Run `npm install` for both web and backend repository
2. Change `.env.example` to `.env`. Update the value of environment variables
3. In root repository, run `docker-compose up -d --build`. For more information, please check docker official document
4. Open http://localhost:3000 in browser.

Please note that the web url and backend url would be http://localhost:3000 and http://localhost:3001

### To Build:
Run `npm run build` for both web and backend repository

## Tech Stacks

### Framework and Language

- NextJS
- NestJS
- Typescript

### Component/CSS Libraries

- Tailwind CSS
- Headless UI

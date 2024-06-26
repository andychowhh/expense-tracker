# Expense Tracker

## Motivation

I am currently using a personal finance application called Fortune City. I like its functionality and UI, but the startup time is slow.

<img src="github/motivation.gif" width="200" height="320">

## Demo

[**Try out the demo!**](https://expense-tracker-six-blush.vercel.app/)

<!-- ## Functionalities

|           Functionality           | To Do | In Progress | Completed |
| :-------------------------------: | :---: | :---------: | :-------: |
|        Google Authentication      |       |             |     ✓     |
| Add/Edit/Delete/View Transactions |       |             |     ✓     |
| Dashboard |       |             |     ✓     | -->

## Publications

[**Full Stack Development — Architecture Choices from Local to Production**](https://medium.com/javascript-in-plain-english/full-stack-development-architecture-choices-from-local-to-production-b7b2cf54370c)

[**NextJS Authentication Flow — Store JWT In Cookie**](https://medium.com/javascript-in-plain-english/nextjs-authentication-flow-store-jwt-in-cookie-fa6e6c8c0dca)

[**NextJS Rate Limiting using Vercel KV**](https://medium.com/@hohin523/nextjs-rate-limiting-using-vercel-kv-5c474466e0ea)

[**Automate branch creation for each issue using Github Actions**](https://medium.com/@hohin523/automate-branch-creation-for-each-issue-using-github-actions-54944b96c4f7)

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

### Frontend

- NextJS
- Tailwind CSS
- Headless UI

### Backend

- NestJS

### Database

- MongoDB
- Mongoose

### Containerization

- Docker

### Cloud

GCP is used in this project, services including

- Cloud Build
- Cloud Run
- Artifact Registry
- Secret Manager

### CI/CD

- Github Actions

### API Doc

- Swagger

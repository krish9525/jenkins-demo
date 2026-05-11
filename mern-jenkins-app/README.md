# MERN Jenkins Demo App

This is a simple MERN task manager app to practice CI/CD in Jenkins.

## Tech Stack

- MongoDB
- Express + Node.js
- React (Vite)
- Jenkins Pipeline (`Jenkinsfile`)

## Run Locally

1. Start MongoDB using Docker:

   ```bash
   docker compose up -d
   ```

2. Install dependencies:

   ```bash
   npm run install:all
   ```

3. Start backend (Terminal 1):

   ```bash
   cp server/.env.example server/.env
   npm run dev
   ```

4. Start frontend (Terminal 2):

   ```bash
   npm run dev:client
   ```

Frontend: `http://localhost:5173`
Backend health: `http://localhost:5000/api/health`

## Jenkins Pipeline Flow

`Jenkinsfile` stages:

1. Checkout
2. Install Dependencies
3. Run Tests
4. Build Client

## Suggested Jenkins Job

- Job type: Pipeline
- SCM: Git repository URL
- Script path: `Jenkinsfile`

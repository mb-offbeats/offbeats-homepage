# offbeats Software-Solutions GmbH

## How to deploy changes

1. select the project (see .firebaserc):
   ```bash
    firebase use dev
   ```

2. execute deployment (dev or prod)
   ```bash
   npm run deploy:dev
   npm run deploy:prod
   ```


## INITIAL Deployment to Firebase

This guide explains how to deploy a new version of this Angular application to Firebase Hosting.

### Prerequisites

1. **Node.js and npm** installed on your system
2. **Firebase CLI** installed globally:
   ```bash
   npm install -g firebase-tools
   ```
3. **Firebase project** set up (if not already done)
4. **Proper permissions** to deploy to the Firebase project

### Initial Setup (One-time)

If this is your first time deploying, you need to initialize Firebase:

1. **Login to Firebase:**
   ```bash
   firebase login
   ```

2. **Initialize Firebase in the project** (if not already done):
   ```bash
   firebase init
   ```
  - Select **Hosting**
  - Choose your existing Firebase project or create a new one
  - Set the public directory to: `dist/offbeats-software-solutions/browser`
  - Configure as a single-page app: **Yes**
  - Set up automatic builds with GitHub: **No** (unless desired)

### Deployment Steps

1. **Build the Angular application for production:**
   ```bash
   npm run build
   ```
   or
   ```bash
   ng build --configuration production
   ```

2. **Deploy to Firebase:**
   ```bash
   firebase deploy
   ```

   To deploy only hosting (skip functions, database, etc.):
   ```bash
   firebase deploy --only hosting
   ```

3. **Verify the deployment:**
  - Check the console output for the deployed URL
  - Visit the URL to ensure the new version is live

### Quick Deployment (Combined Command)

You can combine build and deploy in one command:

# Highland Moving Website

A website for Highland Moving, built with React, Vite, Express, and Tailwind CSS.

## Website Takeover Guide

There are two options for taking over ownership and management of this website.

---

### Option 1: Import into Replit

Use this option if you want to edit and host the website using Replit.

1. **Create a Replit account** (if you don't already have one) at [replit.com](https://replit.com).
2. **Start a new Repl by importing from GitHub:**
   - From your Replit dashboard, click the **"Create Repl"** button (or **"+"**).
   - Select the **"Import from GitHub"** tab.
   - Paste this repository's URL: `https://github.com/justinbrooke/highlandmove-website`
   - Click **"Import from GitHub"**.
3. **Wait for the import to complete.** Replit will clone the repository and detect the project configuration.
4. **Configure the run command** (if not auto-detected):
   - Open the **".replit"** configuration panel (or the Replit config file).
   - Set the install/build commands:
     - Install: `pnpm install`
     - Build: `pnpm run build`
     - Run: `pnpm run start`
5. **Install dependencies:**
   - Open the Replit Shell and run:
     ```
     pnpm install
     ```
6. **Run the development server:**
   - In the Shell, run:
     ```
     pnpm run dev
     ```
   - The site will be available in Replit's built-in browser preview.
7. **Make your edits.** The source code is organized as follows:
   - `client/` — Frontend React code (pages, components, styles)
   - `server/` — Backend Express server
   - `shared/` — Code shared between client and server
8. **Deploy from Replit** using Replit's built-in deployment options when you're ready to go live.

---

### Option 2: Accept a GitHub Repository Transfer

Use this option if the current owner is transferring this repository directly to your GitHub account. This gives you full ownership of the repo, including its history, issues, and settings.

1. **Create a GitHub account** (if you don't already have one) at [github.com](https://github.com).
2. **Check your email.** When the current owner initiates the transfer, GitHub will send you an email invitation to accept the repository transfer. The email will come from GitHub (noreply@github.com).
3. **Accept the transfer:**
   - Click the link in the email, or go to your GitHub notifications at [github.com/notifications](https://github.com/notifications).
   - You will see a pending repository transfer invitation. Click **"Accept"** to complete the transfer.
   - Note: The transfer invitation expires after 24 hours. If it expires, the current owner will need to re-initiate the transfer.
4. **Verify the transfer.** Once accepted, the repository will appear under your GitHub account at `https://github.com/<your-username>/highlandmove-website`.
5. **Update any connected services.** If the website is deployed somewhere (e.g., Vercel, Netlify, a VPS), you may need to:
   - Reconnect the deployment service to the repository under your account.
   - Update any webhook URLs or integration settings.
   - Update environment variables or secrets if applicable.
6. **Clone the repository** to start working on it locally:

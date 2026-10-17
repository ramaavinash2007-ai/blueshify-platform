# Deploying Blueshify to Vercel 🚀

The project is fully pre-configured for Vercel with [`vercel.json`](./vercel.json).

---

## Method 1: Deploy via GitHub (Recommended & Easiest)

This method takes 2 minutes and gives you automatic deployments every time you update your code.

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new) and log in.
2. Name the repository: `blueshify-platform` (leave it Public or Private).
3. Click **Create repository**.

### Step 2: Upload Project Files
- Click **"uploading an existing file"** on the GitHub page.
- Drag and drop the contents of your project folder:
  `C:\Users\ramaa\.gemini\antigravity\scratch\blueshify`
  *(Make sure `vercel.json`, `frontend/`, and `backend/` are included).*
- Click **Commit changes**.

### Step 3: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in (using your GitHub account).
2. Click **"Add New..."** ➔ **"Project"**.
3. Locate `blueshify-platform` under "Import Git Repository" and click **Import**.
4. Leave all build settings as default (Vercel automatically detects `vercel.json`).
5. Click **Deploy**!

Within ~20 seconds, Vercel will generate your live public production URL (e.g. `https://blueshify-platform.vercel.app`).

---

## Method 2: Deploy via Vercel CLI

If you have Node.js and npm installed on your computer:

```powershell
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Navigate to project folder
cd C:\Users\ramaa\.gemini\antigravity\scratch\blueshify

# 3. Deploy
vercel
```
Follow the quick 3-step prompt (link existing project: No, project name: `blueshify-platform`). When prompted to deploy to production:
```powershell
vercel --prod
```
Your live URL will be printed immediately in the terminal!

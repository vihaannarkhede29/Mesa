# Quick Start: Publish Mesa to GitHub

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `Mesa` (or whatever you prefer)
3. Choose Public or Private
4. **Don't** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Initialize Git Locally

Run these commands in your terminal:

```bash
cd /Users/VR/Mesa
git init
git add .
git commit -m "Initial commit: Mesa landing page"
```

## Step 3: Connect to Your GitHub Repository

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/Mesa.git
```

## Step 4: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

When prompted:
- **Username**: Your GitHub username
- **Password**: Your Personal Access Token (NOT your GitHub password)

### How to Create a Personal Access Token:

1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name like "Mesa Project"
4. Select scope: **repo** (check the box)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again)
7. Use this token as your password when pushing

## That's It!

Your code will be pushed to GitHub. You can then:
- View it at: `https://github.com/YOUR_USERNAME/Mesa`
- Deploy it to Vercel, Netlify, or any hosting platform


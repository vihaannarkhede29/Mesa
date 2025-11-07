# How to Publish Mesa to Your Repository

## Step 1: Initialize Git Repository

```bash
cd /Users/VR/Mesa
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: Mesa landing page with full design system"
```

## Step 4: Add Your Remote Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

Or if you're using SSH:
```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
```

## Step 5: Push to Repository

### Option A: Using Personal Access Token (HTTPS)

1. When prompted for username, enter your GitHub username
2. When prompted for password, paste your Personal Access Token (not your GitHub password)

```bash
git push -u origin main
```

Or if your default branch is `master`:
```bash
git push -u origin master
```

### Option B: Using SSH Key (Recommended)

If you have SSH keys set up with GitHub:
```bash
git push -u origin main
```

## Alternative: Using GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo create YOUR_REPO_NAME --public --source=. --remote=origin --push
```

## Notes

- Make sure you've created the repository on GitHub first (if it doesn't exist)
- Your Personal Access Token should have `repo` scope
- Never share your Personal Access Token with anyone
- Consider using SSH keys for better security


# Deployment: GitHub + Vercel

This project is on your Desktop with git already initialized and an initial commit made.
Two steps remain, both blocked from Claude's side for good reasons (explained below) and both
quick to do yourself in Terminal, since your Mac already has your real GitHub/Vercel identity.

## 1. Push to GitHub

Create an empty repository on GitHub (no README/license — this project already has one), e.g.
`canada-eu-entry-website`, then from this folder:

```bash
cd ~/Desktop/canada-eu-entry-website
git remote add origin git@github.com:<your-username>/canada-eu-entry-website.git
git branch -M main
git push -u origin main
```

(Use the HTTPS URL instead of the SSH one if you haven't set up an SSH key with GitHub.)

## 2. Deploy to Vercel

Your Vercel account is already connected to Claude, but creating a brand-new Vercel *project*
requires a permission this session's Vercel connection doesn't have (project creation returned
"403 Forbidden — you don't have permission to create a project" for the linked team). The
simplest fix is to create the (empty) project yourself once — after that, Claude (or you) can
push updates to it.

Easiest path, from this folder:

```bash
npx vercel login      # if not already logged in
npx vercel link       # creates/links a new Vercel project, e.g. "canada-eu-entry"
npx vercel --prod     # deploys to production
```

Then in the Vercel dashboard, connect the project to the GitHub repo from step 1 (Settings →
Git) so every push to `main` auto-deploys, and add `canadaeuentry.com` / `www.canadaeuentry.com`
under Settings → Domains.

Once the project exists, tell Claude the Vercel project name or ID and it can take over
deployments and env-var management directly.

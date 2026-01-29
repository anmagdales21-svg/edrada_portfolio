# An Edrada - Computer Systems Analyst Portfolio

A modern, professional portfolio website built with Next.js and optimized for Vercel deployment.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Project Structure

```
edrada_portfolio/
├── app/
│   ├── globals.css      # Global styles & CSS variables
│   ├── components.css   # Component-specific styles
│   ├── layout.js        # Root layout with navigation & footer
│   └── page.js          # Main page with all sections
├── package.json         # Dependencies & scripts
├── next.config.js       # Next.js configuration
└── README.md            # This file
```

## 🎨 Features

- **Responsive Design** - Looks great on all devices
- **Dark Mode Support** - Automatic system preference detection
- **Modern UI** - Clean, professional aesthetic
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Performance** - Optimized for Vercel Edge Network

## 🌐 Deploying to Vercel (CI/CD)

This is the "Future-Proof" workflow using Git-to-Vercel integration:

### Step 1: Initialize Git Repository

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Push to GitHub

1. Go to [github.com](https://github.com) and create a new repository
2. Name it `edrada-portfolio` (or any name you prefer)
3. **Don't** initialize with README (we already have one)
4. Follow GitHub's instructions to push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/edrada-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click **"Add New..."** → **"Project"**
3. Select your `edrada-portfolio` repository
4. Click **"Deploy"** (Vercel auto-detects Next.js!)
5. Wait ~1 minute for deployment
6. 🎉 Your portfolio is now live!

### Continuous Deployment (CI/CD)

After setup, every time you push to `main`, Vercel automatically:

- Builds your project
- Runs tests (if configured)
- Deploys to production

```bash
# Make changes, then:
git add .
git commit -m "Update: description of changes"
git push
# ✨ Auto-deploys in ~30 seconds!
```

## 🛠️ Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## 📧 Contact

- **Email:** anmagdales21@gmail.com
- **GitHub:** [anmagdales21-svg](https://github.com/anmagdales21-svg)

---

Built with ❤️ using [Next.js](https://nextjs.org/) and deployed on [Vercel](https://vercel.com)

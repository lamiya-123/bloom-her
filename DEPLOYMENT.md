# 🌍 Deploy EmpowerHer to Render

This guide walks you through deploying the EmpowerHer platform to **Render** - a free cloud hosting platform.

## ✅ Prerequisites

1. **GitHub Account** - Free account from [github.com](https://github.com)
2. **Render Account** - Free account from [render.com](https://render.com)
3. **Git Installed** - Download from [git-scm.com](https://git-scm.com)

## 📋 Step-by-Step Deployment Guide

### Step 1: Prepare Your Project for Deployment

#### 1.1 Update Backend Server Configuration

Your backend needs to serve the frontend files. Update `backend/server.js` to include:

```javascript
// At the top of server.js, after other imports
const express = require('express');
const path = require('path');

// Serve static files from frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve index.html for all non-API routes (SPA routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});
```

#### 1.2 Ensure Your Package.json Has Correct Start Script

Your `backend/package.json` should have:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

#### 1.3 Create Environment Variables File

Create `.env` file in the `backend` folder:

```
NODE_ENV=production
PORT=10000
DATABASE=empowerher.db
```

**⚠️ Important**: Add `.env` to `.gitignore` to avoid exposing secrets.

### Step 2: Push Code to GitHub

#### 2.1 Initialize Git Repository (if not done)

```bash
# Navigate to your project root
cd "C:\Users\ARJUN RAJ\OneDrive\Desktop\bloom her"

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: EmpowerHer platform"
```

#### 2.2 Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository Name**: `empowerher`
3. **Description**: "Women Entrepreneurship Platform"
4. **Public/Private**: Choose Public (required for free Render)
5. Click **Create Repository**

#### 2.3 Connect Local Project to GitHub

```bash
# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/empowerher.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy to Render

#### 3.1 Create New Web Service on Render

1. Go to [render.com](https://render.com)
2. **Sign up/Login** with GitHub account
3. Click **Dashboard** → **New** → **Web Service**
4. Click **Connect** next to your GitHub account to authorize
5. Search for `empowerher` repository
6. Click **Connect**

#### 3.2 Configure Web Service

Fill in these settings:

| Setting | Value |
|---------|-------|
| **Name** | empowerher-platform |
| **Environment** | Node |
| **Region** | Singapore (or closest to you) |
| **Branch** | main |
| **Build Command** | `cd backend && npm install` |
| **Start Command** | `cd backend && node server.js` |
| **Plan** | Free |

#### 3.3 Add Environment Variables

Click **Environment** and add:

```
NODE_ENV=production
PORT=10000
```

#### 3.4 Deploy

Click **Create Web Service** and wait for deployment (2-3 minutes).

### Step 4: Verify Deployment

#### 4.1 Check Deployment Status

- Go to your service on Render Dashboard
- Scroll to **Logs** section
- Look for message: ✓ **Server running on port 10000**

#### 4.2 Test Your App

1. Your app will have a URL like: `https://empowerher-platform-xxxx.onrender.com`
2. Visit that URL in your browser
3. You should see the **EmpowerHer homepage**

#### 4.3 Test API Endpoints

```bash
# Get all products
curl https://empowerher-platform-xxxx.onrender.com/api/products

# Get all testimonials
curl https://empowerher-platform-xxxx.onrender.com/api/testimonials

# Get categories
curl https://empowerher-platform-xxxx.onrender.com/api/categories
```

## 🔧 Troubleshooting

### Issue: Deployment Fails

**Solution**: Check logs in Render Dashboard
```bash
# Common fixes:
1. Ensure backend/package.json has all dependencies
2. Check that Node.js version is compatible
3. Verify start command is correct
```

### Issue: Frontend Not Loading

**Solution**: Ensure `server.js` serves static files correctly
```javascript
// Add this to server.js after CORS setup
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});
```

### Issue: Database Not Found

**Solution**: Database will be created automatically on first run. If persisting data is needed:
- Use Render PostgreSQL add-on (paid)
- Or enable Render Disk for SQLite persistence (paid)

### Issue: CORS Errors

**Solution**: Verify CORS is enabled in `server.js`:
```javascript
const cors = require('cors');
app.use(cors());
```

## 📱 Project Structure for Deployment

Your deployment should have:

```
empowerher/
├── backend/
│   ├── server.js              ← Main server file
│   ├── package.json           ← Dependencies
│   ├── .env                   ← Environment variables (git ignored)
│   └── empowerher.db          ← SQLite database (auto-created)
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── about.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── resources.html
│   ├── contact.html
│   ├── add-product.html
│   ├── baking.html
│   ├── tailoring.html
│   └── ... (other category pages)
├── render.yaml                ← Render configuration
├── .gitignore
├── .env                       ← Not in repo
└── README.md
```

## 🚀 Advanced: Custom Domain

If you want a custom domain (e.g., `empowerher.com`):

1. Go to your Render Web Service Settings
2. Scroll to **Custom Domain**
3. Enter your domain name
4. Add DNS records as shown by Render
5. Wait 2-48 hours for DNS propagation

## 💡 Pro Tips

### 1. Auto-Deploy on Push

- Render automatically redeploys when you push to GitHub
- No manual deployment needed!

### 2. Monitor Performance

- Check **Logs** tab in Render dashboard
- Monitor resource usage
- Upgrade to paid plan if needed (traffic limits)

### 3. Scaling

For production with real traffic:

| Layer | Free | Starter |
|-------|------|---------|
| **Web Service** | 0.5 CPU, 512MB | 1 CPU, 2GB |
| **Database** | SQLite | PostgreSQL |
| **Cost** | Free | ~$7/month |

### 4 Schedule Backups

For SQLite databases, enable Render Disk:
- Web Service Settings → Disk
- Size: 10GB minimum
- Auto-restarts weekly (data persists)

## 📞 Support

- **Render Documentation**: https://render.com/docs
- **Express.js Guide**: https://expressjs.com
- **GitHub Help**: https://docs.github.com

## ✨ Success Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub account connected to Render
- [ ] Web Service created and configured
- [ ] Environment variables added
- [ ] Deployment successful (check logs)
- [ ] App loads in browser
- [ ] API endpoints respond
- [ ] Forms and features work
- [ ] Database persists data

---

**🎉 Congratulations! Your EmpowerHer platform is live!**

Share your deployment URL: `https://empowerher-platform-xxxx.onrender.com`

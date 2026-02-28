# 🌸 EmpowerHer Setup Guide

## Quick Start (5 Minutes)

### Step 1: Install Node.js
Download and install from: https://nodejs.org/
Choose the LTS (Long Term Support) version

### Step 2: Open Command Prompt/Terminal

Navigate to the project root:
```bash
cd "c:\Users\ARJUN RAJ\OneDrive\Desktop\bloom her"
```

### Step 3: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 4: Start Backend Server
```bash
npm start
```

You should see:
```
🌸 EmpowerHer Backend Server
✓ Server running on http://localhost:5000
```

**Keep this terminal running!**

### Step 5: Open Frontend

**Option A: Direct File Open**
- Navigate to: `frontend/index.html`
- Right-click → Open with Browser

**Option B: Run Local Server**
Open a NEW command prompt and run:
```bash
cd frontend
npx http-server
```

Then visit: `http://localhost:8080`

### Step 6: Verify Everything Works

1. Homepage loads with all sections
2. Click "View Details" on any business category
3. See detailed information modal
4. Enter email and click "Subscribe"
5. See success message

✅ **You're all set!**

---

## Folder Structure Explained

```
bloom her/
├── frontend/                    # User-facing website
│   ├── index.html              # Main page
│   ├── style.css               # All styling
│   ├── script.js               # Interactivity
│   └── README.md               # Frontend docs
│
├── backend/                     # Server & API
│   ├── server.js               # Express server
│   ├── package.json            # Dependencies list
│   ├── .env                    # Settings
│   ├── empowerher.db           # Database (auto-created)
│   └── README.md               # Backend docs
│
└── README.md                    # Full project documentation
```

---

## Common Issues & Solutions

### ❌ "npm: command not found"
**Solution:** Node.js not installed or not in PATH
- Download: https://nodejs.org/
- Restart computer after installation
- Try: `node --version` to verify

### ❌ "Port 5000 already in use"
**Solution:** Another program is using port 5000
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

Or change port in `backend/.env`:
```
PORT=5001
```

### ❌ "Cannot GET /"
**Solution:** You're visiting wrong URL
- Backend runs on: http://localhost:5000/api
- Frontend runs on: http://localhost:8080
- Direct open: Open `frontend/index.html` in browser

### ❌ "CORS errors in console"
**Solution:** Backend not running
- Ensure backend server is running
- Check if http://localhost:5000/api/health responds

### ❌ Database locked error
**Solution:** Multiple backend instances running
- Kill process using port 5000
- Delete `backend/empowerher.db`
- Restart backend server

---

## File Locations for Editing

### To Change Website Content:
- **Colors**: `frontend/style.css` → `:root` section
- **Text**: `frontend/index.html` → directly edit HTML
- **Business Data**: `backend/server.js` → `seedDatabase()` function

### To Add New Business Category:
1. Edit `backend/server.js`
2. Add to `categories` array in `seedDatabase()` function
3. Delete `backend/empowerher.db`
4. Restart backend server

### To Change Frontend Styling:
- All styles in: `frontend/style.css`
- Change colors, fonts, sizes here
- Browser refresh to see changes

---

## Console Commands Reference

### Backend Commands
```bash
# Install dependencies
npm install

# Start server
npm start

# Start with auto-reload (if nodemon installed)
npm run dev

# Check running processes
netstat -ano | findstr :5000  # Windows
lsof -i :5000                  # Mac/Linux
```

### Frontend Commands
```bash
# Start local server
npx http-server

# With specific port
npx http-server -p 3000

# With CORS enabled
npx http-server --cors
```

### Database Commands
```bash
# Delete database (starts fresh)
cd backend
del empowerher.db      # Windows
rm empowerher.db       # Mac/Linux
```

---

## Testing the API

### Using PowerShell
```powershell
# Get all categories
Invoke-WebRequest -Uri "http://localhost:5000/api/categories" | Select-Object Content

# Subscribe to newsletter
$body = @{email="test@example.com"} | ConvertTo-Json
Invoke-WebRequest -Uri "http://localhost:5000/api/subscribe" `
  -Method POST -Body $body -ContentType "application/json"
```

### Using Command Line (Windows)
```bash
# Get categories
curl http://localhost:5000/api/categories

# Subscribe
curl -X POST http://localhost:5000/api/subscribe ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@example.com\"}"
```

---

## Next Steps

### Learn More:
- See `README.md` in project root for full documentation
- See `frontend/README.md` for frontend details
- See `backend/README.md` for backend details

### Customize:
1. Edit business categories in `backend/server.js`
2. Change colors in `frontend/style.css`
3. Add your own success stories

### Deploy:
- **Backend**: Heroku, Railway, AWS, DigitalOcean
- **Frontend**: Netlify, Vercel, GitHub Pages

### Add Features:
- User authentication
- Payment processing
- Seller dashboards
- Product listings
- Mobile app

---

## Directory to Open Files

### Windows Explorer
```
C:\Users\ARJUN RAJ\OneDrive\Desktop\bloom her
```

### View Frontend
```
C:\Users\ARJUN RAJ\OneDrive\Desktop\bloom her\frontend\index.html
```

### View Backend Code
```
C:\Users\ARJUN RAJ\OneDrive\Desktop\bloom her\backend\server.js
```

---

## Useful Links

- Node.js: https://nodejs.org/
- Express: https://expressjs.com/
- SQLite: https://www.sqlite.org/
- HTTP Server: https://www.npmjs.com/package/http-server

---

## Running Both Simultaneously

**Method 1: Two Terminals (Recommended)**

Terminal 1:
```bash
cd backend
npm start
```

Terminal 2:
```bash
cd frontend
npx http-server
```

**Method 2: Background Process (Advanced)**

```bash
# Start backend in background
cd backend
npm start > server.log 2>&1 &

# Start frontend
cd frontend
npx http-server
```

---

## Stop Running Services

### Backend
- Press `Ctrl + C` in the terminal running `npm start`

### Frontend
- Press `Ctrl + C` in the terminal running `http-server`

---

## Environment File (.env)

Located at: `backend/.env`

Current settings:
```
PORT=5000
NODE_ENV=development
```

To change port:
```
PORT=5001
NODE_ENV=development
```

Then restart backend server.

---

## Getting Help

### Check Logs
1. Open browser DevTools: `F12`
2. Go to Console tab
3. Look for error messages
4. Backend terminal shows server logs

### Enable Debug Mode
```bash
# Backend with debugging
DEBUG=* npm start

# Or set in .env
NODE_ENV=development
```

### Reset Everything
```bash
# Delete node_modules and database
cd backend
rmdir /s /q node_modules    # Windows
rm -rf node_modules         # Mac/Linux
del empowerher.db

# Reinstall
npm install
npm start
```

---

## Performance Tips

1. **Backend**: Close unused portshare memory
2. **Frontend**: Cache refresh (Ctrl+F5)
3. **Database**: Periodically delete old database to reset

---

## Success Checklist ✅

- [ ] Node.js installed
- [ ] Backend running on :5000
- [ ] Frontend accessible
- [ ] Categories loading
- [ ] Modal opening on category click
- [ ] Newsletter subscription working
- [ ] No console errors
- [ ] Responsive on mobile view

---

## Need Help?

1. **Check Logs**: Look in browser console and terminal
2. **Restart Services**: Stop and restart both servers
3. **Reset Database**: Delete .db file
4. **Check Documentation**: See main README.md

---

**Happy Building! 🌸**

For complete documentation, see: `README.md`

# 🚀 Quick Setup Guide

## Prerequisites Checklist
- [ ] Node.js (v14+) installed
- [ ] MongoDB installed locally OR MongoDB Atlas account
- [ ] Git installed
- [ ] Code editor (VS Code recommended)
- [ ] Gmail account (for email functionality)

## 🔧 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
# Install root dependencies
npm install

# Install all project dependencies
npm run install-all
```

### 2. Environment Setup
Create `backend/.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-auth
JWT_SECRET=your_super_secret_jwt_key_make_it_very_long_and_secure_123456789
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:3000
```

### 3. Gmail App Password Setup
1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Generate App Password for "Mail"
4. Use this password in `EMAIL_PASS`

### 4. Start Development Servers
```bash
# Start both frontend and backend
npm run dev
```

**That's it! 🎉**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📱 Testing the Application

### 1. Register New User
- Go to http://localhost:3000/register
- Fill in the form
- Check your email for verification link

### 2. Verify Email
- Click the verification link in your email
- You'll be redirected to success page

### 3. Login
- Go to http://localhost:3000/login
- Use your registered credentials
- Access the protected dashboard

### 4. Test Password Reset
- Go to http://localhost:3000/forgot-password
- Enter your email
- Check email for reset link
- Follow the link to reset password

## 🔍 Troubleshooting

### MongoDB Issues
```bash
# If MongoDB not running locally
# Option 1: Start MongoDB service
sudo systemctl start mongod  # Linux
brew services start mongodb  # Mac

# Option 2: Use MongoDB Atlas (Cloud)
# Replace MONGODB_URI with your Atlas connection string
```

### Email Issues
```bash
# Check Gmail settings:
# 1. 2FA enabled
# 2. App password generated
# 3. Less secure app access (if needed)
```

### Port Issues
```bash
# If ports are busy, change in:
# backend/.env -> PORT=5001
# frontend/package.json -> "proxy": "http://localhost:5001"
```

## 📋 Development Commands

```bash
# Root directory commands
npm run dev          # Start both servers
npm run server       # Start backend only
npm run client       # Start frontend only
npm run install-all  # Install all dependencies

# Backend commands (in backend/)
npm start           # Production start
npm run dev         # Development with nodemon

# Frontend commands (in frontend/)
npm start           # Development server
npm run build       # Production build
```

## 🚀 Production Deployment

### Backend (Heroku/Railway)
1. Set environment variables in hosting platform
2. Update MONGODB_URI for production database
3. Update CLIENT_URL for production frontend

### Frontend (Netlify/Vercel)
1. Build: `npm run build`
2. Deploy build folder
3. Set environment variables if needed

## 📞 Need Help?

### Common Issues:
1. **"Cannot connect to MongoDB"** → Check MongoDB service or connection string
2. **"Email not sending"** → Verify Gmail app password and settings
3. **"CORS error"** → Check backend CORS configuration
4. **"Token invalid"** → Check JWT_SECRET in environment variables

### Support:
- Create an issue in the repository
- Check the troubleshooting section in README.md
- Review the error logs in terminal

---

**Happy Coding! 🎯**
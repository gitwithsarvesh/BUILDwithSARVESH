# MERN Authentication System

A complete authentication system built with the MERN stack featuring JWT authentication, email verification, and password reset functionality.

## 🚀 Features

- **User Registration** with email verification
- **JWT-based Authentication** with secure token handling
- **Password Reset** via email with token expiration
- **Protected Routes** for authenticated users
- **Responsive UI** with Tailwind CSS
- **Real-time Notifications** with React Toastify
- **Input Validation** on both frontend and backend
- **Password Hashing** with bcrypt
- **Email Service** integration with Nodemailer

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcryptjs for password hashing
- Nodemailer for email services
- express-validator for input validation

### Frontend
- React.js with Hooks
- React Router for navigation
- Context API for state management
- Axios for API calls
- Tailwind CSS for styling
- React Toastify for notifications

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd mern-auth-system
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-auth
JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_secure
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
CLIENT_URL=http://localhost:3000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Start the Application

**Start Backend Server:**
```bash
cd backend
npm run dev
```

**Start Frontend (in a new terminal):**
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📧 Email Configuration

To enable email functionality, you need to configure your email service:

### For Gmail:
1. Enable 2-Factor Authentication
2. Generate an App Password
3. Use the App Password in the `EMAIL_PASS` environment variable

### For other email services:
Update the `EMAIL_HOST` and `EMAIL_PORT` in your `.env` file accordingly.

## 🔐 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify-email/:token` - Verify email address
- `POST /api/auth/forgot-password` - Request password reset
- `PUT /api/auth/reset-password/:token` - Reset password
- `GET /api/auth/me` - Get current user (protected)

## 📱 Application Flow

1. **Registration**: User registers with name, email, and password
2. **Email Verification**: System sends verification email with token
3. **Account Activation**: User clicks email link to verify account
4. **Login**: User can now login with verified credentials
5. **JWT Token**: System generates JWT token for authenticated sessions
6. **Protected Access**: User can access dashboard and other protected routes
7. **Password Reset**: User can request password reset via email if needed

## 🔒 Security Features

- Password hashing with bcrypt (12 rounds)
- JWT token-based authentication
- Protected routes middleware
- Input validation and sanitization
- Email verification requirement
- Password reset token expiration (10 minutes)
- Secure HTTP headers with CORS

## 📁 Project Structure

```
mern-auth-system/
├── backend/
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── utils/
│   │   └── sendEmail.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   │   │   ├── ForgotPassword.js
│   │   │   ├── ResetPassword.js
│   │   │   └── VerifyEmail.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Set environment variables in your hosting platform
2. Ensure MongoDB connection string is updated for production
3. Update CORS settings for production frontend URL

### Frontend Deployment (Netlify/Vercel)
1. Build the React app: `npm run build`
2. Deploy the build folder
3. Update API base URL for production backend

## 🔧 Customization

### Adding New Features
- **Profile Management**: Add user profile editing functionality
- **Role-based Access**: Implement admin/user roles
- **Social Login**: Add Google/Facebook OAuth
- **Two-Factor Authentication**: Implement 2FA with SMS/Email
- **Account Lockout**: Add login attempt tracking

### Styling
- The project uses Tailwind CSS for styling
- Customize colors and components in the respective component files
- Add your own CSS classes or switch to other CSS frameworks

## 🐛 Troubleshooting

### Common Issues:
1. **MongoDB Connection Error**: Ensure MongoDB is running locally or check Atlas connection string
2. **Email Not Sending**: Verify email credentials and app password
3. **JWT Token Issues**: Check JWT_SECRET in environment variables
4. **CORS Errors**: Ensure backend CORS is configured for frontend URL

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, please create an issue in the repository.

---

**Built with ❤️ using the MERN Stack**
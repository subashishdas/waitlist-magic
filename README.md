# 🎯 Waitlist Magic

A modern, feature-rich waitlist application built with Next.js 15, designed to help you collect and manage user signups before your product launch. Features a beautiful UI, email confirmations, referral system, and comprehensive analytics.

## ✨ Features

- **🎨 Modern UI/UX**: Beautiful, responsive design with smooth animations and hover effects
- **📧 Email Integration**: Automated confirmation emails with Nodemailer
- **🔗 Referral System**: Built-in referral codes and tracking system
- **🗄️ Database Integration**: MongoDB with Mongoose for data persistence
- **✅ Form Validation**: Zod schema validation for robust data handling
- **📱 Responsive Design**: Mobile-first design with Tailwind CSS
- **🚀 Performance Optimized**: Built with Next.js 15 and Turbopack
- **🎭 Interactive Animations**: Intersection Observer API for scroll-triggered animations
- **🔔 Toast Notifications**: Real-time user feedback with react-toastify

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS 4
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Email**: Nodemailer & Resend
- **Validation**: Zod
- **Styling**: Tailwind CSS with custom animations
- **Notifications**: React Toastify

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB database
- Email service credentials (for Nodemailer/Resend)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd waitlist-magic
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string

   # Email Configuration
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password

   # Base URL
   NEXT_PUBLIC_BASE_URL=http://localhost:3000

   # Resend API Key (if using Resend)
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
waitlist-magic/
├── app/
│   ├── api/
│   │   ├── waitlist/          # Waitlist API endpoint
│   │   └── test/              # Test API endpoint
│   ├── thank-you/             # Thank you page after signup
│   ├── layout.js              # Root layout component
│   ├── page.jsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── Card.jsx               # Feature card component
│   ├── Footer.jsx             # Footer component
│   ├── Hero.jsx               # Hero section with signup form
│   └── Navbar.jsx             # Navigation component
├── constants/
│   └── constant.js            # App constants and features data
├── lib/
│   ├── mongoDB.js             # MongoDB connection
│   ├── nodemailer.js          # Email service configuration
│   └── zodSchema.js           # Validation schemas
├── model/
│   └── WaitlistUser.js        # User model for MongoDB
├── utils/
│   └── confirmationEmail.js   # Email template
└── public/                    # Static assets
```

## 🔌 API Endpoints

### POST `/api/waitlist`

Add a user to the waitlist.

**Request Body:**

```json
{
  "email": "user@example.com",
  "referredBy": "optional-referral-code"
}
```

**Responses:**

- `201`: Successfully added to waitlist
- `400`: Invalid email format
- `409`: Email already exists in waitlist
- `500`: Server error

**Success Response:**

```json
{
  "message": "Added to the waitlist",
  "user": {
    "email": "user@example.com",
    "referralCode": "user-123",
    "referredBy": null,
    "_id": "..."
  }
}
```

## 🎯 Key Features Explained

### Referral System

- Each user gets a unique referral code: `{email-prefix}-{random-number}`
- Referral links: `https://yoursite.com/?ref=referral-code`
- Tracks who referred whom for analytics

### Email Confirmation

- Automatic email sent upon successful signup
- Includes personalized referral link
- Customizable email template in `utils/confirmationEmail.js`

### Form Validation

- Client-side and server-side validation
- Email format validation with Zod
- Duplicate email prevention

### Responsive Design

- Mobile-first approach
- Smooth animations with Intersection Observer
- Custom hover effects and transitions

## 🎨 Customization

### Updating Features

Edit `constants/constant.js` to modify the features section:

```javascript
export const features = [
  {
    title: "Your Feature Title",
    description: "Feature description",
    icon: <YourSVGIcon />,
  },
];
```

### Styling

- Primary styles in `app/globals.css`
- Tailwind classes throughout components
- Custom animations and hover effects

### Email Templates

Modify `utils/confirmationEmail.js` to customize email content.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed on any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Environment Variables

| Variable               | Description                      | Required |
| ---------------------- | -------------------------------- | -------- |
| `MONGODB_URI`          | MongoDB connection string        | Yes      |
| `EMAIL_USER`           | Email service username           | Yes      |
| `EMAIL_PASS`           | Email service password           | Yes      |
| `NEXT_PUBLIC_BASE_URL` | Your app's base URL              | Yes      |
| `RESEND_API_KEY`       | Resend API key (if using Resend) | Optional |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Phosphor Icons](https://phosphoricons.com/)
- Email service powered by [Nodemailer](https://nodemailer.com/)

---

Made with ❤️ for building amazing waitlists

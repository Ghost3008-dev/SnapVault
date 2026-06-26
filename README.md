# SnapVault — AI-Powered Event Media Platform

SnapVault is a full-stack MERN application that lets users discover, organize, and retrieve event photos with real-time social interactions. It simplifies media management for events by providing personalized photo collections and seamless collaboration tools.

**Live Demo:** https://snap-vault2-mvuz.vercel.app/

---

## Tech Stack

- **Frontend:** React.js, Vite, React Router, Axios, Context API
- **Backend:** Node.js, Express.js, Socket.IO, JWT Authentication, Multer
- **Database:** MongoDB Atlas, Mongoose
- **Cloud Storage:** Cloudinary
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## Key Features

### Authentication & Authorization
- Secure user registration and login
- Role-based access control (Viewer, Photographer, Club Member, Admin)

### Event Media Management
- Create and manage events
- Upload photos and videos with Cloudinary-based storage
- Event-wise media organization and filtering

### Smart Search
- Search media using tags
- Event-based and personalized media filtering

### Social Features
- Like and comment on photos
- Real-time notifications via Socket.IO
- Activity tracking and live updates

### Download Management
- Secure, access-controlled media downloads

### Admin Dashboard
- Event moderation
- User management
- Media monitoring

---

## Project Structure
SnapVault/

├── frontend/

│   └── src/

│       ├── api/

│       ├── assets/

│       ├── components/

│       ├── context/

│       ├── pages/

│       └── hooks/

│

├── backend/

│   ├── controllers/

│   ├── middleware/

│   ├── models/

│   ├── routes/

│   ├── services/

│   ├── utils/

│   └── config/

│

└── README.md
---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Cloudinary account

### Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file in the `/backend` folder:
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_NAME=your_cloudinary_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_API_SECRET=your_cloudinary_api_secret

### Run Locally

```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
```

---

## Author

Aryan
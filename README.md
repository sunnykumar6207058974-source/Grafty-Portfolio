# Grafty — Full-Stack Creative Personal Portfolio

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.19-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

A modern, full-stack personal portfolio application built with a modular **React (Vite)** frontend and an **Express.js** REST API backend. Preserves 100% visual fidelity, editorial typography, micro-interactions, responsive layouts, and custom assets.

---

## 📁 Project Architecture

The codebase is organized into separate frontend and backend directories connected via REST APIs:

```text
project/
├── frontend/
│   ├── public/
│   │   └── assets/              # Static assets (images, badges, logos)
│   ├── src/
│   │   ├── assets/              # Local design assets
│   │   ├── components/          # Reusable React UI components
│   │   │   ├── About.jsx        # Stats, circular portrait & CV download CTA
│   │   │   ├── Clients.jsx      # Global client logo track
│   │   │   ├── Contact.jsx      # Contact form with validation & API submit
│   │   │   ├── Faq.jsx          # Interactive accordion FAQ
│   │   │   ├── Footer.jsx       # Footer links, brand mark & watermark
│   │   │   ├── Header.jsx       # Sticky glassmorphic navbar & mobile toggle
│   │   │   ├── Hero.jsx         # Arch portrait, "Developer" badge & signature
│   │   │   ├── MobileDrawer.jsx # Mobile navigation drawer
│   │   │   ├── Portfolio.jsx    # 2x2 project grid showcase
│   │   │   ├── ProjectModal.jsx # Project detail lightbox dialog
│   │   │   ├── Services.jsx     # Accordion service cards
│   │   │   ├── Testimonials.jsx # Client review cards with star ratings
│   │   │   └── Toast.jsx        # Animated floating toast notifications
│   │   ├── pages/
│   │   │   └── Home.jsx         # Main page orchestrating layout & state
│   │   ├── services/
│   │   │   └── api.js           # REST API client with fallback resilience
│   │   ├── App.jsx              # Root application component
│   │   ├── index.css            # Complete design system & custom CSS
│   │   └── main.jsx             # React DOM entry point
│   ├── index.html               # Frontend HTML shell with Google Fonts
│   ├── package.json             # Frontend dependencies & scripts
│   └── vite.config.js           # Vite config with API proxy
│
├── backend/
│   ├── config/
│   │   └── db.js                # Database connection & seed datastore
│   ├── controllers/
│   │   ├── contactController.js # Contact form handler & retrieval
│   │   ├── contentController.js # Services, testimonials & FAQs handlers
│   │   └── projectController.js # Projects CRUD & filter handlers
│   ├── middleware/
│   │   ├── errorHandler.js      # Centralized error response handler
│   │   └── validateContact.js   # Input validation middleware
│   ├── models/
│   │   ├── Contact.js           # Contact inquiry schema model
│   │   ├── Faq.js               # FAQ question & answer schema model
│   │   ├── Project.js           # Portfolio project schema model
│   │   ├── Service.js           # Specialty service schema model
│   │   └── Testimonial.js       # Client feedback review schema model
│   ├── routes/
│   │   ├── contactRoutes.js     # /api/contact routes
│   │   ├── contentRoutes.js     # /api/services, /api/testimonials, /api/faqs
│   │   └── projectRoutes.js     # /api/projects routes
│   ├── .env                     # Environment variables (PORT, NODE_ENV)
│   ├── package.json             # Backend dependencies & scripts
│   └── server.js                # Express server entry point
│
├── package.json                 # Root monorepo dev orchestrator
└── README.md                    # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
Run the root setup command to install dependencies across both frontend and backend:

```bash
npm run install:all
```

---

## 💻 Running the Application

### Option 1: Run Full-Stack Concurrently (Recommended)
From the root project folder:

```bash
npm run dev
```

This concurrently boots:
- **Backend API**: [http://localhost:5050](http://localhost:5050)
- **Frontend App**: [http://localhost:5174](http://localhost:5174)

### Option 2: Run Separately in Individual Terminals

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

### Option 3: Production Build
```bash
npm run build
```

---

## 📡 REST API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service health status check |
| `GET` | `/api/projects` | Retrieve all featured portfolio projects |
| `GET` | `/api/projects/:id` | Retrieve single project details by ID |
| `GET` | `/api/services` | Retrieve list of core specialties |
| `GET` | `/api/testimonials` | Retrieve client reviews and ratings |
| `GET` | `/api/faqs` | Retrieve frequently asked questions |
| `GET` | `/api/profile` | Retrieve profile metadata |
| `POST` | `/api/contact` | Submit a new contact message with validation |
| `GET` | `/api/contact` | Retrieve submitted messages (Admin) |

### Sample Contact Request
`POST /api/contact`
```json
{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Mobile App UI/UX Redesign",
  "message": "Hi Sunny, we'd like to collaborate on our next mobile product."
}
```

### Sample Response
```json
{
  "success": true,
  "message": "Thank you, Jane Doe! Your message has been received.",
  "data": {
    "id": "cnt-1718000000000",
    "fullName": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Mobile App UI/UX Redesign",
    "message": "Hi Sunny, we'd like to collaborate on our next mobile product.",
    "createdAt": "2026-10-01T22:30:00.000Z"
  }
}
```

---

## 🎨 Design Highlights & Customizations
- **Hero Badge**: Rotated high-contrast badge set to **"Developer"**.
- **Signature Script**: Transparent neon electric purple (`#7406FF`) handwritten script signature **"Sunny Kumar"** with center arch gap and ambient glow.
- **Hero Portrait**: High-resolution studio portrait of Sunny Kumar with crimson red gradient background.
- **Interactive Badges**: 3D parallax displacement tracking cursor movement on desktop.
- **Glassmorphic Navigation**: Sticky header with backdrop blur and active section scroll spy.

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).

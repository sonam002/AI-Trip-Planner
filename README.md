# 🌍 TripPlanner (TripBuddy AI)

> A full-stack travel planning platform built with React and Node/Express. It features smart destination discovery, dynamic itinerary generation powered by AI, interactive expense tracking, and real-time updates.

---

## ✨ Key Features

* 🗺️ **Destination Discovery & Filtering:** Browse tourist spots and filter by regions.
* 🤖 **AI Assistant:** Powered by **Google Gemini 2.0 Flash** for interactive trip planning and local insights.
* 📅 **Custom Itineraries:** Generate day-by-day travel plans with downloadable PDF support.
* 💰 **Expense Tracking:** Visual charts and expense logs to manage travel budgets.
* ⚡ **Real-Time Communication:** WebSockets integration via Socket.io.

---

## 💻 Tech Stack

* **Frontend:** React, TailwindCSS, Framer Motion / GSAP, Chart.js
* **Backend:** Node.js, Express, Socket.io
* **Database:** MongoDB & Mongoose
* **AI & Authentication:** Google Gemini 2.0 Flash, Firebase / Passport.js

---

## 📂 Project Structure

```plaintext
trip-planner/
├── public/          # Static assets (HTML, icons)
├── src/             # React frontend source code
│   ├── Components/  # UI components (Navbar, Footer, etc.)
│   └── pages/       # Application views/routes
├── backend/         # Node/Express server and APIs
└── README.md

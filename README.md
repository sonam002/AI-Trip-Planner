# 🌍 TripBuddy AI (YourTripPlanner)

A full-stack travel discovery and planning platform designed to simplify trip research for Indian destinations. Powered by Node.js, Express, React, and Google Gemini AI, it combines smart travel suggestions, dynamic image enrichment, expense tracking, and blog management into a single dashboard.

---

## ✨ Core Features

* 🤖 **AI Travel Assistant:** Interactive chat interface powered by Google Gemini AI for travel queries and route recommendations (`/api/chat`).
* 🗺️ **AI Recommendation Engine:** Generates customized travel suggestions based on destination, budget, and interests, automatically enriched with Unsplash images and normalized budget tiers (`/api/ai`).
* 📝 **Travel Blogs Engine:** Built-in RESTful CRUD capabilities to read, publish, and manage travel articles.
* 💰 **Expense Visualizations:** Interactive charts to track and categorize trip expenses.
* ⚡ **Resilient Data Processing:** Safe regex fallback parsing for AI JSON outputs and parallel image fetching via `Promise.all`.

---

## 💻 Tech Stack

* **Frontend:** React.js, TailwindCSS, Framer Motion, GSAP, Chart.js / Recharts
* **Backend:** Node.js, Express.js
* **Database & Storage:** MongoDB & Mongoose (database connection) + `blogs.json`
* **AI & Integrations:** Google Gemini 2.0 Flash API, Unsplash API
* **Utilities:** Axios, dotenv, CORS

---

## 📂 Project Structure

```plaintext
TripBuddy-AI/
├── public/                 # Static assets (HTML, favicon, icons)
├── src/                    # React frontend application
│   ├── Components/         # Reusable UI components (Navbar, Footer, Cards)
│   ├── pages/              # Views (Home, PlanTrip, CustomItinerary, AboutUs)
│   └── index.js            # React entry point
├── backend/                # Express backend application
│   ├── services/
│   │   └── APIService.js   # Gemini AI & Unsplash API integration logic
│   ├── blogs.json          # Local blog data storage
│   ├── server.js           # Express API endpoints & server setup
│   └── package.json        # Backend dependencies
└── README.md

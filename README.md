<h1 align="center">🌍 YourTripPlanner</h1>

> **YourTripPlanner** is a comprehensive travel discovery and planning platform designed to help users explore popular Indian tourist destinations with ease. The platform includes smart destination filtering, an AI-powered travel assistant, real-time features, and expense tracking tools, making travel planning simple, fun, and interactive.

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&duration=3000&pause=1000&color=00C853&center=true&vCenter=true&width=900&lines=Thanks+for+visiting+trip-planner!+🙌;Start+the+repo+✅;Share+it+with+others+🌍;Contribute+and+grow+🛠️;Happy+Coding+✨!" alt="Thanks Banner Typing SVG" />
</div>

**📊 Project Insights**

<table align="center">
    <thead align="center">
        <tr>
            <td><b>🌟 Stars</b></td>
            <td><b>🍴 Forks</b></td>
            <td><b>🐛 Issues</b></td>
            <td><b>🔔 Open PRs</b></td>
            <td><b>🔕 Closed PRs</b></td>
            <td><b>🛠️ Languages</b></td>
            <td><b>👥 Contributors</b></td>
        </tr>
     </thead>
    <tbody>
         <tr>
            <td><img alt="Stars" src="https://img.shields.io/github/stars/code-well0/trip-planner?style=flat&logo=github"/></td>
            <td><img alt="Forks" src="https://img.shields.io/github/forks/code-well0/trip-planner?style=flat&logo=github"/></td>
            <td><img alt="Issues" src="https://img.shields.io/github/issues/code-well0/trip-planner?style=flat&logo=github"/></td>
            <td><img alt="Open PRs" src="https://img.shields.io/github/issues-pr/code-well0/trip-planner?style=flat&logo=github"/></td>
            <td><img alt="Closed PRs" src="https://img.shields.io/github/issues-pr-closed/code-well0/trip-planner?style=flat&color=critical&logo=github"/></td>
            <td><img alt="Languages Count" src="https://img.shields.io/github/languages/count/code-well0/trip-planner?style=flat&color=green&logo=github"></td>
            <td><img alt="Contributors Count" src="https://img.shields.io/github/contributors/code-well0/trip-planner?style=flat&color=blue&logo=github"/></td>
        </tr>
    </tbody>
</table>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="150%">

## ✨ Features

* 🗺️ **Destination Discovery & Smart Filtering:** Browse a curated list of popular Indian cities beautifully themed with cultural emojis. Instantly filter destinations by region (North, South, East, West).
* 🤖 **AI Travel Assistant:** Powered by **Google Gemini 2.0 Flash**, get personalized travel suggestions, routes, and local insights via a fast, real-time chat interface.
* 📅 **AI-Powered Custom Itinerary:** Generate day-wise personalized itineraries and download them as multi-day PDFs for offline use.
* 💰 **Expense Tracking & Visualizations:** Keep tabs on your travel budget with interactive charts and trackers.
* ⚡ **Real-Time Capabilities:** Built with WebSockets for real-time interactions.

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="150%">

## 💻 Tech Stack

**Frontend:**
* **React.js** – Component-based architecture
* **TailwindCSS & CSS Flexbox** – Responsive and modern styling
* **Framer Motion & GSAP** – Smooth UI animations
* **Chart.js & Recharts** – Interactive expense visualizations

**Backend:**
* **Node.js & Express** – Scalable API service
* **MongoDB & Mongoose** – Database management
* **Socket.io** – Real-time event communication

**AI & Integrations:**
* **Google Gemini 2.0 Flash** – Generative AI for itineraries and chat
* **Firebase & Passport.js** – Authentication handling

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## System Architecture
**1. System Integration Flow**
```mermaid
graph TD
    subgraph Client_Side
        A[React Frontend] --> B[Framer Motion / GSAP]
        A --> C[Chart.js / Recharts]
    end
    
    subgraph Server_Side
        D[Node/Express API]
        E[Socket.io]
    end

    subgraph External_Services
        F[Google Gemini 2.0 Flash]
        G[(MongoDB / Mongoose)]
        H[Firebase/Passport Auth]
    end

    A <-->|REST API| D
    A <-->|WebSockets| E
    D <--> G
    D <--> F
    D <--> H
```

**2. AI Itinerary Generation Sequence**
```mermaid
sequenceDiagram
    participant U as User
    participant FE as React UI
    participant BE as Express Server
    participant AI as Gemini AI
    participant PDF as PDF Generator

    U->>FE: Input Travel Preferences
    FE->>BE: POST /api/generate-itinerary
    BE->>AI: Process Prompt (Gemini 2.0 Flash)
    AI-->>BE: Return Structured Itinerary
    BE->>PDF: Format Data to PDF
    PDF-->>FE: Send Download Link
    FE-->>U: Download Itinerary PDF
```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


## 📂 Project Structure

```plaintext
trip-planner/
├── public/                # Static files (HTML, images, favicon)
├── src/                   # Core React frontend source code
│   ├── Components/        # Reusable UI components (Navbar, Footer, Cards)
│   ├── pages/             # React pages (Home, Signup, PlanTrip, etc.)
│   └── index.js           # Entry point for React application
├── backend/               # Node/Express backend server & APIs
├── .vscode/               # Editor-specific workspace settings
├── GEMINI_SETUP.md        # AI Configuration guide
├── CONTRIBUTING.md        # Detailed contribution guidelines
└── README.md              # Project overview
```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 🚀 Getting Started
Follow these instructions to set up the project locally.

***1. Clone the repository:***

   ```bash
   git clone https://github.com/code-well0/trip-planner.git
   cd trip-planner
   ```

***2. Install dependencies:***

  Open a terminal in the root directory and install the React dependencies:
   ```bash
   npm install
   ```
  Start the development server:
   ```bash
   npm start
   ```
***3. Backend Setup:***
  Open a new terminal window, navigate to the backend folder, and install its dependencies:
  ```bash
  cd backend
  npm install
  ```
  Start the backend server:
  ```bash
  npm start
  ```

***4. Configuration:***

  To configure the Gemini AI Assistant, refer to:
   * [GEMINI\_SETUP.md](./GEMINI_SETUP.md)
  Visit the site:
   * [Live Demo](https://trip-planner-sable-eight.vercel.app/)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 align="center">Open Source Programmes </h2>
<p align="center">
  <b>This project is now OFFICIALLY accepted for:</b>
</p>

<p align="center">
  <a href="https://gssoc.girlscript.tech/"><img src="https://miro.medium.com/v2/resize:fit:560/0*loJWZJrLBa-0R_gH" width="180px" alt="GSSoC 2025"></a>
  <a href="https://dscwoc.dscvitb.in/"><img src="https://dscwoc.dscvitb.in/dscwoc-navbar-logo.png" width="180px" alt="DSCWoC'26"></a>
</p>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="150%">

**Contributing**

We welcome contributions from everyone, especially participants of **GSSoC’25**! 

To contribute:
1. Fork the repository and **Clone** your fork
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m "Added new feature"`
4. Push to your fork: `git push origin feature-name`
5. Open a **Pull Request**

For detailed instructions and community standards, please check our [CONTRIBUTING.md](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md).

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

**Acknowledgements**

- Thanks to all contributors of this project 
- Special shoutout to **GSSoC** and **DSCWoC** for the amazing community and support!
- Built with dedication, collaboration, and lots of chai 

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

>Thank you once again to all our contributors who has contributed to **trip-planner!** Your efforts are truly appreciated.

<h2 align="center">
<p style="font-family:var(--ff-philosopher);font-size:3rem;"><b> Show some <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png" alt="Red Heart" width="40" height="40" /> by starring this awesome repository!
</p>
</h2>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="150%">

**Suggestions & Feedback**

Feel free to open issues or discussions if you have any feedback, feature suggestions, or want to collaborate!

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="150%">

**Support & Star**

***If you find this project helpful, please give it a star to support more such educational initiatives!***

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

**📄 License**

This project is licensed under the MIT License - see the [`License`](./License.md) file for details.

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="150%">

<h2 align="center">🧑‍💻 Maintainers & Acknowledgements</h2>
<table align="center">
<tr>
<td>
<a href="https://github.com/code-well0"><img src="https://avatars.githubusercontent.com/u/146579950?v=4" height="140px" width="140px" alt="Shubrali jain"></a><br><sub><b>Shubrali Jain (Project Admin)</b><br><a href="https://www.linkedin.com/in/shubrali-jain/"><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/73993775/278833250-adb040ea-e3ef-446e-bcd4-3e8d7d4c0176.png" width="45px" height="45px"></a></sub>
</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="150%">

<h1 align="center"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png" alt="Glowing Star" width="25" height="25" /> Give us a Star and let's make magic! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png" alt="Glowing Star" width="25" height="25" /></h1>

<p align="center">
     <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Mirror%20Ball.png" alt="Mirror Ball" width="150" height="150" />
</p>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="150%">

<h3 align="center"> 👨‍💻 Built with ❤️ by trip-planner Team </h3>

<h4 align="center">❤️ Shubrali jain and Contributors ❤️ </h4>

<p align="center">
  <a href="https://github.com/code-well0/trip-planner/issues">Open an Issue</a> |
  <a href="https://trip-planner-sable-eight.vercel.app/">Watch Demo</a>
</p>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="150%">

<p align="center">
  <a href="#top" style="font-size: 18px; padding: 8px 16px; display: inline-block; border: 1px solid #ccc; border-radius: 6px; text-decoration: none;">
    ⬆️ Back to Top
  </a>
</p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=65&section=footer"/>


> **"Travel is the only thing you buy that makes you richer." Ready to show off your coding achievements? Get started with trip-planner today! 🚀**



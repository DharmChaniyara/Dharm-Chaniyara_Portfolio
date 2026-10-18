# 🚀 Dharm Chaniyara — Personal Developer Portfolio

> **Computer Science Student | Aspiring AI/ML Engineer & Software Developer**  
> B.Tech Computer Science & Engineering (3rd Semester) @ **GSFC University**, Gujarat, India.

A developer portfolio and ATS-aligned career showcase built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. All projects, internship credentials, and achievements featured on this website are verified from actual GitHub repositories, Cisco credentials, and official internship certificates.

---

## 🌟 Live Demo & Verification
- **Portfolio Website:** Deployed via Vercel (`npm run build` -> `dist/`)
- **Downloadable CV:** Located at `/resume/Dharm_Chaniyara_CV.pdf` (1-page ATS-optimized format)
- **GitHub Profile:** [https://github.com/DharmChaniyara](https://github.com/DharmChaniyara)
- **LinkedIn Profile:** [https://www.linkedin.com/in/dharm-chaniyara-b51b9137a/](https://www.linkedin.com/in/dharm-chaniyara-b51b9137a/)

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18, TypeScript, Vite 5 |
| **Styling & Theme** | Tailwind CSS (Obsidian dark palette `#050811`, cyan/blue accents) |
| **Icons & Visuals** | Lucide React |
| **Interactions** | Canvas Confetti, CSS Keyframe Animations |
| **Resume Engine** | Python ReportLab PDF Generation (`generate_cv.py`) |
| **Deployment** | Vercel SPA Configuration (`vercel.json`) |

---

## 📂 Featured Verified Projects

1. **JobGuard AI (Fake Job Offer Detector)**  
   *Full-stack fraud detection system powered by OpenAI text analysis & VirusTotal URL scanning.*  
   - **Stack:** React (Vite), Tailwind CSS, Framer Motion, Node.js, Express, Multer, pdf-parse, Supabase, OpenAI API, VirusTotal API  
   - **Repo:** [Fake-Job-Offer-Detector-](https://github.com/DharmChaniyara/Fake-Job-Offer-Detector-)  
   - **Live Demo:** [fake-job-offer-detector-two.vercel.app](https://fake-job-offer-detector-two.vercel.app)

2. **Deal Intelligence Agent (Team CODE BUSTERS)**  
   *AI sales copilot with organizational memory, objection mapping, and D3.js relationship graphs.*  
   - **Award:** Offline Finalist at **Hack Baroda 2026** with Team CODE BUSTERS  
   - **Stack:** React, Node.js, Express, D3.js, Vercel  
   - **Repo:** [CODE-BUSTERS-](https://github.com/DharmChaniyara/CODE-BUSTERS-)  
   - **Live Demo:** [code-busters-lake.vercel.app](https://code-busters-lake.vercel.app)

3. **StudyShare (Campus Academic Platform)**  
   *Centralized peer-to-peer academic learning and course resource sharing portal for GSFC University students.*  
   - **Stack:** JavaScript, HTML5/CSS3, Node.js, Supabase (PostgreSQL & Storage), Vercel  
   - **Repo:** [tinkering-mentoring](https://github.com/DharmChaniyara/tinkering-mentoring)  
   - **Live Demo:** [study-share.vercel.app](https://study-share.vercel.app)

4. **Campus Copilot (IEEE Collaborative Project)**  
   *Collaborative university knowledge assistant combining RAG retrieval with student services.*  
   - **Stack:** TypeScript, React (Vite), Tailwind CSS, RAG Architecture  
   - **Repo:** [skyuchiha69/Campus-copilot-ieee](https://github.com/skyuchiha69/Campus-copilot-ieee)

5. **DevFest Baroda 2026 Companion App**  
   *Native Android mobile application designed for attendees of GDG Baroda's conference.*  
   - **Stack:** Kotlin, Android Jetpack, XML Layouts, Gradle  
   - **Repo:** [DevFest](https://github.com/DharmChaniyara/DevFest)

6. **Wind Turbine Physics & Energy Simulator**  
   *Interactive HTML5 Canvas physics simulator calculating aerodynamic power output.*  
   - **Stack:** HTML5 Canvas, JavaScript, CSS3, Docker  
   - **Repo:** [wind-turbine-sim](https://github.com/DharmChaniyara/wind-turbine-sim)

7. **Java Game Collection Management System**  
   *Console-based Object-Oriented application for cataloging, filtering, and persisting game records.*  
   - **Stack:** Java, OOP, Java Collections (ArrayList), File I/O  

---

## 🎓 Verified Experience & Certifications

- **Web Development Internship:** Idealfolks, Rajkot, Gujarat (June 05, 2026 – July 05, 2026). Role: AI Web Developer Intern.
- **Python Essentials 2:** Cisco Networking Academy & OpenEDG Python Institute (Oct 18, 2026).
- **Computer Hardware Basics:** Cisco Networking Academy (Sep 24, 2026).
- **Hackathon Finalist:** Hack Baroda 2026 Finalist with Team CODE BUSTERS.
- **Workshop:** SSIP Drone Technology Workshop, Gujarat / GSFC University.

---

## 💻 Local Development

### Prerequisites
- Node.js >= 18.x (tested on v24.14.1)
- npm >= 9.x

### Quickstart
```bash
# Clone the repository
git clone https://github.com/DharmChaniyara/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```
Open `http://localhost:5173` in your browser.

### Building for Production
```bash
npm run build
```
Production assets will be emitted to `dist/`.

### Previewing the Production Build
```bash
npm run preview
```

### Regenerating ATS Resume (Optional)
If you wish to recompile the ATS PDF CV:
```bash
python generate_cv.py
```
This generates `Dharm_Chaniyara_CV.pdf` and syncs with `public/resume/Dharm_Chaniyara_CV.pdf`.

---

## 🚀 Deployment (Vercel)

1. Push this repository to GitHub (`https://github.com/DharmChaniyara/Portfolio`).
2. Import the repository into your [Vercel Dashboard](https://vercel.com).
3. Vercel will automatically detect the settings from `vercel.json`:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Framework Preset:** `Vite`
4. Click **Deploy**. Your site will be live with full client-side routing and instant PDF serving!

K72 - The Spark For All Things Creative
A modern, high-performance portfolio website with smooth scroll animations and interactive UI.

🌐View Live: https://k72-mets.onrender.com/

Overview
K72 is a creative agency building brands with premium web experiences. This portfolio showcases project work with cutting-edge animations, smooth scrolling, and minimalist design.

Features
Lenis Smooth Scrolling - Butter-smooth page scrolling

Custom Yellow Scrollbar - Minimal #FFFF00 scrollbar that appears on scroll

GSAP ScrollTrigger Animations - Individual project card animations as they enter viewport

Responsive Grid Layout - 2-column project showcase with smooth height transitions

Fixed Header Navigation - Hover-triggered metadata display with yellow highlights

Professional Footer - Social links and contact CTA

Tech Stack
Technology	Purpose
React 18+	Component framework
Vite	Build tool
Tailwind CSS	Styling
GSAP	Advanced animations
Lenis	Smooth scrolling
Render	Hosting
Quick Start
bash
# Clone repo
git clone https://github.com/Dru-429/k72.git
cd k72

# Install dependencies
npm install

# Start dev server
npm run dev
Visit http://localhost:5173

Build & Deploy
bash
npm run build
Deploys automatically to Render on push to main branch.

Project Structure
text
src/
├── components/
│   ├── work/
│   │   ├── ProjectTitle.jsx
│   │   └── ProjectData.jsx
│   ├── Header.jsx
│   └── Footer.jsx
├── pages/
│   ├── Work.jsx
│   └── Home.jsx
├── App.jsx
└── index.css
Configuration
Colors
Primary: Black (#000000)

Accent: Yellow (#FFFF00)

Text: White (#FFFFFF)

Fonts
Headings: Oswald

Code: Roboto Mono

Deployment
Hosted on Render with automatic builds:

Root Directory: (blank)

Build Command: npm install && npm run build

Publish Directory: dist

Custom Domain Setup
Render Dashboard → Settings → Domains

Add custom domain

Update DNS records at registrar

Troubleshooting
Issue	Solution
Videos not loading	Place in public/ folder, use /filename.mp4 path
Scrollbar not showing	Clear cache (Ctrl+Shift+Delete), hard refresh (Ctrl+Shift+R)
Animations not smooth	Verify Lenis initialized in App.jsx, check GSAP plugin
Git Workflow
bash
git checkout -b feature/your-feature
git add .
git commit -m "Your commit message"
git push origin feature/your-feature
Contact
Live Site: https://k72-mets.onrender.com/

Email: sahoo.dhruv2005@gmail.com

GitHub: @Dru-429

Last Updated: October 31, 2025
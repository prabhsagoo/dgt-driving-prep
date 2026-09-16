NovaDGT — Permiso B Driving Exam Platform

NovaDGT is an interactive, modern driving test preparation platform designed for the Spanish DGT (Dirección General de Tráfico) Permiso B theoretical examination.

Built with Next.js 16, TypeScript, and Tailwind CSS, the platform delivers a realistic testing experience, comprehensive curriculum practice, and visual sign recognition.

Features

Official DGT Mock Engine (/exam)

30 questions sampled randomly across official topic weights

30-minute countdown timer

Question flagging

Instant pass/fail grading

Maximum 3 allowed mistakes

Curriculum Learning Modules (/learn)

Practice organized into canonical DGT modules

Speed Limits

Priority Rules

Signs

Maneuvers

Documentation

Visibility

Safety

Instant answer explanations

Mistakes Bank (/mistakes)

Automatically logs failed questions from mock tests and topic drills

Interactive retake modes

Automatic mastery removal when questions are successfully learned

Visual Signs Catalog (/signs)

Interactive, scalable SVG catalog

Danger signs

Priority signs

Prohibition signs

Mandatory signs

Indication signs

Search functionality

Modal inspection

Readiness Score Dashboard (/)

Persistent readiness percentage

Powered by recent test performance

Historical performance trends

Data persisted through browser localStorage

Trilingual Localization

Spanish (ES)

English (EN)

Catalan (CA)

Dynamic client-side language switching

Telemetry & Monitoring

Vercel Web Analytics

Vercel Speed Insights

Real-user performance monitoring

Tech Stack
Category	Technology
Framework	Next.js 16 (App Router, Turbopack)
Language	TypeScript
Styling	Tailwind CSS, PostCSS
Icons	Lucide React
Animations & Effects	Canvas Confetti
Analytics	@vercel/analytics
Performance Monitoring	@vercel/speed-insights
State Management	React Context API
Persistence	Browser localStorage
Getting Started
Prerequisites

Make sure you have the following installed:

Node.js 18.18 or later

npm, yarn, or pnpm

Installation

Clone the repository:

git clone https://github.com/prabhsagoo/dgt-driving-prep.git
cd dgt-driving-prep


Install dependencies:

npm install

Run the Development Server

Start the local development server:

npm run dev


Open your browser and navigate to:

http://localhost:3000

Production Build

To verify types and generate an optimized production bundle:

npm run build


Start the production server:

npm run start

Application Routes
Route	Description
/	Readiness Score Dashboard
/exam	DGT-style 30-question mock examination
/learn	Curriculum learning and topic practice
/mistakes	Mistakes Bank and retake practice
/signs	Interactive road signs catalog
Exam Experience

The /exam module is designed to simulate the Permiso B theoretical examination experience.

Each mock exam includes:

30 randomly selected questions

Topic-weighted question selection

30-minute countdown

Question navigation

Question flagging

Final grading

Pass/fail result

Maximum of 3 mistakes allowed

Exam performance also contributes to the user's readiness score and mistakes bank.

Learning Modules

The /learn section provides focused practice organized around major DGT theory areas.

Available modules include:

Speed Limits

Priority Rules

Signs

Maneuvers

Documentation

Visibility

Safety

Questions provide immediate feedback and explanations to reinforce the underlying driving concepts.

Mistakes Bank

Questions answered incorrectly during exams and topic practice can be stored in the Mistakes Bank.

The mistakes workflow allows users to:

Review previously missed questions

Retake questions

Identify recurring problem areas

Practice mistakes independently

Remove questions from the bank after demonstrating mastery

This creates a personalized revision loop based on actual performance.

Road Signs Catalog

The /signs section provides a visual reference for Spanish road signs.

The catalog includes:

Danger signs

Priority signs

Prohibition signs

Mandatory signs

Indication signs

Signs are rendered as scalable SVG graphics and can be searched and inspected interactively.

Readiness Score

NovaDGT maintains a persistent readiness percentage on the main dashboard.

The score is calculated using recent examination performance and historical trends. Relevant state is persisted in the browser using localStorage, allowing progress to remain available between sessions on the same browser.

Localization

NovaDGT supports three languages:

🇪🇸 Spanish (ES)

🇬🇧 English (EN)

🏴 Catalan (CA)

Language selection is handled dynamically on the client side.

Analytics & Monitoring

The application integrates:

@vercel/analytics
@vercel/speed-insights


These services provide visibility into real-user analytics and application performance.

Deployment

NovaDGT is configured for deployment on Vercel.

After connecting the repository to Vercel, pushes to the main branch can trigger automated builds and production deployments.

A typical deployment flow is:

Git Push
   ↓
Vercel Build
   ↓
Production Deployment
   ↓
Live Application

Git Workflow

After creating or updating README.md, commit and push the changes with:

git add README.md
git commit -m "docs: add comprehensive project README"
git push origin main

Project Structure

A typical Next.js App Router structure for NovaDGT may look like:

dgt-driving-prep/
├── app/
│   ├── exam/
│   ├── learn/
│   ├── mistakes/
│   ├── signs/
│   └── page.tsx
├── components/
├── context/
├── data/
├── public/
├── styles/
├── package.json
├── next.config.*
├── tailwind.config.*
├── tsconfig.json
└── README.md

License

Add the project's license information here if a specific license has been selected.

Summary

NovaDGT combines realistic DGT-style mock examinations, structured theory practice, mistake-based revision, visual road-sign learning, multilingual support, and performance tracking into a single Permiso B preparation platform.

The goal is to provide a focused, interactive environment for learners preparing for the Spanish DGT theoretical driving examination.
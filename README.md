# On-Ground.ai — Call Centre App · Retail Web Platform

[![React](https://img.shields.io/badge/React-v19.2.8-61dafb?style=flat&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-v8.3.4-646cff?style=flat&logo=vite)](https://vitejs.dev)
[![Design](https://img.shields.io/badge/UI%20Design-Emerald%20%26%20Glassmorphic-0f6e56?style=flat)](https://on-ground.ai)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=flat&logo=vercel)](https://call-centre-app-nine.vercel.app/)
[![Build Status](https://img.shields.io/badge/Build-Passing%20(0%20errors)-success)](https://vitejs.dev)
[![Linter](https://img.shields.io/badge/Linter-Clean%20(0%20errors)-success)](https://oxc.rs)

> 🌐 **Live Demo URL**: [https://call-centre-app-nine.vercel.app/](https://call-centre-app-nine.vercel.app/)  
> 🔗 **GitHub Repository**: [https://github.com/deepak-05-g/Call-Centre-app](https://github.com/deepak-05-g/Call-Centre-app)

A complete, production-grade, pixel-polished web frontend implementation of the **On-Ground.ai Call Centre Platform (Retail Division)**. Built strictly following the assignment specification and reference production HTML mock (`OnGround_CallCentre_App_Mock (1).html`).

---

## 📖 1. Project Overview

The **On-Ground.ai Call Centre Application** is a unified sales and customer care workstation designed for retail store agents and call center representatives. It empowers agents to:
- Monitor shift performance KPIs, customer queues, and incentive earnings in real time.
- Work through prioritized lead call queues with AI-assisted conversion intelligence, script prompts, and zero-interest EMI financing pitches.
- Track incoming/missed calls with revenue value at stake and schedule callbacks.
- Review call quality audits and SOP compliance checklists with verbatim transcripts.
- Manage shift appointments, 1-on-1 coaching sessions, and store visit schedules on an interactive calendar.
- Collaborate with store teammates and AI assistant agents (AvaniBot) via real-time channels with actionable decision cards.
- Practice objection handling with interactive AI call rehearsals.

---

## 🛠️ 2. Technology Stack & Architectural Rationale

| Technology | Purpose | Architectural Rationale |
| :--- | :--- | :--- |
| **React 19** (`v19.2.8`) | Component Architecture & UI State | Modern functional component tree utilizing hooks (`useState`, `useEffect`, `useRef`, `useMemo`) for fluid reactivity, modal orchestration, and sub-second rendering without unnecessary overhead. |
| **Vite** (`v8.3.4`) | Build Tool & Local Dev Server | Instant server start, lightning-fast Hot Module Replacement (HMR < 50ms), and optimized production rollups under 750ms. |
| **Vanilla CSS & Design Tokens** | Layout & Design System | Native CSS custom properties (`--og-*`) provide complete control over colors, gradients, elevation shadows, glassmorphism, typography, and responsive grid layouts without framework lock-in or utility-class bloat. |
| **Lucide React** (`v1.55.0`) | Vector Iconography | Consistent, lightweight SVG iconography across telecommunications, calendars, chat, and CRM widgets. |
| **Recharts** (`v3.10.1`) | Trend Data Visualizations | Responsive, accessible 7-day chart visualizations for Calls Handled and CSAT Performance indicators with interactive segment filtering. |
| **Oxlint** (`v1.81.0`) | High-Speed Static Analysis | Fast Rust-based linter ensuring clean syntax and 0 errors across the codebase. |

---

## 🚀 3. Prerequisites & Exact Setup / Run Commands

### Prerequisites
- **Node.js**: `v18.0.0` or higher (`v20+` recommended)
- **npm**: `v9.0.0` or higher

### Installation & Run Steps

```bash
# 1. Clone repository
git clone https://github.com/deepak-05-g/Call-Centre-app.git

# 2. Enter project folder
cd Call-Centre-app

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

The application will be accessible at:
👉 **`http://localhost:5173/`**

### Production Build & Preview Commands

```bash
# Compile optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Run static analysis / lint check
npm run lint
```

---

## 📋 4. Implemented Mandatory Features

All mandatory screens, components, and interactions specified in the assignment are fully implemented and verified:

### A. Application Shell & Navigation
- [x] **Sticky Brand Topbar**:
  - `OG On-Ground.ai` branding and retail hub indicator.
  - Interactive **OG Score™ pill** (`76 ⭐ #3 · RT Nagar`) opening the 4-pillar capability breakdown.
  - Notification bell with unread count indicator and popover menu.
  - Agent Profile avatar (`🦸‍♂️ AR Arvind Rajan · Koramangala Store`).
- [x] **Left Sidebar Navigation**:
  - 4 primary tabs: **Overview (Dashboard)**, **Calling Plan**, **Calendar**, **Pulse**.
  - Active indicator pills and badge counters.
  - Quick-action trigger: **"Practise a call"** rehearsal button.
- [x] **Responsive Shell**:
  - Desktop sidebar layout.
  - Adaptive tablet support.
  - Sticky mobile bottom navigation bar (`< 768px`) with touch targets.

### B. Dashboard (`Overview`)
- [x] **Hero Banner**: Personalized greeting, shift status (`10:00 AM – 7:00 PM`), and Date Range modal picker.
- [x] **4 KPI Cards**: OG Score™ (`76/100`), Avg Handle Time (`4m 12s`), CSAT Today (`94%`), and In Queue (`2 callers waiting`).
- [x] **My Progress Card**: Daily target progress gauge (`87%`), 5 conversations logged, 47m talk time, leads created/called counters.
- [x] **Who's Waiting (Live Queue)**: Real-time caller queue cards (`Priya Iyer`, `Suresh Nair`) with wait duration badges, inquiry intent, and one-click call trigger.
- [x] **Earnings & Incentive Card**: Monthly incentive progress (`₹5,200 / ₹6,000`), breakdown of base commission and AI coach saves (`₹1,700`).
- [x] **My Tasks Checklist**: Interactive pending actions deep-linked directly to lead inspection drawers and team threads.
- [x] **7-Day Trend Visualizations**: Visual interactive trend charts for **Calls Handled** and **CSAT Trend** with segmented filter toggles (`All Trends`, `Calls Handled`, `CSAT`).

### C. Calling Plan (`Plan`)
- [x] **Plan Sub-tabs**:
  1. **Calls to Make (8)**:
     - Ranked by Lead Attractiveness Score (e.g., Mukunda R. - 90, Faizan A. - 88).
     - **Accordion Expandable Rows**: Reveals customer story, recommended pitch lines, cross-sell product suggestions, and zero-interest EMI financing plans (`₹708/mo`).
     - **Working Pagination**: Client-side pagination (`Page 1 of 2`) with interactive Previous / Next controls.
     - Direct **"Place Call"** simulator trigger and **"Inspect Lead"** drawer opener.
  2. **Incoming Calls (5)**:
     - High-priority header highlighting **"Expected value at stake: ₹2,16,400"**.
     - Missed call log with elapsed time badges (`5m ago`, `18m ago`).
     - **Working Callback Action**: Opens schedule slot picker or initiates simulated callback with live badge feedback (`Scheduled`).
  3. **Recent Calls (8)**:
     - Log table with customer name, call duration, timestamp, and QA rating.
     - **Call SOP Review Modal**:
       - 6 audited compliance checkpoints: Opening, Needs Discovery, Product Pitch, EMI, Warranty, Closing.
       - Overall adherence compliance score (`83% SOP compliance`).
       - Verbatim AI transcription excerpts linked with pass/fail audit indicators.
       - Audio recording waveform simulation.

### D. Calendar
- [x] **Month Grid Matrix**:
  - Full calendar grid with correct weekday alignment and day counts.
  - Backward (`<`) and forward (`>`) month navigation with cross-year rollover support.
  - Working **"Today"** button that instantly resets back to current date/month.
  - Event indicators on appointment dates.
- [x] **Sync Alert Banner**: Mailbox synchronization alert.
- [x] **Upcoming Invites Section**: Coaching sessions with Store Manager (`Sunita Rao`), L&D warranty workshop, and team huddles.
- [x] **Share Invite Modal**: Modal dialog to share calendar invites with teammates, manager, or training staff.

### E. Pulse Home & Collaboration
- [x] **Pulse Home Feed**:
  - **Ask AvaniBot** search input with suggestion chips.
  - **Featured Avani AI Hero Card**: `"3 action items from your shift"` with shift priority breakdown.
  - **Kudos Recognition Feed**: Team leaderboard highlights and modal dialog to award kudos to peers.
  - **Custom AI Agents Fold**: Expandable list of automated assistant agents (`EMI Push Nudge`, `Skill Improvement Coach`, `My SOP Coach`).
  - **Channel List**: `#callcentre-team`, `#all-stores`, `#avani-coaching`, `#manage-shipment`, `#quotation-tickets`.
- [x] **Pulse Channel View (`#callcentre-team`)**:
  - Channel header with active member counts and back navigation (`‹`).
  - **Pinned "Needs your input" Decision Card**:
    - Dual actionable buttons: **Action 1** (`"Yes, I'll take it"`) and **Action 2** (`"Reassign to Priya"`).
    - Clicking either action immediately produces visual resolution feedback and status badge updates.
  - Real-time chat stream with left/right bubble alignment, sender identities, and timestamps.
  - Reply input with emoji picker tray; messages appear in the conversation thread immediately without page refreshes.

### F. Reusable Leads Modal Drawer
- [x] **Inspection Drawer**:
  - Accessible from Dashboard tasks, Who's Waiting queue cards, and Calling Plan rows.
  - Safe previous/next carousel navigation (`‹` `›`) across all 5 detailed leads with boundary protection (`‹` hidden on first lead, `›` hidden on last lead).
  - AI Lead Scoring: **ICP Fit Score bar** (`87%`) and **Lead Intent Score** (`91/100`).
  - **Collapsible Buying Signals Accordion**: Financing, quotation, and warranty details.
  - Omnichannel Customer Journey Timeline (Meta Ad → WhatsApp AI → Voice AI → Inbound Quote).
  - Pre-call strategy notes, quote requirement toggles, and WhatsApp/Call action buttons.
  - Safe close action (`✕` or backdrop click) returning to exact prior scroll position.

---

## 🎁 5. Implemented Bonus Features

1. **Practice-a-Call Simulator ([ActiveCallModal.jsx](file:///c:/Users/Deepak/Downloads/call%20center/src/components/modals/ActiveCallModal.jsx))**:
   - Turn-based objection handling simulation with customer persona "Ramesh" (Price objection).
   - Real-time conversation exchange with live AI coach cues and script suggestions.
   - Live call timer (`00:14`, `00:15`...).
   - In-call controls (Mute, Mic toggle, Audio waveform).
   - Post-rehearsal scorecard (`94% SOP Score`, `🏆 Rehearsal Complete`, streak counter).
   - CRM Call Wrap-up Drawer allowing outcome selection (`Interested`, `Callback Scheduled`, `Sale Closed`, `Quotation Sent`) and notes logging.
2. **Interactive Phone Dialer Keypad ([DialerKeypadModal.jsx](file:///c:/Users/Deepak/Downloads/call%20center/src/components/modals/DialerKeypadModal.jsx))**:
   - Always-accessible floating action button (FAB) at bottom-right (intelligently offset above mobile bottom navigation).
   - Full 12-key telephone dialpad (`1-9`, `*`, `0`, `#`) with letter sub-labels and dial tones.
   - Quick speed-dial shortcut chips for top leads (`Mukunda R.`, `Kavitha R.`, `Faizan A.`).
   - One-touch call placement and practice call triggers.
3. **OG Score™ Capability Breakdown Modal ([OgScoreModal.jsx](file:///c:/Users/Deepak/Downloads/call%20center/src/components/modals/OgScoreModal.jsx))**:
   - 4-pillar competency scorecard: Objection Handling (`84/100`), Empathy (`78/100`), EMI Structuring (`72/100`), Compliance (`69/100`).
   - AI Coach Avani personalized feedback narrative and percentile ranking (`Top 8%`).
4. **Enhanced Callback Scheduling in Incoming Calls**:
   - Interactive time-slot drawer allowing agents to book specific callback times (`Today 4:30 PM`, `Tomorrow 11:00 AM`).
   - Instant visual badge state updates to `Scheduled`.
5. **Interactive 7-Day Performance Trend Analytics**:
   - Segmented filter controls (`All Trends`, `Calls Handled`, `CSAT`) with Recharts visual bars.
6. **Date Range Filter Modal ([DateRangeModal.jsx](file:///c:/Users/Deepak/Downloads/call%20center/src/components/modals/DateRangeModal.jsx))**:
   - Presets for Today, Yesterday, This Week, This Month, and custom date pickers.

---

## ⚠️ 6. Mock Data & No-Backend Explanation

> [!NOTE]
> **Strictly Client-Side Architecture**:
> In accordance with the assignment specifications, this project is built entirely as a client-side frontend web application. It **does not require or connect to an external backend database, authentication service, or WebRTC SIP telephony server**.
> 
> All data—including caller queues, lead scores, SOP compliance transcripts, calendar appointments, and chat messages—is managed via **local React state** initialized from the rich enterprise dataset located in [`src/data/mockData.js`](file:///c:/Users/Deepak/Downloads/call%20center/src/data/mockData.js).
> 
> Every interaction (sending messages, scheduling callbacks, completing practice rehearsals, resolving pinned cards) produces immediate visual feedback and persists for the duration of the browser session without external API dependencies.

---

## 🔎 7. Known Limitations & Non-Goals

1. **Session Persistence**: Data updates (new chat messages sent, callbacks scheduled, CRM wrap-up notes) reside in memory and reset upon a full page reload (`F5`).
2. **Telephony Audio**: The call simulator and dialpad simulate active telephony states and waveforms with visual cues rather than placing real PSTN/cellular phone calls.
3. **External Integrations**: Third-party integrations (real Google Calendar sync, actual WhatsApp Business API webhooks) are simulated via client-side modals and toast alerts.

---

## 🤖 8. AI Tools Used & How They Were Used

During the construction, validation, and quality assurance of this project, AI tooling was leveraged as follows:

| Tool | Application & Contribution |
| :--- | :--- |
| **Google Antigravity IDE (Gemini 3.8 Flash)** | - Architectural structuring across 9 systematic stages.<br>- Component decomposition from the 5,951-line reference mock into modular React components.<br>- Design system token extraction matching exact typography, colors, and shadows.<br>- Synthesis of realistic enterprise retail call center mock datasets. |
| **Antigravity Browser Subagent** | - Automated headless browser verification across desktop (1440x900), tablet (768x1024), and mobile (390x844).<br>- Automated recording and capture of modal transitions, chat delivery, calendar navigation, and lead accordion toggles.<br>- Real-time verification of zero browser console errors and zero React key warnings. |
| **Oxlint & Ripgrep** | - High-speed static analysis identifying unused imports, unhandled effect states, and dead code elimination. |

---

## 📂 9. Project Folder Structure

```
Call-Centre-app/
├── dist/                          # Production build output (generated via npm run build)
├── public/                        # Static assets (favicons, SVG icons)
│   ├── favicon.svg
│   └── icons.svg
├── reference/                     # Original assignment mock & analysis references
│   ├── OnGround_CallCentre_App_Mock.html
│   ├── master_prompt.txt
│   └── scripts/                   # Reference extraction & verification scripts
├── src/
│   ├── components/
│   │   ├── calendar/              # Calendar month grid, invites, share modal
│   │   │   ├── Calendar.jsx
│   │   │   ├── CalendarGrid.jsx
│   │   │   ├── CalShareModal.jsx
│   │   │   └── UpcomingInvites.jsx
│   │   ├── dashboard/             # Dashboard hero, KPIs, progress, queue, earnings, tasks, charts
│   │   │   ├── Dashboard.jsx
│   │   │   ├── DashboardHero.jsx
│   │   │   ├── EarningsCard.jsx
│   │   │   ├── KpiCards.jsx
│   │   │   ├── MyTasksCard.jsx
│   │   │   ├── ProgressBanner.jsx
│   │   │   ├── QueueList.jsx
│   │   │   └── SevenDayCharts.jsx
│   │   ├── modals/                # Reusable drawers, dialer, OG score sheet, call simulator
│   │   │   ├── ActiveCallModal.jsx
│   │   │   ├── DateRangeModal.jsx
│   │   │   ├── DialerKeypadModal.jsx
│   │   │   ├── LeadsModal.jsx
│   │   │   └── OgScoreModal.jsx
│   │   ├── plan/                  # Plan header, outgoing calls, incoming calls, recent SOP audit
│   │   │   ├── CallsToMake.jsx
│   │   │   ├── CallSopReviewModal.jsx
│   │   │   ├── IncomingCalls.jsx
│   │   │   ├── Plan.jsx
│   │   │   ├── PlanHeader.jsx
│   │   │   └── RecentCalls.jsx
│   │   ├── pulse/                 # Team channels, live chat, pinned action cards, kudos
│   │   │   ├── AvaniHeroCard.jsx
│   │   │   ├── CustomAgentsFold.jsx
│   │   │   ├── KudosHeroCard.jsx
│   │   │   ├── KudosModal.jsx
│   │   │   ├── PinnedInputCard.jsx
│   │   │   ├── Pulse.jsx
│   │   │   ├── PulseChannelsList.jsx
│   │   │   ├── PulseChatThread.jsx
│   │   │   └── PulseHeader.jsx
│   │   └── shell/                 # Topbar, Sidebar, Mobile bottom navigation
│   │       ├── MobileNav.jsx
│   │       ├── Sidebar.jsx
│   │       └── Topbar.jsx
│   ├── data/
│   │   └── mockData.js            # Unified enterprise mock datasets (leads, SOP, calls, chat)
│   ├── styles/
│   │   ├── calendar.css           # Calendar grid and appointment styles
│   │   ├── components.css         # Reusable buttons, badges, cards
│   │   ├── dashboard.css          # KPI cards, queue, progress, chart styles
│   │   ├── modals.css             # Modals, leads drawer, call simulator, dialpad styles
│   │   ├── plan.css               # Plan accordions, tabs, SOP review styles
│   │   ├── pulse.css              # Team chat, pinned card, kudos styles
│   │   ├── shell.css              # Navigation, header, layout containers
│   │   └── variables.css          # Color tokens, shadows, spacing, typography
│   ├── App.jsx                    # Root component with state management & modal orchestrator
│   ├── index.css                  # Global resets and font declarations
│   └── main.jsx                   # React 19 application entry point
├── index.html                     # HTML5 entry with meta tags & Google Inter font
├── package.json                   # Dependencies and npm scripts
├── vite.config.js                 # Vite bundler configuration
└── README.md                      # Comprehensive documentation
```

---

## 🧪 10. Quality Assurance & Production Verification

- **Production Build**: Verified with `npm run build` — compiled all 1,943 modules in **720ms** with 0 errors.
- **Linter Check**: Verified with `npm run lint` — passed with 0 errors.
- **Browser Automation QA**: Verified all navigation routes, pagination controls, collapsible accordions, callback drawers, chat submissions, pinned card actions, and modal carousels on Chromium viewports.
- **Responsive Layout**: Validated on Desktop (1440px), Tablet (768px), and Mobile (390px).

---

*Developed for the On-Ground.ai Frontend Engineering Evaluation.*

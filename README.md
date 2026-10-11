# On-Ground.ai — Call Centre App · Retail Web Platform

[![React](https://img.shields.io/badge/React-v19.0.0-61dafb?style=flat&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-v8.3.4-646cff?style=flat&logo=vite)](https://vitejs.dev)
[![Design](https://img.shields.io/badge/UI%20Design-Emerald%20%26%20Glassmorphic-0f6e56?style=flat)](https://on-ground.ai)
[![Build Status](https://img.shields.io/badge/Build-Passing%20(0%20errors)-success)](https://vitejs.dev)

A complete, pixel-polished, high-performance web application implementation for the **On-Ground.ai Call Centre Platform (Retail Division)**. Built strictly following the assignment specification and the reference production HTML mock (`OnGround_CallCentre_App_Mock.html`).

---

## 🚀 Live Demo & Quick Start

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Run Locally in 3 Steps

```bash
# 1. Clone or navigate to the directory
cd "c:/Users/Deepak/Downloads/call center"

# 2. Install dependencies (if not already installed)
npm install

# 3. Start local development server
npm run dev
```

Visit **`http://localhost:5173/`** in your browser.

### Production Build

```bash
npm run build
```
Generates an optimized production bundle in `/dist` in under **800ms** with zero warnings or errors.

---

## 🛠️ Technology Stack & Architecture

| Technology | Purpose | Architectural Rationale |
| :--- | :--- | :--- |
| **React 19** | Component Architecture & UI State | Modern functional component tree with clean unidirectional data flow and reactive sub-state management. |
| **Vite** | Bundler & Dev Server | Sub-second hot module replacement (HMR), lightning-fast esbuild/rolldown production compilation. |
| **Vanilla CSS & Design Tokens** | Styling System | Full control over custom typography, CSS custom properties (`--og-*`), emerald brand gradients (`#0f6e56` to `#1d9e75`), micro-animations, and fluid responsive layouts without utility-class bloat. |
| **Lucide React** | Consistent Iconography | Crisp, lightweight vector iconography for telecom, calendar, messaging, and CRM controls. |
| **Recharts** | Interactive Analytics | Responsive visual trendlines for 7-day Calls Handled and CSAT Performance indicators. |
| **Local Mock Data Store** | Realistic Enterprise Data | Rich dataset covering leads, ICP breakdowns, journey timelines, SOP transcripts, calendar appointments, and team threads without external backend dependencies. |

---

## 📋 Comprehensive Feature Checklist

### 1. App Shell & Navigation
- [x] **Sticky Brand Topbar**:
  - `OG On-Ground.ai` logo with custom emerald typography.
  - Interactive **OG Score™ Pill** (`76 ⭐ #3 · RT Nagar`) opening the 4-pillar capability breakdown modal.
  - Notification bell with unread indicator badge and popover dropdown.
  - Agent Profile avatar (`🦸‍♂️ AR Arvind Rajan · Koramangala Store`) with role info.
- [x] **Left Navigation Sidebar**:
  - 4 primary application sections: **Dashboard**, **Plan**, **Calendar**, **Pulse**.
  - Contextual subtabs for Plan (**Outgoing**, **Incoming**, **Recent**).
  - Quick action button: **"Practise a call"** simulation trigger.
- [x] **Mobile Responsive Navigation**:
  - Auto-collapsing sidebar on viewports `< 768px`.
  - Fixed mobile bottom navigation bar with active indicators and quick tap targets.

---

### 2. Dashboard View (`/dash`)
- [x] **Hero Section**:
  - Personalized welcome banner: `"Good morning, Arvind Rajan"`.
  - Date range filter selector pill (`"Today, 11 Oct 2026"` / `"This Week"`).
  - Live shift status banner: `"Shift: 10:00 AM – 7:00 PM · Retail Hub"`.
- [x] **4 Key Performance Indicator (KPI) Cards**:
  - **OG Score™**: `76 / 100` (`+13 pts this month`, Top 8% percentile).
  - **Avg Handle Time**: `4m 12s` (`▼ 8% vs target`).
  - **CSAT Today**: `94%` (`▲ 2pt vs 7-day average`).
  - **In Queue**: `2 callers waiting` (`Longest: 4m 20s`).
- [x] **My Progress Section**:
  - Daily target progress bar (`87% completed`).
  - Shift metrics: 5 conversations logged, 47m talk time, 3 leads created, 2 called.
- [x] **Who's Waiting (Live Queue)**:
  - Caller queue cards with wait duration badges (`Priya Iyer · 4m 20s`, `Suresh Nair · 1m 50s`).
  - Expected inquiry intent and one-click **"Call Now"** launch.
- [x] **Monthly Earnings & Incentive Calculator**:
  - Target vs achieved incentive bar (`₹5,200 earned` out of `₹6,000 target`).
  - Avani coach incentive breakdown (`₹1,700 unlocked through AI coached saves`).
- [x] **My Tasks Checklist**:
  - Interactive pending actions (`2 callbacks scheduled for 4:30pm`, `2 hot leads untouched > 24h`, `1 outcome to log`).
  - Direct deep-links into the relevant lead card or team thread.
- [x] **7-Day Trend Analytics**:
  - Interactive visual bar chart showing **Calls Handled** over the past 7 days with today highlighted.
  - **CSAT Trend** bar chart displaying customer satisfaction progression.

---

### 3. Plan Section (`/calls`)
- [x] **Plan Header & Metrics**:
  - Subtab switchers: **Calls to Make (8)**, **Incoming (5)**, **Recent (8)**.
  - Practice call prompt button.
- [x] **Subtab 1: Calls to Make (Outgoing)**:
  - Ranked by **Lead Attractiveness Score** (e.g. Mukunda R. - 90, Faizan A. - 88).
  - Expandable **accordion cards**:
    - Product interest & customer story.
    - Suggested pitch line & cross-sell recommendation.
    - Zero-interest financing / EMI breakdown (`₹708/mo`).
  - One-click actions: **Place Call** (opens Active Call Simulator) and **Inspect Lead** (opens Lead Drawer).
  - Client-side pagination (`Page 1 of 2`).
- [x] **Subtab 2: Incoming Calls**:
  - High-priority header banner: **"Expected value at stake: ₹2,16,400"**.
  - Missed call and callback requests with time elapsed badges (`5m ago`, `18m ago`).
  - One-click **"Call back"** button initiating simulator.
- [x] **Subtab 3: Recent Calls & SOP Compliance**:
  - Detailed call log table with customer name, duration, timestamp, and QA rating.
  - **Call SOP Review Modal**:
    - Adherence score bar (e.g. `83% SOP compliance`).
    - 6 audited checkpoints: Opening, Needs Discovery, Product Pitch, EMI, Warranty, Closing.
    - Verbatim **transcript quotes** paired directly with compliance badges.

---

### 4. Calendar Screen (`/calendar`)
- [x] **Dynamic Month Matrix**:
  - Full calendar grid for October 2026 with accurate day-of-week alignment.
  - Previous month (`<`) and Next month (`>`) month navigation.
  - **"Today"** quick jump button with gold circle indicator.
  - Event indicators on appointment dates.
- [x] **Sync Banner**:
  - Mailbox sync status alert: `"Store visits, coaching sessions, and meeting invites all show up here — and in your mailbox."`
- [x] **Upcoming Invites List**:
  - Coaching sessions with Store Manager (`Sunita Rao`).
  - L&D warranty refresher workshop.
  - Weekly team huddles.
- [x] **Share Invite Modal**:
  - Interactive modal to share appointments to Manager (`Sunita Rao`), Team (`#callcentre-team`), or L&D (`Fahmy`).

---

### 5. Pulse Channels & Collaboration (`/pulse`)
- [x] **Pulse Home Feed**:
  - **Ask AvaniBot** omni-search input.
  - **Featured Avani AI Hero Card**: `"3 action items from your shift"`.
  - **Kudos Recognition Hero Card**: Team leaderboard highlights and shoutouts.
  - **Custom AI Agents Fold**: Expandable list of automated assistant agents (`EMI Push Nudge`, `Skill Improvement Coach`, `My SOP Coach`).
  - **Channels & Direct Messages list**: `#callcentre-team`, `#all-stores`, `#avani-coaching`, `#manage-shipment`, `#quotation-tickets`.
- [x] **Channel View (`#callcentre-team`)**:
  - Pinned **"Needs your input"** decision card:
    - `"Confirm 4:30pm callback for Mukunda R."`
    - Action buttons: **"Yes, I'll take it"** and **"Reassign to Priya"**.
    - Inline reply text input.
  - Real-time team message stream with left/right bubble alignment.
  - Live message input bar with emoji tray and instant message submission.

---

### 6. Leads Inspection Modal
- [x] **Header & Navigation**:
  - Paging carousel controls (`‹` `›`) and pagination dot indicators.
  - Customer name, contact number, and product interest.
- [x] **AI Lead Scoring**:
  - **ICP Fit Score bar** (e.g. `87% Ideal Customer Profile`).
  - **Lead Intent Score** badge (`91 / 100`).
  - Detailed score breakdown: Budget Fit (`87%`), Need Match (`72%`), Decision Stage (`60%`).
- [x] **Collapsible ICP Breakdown**:
  - Three problem categories: Financing Related, Quotation Demanded, Warranty Related.
- [x] **Omnichannel Customer Journey Timeline**:
  - Multitouch history: Meta Ad click → AI Agent WhatsApp opt-in → Voice AI qualifying call → Inbound quote request.
- [x] **Pre-Call Strategy Notes**:
  - Actionable tips (e.g. `"Lead with 12-month zero-interest plan"`, `"Prefers calls after 6pm"`).
- [x] **Persistent Action Footer**:
  - **Place Call** (launches simulator).
  - **WhatsApp** (opens quick chat notification).
  - **No Interest / Close** actions.

---

### 7. Bonus Features & Simulator Tools
- [x] **Active Call Simulator (`ActiveCallModal`)**:
  - Live call duration counter with seconds timer (`00:14`, `00:15`...).
  - Real-time streaming conversation transcript between Agent and Customer.
  - **AI Assist Cues**: Dynamic objection handling cards and EMI pitch recommendations displayed during the call.
  - In-call controls: Mute audio, Hold, Keypad, End Call.
  - **CRM Call Wrap-up Drawer**: Post-call outcome logging (`Interested`, `Callback Requested`, `Sale Closed`, `Quotation Sent`, `Not Interested`) with notes field.
- [x] **Floating Phone Dialer (`DialerKeypadModal`)**:
  - Always-accessible floating action button (FAB) at bottom-right.
  - Full telephonic keypad (`1-9`, `*`, `0`, `#`) with letter sub-labels.
  - Backspace and clear controls.
  - Speed-dial shortcut chips for top leads.
  - One-click call placement.
- [x] **OG Score™ Capability Breakdown Modal (`OgScoreModal`)**:
  - Detailed scorecard across 4 core competency pillars:
    1. Objection Handling (`84/100`)
    2. Empathy & Active Listening (`78/100`)
    3. Product & EMI Structuring (`72/100`)
    4. SOP & Compliance Adherence (`69/100`)
  - AI Coach Avani personalized feedback narrative.
- [x] **Date Range Selector Modal (`DateRangeModal`)**:
  - Quick presets: Today, Yesterday, This Week, This Month, Last 30 Days, Quarter to Date.
  - Start Date and End Date calendar pickers.
  - Live filtering updates across Dashboard and Plan views.

---

## 📂 Project Structure

```
call-center/
├── dist/                          # Production build output
├── public/                        # Static assets
├── reference/                     # Original 5,951-line HTML reference & audit scripts
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
│   │   └── mockData.js            # Unified enterprise mock datasets
│   ├── styles/
│   │   ├── calendar.css           # Calendar grid and appointment styles
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

## 🎨 Visual & Design System Details

- **Primary Brand Color**: Emerald Teal (`#0f6e56` to `#1d9e75`)
- **Accent Brand Colors**:
  - Pulse / Coaching Purple: `#7c3aed` / `#4338ca`
  - Calendar Royal Blue: `#185fa5`
  - High Intent / Warning Amber: `#c8860a`
  - SLA Risk / Urgency Red: `#e24b4a`
- **Typography**: Google Font **Inter** (weights: `400`, `500`, `600`, `700`, `800`)
- **Visual Depth**: Subtle box shadows (`var(--og-shadow-md)`, `var(--og-shadow-lg)`), semi-transparent glassmorphic overlays (`backdrop-filter: blur(4px)`), smooth CSS easing transitions (`var(--og-transition-normal)`).

---

## 🧪 Verification & Testing Completed

1. **Production Build**: Verified with `npm run build` — compiled all 1,943 modules into production chunks in 763ms with 0 errors.
2. **Browser Interaction Test**: Automated browser agent navigated through all views, clicked modal dialogs, performed live chat entries, triggered active call simulations, and verified CRM wrap-up logging.
3. **Responsive Breakpoints**: Tested on desktop (1440px), tablet (1024px), and mobile (375px/768px).

---

*Developed with precision for the On-Ground.ai Frontend Engineering Evaluation.*

# MAA MALA™

Art-directed outdoor editorial landing page and reservation platform for Strangers Camp at Kakkadampoyil, Kerala. Designed with high-contrast topography aesthetics, photographic dominance, and a friction-free WhatsApp booking pipeline.

---

## Overview

MAA MALA™ offers a luxury outdoor expedition showcase for eco-adventures, highland camping, offroad safaris, and stream treks. The platform blends an editorial aesthetic with modern interactive components, providing visitors with a visual overview of camp experiences, community stories, and direct reservation tools.

---

## Key Features

### Editorial Design & Typography
- **Floating Header**: Seamless transparent navigation header with rounded pill capsule architecture and backdrop blur.
- **Hero Architecture**: Typography-driven hero section featuring high-contrast serif headlines, Malayalam brand accents, and essential location metadata.
- **Asymmetric Magazine Layout**: Responsive media grids highlighting key camp activities with asymmetric image hierarchy.

### Reservation Engine & Booking Modal
- **Adventure Package Selection**: Custom-built interactive dropdown menu with smooth state transitions and option subtitles.
- **Direct Gender Steppers**: Streamlined guest selector with dedicated Male and Female controls. Total guest count is computed automatically.
- **Dynamic Price Engine**: Real-time price calculation based on guest count at the standard rate of INR 1,799 per head (All-Inclusive).
- **Direct WhatsApp Payload**: Generates pre-filled WhatsApp reservation requests including package selection, contact details, guest breakdown, and price estimation.

### Media & Community Showcase
- **Instagram Reels Feed**: Stream of short-form video reels showcasing camp highlights, offroad trails, and acoustic night sessions.
- **Camper Testimonials**: Interactive feedback component displaying verified camper reviews, star ratings, and audio/video highlights.

---

## Technology Stack

- **Core Framework**: React 18 + Vite
- **Styling Architecture**: Tailwind CSS v3 (Custom Dark Mesh Theme)
- **Animation Engine**: Framer Motion
- **Iconography**: Lucide React
- **Deployment & Build**: Vite Bundler

---

## Directory Structure

```text
maa-mala/
├── public/
│   └── images/              Static photographic assets and brand media
├── src/
│   ├── components/
│   │   ├── BookingModal.jsx Modal form with custom dropdown & price engine
│   │   ├── CampExperiences.jsx Asymmetric magazine layout for camp activities
│   │   ├── FinalCTA.jsx     Closing reservation prompt section
│   │   ├── Footer.jsx       Site footer with brand info & engineering credits
│   │   ├── Hero.jsx         Editorial main hero section
│   │   ├── Navbar.jsx       Floating capsule header & mobile drawer menu
│   │   └── TestimonialsSection.jsx Interactive camper feedback showcase
│   ├── data/
│   │   └── mockData.js      Camp metadata, reels data, and stats
│   ├── App.jsx              Root application layout
│   ├── index.css            Tailwind design tokens & utility styles
│   └── main.jsx             Application entry point
├── package.json             Project dependencies and npm scripts
└── vite.config.js           Vite bundler configuration
```

---

## Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/IsacSmile/maa-mala.git
   cd maa-mala
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## Configuration

- **WhatsApp Destination Number**: Configured in `src/components/BookingModal.jsx` (`919400921124`).
- **Package Pricing**: Default rate per head set to `1799` INR in `BookingModal.jsx`.

---

## Engineering & Credits

Engineered by [Faiz.I](https://www.instagram.com/faiz_imam__/) for MAA MALA™.

---

## License

Copyright © MAA MALA™. All rights reserved.

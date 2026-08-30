# 🎨 Paint Party NZ

A modern, responsive marketing website for **Paint Party NZ** — a New Zealand creative-events business that sells ready-to-paint Plaster of Paris kits, birthday party packs, daycare & school craft subscriptions, seasonal collections, corporate event packages, wholesale supplies, and hosted mobile paint parties.

The site is built as a **single-page React + TypeScript + Vite + Tailwind CSS** application. It runs entirely in the browser and has **no backend or API keys** required.

---

## 🌐 Live Preview & Deploy

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4
- **Animation:** Motion (`motion/react`)
- **Icons:** Lucide React
- **Build output:** `dist/` (static files)
- **Deployment ready:** Vercel (`vercel.json` included)

---

## ✨ What the Website Does

Paint Party NZ is a conversion-focused front end that lets visitors:

1. **Discover products and services**
   - Browse product categories: Birthday Party Kits, Daycare & School Packs, Seasonal Collections, Baby Shower & Celebrations, Cultural & Festival Kits, and Corporate / Event Kits.
   - View detailed product pages with images, inclusions, safety info, delivery details, and bulk pricing tiers.

2. **Build a custom kit**
   - Use the interactive **Kit Builder** to pick a plaster figure theme (unicorns, dinosaurs, butterflies, rockets, etc.) and a paint palette.
   - Add the personalised kit directly to the enquiry cart.

3. **Choose pre-made party packages**
   - Select from **Mini, Standard, and Big Celebration** birthday party packs.
   - Each pack shows the number of kits, included items, and a "Request a Quote" CTA.

4. **Explore service offerings**
   - **Daycare Subscription:** monthly themed craft boxes for early learning centres.
   - **Corporate & Bulk Events:** custom-branded kits for family days, expos, and activations.
   - **Wholesale / Stockist Program:** retail store and café applications.
   - **Hosted Mobile Paint Parties:** entertainer-led painting experiences in Auckland, Hamilton, and Tauranga.

5. **Capture leads and quotes**
   - A slide-out **Cart Drawer** collects selected items.
   - A multi-step **Lead Enquiry Modal** collects customer details, event date, kit count, delivery location, and personalisation notes.
   - Submissions are sent via email-to-form endpoint / mailto — no payment gateway is integrated.

6. **Build trust**
   - Trust strip, customer testimonials, milestone counters, FAQ-style "How It Works", and exit-intent discount modal.

---

## 🚀 How to Run Locally

**Prerequisites:** Node.js 18+ and npm

1. Clone or open the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```
4. Open the URL shown in your terminal (usually `http://localhost:3000`).

To create a production build:

```bash
npm run build
```

The static site is compiled into the `dist/` directory.

---

## 🚀 Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Vercel will automatically detect the Vite project and use the settings in `vercel.json`:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

---

## 🛠 Tech Stack

| Layer         | Technology                  |
| ------------- | --------------------------- |
| Framework     | React 19 (TypeScript)       |
| Build tool    | Vite 6                      |
| Styling       | Tailwind CSS v4             |
| Animations    | `motion/react`              |
| Icons         | `lucide-react`              |
| Confetti      | `canvas-confetti`           |

---

## 📁 Project Structure

```
paint-party-nz/
├── index.html                 # HTML shell with SEO meta tags
├── package.json               # Dependencies and scripts
├── vite.config.ts             # Vite + Tailwind plugin config
├── vercel.json                # Vercel static build routing
├── tsconfig.json              # TypeScript configuration
├── src/
│   ├── main.tsx               # React application entry
│   ├── App.tsx                # Main page layout and state
│   ├── index.css              # Tailwind + custom styles
│   ├── data/products.ts       # Product, package, and testimonial data
│   ├── types.ts               # Shared TypeScript interfaces
│   └── components/            # All page sections and modals
```

---

## 📝 Notes

- This is a **static marketing site**. Orders and enquiries are captured through the lead form and cart review; there is no live checkout or payment processing.
- All brand contact details (email, social links, phone, regions) are configured in `src/data/products.ts` under `BRAND_CONFIG`.
- Images are sourced from Unsplash for demonstration. Replace the Unsplash URLs with your own product photography before launch.

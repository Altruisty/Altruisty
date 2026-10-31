# Altruisty Innovation Pvt Ltd - Official Single-Page Website

A digital studio & tech agency single-page website built for **Altruisty Innovation Pvt Ltd** using **Next.js (App Router) + TypeScript + Tailwind CSS**, featuring fluid typography, Framer Motion animations, interactive Three.js scenes, big custom SVG icons, and smooth Lenis scrolling.

---

## 🎨 Brand & Color Palette (Light Theme Only)
All colors are strictly sampled from the official Altruisty logo and defined in **[`/styles/theme.css`](file:///c:/Users/boome/OneDrive/Documents/Altruisty%20New/styles/theme.css)**:
- **Deep Blue**: `#2F4A9F` (Logo "A / L" side)
- **Mid Blue**: `#4A7DB8` (Logo "TRU" transition)
- **Sky Cyan**: `#72D0E3` (Logo "STY" side)
- **Charcoal Gray**: `#5B5B5B` (Logo "Innovation Pvt Ltd" / body text)
- **Soft Ice Background**: `#F4F9FD`
- **Pale Sky Tint**: `#E8F4FA`
- **Clean White**: `#FFFFFF`
- **Signature Gradient**: `linear-gradient(90deg, #2F4A9F 0%, #4A7DB8 50%, #72D0E3 100%)`

---

## 🚀 How to Run Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Start
```bash
npm run build
npm run start
```

---

## 📝 How to Edit Text (Strict Single Source of Truth)
Every section component imports its text from an isolated data file in `/content/`. **You never need to touch layout or component code to change copy:**

| Section | Content File | What It Controls |
|---|---|---|
| Hero | `/content/hero.ts` | Headline, tagline, subtitle, hero paragraphs, buttons |
| About Us | `/content/about.ts` | About paragraphs, Our Mission, Our Vision |
| Services | `/content/services.ts` | 01 Software Dev, 02 AI & Emerging Tech, 03 Digital Transformation |
| Why Altruisty | `/content/why.ts` | 4 value cards (Innovation, Solutions, Technologies, Collaboration) |
| Gallery | `/content/gallery.ts` | Heading, paragraphs, photo captions & image URLs |
| Clients | `/content/clients.ts` | Heading, paragraphs, client logos & names |
| Partners | `/content/partners.ts` | Partner paragraphs, "Interested in Partnering With Us" card, phone |
| College Collaborations | `/content/collaborations.ts` | Campus collaboration intro, 01-05 steps, past photos, student banner |
| Internships | `/content/internships.ts` | Internships intro, 13 domains, why apply points, past photos |
| Registration Form | `/content/form.ts` | All labels, academic years, domains, mode options, consent text |
| Let's Build CTA | `/content/cta.ts` | "Let's Build Something Meaningful" headline, copy, and buttons |
| Contact Us | `/content/contact.ts` | Email, phone, location, website, LinkedIn & Instagram links |
| Footer | `/content/footer.ts` | Tagline, explore links, legal links, copyright notice |

---

## 🖼️ How to Swap Images & Logos
- **Logo**: Stored at `/public/logo/altruisty-logo.jpg`. Replace this file or update references in `/components/sections/Navbar.tsx` and `/components/sections/Footer.tsx`.
- **Client Logos**: Update `/content/clients.ts` with your client SVG/PNG paths in `/public/images/clients/`.
- **Gallery & Event Photos**: Add your high-resolution images to `/public/images/` and update paths in `/content/gallery.ts`, `/content/collaborations.ts`, and `/content/internships.ts`.

---

## 🪐 3D Models & Motion Graphics
- **Hero Scene**: Built with React Three Fiber in `/components/three/HeroScene.tsx`. It features a low-poly stylized rocket matching the Altruisty logo, glossy glass icosahedrons, torus knots, and orbit rings that react to mouse parallax.
- **About Globe**: Rotating wireframe globe with satellite nodes in `/components/three/AboutGlobe.tsx`.
- **Custom Big SVGs**: Sized 96px–140px in `/components/icons/` with logo gradients and subtle animations.

---

## 📬 Connecting the Internship Form
The internship registration form in `/components/sections/InternshipForm.tsx` sends a JSON payload to Next.js API route **`/app/api/internship/route.ts`**.
- It is validated with **Zod** schema.
- To connect **Email (Resend/Nodemailer)**, **Google Sheets**, or a **Database (Prisma/Supabase)**, simply add your logic in `/app/api/internship/route.ts` inside the marked section.


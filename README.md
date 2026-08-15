# portfolio-3d

My portfolio at [mdmahfujarrahman.com](https://mdmahfujarrahman.com). Next.js
with a few three.js scenes: a desk in the hero, a grid of floating technology
icons, and a globe next to the contact form.

## Stack

| | |
|---|---|
| Framework | Next.js (pages router) |
| 3D | three.js via @react-three/fiber and drei |
| Animation | Framer Motion |
| Styling | Tailwind CSS |
| Contact form | Next.js API route, Nodemailer, rate limited |
| Hosting | Vercel |

## Running it

```bash
pnpm install
cp .env.example .env.local   # only needed if you want the contact form to send
pnpm dev
```

Then open <http://localhost:3000>. `pnpm build` and `pnpm start` run the
production build.

## Environment

The site renders fine without these; only the contact form needs them.

| Variable | Purpose |
|---|---|
| `USEREMAIL` | Inbox that receives messages |
| `USERPASSWORD` | App password for that account |
| `USEREMAIL2` | Account the confirmation reply is sent from |
| `USERPASSWORD2` | App password for that account |

## Layout

```
pages/
  index.js            section order for the home page
  api/contact.js      contact form handler
components/
  Banner/             hero, with the 3D desk scene
  About/  Tech/       intro and the floating icon grid
  Experience/  Work/  timeline and project cards
  Contant/  Earth/    contact form and the globe beside it
  ErrorBoundary/      WebGL guard, see below
  constants/
    content.js        all copy: experience, projects, skills, links
assets/               images and icons
```

Everything the site says about me lives in `components/constants/content.js`.
Updating the site is usually editing that one file.

## Browsers without WebGL

three.js throws from its own render loop when it cannot get a WebGL context.
That happens outside React's call stack, so no error boundary catches it and the
page goes blank with "Application error". Hardware acceleration turned off is
enough to trigger it.

`components/ErrorBoundary/useWebGL.js` checks for support before any canvas
mounts. Without it the 3D scenes are skipped, the technology grid falls back to
plain chips, and the rest of the site works normally.

# Igbe Heritage & Worship Community Platform

This project is a **full-stack web application** designed to preserve, document, and support the Igbe religious and cultural tradition of the Urhobo people.  
It combines historical storytelling, community features, and modern web technology to create a digital platform for worshippers, researchers, and the wider public.

---

## 🌍 Public Website

The public-facing site will include:

- **Home** — introduction to Igbe
- **History & Origin** — Ubiesha Etarakpo and the founding of Igbe
- **Beliefs & Teachings** — worldview, Oghene, Orhe, morality
- **Igbe Worship** — practices, songs, dance, ceremonies
- **Orhe** — cultural and spiritual significance of white chalk
- **Igbe Communities** — locations, leaders, and community information
- **Gallery** — photos and videos of worship and ceremonies
- **Events & Ceremonies** — upcoming and past events
- **Articles / News** — updates, scholarly posts, and community stories
- **Contact / Join** — forms for inquiries and membership

---

## 👥 Member System

Registered members will be able to:

- Create accounts and manage profiles
- Join specific Igbe communities/branches
- View upcoming events and register for ceremonies
- Receive announcements and updates
- Participate in discussions
- Upload approved cultural materials

---

## 🔐 Admin Dashboard

Administrators will have tools to:

- Manage members and roles (Uku, Omote Uku, Obo-Oweiya, Olori, Emigbe)
- Create and edit articles
- Add and manage communities
- Publish and moderate events
- Approve photos/videos for the gallery
- Send announcements
- Assign different levels of administrator privileges
- Review submitted content

---

## 🗄️ Database Schema (MongoDB)

**Users**
- firstname  
- middlename  
- surname  
- email  
- password  
- phone  
- role (Uku, Omote Uku, Obo-Oweiya, Olori, Emigbe)  
- community (branch/ogwa affiliation)  
- profile { bio, sex, photoUrl, interests, joinedAt, registrationDate }

**Communities**
- name  
- location  
- description  
- leaders  

**Articles**
- title  
- content  
- author  
- images  
- publishedAt  

**Events**
- title  
- description  
- location  
- date  
- organizer  

**Gallery**
- title  
- mediaUrl  
- description  
- uploadedBy  

---

## 🛠️ Suggested Technology Stack

**Frontend**
- Next.js  
- React  
- Tailwind CSS  

**Backend**
- Next.js API routes / Node.js + Express  

**Database**
- MongoDB + Mongoose  

**Authentication**
- NextAuth/Auth.js  

**Media Storage**
- Cloudinary (or equivalent)  

**Hosting**
- Vercel (web app)  
- MongoDB Atlas (database)  

---

## 🚀 Vision

This project aims to be more than a static website. It will be a **digital Igbe community platform**, with separate dashboards for:
- Ordinary members  
- Community leaders  
- Priests/authorized religious leaders  
- Super administrators  

By combining cultural heritage with modern technology, the platform will preserve Igbe traditions while connecting communities worldwide.





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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

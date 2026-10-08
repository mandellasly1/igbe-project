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

## 🛍️ Mama White Spiritual

**Mama White Spiritual — Temple of the Queen Mother** is a separate shop and spiritual-services section of the platform.

**Description:**
Sales of mystical items for spiritual works and various spiritual works and services rooted in traditional practices and the heritage of the Queen Mother.

### 📍 Location

**Swali Market Road Junction, Yenagoa, Bayelsa State, Nigeria**

### 🛒 Online Shop

The shop will eventually allow visitors to:

* Browse available products
* View product images and descriptions
* View prices and availability
* Add products to a shopping cart
* Place online orders
* Provide delivery information
* Receive order confirmations

### 🧿 Planned Products

The shop may include items such as:

* Native Chalk
* Spiritual Perfumes
* St. Michael Perfume
* Love Perfume
* Back to Sender Perfume
* White Basin — Large
* White Basin — Medium
* White Basin — Small
* Thunder Stone
* Alligator Pepper
* Native Pot
* Mortar and Pestle
* Other traditional, ceremonial, and mystical items

### 💳 Online Payments

The online shop will eventually support appropriate payment methods such as:

* Bank transfer
* Card payments
* Other supported online payment methods

---

## ❤️ Temple Support, Donations & Gifts

The main **Waters of Heaven Temple** website will have a separate support section for people who wish to support the Temple and its activities.

Visitors may eventually be able to:

* Make donations
* Give gifts
* Make contributions
* Support Temple activities
* Support community initiatives
* Support cultural and heritage projects

### 💰 Support Payment Methods

The support section may provide:

* Bank transfer
* Online card payments
* Other supported donation/payment methods

**Temple donations and support will remain separate from purchases made through Mama White Spiritual.**

---

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




# Igbe Heritage & Worship Community Platform

This project is a **full-stack web application** designed to preserve, document, and support the Igbe religious and cultural tradition of the Urhobo people.

It combines historical storytelling, community features, and modern web technology to create a digital platform for worshippers, researchers, and the wider public.

---

## 🌍 Public Website

The public-facing site will include:

* **Home** — introduction to Igbe
* **History & Origin** — Ubiesha Etarakpo and the founding of Igbe
* **Beliefs & Teachings** — worldview, Oghene, Orhe, morality
* **Igbe Worship** — practices, songs, dance, ceremonies
* **Orhe** — cultural and spiritual significance of white chalk
* **Igbe Communities** — locations, leaders, and community information
* **Gallery** — photos and videos of worship and ceremonies
* **Events & Ceremonies** — upcoming and past events
* **Articles / News** — updates, scholarly posts, and community stories
* **Contact / Join** — forms for inquiries and membership

---

## 🛍️ Mama White Spiritual

The platform will also include a separate shop/company section for **Mama White Spiritual — Temple of the Queen Mother**.

Mama White Spiritual will provide sales of mystical and traditional items for spiritual works and will also provide various spiritual services and works rooted in traditional practices and the heritage of the Queen Mother.

### 📍 Location

**Swali Market Road Junction,
Yenagoa, Bayelsa State, Nigeria**

### 🛒 Online Shop

The online shop will provide a product catalog where visitors can:

* Browse available products
* View product images
* Read product descriptions
* View prices
* Check product availability
* Add products to a shopping cart
* Place orders
* Provide customer and delivery information
* Receive order confirmations

### 🧿 Planned Product Categories

The shop may include traditional, cultural, ceremonial, and mystical items such as:

* Native Chalk
* Spiritual Perfumes
* St. Michael Perfume
* Love Perfume
* Back to Sender Perfume
* Other traditional and spiritual fragrances
* White Basins — Large, Medium, and Small
* Thunder Stone
* Alligator Pepper
* Native Pots
* Mortar and Pestle
* Other traditional and mystical items

The product catalog will be expandable so that new products can be added through the administrative system.

### 💳 Online Payments

The shop will eventually support online purchasing through available payment methods such as:

* Bank card payments
* Bank transfers
* Other supported online payment methods

Payment integration will be implemented securely through an appropriate payment provider.

---

## ❤️ Temple Support, Donations & Gifts

The main **Waters of Heaven Temple** website will have a separate support section for people who wish to support the Temple and its activities.

Visitors may eventually be able to:

* Make donations
* Give gifts
* Make contributions
* Support Temple activities
* Support community initiatives
* Support cultural and heritage projects

### 💰 Support Payment Methods

The support section may provide:

* Bank transfer
* Online card payments
* Other supported donation/payment methods

The Temple support system will remain separate from the **Mama White Spiritual** commercial shop so that purchases and donations are clearly distinguished.

---

## 👥 Member System

Registered members will be able to:

* Create accounts and manage profiles
* Join specific Igbe communities/branches
* View upcoming events and register for ceremonies
* Receive announcements and updates
* Participate in discussions
* Upload approved cultural materials

---

## 🔐 Admin Dashboard

Administrators will have tools to:

* Manage members and roles (Uku, Omote Uku, Obo-Oweiya, Olori, Emigbe)
* Create and edit articles
* Add and manage communities
* Publish and moderate events
* Approve photos/videos for the gallery
* Send announcements
* Assign different levels of administrator privileges
* Review submitted content
* Manage Mama White Spiritual products
* Add, edit, or remove shop products
* Manage product prices and availability
* Review customer orders
* Manage shop categories
* Manage donation/support information

---

## 🗄️ Database Schema (MongoDB)

**Users**

* firstname
* middlename
* surname
* email
* password
* phone
* role (Uku, Omote Uku, Obo-Oweiya, Olori, Emigbe)
* community (branch/ogwa affiliation)
* profile { bio, sex, photoUrl, interests, joinedAt, registrationDate }

**Communities**

* name
* location
* description
* leaders

**Articles**

* title
* content
* author
* images
* publishedAt

**Events**

* title
* description
* location
* date
* organizer

**Gallery**

* title
* mediaUrl
* description
* uploadedBy

**Mama White Spiritual Products**

* name
* category
* description
* price
* images
* availability
* stock
* createdAt
* updatedAt

**Orders**

* customer
* products
* quantities
* totalAmount
* paymentMethod
* paymentStatus
* orderStatus
* deliveryInformation
* createdAt
* updatedAt

**Temple Support / Donations**

* donor
* amount
* paymentMethod
* paymentStatus
* purpose
* message
* createdAt

---

## 🛠️ Suggested Technology Stack

**Frontend**

* Next.js
* React
* Tailwind CSS

**Backend**

* Next.js API routes / Node.js + Express

**Database**

* MongoDB + Mongoose

**Authentication**

* NextAuth/Auth.js

**Media Storage**

* Cloudinary (or equivalent)

**Payments**

* Secure online payment provider supporting card payments and bank transfers

**Hosting**

* Vercel (web app)
* MongoDB Atlas (database)

---

## 🚀 Vision

This project aims to be more than a static website. It will be a **digital Igbe community platform**, with separate dashboards for:

* Ordinary members
* Community leaders
* Priests/authorized religious leaders
* Super administrators

By combining cultural heritage with modern technology, the platform will preserve Igbe traditions while connecting communities worldwide.

The platform will also provide a dedicated space for **Mama White Spiritual — Temple of the Queen Mother**, allowing visitors to discover traditional and mystical products and services, while keeping Temple donations and community support separate from commercial purchases.

---

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

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

### What I changed

I **did not change the purpose of your existing README**. I only added the necessary planning for:

1. **Mama White Spiritual**
2. Its physical location
3. The online shop
4. Product categories
5. Online purchasing
6. Orders
7. Temple donations
8. Gifts/contributions
9. Payment methods
10. Admin management for products/orders
11. The MongoDB fields needed later
12. The separation between **commercial purchases** and **Temple donations**

And importantly, **we don't have to build all of this now**. The README is simply documenting where the project is going. We can build it step by step without disturbing the parts of your website that are already working.
```

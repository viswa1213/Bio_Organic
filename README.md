<div align="center">

# 🌿 Bio-Organic

### *Be Organic. Buy Organic. Live Organic.*

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

<img src="Frontend/assets/biOrganic.png" alt="Bio-Organic Logo" width="200"/>

**A modern e-commerce platform dedicated to organic and sustainable products**

[🚀 Features](#-features) • [📦 Installation](#-installation) • [🛠️ Tech Stack](#️-tech-stack) • [📁 Project Structure](#-project-structure) • [🤝 Contributing](#-contributing)

---

</div>

## ✨ About The Project

**Bio-Organic** is a full-stack e-commerce web application that connects conscious consumers with high-quality organic products. Our platform promotes sustainable living by offering a curated selection of natural, eco-friendly items ranging from skincare to wellness products.

<div align="center">

```
🌱 Natural Products  •  🌍 Eco-Friendly  •  💚 Sustainable Living
```

</div>

---

## 🚀 Features

<table>
<tr>
<td width="50%">

### 🛒 Shopping Experience
- **Dynamic Product Catalog** - Browse organic products with live filtering
- **Shopping Cart** - Add, remove, and manage items seamlessly
- **Responsive Design** - Perfect experience on all devices
- **Fast Checkout** - Streamlined purchasing process

</td>
<td width="50%">

### 🔐 User Management
- **Secure Authentication** - Login & registration with validation
- **User Dashboard** - Personalized user experience
- **Data Security** - Express validator for secure input handling
- **Session Management** - Persistent user sessions

</td>
</tr>
<tr>
<td width="50%">

### 💫 Modern UI/UX
- **Clean Interface** - Minimalist design philosophy
- **Bootstrap 5** - Responsive grid and components
- **Interactive Elements** - Smooth animations and transitions
- **Accessibility** - Inclusive design for all users

</td>
<td width="50%">

### ⚡ Performance
- **Optimized Backend** - Fast Express.js server
- **MongoDB Atlas** - Scalable cloud database
- **Static File Serving** - Quick asset delivery
- **CORS Enabled** - Secure cross-origin requests

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### Tools & Libraries
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)

</div>

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **MongoDB** (local or Atlas connection)

### Quick Start

```bash
# 1️⃣ Clone the repository
git clone https://github.com/viswa1213/Bio_Organic.git

# 2️⃣ Navigate to the project directory
cd Bio_Organic

# 3️⃣ Navigate to Backend directory
cd Backend

# 4️⃣ Install dependencies
npm install

# 5️⃣ Create environment file and add your MongoDB connection string
# Edit the .env file and add: Mongo_Url=your_mongodb_connection_string
cp .env.example .env  # Or create manually

# 6️⃣ Start the server
node server.js
```

### Environment Variables

Create a `.env` file in the `Backend` directory:

```env
Mongo_Url=mongodb+srv://your_username:your_password@cluster.mongodb.net/bio_organic
```

---

## 📁 Project Structure

```
Bio_Organic/
│
├── 📂 Backend/
│   ├── 📂 model/
│   │   └── register.js         # User model schema
│   ├── 📂 routes/
│   │   ├── login.js            # Login route handler
│   │   └── register.js         # Registration route handler
│   ├── server.js               # Express server configuration
│   ├── package.json            # Backend dependencies
│   └── .env                    # Environment variables
│
├── 📂 Frontend/
│   ├── 📂 assets/              # Images and media files
│   ├── 📂 JSON/
│   │   └── products.json       # Product catalog data
│   ├── 📂 pages/
│   │   ├── product.html        # Products listing page
│   │   ├── login.html          # User login page
│   │   ├── register.html       # User registration page
│   │   ├── addtocart.html      # Shopping cart page
│   │   └── checkout.html       # Checkout page
│   ├── index.html              # Home page
│   └── index.css               # Global styles
│
└── README.md                   # Project documentation
```

---

## 🖼️ Screenshots

<div align="center">

| Home Page | Products | Login |
|:---------:|:--------:|:-----:|
| 🏠 Landing page with hero section | 🛍️ Browse organic products | 🔐 Secure authentication |

</div>

---

## 🤝 Contributing

Contributions make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. **Fork** the project
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📬 Contact

<div align="center">

**Project Creator:** Viswa

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/viswa1213)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/_viswa_0007)

📧 **Email:** [Contact via GitHub Issues](https://github.com/viswa1213/Bio_Organic/issues)

</div>

---

## 📄 License

<div align="center">

Distributed under the **ISC License**. See `LICENSE` for more information.

---

### ⭐ Show Your Support

If this project helped you, please give it a ⭐ on GitHub!

<img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="60"> <em><b>Thank you for visiting!</b> We believe in the power of organic living. 🌿</em>

---

<sub>Made with 💚 by the Bio-Organic Team | © 2025 Bio-Organic. All Rights Reserved.</sub>

</div>

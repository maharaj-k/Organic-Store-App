# 🌿 Organic Store App

A modern full-stack Organic Store web application built with **Python, Flask, SQLite, HTML, CSS, and JavaScript**. The project provides a complete e-commerce experience with product browsing, shopping cart management, user authentication, order processing, and an admin dashboard.

---

## 🚀 Features

### Customer Features

* Browse organic products
* Product categories and filtering
* Product detail pages
* Responsive Organic Shop-inspired UI
* Add products to cart
* Update cart quantities
* Remove products from cart
* User registration and login
* Secure password hashing
* Checkout and order placement
* Order history dashboard
* Mobile-friendly design

### Admin Features

* Admin authentication
* Product management (Create, Read, Update, Delete)
* Inventory management
* Featured products management
* Order management
* Order status updates
* Customer management
* Dashboard overview

---

## 🛠️ Tech Stack

### Backend

* Python
* Flask
* Flask-SQLAlchemy
* SQLite
* Werkzeug Security

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Database

* SQLite

---

## 📂 Project Structure

```text
organic_store/
│
├── app.py
├── requirements.txt
│
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── shop.html
│   ├── product.html
│   ├── cart.html
│   ├── login.html
│   ├── register.html
│   ├── checkout.html
│   ├── account.html
│   ├── order_success.html
│   └── admin/
│       ├── dashboard.html
│       └── product_form.html
│
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/maharaj-k/Organic-Store-App.git

cd Organic-Store-App
```

### 2. Create a virtual environment

#### Windows

```bash
python -m venv venv

venv\Scripts\activate
```

#### macOS/Linux

```bash
python3 -m venv venv

source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the application

```bash
python app.py
```

### 5. Open in browser

```text
http://127.0.0.1:5000
```

---

## 🔑 Default Admin Account

```text
Email: admin@organic.local
Password: admin123
```

Admin Dashboard:

```text
http://127.0.0.1:5000/admin
```

> Change the default admin password before deploying to production.

---

## 🛒 Main Modules

### Home Page

* Hero section
* Featured products
* Promotional banners
* Organic Shop style layout

### Shop

* Product listing
* Search functionality
* Category filtering
* Product cards

### Cart

* Add items
* Update quantities
* Remove items
* Cart total calculation

### Authentication

* Register account
* Login
* Logout
* Session management

### Checkout

* Review order
* Create order
* Inventory updates
* Order confirmation

### Admin Panel

* Manage products
* Manage inventory
* View customers
* Manage orders

---

## 🔒 Security Features

* Password hashing with Werkzeug
* Session-based authentication
* Protected admin routes
* Login-required checkout
* Input validation

---

## 📱 Responsive Design

The application is optimized for:

* Desktop
* Laptop
* Tablet
* Mobile Devices

---

## 🌱 Future Improvements

* Payment gateway integration
* Product reviews and ratings
* Wishlist functionality
* Coupon system
* Email notifications
* Product image uploads
* Multi-vendor support
* REST API
* Docker deployment
* Dark mode

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Maharaj K**

GitHub: https://github.com/maharaj-k

---

### ⭐ If you found this project useful, please consider giving it a star on GitHub.

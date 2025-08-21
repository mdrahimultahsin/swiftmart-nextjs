# SwiftMart - Next.js E-commerce App

## Project Description
SwiftMart is a simple e-commerce web application built with **Next.js 15 (App Router)**.  
It allows users to browse products, view product details, and, after logging in, manage products via a protected dashboard.  
The app features authentication with **NextAuth.js**, server-side API routes, and dynamic product data with MongoDB.  
Tailwind CSS + DaisyUI is used for a responsive and themeable design with dark/light mode support.

---

## Features
- **Public Pages:**  
  - Landing page with Hero & Product Highlights  
  - Product listing page  
  - Product detail page  
- **Authentication:**  
  - Login with Google (NextAuth.js) or credentials  
  - Protected product management pages  
- **Protected Pages:**  
  - Add new products (only logged-in users)  
- **Optional Enhancements:**  
  - Loading spinner on form submission  

  - Dark/Light theme toggle  

---
## Route Summary

| Route | Method | Description | Auth Required |
|-------|--------|------------|---------------|


| `/products` | GET | List all products
| `/products/[id]` | GET | View details of a single product
| `/dashboard/add-product` | GET/POST | Add a new product (form + API)
| `/api/products` | GET | Fetch all products (JSON) 
| `/api/products` | POST | Add a new product | ✅ Protected Route 
| `/api/products/[id]` | GET | Fetch a single product by ID | 



---

## Setup & Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd swiftmart
```

2. **Install dependencies:**
```bash
git clone <your-repo-url>
cd swiftmart
```
3. **Create a .env.local file in the root directory:**
```bash
MONGO_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```
4. **Run the development server:**
```bash
npm run dev
Open in Browser: http://localhost:3000
```


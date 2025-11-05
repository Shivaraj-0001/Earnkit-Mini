# 🧩 Earnkit Miniapp Builder (Frontend Assignment)

This is a **Next.js + Tailwind CSS** frontend project built for the **Earnkit Technical Assignment**.  
It includes a complete **landing page** and a functional **app builder dashboard**.

---

## 🚀 Tech Stack
- **Next.js 14 (App Router)**
- **React (JS)**
- **Tailwind CSS v4**
- **Deployed on Vercel**

---

## 🏠 Features Overview

### 🌐 Landing Page
- Sticky Navbar with smooth backdrop blur  
- Hero section with prompt + quick idea chips  
- “How it works” animated steps section  
- Leaderboard with time-range tabs  
- Footer with social links  

### ⚙️ Builder Dashboard
- 3-pane layout → **Sidebar | Chat | Preview**  
- Chat panel simulating idea-to-miniapp generation  
- Live status chips (Draft / Preview / Published)  
- TopUp Modal (fake credit system)  
- Publish Modal (mock publish confirmation)

---

## 🧭 Project Structure
src/
├─ app/
│ ├─ page.jsx # Landing Page
│ └─ app/page.jsx # Builder Page
├─ components/
│ ├─ landing/ # Landing Page Components
│ ├─ app/ # Dashboard Components
│ └─ primitives/ # Shared UI Elements
└─ styles/ (if any)



---

## 🧩 How to Run Locally
```bash
# 1️⃣ Clone the repo
git clone https://github.com/<your-username>/Earnkit-Mini.git
cd Earnkit-Mini

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run the dev server
npm run dev

# 4️⃣ Visit
http://localhost:3000


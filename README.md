# 🏦 Banking Transaction System (Ledger Backend)

A production-style **Banking Ledger Backend** that demonstrates how real financial systems maintain balances using immutable transaction records instead of stored values.

This project focuses on **data integrity, transactional safety, and auditability**, mirroring core backend principles used in fintech platforms.

---

## 🚀 Key Features

### 📒 Ledger-Based Accounting
Balances are **not stored**. They are calculated dynamically as the **single source of truth** by aggregating all historical **credit** and **debit** entries.

### 🔐 Immutable Audit Trail
Ledger entries are **append-only** and cannot be modified or deleted, ensuring a reliable and tamper-proof financial history.

### ⚙️ Transactional Atomicity
Implements **MongoDB Sessions** for multi-step transactions:
- If any step fails → the entire transaction **rolls back**
- Prevents partial updates (e.g., debit without credit)

### 🧾 Idempotency Protection
Uses **Idempotency Keys** to prevent duplicate transactions caused by retries or multiple client requests.

### 🔑 Secure Authentication
- User registration & login  
- **bcrypt password hashing**  
- **JWT-based authentication**

### 🚫 Token Blacklisting
JWTs are blacklisted on logout to prevent reuse of compromised tokens.

### 📧 Automated Email Notifications
Integrated with **Nodemailer + Gmail API** for:
- Account registration alerts  
- Transaction status notifications  

### 🏦 Account Management
Supports multiple accounts per user with lifecycle states:
- Active  
- Frozen  
- Closed  

---

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**Security:** JWT, bcrypt, Token Blacklisting  
**Messaging:** Nodemailer (Gmail API)  
**Environment:** dotenv  
**Deployment:** Render  

---

## 📂 Project Structure

```
src/
├── config/ # DB and third-party configurations
├── controllers/ # Route business logic
├── middlewares/ # Auth & validation layers
├── models/ # User, Account, Transaction, Ledger, Blacklist
├── routes/ # API endpoints
├── services/ # Email & external services
├── app.js # Express app setup
└── server.js # Entry point
```

---

## 🧠 Core Concepts

### Ledger Balance Calculation
Uses **MongoDB Aggregation Pipelines** to compute:

Balance = Total Credits - Total Debits

for a given `accountId`.

### 💸 Transaction Flow

A secure fund transfer follows these steps:

1. Create a **Pending** transaction record  
2. Add **Debit** ledger entry (sender)  
3. Add **Credit** ledger entry (receiver)  
4. Mark transaction as **Completed**

All steps run inside a **MongoDB session** to ensure atomicity.

### ⚡ Database Optimization
- **Compound Indexes** on frequently queried fields (e.g., `userId + status`)  
- Optimized balance calculations for high-volume data  

---

## 🔧 Installation & Setup

### 1️⃣ Clone & Install
```bash
git clone <repo-url>
cd banking-ledger
npm install
```
2️⃣ Environment Variables
Create a .env file:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
REFRESH_TOKEN=your_google_refresh_token
```
3️⃣ Run Development Server
```
npm run dev
```
4️⃣ Production Start
```
npm start
```
---
🌐 API Endpoints (Highlights)
🔐 Auth
POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout
---

🏦 Accounts
POST /api/accounts → Create account

GET /api/accounts/balance/:id → Get account balance

---

💸 Transactions
POST /api/transactions → Transfer funds

POST /api/transactions/system/initial-funds → Admin funding

---

🚀 Deployment
Deployed on Render.
Ensure all environment variables are configured in the Render dashboard before deploying.
---

📌 Why This Project Matters
This system demonstrates real-world backend patterns used in financial platforms:

Ledger-based accounting (no stored balances)

Atomic transactions

Idempotent APIs

Immutable audit logs

Secure authentication flows

It reflects production-grade backend architecture rather than basic CRUD.
---

👨‍💻 Author
Jay Parmar
Full Stack Developer (MERN)

🔗 Portfolio: https://my-portfolio-gamma-flax-25.vercel.app/

🔗 LinkedIn: https://www.linkedin.com/in/jay-parmar-598a03244

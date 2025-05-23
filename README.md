# 🏘️ Community Contributions App (Backend)

A backend service for managing a community contribution platform. This API allows users and admins to manage members, financial records, announcements, and service requests.

---

## 🚀 Features

- 🔐 Authentication & Role Management (Admin/User)
- 👥 Member registration and profile management
- 💰 Financial record tracking
- 📢 Announcement system
- ✅ Approval workflows (e.g., member approvals, service requests)
- 🗃️ PostgreSQL-powered persistence with raw SQL
- 📦 Modular, scalable, and DDD-aligned NestJS project structure

---

## 🧰 Tech Stack

- **Backend Framework:** [NestJS](https://nestjs.com/)
- **Language:** TypeScript
- **Database:** PostgreSQL
- **DB Access:** Native SQL using `pg` package (no ORM)

---

## 📁 Modules Overview

| Module          | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| `auth`          | Login logic, role handling                                       |
| `members`       | Member CRUD, including phone, address, photo, and payment status |
| `profile`       | User-specific profile view/edit, file uploads (e.g., receipts)   |
| `financial`     | Handles transactions, contribution tracking, balances            |
| `announcements` | Community-wide messages (admin → users)                          |
| `approvals`     | Tracks approval states of members or submitted service requests  |

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/community-contributions-backend.git
cd community-contributions-backend

2. Install Dependencies
                                bash
npm install



Environment Configuration
Create a .env file in the project root:

env
Copy code
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_user
DB_PASS=your_postgres_password
DB_NAME=community_db


Database Setup
Ensure PostgreSQL is running and a database called community_db is created:

sql

CREATE DATABASE community_db;
This project uses raw SQL (not TypeORM). You must create the necessary tables manually or via an SQL script.

💡 You can generate and share a schema.sql file to assist others in bootstrapping the database. If you have it, include this:

bash

psql -U your_postgres_user -d community_db -f schema.sql


| Table Name          | Description                                     |
| ------------------- | ----------------------------------------------- |
| `members`           | Stores full name, phone, photo, address, etc.   |
| `users`             | Authentication users (if separate from members) |
| `announcements`     | Admin messages to users                         |
| `approvals`         | Approval records for members or actions         |
| `financial_records` | Tracks payments, contributions, balances        |
| `profiles`          | User profile-related details                    |
| `receipts`          | Uploaded files or documents                     |


Run the Server

Copy code
npx ts-node src/main.ts

Server should be running at:

http://localhost:4000

API Overview
Method	Route	Description
POST	/auth/login	Log in a user
GET	/members	List all members
POST	/members	Register a new member
PATCH	/members/:id/payment-status	Update payment status
GET	/announcements	List all announcements
POST	/announcements (admin)	Create new announcement
GET	/profile/:id	Get user profile info
PATCH	/profile/:id	Update profile or upload receipt
GET	/financial/summary	View financial records summary
POST	/approvals	Create or update approval status

🔐 Admin routes require role validation (check implementation).

🔧 Dev Scripts
| Command                   | Description              |
| ------------------------- | ------------------------ |
| `npm install`             | Install project packages |
| `npx ts-node src/main.ts` | Start dev server         |
```

## Database Setup

This project uses PostgreSQL. Before running the app, you need to create the database schema and seed the initial admin user.

### Prerequisites

- PostgreSQL installed and running on your machine
- A PostgreSQL user with privileges to create tables
- `psql` CLI tool available (comes with PostgreSQL)

### Steps to create the database and tables

1. **Create the database**

If you haven't created the database yet, run:

```bash
createdb -U your_db_user community_db

Replace your_db_user with your PostgreSQL username.

Run the schema.sql script

From the root of the project (where schema.sql is located), execute:

bash
Copy code
psql -U your_db_user -d community_db -f schema.sql
This will create all the necessary tables and insert the default admin user.

Update .env file

Make sure your .env file has the correct database credentials, for example:

ini
Copy code
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASS=your_password
DB_NAME=community_db
Run the application

Start the NestJS app:

bash
Copy code
npm run start:dev
or

bash
Copy code
npx ts-node src/main.ts
```

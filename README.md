# 🧾 Job Application Tracker

A full-stack web application to track job applications built with **Angular**, **Node.js (Express)**, and **MySQL**. It allows users to add, view, update, and delete job applications, and track their status through various stages such as Applied, Interview, Offered, etc.

---

## 🚀 Features

- ✅ Add new job applications
- 📋 View job applications in a responsive table
- ✏️ Edit and delete entries
- 📊 Summary dashboard with counts by status
- 🌐 RESTful API using Node.js and Express
- 🛢️ MySQL database for persistent storage

---

## 🛠️ Technologies Used

- **Frontend**: Angular 17+, Bootstrap 5
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Communication**: HTTP using Angular `HttpClient`

---

## 📂 Project Structure
job-application-tracker/
├── backend/ # Node.js API
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ ├── .env
│ └── server.js
├── frontend/ # Angular UI
│ └── (Angular project files)
└── database/
└── schema.sql # MySQL schema file


---

## 🧑‍💻 Setup Instructions

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/ankit242509/job-application-tracker.git
cd job-application-tracker


2. Set Up the MySQL Database
Make sure MySQL is installed and running.

Use MySQL CLI or Workbench to import the schema:
mysql -u root -p < database/schema.sql

3. Backend Setup
cd backend
npm install
Create a .env file in /backend:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=job_tracker
PORT=3000

4. Frontend Setup
cd frontend
npm install
ng serve



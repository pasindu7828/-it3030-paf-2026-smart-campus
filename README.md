
# 📘 Smart Campus Operations Hub

### IT3030 – Programming Applications and Frameworks (2026)

A full-stack, production-inspired web application designed to manage university facilities, bookings, and maintenance operations efficiently.

---

## 🚀 Project Overview

The **Smart Campus Operations Hub** is a centralized system that enables universities to manage:

* Facility & asset catalogues
* Booking workflows with conflict prevention
* Maintenance & incident ticketing
* Real-time notifications
* Secure authentication & role-based access

This system is built using a **Spring Boot REST API** and a **React web application**, following modern software engineering practices.

---

## 🛠️ Tech Stack

### 🔙 Backend

* Java 17+
* Spring Boot
* Spring Security (OAuth 2.0)
* JPA / Hibernate
* RESTful API Architecture

### 🔜 Frontend

* React.js
* Axios
* React Router
* Tailwind CSS

### 🗄️ Database

* MySQL 

### ⚙️ DevOps

* GitHub (Version Control)
* GitHub Actions (CI/CD Pipeline)

---

## 📂 Project Structure

```
smart-campus/
│
├── backend/                 # Spring Boot API
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   └── config/
│
├── frontend/                # React Application
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── context/
│
├── docs/                    # Diagrams & documentation
├── README.md
```

---

## ✨ Core Features

### 📦 Module A – Facilities & Assets Catalogue

* Manage resources (rooms, labs, equipment)
* Metadata: capacity, location, availability, status
* Search & filter functionality

### 📅 Module B – Booking Management

* Booking workflow:
  `PENDING → APPROVED / REJECTED → CANCELLED`
* Conflict detection (no overlapping bookings)
* Admin approval system
* User-specific and admin-wide booking views

### 🛠️ Module C – Maintenance & Incident Ticketing

* Create tickets with:

  * Category
  * Priority
  * Description
  * Image attachments (max 3)
* Workflow:
  `OPEN → IN_PROGRESS → RESOLVED → CLOSED`
* Technician assignment
* Comment system with ownership control

### 🔔 Module D – Notifications

* Booking updates
* Ticket status changes
* Comment alerts
* Notification panel in UI

### 🔐 Module E – Authentication & Authorization

* OAuth 2.0 login (Google Sign-In)
* Role-based access:

  * USER
  * ADMIN
  * (Optional: TECHNICIAN)

---

## 🔑 API Features

* RESTful endpoints with proper HTTP methods:

  * `GET`
  * `POST`
  * `PUT / PATCH`
  * `DELETE`
* Input validation
* Global error handling
* Secure endpoints with JWT / OAuth
* File upload handling (images)

---

## 🧪 Testing & Quality

* Unit Testing (JUnit / Mockito)
* Integration Testing
* Postman API collections
* Validation and error responses

---

## ⚙️ Setup Instructions

### 🔹 Prerequisites

* Node.js (v18+)
* Java JDK 17+
* Maven
* MySQL

---

### 🔸 Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend runs on:
👉 `http://localhost:8084`

---

### 🔸 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
👉 `http://localhost:5173`

---

## 🔄 CI/CD Pipeline

* GitHub Actions configured for:

  * Build
  * Test
  * Continuous Integration

---

## 📊 Additional Features (Optional Enhancements)

* Admin analytics dashboard
* Ticket SLA tracking
* Notification preferences

---

## 👥 Team Contributions

| Member   | Responsibility                   |
| -------- | -------------------------------- |
| Member 1 | Facilities & Resource Management |
| Member 2 | Booking System & Conflict Logic  |
| Member 3 | Incident Tickets & Attachments   |
| Member 4 | Notifications & Authentication   |

> Each member implemented at least **4 REST endpoints** using different HTTP methods.

---

## 📄 Documentation

* System Architecture Diagram
* API Endpoint List
* Database Design
* Testing Evidence

Available in the `/docs` folder and final report.

---

## 📸 Demo & Evidence

* Screenshots included in report
* Optional video demo link (if available)

---

## ⚠️ Academic Integrity

This project is developed strictly following academic guidelines.
All team members can explain:

* Their implemented endpoints
* Database design
* UI components

---

## 📌 Repository Naming Convention

```
it3030-paf-2026-smart-campus-groupXX
```

---

## 📎 Submission Details

* 📄 Final Report (PDF)
* 🔗 GitHub Repository
* 💻 Running System
* 📸 Evidence (Screenshots / Video)

---

## 💡 Future Improvements

* Mobile app integration
* Real-time notifications (WebSockets)
* AI-based maintenance prediction

---

## 🏁 Conclusion

This project demonstrates a **real-world, scalable, and secure full-stack system**, applying modern development practices including:

* Clean architecture
* RESTful design
* Secure authentication
* CI/CD integration





🎉 NGO Volunteer Management System

A modern platform that connects NGOs, Volunteers & Staff — smoother, faster, smarter.

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2RjN2x0dHJrd2J5dXdpMGNsdDExMWgyeWs2dmxrb2N3dGcxbzU3ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cFkiFMDg3iFoI/giphy.gif" width="350"/>


💡 Why I Created This Project (Real Problems I Faced)

While working with real NGOs, maine kuch major issues face kiye:

😖 1. NGOs ka data scattered tha

Events WhatsApp pe, volunteer names Google Sheets pe, attendance Excel me.
Nothing was in one place.

🥵 2. Event management was a mess

Kisne apply kiya? Kisko approve kiya? Kisi ko nahi pata.

🧩 3. Staff roles clear nahi hote

Admin, manager, volunteer—all mixed up.
No proper permission system.

⏳ 4. Manual approval = time waste

Volunteers apply karte the → NGO manually update karta → Confusion.

🧠 5. No proper system for NGOs

Market me volunteer–NGO system bohot kam milte hain.

👉 So I decided to build one system that fixes everything.

🚀 What This Project Does (In Simple Words)

✔ NGOs register → create events → manage staff
✔ Volunteers signup → browse events → apply
✔ NGO staff approve/reject
✔ Clean dashboards
✔ Real-time role system
✔ Everything in one place ❤️

🎯 Key Features
Feature	Description
🏢 NGO Module	Signup, login, verification, profile
👥 Staff Roles	Admin / Manager / Viewer
🙋 Volunteer Module	Signup, login, skills, profile
📅 Event Management	Create, edit, delete, list
📝 Applications	Volunteer applies, NGO approves
🔐 JWT Auth	Secure login for all roles
📂 MERN Stack	Scalable architecture


<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWI0dTZhcDdicXczc2g0bmppaGRjZXIzcjY0ZzFpbGZ1bWg1a3NmNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7qE1YN7aBOFPRw8E/giphy.gif" width="350"/>



🗄️ Database Schemas (Short & Clean)
🏢 NGO
{ name, email, password, phone, address, verified }

👥 NGO Staff
{ ngoId, name, email, password, role }

🙋 Volunteer
{ name, email, password, phone, skills, city }

📅 Event
{ ngoId, title, description, date, location, requiredVolunteers }

📝 Application
{ eventId, volunteerId, status }

🔗 API Overview (Simple & Clean)
🏢 NGO
POST /api/ngo/register
POST /api/ngo/login
GET  /api/ngo/profile
PUT  /api/ngo/profile

👥 Staff
POST /api/ngo-user/create
POST /api/ngo-user/login
GET  /api/ngo-user
PUT  /api/ngo-user/:id
DELETE /api/ngo-user/:id

🙋 Volunteer
POST /api/volunteer/register
POST /api/volunteer/login
GET  /api/volunteer/profile
PUT  /api/volunteer/profile
GET  /api/volunteer/applications

📅 Events
POST /api/events/create
GET  /api/events
GET  /api/events/:id
PUT  /api/events/:id
DELETE /api/events/:id

📝 Applications
POST /api/applications/apply
GET  /api/applications/:eventId
PATCH /api/applications/:id/status

🧱 Project Structure
Volunteer_Management_System/
│── server/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│── client/
│   ├── src/
│   ├── components/
│   ├── pages/

🛠️ Tech Stack

MongoDB

Express.js

React

Node.js

JWT Authentication

Multer (optional)

🚀 How to Run This Project
📌 Backend Setup
cd server
npm install
npm start

📌 Frontend Setup
cd client
npm install
npm start

🤝 Contributing

Pull Requests welcome.
Raise issues for bugs, ideas, or improvements.

💙 Made with love — to solve real NGO problems
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczBpa3l1aGgyNjc1aHo1cWZtYnQwYnm3OXBnYjJ4cW9mcTVyYXkzdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26gsspf0C1GzhU6Xe/giphy.gif" width="300"/>

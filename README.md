This project is a full-stack travel booking application that allows users to explore, view, and book travel experiences such as kayaking, trekking, and boat cruises.
It is divided into two parts:

🖥️ Frontend — built with React + Vite + Tailwind CSS

⚙️ Backend — built with Node.js + Express + MongoDB

📁 Folder Structure
INTERN/
│
├── Frontend/       # React (Vite) frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── Backend/        # Node.js + Express + MongoDB backend
    ├── config/
    ├── controllers/
    ├── data/
    ├── models/
    ├── routes/
    ├── seed.js
    ├── server.js
    ├── .env
    └── package.json

⚙️ Backend Setup Guide (INTERN/Backend)
🧩 Tech Stack

Node.js

Express.js

MongoDB (Mongoose)

dotenv

🧰 Step-by-Step Setup
1️⃣ Go to the backend folder:
cd Backend

2️⃣ Install dependencies:
npm install

3️⃣ Create a .env file in the root of /Backend:
MONGO_URI=mongodb://127.0.0.1:27017/BookIt
PORT=8000


💡 If using MongoDB Atlas, replace the URI with your connection string.

4️⃣ Seed sample data into MongoDB:

Make sure MongoDB is running locally or connected through Atlas, then run:

node seed.js


✅ This will insert:

Sample experiences (Kayaking, Trekking, etc.)

Sample users (Admin + Test user)

Sample bookings

5️⃣ Start the backend server:
npm start


You should see:

✅ MongoDB connected
Server running on port 8000

6️⃣ API Routes (Example)
Method	Endpoint	Description
GET	/api/experiences	Get all travel experiences
GET	/api/experiences/:id	Get experience details by ID
POST	/api/bookings	Create a new booking
GET	/api/bookings/:userId	Get bookings for a user
🖥️ Frontend Setup Guide (INTERN/Frontend)
🧩 Tech Stack

React (Vite)

Tailwind CSS

Axios (for backend API calls)

React Router (for navigation)

🧰 Step-by-Step Setup
1️⃣ Go to the frontend folder:
cd Frontend

2️⃣ Install dependencies:
npm install

3️⃣ Create a .env file in the /Frontend root:
VITE_API_URL=http://localhost:8000


This ensures that your frontend can connect to your backend API.

4️⃣ Run the frontend:
npm run dev


The frontend should now be running at:
👉 http://localhost:5173

5️⃣ Folder Overview
Frontend/
│
├── src/
│   ├── components/     # Navbar, Cards, etc.
│   ├── pages/          # Home, Details, Booking, Confirmation
│   ├── assets/         # Images or icons
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
└── tailwind.config.js

🔗 Connecting Frontend & Backend

The Frontend makes API requests (using Axios) to the Backend via:

axios.get(`${import.meta.env.VITE_API_URL}/api/experiences`);


Ensure the Backend (localhost:8000) is running before starting the Frontend (localhost:5173).

🚀 Running the Complete Project
Step 1: Start MongoDB

If using local MongoDB:

mongod

Step 2: Start Backend
cd Backend
npm start

Step 3: Start Frontend

Open another terminal:

cd Frontend
npm run dev


Now open your browser and visit:
👉 http://localhost:5173

🌱 Features

✅ View curated travel experiences
✅ Experience details with images, descriptions, and available slots
✅ Book an experience (connects to backend booking API)
✅ Responsive design for mobile & desktop
✅ Backend seeding with realistic data
✅ RESTful API with Mongoose models

🧠 Developer Notes

You can easily extend this app by adding:

User authentication (JWT)

Payment integration (Razorpay/Stripe)

Admin dashboard for managing experiences and bookings

Data is seeded automatically via seed.js script.

👨‍💻 Author

Saiyam Rajput
🌐 GitHub
 | 💼 LinkedIn

📧 saiyamrajput71@gmail.com

📜 License

This project is licensed under the MIT License — free for personal and educational use.

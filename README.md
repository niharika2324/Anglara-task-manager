# Task Tracker

Task management application built using Next.js, Express.js and MongoDB.

## Features

* Create tasks
* View tasks
* Edit tasks
* Delete tasks
* Mark tasks as completed
* Filter tasks by status
* Validation for task description

## Tech Stack

Frontend:

* Next.js
* Tailwind CSS
* Axios

Backend:

* Express.js
* MongoDB Atlas
* Mongoose

## Setup Instructions

### Backend

```bash
cd server
npm install
npm run dev
```

Create `.env`

```env
PORT=5000
MONGO_URI=your_connection_string
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

## API Endpoints

POST /tasks

GET /tasks

PUT /tasks/:id

DELETE /tasks/:id

PATCH /tasks/:id/mark-complete

## Database

MongoDB Atlas

## Deployment

Frontend: Vercel

Backend: Render

## Screenshots

### Home Page
![Home](./screenshots/home.png)

### Add Task
![Add Task](./screenshots/home-tasks.png)

### Edit Task
![Edit Task](./screenshots/edit.png)

### Filter Tasks
![Filter](./screenshots/filter.png)
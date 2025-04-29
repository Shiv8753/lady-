# Lady Sarah Detailing Website

This project is a full website for Lady Sarah Detailing with a React frontend and Node.js backend.

## Project Structure

- `frontend/` - React frontend application
- `backend/` - Express backend server

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your system

### Install Dependencies

1. Frontend:

```bash
cd frontend
npm install
```

2. Backend:

```bash
cd ../backend
npm install
```

### Running the Project

1. Start the backend server:

```bash
npm start
```

This will start the backend API server on port 5000.

2. In a separate terminal, start the frontend development server:

```bash
cd ../frontend
npm start
```

This will start the React app on port 3000 and open it in your browser.

### Notes

- The frontend communicates with the backend API at `http://localhost:5000`.
- The admin login credentials are:
  - Username: `admin`
  - Password: `password123`
- Add your images to the `frontend/public/images` folder for the gallery and homepage.
- Update the Google Maps API key in `Contact.js` for the location map.
- Payment processing is currently simulated; integrate a real payment gateway as needed.
- Email sending for booking confirmation is not implemented yet.

## Future Improvements

- Add real payment gateway integration.
- Implement email notifications for bookings.
- Enhance UI styling and responsiveness.
- Add authentication token handling for admin routes.

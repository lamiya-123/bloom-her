# EmpowerHer Backend Documentation

## Overview
This is the Node.js/Express backend for the EmpowerHer Women Entrepreneurship Platform. It provides RESTful APIs for managing business categories, testimonials, newsletter subscriptions, and user inquiries.

## Tech Stack
- **Server**: Node.js + Express.js
- **Database**: SQLite3
- **CORS**: Enabled for frontend communication

## Installation

### Prerequisites
- Node.js (v14+)
- npm

### Setup Steps

1. **Navigate to backend folder**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`

## Database Schema

### Categories Table
- `id` (TEXT PRIMARY KEY): Unique category identifier
- `name` (TEXT): Category name
- `emoji` (TEXT): Category emoji
- `description` (TEXT): Business description
- `investment` (TEXT): Investment range
- `monthlyEarnings` (TEXT): Earning potential
- `timeToProfit` (TEXT): Time to break even
- `rating` (REAL): Average rating (0-5)
- `businessCount` (INTEGER): Number of active businesses
- `details` (TEXT): JSON array of business details
- `successTip` (TEXT): Expert success tip
- `resources` (TEXT): Available resources

### Testimonials Table
- `id` (INTEGER PRIMARY KEY): Auto-increment ID
- `name` (TEXT): Entrepreneur name
- `initials` (TEXT): Name initials
- `category` (TEXT): Business category
- `quote` (TEXT): Success quote
- `rating` (TEXT): Star rating
- `impact` (TEXT): Business impact

### Subscribers Table
- `id` (INTEGER PRIMARY KEY): Auto-increment ID
- `email` (TEXT UNIQUE): Email address
- `subscribedAt` (DATETIME): Subscription timestamp

### Inquiries Table
- `id` (INTEGER PRIMARY KEY): Auto-increment ID
- `email` (TEXT): User email
- `businessCategory` (TEXT): Interested business
- `message` (TEXT): Inquiry message
- `createdAt` (DATETIME): Inquiry timestamp

## API Endpoints

### Public Endpoints

#### Get All Categories
```
GET /api/categories
Response: Array of all business categories
```

#### Get Single Category
```
GET /api/categories/:id
Parameters: id = category ID
Response: Single category object with details
```

#### Get All Testimonials
```
GET /api/testimonials
Response: Array of all testimonials
```

#### Subscribe to Newsletter
```
POST /api/subscribe
Body: { email: "user@example.com" }
Response: { message: "Successfully subscribed!", email: "..." }
```

#### Create Business Inquiry
```
POST /api/inquiries
Body: { 
  email: "user@example.com", 
  businessCategory: "baking",
  message: "Optional message"
}
Response: { message: "Inquiry submitted successfully!", id: 123 }
```

#### Health Check
```
GET /api/health
Response: { status: "ok", message: "...", timestamp: "..." }
```

### Admin Endpoints

#### Get All Subscribers
```
GET /api/admin/subscribers
Response: { total: 15, subscribers: [...] }
```

#### Get All Inquiries
```
GET /api/admin/inquiries
Response: { total: 8, inquiries: [...] }
```

## CORS Configuration

The backend has CORS enabled for all origins. To restrict:

```javascript
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};
app.use(cors(corsOptions));
```

## Database File

The SQLite database is created automatically at:
```
backend/empowerher.db
```

## Error Handling

All endpoints return appropriate HTTP status codes:
- `200`: Success
- `400`: Bad Request
- `404`: Not Found
- `500`: Server Error

## Future Enhancements

1. **Authentication**
   - JWT-based user authentication
   - Role-based access control (Admin, User, Entrepreneur)

2. **User Management**
   - User registration and profile
   - Business profile creation
   - Product/service listings

3. **Transaction Management**
   - Payment processing
   - Order management
   - Seller dashboards

4. **Communication**
   - Email notifications
   - In-app messaging
   - Community forums

5. **Analytics**
   - Platform metrics
   - User engagement tracking
   - Business performance analytics

## Deployment

### Using Node.js directly
```bash
NODE_ENV=production npm start
```

### Using PM2
```bash
npm install -g pm2
pm2 start server.js --name "empowerher"
pm2 startup
pm2 save
```

### Using Docker
```dockerfile
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## Troubleshooting

### Database locked error
- Ensure only one instance of the server is running
- Check file permissions on empowerher.db

### CORS errors
- Verify frontend and backend URLs match
- Check CORS configuration in server.js

### Port already in use
- Change PORT in .env file
- Or kill process using port 5000

## Support

For issues or questions, contact: hello@empowerher.com

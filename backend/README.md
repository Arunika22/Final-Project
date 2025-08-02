# Portfolio Finance Backend API

A complete Node.js backend API for the Portfolio Finance Manager application using Express.js and MySQL.

## Features

- **Complete CRUD operations** for all entities
- **MySQL database** with connection pooling
- **Modular architecture** with separate models, controllers, and routes
- **Error handling** middleware
- **CORS enabled** for React frontend
- **Environment configuration** with .env
- **Logging** with Morgan

## Database Tables

- `users` - User management
- `assets` - Financial assets (crypto, stocks, funds)
- `portfolios` - User portfolios
- `portfolio_items` - Items in portfolios/watchlists/suggestions
- `asset_history` - Historical price data
- `portfolio_history` - Portfolio performance history
- `transactions` - Buy/sell transactions

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Database Setup
1. Create MySQL database:
```sql
mysql -u root -p < database.sql
```

2. Configure environment variables in `.env`:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_finance
PORT=5000
```

### 3. Start the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Assets
- `GET /api/assets` - Get all assets
- `GET /api/assets/:id` - Get asset by ID
- `POST /api/assets` - Create new asset
- `PUT /api/assets/:id` - Update asset
- `DELETE /api/assets/:id` - Delete asset

### Portfolio Items
- `GET /api/portfolio-items` - Get all portfolio items
- `GET /api/portfolio-items/:id` - Get portfolio item by ID
- `GET /api/portfolio-items/type/:type` - Get items by type (portfolio/watchlist/suggestions)
- `POST /api/portfolio-items` - Create new portfolio item
- `PUT /api/portfolio-items/:id` - Update portfolio item
- `DELETE /api/portfolio-items/:id` - Delete portfolio item

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Portfolios
- `GET /api/portfolios` - Get all portfolios
- `GET /api/portfolios/:id` - Get portfolio by ID
- `GET /api/portfolios/user/:userId` - Get portfolios by user ID
- `POST /api/portfolios` - Create new portfolio
- `PUT /api/portfolios/:id` - Update portfolio
- `DELETE /api/portfolios/:id` - Delete portfolio

### Asset History
- `GET /api/asset-history` - Get all asset history
- `GET /api/asset-history/:id` - Get asset history by ID
- `GET /api/asset-history/asset/:assetId` - Get history by asset ID
- `POST /api/asset-history` - Create new asset history entry
- `PUT /api/asset-history/:id` - Update asset history
- `DELETE /api/asset-history/:id` - Delete asset history

### Portfolio History
- `GET /api/portfolio-history` - Get all portfolio history
- `GET /api/portfolio-history/:id` - Get portfolio history by ID
- `GET /api/portfolio-history/portfolio/:portfolioId` - Get history by portfolio ID
- `POST /api/portfolio-history` - Create new portfolio history entry
- `PUT /api/portfolio-history/:id` - Update portfolio history
- `DELETE /api/portfolio-history/:id` - Delete portfolio history

### Transactions
- `GET /api/transactions` - Get all transactions
- `GET /api/transactions/:id` - Get transaction by ID
- `GET /api/transactions/portfolio/:portfolioId` - Get transactions by portfolio ID
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Health Check
- `GET /api/health` - API health status

## Project Structure

```
backend/
├── config/
│   └── database.js          # Database connection
├── controllers/
│   ├── assetController.js
│   ├── assetHistoryController.js
│   ├── portfolioController.js
│   ├── portfolioHistoryController.js
│   ├── portfolioItemController.js
│   ├── transactionController.js
│   └── userController.js
├── middleware/
│   └── errorHandler.js      # Error handling middleware
├── models/
│   ├── Asset.js
│   ├── AssetHistory.js
│   ├── Portfolio.js
│   ├── PortfolioHistory.js
│   ├── PortfolioItem.js
│   ├── Transaction.js
│   └── User.js
├── routes/
│   ├── assets.js
│   ├── assetHistory.js
│   ├── portfolios.js
│   ├── portfolioHistory.js
│   ├── portfolioItems.js
│   ├── transactions.js
│   └── users.js
├── .env                     # Environment variables
├── database.sql             # Database schema
├── package.json
├── README.md
└── server.js               # Main server file
```

## Frontend Integration

The API is configured to work with a React frontend running on `http://localhost:3000`. CORS is enabled for this origin.

## Error Handling

The API includes comprehensive error handling for:
- Database connection errors
- Duplicate entry violations
- Foreign key constraint violations
- 404 Not Found errors
- 500 Internal Server errors
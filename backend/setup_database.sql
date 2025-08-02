-- Portfolio Finance Database Setup
CREATE DATABASE IF NOT EXISTS portfolio_finance;
USE portfolio_finance;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Assets table
CREATE TABLE IF NOT EXISTS assets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    symbol VARCHAR(20) NOT NULL UNIQUE,
    type ENUM('crypto', 'stock', 'fund') NOT NULL,
    current_price DECIMAL(15, 8) NOT NULL,
    daily_change_percent DECIMAL(8, 4) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Portfolios table
CREATE TABLE IF NOT EXISTS portfolios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(255) NOT NULL,
    total_value DECIMAL(15, 8) DEFAULT 0,
    total_gain_loss DECIMAL(15, 8) DEFAULT 0,
    total_gain_loss_percent DECIMAL(8, 4) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Portfolio items table
CREATE TABLE IF NOT EXISTS portfolio_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    asset_id INT NOT NULL,
    amount DECIMAL(15, 8) DEFAULT 0,
    avg_purchase_price DECIMAL(15, 8) DEFAULT 0,
    column_type ENUM('portfolio', 'watchlist', 'suggestions') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (asset_id) REFERENCES assets(id) ON DELETE CASCADE
);

-- Asset history table
CREATE TABLE IF NOT EXISTS asset_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    asset_id INT NOT NULL,
    price DECIMAL(15, 8) NOT NULL,
    recorded_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (asset_id) REFERENCES assets(id) ON DELETE CASCADE,
    UNIQUE KEY unique_asset_date (asset_id, recorded_date)
);

-- Portfolio history table
CREATE TABLE IF NOT EXISTS portfolio_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    portfolio_id INT NOT NULL,
    total_value DECIMAL(15, 8) NOT NULL,
    total_gain_loss DECIMAL(15, 8) DEFAULT 0,
    total_gain_loss_percent DECIMAL(8, 4) DEFAULT 0,
    recorded_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (portfolio_id) REFERENCES portfolios(id) ON DELETE CASCADE,
    UNIQUE KEY unique_portfolio_date (portfolio_id, recorded_date)
);

-- Transactions table
CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    portfolio_id INT,
    asset_id INT NOT NULL,
    transaction_type ENUM('buy', 'sell') NOT NULL,
    quantity DECIMAL(15, 8) NOT NULL,
    price_per_unit DECIMAL(15, 8) NOT NULL,
    total_amount DECIMAL(15, 8) NOT NULL,
    fees DECIMAL(15, 8) DEFAULT 0,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (portfolio_id) REFERENCES portfolios(id) ON DELETE SET NULL,
    FOREIGN KEY (asset_id) REFERENCES assets(id) ON DELETE CASCADE
);

-- Sample data
INSERT IGNORE INTO assets (name, symbol, type, current_price, daily_change_percent) VALUES
('Bitcoin', 'BTC', 'crypto', 45000.00000000, 2.5),
('Ethereum', 'ETH', 'crypto', 3200.00000000, -1.2),
('Apple Inc.', 'AAPL', 'stock', 175.50000000, 0.8),
('Tesla Inc.', 'TSLA', 'stock', 250.75000000, -2.1),
('S&P 500 ETF', 'SPY', 'fund', 420.25000000, 0.3),
('Solana', 'SOL', 'crypto', 24.37000000, 2.14),
('Cardano', 'ADA', 'crypto', 0.37540000, -1.23),
('Ripple', 'XRP', 'crypto', 0.62310000, 0.58),
('Polkadot', 'DOT', 'crypto', 5.23000000, 3.75),
('Litecoin', 'LTC', 'crypto', 92.84000000, -0.93);

INSERT IGNORE INTO portfolio_items (asset_id, amount, avg_purchase_price, column_type) VALUES
(1, 0.5, 42000.00000000, 'portfolio'),
(2, 2.0, 3000.00000000, 'portfolio'),
(3, 10.0, 170.00000000, 'watchlist'),
(4, 0.0, 0.00000000, 'suggestions'),
(5, 50.0, 410.00000000, 'portfolio'),
(6, 32.5, 22.60000000, 'portfolio'),
(7, 1050.0, 0.35500000, 'watchlist'),
(8, 0.0, 0.00000000, 'suggestions'),
(9, 0.0, 0.00000000, 'suggestions'),
(10, 0.0, 0.00000000, 'watchlist');
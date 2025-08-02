-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: projectData
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assets`
--

DROP TABLE IF EXISTS `assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assets` (
  `id` varchar(32) NOT NULL,
  `symbol` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `logo_url` varchar(255) DEFAULT NULL,
  `type` enum('crypto','stock','fund') NOT NULL DEFAULT 'crypto',
  `current_price` decimal(15,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assets`
--

LOCK TABLES `assets` WRITE;
/*!40000 ALTER TABLE `assets` DISABLE KEYS */;
INSERT INTO `assets` VALUES ('aapl-asset-id-004','AAPL','Apple Inc',NULL,'stock',150.00),('avalanche','AVAX','Avalanche','https://cryptologos.cc/logos/avalanche-avax-logo.png','crypto',0.00),('binancecoin','BNB','Binance Coin','https://cryptologos.cc/logos/binance-coin-bnb-logo.png','crypto',0.00),('bitcoin','BTC','Bitcoin','https://cryptologos.cc/logos/bitcoin-btc-logo.png','crypto',0.00),('btc-asset-id-001','BTC','Bitcoin',NULL,'crypto',60000.00),('cardano','ADA','Cardano','https://cryptologos.cc/logos/cardano-ada-logo.png','crypto',0.00),('chainlink','LINK','Chainlink','https://cryptologos.cc/logos/chainlink-link-logo.png','crypto',0.00),('dogecoin','DOGE','Dogecoin','https://cryptologos.cc/logos/dogecoin-doge-logo.png','crypto',0.00),('eth-asset-id-002','ETH','Ethereum',NULL,'crypto',4000.00),('ethereum','ETH','Ethereum','https://cryptologos.cc/logos/ethereum-eth-logo.png','crypto',0.00),('litecoin','LTC','Litecoin','https://cryptologos.cc/logos/litecoin-ltc-logo.png','crypto',0.00),('mf-asset-id-005','VFIAX','Vanguard 500 Index Fund',NULL,'fund',350.00),('polkadot','DOT','Polkadot','https://cryptologos.cc/logos/polkadot-new-dot-logo.png','crypto',0.00),('ripple','XRP','Ripple','https://cryptologos.cc/logos/xrp-xrp-logo.png','crypto',0.00),('solana','SOL','Solana','https://cryptologos.cc/logos/solana-sol-logo.png','crypto',0.00),('tsla-asset-id-003','TSLA','Tesla Inc',NULL,'stock',700.00),('uniswap','UNI','Uniswap','https://cryptologos.cc/logos/uniswap-uni-logo.png','crypto',0.00);
/*!40000 ALTER TABLE `assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `market_data`
--

DROP TABLE IF EXISTS `market_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `market_data` (
  `id` char(36) NOT NULL,
  `asset_id` varchar(32) NOT NULL,
  `timestamp` datetime NOT NULL,
  `price` decimal(18,6) DEFAULT NULL,
  `market_cap` decimal(24,2) DEFAULT NULL,
  `volume_24h` decimal(24,2) DEFAULT NULL,
  `change_24h` decimal(8,4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `asset_id` (`asset_id`),
  CONSTRAINT `market_data_ibfk_1` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `market_data`
--

LOCK TABLES `market_data` WRITE;
/*!40000 ALTER TABLE `market_data` DISABLE KEYS */;
INSERT INTO `market_data` VALUES ('1a2b3c4d-0001','bitcoin','2025-07-30 10:00:00',29650.250000,580000000000.00,18500000000.00,1.5200),('1a2b3c4d-0002','ethereum','2025-07-30 10:00:00',1860.450000,223000000000.00,10200000000.00,-0.7500),('1a2b3c4d-0003','solana','2025-07-30 10:00:00',24.370000,9700000000.00,560000000.00,2.1400),('1a2b3c4d-0004','cardano','2025-07-30 10:00:00',0.375400,13200000000.00,420000000.00,-1.2300),('1a2b3c4d-0005','ripple','2025-07-30 10:00:00',0.623100,28800000000.00,670000000.00,0.5800),('1a2b3c4d-0006','polkadot','2025-07-30 10:00:00',5.230000,6540000000.00,320000000.00,3.7500),('1a2b3c4d-0007','litecoin','2025-07-30 10:00:00',92.840000,6800000000.00,870000000.00,-0.9300),('1a2b3c4d-0008','binancecoin','2025-07-30 10:00:00',246.500000,38000000000.00,1900000000.00,-1.2100),('1a2b3c4d-0009','avalanche','2025-07-30 10:00:00',13.440000,4800000000.00,250000000.00,1.8900),('1a2b3c4d-0010','dogecoin','2025-07-30 10:00:00',0.074500,10400000000.00,340000000.00,0.1700);
/*!40000 ALTER TABLE `market_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_books`
--

DROP TABLE IF EXISTS `order_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_books` (
  `id` char(36) NOT NULL,
  `asset_id` varchar(32) NOT NULL,
  `order_type` enum('buy','sell') NOT NULL,
  `price` decimal(18,6) NOT NULL,
  `amount` decimal(36,18) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `asset_id` (`asset_id`),
  CONSTRAINT `order_books_ibfk_1` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_books`
--

LOCK TABLES `order_books` WRITE;
/*!40000 ALTER TABLE `order_books` DISABLE KEYS */;
INSERT INTO `order_books` VALUES ('2ae6cd65-6eb8-11f0-86c6-0a4e115e0783','btc-asset-id-001','buy',59500.000000,0.250000000000000000,'2025-08-01 09:16:12'),('2ae6d565-6eb8-11f0-86c6-0a4e115e0783','btc-asset-id-001','sell',60500.000000,0.400000000000000000,'2025-08-01 09:16:12'),('2ae6d70b-6eb8-11f0-86c6-0a4e115e0783','eth-asset-id-002','buy',3900.000000,1.500000000000000000,'2025-08-01 09:16:12'),('2ae6d7db-6eb8-11f0-86c6-0a4e115e0783','eth-asset-id-002','sell',4100.000000,2.000000000000000000,'2025-08-01 09:16:12'),('2ae6d897-6eb8-11f0-86c6-0a4e115e0783','tsla-asset-id-003','buy',680.000000,5.000000000000000000,'2025-08-01 09:16:12'),('2ae6d955-6eb8-11f0-86c6-0a4e115e0783','tsla-asset-id-003','sell',720.000000,3.000000000000000000,'2025-08-01 09:16:12'),('2ae6da10-6eb8-11f0-86c6-0a4e115e0783','aapl-asset-id-004','buy',145.000000,10.000000000000000000,'2025-08-01 09:16:12'),('2ae6dac8-6eb8-11f0-86c6-0a4e115e0783','aapl-asset-id-004','sell',155.000000,12.000000000000000000,'2025-08-01 09:16:12'),('2ae6db6e-6eb8-11f0-86c6-0a4e115e0783','mf-asset-id-005','buy',340.000000,20.000000000000000000,'2025-08-01 09:16:12'),('2ae6dc15-6eb8-11f0-86c6-0a4e115e0783','mf-asset-id-005','sell',360.000000,18.000000000000000000,'2025-08-01 09:16:12'),('2ae6dcbd-6eb8-11f0-86c6-0a4e115e0783','btc-asset-id-001','buy',59000.000000,0.150000000000000000,'2025-08-01 09:16:12'),('2ae6dd68-6eb8-11f0-86c6-0a4e115e0783','eth-asset-id-002','sell',4150.000000,1.200000000000000000,'2025-08-01 09:16:12'),('2ae6de23-6eb8-11f0-86c6-0a4e115e0783','tsla-asset-id-003','buy',670.000000,8.000000000000000000,'2025-08-01 09:16:12'),('2ae6dee0-6eb8-11f0-86c6-0a4e115e0783','aapl-asset-id-004','sell',160.000000,15.000000000000000000,'2025-08-01 09:16:12'),('2ae6e090-6eb8-11f0-86c6-0a4e115e0783','mf-asset-id-005','buy',330.000000,25.000000000000000000,'2025-08-01 09:16:12');
/*!40000 ALTER TABLE `order_books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portfolio_snapshots`
--

DROP TABLE IF EXISTS `portfolio_snapshots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portfolio_snapshots` (
  `id` char(36) NOT NULL,
  `user_id` char(36) NOT NULL,
  `timestamp` datetime NOT NULL,
  `total_value` decimal(24,6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `portfolio_snapshots_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolio_snapshots`
--

LOCK TABLES `portfolio_snapshots` WRITE;
/*!40000 ALTER TABLE `portfolio_snapshots` DISABLE KEYS */;
INSERT INTO `portfolio_snapshots` VALUES ('snap-0001','user-1234-5678-9012-abcdefabcdef','2025-07-31 12:00:00',10500.750000),('snap001','u1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6','2025-07-01 09:00:00',10500.000000),('snap002','u1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6','2025-07-02 09:00:00',10875.500000),('snap003','u1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6','2025-07-03 09:00:00',10200.250000),('snap004','u1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6','2025-07-04 09:00:00',11020.750000),('snap005','u1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6','2025-07-05 09:00:00',11300.000000);
/*!40000 ALTER TABLE `portfolio_snapshots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trades`
--

DROP TABLE IF EXISTS `trades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trades` (
  `id` char(36) NOT NULL,
  `user_id` char(36) NOT NULL,
  `asset_id` varchar(32) NOT NULL,
  `order_type` enum('buy','sell') NOT NULL,
  `price` decimal(18,6) NOT NULL,
  `amount` decimal(36,18) NOT NULL,
  `total_value` decimal(24,6) NOT NULL,
  `fee` decimal(18,6) DEFAULT NULL,
  `status` enum('pending','filled','canceled') DEFAULT 'filled',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `asset_id` (`asset_id`),
  CONSTRAINT `trades_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `trades_ibfk_2` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trades`
--

LOCK TABLES `trades` WRITE;
/*!40000 ALTER TABLE `trades` DISABLE KEYS */;
INSERT INTO `trades` VALUES ('a1b2c3d4-e5f6-11ee-b6e7-0242ac120001','123e4567-e89b-12d3-a456-426614174000','bitcoin','buy',30000.000000,0.005000000000000000,150.000000,0.500000,'filled','2025-08-01 08:37:47'),('a1b2c3d4-e5f6-11ee-b6e7-0242ac120002','123e4567-e89b-12d3-a456-426614174000','ethereum','sell',1900.000000,0.100000000000000000,190.000000,0.380000,'filled','2025-08-01 08:37:47'),('a1b2c3d4-e5f6-11ee-b6e7-0242ac120003','123e4567-e89b-12d3-a456-426614174000','solana','buy',24.000000,3.000000000000000000,72.000000,0.100000,'filled','2025-08-01 08:37:47'),('a1b2c3d4-e5f6-11ee-b6e7-0242ac120004','123e4567-e89b-12d3-a456-426614174000','dogecoin','buy',0.075000,1000.000000000000000000,75.000000,0.050000,'pending','2025-08-01 08:37:47'),('a1b2c3d4-e5f6-11ee-b6e7-0242ac120005','123e4567-e89b-12d3-a456-426614174000','litecoin','sell',90.000000,0.500000000000000000,45.000000,0.300000,'canceled','2025-08-01 08:37:47');
/*!40000 ALTER TABLE `trades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_holdings`
--

DROP TABLE IF EXISTS `user_holdings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_holdings` (
  `id` char(36) NOT NULL,
  `user_id` char(36) NOT NULL,
  `asset_id` varchar(32) NOT NULL,
  `amount` decimal(36,18) NOT NULL,
  `avg_buy_price` decimal(18,6) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_user_asset` (`user_id`,`asset_id`),
  KEY `asset_id` (`asset_id`),
  CONSTRAINT `user_holdings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_holdings_ibfk_2` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_holdings`
--

LOCK TABLES `user_holdings` WRITE;
/*!40000 ALTER TABLE `user_holdings` DISABLE KEYS */;
INSERT INTO `user_holdings` VALUES ('h001','123e4567-e89b-12d3-a456-426614174000','bitcoin',0.523456789123456789,28500.500000,'2025-08-01 08:32:03'),('h002','123e4567-e89b-12d3-a456-426614174000','ethereum',1.789456123789456123,1750.250000,'2025-08-01 08:32:03'),('h003','123e4567-e89b-12d3-a456-426614174000','solana',32.500000000000000000,22.600000,'2025-08-01 08:32:03'),('h004','123e4567-e89b-12d3-a456-426614174000','cardano',1050.000000000000000000,0.355000,'2025-08-01 08:32:03'),('h005','123e4567-e89b-12d3-a456-426614174000','dogecoin',12000.000000000000000000,0.060000,'2025-08-01 08:32:03');
/*!40000 ALTER TABLE `user_holdings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` char(36) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0e38d17b-d2b3-47d9-8993-a1e2b79b6b9f','kirti@example.com','$2b$10$u0G9gP.1KDe.EhGJtG7Dre7PvIg1Uzj7EeH5Hjs1bs9sEpkAr2TY2','Kirti Pagar','2025-08-01 08:18:58'),('123e4567-e89b-12d3-a456-426614174000','kirti.pagar@example.com','$2b$12$abcdef1234567890hashedpasswordexample','Kirti Pagar','2025-08-01 08:30:54'),('u1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6','demo.user@example.com','demo_hashed_password','Demo User','2025-08-01 08:55:01'),('user-1234-5678-9012-abcdefabcdef','user@example.com','hashed_password','Test User','2025-08-01 08:53:38');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-02  2:55:21

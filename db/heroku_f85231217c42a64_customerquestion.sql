-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: us-cdbr-east-06.cleardb.net    Database: heroku_f85231217c42a64
-- ------------------------------------------------------
-- Server version	5.6.50-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customerquestion`
--

DROP TABLE IF EXISTS `customerquestion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customerquestion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_question` int(11) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `id_sector` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_question` (`id_question`),
  KEY `id_customer` (`id_customer`),
  KEY `id_sector` (`id_sector`),
  CONSTRAINT `customerquestion_ibfk_1` FOREIGN KEY (`id_question`) REFERENCES `templatequestion` (`id`),
  CONSTRAINT `customerquestion_ibfk_2` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `customerquestion_ibfk_3` FOREIGN KEY (`id_sector`) REFERENCES `sector` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customerquestion`
--

LOCK TABLES `customerquestion` WRITE;
/*!40000 ALTER TABLE `customerquestion` DISABLE KEYS */;
INSERT INTO `customerquestion` VALUES (1,1,5,4,0,'2023-04-13 00:00:00','2023-04-13 00:00:00'),(2,2,5,4,1,'2023-04-13 00:00:00','2023-04-13 00:00:00'),(3,3,5,4,2,'2023-04-13 00:00:00','2023-04-13 00:00:00'),(4,5,5,4,3,'2023-04-13 00:00:00','2023-04-13 00:00:00'),(5,1,6,4,0,'2023-04-13 00:00:00','2023-04-13 00:00:00'),(6,2,6,4,1,'2023-04-13 00:00:00','2023-04-13 00:00:00'),(7,3,6,4,2,'2023-04-13 00:00:00','2023-04-13 00:00:00'),(8,5,6,4,3,'2023-04-13 00:00:00','2023-04-13 00:00:00'),(84,4,4,4,0,'2023-01-19 00:00:00','2023-01-19 00:00:00'),(94,14,4,4,1,'2023-01-19 00:00:00','2023-01-19 00:00:00'),(104,24,4,4,2,'2023-01-19 00:00:00','2023-01-19 00:00:00'),(114,34,4,4,2,'2023-01-19 00:00:00','2023-01-19 00:00:00');
/*!40000 ALTER TABLE `customerquestion` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19 16:37:22

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
-- Table structure for table `templatequestion`
--

DROP TABLE IF EXISTS `templatequestion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `templatequestion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `templatequestion`
--

LOCK TABLES `templatequestion` WRITE;
/*!40000 ALTER TABLE `templatequestion` DISABLE KEYS */;
INSERT INTO `templatequestion` VALUES (1,'Como você avalia o atendimento?','2023-04-13 00:00:00','2023-04-13 00:00:00'),(2,'Como você avalia a qualidade dos produtos que você comprou?','2023-04-13 00:00:00','2023-04-13 00:00:00'),(3,'Você encontrou tudo que procurava?','2023-04-13 00:00:00','2023-04-13 00:00:00'),(4,'Como você avalia a limpeza do seu veículo ?','2023-01-17 00:00:00','2023-01-17 00:00:00'),(5,'Como você avalia o preço dos produtos?','2023-04-13 00:00:00','2023-04-13 00:00:00'),(14,'Como você avalia o tempo da lavagem?','2023-01-17 00:00:00','2023-01-17 00:00:00'),(24,'Como você avalia o preço cobrado pelo serviço?','2023-01-17 00:00:00','2023-01-17 00:00:00'),(34,'Quais pontos você destaca no serviço?','2023-01-17 00:00:00','2023-01-17 00:00:00');
/*!40000 ALTER TABLE `templatequestion` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19 16:37:03

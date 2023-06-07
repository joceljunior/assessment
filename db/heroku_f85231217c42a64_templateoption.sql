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
-- Table structure for table `templateoption`
--

DROP TABLE IF EXISTS `templateoption`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `templateoption` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `templateoption`
--

LOCK TABLES `templateoption` WRITE;
/*!40000 ALTER TABLE `templateoption` DISABLE KEYS */;
INSERT INTO `templateoption` VALUES (1,'Tempo','2023-04-13 00:00:00','2023-04-13 00:00:00'),(2,'Educação','2023-04-13 00:00:00','2023-04-13 00:00:00'),(3,'Apresentação','2023-04-13 00:00:00','2023-04-13 00:00:00'),(4,'Limpeza','2023-01-19 00:00:00','2023-01-19 00:00:00'),(5,'Tamanho','2023-04-13 00:00:00','2023-04-13 00:00:00'),(6,'Pães','2023-04-13 00:00:00','2023-04-13 00:00:00'),(7,'Doces','2023-04-13 00:00:00','2023-04-13 00:00:00'),(8,'Recheio','2023-04-13 00:00:00','2023-04-13 00:00:00'),(9,'Sabor','2023-04-13 00:00:00','2023-04-13 00:00:00'),(10,'Apresentação','2023-04-13 00:00:00','2023-04-13 00:00:00'),(11,'Bolos','2023-04-13 00:00:00','2023-04-13 00:00:00'),(12,'Salgados','2023-04-13 00:00:00','2023-04-13 00:00:00'),(13,'Mercearia','2023-04-13 00:00:00','2023-04-13 00:00:00'),(14,'Organização','2023-01-19 00:00:00','2023-01-19 00:00:00'),(24,'Valor','2023-01-19 00:00:00','2023-01-19 00:00:00'),(34,'Profissionalismo','2023-01-19 00:00:00','2023-01-19 00:00:00');
/*!40000 ALTER TABLE `templateoption` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19 16:37:25

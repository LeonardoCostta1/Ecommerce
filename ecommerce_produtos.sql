-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id_produtos` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `preco_antigo` float NOT NULL,
  `preco` float NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `descricao` varchar(300) NOT NULL,
  `cupom` varchar(8) NOT NULL,
  `cor` varchar(45) NOT NULL,
  `tamanho` varchar(500) NOT NULL,
  `material` varchar(45) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `createdAt` date NOT NULL,
  `photo` varchar(500) NOT NULL,
  `quantidade` int NOT NULL,
  `cod` varchar(10) NOT NULL,
  PRIMARY KEY (`id_produtos`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'MICRO SCRIPT NAVY 9FIFTY SNAPBACK',89.99,25.99,'acessorio','The stakes are high with the 2020 NFL Draft Collection. Inspired by the iconic neon signs of Las Vegas, the Las Vegas Raiders Official NFL Draft 9FIFTY Snapback features a Las Vegas Raiders 2020 insignia embroidered at the front panels with a Welcome to Las Vegas Patch at the right-wear side.','12345678','preto','unico','poliester','snapback','2020-04-30','https://www.neweracap.com/medias/sys_master/root/root/h70/hb8/9487232368670/9487232368670.png',1,'2015fgtr75'),(2,'LAS VEGAS RAIDERS OFFICIAL NFL DRAFT 9FIFTY SNAPBACK',89.99,35.99,'acessorio','The stakes are high with the 2020 NFL Draft Collection. Inspired by the iconic neon signs of Las Vegas, the Las Vegas Raiders Official NFL Draft 9FIFTY Snapback features a Las Vegas Raiders 2020 insignia embroidered at the front panels with a Welcome to Las Vegas Patch at the right-wear side.','12345678','preto','unico','poliester','snapback','2020-04-30','https://www.neweracap.com/medias/sys_master/root/root/h5b/h41/9487957983262/9487957983262.png',1,'2015fgtr75'),(3,'BOSTON RED SOX SEERSUCKER BLACK LABEL TAN 9FIFTY SNAPBACK',89.99,37.99,'acessorio','The stakes are high with the 2020 NFL Draft Collection. Inspired by the iconic neon signs of Las Vegas, the Las Vegas Raiders Official NFL Draft 9FIFTY Snapback features a Las Vegas Raiders 2020 insignia embroidered at the front panels with a Welcome to Las Vegas Patch at the right-wear side.','12345678','marron','unico','poliester','snapback','2020-04-30','https://www.neweracap.com/medias/sys_master/root/root/h71/hcb/9448847245342/9448847245342.png',1,'2015fgtr75'),(4,'PHILADELPHIA PHILLIES SEERSUCKER BLACK LABEL PINK 9TWENTY ADJUSTABLE',89.99,31.99,'acessorio','The Philadelphia Phillies Seersucker Black Label 9TWENTY Adjustable features a lightwear seersucker fabrication with an embroidered Phillies logo at the front panels and a metal New Era Flag at the left wear side','12345678','rosa','unico','poliester','BLACK LABEL COLLECTION','2020-04-30','https://www.neweracap.com/medias/sys_master/root/root/h50/hb6/9448837906462/9448837906462.png',1,'2015fgtr75'),(5,'BOSTON RED SOX SEERSUCKER BLACK LABEL TAN 9TWENTY ADJUSTABLE',89.99,31.99,'acessorio','The Philadelphia Phillies Seersucker Black Label 9TWENTY Adjustable features a lightwear seersucker fabrication with an embroidered Phillies logo at the front panels and a metal New Era Flag at the left wear side','12345678','marron','unico','poliester','BLACK LABEL COLLECTION','2020-04-30','https://www.neweracap.com/medias/sys_master/root/root/h00/h89/9448833187870/9448833187870.png',1,'2015fgtr75'),(6,'LAS VEGAS RAIDERS OFFICIAL NFL SIDELINE ROAD COLD WEATHER SPORT KNIT',89.99,31.99,'acessorio','Brave the elements as you watch your team compete with the Oakland Raiders Official NFL Sideline Road Cold Weather Sport Knit Beanie.','12345678','preto','unico','poliester','NFL COLD WEATHER COLLECTION','2020-04-30','https://www.neweracap.com/medias/sys_master/root/root/h77/h9e/9370836140062/9370836140062.png',1,'2015fgtr75'),(7,'LAS VEGAS RAIDERS SALUTE TO SERVICE WOMENS POM KNIT',89.99,23.99,'acessorio','Show respect and gratitude for our service members with the Oakland Raiders Salute to Service Womens Pom Knit Beanie featuring a fleece fabrication and a silicone Raiders patch at the front.','12345678','verde','unico','algodão','NFL COLD WEATHER COLLECTION','2020-04-30','https://www.neweracap.com/medias/sys_master/root/root/h35/h13/9352580825118/9352580825118.png',1,'2015fgtr75'),(8,'LOS ANGELES LAKERS NBA AUTHENTICS BACK HALF SERIES POM KNIT',89.99,23.99,'acessorio','Clean and simple says it all. Gear up for the second half of the NBA season with the Los Angeles Lakers NBA Authentics Back Half Series Pom Knit featuring a three-dimensional Lakers logo at the front using a rubberized tatami patch','12345678','preto','unico','algodão','NBA AUTHENTICS: BACK HALF SERIES','2020-04-30','https://www.neweracap.com/medias/sys_master/root/root/h89/h5c/9422695530526/9422695530526.png',1,'2015fgtr75');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-07 10:00:48

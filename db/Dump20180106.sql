CREATE SCHEMA `db_gdinsp` DEFAULT CHARACTER SET utf8 ;

use `db_gdinsp`;

-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: db_gdinsp
-- ------------------------------------------------------
-- Server version	5.5.52-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `checklist`
--

DROP TABLE IF EXISTS `checklist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `checklist` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  `DESC` varchar(500) NOT NULL,
  `INST_TYPE` int(11) NOT NULL,
  `UPDATED_BY` int(11) DEFAULT NULL,
  `UPDATE_TS` datetime DEFAULT NULL,
  `STATE` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `CHECKLIST_UPDATED_BY_idx` (`UPDATED_BY`),
  CONSTRAINT `CHECKLIST_UPDATED_BY` FOREIGN KEY (`UPDATED_BY`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checklist`
--

LOCK TABLES `checklist` WRITE;
/*!40000 ALTER TABLE `checklist` DISABLE KEYS */;
/*!40000 ALTER TABLE `checklist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checkpoint`
--

DROP TABLE IF EXISTS `checkpoint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `checkpoint` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  `DESC` varchar(500) NOT NULL,
  `CHECKLIST_ID` int(11) NOT NULL,
  `CHECKPOINT_DATA_TYPE` int(11) NOT NULL,
  `UPDATED_BY` int(11) DEFAULT NULL,
  `UPDATE_TS` datetime DEFAULT NULL,
  `STATE` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `CHECKPOINT_CHECKLIST_ID_idx` (`CHECKLIST_ID`),
  KEY `CHECKPOINT_UPDATED_BY_idx` (`UPDATED_BY`),
  CONSTRAINT `CHECKPOINT_CHECKLIST_ID` FOREIGN KEY (`CHECKLIST_ID`) REFERENCES `checklist` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `CHECKPOINT_UPDATED_BY` FOREIGN KEY (`UPDATED_BY`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkpoint`
--

LOCK TABLES `checkpoint` WRITE;
/*!40000 ALTER TABLE `checkpoint` DISABLE KEYS */;
/*!40000 ALTER TABLE `checkpoint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inspection`
--

DROP TABLE IF EXISTS `inspection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inspection` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  `VILLAGE_GROUP_ID` int(11) NOT NULL,
  `START_DATE` date NOT NULL,
  `END_DATE` date NOT NULL,
  `STATUS` int(11) NOT NULL,
  `UPDATED_BY` int(11) DEFAULT NULL,
  `UPDATE_TS` datetime DEFAULT NULL,
  `STATE` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `INSPECTION_VILLAGE_GROUP_ID_FK_idx` (`VILLAGE_GROUP_ID`),
  KEY `INSPECTION_UPDATED_BY_idx` (`UPDATED_BY`),
  CONSTRAINT `INSPECTION_VILLAGE_GROUP_ID_FK` FOREIGN KEY (`VILLAGE_GROUP_ID`) REFERENCES `village_group` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `INSPECTION_UPDATED_BY` FOREIGN KEY (`UPDATED_BY`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inspection`
--

LOCK TABLES `inspection` WRITE;
/*!40000 ALTER TABLE `inspection` DISABLE KEYS */;
/*!40000 ALTER TABLE `inspection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inspection_checkpoints`
--

DROP TABLE IF EXISTS `inspection_checkpoints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inspection_checkpoints` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `INSPECTION_ID` int(11) NOT NULL,
  `INSTITUTION_ID` int(11) NOT NULL,
  `CHECKPOINT_ID` int(11) NOT NULL,
  `CHECKPOINT_DATA_TYPE` int(11) NOT NULL,
  `IS_ADHERED` int(11) DEFAULT NULL,
  `COUNTER` int(11) DEFAULT NULL,
  `REMARKS` varchar(500) DEFAULT NULL,
  `UPDATED_BY` int(11) DEFAULT NULL,
  `UPDATE_TS` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `INSPECTION_CHECKPOINTS_INSPECTION_ID_FK_idx` (`INSPECTION_ID`),
  KEY `INSPECTION_CHECKPOINTS_INSTITUTION_ID_FK_idx` (`INSTITUTION_ID`),
  KEY `INSPECTION_CHECKPOINTS_CHECKPOINT_ID_FK_idx` (`CHECKPOINT_ID`),
  KEY `INSPECTION_CHECKPOINTS_UPDATED_BY_FK_idx` (`UPDATED_BY`),
  CONSTRAINT `INSPECTION_CHECKPOINTS_CHECKPOINT_ID_FK` FOREIGN KEY (`CHECKPOINT_ID`) REFERENCES `checkpoint` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `INSPECTION_CHECKPOINTS_INSPECTION_ID_FK` FOREIGN KEY (`INSPECTION_ID`) REFERENCES `inspection` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `INSPECTION_CHECKPOINTS_INSTITUTION_ID_FK` FOREIGN KEY (`INSTITUTION_ID`) REFERENCES `institution` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `INSPECTION_CHECKPOINTS_UPDATED_BY_FK` FOREIGN KEY (`UPDATED_BY`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inspection_checkpoints`
--

LOCK TABLES `inspection_checkpoints` WRITE;
/*!40000 ALTER TABLE `inspection_checkpoints` DISABLE KEYS */;
/*!40000 ALTER TABLE `inspection_checkpoints` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inspection_institutions`
--

DROP TABLE IF EXISTS `inspection_institutions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inspection_institutions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `INSPECTION_ID` int(11) NOT NULL,
  `INSTITUTION_ID` int(11) NOT NULL,
  `VILLAGE_ID` int(11) NOT NULL,
  `OFFICER_ID` int(11) NOT NULL,
  `CHECKLIST_ID` int(11) NOT NULL,
  `STATUS` int(11) NOT NULL,
  `UPDATED_BY` int(11) DEFAULT NULL,
  `UPDATE_TS` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `INSPECTION_INSTITUTIONS_INSPECTION_ID_FK_idx` (`INSPECTION_ID`),
  KEY `INSPECTION_INSTITUTIONS_INSTITUTION_ID_FK_idx` (`INSTITUTION_ID`),
  KEY `INSPECTION_INSTITUTIONS_VILLAGE_ID_FK_idx` (`VILLAGE_ID`),
  KEY `INSPECTION_INSTITUTIONS_OFFICER_ID_FK_idx` (`OFFICER_ID`),
  KEY `INSPECTION_INSTITUTIONS_CHECKLIST_ID_FK_idx` (`CHECKLIST_ID`),
  KEY `INSPECTION_INSTITUTIONS_UPDATED_BY_FK_idx` (`UPDATED_BY`),
  CONSTRAINT `INSPECTION_INSTITUTIONS_INSTITUTION_ID_FK` FOREIGN KEY (`INSTITUTION_ID`) REFERENCES `institution` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `INSPECTION_INSTITUTIONS_CHECKLIST_ID_FK` FOREIGN KEY (`CHECKLIST_ID`) REFERENCES `checklist` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `INSPECTION_INSTITUTIONS_INSPECTION_ID_FK` FOREIGN KEY (`INSPECTION_ID`) REFERENCES `inspection` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `INSPECTION_INSTITUTIONS_OFFICER_ID_FK` FOREIGN KEY (`OFFICER_ID`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `INSPECTION_INSTITUTIONS_UPDATED_BY_FK` FOREIGN KEY (`UPDATED_BY`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `INSPECTION_INSTITUTIONS_VILLAGE_ID_FK` FOREIGN KEY (`VILLAGE_ID`) REFERENCES `village` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inspection_institutions`
--

LOCK TABLES `inspection_institutions` WRITE;
/*!40000 ALTER TABLE `inspection_institutions` DISABLE KEYS */;
/*!40000 ALTER TABLE `inspection_institutions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `institution`
--

DROP TABLE IF EXISTS `institution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `institution` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  `VILLAGE_ID` int(11) NOT NULL,
  `TYPE` varchar(50) NOT NULL,
  `HEAD_NAME` varchar(100) NOT NULL,
  `ADDRESS` varchar(500) NOT NULL,
  `UPDATED_BY` int(11) DEFAULT NULL,
  `UPDATE_TS` datetime DEFAULT NULL,
  `STATE` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `INSTITUTION_UPDATED_BY_idx` (`UPDATED_BY`),
  KEY `INSTITUTION_VILLAGE_ID_FK_idx` (`VILLAGE_ID`),
  CONSTRAINT `INSTITUTION_UPDATED_BY` FOREIGN KEY (`UPDATED_BY`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `INSTITUTION_VILLAGE_ID_FK` FOREIGN KEY (`VILLAGE_ID`) REFERENCES `village` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `institution`
--

LOCK TABLES `institution` WRITE;
/*!40000 ALTER TABLE `institution` DISABLE KEYS */;
/*!40000 ALTER TABLE `institution` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  `TITLE` varchar(10) NOT NULL,
  `DESIGNATION` varchar(100) NOT NULL,
  `ROLE` int(11) NOT NULL,
  `LOGIN_ID` varchar(100) NOT NULL,
  `PASSWORD` varchar(20) NOT NULL,
  `UPDATED_BY` int(11) DEFAULT NULL,
  `UPDATE_TS` datetime DEFAULT NULL,
  `STATE` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `village`
--

DROP TABLE IF EXISTS `village`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `village` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  `BLOCK` varchar(100) NOT NULL,
  `TEHSIL` varchar(100) NOT NULL,
  `DISTRICT` varchar(100) NOT NULL,
  `UPDATED_BY` int(11) DEFAULT NULL,
  `UPDATED_TS` datetime DEFAULT NULL,
  `STATE` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `UPDATED_BY_FK_idx` (`UPDATED_BY`),
  CONSTRAINT `UPDATED_BY_FK` FOREIGN KEY (`UPDATED_BY`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `village`
--

LOCK TABLES `village` WRITE;
/*!40000 ALTER TABLE `village` DISABLE KEYS */;
/*!40000 ALTER TABLE `village` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `village_group`
--

DROP TABLE IF EXISTS `village_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `village_group` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  `OFFICER_ID` int(11) NOT NULL,
  `UPDATED_BY` int(11) DEFAULT NULL,
  `UPDATE_TS` datetime DEFAULT NULL,
  `STATE` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `VILLAGE_GROUP_OFFICER_ID_idx` (`OFFICER_ID`),
  KEY `VILLAGE_GROUP_UPDATED_BY_idx` (`UPDATED_BY`),
  CONSTRAINT `VILLAGE_GROUP_OFFICER_ID` FOREIGN KEY (`OFFICER_ID`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `VILLAGE_GROUP_UPDATED_BY` FOREIGN KEY (`UPDATED_BY`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `village_group`
--

LOCK TABLES `village_group` WRITE;
/*!40000 ALTER TABLE `village_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `village_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `village_group_map`
--

DROP TABLE IF EXISTS `village_group_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `village_group_map` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `VILLAGE_GROUP_ID` int(11) NOT NULL,
  `VILLAGE_ID` int(11) NOT NULL,
  `UPDATED_BY` int(11) DEFAULT NULL,
  `UPDATE_TS` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `VILLAGE_GROUP_MAP_VILLAGE_GROUP_ID_FK_idx` (`VILLAGE_GROUP_ID`),
  KEY `VILLAGE_GROUP_MAP_VILLAGE_ID_FK_idx` (`VILLAGE_ID`),
  CONSTRAINT `VILLAGE_GROUP_MAP_VILLAGE_GROUP_ID_FK` FOREIGN KEY (`VILLAGE_GROUP_ID`) REFERENCES `village_group` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `VILLAGE_GROUP_MAP_VILLAGE_ID_FK` FOREIGN KEY (`VILLAGE_ID`) REFERENCES `village` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `village_group_map`
--

LOCK TABLES `village_group_map` WRITE;
/*!40000 ALTER TABLE `village_group_map` DISABLE KEYS */;
/*!40000 ALTER TABLE `village_group_map` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-06 17:07:16

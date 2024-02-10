-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema realestate
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema realestate
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `realestate` DEFAULT CHARACTER SET utf8 ;
USE `realestate` ;

-- -----------------------------------------------------
-- Table `realestate`.`estates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `realestate`.`estates` (
  `idestate` INT NOT NULL AUTO_INCREMENT,
  `price` VARCHAR(100) NULL,
  `space` VARCHAR(45) NULL,
  `type` VARCHAR(100) NULL,
  `location` VARCHAR(100) NULL,
  `imageUrl` VARCHAR(255) NULL,
  `status` VARCHAR(45) NULL,
  PRIMARY KEY (`idestate`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `realestate`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `realestate`.`users` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NULL,
  `password` VARCHAR(100) NULL,
  `username` VARCHAR(45) NULL,
  `token` VARCHAR(255) NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `realestate`.`savedhouses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `realestate`.`savedhouses` (
  `idsavedhouse` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idsavedhouse`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

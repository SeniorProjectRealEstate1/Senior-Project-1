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
-- Table `realestate`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `realestate`.`users` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(150) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `token` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `realestate`.`estates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `realestate`.`estates` (
  `idestate` INT NOT NULL AUTO_INCREMENT,
  `price` INT NOT NULL,
  `space` VARCHAR(150) NOT NULL,
  `type` VARCHAR(150) NOT NULL,
  `location` VARCHAR(150) NOT NULL,
  `description` VARCHAR(250) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `users_iduser` INT NOT NULL,
  PRIMARY KEY (`idestate`, `users_iduser`),
  INDEX `fk_estates_users_idx` (`users_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_estates_users`
    FOREIGN KEY (`users_iduser`)
    REFERENCES `realestate`.`users` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `realestate`.`savedhouses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `realestate`.`savedhouses` (
  `idsavedhouses` INT NOT NULL AUTO_INCREMENT,
  `users_iduser` INT NOT NULL,
  `estates_idestate` INT NOT NULL,
  `estates_users_iduser` INT NOT NULL,
  PRIMARY KEY (`idsavedhouses`, `users_iduser`, `estates_idestate`, `estates_users_iduser`),
  INDEX `fk_savedhouses_users1_idx` (`users_iduser` ASC) VISIBLE,
  INDEX `fk_savedhouses_estates1_idx` (`estates_idestate` ASC, `estates_users_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_savedhouses_users1`
    FOREIGN KEY (`users_iduser`)
    REFERENCES `realestate`.`users` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_savedhouses_estates1`
    FOREIGN KEY (`estates_idestate` , `estates_users_iduser`)
    REFERENCES `realestate`.`estates` (`idestate` , `users_iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `realestate`.`visits`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `realestate`.`visits` (
  `idvisits` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idvisits`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-grupo10-23568.alwaysdata.net
-- Generation Time: Dec 14, 2023 at 05:34 AM
-- Server version: 10.6.14-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grupo10-23568_funkoshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_description`) VALUES
(1, 'Funkos', 'Figuras coleccionables Funko Pop'),
(2, 'Remeras', 'Remeras de anime, series, peliculas y más'),
(3, 'LLaveros', 'Llaveros coleccionables');

-- --------------------------------------------------------

--
-- Table structure for table `licence`
--

CREATE TABLE `licence` (
  `licence_id` int(11) NOT NULL,
  `licence_name` varchar(45) NOT NULL,
  `licence_description` varchar(255) NOT NULL,
  `licence_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `licence`
--

INSERT INTO `licence` (`licence_id`, `licence_name`, `licence_description`, `licence_image`) VALUES
(1, 'Pokemon', 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.', 'pokemon/vulpix-1.webp'),
(2, 'Star Wars', 'Disfruta de una saga que sigue agregando personajes a su colección.', 'star-wars/baby-yoda-1.webp'),
(3, 'Harry Potter', 'Revive los recuerdos de una saga llena de magia y encanto.', 'harry-potter/snape-patronus-1.webp'),
(4, 'Naruto', 'Disfruta de la historia de un ninja adolescente', 'naruto/nr-cover-1.png');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(60) NOT NULL,
  `product_description` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `sku` varchar(30) NOT NULL,
  `dues` int(11) DEFAULT NULL,
  `image_front` varchar(200) DEFAULT NULL,
  `image_back` varchar(200) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT current_timestamp(),
  `licence_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_description`, `price`, `stock`, `discount`, `sku`, `dues`, `image_front`, `image_back`, `create_time`, `licence_id`, `category_id`) VALUES
(1, 'Baby Yoda Blueball', 'Figura coleccionable de Baby Yoda (Grogu) - Mandalorian Saga, edición limitada.', 21799.99, 8, 10, 'STW001001', 3, 'star-wars/baby-yoda-1.webp', 'star-wars/baby-yoda-box.webp', '2023-10-06 17:29:04', 2, 1),
(2, 'Luke Skylwalker & Grogu', 'Figura coleccionable de Luke Skylwalker & Grogu - The Mandalorian Saga.', 22399.99, 8, 10, 'STW001003', 3, 'star-wars/luke-1.webp', 'star-wars/luke-box.webp', '2023-10-06 17:29:04', 2, 1),
(3, 'Stormtrooper Lightsaber', 'Figura coleccionable de Stormtrooper Lightsaber - Star Wars Saga.', 21799.99, 8, 10, 'STW001004', 3, 'star-wars/trooper-1.webp', 'star-wars/trooper-box.webp', '2023-10-06 17:29:04', 2, 1),
(4, 'Charmander Smiley', 'Figura coleccionable de Charmander - Pokemon Saga.', 21899.99, 20, 10, 'PKM001001', 3, 'pokemon/charmander-1.webp', 'pokemon/charmander-box.webp', '2023-11-26 23:08:20', 1, 1),
(5, 'Dragonite Hi!', 'Figura coleccionable de Dragonite - Pokemon Saga.', 21799.99, 10, 10, 'PKM001002', 3, 'pokemon/dragonite-1.webp', 'pokemon/dragonite-box.webp', '2023-11-26 23:08:20', 1, 1),
(6, 'Pidgeotto Flying', 'Figura coleccionable de Pidgeotto - Pokemon Saga.', 21799.99, 10, 10, 'PKM001003', 3, 'pokemon/pidgeotto-1.webp', 'pokemon/pidgeotto-box.webp', '2023-11-26 23:08:20', 1, 1),
(7, 'Pikachu Smiley', 'Figura coleccionable de Pikachu - Pokemon Saga.', 21899.99, 8, 10, 'PKM001004', 3, 'pokemon/pikachu-1.webp', 'pokemon/pikachu-box.webp', '2023-11-26 23:08:20', 1, 1),
(8, 'Vulpix Fancy', 'Figura coleccionable de Vulpix - Pokemon Saga.', 21799.99, 8, 10, 'PKM001005', 3, 'pokemon/vulpix-1.webp', 'pokemon/vulpix-box.webp', '2023-11-26 23:08:20', 1, 1),
(9, 'Harry Potter & Hegwid', 'Figura coleccionable de Harry Potter & Hegwid - Harry Potter Saga.', 22799.99, 11, 10, 'HPT001001', 9, 'harry-potter/harry-1.webp', 'harry-potter/harry-box.webp', '2023-11-26 23:08:20', 3, 1),
(10, 'Herminione Ball Dress', 'Figura coleccionable de Herminione - Harry Potter Saga.', 22799.99, 8, 10, 'HPT001002', 3, 'harry-potter/hermione-1.webp', 'harry-potter/hermione-box.webp', '2023-11-26 23:08:20', 3, 1),
(11, 'Luna Lovegood Lion Mask', 'Figura coleccionable de Luna Lovegood - Harry Potter Saga.', 22799.99, 8, 10, 'HPT001003', 3, 'harry-potter/luna-1.webp', 'harry-potter/luna-box.webp', '2023-11-26 23:08:20', 3, 1),
(12, 'Snape Patronus', 'Figura coleccionable de Snape Patronus - Harry Potter Saga.', 21799.99, 13, 10, 'HPT001004', 3, 'harry-potter/snape-patronus-1.webp', 'harry-potter/snape-patronus-box.webp', '2023-11-26 23:08:20', 3, 1),
(13, 'Kakashi Hatake Shippuden', 'Figura coleccionable de Kakashi Hatake Shippuden!', 21799.99, 20, 10, 'NRT001001', 0, '/1694066023151-nr-cover-1.png', '/1694066023182-nr-cover-box.png', '2023-11-26 23:08:20', 4, 1),
(14, 'Sasuke Uchiha Shippuden', 'Figura coleccionable de Sasuke Uchiha. No te lo pierdas!', 21799.99, 10, 12, 'NRT001002', 6, '/1701726436462-sasukeuchiha-1.webp', '/1701726436569-sasukeuchiha-box.webp', '2023-12-04 21:47:19', 4, 1),
(15, 'Uzumaki Shippuden', 'Figura de Naruto Uzumaki corriendo. ¡No te quedes sin el tuyo!', 22899.99, 15, 15, 'NRT001003', 9, '/1701726560535-uzumaki-1.webp', '/1701726560537-uzumaki-box.webp', '2023-12-04 21:49:23', 4, 1),
(44, 'Boba Fett', 'Figura coleccionable de Boba Fett Mandalorian. ¡No te lo pierdas!', 21399.99, 10, 10, 'STW001002', 3, 'star-wars/bobbafeth-1.webp', 'star-wars/bobbafeth-box.webp', '2023-12-09 01:10:08', 2, 1),
(54, 'Darth Vader c/sable', 'Figura de acción coleccionable de Darth Vader. La más buscada!', 25499.99, 10, 12, 'STW001005', 12, 'star-wars/darkvader-1.webp', 'star-wars/darkvader-box.webp', '2023-12-12 04:32:51', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(16) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_has_role`
--

CREATE TABLE `user_has_role` (
  `user_user_id` int(11) NOT NULL,
  `role_role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `licence`
--
ALTER TABLE `licence`
  ADD PRIMARY KEY (`licence_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `sku_UNIQUE` (`sku`),
  ADD KEY `fk_product_licence1_idx` (`licence_id`),
  ADD KEY `fk_product_category1_idx` (`category_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD PRIMARY KEY (`user_user_id`,`role_role_id`),
  ADD KEY `fk_user_has_role_role1_idx` (`role_role_id`),
  ADD KEY `fk_user_has_role_user_idx` (`user_user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `licence`
--
ALTER TABLE `licence`
  MODIFY `licence_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_product_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `fk_product_licence1` FOREIGN KEY (`licence_id`) REFERENCES `licence` (`licence_id`);

--
-- Constraints for table `user_has_role`
--
ALTER TABLE `user_has_role`
  ADD CONSTRAINT `fk_user_has_role_role1` FOREIGN KEY (`role_role_id`) REFERENCES `role` (`role_id`),
  ADD CONSTRAINT `fk_user_has_role_user` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

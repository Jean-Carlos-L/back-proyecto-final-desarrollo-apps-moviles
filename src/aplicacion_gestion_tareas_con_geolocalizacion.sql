-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-05-2024 a las 17:04:14
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `aplicacion_gestion_tareas_con_geolocalizacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `priority` varchar(5) DEFAULT NULL,
  `remainder` datetime DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `logitude` varchar(255) DEFAULT NULL,
  `altitude` varchar(255) DEFAULT NULL,
  `accuracy` varchar(255) DEFAULT NULL,
  `altitude_accuracy` varchar(255) DEFAULT NULL,
  `heading` varchar(255) DEFAULT NULL,
  `speed` varchar(255) DEFAULT NULL,
  `timestamp` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  `state` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `priority`, `remainder`, `latitude`, `logitude`, `altitude`, `accuracy`, `altitude_accuracy`, `heading`, `speed`, `timestamp`, `user_id`, `state`, `created_at`, `updated_at`) VALUES
(1, 'Tareas 1', 'Descriptio 1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, '2024-05-05 15:49:14', NULL),
(2, 'Tareas 2', 'Descriptio 2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, '2024-05-05 16:02:39', NULL),
(3, 'Tareas 3', 'Descriptio 3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, '2024-05-05 16:03:01', NULL),
(4, 'Tareas 4', 'Descriptio 4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, '2024-05-05 16:04:24', NULL),
(5, 'Tareas 5', 'Descriptio 5', NULL, NULL, 'Hola latitude', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, '2024-05-05 16:05:09', NULL),
(6, 'Tarea 1', 'Descriptio 1', NULL, NULL, 'Hola latitude', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 1, '2024-05-09 16:35:09', '2024-05-09 16:46:31'),
(7, 'Tareas 5', 'Descriptio 5', 'Baja', '2024-05-11 10:01:10', 'Hola latitude', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 1, '2024-05-11 10:02:00', NULL),
(8, 'Tareas 10', 'Descriptio 5', 'Media', '2024-05-11 10:01:10', 'Hola latitude', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 1, '2024-05-11 10:02:33', NULL),
(9, 'Tareas 11', 'Description 5', 'Alta', '2024-05-11 10:01:10', 'Hola latitude', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 1, '2024-05-11 10:03:09', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `username` varchar(25) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `state` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `state`, `created_at`, `updated_at`) VALUES
(1, 'juanito', 'jua@gmail.com', '$2a$10$2A0ryOVJOeb.t/XBnFRDEOOE0FGb5BWh6UxZB0oRX1cUh3bdi1Gw2', 1, '2024-05-05 13:02:27', '2024-05-05 13:19:02'),
(2, 'juanito', 'juan@gmail.com', '$2a$10$fPRHQNfIJwOvbFQzjJkgTuJsJtOXvlxT12nrZFlyEQbP1KFplXTYa', 1, '2024-05-05 13:19:32', '2024-05-09 16:27:24');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

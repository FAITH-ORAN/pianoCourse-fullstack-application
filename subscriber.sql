-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 23 août 2022 à 12:03
-- Version du serveur :  10.4.19-MariaDB
-- Version de PHP : 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pianocourse`
--

-- --------------------------------------------------------

--
-- Structure de la table `subscriber`
--

CREATE TABLE `subscriber` (
  `id` bigint(20) NOT NULL,
  `jour_de_presence` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `tel` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `subscriber`
--

INSERT INTO `subscriber` (`id`, `jour_de_presence`, `email`, `prenom`, `nom`, `tel`) VALUES
(1, 'samedi', 'kate_more@gmail.com', 'kate', 'more', 65456342),
(2, 'jeudi', 'john_doe@gmail.com', 'jhon', 'doe', 75443311),
(3, 'lundi', 'allymc@outlook.com', 'Ally', 'Mclarren', 754643234),
(4, 'mercredi', 'claire@hotmail.com', 'claire', 'dubois', 65789456),
(5, 'vendredi', 'sou_amina@yahoo.fr', 'Sou', 'Amina', 786734565),
(6, 'samedi', 'karim@gmail.fr', 'malo', 'karim', 78654789),
(8, 'mardi', 'junior@gmail.com', 'Crestiano', 'Junior', 768564367);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `subscriber`
--
ALTER TABLE `subscriber`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `subscriber`
--
ALTER TABLE `subscriber`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

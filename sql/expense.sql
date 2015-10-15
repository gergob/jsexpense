--
-- Table structure for table `currency`
--

CREATE TABLE IF NOT EXISTS `expense` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(200) NOT NULL,
  `amount` DOUBLE NOT NULL,
  `units` INT NOT NULL DEFAULT 1,
  `unitPrice` DOUBLE NOT NULL,
  `currency` VARCHAR(10) NOT NULL DEFAULT 'HUF',
  `updatedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `currency`
--
ALTER TABLE `expense` ADD KEY `name` (`name`);

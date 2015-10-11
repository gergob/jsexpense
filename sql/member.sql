--
-- Table structure for table `member`
--

CREATE TABLE IF NOT EXISTS `member` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(200) NOT NULL,
  `role` VARCHAR(200) NOT NULL,
  `updatedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `currency`
--
ALTER TABLE `member` ADD KEY `name` (`name`);

--
-- Table structure for table `currency`
--

CREATE TABLE IF NOT EXISTS `currency` (
  `name` varchar(10) NOT NULL,
  `conversionRate` double NOT NULL,
  `forDate` date DEFAULT NULL,
  `updatedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `currency`
--
ALTER TABLE `currency`
 ADD PRIMARY KEY (`name`), ADD KEY `name` (`name`);
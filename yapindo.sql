CREATE DATABASE yapindo

CREATE TABLE `invoice` ( 
  `id` INT NOT NULL AUTO_INCREMENT , 
  `date` DATE NOT NULL , 
  `user_id` INT NOT NULL , 
  `status` INT(1) NOT NULL , 
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `invoice_detail` ( 
  `id` INT NOT NULL AUTO_INCREMENT , 
  `invoice_id` INT NOT NULL , 
  `product_id` INT NOT NULL , 
  `quantity` INT NOT NULL , 
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `product` ( 
  `id` INT NOT NULL AUTO_INCREMENT , 
  `name` VARCHAR(100) NOT NULL , 
  `price` INT NOT NULL , 
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `users` ( 
  `id` INT NOT NULL AUTO_INCREMENT , 
  `name` VARCHAR(100) NOT NULL , 
  `address` TEXT NOT NULL , PRIMARY KEY (`id`)
) ENGINE = InnoDB;

INSERT INTO `users` (`name`, `address`) 
  VALUES 
  ('deigo', 'jl.riverside 1 no 26 cikarang'), 
  ('jonathan', 'Perum KSB blok j13 no 20 cibarusah'),
  ('siahaan', 'cikarang'), 
  ('pudge', 'radiant'), 
  ('invoker', 'dire');

INSERT INTO `product` (`name`, `price`) 
  VALUES 
  ('laptop lenovo legion', '18000000'), 
  ('monitor benq', '4300000'), 
  ('keyboard logitech', '1200000'), 
  ('mouse logitech', '900000'), 
  ('headset razer', '1500000'),
  ('mouse razer', '1300000'), 
  ('headset logitech', '1100000'), 
  ('monitor samsung', '2500000'), 
  ('laptop asus rog', '25000000'), 
  ('laptop dell i7', '17500000'), 
  ('keyboard rexus', '750000'), 
  ('monitor hp', '2300000'), 
  ('keyboard hyperx', '1600000');

INSERT INTO `invoice` (`date`, `user_id`, `status`) 
  VALUES 
  ('2022-01-19', '1', '1'), 
  ('2022-02-12', '3', '1'), 
  ('2022-01-12', '4', '1'), 
  ('2022-02-11', '1', '1'), 
  ('2022-03-12', '5', '1'), 
  ('2022-01-02', '2', '1'), 
  ('2022-01-22', '1', '1'), 
  ('2022-03-21', '5', '1'), 
  ('2022-02-01', '2', '1'), 
  ('2022-03-01', '3', '1');


INSERT INTO `invoice_detail` (`invoice_id`, `product_id`, `quantity`) 
  VALUES 
  ('1', '2', '2'),
  ('2', '3', '4'),
  ('3', '2', '1'), 
  ('4', '1', '1'),
  ('5', '5', '1'), 
  ('6', '7', '3'), 
  ('7', '1', '1'), 
  ('8', '3', '1'), 
  ('9', '3', '2'), 
  ('10', '3', '3');
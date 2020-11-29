INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');

INSERT INTO `users` (`id`, `created_at`, `updated_at`, `name`, `username`, `email`, `password`) VALUES
(1,	NOW(), NOW(), 'Name Firstname',	'UsernameTest',	'test1@test.com',	'$2a$10$dEDwmfzBAKkmpkaTLRBy1ef5QwLNg3ujkkH5LKLhEXbuA4myzW0Zu');

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES 
(1, 1);

INSERT INTO `accounts` (`id`, `balance`, `account_number`, `users_id`) VALUES
(1,	50.0,	'FR7630076020541031340030056',	1);

INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(1, 20.3, 'LECLERC', '2020-11-10', 1, 'FOOD');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(2, 12.0, 'NETLIX', '2020-11-11', 1, 'HOBBIES');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(3, 7.99, 'DISNEYPLUS', '2020-11-12', 1, 'HOBBIES');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(4, 138.0, 'IMPOTS', '2020-11-13', 1, 'OTHER');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(5, 129.0, 'FONCIA', '2020-11-13', 1, 'APARTMENT');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(6, 65.0, 'EDF', '2020-11-15', 1, 'INVOICES');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(7, 50.8, 'LECLERC', '2020-11-10', 1, 'FOOD');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(8, 96.0, 'MAAF', '2020-11-05', 1, 'OTHER');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(9, 10.00, 'FNAC', '2020-11-12', 1, 'HOBBIES');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(10, 140.0, 'VIREMENT AURELIEN', '2020-11-24', 1, 'INCOME');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(11, 20.0, 'ZARA', '2020-11-20', 1, 'HOBBIES');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(12, 10.0, 'LECLERC', '2020-11-15', 1, 'FOOD');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(13, 65.0, 'IKEA', '2020-11-20', 1, 'APARTMENT');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(14, 20.0, 'LECLERC', '2020-11-03', 1, 'FOOD');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(15, 80.0, 'SNCF', '2020-11-11', 1, 'HOBBIES');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(16, 7.99, 'TAXE', '2020-11-12', 1, 'APARTMENT');
INSERT INTO `transactions` (`id`, `amount`, `from_who`, `transaction_date`, `accounts_id`, `transaction_type`) VALUES
(17, 1500.0, 'SALAIRE', '2020-11-13', 1, 'INCOME');

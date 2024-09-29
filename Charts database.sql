CREATE DATABASE ben_schema_charts;

-- chart 1 in dashboard 4
create table chart_4_1 (
year_ numeric,
sum_of_amount numeric,
Earliest_date date);


Insert into chart_4_1
values (2015,3635001, str_to_date('01-01-2015', '%d-%m-%Y')),
(2016,3794380,str_to_date('01-01-2016', '%d-%m-%Y')),
(2017,3543950.3,str_to_date('01-01-2017', '%d-%m-%Y')),
(2018,3670000,str_to_date('01-01-2018', '%d-%m-%Y')),
(2019,4597350,str_to_date('01-01-2019', '%d-%m-%Y')),
(2020,3560100,str_to_date('01-01-2020', '%d-%m-%Y')),
(2021,2847550,str_to_date('01-01-2021', '%d-%m-%Y')),
(2022,2881650,str_to_date('01-01-2022', '%d-%m-%Y')),
(2023,2621950,str_to_date('01-01-2023', '%d-%m-%Y'));

select * from chart_4_1;



-- chart 2 in dashboard 4
create table chart_4_2 (
year_ numeric,
CountZerosAmounts numeric);

insert into chart_4_2
values (2015, 22),
(2016, 41),
(2017, 16),
(2018, 6);

select * from chart_4_2;



-- chart 3 in dashboard 4
create table chart_4_3 (
year_ INT,
Count_of_acte_id_max_per_name	INT,
ProcedureName	VARCHAR(512)
);

INSERT INTO chart_4_3 
VALUES
	('2015', '1', 'Consultation'),
	('2015', '2', 'Contrôle'),
	('2015', '10', 'Extraction'),
	('2015', '9', 'Opération'),
	('2015', '396', 'Orthodotntie'),
	('2015', '28', 'Prothèse'),
	('2015', '299', 'Soins'),
	('2016', '134', 'Extraction'),
	('2016', '207', 'Orthodotntie'),
	('2016', '101', 'Prothèse'),
	('2016', '1162', 'Soins'),
	('2017', '65', 'Extraction'),
	('2017', '96', 'Orthodotntie'),
	('2017', '49', 'Prothèse'),
	('2017', '1033', 'Soins'),
	('2018', '13', 'Consultation'),
	('2018', '23', 'Extraction'),
	('2018', '68', 'Orthodotntie'),
	('2018', '29', 'Prothèse'),
	('2018', '1492', 'Soins'),
	('2019', '3', 'Extraction'),
	('2019', '1769', 'Soins'),
	('2020', '2', 'Extraction'),
	('2020', '1', 'Orthodotntie'),
	('2020', '1', 'Prothèse'),
	('2020', '1497', 'Soins'),
	('2021', '1174', 'Soins'),
	('2022', '1122', 'Soins'),
	('2023', '1', 'Extraction'),
	('2023', '2', 'Orthodotntie'),
	('2023', '6', 'Prothèse'),
	('2023', '1021', 'Soins'),
	('2024', '1', 'Opération'),
	('2024', '6', 'Orthodotntie'),
	('2024', '2', 'Prothèse'),
	('2024', '618', 'Soins');


select * from chart_4_3;



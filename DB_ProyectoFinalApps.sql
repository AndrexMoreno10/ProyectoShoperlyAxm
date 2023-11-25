CREATE DATABASE proyecto_final_Apps;
use proyecto_final_Apps; 

INSERT INTO categories (id,name)
VALUES ('6', "Tecnologia"),
	('7', "Hogar"),
	('8', "Vehiculos"),
    ('9', "Inmuebles"),
	('10', "Moda"),
	('11', "Deportes");

INSERT INTO supplier (id,address,name,phone)
VALUES ('1095', "carrera 19 ", "Andres","312343452"),
('1096', "la mariela ", "Alejandra","3128777301");

INSERT INTO products (id, name, description, price, state, url, id_category_product, id_supplier_product, quantity) VALUES
('25', 'Mancuernas', 'Mancuernas', '400000', 'Disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1700873982/j6w0akistuxul7ti85yy.jpg', '11', '1095', '10'),
('21', 'Mouse Redragon', 'Mouse', '250000', 'Disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1700873133/grwjstaqxusf6xyxqmjw.jpg', '6', '1096', '10'),
('20', 'Pantalon Cargo Azul', 'Pantalon', '200000', 'Disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1700871698/kpxzefscjzln6ovfgd18.jpg', '10', '1096', '10'),
('19', 'Pantalon Cargo Negro', 'Pantalon', '120000', 'Disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1700871534/bkifj8gc371pmprnc5yo.jpg', '10', '1095', '10'),
('18', 'Casa Lujosa', 'Casa', '6000000', 'Disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1700871472/uq0cvsixzyzk7gwdbamr.jpg', '9', '1095', '10'),
('16', 'Casa Campestre', 'Casa', '50000000', 'Disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1700871338/wumtkze1lvyyfwoob0is.jpg', '9', '1095', '10'),
('13', 'Escritorio en L', 'Escritorio', '600000', 'Disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1700870946/cxoerutaulygin8i16d7.jpg', '7', '1095', '10'),
('12', 'Cama', 'Cama', '2000000', 'Disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1700870906/vii5wpvwkgknprzhhpzn.jpg', '7', '1096', '10'),
('11', 'Patines Semi-profesionales', 'Patines', '1000000', 'Disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1700870832/cvhprddssdydfwlbvxd7.jpg', '11', '1096', '10'),
('10', 'Caminadora', 'Caminadora', '3000000', 'Disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1700870755/cvjlpg4xpntocjmz2ore.jpg', '11', '1095', '10'),
('8', 'Carro BMW', 'Carro BMW', '30000000', 'Disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1700869074/es5mvn3utduxpumkm5w3.jpg', '8', '1095', '10'),
('5', 'Carro Audi', 'Carro', '200000000', 'Disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1700868740/utkx4pfcgxtuxzqjldsa.jpg', '8', '1095', '10'),
('1', 'Teclado Redragon', 'Teclado', '250000', 'disponible', 'http://res.cloudinary.com/dyjcjvwb1/image/upload/v1699450048/yjio2t1wyytzxdz4y37l.jpg', '6', '1095', '10');

INSERT INTO user (id, address, age, email, is_admin, name, password, phone, username)
VALUES ('100', 'carrera 18', 20 , 'admin', 1 , 'AndrexMoreno10', '123', '320', 'AndrexMoreno10'),
('101', 'carrera 19', 20 , 'user', 0 , 'alejita', '123', '320', 'alejita');

CREATE DATABASE proyecto_final_Apps;
use proyecto_final_Apps;

INSERT INTO categories (id,name)
VALUES ('6', "Tecnologia"),
	('7', "Hogar"),
	('8', "Vehiculos"),
    ('9', "Inmuebles"),
	('10', "Moda");

INSERT INTO categories (id,name)
VALUES ('11', "Deportes");
    
    
INSERT INTO supplier (id,address,name,phone)
VALUES ('1095', "carrera 19 ", "Andres","312343452");

INSERT INTO products (id,name,description,price,state,url,id_category_product,id_supplier_product)
VALUES ('1', "Teclado", "Teclado Redragon Gaproductsmer",250000,"Disponible","https://www.apcomputadores.com/wp-content/uploads/2021/04/Sin-t%C3%ADtulo-1-12.jpg",'6','1095');

INSERT INTO products (id,name,description,price,state,url,id_category_product,id_supplier_product)
VALUES ('8', "Celular", "Celular Iphone 14 Pro Max",250000,"Disponible","https://m.media-amazon.com/images/I/61sLuO6LiAL.jpg",'6','1095');

INSERT INTO products (id,name,description,price,state,url,id_category_product,id_supplier_product)
VALUES ('2', "Celular", "Celular Iphone 14 Pro Max",250000,"Disponible","https://m.media-amazon.com/images/I/61sLuO6LiAL.jpg",'6','1095');

INSERT INTO products (id,name,description,price,state,url,id_category_product,id_supplier_product)
VALUES ('3', "Celular", "Celular Iphone 14 Pro Max",250000,"Disponible","https://m.media-amazon.com/images/I/61sLuO6LiAL.jpg",'6','1095');

INSERT INTO products (id,name,description,price,state,url,id_category_product,id_supplier_product)
VALUES ('4', "Silla", "Silla mesedora",10000,"Disponible","https://media.manoamobiliario.com/57-home_default/silla-acapulco-mesedora.jpg",'7','1095');

INSERT INTO user (id, address, age, email, is_admin, name, password, phone, username) VALUES ('100', 'carrera 18', 20 , 'admin', 1 , 'AndrexMoreno10', '123', '320', 'AndrexMoreno10');


delete from products where id='2';
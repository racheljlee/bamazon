drop database if exists bamazon;
create database bamazon;
use bamazon;

create table products (
    item_id int not null auto_increment,
    product_name varchar(255),
    department_name varchar(50),
    price decimal (10,4) not null,
    stock_quantity int,
    primary key (item_id)
);

select * from products;

insert into products (product_name, department_name, price, stock_quantity)
values 
    ("Charmin Toilet Paper", "Household", 28.49, 200);
    ("Poland Spring Bottled Water", "Beverages", 21.00 , 125);
    ();
    ();
    ();
    ();
    ();
    ();
    ();
    ();
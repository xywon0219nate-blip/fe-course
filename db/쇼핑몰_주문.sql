/*************************************************************
쇼핑몰 주문 시스템 DB 생성
*************************************************************/
-- CREATE DATABASE IF NOT EXISTS `shoppy2026`;
show databases;
use shoppy2026;
select database();

/*************************************************************
	Member - mid - trg_member_mid
    Order - orid - trg_order_orid
    OrderItem - ord_id - trg_orderitem_ord_id
    Product - pid - trg_product_pid
*************************************************************/

delimiter $$
create trigger trg_member_mid
before insert on member
for each row
begin set 
declare max_code int;

create trigger trg_order_orid
before insert on order
for each row
begin
declare 

create trigger trg_orderitem_ord_id
before insert on orderItem
for each row
begin

create trigger trg_product_pid
before insert on product
for each row
begin

end $$
delimiter ;

create table member(
	member_id int  primary key,
    name	varchar(10)	not null,
    email	varchar(20) not null,
    create_at datetime
);

create table order(
	order_id int primary key,
    constraint fk_member_member_id		foreign key(memder_id)
		references memder(memder_id)
			on delete cascade
            on update cascade
    order_date date
);

create table product(
	product_id int primary key,
    name varchar(10) not null,
    price int not null
);

create table orderitem(
	orderitem_id int primary key,
    constraint fk_order_order_id		foreign key(order_id)
		references order(order_id)
			on delete cascade
            on update cascade,
	constraint fk_product_product_id		foreign key(product_id)
		references order(product_id)
			on delete cascade
            on update cascade,
    quantity int,
	unit_price int
);
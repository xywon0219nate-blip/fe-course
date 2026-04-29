-- CREATE DATABASE IF NOT EXISTS `shoppy_G2026`;
show databases;
use shoppy_G2026;
select database();

/*************************************************************
	Member - mid - trg_member_mid
    Order - orid - trg_order_orid
    OrderItem - ord_id - trg_orderitem_ord_id
    Product - pid - trg_product_pid
*************************************************************/

-- 1. 회원 테이블 (Member)
CREATE TABLE Member (
    mid VARCHAR(10) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    create_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. 상품 테이블 (Product)
CREATE TABLE Product (
    pid INT AUTO_INCREMENT PRIMARY KEY,
    pname VARCHAR(100) NOT NULL,
    price INT NOT NULL
);

-- 3. 주문 테이블 (Order)
CREATE TABLE Orders (
    oid INT AUTO_INCREMENT PRIMARY KEY,
    mid VARCHAR(10),
    order_date DATE NOT NULL,
    FOREIGN KEY (mid) REFERENCES Member(mid)
);

-- 4. 주문 상세 테이블 (OrderItem)
CREATE TABLE OrderItem (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    oid INT,
    pid INT,
    quantity INT NOT NULL,
    order_price INT NOT NULL, -- 주문 당시 가격 기록
    FOREIGN KEY (oid) REFERENCES Orders(oid),
    FOREIGN KEY (pid) REFERENCES Product(pid)
);

SELECT 
    m.name, 
    m.email, 
    m.reg_date, 
    DATE_FORMAT(o.order_date, '%Y-%m-%d') AS order_date
FROM Member m
JOIN Orders o ON m.mid = o.mid
WHERE m.mid = 'M0001'; -- 특정 회원 예시

SELECT 
    p.pname, 
    COUNT(oi.pid) AS order_count
FROM Product p
LEFT JOIN OrderItem oi ON p.pid = oi.pid
GROUP BY p.pid, p.pname;

SELECT 
    m.name, 
    o.order_date, 
    p.pname, 
    oi.order_price, 
    oi.quantity
FROM Member m
JOIN Orders o ON m.mid = o.mid
JOIN OrderItem oi ON o.oid = oi.oid
JOIN Product p ON oi.pid = p.pid;

DELIMITER $$

CREATE TRIGGER trg_member_id_gen
BEFORE INSERT ON Member
FOR EACH ROW
BEGIN
    DECLARE max_code INT;

    -- 1. 현재 mid의 뒷 4자리를 숫자로 변환하여 최대값을 가져옴
    SELECT IFNULL(MAX(CAST(RIGHT(mid, 4) AS UNSIGNED)), 0)
    INTO max_code
    FROM Member;

    -- 2. 'M' + (최대값+1)을 4자리로 맞춘 문자열을 새로운 mid로 설정
    SET NEW.mid = CONCAT('M', LPAD((max_code + 1), 4, '0'));
END $$

DELIMITER ;


desc member;
desc orders;
desc product;
desc orderitem;

select * from member;

/*************************************************************
	학적과 수강신청 실습 데이터베이스
    
	▷ 학적과에는 각 과목을 강의하는 강사, 등록한 학생, 강의가 이루어지는 시간(여러개의 값) 및 장소 등의 데이터가 유지된다.
	▷ 한 강사가 여러 개의 과목을 강의할 수 있으며, 각 과목과 학생 간에는 학점이 부여된다.
	▷ 과목에 대해서는 과목번호, 과목명 등의 정보가 유지되어야 한다.
	▷ 강사에 대해서는 강사번호, 이름, 나이, 성별 등의 정보가 유지되어야 한다.
	▷ 학생에 대해서는 학번, 이름, 주소 등의 정보가 유지되어야 한다.
*************************************************************/
-- 데이터베이스 생성

CREATE DATABASE IF NOT EXISTS `enroll2026`;
show databases;
use enroll2026;
select database();

create table instructor (
	instructor_no int primary key,
    instructor_name  varchar(10) not null,
    age int,
    gender char(1)
);
desc instructor;


create table subject (
	subject_no int primary key,
    subject_name varchar(10) not null,
    class_room varchar(10) not null,
    instructor_no int 
);
desc subject;


create table student (
	student_id int primary key,
    student_name varchar(10) not null,
    address varchar(20)
);
desc subject;


create table enrollment(
	student_id int, 
    subject_no int, 
    grade char(10)
);
desc enrollment;


create table class_time(
	time_id int primary key,
    subject_no int,
    class_time varchar(20)
);
desc class_time;


alter table enrollment
	add constraint fk_enrollment_student_id foreign key (student_id) 
		references student(student_id);

alter table enrollment
	add constraint fk_enrollment_subject_no foreign key(subject_no)
		references subject(subject_no);
        
desc enrollment;

select * from information_schema.table_constraints 
	where table_name = 'enrollment'; -- 키타입 확인

alter table class_time
	add constraint fk_class_time_subject_no foreign key(subject_no)
		references subject(subject_no);
desc class_time;

alter table subject
	add constraint fk_subject_instructor_no foreign key (instructor_no)
		references instructor(instructor_no);
desc subject;

select * from instructor;



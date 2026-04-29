CREATE DATABASE IF NOT EXISTS `enroll2026_sql`;
show databases;
use enroll2026_sql;
select database();

/*************************************************************
	학적과 수강신청 실습 데이터베이스
    
	▷ 학적과에는 각 과목을 강의하는 강사, 등록한 학생, 강의가 이루어지는 시간(여러개의 값) 및 장소 등의 데이터가 유지된다.
	▷ 한 강사가 여러 개의 과목을 강의할 수 있으며, 각 과목과 학생 간에는 학점이 부여된다.
	▷ 과목에 대해서는 과목번호, 과목명 등의 정보가 유지되어야 한다.
	▷ 강사에 대해서는 강사번호, 이름, 나이, 성별 등의 정보가 유지되어야 한다.
	▷ 학생에 대해서는 학번, 이름, 주소 등의 정보가 유지되어야 한다.
*************************************************************/

-- [instructor:강사] 테이블 생성
show tables;
create table instructor(
	instructor_no 		int			auto_increment 		primary key,
    instructor_name		varchar(5)	not null,
    age					int,
    gender				char(1)
);
desc instructor;

-- [student : 학생] 테이블 생성
create table student(
	student_id		int			auto_increment		primary key,
    student_name	varchar(5)	not null,
    address			varchar(50)
);
desc student;

-- [subject : 과목] 테이블 생성
create table subject(
	subject_no		int			auto_increment 		primary key,
    subject_name	varchar(30)	not null,
	class_room		varchar(20),
    instructor_no	int			not null,
    constraint fk_subject_instructor_no	foreign key(instructor_no)
		references instructor(instructor_no)
        on delete cascade
        on update cascade
);
desc subject;
select * from information_schema.table_constraints
	where table_name = 'subject';

-- [class_time : 강의시간] 테이블 생성
create table class_time(
	time_id		int			auto_increment		primary key,
    class_time	varchar(10),
    subject_no 	int			not null,
    constraint fk_class_time_subject_no		foreign key(subject_no)
		references	subject(subject_no)
			on delete cascade
            on update cascade
);
desc class_time;
select * from information_schema.table_constraints
	where table_name = 'class_time';
    

-- [enrollment : 등록] 테이블 생성
create table enrollment(
	student_id		int		not null,
    subject_no		int		not null,
    grade			char(1),
    constraint fk_enrollment_student_id		foreign key(student_id)
		references	student(student_id)
			on delete cascade
            on update cascade,
	constraint fk_subject_subject_no		foreign key(subject_no)
		references subject(subject_no)
			on delete cascade
            on update cascade
);
desc enrollment;
select * from information_schema.table_constraints
	where table_name = 'enrollment';
    
-- 강사 테이블 데이터 입력
desc instructor;
select * from instructor;
insert into instructor(instructor_name, age, gender)
	values('이순신',40,'M');
insert into instructor(instructor_name, age, gender)
	values('이다님',26,'F');
insert into instructor(instructor_name, age, gender)
	values('노연수',24,'F');

-- 학생 테이블 데이터 입력
-- 학생 테이블의 address 컬럼에 default 제약 추가 : '서울시 강남구'
desc student;
alter table student
	modify address varchar(30) default '서울시 강남구';
    
select * from student;
insert into student(student_name)
	values('허예린');
insert into student(student_name)
	values('조민경');
insert into student(student_name)
	values('정윤지');
    
-- [subject : 과목] 테이블 데이터 입력
desc subject;

select * from instructor;
select * from subject;
insert into subject(subject_name, class_room, instructor_no)
	value('MySQL','404호',1);
insert into subject(subject_name, class_room, instructor_no)
	value('GDV','403호',4);
insert into subject(subject_name, class_room, instructor_no)
	value('GDV','101호',3);
insert into subject(subject_name, class_room, instructor_no)
	value('GDV_생산','201호',4);
insert into subject(subject_name, class_room, instructor_no)
	value('NodeJS','402호',2);

-- [class_time : 강의시간 ] 테이블 데이터 입력
desc class_time;
select * from subject;
insert into class_time(class_time, subject_no) values('120분',1);
insert into class_time(class_time, subject_no) values('160분',2);
insert into class_time(class_time, subject_no) values('120분',3);
insert into class_time(class_time, subject_no) values('220분',4);
insert into class_time(class_time, subject_no) values('100분',5);

-- [enrollment : ] 테이블 데이터 입력
desc enrollment;
select * from student;
select * from subject;
select * from enrollment;
insert into enrollment(student_id, subject_no, grade)
	values(1,1,'C');
insert into enrollment(student_id, subject_no, grade)
	values(1,4,'A');
insert into enrollment(student_id, subject_no, grade)
	values(2,3,'A');
insert into enrollment(student_id, subject_no, grade)
	values(2,4,'A');
insert into enrollment(student_id, subject_no, grade)
	values(3,3,'A');
insert into enrollment(student_id, subject_no, grade)
	values(3,5,'B');
    
-- A학점을 받은 학생의 정보를 조회
select 	s.student_name as '학생명',
		s.address as '주소',
		e.grade as '학점'
	from student s, enrollment e
	where s.student_id = e.student_id
    and e.grade = 'A';
    
select s.student_name as '학생명',
		s.address as '주소',
		e.grade as '학점'
	from student s inner join enrollment e on s.student_id = e.student_id
    where e.grade = 'A';
    
-- C학점을 받은 학생의 정보와 과목명을 조회
select 	st.student_name,
		st.address,
        su.subject_name,
        e.grade
	from student st, subject su, enrollment e
	where st.student_id = e.student_id
		and su.subject_no = e.subject_no
		and e.grade = 'C';
	
select 	st.student_name,
		st.address,
        su.subject_name,
        e.grade
	from student st inner join enrollment e on st.student_id = e.student_id
					inner join subject su on su.subject_no = e.subject_no
	where e.grade = 'C';

-- 100분 강의하는 강사정보, 과목명을 조회 => 서브쿼리사용, 과목명(스칼라 서브쿼리)
select  instructor_no,
		instructor_name,
		age,
        gender,
        (select subject_name
							from subject 
							where subject_no = (select subject_no 
													from class_time
														where class_time = '100분'))
		as subject_name
	from instructor
	where instructor_no = (select instructor_no
							from subject 
							where subject_no = (select subject_no 
													from class_time
													where class_time = '100분'));


-- 이다님 강사가 강의하는 모든 과목 조회
select  su.subject_name,
		su.class_room
	from instructor i, subject su
    where i.instructor_no = su.instructor_no
		and i.instructor_name = '이다님';

select  su.subject_name,
		su.class_room
	from subject su
    where su.instructor_no = (select instructor_no 
								from instructor 
                                where instructor_name = '이다님');
                                
-- 노연수 강사가 강의하는 과목과 과목을 수강한 학생정보와 성적을 조회
select  i.instructor_name,
		su.subject_name, 
        su.class_room,
        st.student_name,
        e.grade
	from instructor i, subject su, student st, enrollment e
    where i.instructor_no = su.instructor_no
		and su.subject_no = e.subject_no
        and e.student_id = st.student_id
        and i.instructor_name = '노연수';
-- ANSI SQL       

-- 모든 강사가 강의하는 과목과 성적 조회 (모든 강사 포함)
select count(*) from instructor;  -- 4
select count(distinct instructor_no) from subject; -- 3
select * 
	from instructor i left outer join	subject su
					  on i.instructor_no = su.instructor_no;


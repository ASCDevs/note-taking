create database notes;
use notes;

create table nota(
	id int primary key not null auto_increment,
	title varchar(30),
    body varchar(200)
);

insert into nota(title,body) values ('Primeira Nota','Devo escrever algumas coisas aqui mas n tenho o que pensar');
insert into nota(title,body) values ("Segunda Nota","A segunda nota, algum conteudo aqui, escrevendo apenas de teste");
insert into nota(title,body) values ("Nota","Nota");

select * from nota;

delete from nota;
drop table nota;
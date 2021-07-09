--Tables
CREATE Table steps (
       id int AUTO_INCREMENT PRIMARY KEY not NULL COMMENT 'id',
       id_cliente int not null,
       id_pregunta int not null,
       id_expresion int not null,
       orden int NOT null,
       create_at DATETIME DEFAULT now(),
       update_at DATETIME DEFAULT now()
);

Create Table preguntas(
       id int AUTO_INCREMENT PRIMARY KEY not NULL COMMENT 'id',
       tipo_preguntas int not null,
       respuesta int not null,
       create_at DATETIME DEFAULT now(),
       update_at DATETIME DEFAULT now()
);

Create table tipo_preguntas(
       id int AUTO_INCREMENT PRIMARY KEY not NULL COMMENT 'id',
       tipo VARCHAR (50) not null,
       create_at DATETIME DEFAULT now(),
       update_at DATETIME DEFAULT now()
);

alter table
       preguntas
add
       foreign key(tipo_preguntas) references tipo_preguntas(id);

CREATE TABLE options(
       id int AUTO_INCREMENT PRIMARY KEY NOT null COMMENT 'id',
       url_api VARCHAR(250) NOT NULL,
       parameters varchar(250) not null,
       create_at DATETIME DEFAULT now(),
       update_at DATETIME DEFAULT now()
);

CREATE TABLE expretions(
       id int AUTO_INCREMENT PRIMARY KEY NOT null COMMENT 'id',
       expretion VARCHAR(250) NOT NULL,
       name VARCHAR(250) NOT NULL,
       url_api VARCHAR(250) NOT NULL,
       parameters varchar(250) not null,
       create_at DATETIME DEFAULT now(),
       update_at DATETIME DEFAULT now()
);
CREATE TABLE IF NOT EXISTS usuarios (
    idUsuario BIGINT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(150) NOT NULL,
    cpf VARCHAR(13) NOT NULL,
    dataNascimento DATE NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(10) NOT NULL,
    PRIMARY KEY(idUsuario)
);

CREATE TABLE IF NOT EXISTS projetos (
    idProjeto BIGINT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    idUsuario BIGINT NOT NULL,
    PRIMARY KEY(idProjeto),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario)
);
CREATE TABLE IF NOT EXISTS tarefas (
    idTarefa BIGINT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    dataDeCriacao DATE NOT NULL,
    dataDeConclusao DATE,
    prioridade VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    idUsuario BIGINT,
    idProjeto BIGINT NOT NULL,
    PRIMARY KEY(idTarefa),
    FOREIGN KEY(idUsuario) REFERENCES usuarios(idUsuario),
    FOREIGN KEY(idProjeto) REFERENCES projetos(idProjeto)
);
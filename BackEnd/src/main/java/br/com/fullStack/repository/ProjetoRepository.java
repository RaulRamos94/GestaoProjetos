package br.com.fullStack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fullStack.model.Projeto;

public interface ProjetoRepository extends JpaRepository<Projeto, Long>{

}


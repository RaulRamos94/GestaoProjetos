package br.com.fullStack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fullStack.model.Tarefa;

public interface TarefaRepository extends JpaRepository<Tarefa, Long>{
    
}

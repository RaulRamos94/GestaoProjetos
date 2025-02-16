package br.com.fullStack.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fullStack.model.Tarefa;
import br.com.fullStack.repository.TarefaRepository;

@RestController
@RequestMapping(value = "/tarefas")
public class TarefaController {

    @Autowired
    private TarefaRepository tarefaRepository;

    @PostMapping
    public Tarefa cadastrarTarefa(@RequestBody Tarefa tarefa) {
        return tarefaRepository.save(tarefa);
    }

    @GetMapping
    public List<Tarefa> listarTarefas() {
        return tarefaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Tarefa> buscarTarefaPeloId(@PathVariable("id") Long id) {
        return tarefaRepository.findById(id);
    }

    @PutMapping("/{id}")
    public Tarefa editarTarefa(@PathVariable("id") Long id, @RequestBody Tarefa tarefa) {
        Optional<Tarefa> tarefaExistente = tarefaRepository.findById(id);

        if (tarefaExistente.isPresent()) {
            tarefaExistente.get().setNome(tarefa.getNome());
            tarefaExistente.get().setDescricao(tarefa.getDescricao());
            tarefaExistente.get().setDataDeCriacao(tarefa.getDataDeCriacao());
            tarefaExistente.get().setDataDeConclusao(tarefa.getDataDeConclusao());
            tarefaExistente.get().setPrioridade(tarefa.getPrioridade());
            tarefaExistente.get().setPrioridade(tarefa.getPrioridade());
            tarefaExistente.get().setStatus(tarefa.getStatus());
            tarefaExistente.get().setUsuario(tarefa.getUsuario());
            tarefaExistente.get().setProjeto(tarefa.getProjeto());

            return tarefaRepository.save(tarefaExistente.get());
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public String deletarTarefaPeloId(@PathVariable("id") Long id) {
        tarefaRepository.deleteById(id);

        return "Tarefa excluída com sucesso!";
    }

}

package br.com.fullStack.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fullStack.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

    Optional<Usuario> findByEmail(String email);

    Optional<Usuario> findByIdUsuarioAndEmail(Long id, String email);
    
}

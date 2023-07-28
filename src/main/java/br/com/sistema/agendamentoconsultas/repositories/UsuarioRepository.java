package br.com.sistema.agendamentoconsultas.repositories;

import br.com.sistema.agendamentoconsultas.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}

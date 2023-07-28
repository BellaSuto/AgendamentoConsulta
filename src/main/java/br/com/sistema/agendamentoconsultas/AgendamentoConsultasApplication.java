package br.com.sistema.agendamentoconsultas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.web.config.EnableSpringDataWebSupport;

@SpringBootApplication
@EnableSpringDataWebSupport
public class AgendamentoConsultasApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgendamentoConsultasApplication.class, args);
	}

}

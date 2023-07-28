package br.com.sistema.agendamentoconsultas.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record UsuarioDto( @NotBlank String nome,
                          @NotBlank @Email(message = "Insira um endereço de e-mail válido.") String email,
                          @Size(min = 11, max = 11, message = "Insira um CPF válido.")
                          @Pattern(regexp = "\\d{11}", message = "O CPF deve conter apenas dígitos numéricos.") String cpf,
                          @NotBlank @Size(min = 8, message = "Sua senha deve conter no mínimo 8 caracteres.") String senha
) {
}

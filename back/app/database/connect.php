<?php

/**
 * Faz a conexão com o banco de dados
 *
 * @param void
 * @return objeto da conexão
 */
function connect()
{
    return new PDO('mysql:host=localhost;dbname=agendamentoconsultas', 'root', '123456', [
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
    ]);
}

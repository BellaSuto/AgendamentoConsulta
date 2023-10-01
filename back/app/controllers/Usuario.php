<?php

namespace app\controllers;

use app\entity\Usuario as EntityUsuario;

class Usuario
{
    public function cadastrar()
    {
        $dataJson = json_decode(file_get_contents("php://input"));
        $username = filter_var($dataJson->usuario, FILTER_SANITIZE_EMAIL);
        $senha = htmlspecialchars($dataJson->senha);
        $nomeCompleto = htmlspecialchars($dataJson->nomeCompleto);
        $cpf = htmlspecialchars($dataJson->cpf);
        $grupo = htmlspecialchars($dataJson->grupo);

        if (empty($username) or empty($senha) or empty($cpf) or empty($nomeCompleto) or empty($grupo)) {
            echo json_encode(['codigo' => 500, 'data' => "Não pode deixar nada em branco"]);
        }

        $dataToSave = [
            'username' => $username,
            'senha' => $senha,
            'nomeCompleto' => $nomeCompleto,
            'cpf' => $cpf,
            'grupo' => $grupo
        ];
        $entity = $this->save($dataToSave);

        $response = [];
        $codigo = 404;
        if ($entity) {
            $codigo = 200;
            $response = $dataToSave;
        }

        echo json_encode(['codigo' => $codigo, 'data' => $response]);
    }

    private function save($data = [])
    {
        return EntityUsuario::save($data);
    }
}

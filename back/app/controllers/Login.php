<?php

namespace app\controllers;

use app\entity\Login as EntityLogin;
use app\entity\Usuario;
use Exception;

class Login
{
    public function index()
    {
        return [
            'view' => 'login.php',
            'data' => ['title' => 'login'],
        ];
    }

    public function store()
    {
        $dataJson = json_decode(file_get_contents("php://input"));
        $userName = filter_var($dataJson->usuario, FILTER_SANITIZE_EMAIL);
        $passWord = htmlspecialchars($dataJson->senha);

        if (empty($userName) || empty($passWord)) {
            throw new Exception('Não pode deixar nada em branco');
        }

        $usuarioEntity = EntityLogin::hasUsuario($userName, $passWord);
        $response = [];
        $codigo = 404;
        if ($usuarioEntity) {
            $usuarioEntity = Usuario::getUsuario($usuarioEntity->idUsuario);
            if ($this->login($usuarioEntity)) {
                $codigo = 200;
                $response = [
                    'nome' => $usuarioEntity->getIdPessoa()->getNomeCompletoPessoa(),
                    'usuario' => $usuarioEntity->getNomeUsuario(),
                    'senha' => $usuarioEntity->getSenhaUsuario(),
                ];
                $_SESSION[LOGGED] = $usuarioEntity;
            } else {
                unset($_SESSION[LOGGED]);
            }
        }

        echo json_encode(['codigo' => $codigo, 'data' => $response]);
    }

    private function login(Usuario $user)
    {
        return EntityLogin::save($user);
    }
}

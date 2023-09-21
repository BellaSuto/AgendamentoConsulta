<?php

namespace app\controllers;

use app\entity\Login as EntityLogin;
use Exception;

class Login
{
    public function index($params)
    {
        return [
            'view' => 'login.php',
            'data' => ['title' => 'login'],
        ];
    }

    public function store()
    {
        $userName = filter_input(INPUT_POST, 'usuario', FILTER_SANITIZE_EMAIL);
        $passWord = htmlspecialchars(filter_input(INPUT_POST, 'senha'));

        if (empty($userName) || empty($passWord)) {
            throw new Exception('Não pode deixar nada em branco');
        }

        return EntityLogin::hasUsuario($userName, $passWord);
    }
}

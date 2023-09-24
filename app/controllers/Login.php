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
        $userName = filter_input(INPUT_POST, 'usuario', FILTER_SANITIZE_EMAIL);
        $passWord = htmlspecialchars(filter_input(INPUT_POST, 'senha'));

        if (empty($userName) || empty($passWord)) {
            throw new Exception('Não pode deixar nada em branco');
        }

        $usuarioEntity = EntityLogin::hasUsuario($userName, $passWord);
        if ($usuarioEntity) {
            $usuarioEntity = Usuario::getUsuario($usuarioEntity->idUsuario);
            if ($this->login($usuarioEntity)) {
                $_SESSION[LOGGED] = $usuarioEntity;
                redirect('/home');
            } else {
                unset($_SESSION[LOGGED]);
                redirect('/');
            }
        } else {
        }
    }

    private function login(Usuario $user)
    {
        return EntityLogin::save($user);
    }
}

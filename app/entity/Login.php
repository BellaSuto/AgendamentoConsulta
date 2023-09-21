<?php

namespace app\entity;

class Login extends EntityAbstract
{
    /**
     * @var int
     */
    protected $idLogin;

    /**
     * @var int
     */
    protected $idUsuario;

    /**
     * @var datetime
     */
    protected $dataHoraLogin;

    public static function hasUsuario(string $user, $password)
    {
        $pdo = parent::getPdo();
        $resultadoSet = $pdo->prepare("SELECT * FROM usuario WHERE nomeUsuario = '{$user}' AND senharUsuario = '{$password}'");
        $resultadoSet->execute();
        $usuario = $resultadoSet->fetch();

        return $usuario;
    }
}

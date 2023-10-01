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

    public static function hasUsuario(string $user, string $password)
    {
        $pdo = parent::getPdo();
        $resultadoSet = $pdo->prepare("SELECT * FROM usuario WHERE nomeUsuario = '{$user}' AND senharUsuario = '{$password}'");
        $resultadoSet->execute();
        $usuario = $resultadoSet->fetch();

        return $usuario;
    }

    public static function save(Usuario $user)
    {
        $pdo = parent::getPdo();
        $today = (new \DateTime())->format('Y-m-d H:i:s');
        $idUsuario = $user->getIdUsuario();
        $resultSet = $pdo->prepare('INSERT INTO login (idUsuario, dataHoraLogin) VALUES (:idUsuario, :dataHoraLogin)');
        $resultSet->bindParam('idUsuario', $idUsuario);
        $resultSet->bindParam('dataHoraLogin', $today);

        return $resultSet->execute();
    }
}

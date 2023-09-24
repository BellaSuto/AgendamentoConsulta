<?php

namespace app\entity;

class Usuario extends EntityAbstract
{
    /**
     * @var int
     */
    protected $idUsuario;

    /**
     * @var Pessoa
     */
    protected $idPessoa;

    /**
     * @var String
     */
    protected $nomeUsuario;

    /**
     * @var String
     */
    protected $senhaUsuario;

    public function __construct(int $idUsuario, Pessoa $idPessoa, string $nomeUsuario, string $senhaUsuario)
    {
        $this->idUsuario = $idUsuario;
        $this->idPessoa = $idPessoa;
        $this->nomeUsuario = $nomeUsuario;
        $this->senhaUsuario = $senhaUsuario;
    }

    public function getIdUsuario(): int
    {
        return $this->idUsuario;
    }

    public function getIdPessoa(): Pessoa
    {
        return $this->idPessoa;
    }

    public function getNomeUsuario(): string
    {
        return $this->nomeUsuario;
    }

    public function setNomeUsuario(string $nomeUsuario): self
    {
        $this->nomeUsuario = $nomeUsuario;

        return $this;
    }

    public function getSenhaUsuario(): string
    {
        return $this->senhaUsuario;
    }

    public function setSenhaUsuario(string $senhaUsuario): self
    {
        $this->senhaUsuario = $senhaUsuario;

        return $this;
    }

    public static function getUsuario(string $idUsuario): Usuario|null
    {
        $pdo = parent::getPdo();
        $resultadoSet = $pdo->prepare("SELECT * FROM usuario WHERE idUsuario = '{$idUsuario}'");
        $resultadoSet->execute();
        $usuario = $resultadoSet->fetch();
        $usuarioEntity = null;
        if ($usuario) {
            $usuarioEntity = new Usuario($usuario->idUsuario, Pessoa::getPessoa($usuario->idPessoa), $usuario->nomeUsuario, $usuario->senharUsuario);
        }

        return $usuarioEntity;
    }
}

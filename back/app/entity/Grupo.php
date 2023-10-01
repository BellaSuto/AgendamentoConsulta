<?php

namespace app\entity;

use app\enum\Grupo as EnumGrupo;

class Grupo extends EntityAbstract
{
    /**
     * @var int
     */
    protected $idGrupo;
    /**
     * @var Usuario
     */
    protected $idUsuario;
    /**
     * @var enum
     */
    protected $nomeGrupo;

    public function __construct(int $idGrupo, Usuario $idUsuario, EnumGrupo $nomeGrupo)
    {
        $this->idGrupo = $idGrupo;
        $this->idUsuario = $idUsuario;
        $this->nomeGrupo = $nomeGrupo;
    }

    public function getIdGrupo(): int
    {
        return $this->idGrupo;
    }

    public function getIdUsuario(): Usuario
    {
        return $this->idUsuario;
    }

    public function setIdUsuario(Usuario $idUsuario): self
    {
        $this->idUsuario = $idUsuario;

        return $this;
    }

    public function getNomeGrupo()
    {
        return $this->nomeGrupo;
    }

    public function setNomeGrupo(EnumGrupo $nomeGrupo)
    {
        $this->nomeGrupo = $nomeGrupo;

        return $this;
    }

    public static function save($data = [])
    {
        $pdo = parent::getPdo();
        $id = $data['idUsuario'];
        $grupo = $data['grupo'];
        $resultadoSet = $pdo->prepare('INSERT INTO grupo(idUsuario, tipoUsuario) VALUES (:idUsuario, :grupo)');
        $resultadoSet->bindParam('idUsuario', $id);
        $resultadoSet->bindParam('grupo', $grupo);
        return $resultadoSet->execute();
    }
}

<?php
namespace app\enum;

enum nomeGrupo
{
    case MEDICO;
    case PACIENTE;
    case ADMINISTRADOR;
}

class Grupo
{
    private $nomeGrupo;

    function __construct(nomeGrupo $nomeGrupo)
    {
        $this->$nomeGrupo = $nomeGrupo;
    }

    public function getNomeGrupo()
    {
        return $this->nomeGrupo;
    }
}
<?php

namespace app\entity;

class Pessoa extends EntityAbstract
{
    /**
     * @var int
     */
    protected $idPessoa;

    /**
     * @var String
     */
    protected $nomeCompletoPessoa;

    /**
     * @var String
     */
    protected $cpfPessoa;

    public function __construct(int $idPessoa, string $nomeCompletoPessoa, string $cpfPessoa)
    {
        $this->idPessoa = $idPessoa;
        $this->nomeCompletoPessoa = $nomeCompletoPessoa;
        $this->cpfPessoa = $cpfPessoa;
    }

    public function getIdPessoa(): int
    {
        return $this->idPessoa;
    }

    public function setNomeCompletoPessoa(string $nomeCompletoPessoa): self
    {
        $this->nomeCompletoPessoa = $nomeCompletoPessoa;

        return $this;
    }

    public function getNomeCompletoPessoa(): string
    {
        return $this->nomeCompletoPessoa;
    }

    public function setCpfPessoa(string $cpfPessoa): self
    {
        $this->cpfPessoa = $cpfPessoa;

        return $this;
    }

    public function getCpfPessoa(): string
    {
        return $this->cpfPessoa;
    }

    public static function getPessoa(string $idPessoa)
    {
        $pdo = parent::getPdo();
        $resultadoSet = $pdo->prepare("SELECT * FROM pessoa WHERE idPessoa = '{$idPessoa}'");
        $resultadoSet->execute();
        $pessoa = $resultadoSet->fetch();
        $pessoaEntity = null;
        if ($pessoa) {
            $pessoaEntity = new Pessoa($pessoa->idPessoa, $pessoa->nomeCompletoPessoa, $pessoa->cpfPessoa);
        }

        return $pessoaEntity;
    }

    public static function save($data = [])
    {
        $nome = $data['nomeCompleto'];
        $cpf = $data['cpf'];
        $pdo = parent::getPdo();
        $resultSet = $pdo->prepare('INSERT INTO pessoa (nomeCompletoPessoa, cpfPessoa) VALUES (:nomeCompleto, :cpf)');
        $resultSet->bindParam("nomeCompleto", $nome);
        $resultSet->bindParam("cpf", $cpf);
        $resultSet->execute();
        $entity = $pdo->lastInsertId();
        return static::getPessoa($entity);
        // $entity = new Pessoa($entity->idPessoa, $entity->nomeCompeltoPessoa, $entity->cpfPessoa);
        // return $entity;
    }
}

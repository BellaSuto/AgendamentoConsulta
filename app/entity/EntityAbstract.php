<?php

namespace app\entity;

abstract class EntityAbstract
{
    /**
     * @var \Pdo
     */
    protected static $pdo = null;
    // protected static $table = null;

    public function __call($method, array $args)
    {
        $prefix = substr($method, 0, 3);
        if ($prefix == 'get') {
            $attribute = lcfirst(substr($method, 3));

            return $this->$attribute;
        } elseif ($prefix == 'set') {
            $attribute = lcfirst(substr($method, 3));
            $this->$attribute = $args[0];

            return $this;
        }
    }

    /**
     * Abre uma referência para o banco
     * utilizando a função connect, criada
     * especialmente para esse propósito.
     *
     * @return \Pdo|null
     */
    public static function getPdo()
    {
        if (self::$pdo == null) {
            self::$pdo = connect();
        }

        return self::$pdo;
    }

    // public static function toList()
    // {
    //     $resultSet = self::getPdo()->query('SELECT * FROM ' . static::$table);
    //     $records = $resultSet->fetchAll();
    //     var_dump($resultSet);
    //     die;
    // }
}

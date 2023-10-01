<?php

namespace app\entity;

abstract class EntityAbstract
{
    /**
     * @var \Pdo
     */
    protected static $pdo = null;

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
}

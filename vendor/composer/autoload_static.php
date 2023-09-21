<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit9e583a3071f10307c27ed2a6896209c8
{
    public static $files = array (
        '3e727a68d35e7e13a7c74747b33e9c77' => __DIR__ . '/../..' . '/app/helpers/constants.php',
        '665c3a4ea4a5ba46713901c6b3de59be' => __DIR__ . '/../..' . '/app/router/router.php',
        'a8caa48ee2ff18926e6cb26ccb8a5f56' => __DIR__ . '/../..' . '/app/core/controller.php',
        'e8093bfd0c0e638ae16ca48e449450a6' => __DIR__ . '/../..' . '/app/controllers/Login.php',
        '4b3df8293d5afa9651a41d23fa47f520' => __DIR__ . '/../..' . '/app/database/connect.php',
        '3b970d4cb2f9c0d415f4447e8d16d6d7' => __DIR__ . '/../..' . '/app/entity/EntityAbstract.php',
        'e60a427db336aa53137f2f3b38d15ee7' => __DIR__ . '/../..' . '/app/entity/Login.php',
        'ca9ecc659d6dd83051ad5d367169a373' => __DIR__ . '/../..' . '/app/entity/Pessoa.php',
    );

    public static $prefixLengthsPsr4 = array (
        'a' => 
        array (
            'app\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'app\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit9e583a3071f10307c27ed2a6896209c8::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit9e583a3071f10307c27ed2a6896209c8::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit9e583a3071f10307c27ed2a6896209c8::$classMap;

        }, null, ClassLoader::class);
    }
}

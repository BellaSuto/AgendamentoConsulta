<?php

return [
    'POST' => [
        '/login' => 'Login@store',
        '/usuario' => 'Usuario@cadastrar'
    ],
    'GET' => [
        '/' => 'Login@index',
        '/home' => 'Home@index',
    ],
];

<?php

return [
    'POST' => [
        '/login' => 'Login@store',
    ],
    'GET' => [
        '/' => 'Login@index',
        '/home' => 'Home@index',
    ],
];

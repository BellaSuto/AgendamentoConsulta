<?php

return [
    'POST' => [
        '/login' => 'Login@store',
        // '/user/store' => 'User@store',
    ],
    'GET' => [
        '/' => 'Login@index',
        // '/user/create' => 'User@create',
        // '/user/[0-9]+' => 'User@show',
        // '/login' => 'Login@index',
        // 'logout' => 'Login@destroy',
    ],
];

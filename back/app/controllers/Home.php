<?php

namespace app\controllers;

class Home
{
    public function index()
    {
        return [
            'view' => 'home.php',
            'data' => ['title' => 'Home'],
        ];
    }
}

<?php

require 'bootstrap.php';

try {
    header('Access-Control-Allow-Origin: *'); // Permite acesso de qualquer origem
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        // É uma requisição OPTIONS (pré-requisição CORS), apenas responda com sucesso
        header('HTTP/1.1 200 OK');
        exit();
    }
    $data = router();
    print_r($data);

    // if (!isset($data['data'])) {
    //     throw new Exception('O índice data está faltando');
    // }

    // if (!isset($data['view'])) {
    //     throw new Exception('O índice view não existe');
    // }

    // if (!isset($data['data']['title'])) {
    //     throw new Exception('O índice title não existe');
    // }

    // if (!file_exists(VIEWS . $data['view'])) {
    //     throw new Exception("Essa página não existe {$data['view']}");
    // }

    // extract($data['data']);
    // $view = $data['view'];

    // require VIEWS . $data['view'];
    // dd($data);
    echo json_encode($data);
    die;
} catch (Exception $e) {
    var_dump($e->getMessage());
}

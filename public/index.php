<?php

require 'bootstrap.php';

try {
    $data = router();

    if (!isset($data['data'])) {
        throw new Exception('O índice data está faltando');
    }

    if (!isset($data['view'])) {
        throw new Exception('O índice view não existe');
    }

    if (!isset($data['data']['title'])) {
        throw new Exception('O índice title não existe');
    }

    if (!file_exists(VIEWS . $data['view'])) {
        throw new Exception("Essa página não existe {$data['view']}");
    }

    extract($data['data']);
    $view = $data['view'];

    require VIEWS . $data['view'];
} catch (Exception $e) {
    var_dump($e->getMessage());
}

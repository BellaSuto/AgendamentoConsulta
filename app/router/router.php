<?php

function exactMatchUriInArrayRouters($uri, $routers): array
{
    return (array_key_exists($uri, $routers)) ? [$uri => $routers[$uri]] : [];
}

function regularMatchedExpressionMatchArrayRouters($uri, $routers): array
{
    return array_filter(
        $routers,
        function ($value) use ($uri) {
            $regex = str_replace('/', '\/', ltrim($value, '/'));

            return preg_match("/^$regex$/", ltrim($uri, '/'));
        },
        ARRAY_FILTER_USE_KEY
    );
}

function params($uri, $matchedUri): array
{
    if (!empty($matchedUri)) {
        $matchedToGetParams = array_keys($matchedUri)[0];

        return array_diff(
            $uri,
            explode('/', ltrim($matchedToGetParams))
        );
    }

    return [];
}

function paramsFormat($uri, $params): array
{
    $paramsData = [];
    foreach ($params as $index => $param) {
        $paramsData[$uri[$index - 1]] = $param;
    }

    return $paramsData;
}

function router()
{
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

    $routers = require 'routers.php';
    $requestMethod = $_SERVER['REQUEST_METHOD'];

    $matchedUri = exactMatchUriInArrayRouters($uri, $routers[$requestMethod]);
    $params = [];

    if (empty($matchedUri)) {
        $matchedUri = regularMatchedExpressionMatchArrayRouters($uri, $routers[$requestMethod]);
        $uri = explode('/', ltrim($uri, '/'));
        $params = params($uri, $matchedUri);
        $params = paramsFormat($uri, $params);
    }

    if (!empty($matchedUri)) {
        return controller($matchedUri, $params);
    }

    throw new Exception('Algo deu errado');
}

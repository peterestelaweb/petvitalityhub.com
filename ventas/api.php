<?php
declare(strict_types=1);

define('CRM_API_TOKEN', 'pets2026_Xk7mQ9pZrT');

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$requestToken = $_SERVER['HTTP_X_CRM_TOKEN'] ?? '';
if ($requestToken !== CRM_API_TOKEN) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'Forbidden']);
    exit;
}

$baseDir = __DIR__ . DIRECTORY_SEPARATOR . 'data';
$dataFile = $baseDir . DIRECTORY_SEPARATOR . 'notes.json';

if (!is_dir($baseDir)) {
    @mkdir($baseDir, 0775, true);
}

if (!file_exists($dataFile)) {
    @file_put_contents($dataFile, json_encode(new stdClass()), LOCK_EX);
}

function json_error(string $message, int $statusCode = 400): void {
    http_response_code($statusCode);
    echo json_encode(['ok' => false, 'error' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function read_data(string $file): array {
    if (!is_readable($file)) {
        return [];
    }

    $raw = @file_get_contents($file);
    if ($raw === false || trim($raw) === '') {
        return [];
    }

    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(['ok' => true, 'data' => read_data($dataFile)], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    if ($raw === false) {
        json_error('No se pudo leer el body.');
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded) || !isset($decoded['data']) || !is_array($decoded['data'])) {
        json_error('Formato invalido. Se esperaba {"data": {...}}.');
    }

    $json = json_encode($decoded['data'], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    if ($json === false) {
        json_error('No se pudo serializar el payload.');
    }

    $written = @file_put_contents($dataFile, $json, LOCK_EX);
    if ($written === false) {
        json_error('No se pudo guardar. Revisa permisos de /ventas/data.', 500);
    }

    echo json_encode(
        ['ok' => true, 'updated_at' => gmdate('c')],
        JSON_UNESCAPED_UNICODE
    );
    exit;
}

json_error('Metodo no permitido.', 405);

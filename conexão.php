<?php

$servidor = 'localhost';
$usuario = 'ticket';
$senha = 'Fat2023!';
$bancoDados = 'edenred';
$database = 'edenred';

$mysqli = new mysqli($host, $usuario, $senha, $database);

if($mysqli->connect_error) {
    die("Falha ao conectar ao banco de dados: " . $mysqli->connect_error);
}

?>

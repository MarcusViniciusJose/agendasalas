<?php
#Caminhos absolutos
$dirInt = "";
define('DIRPAGE', "http://{$_SERVER['HTTP_HOST']}/{$dirInt}");
$bar = (substr($_SERVER['DOCUMENT_ROOT'], -1) == '/') ? "" : "/";
define('DIRREQ', "{$_SERVER['DOCUMENT_ROOT']}{$bar}{$dirInt}");

#Banco de dados
define('HOST', 'localhost');
define('DB', 'sistemaagendamento');
define('USER', 'root');
define('PASS', '');

#Incluir arquivos
include(DIRREQ . 'agendasalas/lib/composer/vendor/autoload.php');

?>
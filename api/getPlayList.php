<?php
require_once ('classPlayList.php');
header("Access-Control-Allow-Origin: *");
$playList   =   new playList();

echo json_encode($playList->get());

?>

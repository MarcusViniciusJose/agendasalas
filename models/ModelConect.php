<?php

namespace Models;

abstract class ModelConect
{
    protected function conectDB()
    {
        try {
            $con = new \PDO("mysql:host=" . HOST . "; dbname=" . DB . "", USER, PASS);
            return $con;
        } catch (\Exception $erro) {
            return $erro->getMessage();
        }
    }
}
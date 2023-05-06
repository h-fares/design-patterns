<?php

class DBConnection
{
    private static $instance;

    /**
     * Make the constructor private, so no one can create an instance using the constructor.
     *
     */
    private function __construct() {}

    /**
     * Main methode to check the instance.
     * If the instance is already created, return it. If not create a new instance.
     * @return DBConnection
     */
    public static function getInstance()
    {
        if (!self::$instance) self::$instance = new DBConnection();

        return self::$instance;
    }

    /**
     * Public function to create the connection.
     * @return void
     */
    public function connect()
    {
        // DO SOMETHING TO CONNECT
    }
}

// HOW TO USE IT

// PLACE 1 IN MY APPLICATION
//// I have to call this methode because the constructor is a private methode.
$dbConnection_1 = DBConnection::getInstance();
$dbConnection_1->connect();

// PLACE 2 IN MY APPLICATION
$dbConnection_2 = DBConnection::getInstance();
$dbConnection_2->connect();

// THE $dbConnection_1 AND $dbConnection_2 ARE THE SAME INSTANCE



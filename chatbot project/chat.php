<?php
   require_once 'vendor/autoload.php';

   use BotMan\BotMan\BotMan;
   use BotMan\BotMan\BotManFactory;
   use BotMan\BotMan\Drivers\DriverManager;
   
   $config = [
    // Your driver-specific configuration
    // "telegram" => [
    //    "token" => "TOKEN"
    // ]
];

   DriverManager::loadDriver(\BotMan\Drivers\Web\WebDriver::class);

   $botman = BotManFactory::create($config);

  // Give the bot something to listen for.
$botman->hears('Hello|Hi', function (BotMan $bot) {
    $bot->reply('Hello');
});
$botman->hears('Good Morning', function (BotMan $bot) {
    $bot->reply('Hey..Good morning');
});
$botman->hears('Good evening', function (BotMan $bot) {
    $bot->reply('Hey..Good evening');
});
$botman->hears('Good afternoon', function (BotMan $bot) {
    $bot->reply('Hey..Good afternoon');
});
$botman->fallback(function($bot) {
    $bot->reply('Sorry, I did not understand these commands. Here is a list of commands I understand: Hello, Hi, Good Morning, Good Afternoon, Good evening');
});

// Start listening
$botman->listen();
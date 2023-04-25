<?php

$uri = parse_url($_SERVER["REQUEST_URI"])["path"];

$routes = [
  "/" => "./api.php",
  "/api" => "./api.php",
];

function router($uri, $routes)
{
  if (array_key_exists($uri, $routes)) {
    require $routes[$uri];
  } else {
    http_response_code(404);
    echo "404 page not found";
    exit();
  }
}

router($uri, $routes);

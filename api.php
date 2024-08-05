<?php

// Read the JSON file
$json = file_get_contents('quotes.json');
$data = json_decode($json, true);

// Get the success quotes array
$quotes = $data['success_quotes'];

// Generate a random index for array
$index = array_rand($quotes);
//hello
// Return the random quote as JSON with unescaped unicode characters
echo json_encode(["quote" => $quotes[$index]], JSON_UNESCAPED_UNICODE);
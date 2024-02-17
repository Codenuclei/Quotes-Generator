// Read the JSON file
fetch('quotes.json')
  .then(response => response.json())
  .then(data => {
    // Get the success quotes array
    const quotes = data.success_quotes;
    
    // Generate a random index
    const index = Math.floor(Math.random() * quotes.length);
    
    // Return the random quote as JSON with unescaped unicode characters
    console.log(JSON.stringify({ quote: quotes[index] }));
  })
  .catch(error => console.error('Error reading JSON file:', error));

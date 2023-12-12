const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
    
  ];
  
  // Function to display a new random quote
  function newQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Display the random quote
    quoteDisplay.textContent = quotes[randomIndex];
  }

  
  
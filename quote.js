const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "It does not matter how slowly you go as long as you do not stop. - Confucius"
  ];
  
  const quoteElement = document.getElementById('quote');
  const generateButton = document.getElementById('generate-btn');
  
  generateButton.addEventListener('click', generateQuote);
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  generateQuote(); // Generate initial quote
  
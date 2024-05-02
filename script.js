let apiQuotes = [];
// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    const randomNumber = Math.floor(Math.random() * apiQuotes.length);
    console.log(apiQuotes[randomNumber]);
    console.log(randomNumber);
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getQuotes();

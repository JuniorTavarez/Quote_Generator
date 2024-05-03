const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

//Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide Loading
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show New Quote
function newQuote() {
  loading();
  // setTimeout(console.log, 1000, "Howdy!"
  // console.log('hello')
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  quoteText.textContent = quote.text;
  // Check Quote Length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }


// check if author field is blank and replace it with 'Unknown'
if (!quote.author) {
  console.log(quote.author)
  authorText.textContent = 'Unknown';
} else {

  authorText.textContent = quote.author;
}
complete()
}
// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// event listerner
twitterBtn.addEventListener('click', tweetQuote);

// New Quote Button Click

newQuoteBtn.addEventListener('click', getQuotes);

// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();

    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getQuotes();


// complete();

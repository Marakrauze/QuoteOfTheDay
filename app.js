const quotes = [
    'Happiness is not something readymade. It comes from your own actions',
    'All our dreams can come true if we have the courage to pursue them',
    'Believe you can and you are halfway there',
    'Life only changes when you decide to change. It may not be comfortable or easy, but it sure is worth it',
    'Happiness is not by chance, but by choice',
    'Life is what happens to us while we are making other plans',
    'Life isn not about finding yourself. Life is about creating yourself'
];



function newQuote() {

    const text = document.getElementById('quote');
    const randomNum = Math.floor(Math.random()*(quotes.length));

    text.innerHTML = quotes[randomNum];
};
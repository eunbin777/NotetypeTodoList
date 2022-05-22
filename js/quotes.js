const quotes = [
{
    quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
    author: "Albert Einstein",
},
{
    quote: "The invariable mark of wisdom is to see the miraculous in the common.",
    author: "Ralph Waldo Emerson",
},
{
    quote: "You can't be brave if you've only had wonderful things happen to you.",
    author: "Mary Tyler Moore",
},
{
    quote: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt",
},
{
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
},
{
    quote: "Yesterday is history, tomorrow is a mystery, but today is a gift. That's why we call it the present.",
    author: "Winnie the Pooh",
},
{
    quote: "When life knocks you down, roll over and look at the stars.",
    author: "Snoopy",
},
{
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
},
{
    quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    author: "Mark Twain",
},
{
    quote: "Those who dare to fail miserably can achieve greatly.",
    author: "John F. Kennedy",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
const quotes = [
    {
        quote: "We don’t just sit around and wait for other people. We just make, and we do.", 
        author: "Arlan Hamilton",
    },
    {
        quote: "When a woman becomes her own best friend life is easier.",
        author: "Diane Von Furstenberg",
    }, 
    {
        quote:"Stay strong. Stand up. Have a voice.",
        author: "Shawn Johnson",
    },
    {
        quote:"It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.",
        author: "Madeleine Albright",
    },
    {
        quote:"I swear, by my life and my love of it, that I will never live for the sake of another man, nor ask another man to live for mine.",
        author: "Ayn Land",
    },
    {
        quote:"I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. No one knows me or loves me completely. I have only myself",
        author: "Simone de Beauvoir",
    },
    {
        quote: "I am not free while any woman is unfree, even when her shackles are very different from my own.",
        author: "Audre Lorde",
    },
    {
        quote: "There is no limit to what we, as women, can accomplish.",
        author: "Michelle Obama",
    },
    {
        quote:"You cannot find peace by avoiding life.",
        author: "Virginia Woolf",
    },
    {
        quote:"You must take life the way it comes at you and make the best of it.",
        author: "Yann Martel",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author}`;
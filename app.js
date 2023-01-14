const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btn = document.querySelector('button');
const tweet = document.querySelector('.tweet');
const copy = document.querySelector('.copy');
const sound = document.querySelector('.sound');


// Radom Quote
const randomQuote = () => {
    btn.classList.add('loading');
    btn.innerText = 'Loading quote....';

     fetch('http://api.quotable.io/random').then(res => res.json()).then(result =>{
        quote.innerText = result.content;
        author.innerText = result.author;
        btn.innerText = 'New Quote';
        btn.classList.remove('loading');
     })
}

sound.addEventListener('click', () =>{
   let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}` );
   speechSynthesis.speak(utterance);
});

copy.addEventListener('click', () =>{
   navigator.clipboard.writeText(quote.innerText);
});

tweet.addEventListener('click', () =>{
   let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
   window.open(tweetUrl, '_blank');
});


btn.addEventListener('click', randomQuote);


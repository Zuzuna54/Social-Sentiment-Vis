const express = require("express");
const tweets = require("./routes/api/tweets");
const bodyParser = require('body-parser');
var path = require("path");
const app = express();
var http = require('http').createServer(app)
var twitter = require('twitter');


app.get('/tweets', function (req, res) {
    tweetsLoader("trump", 100);
    return setTimeout(function(){ res.json(tweeets);}, 500)
}); 

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));

var twitter = new twitter({
    consumer_key: 'mGH2G3H23QnqEoxep2irFceHZ',
    consumer_secret: '2Hga9WVHSDfHWQ3JI14UNBZdbtI1Ce6TczCbriI1rNFVA2xk7L',
    access_token_key: '1184129891748499456-KY8Oj8QdxQigCBvCaRSlyucqXTIS7q',
    access_token_secret: 'ZyQRmrvGoYDgid3Syxaq18vIGvcB6nJYu3ejlRFWguds8'
});

async function quickstart(input) {
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');
    
    // Instantiates a client
    const client = new language.LanguageServiceClient();
    
    // The text to analyze
    const text = input;
    
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };
    
    // Detects the sentiment of the text
    const [result] = await client.analyzeSentiment({ document: document });
    const sentiment = result.documentSentiment;
    
    const output = { text: text, sentimentScore: sentiment.score, sentimentMagnitude: sentiment.magnitude }
    // console.log(output)
    return output
}

let tweeets = [];
const tweetsLoader = (input, numTweets) => {
    var search = input;
    var output = [];
    
    twitter.stream('statuses/filter', { track: search }, function (stream) {
        stream.on('data', function (tweet) {
            // console.log(tweet.extended_tweet)
            let text = quickstart(tweet.extended_tweet.full_text)
            output.push({date: tweet.created_at, user: { screen_name: tweet.user.screen_name, name: tweet.user.name}, text: text });
            // res.send(tweet);
            console.log(tweeets)
            tweeets = output;
            if (tweeets.length >= numTweets) {
                stream.destroy();
                output = [];
                return tweeets;
            }
        });
        stream.on('error', function (error) {
        });
    });
}
console.log(tweetsLoader("trump"))
// setTimeout( function(){console.log(tweeets)}, 1000)
console.log(tweeets)


// maybe i need to add another function here to be able to pass the tweets and timly resolve the promises returned by google api befrore sending everything up in the frnt end ?
// or maybe i can time out the api calls in a custom way so i can check in the front end if every one of them are resolved and then kill the stream
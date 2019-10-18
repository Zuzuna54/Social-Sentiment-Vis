const express = require("express");
const tweets = require("./routes/api/tweets");
const bodyParser = require('body-parser');
var path = require("path");




const app = express();
var http = require('http').createServer(app)


app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/frontend/index.html'));
}); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use("/api/tweets", tweets )

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


var twitter = require('twitter');



var twitter = new twitter({
    consumer_key: 'mGH2G3H23QnqEoxep2irFceHZ',
    consumer_secret: '2Hga9WVHSDfHWQ3JI14UNBZdbtI1Ce6TczCbriI1rNFVA2xk7L',
    access_token_key: '1184129891748499456-KY8Oj8QdxQigCBvCaRSlyucqXTIS7q',
    access_token_secret: 'ZyQRmrvGoYDgid3Syxaq18vIGvcB6nJYu3ejlRFWguds8'
});

let tweeets = []
const tweetsLoader = (input, res) => {

    var search = input


    twitter.stream('statuses/filter', { track: search }, function (stream) {
        stream.on('data', function (tweet) {
            tweeets.push(tweet.text)
            // res.send(tweet);
            console.log(tweet.text)
            if (tweeets.length >= 100) {
                stream.destroy();
                return tweeets
            }
        });
        stream.on('error', function (error) {
        });
    });
}

// console.log(tweetsLoader("banana"))


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

    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
}

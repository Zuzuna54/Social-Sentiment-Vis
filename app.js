const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var twitter = require('twitter');

app.get('/tweets', function (req, res) {
    tweetsLoader(req.query.queryStr, req.query.queryNum);
        setTimeout(() => {
            res.json(tweeets);
        }, 500);    
        tweeets = [];
        
}); 

app.use(express.static(__dirname + "/frontend"))
app.use('/', function (req, res) {
    res.sendFile("./frontend/index.html", { root: __dirname })
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
    const language = require('@google-cloud/language');   
    const client = new language.LanguageServiceClient();
    const text = input;
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };
    const [result] = await client.analyzeSentiment({ document: document });
    const sentiment = result.documentSentiment; 
    const output = { text: text, sentimentScore: sentiment.score, sentimentMagnitude: sentiment.magnitude }
    return output;
}

let tweeets = [];
const tweetsLoader = (input, numTweets) => {
    var search = input;
    var output = [];
    
    if(input !== undefined && numTweets !== undefined) {
        twitter.stream('statuses/filter', { track: search }, function (stream) {
            stream.on('data', function (tweet) {

                let promise;
                quickstart(tweet.extended_tweet.full_text).then(res => {
                    promise = res;
                    output.push({
                        date: tweet.created_at,
                        user: { screen_name: tweet.user.screen_name, name: tweet.user.name},
                        text: promise
                    });
                    tweeets = output;
                    console.log(output);
                });

                if (output.length >= numTweets) {
                    stream.destroy();
                    output = [];
                    tweeets = tweeets.slice(0, numTweets);
                }
            });
            stream.on('error', function (error) {
            });
        });
    }
}
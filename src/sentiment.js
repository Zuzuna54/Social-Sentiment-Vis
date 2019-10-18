
var twitter = require('twitter');



var twitter = new twitter({
    consumer_key: 'mGH2G3H23QnqEoxep2irFceHZ',
    consumer_secret: '2Hga9WVHSDfHWQ3JI14UNBZdbtI1Ce6TczCbriI1rNFVA2xk7L',
    access_token_key: '1184129891748499456-KY8Oj8QdxQigCBvCaRSlyucqXTIS7q',
    access_token_secret: 'ZyQRmrvGoYDgid3Syxaq18vIGvcB6nJYu3ejlRFWguds8'
});

const tweetsLoader = (input) => {

    var search = input

    let tweeets = []

    twitter.stream('statuses/filter', { track: search }, function (stream) {
        stream.on('data', function (tweet) {
            tweeets.push(tweet.text)
            // console.log(tweeets)
            if (tweeets.length === 100) {
                stream.destroy();
                return tweeets
            }
        });
        stream.on('error', function (error) {
        });
    });
}


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

    // console.log(`Text: ${text}`);
    // console.log(`Sentiment score: ${sentiment.score}`);
    // console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
    const output = { text: text, sentimentScore: sentiment.score, sentimentMagnitude: sentiment.magnitude}
    // console.log(output);
    return output
}


console.log(quickstart("trump"))
 

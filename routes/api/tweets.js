// const express = require("express");
// const router = express.Router();
// var path = require("path")



// router.get('/text', function (req, res) {
//     res.sendFile(path.resolve(__dirname + '../../../frontend/index.html'));
// }); 
// var http = require('http').createServer(app)

// module.exports = router;

// var twitter = require('twitter');



// var twitter = new twitter({
//     consumer_key: 'mGH2G3H23QnqEoxep2irFceHZ',
//     consumer_secret: '2Hga9WVHSDfHWQ3JI14UNBZdbtI1Ce6TczCbriI1rNFVA2xk7L',
//     access_token_key: '1184129891748499456-KY8Oj8QdxQigCBvCaRSlyucqXTIS7q',
//     access_token_secret: 'ZyQRmrvGoYDgid3Syxaq18vIGvcB6nJYu3ejlRFWguds8'
// });

// let tweeets = []
// const tweetsLoader = (input, res) => {

//     var search = input


//     twitter.stream('statuses/filter', { track: search }, function (stream) {
//         stream.on('data', function (tweet) {
//             tweeets.push(tweet.text)
//             // res.send(tweet);
//             console.log(tweeets.length)
//             if (tweeets.length >= 100) {
//                 stream.destroy();
//                 return tweeets
//             }
//         });
//         stream.on('error', function (error) {
//         });
//     });
// }




// async function quickstart(input) {
//     // Imports the Google Cloud client library
//     const language = require('@google-cloud/language');

//     // Instantiates a client
//     const client = new language.LanguageServiceClient();

//     // The text to analyze
//     const text = input;

//     const document = {
//         content: text,
//         type: 'PLAIN_TEXT',
//     };

//     // Detects the sentiment of the text
//     const [result] = await client.analyzeSentiment({ document: document });
//     const sentiment = result.documentSentiment;

//     console.log(`Text: ${text}`);
//     console.log(`Sentiment score: ${sentiment.score}`);
//     console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
// }


// // console.log(quickstart("google"))
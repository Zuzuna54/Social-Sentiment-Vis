var twitter = require('twitter');
// var oauth = require('oauth.js');



var twitter = new twitter({
    consumer_key: 'mGH2G3H23QnqEoxep2irFceHZ',
    consumer_secret: '2Hga9WVHSDfHWQ3JI14UNBZdbtI1Ce6TczCbriI1rNFVA2xk7L',
    access_token_key: '1184129891748499456-KY8Oj8QdxQigCBvCaRSlyucqXTIS7q',
    access_token_secret: 'ZyQRmrvGoYDgid3Syxaq18vIGvcB6nJYu3ejlRFWguds8'
});

var search = "trump"

let tweeets = []
while ( tweeets.length <= 100 ) {
twitter.stream('statuses/filter', { track: search }, function (stream) {
        stream.on('data', function (tweet) {
            tweeets.push(tweet.text)
            console.log(tweeets.length)
        });
        stream.on('error', function (error) {
        });
});
}
    



// var urlLink = 'https://api.twitter.com/1.1/statuses/update.json';

// var twitterStatus = "Sample tweet";

// var oauth_consumer_key = "mGH2G3H23QnqEoxep2irFceHZ";
// var consumerSecret = "2Hga9WVHSDfHWQ3JI14UNBZdbtI1Ce6TczCbriI1rNFVA2xk7L";

// var oauth_token = "1184129891748499456-KY8Oj8QdxQigCBvCaRSlyucqXTIS7q";
// var tokenSecret = "ZyQRmrvGoYDgid3Syxaq18vIGvcB6nJYu3ejlRFWguds8";

// var nonce = oauth.nonce(32);
// var ts = Math.floor(new Date().getTime() / 1000);
// var timestamp = ts.toString();

// var accessor = {
//     "consumerSecret": consumerSecret,
//     "tokenSecret": tokenSecret
// };

// var params = {
//     "status": twitterStatus,
//     "oauth_consumer_key": oauth_consumer_key,
//     "oauth_nonce": nonce,
//     "oauth_signature_method": "HMAC-SHA1",
//     "oauth_timestamp": timestamp,
//     "oauth_token": oauth_token,
//     "oauth_version": "1.0"
// };
// var message = {
//     "method": "POST",
//     "action": urlLink,
//     "parameters": params
// };

// //lets create signature
// oauth.SignatureMethod.sign(message, accessor);
// var normPar = oauth.SignatureMethod.normalizeParameters(message.parameters);
// var baseString = oauth.SignatureMethod.getBaseString(message);
// var sig = oauth.getParameter(message.parameters, "oauth_signature") + "=";
// var encodedSig = oauth.percentEncode(sig); //finally you got oauth signature

// $.ajax({
//     url: urlLink,
//     type: 'POST',
//     data: {
//         "status": twitterStatus
//     },
//     beforeSend: function (xhr) {
//         xhr.setRequestHeader("Authorization", 'OAuth oauth_consumer_key="' + oauth_consumer_key + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="' + timestamp + '",oauth_nonce="' + nonce + '",oauth_version="1.0",oauth_token="' + oauth_token + '",oauth_signature="' + encodedSig + '"');
//     },
//     success: function (data) {
//         alert("Tweeted!");
//     },
//     error: function (exception) {
//         alert("Exeption:" + exception);
//     }
// });

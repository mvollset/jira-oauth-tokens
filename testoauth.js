const request= require('request');
const fs=require('fs')
let privateKeyData = fs.readFileSync('./jira_privatekey.pem','utf-8');
const oauth =
        { consumer_key: 'middleware' //Your consumer key
        , consumer_secret: privateKeyData //This will contain the private key.
        , token: 'token' //Enter your OAuth access token here
        , token_secret: 'token_secret'//Enter your OAuth token secret here
        , signature_method : 'RSA-SHA1'
        };

request.get({url:'https://syscom-test.atlassian.net/rest/api/latest/issue/SD-3', oauth:oauth, qs:null, json:true}, function (e, r, user) {
      console.log(user)
    });
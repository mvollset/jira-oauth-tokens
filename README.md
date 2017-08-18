# Jira OAuth Authenticaton for nodejs

Since the official samples from Atlassian are outdated and I had trouble finding any othr good samples for server integration scenarios. There are two scripts, oauth-authenticate.js that takes you through the oAuth dance and displays the token and token secret and testoauth.js that allow you to test your tokens, and serves as an example on how you can use the oAuth tokens with the request module. 

## Setup
The first step is taken from the atlassian documentation.
 # [Configure your application as an OAuth consumer](https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-oauth-authentication/#step-1-configure-your-client-application-as-an-oauth-consumer)
 # Do the OAuth dance - run oauth-authenticate.js
 # Make an authenticated request

### Run oauth-authenticate
If you have not done so already, run "npm install" to install any dependencies. Then run 

```sh
node oauth-authenticate.js --jira https://my-test.atlassian.net --key servicemiddleware --keyfile ./jira_privatekey.pem --issue JRA-18
Visit:
https://syscom-test.atlassian.net/plugins/servlet/oauth/authorize?oauth_token=gZCvtIs0JcgaGQLemgVJDOoNmaCixR5N
After logged in, you will be redirected to a page on localhost, copy the oauth_verifier code parameter and paste it below
Enter the verification code here:

```
This will take you to your site where you need to Allow the application access to your jira instance. The redirect URL will look something like this:

http://localhost:8080/sessions/callback?oauth_token=Cr*****************************&oauth_verifier=GGKBrm

You will need to enter the 6 character oauth_verifier in your terminal to verify the token.
Your output should look something like this:

```sh
Enter the verification code here:
PHptbI
Your OAuth Access Token: r********************************
Your OAuth Token Secret: 0********************************
Save these values and use them to authenticate your request.
SD-18
```
If the key you supplied as test value is shown, you have made a successfull request to Jira. 


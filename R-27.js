//* იუთუბის კომენტარები ////////////////////////////////

function canComment(userIsLoggedIn,videoIsCommentable) {
    return userIsLoggedIn && videoIsCommentable;
}

let userIsLoggedIn = true;
let videoIsCommentable = false;

console.log("Users status to post comment : ",canComment(userIsLoggedIn,videoIsCommentable));







//* სოც ქსელი /////////////////////////////////////////


function canPost(userIsLoggedIn,userIsBlocked) {
    let userCanPost = userIsLoggedIn && userIsBlocked == false;
    return userCanPost;
}

userIsLoggedIn = true;
let userIsBlocked = false;
console.log("Users status to post : ",canPost(userIsLoggedIn, userIsBlocked));







//* ონლაინ მაღაზია //////////////////////////////////////

function canBuy(balance, userCartTotal) {
    let output = userCartTotal <= balance;
    return output;
}

let balance = 120;
let userCartTotal = 119;

console.log("users status to buy : ", canBuy(balance, userCartTotal));





//* კომენტარის წაშლა /////////////////////////////////

function canDeleteComment(userIsAdmin, userIsModerator, userIsCommentAuthor) {
    return userIsAdmin || userIsModerator || userIsCommentAuthor;
}

let userIsAdmin = false;
let userIsModerator = false;
let userIsCommentAuthor = true;

console.log("status to delete commment : ", canDeleteComment(userIsAdmin, userIsModerator, userIsCommentAuthor));




//* ატომური ბომბი ///////////////////////

function canNuke(presidentKey, primeMinisterKey, generalOfArmiesKey, masterKey) {
    return (presidentKey && primeMinisterKey && generalOfArmiesKey) || masterKey;
}

let presidentKey = false;
let primeMinisterKey = false;
let generalOfArmiesKey = false;
let masterKey = true;

console.log("permission to launch nuke : ", canNuke(presidentKey, primeMinisterKey, generalOfArmiesKey, masterKey));


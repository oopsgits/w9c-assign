var tweets = [
    {
        tweet: "tweet 1",
        username: "Alex",
        age: 17,
        creted_at: "04-16-2020"                                                               //<---why wont a dash work?
    },
    {
        tweet: "tweet 2",
        username: "Tom",
        age: 90,
        creted_at: "01-05-2020"                                                               //<---why wont a dash work?
    
    },
    {
        tweet: "tweet 3",
        username: "david",
        age: 40,
        creted_at: "11-29-2020"                                                               //<---why wont a dash work                                                               //<---why wont a dash work?
    
    
    },
];


for(var index = 0; index < tweets.length; index++) { 
    console.log(tweets[index].tweet);
    console.log(tweets[index].username);
    console.log(tweets[index].creted_at);
    console.log("-----------------------");
}



var tweets = [
    {
        tweet: "what ever",
        username: "jill",
        created_at: "02-04-2020",
        age: 11
    },
    {
        tweet: "this is my first ever tweet",
        username: "jimmy",
        created_at: "02-04-2020",
        age: 16
    },
    {
        tweet: "I can see this turing into my whole life :)",
        username: "tommy",
        created_at: "02-04-2020",
        age: 90
    },
    {
        tweet: "I can see this turing into my whole life :)",
        username: "tommy",
        created_at: "02-09-2020",
        age: 90
    },
    {
        tweet: "I can see this turing into my whole life :)",
        username: "Ngure",
        created_at: "02-04-2020",
        age: 26
    },
    {
        tweet: "uuuuurrrp",
        username: "danny",
        created_at: "06-11-2020",
        age: 33
    },
    {
        tweet: "I can see this turing into my whole life :)",
        username: "tommy",
        created_at: "02-04-2020",
        age: 90
    },
    {
        tweet: "I can see this turing into my whole life :)",
        username: "jill",
        created_at: "02-04-2020",
        age: 11
    },
    {
        tweet: "I can see this turing into my whole life :)",
        username: "ngure",
        created_at: "03-01-2019",
        age: 26
    },
    {
        tweet: " :):):):):):):):)",
        username: "jack",
        created_at: "02-04-2020",
        age: 12
    },


];


 function ageChecker(tweet) {
    return tweet.age >= 18;
    // if (tweet.age >= 18)
    // return true;
    // else return (console.log ,false)
}

      
    
    
    
    


var overEightteenTweets = tweets.filter(ageChecker);
console.log(overEightteenTweets);

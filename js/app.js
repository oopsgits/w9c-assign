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


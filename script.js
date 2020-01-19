
console.log("Hello World. I am alive.")
var timer = setTimeout(function() 
    {
    alert("You have run out of time");
    }, 1000 * 60);
var questions =
{
    qst1 : "What is the best-selling Nintendo exclusive game of all time?",
    qst2 : "Which of the following games did Mario creator Shigeru Miyamoto NOT design?",
    qst3 : "What is the first game with Princess Zelda as a playable character?",
    qst4 : "What is the best-selling Nintendo handheld of all time?",
    qst5 : "Which pro baseball team did Nintendo become majority owner of in 1992?"
};

var answers =
{
    answers1 : ["Duck Hunt", "Super Mario Bros.", "Mario Kart Wii", "Wii Sports"],
    answers2 : ["Donkey Kong","Kid Icarus","Excitebike","The Legend of Zelda"],
    answers3 : ["Zelda: Wand of Gamelon","The Legend of Zelda: Ocarina of Time","Super Smash Bros. Melee","Super Smash Bros. Brawl"],
    answers4 : ["Nintendo Game Boy","Nintendo Game Boy Advance","Nintendo DS","Nintendo 3DS"],
    answers5 : ["Seattle Mariners","Oakland Athletics","Kansas City Royals","Tampa Bay Rays"]
};

var isCorrect =
{
    correct1 : false,
    correct2 : false,
    correct3 : false,
    correct4 : false,
    correct5 : false,
}

var correctcounter = 0;
console.log(questions.qst1);

$("#qst1").text(questions.qst1);
$("#ans1").text(questions.answers1);

$("#qst2").text(questions.qst2);
$("#ans2").text(questions.answers2);

$("#qst3").text(questions.qst3);
$("#ans3").text(questions.answers3);

$("#qst4").text(questions.qst4);
$("#ans4").text(questions.answers4);

$("#qst5").text(questions.qst5);
$("#ans5").text(questions.answers5);


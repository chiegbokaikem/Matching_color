let colors = ["red", "blue", "green","pink", "purple", "white", "teal", "navy",
  "silver","cyan", "magenta", "coral", "lime", "maroon","crimson"]

let savedColors = [];
let levels = [levelOne, levelTwo, levelThree, levelFour, levelFive];
let currentLevel = 0;
let count = 0;
let userClickedColors = [];
let userClickedBoxes = [];
let win = [];
let lose = [];
let start = false;
let countDown;
let audio = {};
let wrongStatement = ["Oof. That was… bold. Boldly wrong.", "You just invented a new color: 'Failure Gray'.", 
    "Well… at least you were consistent. Consistently wrong.", "You just won the 'Most Creative Wrong Answer' award.",
    "Congratulations! You've successfully avoided the correct answer.", "That was so bad, even the boxes are embarrassed.",
]
let correctStatement = ["Well done! You just made the boxes very happy.", "Even my shadow is clapping for you right now!", "You just made the colors feel like they won the lottery.", "You just turned a color-matching game into a color-matching masterpiece.",
    "You just unlocked the 'Color Whisperer' achievement.", "You came, you saw, you color-matched like a boss!",
     "If winning was a crime, you'd be serving a life sentence!", "You just made the colors feel special. They won't forget this."
]


function levelOne() {
    let randomNum = [...colors];
    for (let i = randomNum.length -1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [randomNum[i], randomNum[j]] = [randomNum[j], randomNum[i]];
    }
    let shuffledColors = randomNum;
    let boxesOne = document.querySelectorAll(".firstGrid > div");
    let boxes = [];
    for (let i = 0; i < boxesOne.length; i++) {
        boxes.push(boxesOne[i]);
    }
    for (let i = boxes.length - 1; i > 0; i--) {
        let k = Math.floor(Math.random() * (i + 1));
        [boxes[i], boxes[k]] = [boxes[k], boxes[i]];
    }
    let shuffledboxes = boxes;
    for (let i = 0; i < shuffledboxes.length -2; i++) {
        shuffledboxes[i].style.backgroundColor = shuffledColors[i];
        
    }
    let otherColors = [shuffledColors[0], shuffledColors[1]]
        
    shuffledboxes[2].style.backgroundColor = otherColors[0];
    shuffledboxes[3].style.backgroundColor = otherColors[1];

    savedColors = []; // Clear the savedColors array before pushing new colors
   
    for (let i = 0; i < boxesOne.length; i++) {
        savedColors.push(boxesOne[i].style.backgroundColor);
    }
}

function levelTwo() {
    let randomNum = [...colors];
    for (let i = randomNum.length -1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [randomNum[i], randomNum[j]] = [randomNum[j], randomNum[i]];
    }
    let shuffledColors = randomNum;
    let boxesTwo = document.querySelectorAll(".secondGrid > div");
    let boxes = [];
    for (let i = 0; i < boxesTwo.length; i++) {
        boxes.push(boxesTwo[i]);
    }
    for (let i = boxes.length - 1; i > 0; i--) {
        let k = Math.floor(Math.random() * (i + 1));
        [boxes[i], boxes[k]] = [boxes[k], boxes[i]];
    }
    let shuffledboxes = boxes;
    for (let i = 0; i < shuffledboxes.length -4; i++) {
        shuffledboxes[i].style.backgroundColor = shuffledColors[i];
        
    }
    let otherColors = [shuffledColors[0], shuffledColors[1], shuffledColors[2], shuffledColors[3]]
        
        shuffledboxes[4].style.backgroundColor = otherColors[0];
        shuffledboxes[5].style.backgroundColor = otherColors[1];
        shuffledboxes[6].style.backgroundColor = otherColors[2];
        shuffledboxes[7].style.backgroundColor = otherColors[3];
    
        savedColors = []; // Clear the savedColors array before pushing new colors
   
        for (let i = 0; i < boxesTwo.length; i++) {
            savedColors.push(boxesTwo[i].style.backgroundColor);
        }
}

function levelThree() {
    let randomNum = [...colors];
    for (let i = randomNum.length -1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [randomNum[i], randomNum[j]] = [randomNum[j], randomNum[i]];
    }
    let shuffledColors = randomNum;
    let boxesThree = document.querySelectorAll(".thirdGrid > div");
    let boxes = [];
    for (let i = 0; i < boxesThree.length; i++) {
        boxes.push(boxesThree[i]);
    }
    for (let i = boxes.length - 1; i > 0; i--) {
        let k = Math.floor(Math.random() * (i + 1));
        [boxes[i], boxes[k]] = [boxes[k], boxes[i]];
    }
    let shuffledboxes = boxes;
    for (let i = 0; i < shuffledboxes.length -6; i++) {
        shuffledboxes[i].style.backgroundColor = shuffledColors[i];
        
    }
    let otherColors = [shuffledColors[0], shuffledColors[1], shuffledColors[2], shuffledColors[3], shuffledColors[4], shuffledColors[5]]
        
    shuffledboxes[6].style.backgroundColor = otherColors[0];
    shuffledboxes[7].style.backgroundColor = otherColors[1];
    shuffledboxes[8].style.backgroundColor = otherColors[2];
    shuffledboxes[9].style.backgroundColor = otherColors[3];
    shuffledboxes[10].style.backgroundColor = otherColors[4];
    shuffledboxes[11].style.backgroundColor = otherColors[5];

    savedColors = []; // Clear the savedColors array before pushing new colors
   
    for (let i = 0; i < boxesThree.length; i++) {
        savedColors.push(boxesThree[i].style.backgroundColor);
    }
}

function levelFour() {
    let randomNum = [...colors];
    for (let i = randomNum.length -1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [randomNum[i], randomNum[j]] = [randomNum[j], randomNum[i]];
    }
    let shuffledColors = randomNum;
    let boxesFour = document.querySelectorAll(".fourthGrid > div");
    let boxes = [];
    for (let i = 0; i < boxesFour.length; i++) {
        boxes.push(boxesFour[i]);
    }
    for (let i = boxes.length - 1; i > 0; i--) {
        let k = Math.floor(Math.random() * (i + 1));
        [boxes[i], boxes[k]] = [boxes[k], boxes[i]];
    }
    let shuffledboxes = boxes;
    for (let i = 0; i < shuffledboxes.length -8; i++) {
        shuffledboxes[i].style.backgroundColor = shuffledColors[i];
        
    }
    let otherColors = [shuffledColors[0], shuffledColors[1], shuffledColors[2], shuffledColors[3], shuffledColors[4], shuffledColors[5], shuffledColors[6], shuffledColors[7]]
        
        shuffledboxes[8].style.backgroundColor = otherColors[0];
        shuffledboxes[9].style.backgroundColor = otherColors[1];
        shuffledboxes[10].style.backgroundColor = otherColors[2];
        shuffledboxes[11].style.backgroundColor = otherColors[3];
        shuffledboxes[12].style.backgroundColor = otherColors[4];
        shuffledboxes[13].style.backgroundColor = otherColors[5];
        shuffledboxes[14].style.backgroundColor = otherColors[6];
        shuffledboxes[15].style.backgroundColor = otherColors[7];

        savedColors = []; 
   
        for (let i = 0; i < boxesFour.length; i++) {
            savedColors.push(boxesFour[i].style.backgroundColor);
        }
}

function levelFive() {
    let randomNum = [...colors];
    for (let i = randomNum.length -1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [randomNum[i], randomNum[j]] = [randomNum[j], randomNum[i]];
    }
    let shuffledColors = randomNum;
    let boxesFive = document.querySelectorAll(".fifthGrid > div");
    let boxes = [];
    for (let i = 0; i < boxesFive.length; i++) {
        boxes.push(boxesFive[i]);
    }
    for (let i = boxes.length - 1; i > 0; i--) {
        let k = Math.floor(Math.random() * (i + 1));
        [boxes[i], boxes[k]] = [boxes[k], boxes[i]];
    }
    let shuffledboxes = boxes;
    for (let i = 0; i < shuffledboxes.length -10; i++) {
        shuffledboxes[i].style.backgroundColor = shuffledColors[i];
        
    }
    let otherColors = [shuffledColors[0], shuffledColors[1], shuffledColors[2], shuffledColors[3], shuffledColors[4], shuffledColors[5], shuffledColors[6], shuffledColors[7], shuffledColors[8], shuffledColors[9]]
        
        shuffledboxes[10].style.backgroundColor = otherColors[0];
        shuffledboxes[11].style.backgroundColor = otherColors[1];
        shuffledboxes[12].style.backgroundColor = otherColors[2];
        shuffledboxes[13].style.backgroundColor = otherColors[3];
        shuffledboxes[14].style.backgroundColor = otherColors[4];
        shuffledboxes[15].style.backgroundColor = otherColors[5];
        shuffledboxes[16].style.backgroundColor = otherColors[6];
        shuffledboxes[17].style.backgroundColor = otherColors[7];
        shuffledboxes[18].style.backgroundColor = otherColors[8];
        shuffledboxes[19].style.backgroundColor = otherColors[9];

    
        savedColors = []; 
   
        for (let i = 0; i < boxesFive.length; i++) {
            savedColors.push(boxesFive[i].style.backgroundColor);
        }
}

function animation(rank) {
    let box = $(rank);
    box.addClass("clickAnimation");
    setTimeout(function() {
        box.removeClass("clickAnimation");
    }, 100);
}

$("#intro > button").click(function() {
    let introButton = document.querySelector("#intro > button")
    animation(introButton)
    
    playSound("button_Click")
    startTimer(60);
    $("#intro").fadeOut(1000, function() {
        $("#game").css("display" , "block")
        $("#levelOne").fadeIn(1000, function() {
            $("#levelOne").css("display" , "block")
            levelOne();
            
        })
    })
    audio = {};
})

$(".b2").click(function () {
    let doneButton = document.querySelector(".b2");
    animation(doneButton);
    currentLevel++;
    count = 0;
    userClickedBoxes = [];
    userClickedColors = [];
    win = [];
    lose = [];
    startTimer(60);
    
    playSound("button_Click");
    $("h2").text("Study the Colors");
    $(".footer > div").css("backgroundColor", "black");
    if (count === 0) {
        $(".b1").text("Start");
        $(".b1").removeClass("buttonTryagain");
        $(".b1").addClass("buttonStart");
    }
    if (currentLevel % 5 === 1) {
        $("#levelOne").fadeOut(1000, function() {
            $("#levelOne").css("display" , "none")
            $("#levelTwo").fadeIn("1000", function () {
                $("#levelTwo").css("display" , "block")
            })
        })
        
        levelTwo();
        stopAudio("Done")
        stopAudio("timer");
        
    } else if (currentLevel % 5 === 2) {
        $("#levelTwo").fadeOut(1000, function() {
            $("#levelTwo").css("display" , "none")
            $("#levelThree").fadeIn("1000", function () {
                $("#levelThree").css("display" , "block")
            })
        })
        levelThree();
        stopAudio("Done")
        stopAudio("timer");
    }
    else if (currentLevel % 5 === 3) {
        $("#levelThree").fadeOut(1000, function() {
            $("#levelThree").css("display" , "none")
            $("#levelFour").fadeIn("1000", function () {
                $("#levelFour").css("display" , "block")
            })
        })
        levelFour();
        stopAudio("Done");
        stopAudio("timer");
        
    } else if (currentLevel % 5 === 4) {
        $("#levelFour").fadeOut(1000, function() {
            $("#levelFour").css("display" , "none")
            $("#levelFive").fadeIn("1000", function () {
                $("#levelFive").css("display" , "block")
            })
        })
        levelFive();
        stopAudio("Done");
        stopAudio("timer");
        
    } else if (currentLevel % 5 === 0) {
        $("#levelFive").fadeOut(1000, function() {
            $("#game").css("display" , "none")
            $("#game").fadeOut(1000, function () {
                $("#intro").fadeIn(1000, function () {
                    $("#intro").css("display" , "block")
                })
            })
        })
        stopAudio("Done");
        stopAudio("timer");
    }

    audio = {};
})

$(".b1").click(function() {

    let doneButton = document.querySelector(".b1");
    animation(doneButton);
    count++;
    playSound("button_Click");
    
    if (count % 2 === 1) {
        
        
        userClickedBoxes = [];
        userClickedColors = [];
        win = [];
        lose = [];
        stopAudio("timer");
        
        startTimer(120);
        $("h2").text("Match the Colors");
        $(".grid > div").css("backgroundColor", "black")
        $(".b1").text("Try Again");
        $(".b1").removeClass("buttonStart")
        $(".b1").addClass("buttonTryagain")
        audio = {};
    } else if(count % 2 === 0) {
        
        
        userClickedBoxes = [];
        userClickedColors = [];
        win = [];
        lose = [];
        startTimer(20);
        stopAudio("timer");
        
        $("h2").text("Study the Colors");
        if (currentLevel % 5 === 0) {
            levelOne();
        }
        else if (currentLevel % 5 === 1) {
            levelTwo();
        } else if (currentLevel % 5 === 2) {
            levelThree();
        } else if (currentLevel % 5 === 3) {
            levelFour();
        } else if (currentLevel % 5 === 4) {
            levelFive();
        }
        
        $(".b1").text("Start");
        $(".b1").removeClass("buttonTryagain");
        $(".b1").addClass("buttonStart");
        $(".footer > div").css("backgroundColor", "black");
        audio = {};
    }
    
})

$(".b3").click(function () {
    let backwardButton = document.querySelector(".b3");
    animation(backwardButton);
    
    playSound("button_Click")
    userClickedBoxes = [];
    userClickedColors = [];
    win = [];
    lose = [];
    startTimer(60);
    stopAudio("timer");
    stopAudio("failed");
    $("h2").text("Match the Colors");
    $(".footer > div").css("backgroundColor", "black");
    count = 0;
    $(".b1").text("Start");
    $(".b1").removeClass("buttonTryagain");
    $(".b1").addClass("buttonStart");
    if (currentLevel % 5 === 0){
        $("#levelOne").fadeOut(1000, function() {
            $("#game").css("display" , "none")
            $("#intro").fadeIn("1000", function () {
                $("#intro").css("display" , "block")
            })
        })
        stopAudio("Done");
        
        currentLevel = 0;
    } else if (currentLevel % 5 === 1) {
        $("#levelTwo").fadeOut(1000, function() {
            $("#levelTwo").css("display" , "none")
            $("#levelOne").fadeIn("1000", function () {
                $("#levelOne").css("display" , "block")
            })
        })
        levelOne();
        currentLevel--;
        stopAudio("Done")
    } else if (currentLevel % 5 === 2) {
        $("#levelThree").fadeOut(1000, function() {
            $("#levelThree").css("display" , "none")
            $("#levelTwo").fadeIn("1000", function () {
                $("#levelTwo").css("display" , "block")
            })
        })
        levelTwo();
        currentLevel--;
        stopAudio("Done")
    } else if (currentLevel % 5 === 3) {
        $("#levelFour").fadeOut(1000, function() {
            $("#levelFour").css("display" , "none")
            $("#levelThree").fadeIn("1000", function () {
                $("#levelThree").css("display" , "block")
            })
        })
        levelThree();
        currentLevel--;
    } else if (currentLevel % 5 === 4) {
        $("#levelFive").fadeOut(1000, function() {
            $("#levelFive").css("display" , "none")
            $("#levelFour").fadeIn("1000", function () {
                $("#levelFour").css("display" , "block")
            })
        })
        levelFour();
        currentLevel--;
    }
    audio = {};
})

$(".grid > div").click(function () {
    let clickedBox = $(this);
    
    if ($(this).css("backgroundColor") !== "rgb(0, 0, 0)") {
        return;
        
    }
    audio = {};
    playSound("box_Click")
    animation(clickedBox);
    let boxNumber = clickedBox.index();
    clickedBox.css("backgroundColor", savedColors[boxNumber]);
    
    userClickedBoxes.push(clickedBox);
    userClickedColors.push(savedColors[boxNumber]);
    if (userClickedColors.length === 2) {
        if (userClickedColors[0] === userClickedColors[1]) {
            $("body").addClass("win");
            setTimeout(function(){
                $("body").removeClass("win");
            }, 500)
            win.push(true)
            $("h2").text("Correct!")
            audio = {};
            playSound("correct_boxClick")
            userClickedColors = [];
            userClickedBoxes = [];
        }else {
            audio = {};
            playSound("wrong_box") 
            $("h2").text("Wrong!");
            $("body").addClass("coloring");
            setTimeout(function(){
                $("body").removeClass("coloring");
            }, 500);
            lose.push(false)
            setTimeout(function(){
                userClickedBoxes[0].css("backgroundColor", "rgb(0, 0, 0)")
                userClickedBoxes[1].css("backgroundColor", "rgb(0, 0, 0)")
                userClickedColors = [];
                userClickedBoxes = [];
            }, 500);
            

        }
    } 
    if (win.length === savedColors.length / 2) {
        $("h2").text(correctStatement[Math.floor(Math.random() * correctStatement.length)]);
        clearInterval(countDown)
        setTimeout( function(){
            audio = {};
            playSound("Done")
        }, 600);
    }
    if (lose.length === 1) {
       
        document.querySelectorAll(".footer > div")[0].style.backgroundColor = "red";
        
    }else if (lose.length === 2) {
        
        document.querySelectorAll(".footer > div")[0].style.backgroundColor = "red";
        document.querySelectorAll(".footer > div")[1].style.backgroundColor = "red";
        
    }else if (lose.length === 3) {
        
        tryAgain(currentLevel);
        start = false;
        clearInterval(countDown)
        document.querySelectorAll(".footer > div")[0].style.backgroundColor = "red";
        document.querySelectorAll(".footer > div")[1].style.backgroundColor = "red";
        document.querySelectorAll(".footer > div")[2].style.backgroundColor = "red";
    }

    
})

function playSound(name) {
    if (!audio[name]) {
        audio[name] = new Audio("play sounds/" + name + ".mp3");
        audio[name].onerror = function () {
            console.error("Error loading audio file: " + name);
        }

        audio[name].currentTime = 0; 
        audio[name].play();
    }
}
function stopAudio(name) {
    let sound = audio[name];
    if (sound) {
        sound.pause();
        sound.currentTime = 0;  
    }
}

function tryAgain(presentLevel) {
    
    setTimeout(function(){
        audio = {};
        playSound("failed")
        $("h2").text(wrongStatement[Math.floor(Math.random() * wrongStatement.length)]);
        if (presentLevel % 5 === 0) {
            for (let i = 0; i < savedColors.length; i++) {
                document.querySelectorAll(".firstGrid > div")[i].style.backgroundColor = savedColors[i];
            }
        }else if (presentLevel % 5 === 1) {
            for (let i = 0; i < savedColors.length; i++) {
                document.querySelectorAll(".secondGrid > div")[i].style.backgroundColor = savedColors[i];
            }
            
        }else if (presentLevel % 5 === 2) {
            for (let i = 0; i < savedColors.length; i++) {
                document.querySelectorAll(".thirdGrid > div")[i].style.backgroundColor = savedColors[i];
            }
        }else if (presentLevel % 5 === 3) {
            for (let i = 0; i < savedColors.length; i++) {
                document.querySelectorAll(".fourthGrid > div")[i].style.backgroundColor = savedColors[i];
            }
        }else if (presentLevel % 5 === 4) {
            for (let i = 0; i < savedColors.length; i++) {
                document.querySelectorAll(".fifthGrid > div")[i].style.backgroundColor = savedColors[i];
            }
        }
    }, 1000);
    
    win = [];
    lose = [];


}

function startTimer(duration) {
    clearInterval(countDown);
    let time = document.querySelector("#timer");

    countDown = setInterval(() => {
        let minutes = Math.floor(duration / 60) ;
        let seconds = duration % 60 ;

        seconds = seconds < 10 ? '0' + seconds: seconds;
        time.innerHTML = `${minutes}:${seconds}` ;
        time.style.color = "black"

        duration--

        if (duration <= 0) {
            clearInterval(countDown)
            time.innerHTML = "Times Up!"
            tryAgain(currentLevel);
            start = false;
            count = 1;
            userClickedBoxes = [];
            userClickedColors = [];
            win = [];
            lose = [];
            $(".b1").text("try again");
            $(".b1").removeClass("buttonStart");
            $(".b1").addClass("buttonTryagain");
            stopAudio("timer");

        }   

        if (duration <= 10) {
            time.style.color = "red"
            playSound("timer")
        } else if (duration > 10) {
            time.style.color = "black"
            
        }
    }, 1000);
}




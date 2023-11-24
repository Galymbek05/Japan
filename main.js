(function(){
    const header=document.querySelector(`.header`);
    window.onscroll=()=>{
        if(window.pageYOffset>500 ){
            header.classList.add(`header_activ`)
        } 
        else{header.classList.remove(`header_activ`)

        }
    }
}());

//burger

(function(){
    const burgerItem=document.querySelector(`.burger`);
    const menu=document.querySelector(`.header_nav`)
    const menuClose=document.querySelector(`.heder_nav_close`)
    burgerItem.addEventListener(`click`,()=>{
        menu.classList.add(`header_nav_active`);
    })
    menuClose.addEventListener(`click`,()=>{
        menu.classList.remove(`header_nav_active`);
    })
}())
function check() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var correct = 0;


	if (question1 == "Japan") {
		correct++;
	}
	if (question2 == "Osaka") {
		correct++;
	}
	if (question3 == "Sushi") {
		correct++;
	}
	if (question4 == "Mount Fuji") {
		correct++;
	}
	if (question5 == "Origami") {
		correct++;
	}
	if (question6 == "Kabuki") {
		correct++;
	}
	if (question7 == "Hakone") {
		correct++;
	}
	if (question8 == "Kimono") {
		correct++;
	}

	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 8) {
		score = 1;
	}

	if (correct == 8) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
}


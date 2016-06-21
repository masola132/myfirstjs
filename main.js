//what is your name?
//what is your age? 
//are you tired?
	//if yes than say "go to bed".
		//if yes ask "your dreaming, and you come across a fork in the road. which direction do you go. left or right?"
			//if left say "dead end, you LOSE."
		//if right than ask "where to next"
			//if left say "dead end, you LOSE."
		//if right ask "where to next?"
			//if left say "your home, congratulations"
			//if right say "dead end, you LOSE"
	//if no say "have you had caffine?"
		//if yes than say "you should cut back"
		//if no than say "good for you, you win.?"

var name = prompt("what is your name?");
var age = prompt("what is your age?");
var istired = confirm("are you tired?")
if (istired) {
	alert("than go to bed.")
		var live = prompt("your dreaming, and you come across a fork in the road. which direction do you go. left or right?");
			var directions = prompt("where to next?");
			if (directions) { left
				alert("dead end, you LOSE")
			} else{
				alert("where to next")
			}
} else{
	var caffinated = confirm("have you had caffine?")
	if (caffinated) {
		alert("you should cut back.")
	} else{
		alert("good for you, you win.")
		
	}
}
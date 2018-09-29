/* This is the javascript file for the maxfitness readiness checkin page. */

/* Variables to store value of each button */
var sore_question_value = 0;
var stressed_question_value = 0;
var energy_question_value = 0;
var mood_question_value = 0;
var sleep_question_value = 0;

var summed_values;

/* The next five functions highlight the one button being click for 
   each question, and makes the backgrounds of all the buttons white. */

/* SORE QUESTION FUNCTION */
function highlight_this_button_sore_question(clicked_id)
{
	document.getElementById("button1_1").style.backgroundColor = "white";
	document.getElementById("button2_1").style.backgroundColor = "white";
	document.getElementById("button3_1").style.backgroundColor = "white";
	document.getElementById("button4_1").style.backgroundColor = "white";
	document.getElementById("button5_1").style.backgroundColor = "white";
	document.getElementById(clicked_id).style.backgroundColor = "yellow";

	// get value from button
	sore_question_value = document.getElementById(clicked_id).value;
}

/* SORE QUESTION FUNCTION */
function highlight_this_button_stressed_question(clicked_id)
{
	document.getElementById("button1_2").style.backgroundColor = "white";
	document.getElementById("button2_2").style.backgroundColor = "white";
	document.getElementById("button3_2").style.backgroundColor = "white";
	document.getElementById("button4_2").style.backgroundColor = "white";
	document.getElementById("button5_2").style.backgroundColor = "white";
	document.getElementById(clicked_id).style.backgroundColor = "yellow";

	// get value from button
	stressed_question_value = document.getElementById(clicked_id).value;
}

/* ENERGY QUESTION FUNCTION */
function highlight_this_button_energy_question(clicked_id)
{
	document.getElementById("button1_3").style.backgroundColor = "white";
	document.getElementById("button2_3").style.backgroundColor = "white";
	document.getElementById("button3_3").style.backgroundColor = "white";
	document.getElementById("button4_3").style.backgroundColor = "white";
	document.getElementById("button5_3").style.backgroundColor = "white";
	document.getElementById(clicked_id).style.backgroundColor = "yellow";

	// get value from button
	energy_question_value = document.getElementById(clicked_id).value;
}

/* MOOD QUESTION FUNCTION */
function highlight_this_button_mood_question(clicked_id)
{
	document.getElementById("button1_4").style.backgroundColor = "white";
	document.getElementById("button2_4").style.backgroundColor = "white";
	document.getElementById("button3_4").style.backgroundColor = "white";
	document.getElementById("button4_4").style.backgroundColor = "white";
	document.getElementById("button5_4").style.backgroundColor = "white";
	document.getElementById(clicked_id).style.backgroundColor = "yellow";

	// get value from button
	mood_question_value = document.getElementById(clicked_id).value;
}

/* SLEEP QUESTION FUNCTION */
function highlight_this_button_sleep_question(clicked_id)
{
	document.getElementById("button1_5").style.backgroundColor = "white";
	document.getElementById("button2_5").style.backgroundColor = "white";
	document.getElementById("button3_5").style.backgroundColor = "white";
	document.getElementById("button4_5").style.backgroundColor = "white";
	document.getElementById("button5_5").style.backgroundColor = "white";
	document.getElementById(clicked_id).style.backgroundColor = "yellow";

	// get value from button
	sleep_question_value = document.getElementById(clicked_id).value;
}

/* add up the summed values and display the proper workout */
function complete_survey()
{
	// the + in from the variables changes them from strings to numbers
	summed_values = +sore_question_value + +stressed_question_value + +energy_question_value + +mood_question_value + +sleep_question_value;

	Number(summed_values); // makes sure summed_values is a number and not a String
	
	/* show workout for proper summed_values number */
	if (summed_values < 5)
	{
		document.getElementById("summed_values").innerHTML = "Please answer all questions before completeing."; 
	}	

	else if (summed_values == 5)
	{
		document.getElementById("summed_values").innerHTML = "WORKOUT #1 RECOMMENED."; 
	}	

	else if (summed_values > 5 && summed_values < 10)
	{
		document.getElementById("summed_values").innerHTML = "WORKOUT #2 RECOMMENED."; 
	}	

	else if (summed_values >= 10 && summed_values < 15)
	{
		document.getElementById("summed_values").innerHTML = "WORKOUT #3 RECOMMENED."; 
	}	

	else if (summed_values >= 15 && summed_values < 20)
	{
		document.getElementById("summed_values").innerHTML = "WORKOUT #4 RECOMMENED."; 
	}	

	else if (summed_values >= 20 && summed_values < 25)
	{
		document.getElementById("summed_values").innerHTML = "WORKOUT #5 RECOMMENED."; 
	}	

	else if (summed_values == 25)
	{
		document.getElementById("summed_values").innerHTML = "WORKOUT #6 RECOMMENED."; 
	}	

	else
	{
		document.getElementById("summed_values").innerHTML = "Whoops, something went wrong. Try reloading this page."; 
	}

	//document.getElementById("summed_values").innerHTML = summed_values; 

}

/* This is the javascript file for the maxfitness readiness checkin page. */

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
}

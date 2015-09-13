function askQuestions () {

			var firstName = prompt('What is your first name?');
		var lastName = prompt('What is your first name?');


		var fullName = firstName + ' ' + lastName;
		$('h2').text('Hello ' + fullName);

		var age = prompt('How old are you?')
		age = parseInt(age)

		if (age >= 18 || name == "Julia") {
		    console.log('User is an adult.');
		} else if (age>= 13) {
			console.log('User is a teenager.');
		} else {
			console.log('User is a child.');

		}


		if (age > 10) {
			if (firstName == 'Julia' || lastName == 'Kotulova') {

			}
		}


		var firstName = prompt('What is your first name?');
		var lastName = prompt('What is your first name?');

		if (firstName == "General" && lastName != 'Assembly'){
		    console.log('Aloha General');
		}


		var faveColour = prompt('What\'s your favourite colour?');

		if (faveColour == 'red' ||
			faveColour == 'blue' ||
		    faveColour == 'green' ||
		    faveColour == 'yellow') {
			$('h2').css('color',faveColour);
		}

}

//When the page has loaded
$(function() {

     $('h2').on('click', askQuestions);

     //Find all the content and hide it
     $('h3').next().hide();

     //When the user clicks on an h3
     $('h3').on('click', function() {

     	//Find the next element and toggle it
     	$(this).next().slideToggle(50);


     });

});
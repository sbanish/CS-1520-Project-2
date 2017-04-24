// Note - for the second part of this project I am going to have all of this information email via PHP
function submitFunction()
{
	if (confirm("Are you sure you want to submit this information?")==true)
	{
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var message = document.getElementById("message").value;
		
		if (name=="" && email=="" && message=="")
		{
			alert("You have left name, email, and message blank. Please enter a value.");
		}
		else if(name=="" && email=="")
		{
			alert("You left the name and email fields empty.");
		}
		else if(name=="" && message=="")
		{
			alert("You left the name and message fields empty.");
		}
		else if(message=="" && email=="")
		{
			alert("You left the email and message fields empty.");
		}
		else if(name=="" && message=="")
		{
			alert("You left the name and message fields empty.");
		}
		else if(name=="")
		{
			alert("You left the name field empty.");
		}
		else if (email=="")
		{
			alert("You left the email field empty.");
		}
		else if (message=="")
		{
			alert("You left the message field empty.");
		}
		else
		{
			alert("You have successfully submitted your contact information!");
		}
	}
}
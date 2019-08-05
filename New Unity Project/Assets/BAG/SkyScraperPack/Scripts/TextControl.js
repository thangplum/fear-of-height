var isQuitButton = false;
var isLevel1Button = false;
var isLevel2Button = false;
var isLevel3Button = false;

function OnMouseEnter()
{
renderer.material.color = Color.yellow; //change the color of the text
}

function OnMouseExit()
{ 
renderer.material.color = Color.white; //change the color of the text
}

function OnMouseUp()
{
	if( isQuitButton )
	{
		//quit the game
		Application.Quit();
	}
if( isLevel1Button )
	{
		//load level 1
		Application.LoadLevel(1);
	}
		if( isLevel2Button )
	{
		//load level 2
		Application.LoadLevel(2);
	}
		if( isLevel3Button )
	{
		//load level 3
		Application.LoadLevel(3);
	}
}
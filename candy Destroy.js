#pragma strict
var message : String = "You got a candy!!!";
var displayMessage : boolean  = false;
var displayTime : float = 5.0;
function Start () {

}

function Update () {

}
var i : int  =0;
function OnTriggerEnter(other : Collider)
{
if(other.name == "candy")
{
i=1;
Destroy(other.gameObject);
Debug.Log("You got a candy!");
displayMessage = true;
yield WaitForSeconds (displayTime );
displayMessage = false;
i=i+1;
}
}
function OnGUI ( )
{
    if ( displayMessage )
    {
        GUI.Label(new Rect(600,10,200,100), message);
    }
}
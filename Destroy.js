#pragma strict
var message : String = "Ooppss!It was a bomb candy";
var displayMessage : boolean  = false;
var displayTime : float = 5.0;
function Start () {

}

function Update () {

}
function OnTriggerEnter(other : Collider)
{
if(other.name == "bomb")
{
Destroy(gameObject);
Debug.Log("You captured a bomb!");
displayMessage = true;
yield WaitForSeconds (displayTime );
displayMessage = false;

}
}
function OnGUI ( )
{
    if ( displayMessage )
    {
        GUI.Label(new Rect(600,10,200,100), message);
    }
}
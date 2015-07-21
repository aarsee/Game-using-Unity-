#pragma strict
var message : String = "You got into the shark's abdomen.PLAY AGAIN!";
var displayMessage : boolean  = false;
var displayTime : float = 5.0;
function Start () {

}

function Update () {

}
function OnTriggerEnter(other : Collider)
{
if(other.name!="shark")
{
Destroy(other.gameObject);
Debug.Log("Collided");
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
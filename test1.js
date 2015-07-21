#pragma strict
/*var nearCube : GameObject;
var soundFile : AudioClip;
var prefab : GameObject;
var cube : GameObject;*/
var message : String = "You became a zombie.";
var displayMessage : boolean  = false;
var displayTime : float = 5.0;
var message1 : String = "You win the game.YIPPEEE.";
var displayMessage1 : boolean  = false;
var displayTime1 : float = 5.0;
function Start () 
{
 
}
//var cube : GameObject;
var prefab : Transform;
function Update () 
{

/*if(Input.GetButtonDown("Fire1"))
{
Debug.DrawRay(transform.position,transform.TransformDirection(Vector3.forward)*50,Color.red);
var hit : RaycastHit;
if(Physics.Raycast(transform.position,Vector3.forward,hit))
{

if(hit.distance<200)
	GameObject.Destroy(hit.collider.gameObject);
		
}
}*/
}
function OnTriggerEnter(other : Collider)
{
if(other.name=="alien")
{

 Instantiate (prefab, Vector3(transform.position.x,transform.position.y,transform.position.z),Quaternion.identity);
displayMessage = true;
yield WaitForSeconds (displayTime );
displayMessage = false;

Destroy(gameObject);
Debug.Log("collided");
displayMessage = true;
yield WaitForSeconds (displayTime );
displayMessage = false;
//gameObject.transform.localScale=Vector3(20,20,20);
//cube = Instantiate (prefab, Vector3(transform.position.x,transform.position.y,transform.position.z),Quaternion.identity);

}
if(other.name=="treasure"){
Destroy(other.gameObject);
Debug.Log("yayyy...you win");
displayMessage1 = true;
yield WaitForSeconds (displayTime1 );
displayMessage1 = false;
}
/*if(other.name=="2")
{
other.gameObject.renderer.material.color=Color.red;
audio.clip=soundFile;
audio.Play();
}*/
}
function OnGUI ( )
{
    if ( displayMessage )
    {
        GUI.Label(new Rect(600,10,200,100), message);
    }
    if ( displayMessage1 )
    {
        GUI.Label(new Rect(600,10,200,100), message1);
    }
}
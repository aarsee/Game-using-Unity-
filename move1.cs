using UnityEngine;
using System.Collections;

public class move1 : MonoBehaviour {
	public float hspeed = 100;
	public float vspeed = 100;
	public float jumpval = 100;

	// Use this for initialization
	void Start () 
	{
	
	}
	
	// Update is called once per frame
	void FixedUpdate () 
	{
		float moveHorizontal = Input.GetAxis ("Horizontal") * hspeed * Time.deltaTime;
		float moveVertical = Input.GetAxis ("Vertical") * vspeed * Time.deltaTime;
		float jump = Input.GetAxis ("Jump") * jumpval * Time.deltaTime;

		Vector3 movement = new Vector3 (moveHorizontal, jump, moveVertical);
		rigidbody.AddForce (movement,ForceMode.Impulse);
	}
}

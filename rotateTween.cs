using UnityEngine;
using System.Collections;

public class rotateTween : MonoBehaviour {

	// Use this for initialization
	void Start () {
		iTween.RotateBy (gameObject, iTween.Hash ("y",0.5,"time",1,"delay",5,"loopType","pingpong","easeType","linear"));
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}

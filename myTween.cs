using UnityEngine;
using System.Collections;

public class myTween : MonoBehaviour {

	// Use this for initialization
	void Start () {
		iTween.MoveTo(gameObject,iTween.Hash("path",iTweenPath.GetPath("linear4"),"time",7,"loopType","loop","easeType","linear"));
	}
	
	// Update is called once per frame
	void Update () 
	{

	
	}

}

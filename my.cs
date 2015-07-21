using UnityEngine;
using System.Collections;

public class my : MonoBehaviour {
	
	// Use this for initialization
	void Start () {
		iTween.MoveTo(gameObject,iTween.Hash("path",iTweenPath.GetPath("linear5"),"time",7,"loopType","loop","easeType","linear"));
	}
	
	// Update is called once per frame
	void Update () 
	{
		
		
	}
	
}

using UnityEngine;
using System.Collections;

public class t : MonoBehaviour {

	// Use this for initialization
	void Start () {
		iTween.MoveTo(gameObject,iTween.Hash ("path",iTweenPath.GetPath("l-shape"),"time",10,"delay",1,"loopType","pingpong" +
		                                      "","easeType","linear"));
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}

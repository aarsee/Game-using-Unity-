using UnityEngine;
using System.Collections;

public class moveTween : MonoBehaviour {
	Hashtable ht=new Hashtable();
	// Use this for initialization
	/*void Mango(){
		ht.Add ("path",("Circle"));
		ht.Add ("x",7);
		ht.Add ("time",7);
		ht.Add ("delay",1);
		ht.Add ("looptype",iTween.LoopType.pingPong);
		ht.Add ("easetype",iTween.EaseType.easeInOutBounce);

	}*/
	void Start () {
		iTween.MoveTo(gameObject,iTween.Hash ("path",iTweenPath.GetPath("Linear"),"time",5,"delay",1,"loopType","pingpong" +
			"","easeType","linear"));
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}

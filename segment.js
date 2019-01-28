class segment{
	constructor(a,b,c){
		this.status=a;
		this.no=b;
		this.color=c;
	}
	switchon(){
		this.status=1;
		this.color=color(255,0,0)
	}
	switchoff(){
		this.status=1;
		this.color=color(255)	
	}
}
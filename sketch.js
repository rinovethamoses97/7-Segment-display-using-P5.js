var segments=[];
var c;
var digits=[];
function setup(){
	createCanvas(280,280);
	c=color(255);
	for(var i=1;i<=3;i++){
		segments[i]=new segment(i,0,c);
	}
	for(var i=4;i<=5;i++){
		segments[i]=new segment(i,0,c);
	}
	for(var i=6;i<=7;i++){
		segments[i]=new segment(i,0,c);	
	}
	digits[0]=new digit(0,[1,3,4,5,6,7]);
	digits[1]=new digit(1,[6,7]);
	digits[2]=new digit(2,[1,6,2,5,3]);
	digits[3]=new digit(3,[1,6,2,7,3]);
	digits[4]=new digit(4,[4,2,7]);
	digits[5]=new digit(5,[1,4,2,7,3]);
	digits[6]=new digit(6,[1,4,5,7,2,3]);
	digits[7]=new digit(7,[1,6,7]);
	digits[8]=new digit(8,[1,2,3,4,5,6,7]);
	digits[9]=new digit(9,[1,2,4,6,7]);
}
function setdigit(digit){
	for(var i=1;i<=7;i++){
		segments[i].switchoff();
	}
	for(var i=0;i<digits[digit].code.length;i++){
		console.log(digits[digit].code[i]);
		segments[digits[digit].code[i]].switchon();
	}
}
function draw(){
	var tempx=width/2-60;
	var tempy=30;
	fill(segments[1].color);
	rect(tempx,tempy,120,5)
	tempy+=90;
	fill(segments[2].color);
	rect(tempx,tempy,120,5)
	tempy+=90;
	fill(segments[3].color);
	rect(tempx,tempy,120,5)
	tempx=width/2-60;
	var tempy=40
	fill(segments[4].color);
	rect(tempx,tempy,5,70)
	tempy+=90;
	fill(segments[5].color);
	rect(tempx,tempy,5,70)
	tempx=width/2+55;
	var tempy=40
	fill(segments[6].color);
	rect(tempx,tempy,5,70)
	tempy+=90;
	fill(segments[7].color);
	rect(tempx,tempy,5,70)
}
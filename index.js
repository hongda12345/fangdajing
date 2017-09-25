/*
* @Author: 宏达
* @Date:   2017-09-25 15:37:54
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-25 21:17:42
*/
window.onload=function(){
	let small=document.querySelector('div.small');
	let big=document.querySelector('div.big');
	let img1=document.querySelector('.big>img');
	let img2=document.querySelector('.small>img');
	let smallzhao=document.querySelector('div.smallzhao');
	let bigzhao=document.querySelector('div.bigzhao');
	let szw=smallzhao.offsetWidth;
	let szh=smallzhao.offsetHeight;
	// let bzw=bigzhao.offsetWidth;
	// let bzh=bigzhao.offsetHeight;
	let img1w=img1.offsetWidth;
	let img1h=img1.offsetHeight;
	let img2w=img2.offsetWidth;
	let img2h=img2.offsetHeight;
	bigzhao.addEventListener('mousemove',function(e){
		  let bw=parseInt(getComputedStyle(img1,null).width);
          let sw=parseInt(getComputedStyle(img2,null).width);
          let ox=e.offsetX,oy=e.offsetY;
          let bili=bw/sw;
          img1.style.left=ox*-bili+'px';
          img1.style.top=oy*-bili+'px';
          if(ox>=img2w-szw){
          	ox=img2w-szw;
          }
          if(ox<=0){
            ox=0;
          }
          if(oy>=img2h-szh){
          	oy=img2h-szh;
          }
          if(oy<=0){
          	oy=0;
          }
          smallzhao.style.left=ox+'px';
          smallzhao.style.top=oy+'px';
          // img1.style.width=img2w*bw/szw+'px';
          // img1.style.height=img2h*bw/szh+'px';
          // img1.style.left=-img2w*ox/szw+'px';
          // img1.style.top=-img2h*oy/szh+'px';

         
	})
}
var IntroCanvas = function(banner,width,height)
{
	var imgIntro = new Image();
	imgIntro.src = 'txt_intro.png';
	var imgIntroObj ={scale:6,alpha:0,x:-(width/2)-(1000/2),y:-(height/2)}
	var imgLight = new Image();
	var imgLightObj = {scale:6,alpha:0,x:-170,y:-80}
	var imgLightObj2 = {scale:6,alpha:0,x:220,y:40}
	var imgLightObj3 = {scale:6,alpha:0,x:-350,y:-100}
	imgLight.src = 'light.png';


	imgIntro.onload = function() 
	  { 
		    var canvas = document.createElement('canvas');
		    canvas.id='canvasIntro'
			canvas.width = imgIntro.width;
			canvas.height = imgIntro.height;
			TweenLite.set(canvas,{scale:2,y:100,x:34,alpha:0})
			var ctx = canvas.getContext('2d');
			
			var vertices = [];
			vertices.push([0,0])
			vertices.push([imgIntro.width-2,0])
			vertices.push([imgIntro.width-2,imgIntro.height-2])
			vertices.push([0,imgIntro.height-2])
			for(var i=0;i<600;i++)
			{
				vertices.push([Math.random()*imgIntro.width-2,Math.random()*imgIntro.height-2])
			}
			var triangles = Delaunay.triangulate(vertices);

			banner.appendChild(canvas);

		    var count =0;
			var trianglesPoints = [];
			var centerPoint = {x:canvas.width/2,y:canvas.height/2};
			for(i = triangles.length; i; ) 
		    {
			      trianglesPoints[count] = {};
			  	  --i; 
			  	  trianglesPoints[count].point0 = [vertices[triangles[i]][0], vertices[triangles[i]][1]];
			  	  --i; 
			  	 trianglesPoints[count].point1 = [vertices[triangles[i]][0], vertices[triangles[i]][1]];
			  	  --i; 
			  	 trianglesPoints[count].point2 = [vertices[triangles[i]][0], vertices[triangles[i]][1]];
			  	 trianglesPoints[count].distance = distance(centerPoint,{x:trianglesPoints[count].point0[0],y:trianglesPoints[count].point0[1]})
			  	  count++
		    }
		    trianglesPoints.sort(sort_by('distance', false, parseInt));

		    var trianglesSorted = [];
		    for(var i=0;i< trianglesPoints.length; i++) 
		    {
		    	trianglesSorted[i] = [];
			    trianglesSorted[i].push(trianglesPoints[i].point0[0], trianglesPoints[i].point0[1])
			    trianglesSorted[i].push(trianglesPoints[i].point1[0], trianglesPoints[i].point1[1])
			    trianglesSorted[i].push(trianglesPoints[i].point2[0], trianglesPoints[i].point2[1])
		    }
		  var count = 0;
		  var countInt = 40;
		  var alpha =0;

		  var imgWidth = imgIntro.width;
		  if(imgWidth==0) imgWidth = 250;
		  var destX = (width/2)-((canvas.width*1)/2);
		  var delay =0;
			  TweenLite.to(canvas,.7,{x:destX,y:(height/2)-80,alpha:1,scale:.85,ease:Cubic.easeOut,delay:delay});

			  var drawCompleted = false;
			  var updateMax = 0;
		  var updateCounter = 0
		  var pointsLength = trianglesPoints.length;

	      var draw = function()
		  {
		  	if(!drawCompleted)
		  	{
		  	  if(count>pointsLength)
		  	  {
		  	  	drawCompleted = true;
		  	  	showLights();
		  	  	count = trianglesPoints.length;
		  	  } 
			  canvas.width = canvas.width;
			  var array = [];
			  for(var i=0;i<count;i++)
			  {
			  	 array = trianglesSorted[i];
			  	 ctx.moveTo(array[0], array[1]);
			     ctx.lineTo(array[2], array[3]);
			     ctx.lineTo(array[4], array[5]);
			  }
		   	  ctx.clip();
			  count+=countInt
		      ctx.drawImage(imgIntro,0,0,imgIntro.width,imgIntro.height);
		      countInt+=1;
		  	}
		  	else
		  	{
		  		canvas.width = canvas.width
		  		if(updateCounter==updateMax)
				{
					if(imgIntroObj.alpha!=0)
					{
						 ctx.globalAlpha = 1;
						 ctx.clearRect(0, 0, canvas.width, canvas.height)
						 ctx.save();
						 ctx.drawImage(imgIntro, 0, 0);

						 if(imgLightObj.alpha>0)
						 {	
						 	 ctx.globalAlpha = imgIntroObj.alpha;
							 ctx.globalCompositeOperation = 'overlay'
							 ctx.drawImage(imgLight, imgLightObj.x, imgLightObj.y,200,200);
							 ctx.drawImage(imgLight, imgLightObj2.x, imgLightObj2.y,200,200);
							 ctx.drawImage(imgLight, imgLightObj3.x, imgLightObj3.y,300,300);
							 ctx.globalCompositeOperation = 'destination-atop'
							 ctx.drawImage(imgIntro, 0, 0);
						 }
			 			 ctx.restore();
		 			 }
		 			 updateCounter = -1;
	 			 }
	 			 updateCounter++
		  	}
		     
			  //meter.tick();
			};

		  TweenLite.ticker.fps(60)
		  TweenLite.ticker.addEventListener("tick", draw,this)
		  draw()
	  }

	var spd= .7;
	var delay =0;
	var imgWidth = imgIntro.width;
	if(imgWidth==0) imgWidth = 250;
	var destX = (width/2)-((imgWidth*.85)/2);

	TweenLite.to(imgIntroObj,.7,{x:destX,y:156,alpha:1,scale:.85,ease:Cubic.easeInOut,delay:delay});

	//document.getElementById('traceHolder').innerHTML = '<p>'+imgIntro.width+"</p>";
	function showLights()
	{
		var spd= 3.2;
		var delay =0.1;
		TweenLite.to(imgLightObj,spd,{x:52,y:-20,alpha:1,ease:Cubic.easeOut,delay:delay});
		TweenLite.to(imgLightObj2,spd,{x:-50,y:30,ease:Cubic.easeOut,delay:delay});
		TweenLite.to(imgLightObj3,spd*2,{x:200,y:-100,ease:Cubic.easeOut,delay:delay});

		TweenLite.delayedCall(delay,function(){
			updateMax=1
		})
		TweenLite.to(imgLightObj,spd,{x:-50,y:-100,ease:Cubic.easeInOut,delay:spd+delay,overwrite:0});
		TweenLite.to(imgLightObj2,spd,{x:150,y:60,ease:Cubic.easeInOut,delay:spd+delay,overwrite:0});
	}

	this.removelight = function()
	{
		var spd = .5;
		var delay = 0;
		TweenLite.to(imgLightObj,spd,{x:252,y:-20,alpha:0,ease:Cubic.easeOut,delay:delay});
		TweenLite.to(imgLightObj2,spd,{x:-180,y:30,ease:Cubic.easeOut,delay:delay});
		TweenLite.to(imgLightObj3,spd,{x:250,y:-100,ease:Cubic.easeOut,delay:delay});
	}

	function sort_by (field, reverse, primer)
	{
	   var key = primer ? 
	       function(x) {return primer(x[field])} : 
	       function(x) {return x[field]};
	   reverse = !reverse ? 1 : -1;
	   return function (a, b) {
	       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
	     } 
	}

	function distance(P1, P2)
	{
		var XX = P2.x - P1.x;
		var YY = P2.y - P1.y;
		return Math.sqrt(XX*XX + YY*YY);
	}
}

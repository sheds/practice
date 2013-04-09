/**
  //A JavaScript Marquee Demo
*/
;(function(){

	var forEachNode=function(node,fun){
			node=node.firstChild;
			do{
				if(node.nodeType===1){
					fun(node);
				}
			}while(node.nextSibling);
		},

		getStyle=function(oElm, strCssRule){
		    var strValue = "";
		    if(document.defaultView && document.defaultView.getComputedStyle){
		        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
		    }
		    else if(oElm.currentStyle){
		        strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
		            return p1.toUpperCase();
		        });
		        strValue = oElm.currentStyle[strCssRule];
		    }
		    return strValue;
		}

		wrapWithDiv:function(dom){
			var div=document.createElement("div");

			div.id="marqueeBox";

			forEachNode(dom,function(v){
				div.appendChild(v.clone(true));
			});

			dom.innerHTML="";

			dom.appendChild(div);

			this.marqueeBox=document.getElementById("marqueeBox");
		},

		Marquee=function(opt){
			if(!(this instanceof Marquee)){
				return new Marquee(opt);
			}
			if(typeof opt==="undefined"){
				return;
			}
			if(Object.prototype.toString.call(opt)!=="[object Object]"){
				return;
			}
			if(opt.container===undefined){
				return;
			}
			this.container=opt.container;
			this.derection=opt.derection||"up";
			this.interval=opt.interval||40;
			this.step=opt.step||1;
			this.timer=null;
			this.inited=false;
		}

	Marquee.prototype={

		constructor:Marquee,

		move:{

			self:this,

			up:function(){
				var mt=getStyle(self.marqueeBox);
				if(mt==="auto"){
					mt=0;
				}
				
			},
			down:function(){

			},
			left:function(){

			},
			right:function(){

			}
		},

		init:function(){
			this.inited=true;
		}

		start:function(){
			if(!this.inited){
				this.init();
			}
			this.timer=this.move(this.direction);
		},

		stop:function(){
			this.timer=null;
		}
	}


})(window);

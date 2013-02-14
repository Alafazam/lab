/**
 * @description		prototype.js based hover menu
 * @author        	Peter Slagter; http://twitter.com/pesla
 * @license			ProtoFish is based on the MIT license (http://protofish.procurios.nl/protofish-license).
 * @parameters		id: menu id <string>
 *					timeout: amount of milliseconds delay on mouseout <string>
 *					cssClass: hover class <string>
 * 					remActive: whether or not remove active class when user enters menu <boolean>
 *					ARIA: choose to use ARIA roles and states <boolean>
 * 					useShortKey: whether or not to use a shortkey to focus menu <boolean>
 */

var ProtoFish=Class.create({initialize:function(f,c,a,e,d,b){this.id=f;this.timeout=c||"400";this.cssClass=a||"hover";this.remActive=e||false;this.ARIA=d||false;this.useShortKey=b||false;this.queue=[];this.activeTimeout="";this.menuFocus=false;this.menuCount=0;this.isParent=false;this.shiftDown=false;this.mDown=false;this.ctrlDown=false;this.altDown=false;if($(f)&&$(f).down()){if(this.ARIA!=false){$(f).writeAttribute("role","menubar");this.menuContainers=$(f).select("ul");this.menuContainers.each(function(h,g){h.writeAttribute("role","menu")})}this.listItems=$(f).select("li");this.activeItems=$(f).select("li.active");this.listItems[0].down("a").setAttribute("tabindex","0");this.initObservers()}},initObservers:function(){this.listItems.each(function(a){a.observe("mouseover",function(c,b){this.enterMenu(b);b.addClassName(this.cssClass)}.bindAsEventListener(this,a));a.observe("mouseout",function(c,b){this.queue.push([this.leaveMenu.delay(this.timeout/1000,this),b])}.bindAsEventListener(this,a));if(this.ARIA!=false){a.down("a").writeAttribute("role","menuitem");if(a.down("ul")){a.down("a").writeAttribute("aria-haspopup","true")}}}.bind(this));Event.observe(document,"keydown",function(b){var a=b.keyCode;var c=[9,13,27,32,37,38,39,40];if(c.indexOf(a)!=-1){this.keyBoardNav(b,a,c)}if(b.keyCode==16){this.shiftDown=true}else{if(this.useShortKey!=false){if(b.keyCode==77){this.mDown=true}if(b.keyCode==17){this.ctrlDown=true}if(b.keyCode==18){this.altDown=true}if(this.mDown==true&&this.ctrlDown==true&&this.altDown==true){this.listItems[0].down("a").focus()}}}}.bind(this));Event.observe(document,"keyup",function(a){if(a.keyCode==16){this.shiftDown=false}else{if(this.useShortKey!=false){if(a.keyCode==77){this.mDown=false}if(a.keyCode==17){this.ctrlDown=false}if(a.keyCode==18){this.altDown=false}}}}.bind(this));Event.observe(document,"click",function(b){var a=Event.element(b);if(a!=$(this.id)&&!a.descendantOf(this.id)&&this.menuFocus==true){this.listItems.invoke("removeClassName",this.cssClass);this.menuFocus=false}}.bind(this));$$("body")[0].observe("focusin",this.handleMenuFocus.bind(this));if(window.addEventListener){$$("body")[0].addEventListener("focus",this.handleMenuFocus.bind(this),true)}},handleMenuFocus:function(b){var a=Event.element(b);if(a.up("#"+this.id)){this.menuFocus=true;this.menuCount=this.listItems.indexOf(a.up("li"));this.isParent=(a.next())?true:false;if(this.isParent==false){a.up().addClassName(this.cssClass);while(a.up("li")){a.up("li").addClassName(this.cssClass);a=a.up("li")}}else{if(this.isParent==true){a.up().removeClassName("hover")}}}else{this.listItems.invoke("removeClassName",this.cssClass);this.menuFocus=false}},keyBoardNav:function(b,c,g){if(this.menuFocus==true){if(g.indexOf(c)!=0){b.preventDefault()}var d=this.listItems[this.menuCount];switch(true){case c==Event.KEY_DOWN:if(!d.up("li")){var f=d.down("li")}else{var f=(d.next("li"))||d.up("ul").childElements().first();if(f){d.removeClassName(this.cssClass)}}if(f){this.menuCount=this.listItems.indexOf(f);f.addClassName(this.cssClass);f.down("a").focus()}break;case c==Event.KEY_UP:if(!d.up("li")){var j=false}else{var j=d.previous("li")||d.up("ul").childElements().last();d.removeClassName(this.cssClass)}if(j){this.menuCount=this.listItems.indexOf(j);j.addClassName(this.cssClass);j.down("a").focus()}break;case c==Event.KEY_RIGHT:if(!d.up("li")){var i=d.next("li");if(i){d.removeClassName(this.cssClass)}}else{var i=d.down("li")||false}if(i){this.menuCount=this.listItems.indexOf(i);i.addClassName(this.cssClass);i.down("a").focus()}break;case c==Event.KEY_LEFT:if(!d.up("li")){var e=d.previous("li");if(e){d.removeClassName(this.cssClass)}}else{var e=d.up("li")||false;if(e){d.removeClassName(this.cssClass)}}if(e){this.menuCount=this.listItems.indexOf(e);e.addClassName(this.cssClass);e.down("a").focus()}break;case c==Event.KEY_TAB:if(this.shiftDown==false){this.menuCount++;var j=this.listItems[this.menuCount-1];if(!j.down("li")){j.removeClassName(this.cssClass);while(j.up("li")&&!j.next("li")){j.up("li").removeClassName(this.cssClass);j=j.up("li")}}}else{if(this.shiftDown==true){this.menuCount--;var d=this.listItems[this.menuCount];var f=this.listItems[this.menuCount+1];f.removeClassName(this.cssClass);if(d){while(d.up("li")&&d.up("li").hasClassName(this.cssClass)==false){d.up("li").addClassName(this.cssClass);d=d.up("li")}}}}break;case c==Event.KEY_ESC:while(d.up("li")){d.removeClassName(this.cssClass);var h=d.up("li");d=d.up("li")}if(h){h.down("a").focus();this.menuCount=this.listItems.indexOf(d)}break;case c==32:if(this.isParent==true){this.parentBehavior(d)}else{var a=d.down("a").href;window.location.href=a}break;case c==Event.KEY_RETURN:if(this.isParent==true){this.parentBehavior(d)}break}}},parentBehavior:function(b){var a=b.down("li");if(a){this.menuCount=this.listItems.indexOf(a);a.addClassName(this.cssClass);a.down("a").focus()}},enterMenu:function(){while(this.queue.length){clearTimeout(this.queue[0][0]);this.leaveMenu(this)}if(this.remActive==true){if(typeof this.activeTimeout=="number"){clearTimeout(this.activeTimeout);delete this.activeTimeout}this.activeItems.invoke("removeClassName","active")}},leaveMenu:function(b){if(b.queue.length){var a=b.queue.shift()[1];a.removeClassName(b.cssClass)}if(b.remActive==true){b.activeItems.invoke("addClassName","active")}}});
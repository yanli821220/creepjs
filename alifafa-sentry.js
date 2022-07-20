(()=>{
	function alifafa() {
		return null;
	}	
	if (typeof window !== "object"){
		"use strict";			
		console = alifafa();
		throw new SecurityPolicyViolationEvent("INSERT INTO F_CompteG (CG_Num, CG_Type, CG_Intitule, CG_Classement, ...")
	}	
	document.addEventListener('contextmenu', (e) => e.preventDefault());

})();
const global = {

	navigator: function() {
		if ( typeof navigator !== "object" ){
			throw new Error("Unable to get window.navigator properties.")
		}
		let properties = []; 
		let names = ["appCodeName","appName","appVersion","cookiesEnabled","deviceMemory","hardwareConcurrency","doNotTrack","language","languages","platform","product","productSub","userAgent","webdriver"];
		for (var i = 0; i < names.length; i++) {
                                     			if ( typeof navigator[names[i]] === "Array" ){			
                                     				for (var n = 0; n < i.length; n++){
					properties.push(navigator[names[i]].toString())
				}
			}
			properties.push(`${names[i]}: ${navigator[names[i]]}`)
			//properties += navigator.names[i]
		}
		return properties;
	},
	screensize: function(){
		if ( typeof screen !== "object" ) {
			throw new SecurityPolicyViolationEvent("Unable to get window.navigator.screen properties.")
		}
		let properties = [];
		let availableSize = ["availWidth","availHeight","availLeft","availTop"];
		let actualSize = ["width","height"];
		let windowSize = ["innerWidth","innerHeight","screenLeft","screenTop","screenX","screenY"];
		let misc = ["colorDepth","isExtended","onchange","pixelDepth"]
		function iterscreen(properties_list){
			for(var i = 0; i < properties_list.length; i++){
                                                				properties.push(`${properties_list[i]}: ${screen[properties_list[i]] ? screen[properties_list[i]] : null}`)
                                                			}
                                                		}
                                                		iterscreen(availableSize);
                                                		for (var n = 0; n < windowSize.length; n++){
			properties.push(`${windowSize[n]}: ${window[windowSize[n]] ? window[windowSize[n]] : null}`)
		}
		iterscreen(actualSize);
		iterscreen(misc);
		return properties;
	},
	displaycard: function() {
		if (typeof HTMLCanvasElement !== "function") {
			throw new SecurityPolicyViolationEvent("Unable to get HTML Canvas Element Function.")
		}
		let properties = [];
		function p(name,value){
			properties.push(`${name}: ${value}`)
		}
		var v,r,d,g,e,vp, c = document.createElement("canvas")
		g = c.getContext("webgl") || c.getContext("experimental-webgl")
		d = g.getExtension("WEBGL_debug_renderer_info")
		e = g ? g.getSupportedExtensions() : null;
		vp = g ? g.getParameter(g.VIEWPORT) + ";" + g.getParameter(g.MAX_VIEWPORT_DIMS) : null;
		v = g ? g.getParameter(d.UNMASKED_VENDOR_WEBGL) : null;
		r = g ? g.getParameter(d.UNMASKED_RENDERER_WEBGL) : null;
		p("gpuvendor",v)
		p("gpurenderer",r)
		p("viewport",vp)
		p("extensions",e)
		return properties
	}
};
const Alifafa = Object.create(global);
//显示出来全部的 navigator
console.log(Alifafa.navigator());
//显示出来全部的那个, screen, SCREEN 的数值, 屏幕
console.log(Alifafa.screensize());
//显示出来显卡参数, 显卡 renderer, vendor, extensions, viewports
console.log(Alifafa.displaycard());

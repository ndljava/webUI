! function(a, b) {
	var c = {
		version: "3",
		adUrl: "//t.adyun.com/sspshow?v=3"
	};
	c.ad = c.ad || {
		seed: 0,
		iframe_preffix: "panshi_ad_frame"
	}, c.ad.image = c.ad.image || {
		minWidth: 300,
		minHeight: 200,
		containerId: null,
		arrList: []
	}, c.ad.kinds = {
		TD: 1,
		SIDE: 3,
		BUTTON: 4,
		WINDOW: 5,
		PATCH: 9,
		BANNERH: 10,
		BANNERV: 11,
		BANNERR: 12,
		FLOAT: 13
	}, c.ad.index = 0, c.lang = c.lang || {}, c.lang.isString = function(a) {
		return "[object String]" == Object.prototype.toString.call(a)
	}, c.isString = c.lang.isString, c.lang.isFunction = function(a) {
		return "[object Function]" == Object.prototype.toString.call(a)
	}, c.lang.isArray = function(a) {
		return "[object Array]" == Object.prototype.toString.call(a)
	}, c.lang.gc = function(a) {
		return null != a ? '"' + a + '"' : '""'
	}, c.gc = c.lang.gc, c.lang.getDate = function() {
		return new Date
	}, c.gt = c.lang.getDate, c.lang.encode = function(a, b) {
		var c, d, e, f, g = [],
			h = [121, 113, 105, 97, 89, 81, 73, 65, 57, 49, 41, 33, 25, 17, 9, 1, 255, 247, 239, 231, 223, 215, 207, 199, 191, 183, 175, 167, 159, 151, 143, 135, 123, 115, 107, 99, 91, 83, 75, 67, 59, 51, 43, 35, 27, 19, 11, 3, 249, 241, 233, 225, 217, 209, 201, 193, 185, 177, 169, 161, 153, 145, 137, 129, 125, 117, 109, 101, 93, 85, 77, 69, 61, 53, 45, 37, 29, 21, 13, 5, 251, 243, 235, 227, 219, 211, 203, 195, 187, 179, 171, 163, 155, 147, 139, 131, 127, 119, 111, 103, 95, 87, 79, 71, 63, 55, 47, 39, 31, 23, 15, 7, 248, 240, 232, 224, 216, 208, 200, 192, 184, 176, 168, 160, 152, 144, 136, 128, 120, 112, 104, 96, 88, 80, 72, 64, 56, 48, 40, 32, 24, 16, 8, 0, 252, 244, 236, 228, 220, 212, 204, 196, 188, 180, 172, 164, 156, 148, 140, 132, 122, 114, 106, 98, 90, 82, 74, 66, 58, 50, 42, 34, 26, 18, 10, 2, 254, 246, 238, 230, 222, 214, 206, 198, 190, 182, 174, 166, 158, 150, 142, 134, 124, 116, 108, 100, 92, 84, 76, 68, 60, 52, 44, 36, 28, 20, 12, 4, 253, 245, 237, 229, 221, 213, 205, 197, 189, 181, 173, 165, 157, 149, 141, 133, 126, 118, 110, 102, 94, 86, 78, 70, 62, 54, 46, 38, 30, 22, 14, 6, 250, 242, 234, 226, 218, 210, 202, 194, 186, 178, 170, 162, 154, 146, 138, 130],
			i = new Array;
		for(i[0] = 255 & a, i[1] = 255 & a >> 8, i[2] = 255 & a >> 16, i[3] = 255 & a >> 24, e = 0, f = 0; e < b.length;) c = b.charCodeAt(e), c ^= i[f], d = h[c].toString(16), 1 == d.length && g.push("0"), g.push(d), f++, f %= 4, e++;
		return g.join("").toUpperCase()
	}, c.lang.dwrite = function(a) {
		document.write(a)
	}, c.wr = c.lang.dwrite, c.lang.string = c.lang.string || {}, c.lang.string.toCamelCase = function(a) {
		return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
			return a.charAt(1).toUpperCase()
		})
	}, c.string = c.lang.string, c.array = c.array || {}, c.array.removeAt = function(a, b) {
		return a.splice(b, 1)[0]
	}, c.lang.toArray = function(a) {
		if(null === a || void 0 === a) return [];
		if(c.lang.isArray(a)) return a;
		if("number" != typeof a.length || "string" == typeof a || c.lang.isFunction(a)) return [a];
		if(a.item) {
			for(var b = a.length, d = new Array(b); b--;) d[b] = a[b];
			return d
		}
		return [].slice.call(a)
	}, c.browser = c.browser || {}, c.browser.ie = c.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +parseFloat(RegExp["$1"]) : 0, c.browser.opera = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp["$6"] || RegExp["$2"]) : 0, c.browser.isWebkit = /webkit/i.test(navigator.userAgent), c.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent), c.browser.isMobile = /AppleWebKit.*Mobile.*/i.test(navigator.userAgent), c.browser.isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(navigator.userAgent), c.browser.isAndroid = /android/i.test(navigator.userAgent), c.browser.isStrict = "CSS1Compat" == document.compatMode, c.dom = c.dom || {
		backCompat: "BackCompat",
		documentElement: "documentElement"
	}, c.dom.g = function(a) {
		return c.isString(a) ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : null
	}, c.g = c.dom.g, c.dom.getDocument = function(a) {
		return a = c.dom.g(a) || window, 9 == a.nodeType ? a : a.ownerDocument || a.document
	}, c.gd = c.dom.getDocument, c.dom.createElement = function(a, b) {
		var d = c.isString(a) ? document.createElement(a) : a;
		return b = c.isString(b) ? c.g(b) : b || document.body, b.appendChild(d), d
	}, c.c = c.dom.createElement, c.dom.getComputedStyle = function(a, b) {
		a = c.dom.g(a);
		var d, e = c.dom.getDocument(a);
		return e.defaultView && e.defaultView.getComputedStyle && (d = e.defaultView.getComputedStyle(a, null)) ? d[b] || d.getPropertyValue(b) : ""
	}, c.dom.styleFixer = c.dom.styleFixer || {}, c.dom.styleFilter = c.dom.styleFilter || [], c.dom.styleFilter.filter = function(a, b, d) {
		for(var e, f = 0, g = c.dom.styleFilter; e = g[f]; f++)(e = e[d]) && (b = e(a, b));
		return b
	}, c.dom.getStyle = function(a, b) {
		var d, e, f = c.dom;
		return a = f.g(a), b = c.string.toCamelCase(b), d = a.style[b] || (a.currentStyle ? a.currentStyle[b] : "") || f.getComputedStyle(a, b), d || (e = f.styleFixer[b], e && (d = e.get ? e.get(a) : c.dom.getStyle(a, e))), (e = f.styleFilter) && (d = e.filter(b, d, "get")), d
	}, c.dom.setStyle = function(a, b, d) {
		var e = c.g(a);
		e.style[b] = d
	}, c.dom.getPosition = function(a) {
		var b, d, e, f, g, h, i, j, k, l;
		if(a = c.dom.g(a), e = c.dom.getDocument(a), f = c.browser, g = c.dom.getStyle, f.isGecko > 0 && e.getBoxObjectFor && "absolute" == g(a, "position") && ("" === a.style.top || "" === a.style.left), h = {
				left: 0,
				top: 0
			}, i = f.ie && !f.isStrict ? e.body : e.documentElement, a == i) return h;
		if(a.getBoundingClientRect) d = a.getBoundingClientRect(), h.left = Math.floor(d.left) + Math.max(e.documentElement.scrollLeft, e.body.scrollLeft), h.top = Math.floor(d.top) + Math.max(e.documentElement.scrollTop, e.body.scrollTop), h.left -= e.documentElement.clientLeft, h.top -= e.documentElement.clientTop, j = e.body, k = parseInt(g(j, "borderLeftWidth")), l = parseInt(g(j, "borderTopWidth")), f.ie && !f.isStrict && (h.left -= isNaN(k) ? 2 : k, h.top -= isNaN(l) ? 2 : l);
		else {
			b = a;
			do {
				if(h.left += b.offsetLeft, h.top += b.offsetTop, f.isWebkit > 0 && "fixed" == g(b, "position")) {
					h.left += e.body.scrollLeft, h.top += e.body.scrollTop;
					break
				}
				b = b.offsetParent
			} while (b && b != a);
			for((f.opera > 0 || f.isWebkit > 0 && "absolute" == g(a, "position")) && (h.top -= e.body.offsetTop), b = a.offsetParent; b && b != e.body;) h.left -= b.scrollLeft, f.opera && "TR" == b.tagName || (h.top -= b.scrollTop), b = b.offsetParent
		}
		return h
	}, c.gp = c.dom.getPosition, c.dom.addEvent = function(a, b, d) {
		var e = function() {
			d.call(a, b)
		};
		b = b.replace(/^on/i, "").toLowerCase(), c.isString(a) && (a = c.g(a)), a.addEventListener ? a.addEventListener(b, e, !1) : a.attachEvent && a.attachEvent("on" + b, e)
	}, c.ae = c.dom.addEvent, c.page = c.page || {}, c.page.getLocation = function() {
		return window.preview_site || window.location.href
	}, c.page.getQuery = function() {
		return window.location.search
	}, c.page.getViewHeight = function() {
		var a = document,
			b = "BackCompat" == a.compatMode ? a.body : a.documentElement;
		return b.clientHeight
	}, c.page.getViewWidth = function() {
		var a = document,
			b = "BackCompat" == a.compatMode ? a.body : a.documentElement;
		return b.clientWidth
	}, c.page.getScrollLeft = function() {
		var a = document;
		return window.pageXOffset || a.documentElement.scrollLeft || a.body.scrollLeft
	}, c.page.getScrollTop = function() {
		var a = document;
		return window.pageYOffset || a.documentElement.scrollTop || a.body.scrollTop
	}, c.cookie = c.cookie || {}, c.cookie._isValidKey = function(a) {
		return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(a)
	}, c.cookie.set = function(a, b, d) {
		if(c.cookie._isValidKey(a)) {
			d = d || {};
			var e = d.expires;
			"number" == typeof d.expires && (e = new Date, e.setTime(e.getTime() + d.expires)), document.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + (d.path ? "; path=" + d.path : "; path=/") + (e ? "; expires=" + e.toUTCString() : "") + (d.domain ? "; domain=" + d.domain : "") + (d.secure ? "; secure" : "")
		}
	}, c.cookie.get = function(a) {
		if(c.cookie._isValidKey(a)) {
			var b = new RegExp("(^| )" + encodeURIComponent(a) + "=([^;]*)(;|$)"),
				d = b.exec(document.cookie);
			if(d) return decodeURIComponent(d[2]) || null
		}
		return null
	}, c.ad.getIndex = function(a, b) {
		return null != window[a] ? ++window[a] : window[a] = b, window[a]
	}, c.ad.GC = function() {
		return this.getIndex("conIndex", 1)
	}, c.ad.GA = function() {
		return this.getIndex("adIndex", 0)
	}, c.ad.getUrl = function(a, b, d) {
		return this.seed = Math.ceil(1e7 * Math.random()), c.adUrl + ["&a=" + a, "b=" + b, "d=" + this.seed, "c=" + c.lang.encode(this.seed, encodeURIComponent(d)), "g=" + this.GA()].join("&")
	}, c.ad.GF = function(a, b, d) {
		var e, f = +a,
			g = +b;
		return c.ad.index = this.GC(), e = this.iframe_preffix + "_" + c.ad.index, ["<iframe id=", c.gc(e), " name=", c.gc(e), " width=", c.gc(f), " height=", c.gc(g), 'frameborder="0" src=', c.gc(d), ' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" style="margin:0px auto;"></iframe>'].join("")
	}, c.ad.css = c.ad.css || {}, c.ad.css.box = {
		all: "maring:0;padding:0;display:block;visibility:visible;border:none;background:none;float:none;overflow:hidden;z-index:2147483640;",
		base: "width:100%;height:100%;left:0;top:0;",
		close: "width:50px;height:20px;right:0;position:absolute;cursor:pointer;background:#fff;filter:alpha(opacity=0);opacity:0;cursor:pointer;z-index:2147483647;",
		x: {
			left: "left",
			right: "right"
		},
		y: {
			top: "top",
			bottom: "bottom"
		},
		offset: {
			top: 20,
			bottom: 1,
			left: 1,
			right: 1
		}
	}, c.ad.css.image = {
		all: "position:absolute;margin:0;padding:0;overflow:hidden;text-align:left;z-index:2147483647;",
		baseHeight: 24,
		Height: 46
	}, c.ad.GB = function(a, b, d, e, f) {
		var g, h, i, j, k, l;
		return document.body ? (g = "panshi_ad_box_" + this.GC(), h = c.ie, i = 0 == h || h >= 7 && document.compatMode != c.dom.backCompat, j = this.css.box.all + "width:" + e + "px;height:" + f + "px;position:" + (i ? "fixed" : "absolute") + ";" + this.css.box.x[d] + ":" + this.css.box.offset[d] + "px;" + this.css.box.y[b] + ":" + this.css.box.offset[b] + "px;", k = "<div id=" + c.gc(g) + " style=" + c.gc(j) + "><div onclick='this.parentNode.style.display=\"none\"' style=" + c.gc(this.css.box.close) + "></div><div style=" + c.gc(this.css.box.all + this.css.box.base) + ">" + this.GF(e, f, a) + "</div></div>", c.wr(k), !i && (k = c.g(g)) && (l = null, i = function() {
			null == l && (l = setTimeout(function() {
				var a = c.page.getScrollTop(),
					d = c.page.getViewHeight(),
					e = b == c.ad.css.box.y.bottom ? a + d - f - c.ad.css.box.offset[b] : a + c.ad.css.box.offset[b];
				e = a > e ? a : e, k.style.top = e + "px"
			}, 300), l = null)
		}, c.ae(window, "scroll", i), c.ae(window, "resize", i)), void 0) : !1
	}, c.ad.image.get = function() {
		var a = (a = this.containerId) ? c.g(a) : document.body;
		return c.lang.toArray("img" === a.nodeName.toLowerCase() ? [a] : a.getElementsByTagName("img"))
	}, c.ad.image.box = function() {
		document.createElement("div")
	}, c.ad.image.plus = function(a) {
		var b = function() {
				var a, b, d;
				for(a = 0; a < c.ad.image.arrList.length; a++) b = c.ad.image.arrList[a], d = c.gp(b[0]), c.dom.setStyle(b[1], "top", d.top + b[0].height - c.ad.css.image.baseHeight + "px"), c.dom.setStyle(b[1], "left", d.left + "px"), c.dom.setStyle(b[1], "width", b[0].width + "px"), c.dom.setStyle(b[1], "height", c.ad.css.image.baseHeight + "px")
			},
			d = function(a) {
				var b = parseInt(c.dom.getStyle(a, "top").replace(/px/g, ""));
				c.dom.setStyle(a, "top", b - c.ad.css.image.Height + "px"), c.dom.setStyle(a, "height", c.ad.css.image.Height + c.ad.css.image.baseHeight + "px")
			},
			e = function(a) {
				var b = parseInt(c.dom.getStyle(a, "top").replace(/px/g, ""));
				c.dom.setStyle(a, "top", b + c.ad.css.image.Height + "px"), c.dom.setStyle(a, "height", c.ad.css.image.baseHeight + "px")
			},
			f = function() {
				var a, b;
				for(a = 0; a < c.ad.image.arrList.length; a++) b = c.ad.image.arrList[a], c.ae(b[1], "mouseover", function() {
					d(this)
				}), c.ae(b[1], "mouseout", function() {
					e(this)
				}), c.ae(b[0], "mouseover", function() {
					var a = parseInt(this.getAttribute("box"));
					d(c.ad.image.arrList[a][1])
				}), c.ae(b[0], "mouseout", function() {
					var a = parseInt(this.getAttribute("box"));
					e(c.ad.image.arrList[a][1])
				})
			},
			g = function() {
				var d, e, g, h, i = c.ad.image.get(),
					j = 0;
				for(d = 0; d < i.length; d++) e = i[d], e.complete && e.width >= c.ad.image.minWidth && e.height >= c.ad.image.minHeight && (g = c.c("div"), h = "panshi_img_box_" + c.ad.GC(), g.id = h, c.dom.setStyle(g, "cssText", c.ad.css.image.all), c.ad.image.arrList.push([e, g]), e.setAttribute("box", j), g.innerHTML = c.ad.GF(e.width, c.ad.css.image.baseHeight + c.ad.css.image.Height, a()), j++);
				i = null, b(), f()
			};
		"complete" === document.readyState ? g() : c.ae(window, "load", g), c.ae(window, "resize", function() {
			var a = null;
			null == a && (setTimeout(b, 300), a = null)
		})
	}, c.ad.IMG = c.ad.image.plus, c.ad.init = function() {
		var d, e, f, g, h, i;
		if(c.a = a || "", c.b = b || "", c.ad.image.containerId = c.ad.image.containerId || window.panshi_c || null, window.panshi_a = window.panshi_b = window.panshi_c = null, "" == c.a || "" == c.b) return !1;
		if(d = c.a.split("_"), c.ad.slot = d[1] || "", this.device = parseInt(d[2] || 1), d = c.b.split("_"), this.width = parseInt(d[0] || 120), this.height = parseInt(d[1] || 270), this.kind = parseInt(d[2] || 1), this.domain = c.page.getLocation(), this.domain.length > 512 && (this.domain = this.domain.substring(0, 512)), e = c.page.getQuery(), "" != e)
			for(g = e.substr(1).split("&"), h = 0; h < g.length; h++) {
				if(f = g[h], "t=" == f.substring(0, 2) && (i = f.substr(2).split("%2c"), 4 == i.length && Math.abs(parseInt(i[2]) - this.width) <= 100 && Math.abs(parseInt(i[3]) - this.height) <= 50)) {
					c.adUrl += "&t=" + i[0] + "%2c" + i[1];
					break
				}
				if("_x=" == f.substring(0, 3)) {
					c.adUrl += "&x=104%2c" + f.substr(3);
					break
				}
			}
		return !0
	}, c.ad.render = function() {
		var a, b, d, e, f, g, h, i, j;
		if(!this.init()) return !1;
		switch(a = this.width, b = this.height, d = c.ad.css.box.offset.top, e = function() {
			return c.ad.getUrl(c.a, c.b, c.ad.domain)
		}, this.kind) {
			case this.kinds.TD:
			case this.kinds.BANNERH:
			case this.kinds.BANNERV:
			case this.kinds.BANNERR:
			case this.kinds.FLOAT:
				c.wr(this.GF(a, b, e())), f = c.g(this.iframe_preffix + "_" + c.ad.index), f && (g = f.parentNode, g && 1 == g.nodeType && (h = parseInt(c.dom.getComputedStyle(g, "width").replace(/px/i, "")), isNaN(h) && (h = 2 === this.device ? c.page.getViewWidth() : a), g.style.paddingLeft && (h -= parseInt(g.style.paddingLeft.replace(/px/i, ""))), g.style.paddingRight && (h -= parseInt(g.style.paddingRight.replace(/px/i, ""))), 2 === this.device ? (f.height = h / a * b, f.width = h) : (i = parseInt(c.dom.getComputedStyle(g, "height").replace(/px/i, "")), isNaN(i) && (i = b), a > h && (f.width = h), b > i && (f.height = i)))), 2 === this.device && (j = "onorientationchange" in window ? "orientationchange" : "resize", c.ae(window, j, function() {
					var a = parseInt(c.dom.getComputedStyle(g, "width").replace(/px/i, ""));
					f.height = a / f.width * f.height, f.width = a
				}));
				break;
			case this.kinds.BUTTON:
				this.GB(e(), this.css.box.y.bottom, this.css.box.x.left, a, b + d), this.GB(e(), this.css.box.y.bottom, this.css.box.x.right, a, b + d);
				break;
			case this.kinds.SIDE:
				this.GB(e(), this.css.box.y.top, this.css.box.x.left, a, b + d + 55), this.GB(e(), this.css.box.y.top, this.css.box.x.right, a, b + d + 55);
				break;
			case this.kinds.WINDOW:
				this.GB(e(), this.css.box.y.bottom, this.css.box.x.right, a, b + d);
				break;
			case this.kinds.PATCH:
				this.IMG(e)
		}
	}, c.ad.render()
}(panshi_a, panshi_b);
(function() {
	var h = {},
		mt = {},
		c = {
			id: "2005820b2330d58df069f326f44154c3",
			dm: ["xinjiangnet.com.cn"],
			js: "tongji.baidu.com/hm-web/js/",
			etrk: [],
			icon: '',
			ctrk: true,
			align: 1,
			nv: -1,
			vdur: 1800000,
			age: 31536000000,
			rec: 0,
			rp: [],
			trust: 0,
			vcard: 0,
			qiao: 0,
			lxb: 0,
			conv: 0,
			med: 0,
			cvcc: '',
			cvcf: [],
			apps: ''
		};
	var s = void 0,
		t = !0,
		u = null,
		v = !1;
	mt.cookie = {};
	mt.cookie.set = function(a, b, d) {
		var g;
		d.M && (g = new Date, g.setTime(g.getTime() + d.M));
		document.cookie = a + "=" + b + (d.domain ? "; domain=" + d.domain : "") + (d.path ? "; path=" + d.path : "") + (g ? "; expires=" + g.toGMTString() : "") + (d.wb ? "; secure" : "")
	};
	mt.cookie.get = function(a) {
		return(a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : u
	};
	mt.i = {};
	mt.i.ya = function(a) {
		return document.getElementById(a)
	};
	mt.i.O = function(a, b) {
		var d = [],
			g = [];
		if(!a) return g;
		for(; a.parentNode != u;) {
			for(var f = 0, p = 0, l = a.parentNode.childNodes.length, n = 0; n < l; n++) {
				var e = a.parentNode.childNodes[n];
				if(e.nodeName === a.nodeName && (f++, e === a && (p = f), 0 < p && 1 < f)) break
			}
			if((l = "" !== a.id) && b) {
				d.unshift("#" + encodeURIComponent(a.id));
				break
			} else l && (l = "#" + encodeURIComponent(a.id), l = 0 < d.length ? l + ">" + d.join(">") : l, g.push(l)), d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < f ? "[" + p + "]" : ""));
			a = a.parentNode
		}
		g.push(d.join(">"));
		return g
	};
	mt.i.Ha = function(a) {
		return(a = mt.i.O(a, t)) && a.length ? String(a[0]) : ""
	};
	mt.i.pb = function(a) {
		return mt.i.O(a, v)
	};
	mt.i.za = function(a) {
		var b;
		for(b = "A";
			(a = a.parentNode) && 1 == a.nodeType;)
			if(a.tagName == b) return a;
		return u
	};
	mt.i.Ba = function(a) {
		return 9 === a.nodeType ? a : a.ownerDocument || a.document
	};
	mt.i.Fa = function(a) {
		var b = {
			top: 0,
			left: 0
		};
		if(!a) return b;
		var d = mt.i.Ba(a).documentElement;
		"undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
		return {
			top: b.top + (window.pageYOffset || d.scrollTop) - (d.clientTop || 0),
			left: b.left + (window.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
		}
	};
	(mt.i.Xa = function() {
		function a() {
			if(!a.G) {
				a.G = t;
				for(var b = 0, d = g.length; b < d; b++) g[b]()
			}
		}

		function b() {
			try {
				document.documentElement.doScroll("left")
			} catch(d) {
				setTimeout(b, 1);
				return
			}
			a()
		}
		var d = v,
			g = [],
			f;
		document.addEventListener ? f = function() {
			document.removeEventListener("DOMContentLoaded", f, v);
			a()
		} : document.attachEvent && (f = function() {
			"complete" === document.readyState && (document.detachEvent("onreadystatechange", f), a())
		});
		(function() {
			if(!d)
				if(d = t, "complete" === document.readyState) a.G = t;
				else if(document.addEventListener) document.addEventListener("DOMContentLoaded",
				f, v), window.addEventListener("load", a, v);
			else if(document.attachEvent) {
				document.attachEvent("onreadystatechange", f);
				window.attachEvent("onload", a);
				var g = v;
				try {
					g = window.frameElement == u
				} catch(l) {}
				document.documentElement.doScroll && g && b()
			}
		})();
		return function(b) {
			a.G ? b() : g.push(b)
		}
	}()).G = v;
	mt.event = {};
	mt.event.c = function(a, b, d) {
		a.attachEvent ? a.attachEvent("on" + b, function(b) {
			d.call(a, b)
		}) : a.addEventListener && a.addEventListener(b, d, v)
	};
	mt.event.preventDefault = function(a) {
		a.preventDefault ? a.preventDefault() : a.returnValue = v
	};
	(function() {
		var a = mt.event;
		mt.f = {};
		mt.f.aa = /msie (\d+\.\d+)/i.test(navigator.userAgent);
		mt.f.Ra = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : s;
		mt.f.cookieEnabled = navigator.cookieEnabled;
		mt.f.javaEnabled = navigator.javaEnabled();
		mt.f.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
		mt.f.Za = (window.screen.width || 0) + "x" + (window.screen.height || 0);
		mt.f.colorDepth = window.screen.colorDepth || 0;
		mt.f.C = function() {
			var a;
			a = a || document;
			return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
		};
		mt.f.D = function() {
			var a = document;
			return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
		};
		mt.f.orientation = 0;
		(function() {
			function b() {
				var a = 0;
				window.orientation !== s && (a = window.orientation);
				screen && (screen.orientation && screen.orientation.angle !== s) && (a = screen.orientation.angle);
				mt.f.orientation = a
			}
			b();
			a.c(window, "orientationchange", b)
		})();
		return mt.f
	})();
	mt.l = {};
	mt.l.parse = function() {
		return(new Function('return (" + source + ")'))()
	};
	mt.l.stringify = function() {
		function a(a) {
			/["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function(a) {
				var b = d[a];
				if(b) return b;
				b = a.charCodeAt();
				return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
			}));
			return '"' + a + '"'
		}

		function b(a) {
			return 10 > a ? "0" + a : a
		}
		var d = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		};
		return function(d) {
			switch(typeof d) {
				case "undefined":
					return "undefined";
				case "number":
					return isFinite(d) ? String(d) : "null";
				case "string":
					return a(d);
				case "boolean":
					return String(d);
				default:
					if(d === u) return "null";
					if(d instanceof Array) {
						var f = ["["],
							p = d.length,
							l, n, e;
						for(n = 0; n < p; n++) switch(e = d[n], typeof e) {
							case "undefined":
							case "function":
							case "unknown":
								break;
							default:
								l && f.push(","), f.push(mt.l.stringify(e)), l = 1
						}
						f.push("]");
						return f.join("")
					}
					if(d instanceof Date) return '"' + d.getFullYear() + "-" + b(d.getMonth() + 1) + "-" + b(d.getDate()) + "T" + b(d.getHours()) + ":" + b(d.getMinutes()) + ":" + b(d.getSeconds()) + '"';
					l = ["{"];
					n = mt.l.stringify;
					for(p in d)
						if(Object.prototype.hasOwnProperty.call(d, p)) switch(e =
							d[p], typeof e) {
							case "undefined":
							case "unknown":
							case "function":
								break;
							default:
								f && l.push(","), f = 1, l.push(n(p) + ":" + n(e))
						}
					l.push("}");
					return l.join("")
			}
		}
	}();
	mt.lang = {};
	mt.lang.d = function(a, b) {
		return "[object " + b + "]" === {}.toString.call(a)
	};
	mt.lang.tb = function(a) {
		return mt.lang.d(a, "Number") && isFinite(a)
	};
	mt.lang.vb = function(a) {
		return mt.lang.d(a, "String")
	};
	mt.lang.g = function(a) {
		return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
	};
	mt.localStorage = {};
	mt.localStorage.K = function() {
		if(!mt.localStorage.h) try {
			mt.localStorage.h = document.createElement("input"), mt.localStorage.h.type = "hidden", mt.localStorage.h.style.display = "none", mt.localStorage.h.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.h)
		} catch(a) {
			return v
		}
		return t
	};
	mt.localStorage.set = function(a, b, d) {
		var g = new Date;
		g.setTime(g.getTime() + d || 31536E6);
		try {
			window.localStorage ? (b = g.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.K() && (mt.localStorage.h.expires = g.toUTCString(), mt.localStorage.h.load(document.location.hostname), mt.localStorage.h.setAttribute(a, b), mt.localStorage.h.save(document.location.hostname))
		} catch(f) {}
	};
	mt.localStorage.get = function(a) {
		if(window.localStorage) {
			if(a = window.localStorage.getItem(a)) {
				var b = a.indexOf("|"),
					d = a.substring(0, b) - 0;
				if(d && d > (new Date).getTime()) return a.substring(b + 1)
			}
		} else if(mt.localStorage.K()) try {
			return mt.localStorage.h.load(document.location.hostname), mt.localStorage.h.getAttribute(a)
		} catch(g) {}
		return u
	};
	mt.localStorage.remove = function(a) {
		if(window.localStorage) window.localStorage.removeItem(a);
		else if(mt.localStorage.K()) try {
			mt.localStorage.h.load(document.location.hostname), mt.localStorage.h.removeAttribute(a), mt.localStorage.h.save(document.location.hostname)
		} catch(b) {}
	};
	mt.sessionStorage = {};
	mt.sessionStorage.set = function(a, b) {
		if(window.sessionStorage) try {
			window.sessionStorage.setItem(a, b)
		} catch(d) {}
	};
	mt.sessionStorage.get = function(a) {
		return window.sessionStorage ? window.sessionStorage.getItem(a) : u
	};
	mt.sessionStorage.remove = function(a) {
		window.sessionStorage && window.sessionStorage.removeItem(a)
	};
	mt.ea = {};
	mt.ea.log = function(a, b) {
		var d = new Image,
			g = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
		window[g] = d;
		d.onload = d.onerror = d.onabort = function() {
			d.onload = d.onerror = d.onabort = u;
			d = window[g] = u;
			b && b(a)
		};
		d.src = a
	};
	mt.U = {};
	mt.U.Ja = function() {
		var a = "";
		if(navigator.plugins && navigator.mimeTypes.length) {
			var b = navigator.plugins["Shockwave Flash"];
			b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
		} else if(window.ActiveXObject) try {
			if(b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
		} catch(d) {}
		return a
	};
	mt.U.ob = function(a, b, d, g, f) {
		return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + d + '" height="' + g + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (f || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + d + '" height="' + g + '" src="' + b + '" flashvars="' + (f || "") + '" allowscriptaccess="always" /></object>'
	};
	mt.url = {};
	mt.url.j = function(a, b) {
		var d = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
		return d ? d[3] : u
	};
	mt.url.qb = function(a) {
		return(a = a.match(/^(https?:)\/\//)) ? a[1] : u
	};
	mt.url.Da = function(a) {
		return(a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : u
	};
	mt.url.Z = function(a) {
		return(a = mt.url.Da(a)) ? a.replace(/:\d+$/, "") : a
	};
	mt.url.O = function(a) {
		return(a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : u
	};
	(function() {
		function a() {
			for(var a = v, d = document.getElementsByTagName("script"), g = d.length, g = 100 < g ? 100 : g, f = 0; f < g; f++) {
				var p = d[f].src;
				if(p && 0 === p.indexOf("https://hm.baidu.com/h")) {
					a = t;
					break
				}
			}
			return a
		}
		return h.xa = a
	})();
	var A = h.xa;
	h.z = {
		rb: "http://tongji.baidu.com/hm-web/welcome/ico",
		S: "hm.baidu.com/hm.gif",
		la: "baidu.com",
		Oa: "hmmd",
		Pa: "hmpl",
		jb: "utm_medium",
		Na: "hmkw",
		mb: "utm_term",
		La: "hmci",
		ib: "utm_content",
		Qa: "hmsr",
		lb: "utm_source",
		Ma: "hmcu",
		hb: "utm_campaign",
		r: 0,
		m: Math.round(+new Date / 1E3),
		X: Math.round(+new Date / 1E3) % 65535,
		protocol: "https:" === document.location.protocol ? "https:" : "http:",
		H: A() || "https:" === document.location.protocol ? "https:" : "http:",
		ub: 0,
		qa: 6E5,
		$a: 5E3,
		ra: 5,
		W: 1024,
		pa: 1,
		w: 2147483647,
		fa: "cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt".split(" ")
	};
	(function() {
		var a = {
			p: {},
			c: function(a, d) {
				this.p[a] = this.p[a] || [];
				this.p[a].push(d)
			},
			A: function(a, d) {
				this.p[a] = this.p[a] || [];
				for(var g = this.p[a].length, f = 0; f < g; f++) this.p[a][f](d)
			}
		};
		return h.B = a
	})();
	(function() {
		function a(a, g) {
			var f = document.createElement("script");
			f.charset = "utf-8";
			b.d(g, "Function") && (f.readyState ? f.onreadystatechange = function() {
				if("loaded" === f.readyState || "complete" === f.readyState) f.onreadystatechange = u, g()
			} : f.onload = function() {
				g()
			});
			f.src = a;
			var p = document.getElementsByTagName("script")[0];
			p.parentNode.insertBefore(f, p)
		}
		var b = mt.lang;
		return h.load = a
	})();
	(function() {
		var a = mt.i,
			b = mt.lang,
			d = mt.event,
			g = mt.f,
			f = h.z,
			p = h.B,
			l = [],
			n = {
				ga: function() {
					c.ctrk && (d.c(document, "mouseup", n.oa()), d.c(window, "unload", function() {
						n.I()
					}), setInterval(function() {
						n.I()
					}, f.qa))
				},
				oa: function() {
					return function(a) {
						a = n.Aa(a);
						if("" !== a) {
							var d = (f.H + "//" + f.S + "?" + h.b.da().replace(/ep=[^&]*/, "ep=" + encodeURIComponent(a))).length;
							d + (f.w + "").length > f.W || (d + encodeURIComponent(l.join("!") + (l.length ? "!" : "")).length + (f.w + "").length > f.W && n.I(), l.push(a), (l.length >= f.ra || /\*a\*/.test(a)) && n.I())
						}
					}
				},
				Aa: function(k) {
					var d = k.target || k.srcElement;
					if(0 === f.pa) {
						var m = (d.tagName || "").toLowerCase();
						if("embed" == m || "object" == m) return ""
					}
					var q;
					g.aa ? (q = Math.max(document.documentElement.scrollTop, document.body.scrollTop), m = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), m = k.clientX + m, q = k.clientY + q) : (m = k.pageX, q = k.pageY);
					k = n.Ea(k, d, m, q);
					var e = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
					switch(c.align) {
						case 1:
							m -= e / 2;
							break;
						case 2:
							m -= e
					}
					e = [];
					e.push(m);
					e.push(q);
					e.push(k.Ta);
					e.push(k.Ua);
					e.push(k.Wa);
					e.push(b.g(k.Va));
					e.push(k.nb);
					e.push(k.Ka);
					(d = "a" === (d.tagName || "").toLowerCase() ? d : a.za(d)) ? (e.push("a"), e.push(b.g(encodeURIComponent(d.href)))) : e.push("b");
					return e.join("*")
				},
				Ea: function(k, d, m, q) {
					k = a.Ha(d);
					var e = 0,
						r = 0,
						f = 0,
						l = 0;
					if(d && (e = d.offsetWidth || d.clientWidth, r = d.offsetHeight || d.clientHeight, l = a.Fa(d), f = l.left, l = l.top, b.d(d.getBBox, "Function") && (r = d.getBBox(), e = r.width, r = r.height), "html" === (d.tagName || "").toLowerCase())) e = Math.max(e, d.clientWidth),
						r = Math.max(r, d.clientHeight);
					return {
						Ta: Math.round(100 * ((m - f) / e)),
						Ua: Math.round(100 * ((q - l) / r)),
						Wa: g.orientation,
						Va: k,
						nb: e,
						Ka: r
					}
				},
				I: function() {
					0 !== l.length && (h.b.a.et = 2, h.b.a.ep = l.join("!"), h.b.k(), l = [])
				}
			},
			e = {
				ia: function() {
					c.ctrk && setInterval(e.ab, f.$a)
				},
				ab: function() {
					var a = g.C() + g.D();
					0 < a - h.b.a.vl && (h.b.a.vl = a)
				}
			};
		p.c("pv-b", n.ga);
		p.c("pv-b", e.ia);
		return n
	})();
	(function() {
		function a() {
			return function() {
				h.b.a.nv = 0;
				h.b.a.st = 4;
				h.b.a.et = 3;
				h.b.a.ep = h.L.Ga() + "," + h.L.Ca();
				h.b.k()
			}
		}

		function b() {
			clearTimeout(z);
			var a;
			r && (a = "visible" == document[r]);
			y && (a = !document[y]);
			n = "undefined" == typeof a ? t : a;
			if((!l || !e) && n && k) x = t, m = +new Date;
			else if(l && e && (!n || !k)) x = v, q += +new Date - m;
			l = n;
			e = k;
			z = setTimeout(b, 100)
		}

		function d(a) {
			var k = document,
				m = "";
			if(a in k) m = a;
			else
				for(var d = ["webkit", "ms", "moz", "o"], b = 0; b < d.length; b++) {
					var q = d[b] + a.charAt(0).toUpperCase() + a.slice(1);
					if(q in k) {
						m =
							q;
						break
					}
				}
			return m
		}

		function g(a) {
			if(!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) k = "focus" == a.type || "focusin" == a.type ? t : v, b()
		}
		var f = mt.event,
			p = h.B,
			l = t,
			n = t,
			e = t,
			k = t,
			w = +new Date,
			m = w,
			q = 0,
			x = t,
			r = d("visibilityState"),
			y = d("hidden"),
			z;
		b();
		(function() {
			var a = r.replace(/[vV]isibilityState/, "visibilitychange");
			f.c(document, a, b);
			f.c(window, "pageshow", b);
			f.c(window, "pagehide", b);
			"object" == typeof document.onfocusin ? (f.c(document, "focusin", g), f.c(document, "focusout", g)) : (f.c(window, "focus", g),
				f.c(window, "blur", g))
		})();
		h.L = {
			Ga: function() {
				return +new Date - w
			},
			Ca: function() {
				return x ? +new Date - m + q : q
			}
		};
		p.c("pv-b", function() {
			f.c(window, "unload", a())
		});
		return h.L
	})();
	(function() {
		var a = mt.lang,
			b = h.z,
			d = h.load,
			g = {
				Sa: function(f) {
					if((window._dxt === s || a.d(window._dxt, "Array")) && "undefined" !== typeof h.b) {
						var g = h.b.N();
						d([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(g)].join(""), f)
					}
				},
				gb: function(d) {
					if(a.d(d, "String") || a.d(d, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", d])
				}
			};
		return h.sa = g
	})();
	(function() {
		function a(a, d, m, b) {
			if(!(a === s || d === s || b === s)) {
				if("" === a) return [d, m, b].join("*");
				a = String(a).split("!");
				for(var e, r = v, f = 0; f < a.length; f++)
					if(e = a[f].split("*"), String(d) === e[0]) {
						e[1] = m;
						e[2] = b;
						a[f] = e.join("*");
						r = t;
						break
					}
				r || a.push([d, m, b].join("*"));
				return a.join("!")
			}
		}

		function b(a) {
			for(var e in a)
				if({}.hasOwnProperty.call(a, e)) {
					var m = a[e];
					d.d(m, "Object") || d.d(m, "Array") ? b(m) : a[e] = String(m)
				}
		}
		var d = mt.lang,
			g = mt.l,
			f = mt.f,
			p = h.z,
			l = h.B,
			n = h.sa,
			e = {
				s: [],
				J: 0,
				ba: v,
				o: {
					V: "",
					page: ""
				},
				init: function() {
					e.e =
						0;
					l.c("pv-b", function() {
						e.ta();
						e.va()
					});
					l.c("pv-d", function() {
						e.wa();
						e.o.page = ""
					});
					l.c("stag-b", function() {
						h.b.a.api = e.e || e.J ? e.e + "_" + e.J : "";
						h.b.a.ct = [decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), e.o.V, e.o.page].join("!")
					});
					l.c("stag-d", function() {
						h.b.a.api = 0;
						e.e = 0;
						e.J = 0
					})
				},
				ta: function() {
					var a = window._hmt || [];
					if(!a || d.d(a, "Array")) window._hmt = {
						id: c.id,
						cmd: {},
						push: function() {
							for(var a = window._hmt, k = 0; k < arguments.length; k++) {
								var b = arguments[k];
								d.d(b, "Array") && (a.cmd[a.id].push(b), "_setAccount" ===
									b[0] && (1 < b.length && /^[0-9a-f]{32}$/.test(b[1])) && (b = b[1], a.id = b, a.cmd[b] = a.cmd[b] || []))
							}
						}
					}, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
				},
				va: function() {
					var a = window._hmt;
					if(a && a.cmd && a.cmd[c.id])
						for(var d = a.cmd[c.id], m = /^_track(Event|MobConv|Order|RTEvent)$/, b = 0, f = d.length; b < f; b++) {
							var r = d[b];
							m.test(r[0]) ? e.s.push(r) : e.R(r)
						}
					a.cmd[c.id] = {
						push: e.R
					}
				},
				wa: function() {
					if(0 < e.s.length)
						for(var a = 0, d = e.s.length; a < d; a++) e.R(e.s[a]);
					e.s = u
				},
				R: function(a) {
					var b = a[0];
					if(e.hasOwnProperty(b) && d.d(e[b],
							"Function")) e[b](a)
				},
				_setAccount: function(a) {
					1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (e.e |= 1)
				},
				_setAutoPageview: function(a) {
					if(1 < a.length && (a = a[1], v === a || t === a)) e.e |= 2, h.b.$ = a
				},
				_trackPageview: function(a) {
					if(1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
						e.e |= 4;
						h.b.a.et = 0;
						h.b.a.ep = "";
						h.b.a.vl = f.C() + f.D();
						h.b.P ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.P = t;
						var d = h.b.a.u,
							m = h.b.a.su;
						h.b.a.u = p.protocol + "//" + document.location.host + a[1];
						e.ba || (h.b.a.su = document.location.href);
						h.b.k();
						h.b.a.u = d;
						h.b.a.su = m
					}
				},
				_trackEvent: function(a) {
					2 <
						a.length && (e.e |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = d.g(a[1]) + "*" + d.g(a[2]) + (a[3] ? "*" + d.g(a[3]) : "") + (a[4] ? "*" + d.g(a[4]) : ""), h.b.k())
				},
				_setCustomVar: function(a) {
					if(!(4 > a.length)) {
						var b = a[1],
							m = a[4] || 3;
						if(0 < b && 6 > b && 0 < m && 4 > m) {
							e.J++;
							for(var q = (h.b.a.cv || "*").split("!"), f = q.length; f < b - 1; f++) q.push("*");
							q[b - 1] = m + "*" + d.g(a[2]) + "*" + d.g(a[3]);
							h.b.a.cv = q.join("!");
							a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
							"" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.Ya("Hm_cv_" +
								c.id)
						}
					}
				},
				_setUserTag: function(b) {
					if(!(3 > b.length)) {
						var e = d.g(b[1]);
						b = d.g(b[2]);
						if(e !== s && b !== s) {
							var m = decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""),
								m = a(m, e, 1, b);
							h.b.setData("Hm_ct_" + c.id, encodeURIComponent(m), c.age)
						}
					}
				},
				_setVisitTag: function(b) {
					if(!(3 > b.length)) {
						var f = d.g(b[1]);
						b = d.g(b[2]);
						if(f !== s && b !== s) {
							var m = e.o.V,
								m = a(m, f, 2, b);
							e.o.V = m
						}
					}
				},
				_setPageTag: function(b) {
					if(!(3 > b.length)) {
						var f = d.g(b[1]);
						b = d.g(b[2]);
						if(f !== s && b !== s) {
							var m = e.o.page,
								m = a(m, f, 3, b);
							e.o.page = m
						}
					}
				},
				_setReferrerOverride: function(a) {
					1 <
						a.length && (h.b.a.su = a[1].charAt && "/" === a[1].charAt(0) ? p.protocol + "//" + window.location.host + a[1] : a[1], e.ba = t)
				},
				_trackOrder: function(a) {
					a = a[1];
					d.d(a, "Object") && (b(a), e.e |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = g.stringify(a), h.b.k())
				},
				_trackMobConv: function(a) {
					if(a = {
							webim: 1,
							tel: 2,
							map: 3,
							sms: 4,
							callback: 5,
							share: 6
						}[a[1]]) e.e |= 32, h.b.a.et = 93, h.b.a.ep = a, h.b.k()
				},
				_trackRTPageview: function(a) {
					a = a[1];
					d.d(a, "Object") && (b(a), a = g.stringify(a), 512 >= encodeURIComponent(a).length && (e.e |= 64, h.b.a.rt = a))
				},
				_trackRTEvent: function(a) {
					a =
						a[1];
					if(d.d(a, "Object")) {
						b(a);
						a = encodeURIComponent(g.stringify(a));
						var f = function(a) {
								var b = h.b.a.rt;
								e.e |= 128;
								h.b.a.et = 90;
								h.b.a.rt = a;
								h.b.k();
								h.b.a.rt = b
							},
							m = a.length;
						if(900 >= m) f.call(this, a);
						else
							for(var m = Math.ceil(m / 900), q = "block|" + Math.round(Math.random() * p.w).toString(16) + "|" + m + "|", l = [], r = 0; r < m; r++) l.push(r), l.push(a.substring(900 * r, 900 * r + 900)), f.call(this, q + l.join("|")), l = []
					}
				},
				_setUserId: function(a) {
					a = a[1];
					n.Sa();
					n.gb(a)
				}
			};
		e.init();
		h.ma = e;
		return h.ma
	})();
	(function() {
		function a() {
			"undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = t, this.a = {}, this.$ = t, this.P = v, this.init())
		}
		var b = mt.url,
			d = mt.ea,
			g = mt.U,
			f = mt.lang,
			p = mt.cookie,
			l = mt.f,
			n = mt.localStorage,
			e = mt.sessionStorage,
			k = h.z,
			w = h.B;
		a.prototype = {
			Q: function(a, b) {
				a = "." + a.replace(/:\d+/, "");
				b = "." + b.replace(/:\d+/, "");
				var d = a.indexOf(b);
				return -1 < d && d + b.length === a.length
			},
			ca: function(a, b) {
				a = a.replace(/^https?:\/\//, "");
				return 0 === a.indexOf(b)
			},
			F: function(a) {
				for(var d = 0; d < c.dm.length; d++)
					if(-1 <
						c.dm[d].indexOf("/")) {
						if(this.ca(a, c.dm[d])) return t
					} else {
						var e = b.Z(a);
						if(e && this.Q(e, c.dm[d])) return t
					}
				return v
			},
			N: function() {
				for(var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)
					if(this.Q(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
				return a
			},
			Y: function() {
				for(var a = 0, b = c.dm.length; a < b; a++) {
					var d = c.dm[a];
					if(-1 < d.indexOf("/") && this.ca(document.location.href, d)) return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
				}
				return "/"
			},
			Ia: function() {
				if(!document.referrer) return k.m - k.r > c.vdur ? 1 : 4;
				var a = v;
				this.F(document.referrer) && this.F(document.location.href) ? a = t : (a = b.Z(document.referrer), a = this.Q(a || "", document.location.hostname));
				return a ? k.m - k.r > c.vdur ? 1 : 4 : 3
			},
			getData: function(a) {
				try {
					return p.get(a) || e.get(a) || n.get(a)
				} catch(b) {}
			},
			setData: function(a, b, d) {
				try {
					p.set(a, b, {
						domain: this.N(),
						path: this.Y(),
						M: d
					}), d ? n.set(a, b, d) : e.set(a, b)
				} catch(f) {}
			},
			Ya: function(a) {
				try {
					p.set(a, "", {
						domain: this.N(),
						path: this.Y(),
						M: -1
					}), e.remove(a), n.remove(a)
				} catch(b) {}
			},
			eb: function() {
				var a, b, d, e, f;
				k.r = this.getData("Hm_lpvt_" +
					c.id) || 0;
				13 === k.r.length && (k.r = Math.round(k.r / 1E3));
				b = this.Ia();
				a = 4 !== b ? 1 : 0;
				if(d = this.getData("Hm_lvt_" + c.id)) {
					e = d.split(",");
					for(f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
					for(; 2592E3 < k.m - e[0];) e.shift();
					f = 4 > e.length ? 2 : 3;
					for(1 === a && e.push(k.m); 4 < e.length;) e.shift();
					d = e.join(",");
					e = e[e.length - 1]
				} else d = k.m, e = "", f = 1;
				this.setData("Hm_lvt_" + c.id, d, c.age);
				this.setData("Hm_lpvt_" + c.id, k.m);
				d = k.m === this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
				if(0 === c.nv && this.F(document.location.href) &&
					("" === document.referrer || this.F(document.referrer))) a = 0, b = 4;
				this.a.nv = a;
				this.a.st = b;
				this.a.cc = d;
				this.a.lt = e;
				this.a.lv = f
			},
			da: function() {
				for(var a = [], b = this.a.et, d = 0, e = k.fa.length; d < e; d++) {
					var f = k.fa[d],
						l = this.a[f];
					"undefined" !== typeof l && "" !== l && ("tt" !== f || "tt" === f && 0 === b) && ("ct" !== f || "ct" === f && 0 === b) && a.push(f + "=" + encodeURIComponent(l))
				}
				switch(b) {
					case 0:
						a.push("sn=" + k.X);
						this.a.rt && a.push("rt=" + encodeURIComponent(this.a.rt));
						break;
					case 3:
						a.push("sn=" + k.X);
						break;
					case 90:
						this.a.rt && a.push("rt=" + this.a.rt)
				}
				return a.join("&")
			},
			fb: function() {
				this.eb();
				this.a.si = c.id;
				this.a.su = document.referrer;
				this.a.ds = l.Za;
				this.a.cl = l.colorDepth + "-bit";
				this.a.ln = String(l.language).toLowerCase();
				this.a.ja = l.javaEnabled ? 1 : 0;
				this.a.ck = l.cookieEnabled ? 1 : 0;
				this.a.lo = "number" === typeof _bdhm_top ? 1 : 0;
				this.a.fl = g.Ja();
				this.a.v = "1.2.30";
				this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
				this.a.tt = document.title || "";
				this.a.vl = l.C() + l.D();
				var a = document.location.href;
				this.a.cm = b.j(a, k.Oa) || "";
				this.a.cp = b.j(a, k.Pa) || b.j(a, k.jb) || "";
				this.a.cw =
					b.j(a, k.Na) || b.j(a, k.mb) || "";
				this.a.ci = b.j(a, k.La) || b.j(a, k.ib) || "";
				this.a.cf = b.j(a, k.Qa) || b.j(a, k.lb) || "";
				this.a.cu = b.j(a, k.Ma) || b.j(a, k.hb) || ""
			},
			init: function() {
				try {
					this.fb(), 0 === this.a.nv ? this.cb() : this.T(".*"), h.b = this, this.na(), w.A("pv-b"), this.bb()
				} catch(a) {
					var b = [];
					b.push("si=" + c.id);
					b.push("n=" + encodeURIComponent(a.name));
					b.push("m=" + encodeURIComponent(a.message));
					b.push("r=" + encodeURIComponent(document.referrer));
					d.log(k.H + "//" + k.S + "?" + b.join("&"))
				}
			},
			bb: function() {
				function a() {
					w.A("pv-d")
				}
				this.$ ? (this.P = t, this.a.et = 0, this.a.ep = "", this.a.vl = l.C() + l.D(), this.k(a)) : a()
			},
			k: function(a) {
				var b = this;
				b.a.rnd = Math.round(Math.random() * k.w);
				w.A("stag-b");
				var e = k.H + "//" + k.S + "?" + b.da();
				w.A("stag-d");
				b.ka(e);
				d.log(e, function(d) {
					b.T(d);
					f.d(a, "Function") && a.call(b)
				})
			},
			na: function() {
				var a = document.location.hash.substring(1),
					d = RegExp(c.id),
					e = -1 < document.referrer.indexOf(k.la),
					f = b.j(a, "jn"),
					l = /^heatlink$|^select$|^pageclick$/.test(f);
				a && (d.test(a) && e && l) && (this.a.rnd = Math.round(Math.random() * k.w), a = document.createElement("script"),
					a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", k.protocol + "//" + c.js + f + ".js?" + this.a.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a, f))
			},
			ka: function(a) {
				var b = e.get("Hm_unsent_" + c.id) || "",
					d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href),
					b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
				e.set("Hm_unsent_" + c.id, b)
			},
			T: function(a) {
				var b = e.get("Hm_unsent_" + c.id) || "";
				b && (a = encodeURIComponent(a.replace(/^https?:\/\//,
					"")), a = RegExp(a.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), (b = b.replace(a, "").replace(/,$/, "")) ? e.set("Hm_unsent_" + c.id, b) : e.remove("Hm_unsent_" + c.id))
			},
			cb: function() {
				var a = this,
					b = e.get("Hm_unsent_" + c.id);
				if(b)
					for(var b = b.split(","), f = function(b) {
							d.log(k.H + "//" + decodeURIComponent(b), function(b) {
								a.T(b)
							})
						}, l = 0, g = b.length; l < g; l++) f(b[l])
			}
		};
		return new a
	})();
	(function() {
		var a = mt.event,
			b = mt.l;
		try {
			if(window.performance && performance.timing && "undefined" !== typeof h.b) {
				var d = function(a) {
						var b = performance.timing,
							d = b[a + "Start"] ? b[a + "Start"] : 0;
						a = b[a + "End"] ? b[a + "End"] : 0;
						return {
							start: d,
							end: a,
							value: 0 < a - d ? a - d : 0
						}
					},
					g = function() {
						var a;
						a = d("navigation");
						var f = d("request");
						a = {
							netAll: f.start - a.start,
							netDns: d("domainLookup").value,
							netTcp: d("connect").value,
							srv: d("response").start - f.start,
							dom: performance.timing.domInteractive - performance.timing.fetchStart,
							loadEvent: d("loadEvent").end -
								a.start
						};
						h.b.a.et = 87;
						h.b.a.ep = b.stringify(a);
						h.b.k()
					};
				a.c(window, "load", function() {
					setTimeout(g, 500)
				})
			}
		} catch(f) {}
	})();
	(function() {
		var a = mt.f,
			b = mt.lang,
			d = mt.event,
			g = mt.l;
		if("undefined" !== typeof h.b && (c.med || (!a.aa || 7 < a.Ra) && c.cvcc)) {
			var f, p, l, n, e = function(a) {
					if(a.item) {
						for(var b = a.length, d = Array(b); b--;) d[b] = a[b];
						return d
					}
					return [].slice.call(a)
				},
				k = function(a, b) {
					for(var d in a)
						if(a.hasOwnProperty(d) && b.call(a, d, a[d]) === v) return v
				},
				w = function(a, d) {
					var e = {};
					e.n = f;
					e.t = "clk";
					e.v = a;
					if(d) {
						var k = d.getAttribute("href"),
							m = d.getAttribute("onclick") ? "" + d.getAttribute("onclick") : u,
							n = d.getAttribute("id") || "";
						l.test(k) ? (e.sn = "mediate",
							e.snv = k) : b.d(m, "String") && l.test(m) && (e.sn = "wrap", e.snv = m);
						e.id = n
					}
					h.b.a.et = 86;
					h.b.a.ep = g.stringify(e);
					h.b.k();
					for(e = +new Date; 400 >= +new Date - e;);
				};
			if(c.med) p = "/zoosnet", f = "swt", l = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, n = {
				click: function() {
					for(var a = [], b = e(document.getElementsByTagName("a")), b = [].concat.apply(b, e(document.getElementsByTagName("area"))), b = [].concat.apply(b, e(document.getElementsByTagName("img"))), d, f, g = 0, k = b.length; g < k; g++) d = b[g], f = d.getAttribute("onclick"),
						d = d.getAttribute("href"), (l.test(f) || l.test(d)) && a.push(b[g]);
					return a
				}
			};
			else if(c.cvcc) {
				p = "/other-comm";
				f = "other";
				l = c.cvcc.q || s;
				var m = c.cvcc.id || s;
				n = {
					click: function() {
						for(var a = [], b = e(document.getElementsByTagName("a")), b = [].concat.apply(b, e(document.getElementsByTagName("area"))), b = [].concat.apply(b, e(document.getElementsByTagName("img"))), d, f, g, k = 0, n = b.length; k < n; k++) d = b[k], l !== s ? (f = d.getAttribute("onclick"), g = d.getAttribute("href"), m ? (d = d.getAttribute("id"), (l.test(f) || l.test(g) || m.test(d)) &&
							a.push(b[k])) : (l.test(f) || l.test(g)) && a.push(b[k])) : m !== s && (d = d.getAttribute("id"), m.test(d) && a.push(b[k]));
						return a
					}
				}
			}
			if("undefined" !== typeof n && "undefined" !== typeof l) {
				var q;
				p += /\/$/.test(p) ? "" : "/";
				var x = function(a, d) {
					if(q === d) return w(p + a, d), v;
					if(b.d(d, "Array") || b.d(d, "NodeList"))
						for(var e = 0, f = d.length; e < f; e++)
							if(q === d[e]) return w(p + a + "/" + (e + 1), d[e]), v
				};
				d.c(document, "mousedown", function(a) {
					a = a || window.event;
					q = a.target || a.srcElement;
					var d = {};
					for(k(n, function(a, e) {
							d[a] = b.d(e, "Function") ? e() : document.getElementById(e)
						}); q &&
						q !== document && k(d, x) !== v;) q = q.parentNode
				})
			}
		}
	})();
	(function() {
		var a = mt.i,
			b = mt.lang,
			d = mt.event,
			g = mt.l;
		if("undefined" !== typeof h.b && b.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
			var f = {
				ha: function() {
					for(var b = c.cvcf.length, g, n = 0; n < b; n++)(g = a.ya(decodeURIComponent(c.cvcf[n]))) && d.c(g, "click", f.ua())
				},
				ua: function() {
					return function() {
						h.b.a.et = 86;
						var a = {
							n: "form",
							t: "clk"
						};
						a.id = this.id;
						h.b.a.ep = g.stringify(a);
						h.b.k()
					}
				}
			};
			a.Xa(function() {
				f.ha()
			})
		}
	})();
	(function() {
		var a = mt.event,
			b = mt.l;
		if(c.med && "undefined" !== typeof h.b) {
			var d = +new Date,
				g = {
					n: "anti",
					sb: 0,
					kb: 0,
					clk: 0
				},
				f = function() {
					h.b.a.et = 86;
					h.b.a.ep = b.stringify(g);
					h.b.k()
				};
			a.c(document, "click", function() {
				g.clk++
			});
			a.c(document, "keyup", function() {
				g.kb = 1
			});
			a.c(window, "scroll", function() {
				g.sb++
			});
			a.c(window, "unload", function() {
				g.t = +new Date - d;
				f()
			});
			a.c(window, "load", function() {
				setTimeout(f, 5E3)
			})
		}
	})();
})();
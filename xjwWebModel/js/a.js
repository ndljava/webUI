(function(h, g, d, a, e, c, f) {
	var b = {
		version: 1.1,
		request_id: d,
		uid: a,
		site_id: e,
		adbar_id: c,
		mouse_trace: [],
		mouse_over: 0,
		time: (new Date()).getTime(),
		domain: ".adyun.com",
		expires: 31536000000,
		init: function() {
			try {
				b.addEvent(h, "load", function() {
					b.store("a", b.adbar_id, !0);
					var j = b.gtn("A"),
						k, o = [],
						l = [],
						m = [];
					for(var n = 0; n < j.length; n++) {
						k = j[n].getAttribute("v");
						k = k.split("_");
						if(3 == k.length) {
							!o.contains(k[0]) && o.push(k[0]) && b.store("p", k[0], !0);
							!l.contains(k[1]) && l.push(k[1]) && b.store("u", k[1], !0);
							!m.contains(k[2]) && m.push(k[2]) && b.store("i", k[2], !0)
						}
						b.addEvent(j[n], "click", function() {
							b.store("a", b.adbar_id, !1);
							var s = this.getAttribute("v");
							k = s.split("_");
							if(3 == k.length) {
								b.store("p", k[0], !1);
								b.store("u", k[1], !1);
								b.store("i", k[2], !1)
							}
							var q = [];
							if(0 == b.mouse_trace.length) {
								q[0] = q[1] = ""
							} else {
								if(4 > b.mouse_trace.length) {
									q[0] = b.mouse_trace[0];
									q[1] = b.mouse_trace.join(",")
								} else {
									q[0] = b.mouse_trace[0];
									var p = [];
									for(var r = 0; r < 3; r++) {
										p[p.length] = b.mouse_trace.pop()
									}
									p = p.reverse();
									q[1] = p.join(",");
									p.unshift(q[0]);
									b.mouse_trace = p
								}
							}
							q[2] = b.mouse_over;
							q[3] = b.getDate().getTime() - b.time;
							q[4] = h.top == h.self ? 0 : 1;
							b.cookie.set("c", q.join("_"));
							b.cookie.set("s_" + f, [b.request_id, s, b.uid, b.site_id, b.adbar_id].join("_"), {
								domain: b.domain,
								expires: b.expires
							})
						})
					}
				});
				b.addEvent(g, "mousemove", function() {
					var j = b.getEvent();
					b.mouse_trace[b.mouse_trace.length] = (j.pageX || j.pageY ? [j.pageX, j.pageY] : [j.clientX + g.body.scrollLeft - g.body.clientLeft, j.clientY + g.body.scrollTop - g.body.clientTop]).join(",")
				});
				b.addEvent(g, "mouseover", function() {
					b.mouse_over += 1
				})
			} catch(i) {
				console.log("error:" + i.message)
			}
		}
	};
	b.getEvent = function() {
		if(h.event) {
			return h.event
		}
		var i = arguments.callee.caller;
		do {
			var j = i.arguments[0];
			if(j && (j.constructor === Event || j.constructor === MouseEvent || j.constructor === KeyboardEvent)) {
				return j
			}
		} while (i = i.caller)
	};
	b.getDate = function(i) {
		return i ? new Date(b.time + i) : new Date()
	};
	b.isString = function(i) {
		return "[object String]" == Object.prototype.toString.call(i)
	};
	b.gtn = function(k) {
		if(b.isString(k)) {
			var k = g.getElementsByTagName(k),
				j = [],
				m;
			for(var l = 0; l < k.length; l++) {
				(m = k[l].getAttribute("v")) && /^[0-9]+\_[0-9]+\_[0-9]+$/.test(m) && j.push(k[l])
			}
			return j
		}
		return null
	};
	b.getViewHeight = function() {
		var i = g,
			j = i.compatMode == "BackCompat" ? i.body : i.documentElement;
		return j.clientHeight
	};
	b.getViewWidth = function() {
		var i = g,
			j = i.compatMode == "BackCompat" ? i.body : i.documentElement;
		return j.clientWidth
	};
	b.addEvent = function(j, i, k) {
		var l = function() {
			k.call(j, i)
		};
		i = i.replace(/^on/i, "").toLowerCase();
		b.isString(j) && (j = b.g(j));
		j.addEventListener ? j.addEventListener(i, l, !1) : j.attachEvent && j.attachEvent("on" + i, l)
	};
	b.cookie = b.cookie || {};
	b.cookie.set = function(l, k, i) {
		if(!l) {
			return
		}
		i = i || {};
		var j = i.expires;
		if("number" == typeof i.expires) {
			j = b.getDate(i.expires)
		}
		g.cookie = encodeURIComponent(l) + "=" + encodeURIComponent(k) + (i.path ? "; path=" + i.path : "; path=/") + (j ? "; expires=" + j.toUTCString() : "") + (i.domain ? "; domain=" + i.domain : "") + (i.secure ? "; secure" : "")
	};
	b.cookie.get = function(i) {
		if(i) {
			var k = new RegExp("(^| )" + encodeURIComponent(i) + "=([^;]*)(;|$)"),
				j = k.exec(g.cookie);
			if(j) {
				return decodeURIComponent(j[2]) || null
			}
		}
		return null
	};
	b.store = function(m, u, t, o) {
		var q = b.cookie.get(m),
			r, s = [],
			p;
		if(q) {
			for(var q = q.split(","), i = 0, n = q.length; i < n; i++) {
				p ? s[s.length] = q[i] : (r = q[i].split("_"), 3 === r.length && (r[0] == u ? p = [u, t ? parseInt(r[1]) + 1 : r[1], !t ? parseInt(r[2]) + 1 : r[2]].join("_") : s[s.length] = q[i]))
			}
		}
		p = p || [u, t ? "1_0" : "0_1"].join("_");
		s[s.length] = p;
		20 < s.length && s.shift();
		u = s.join(",");
		o = o || {
			expires: b.expires
		};
		b.cookie.set(m, u, o)
	};
	Array.prototype.contains = function(k) {
		for(var j in this) {
			if(this[j] == k) {
				return true
			}
		}
		return false
	};
	b.init()
})(window, document, requestId, uid, siteId, adbarId, siteDomain);
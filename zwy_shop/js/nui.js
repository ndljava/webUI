/**
 * 
 * 
 */

function StarSelect(id, starurl, num) {
	var id = id;
	var starUrl = starurl;
	var num = num;

	var selectIndex = -1;

	this.createStarUI = function() {
		var ul = document.createElement("ul");

		ul.style.setProperty('list-style', 'none');
		ul.style.setProperty('float', 'left');
		ul.style.setProperty('margin', '0px');
		ul.style.setProperty('padding', '0px');

		var lis = [];
		for(var i = 0; i < num; i++) {

			var li = document.createElement("li");
			li.style.setProperty('float', 'left');
			li.style.setProperty('margin-left', '3px');

			li.addEventListener("click", function(e) {
				console.log(e + "" + i + "" + selectIndex);
				if(e.target.nodeName == 'IMG') {
					selectIndex = lis.indexOf(e.target.parentNode);
				}
			});

			var img = document.createElement("img");
			img.src = starUrl[1];

			li.appendChild(img);
			ul.appendChild(li);

			lis.push(li);
		}

		ul.addEventListener("mousemove", function(e) {

			if(e.target.nodeName == 'IMG') {
				var pos = lis.indexOf(e.target.parentNode);
				for(var j = 0; j < lis.length; j++) {
					if(j == pos) {
						lis[j].children[0].src = starUrl[2];
					} else if(j < pos) {
						lis[j].children[0].src = starUrl[0];
					} else {
						lis[j].children[0].src = starUrl[1];
					}
				}
			}
		});

		ul.addEventListener("mouseout", function(e) {
			for(var j = 0; j < lis.length; j++) {
				if(j <= selectIndex) {
					lis[j].children[0].src = starUrl[0];
				} else {
					lis[j].children[0].src = starUrl[1];
				}
			}
		});

		document.getElementById(id).appendChild(ul);

	}

	this.init = function() {
		this.createStarUI();
	}

	this.init();
}
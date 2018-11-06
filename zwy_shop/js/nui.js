/**
 * 星计分特效
 * @param {Object} id
 * @param {Object} starurl
 * @param {Object} num
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

	return this.init();
}

/**
 * 复选框
 * @param {Object} continer
 * @param {Object} size
 * @param {Object} img
 */
function Ncheckbox(continer, size, img) {
	if(!continer)
		return;

	var _w = size[0];
	var _h = size[1];

	if(size == null || _w == 0 || _h == 0) {
		_w = 24;
		_h = 24;
	}

	var trueimg = img[1];
	var falseimg = img[0];

	var _continer = continer;

	//选中状态
	var isSelected = false;

	var cb;

	this.createUi = function() {

		cb.style.setProperty("width", _w + "px");
		cb.style.setProperty("height", _h + "px");
		cb.style.setProperty("background-image", "url(" + falseimg + ")");
		cb.style.setProperty("border", "0px solid #000");
		cb.style.setProperty("display", "inline-block");
		cb.style.setProperty("cursor", "pointer");

		cb.addEventListener("click", function() {
			isSelected = !isSelected;

			if(isSelected)
				cb.style.setProperty("background-image", "url(" + trueimg + ")");
			else
				cb.style.setProperty("background-image", "url(" + falseimg + ")");

			cb.setAttribute("checked", isSelected);
		});

		_continer.appendChild(cb);
	}

	this.getChecked = function() {
		return isSelected;
	}

	this.setChecked = function(v) {
		isSelected = v;
		if(isSelected)
			cb.style.setProperty("background-image", "url(" + trueimg + ")");
		else
			cb.style.setProperty("background-image", "url(" + falseimg + ")");

		cb.setAttribute("checked", isSelected);
	}

	this.checkBox = function() {
		return cb;
	}

	this.init = function() {
		cb = document.createElement("div");
		this.createUi();
	}

	return this.init();
}

/**
 *  组队列
 */
var group_name = [];

/**
 * 
 * 单选框
 * @param {Object} continer
 * @param {Object} size
 * @param {Object} img
 * @param {Object} group
 */
function NRadio(continer, size, img, group) {

	var ck = new Ncheckbox(continer, size, img);

	group_name.push(ck);

	var cb = ck.checkBox();
	cb.className = group;

	cb.addEventListener("click", function() {
		for(var i = 0; i < group_name.length; i++) {
			if(group_name[i].checkBox().className == group) {
				group_name[i].setChecked(false);
			}
		}

		ck.setChecked(true);
	});

	this.setChecked = function(v) {
		if(!v && group)
			return;

		for(var i = 0; i < group_name.length; i++) {
			if(group_name[i].checkBox().className == group) {
				group_name[i].setChecked(false);
			}
		}

		ck.setChecked(v);
	}

	this.getChecked = function() {
		return ck.getChecked();
	}

}
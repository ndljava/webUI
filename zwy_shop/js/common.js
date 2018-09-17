var domainName = "http://47.93.4.157:8086";

/*
 *检测网络是否断开
 */
//networkEnvironment()

function ContenthtmlStr() {
	var str = '<div style="width:100%;margin-top:50%;">' +
		'<div style="text-align:center;"><img src="../../img/NoSearch.png" style="width:40px;"></div>' +
		'<div style="text-align:center;color:#999;font-size: 0.75rem;">网络已断开</div>'
	'</div>'
	doucumnet.body.appendChild(str)
}

function networkEnvironment() {
	var el = document.body;
	if(el.addEventListener) {
		window.addEventListener("online", function() {}, true);
		window.addEventListener("offline", function() {
			ContenthtmlStr();
		}, true);
	} else if(el.attachEvent) {
		window.attachEvent("ononline", function() {});
		window.attachEvent("onoffline", function() {
			ContenthtmlStr();
		});
	} else {
		window.ononline = function() {};
		window.onoffline = function() {
			ContenthtmlStr();
		};
	}
}

/*
 *返回上一页
 */
$("body").on("click", "#top-back", function() {
	window.history.go(-1);
});

/*
 * 保存获取接口
 * 参数说明：
 * param:[url] 请求地址
 * param:[data] 参数
 * param:[okCallback] 回调函数
 * param:[post|get]方法
 * 使用方法：getData("dep/getAllTeachers.htm?a="+Math.random(),{},function(data){console.info(data);})
 */
function getData(url, data, okCallback, method, loadText) {
	var ajaxmethod = method || "get";
	$.ajax({
		url: url,
		data: data,
		async: true,
		type: ajaxmethod,
		dataType: 'json',
		beforeSend: function() {
			//$.showIndicator()
		},
		success: function(result, textStatus, jqXHR) {
			if(jqXHR.status == 200) {
				//回调
				okCallback(result);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {

			//回调
			okCallback(XMLHttpRequest);
			var str = '<div style="width:100%;margin-top:50%;">' +
				'<div style="text-align:center;"><img src="../../img/NoSearch.png" style="width:40px;margin:0 auto;"></div>' +
				'<div style="text-align:center;color:#999;font-size: 0.75rem;margin-top:10px;">加载失败</div>'
			'</div>'
			$("body").html(str)
			$.toast("数据获取失败", 1000, 'success top');
			return false;
		},
		complete: function() {

			//$.hideIndicator();
		},
	});
};

function getDataNoLoading(url, data, okCallback, method) {
	var ajaxmethod = method || "get";
	$.ajax({
		url: url,
		data: data,
		async: true,
		type: ajaxmethod,
		dataType: 'json',
		success: function(result, textStatus, jqXHR) {
			if(jqXHR.status == 200) {
				//回调
				okCallback(result);

			}
		}
	});
};

/*
 * 名称：购物车总数量
 * @param参数 paraName 要获取字段的名称
 * @returns 返回指定字段的值
 */
function CartQuantity() {
	if(sessionStorage.baseUser == undefined) {
		$("#common-cart-num .cart-num").hide();
		return false;
	}
	var userData = JSON.parse(sessionStorage.baseUser);
	var parameter = {
		userId: userData.userId,
	};
	getData(domainName + "/mall_api/cart/select_cart_count", parameter, function(res) {
		if(res.code == 0 && res.success == true) {
			if(res.data > 0) {
				$("#common-cart-num .cart-num").show();
				$("#common-cart-num .cart-num").text(res.data)
			}
		}
	}, "post");
}
/*
 * 函数：获取当前时间
 * 描述：格式“yyyy-MM-dd HH:MM:SS”
 * 
 */
function getNowFormatDate() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if(month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if(strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
		" " + date.getHours() + seperator2 + date.getMinutes() +
		seperator2 + date.getSeconds();
	return currentdate;
}

/*
 * 函数：倒计时函数
 * 描述：
 * 
 */

function formatDuring(mss) {
	var days = parseInt(mss / (1000 * 60 * 60 * 24));
	var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = (mss % (1000 * 60)) / 1000;
	return hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
}

/*
 * 函数：滑动删除
 * 描述：
 * 
 */
function SlideEvent() {
	//侧滑显示删除按钮
	var expansion = null; //是否存在展开的list
	var container = document.querySelectorAll('.list li');
	for(var i = 0; i < container.length; i++) {
		var x, y, X, Y, swipeX, swipeY;
		container[i].addEventListener('touchstart', function(event) {
			//如果点击的是删除按钮
			if(event.target.id == "DelMe") {
				return false;
			}
			x = event.changedTouches[0].pageX;
			y = event.changedTouches[0].pageY;
			swipeX = true;
			swipeY = true;
			if(expansion) { //判断是否展开，如果展开则收起
				expansion.className = "";
			}
		});
		container[i].addEventListener('touchmove', function(event) {

			X = event.changedTouches[0].pageX;
			Y = event.changedTouches[0].pageY;
			// 左右滑动

			if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
				// 阻止事件冒泡
				event.stopPropagation();
				if(X - x > 10) { //右滑
					event.preventDefault();
					this.className = ""; //右滑收起
				}
				if(x - X > 10) { //左滑
					event.preventDefault();
					this.className = "swipeleft"; //左滑展开
					expansion = this;
				}
				swipeY = false;
			}
			// 上下滑动
			if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
				swipeX = false;
			}
		});
	}
}

/*
 * 函数：图片加载失败统一选用默认图片处理
 * 全局函数：所有图片加载失败时默认都调用
 */

// window.onload=function(){
// 	setTimeout(function(){
// 		test()
// 	},1000)
// 	function test(){
// 		var migList=document.getElementsByTagName("img");
// 		for(var i=0;i<migList.length;i++){
// 			if(migList[i].naturalHeight==0){
// 				migList[i].src="http://yun.5tree.cn/shijiwxy/weixin/images/error.gif"
// 			}
// 		}
// 	}
// }
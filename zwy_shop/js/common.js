// var domainName="http://47.93.4.157:8086";
// var domainName="http://zhangwoyun.feijizhe.com:8086";
var domainName="https://zhangwoyun.feijizhe.com";

/*
*检测网络是否断开
*/

/*
networkEnvironment()
function ContenthtmlStr(){
	var str='<div style="width:100%;margin-top:50%;">'
				+'<div style="text-align:center;"><img src="../../img/NoSearch.png" style="width:40px;"></div>'
				+'<div style="text-align:center;color:#999;font-size: 0.75rem;">网络已断开</div>'
			'</div>'
			document.getElementsByTagName("body")[0].appendChild(str)  	
}

function networkEnvironment(){
	var el = document.body;  
	
	if (el.addEventListener) {  
	   window.addEventListener("online", function () {}, true);  
	   window.addEventListener("offline", function () {ContenthtmlStr();}, true);  
	}  
	else if (el.attachEvent) {  
	   window.attachEvent("ononline", function () {});  
	   window.attachEvent("onoffline", function () {ContenthtmlStr();});  
	}  
	else {  
	   window.ononline = function () {};  
	   window.onoffline = function () {ContenthtmlStr();};  
	}
}
*/
/*
*返回上一页
*/
$("body").on("click", "#top-back", function () {
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
function getData(url,data,okCallback,method,loadText) {
	var ajaxmethod = method||"get";
	$.ajax({
	    url : url,
		data : data,
	    async : true,
	    type:ajaxmethod,
		dataType:'json',
	    beforeSend:function(){
			//$.showIndicator()
	    },
	    success : function(result,textStatus,jqXHR) {
	      	if(jqXHR.status==200){
	        	//回调
				okCallback(result);
			  }	
	    },
	    error : function(XMLHttpRequest, textStatus, errorThrown) {	  
				   
			//回调
			okCallback(XMLHttpRequest);  
			var str='<div style="width:100%;margin-top:50%;">'
				+'<div style="text-align:center;"><img src="../../img/NoSearch.png" style="width:40px;margin:0 auto;"></div>'
				+'<div style="text-align:center;color:#999;font-size: 0.75rem;margin-top:10px;">加载失败</div>'
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


function getDataNoLoading (url, data,okCallback,method) {
    var ajaxmethod = method||"get";
    $.ajax({
        url : url,
        data : data,
        async : true,
        type:ajaxmethod,
        dataType:'json',
        success : function(result,textStatus,jqXHR) {
            if(jqXHR.status==200){
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
function CartQuantity(){		
	if(sessionStorage.baseUser==undefined){
		$("#common-cart-num .cart-num").hide();
		return false;
	}   
	var userData=JSON.parse(sessionStorage.baseUser);
	var parameter = {
		userId:userData.userId,   
		};	
	getData(domainName+"/mall_api/cart/select_cart_count",parameter, function(res){	
		if(res.code == 0 && res.success==true){    
			if(res.data>0){
				$("#common-cart-num .cart-num").show();
				$("#common-cart-num .cart-num").text(res.data)
			}
		}
	},"post");
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
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
			+ " " + date.getHours() + seperator2 + date.getMinutes()
			+ seperator2 + date.getSeconds();
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
	return  hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
}

/*
* 函数：滑动删除
* 描述：
* 
*/
function SlideEvent(){
	//侧滑显示删除按钮
	var expansion = null; //是否存在展开的list
	var container = document.querySelectorAll('.list li');
	for(var i = 0; i < container.length; i++){    
		var x, y, X, Y, swipeX, swipeY;
		container[i].addEventListener('touchstart', function(event) {
			//如果点击的是删除按钮
			if(event.target.id=="DelMe"){
				return false;
			}
			x = event.changedTouches[0].pageX;
			y = event.changedTouches[0].pageY;
			swipeX = true;
			swipeY = true ;
			if(expansion){   //判断是否展开，如果展开则收起
				expansion.className = "";
			}        
		});
		container[i].addEventListener('touchmove', function(event){
			
			X = event.changedTouches[0].pageX;
			Y = event.changedTouches[0].pageY;        
			// 左右滑动
				 
			if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0){
				// 阻止事件冒泡
				event.stopPropagation();
				if(X - x > 10){   //右滑
					event.preventDefault();
					this.className = "";    //右滑收起
				}
				if(x - X > 10){   //左滑
					event.preventDefault();
					this.className = "swipeleft";   //左滑展开
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

$('img').error(function() { 
	$(this).attr("src", "http://yun.5tree.cn/shijiwxy/weixin/images/error.gif"); 
}); 
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

/*
 *数组 数组克隆
 */
Array.prototype.clone = function(){
    let a=[];
    for(let i=0,l=this.length;i<l;i++) {
        a.push(this[i]);
    }
    return a;
}

/*
 *数组 删除数组中指定下标返回新数组
 */
Array.prototype.remove = function(dx) {
	if(isNaN(dx) || dx > this.length) {
		return false;
	}
	for(var i = 0, n = 0; i < this.length; i++) {
		if(this[i] != this[dx]) {
			this[n++] = this[i]
		}
	}
		this.length -= 1
}

/*
 * 函数：图片大图浏览
 * 使用场景：通知详情/作业详情/校园通知/博客
 * 使用方法：initPhotoSwipeFromDOM('.my-gallery'); zepto对象
 *
 */
var initPhotoSwipeFromDOM = function(gallerySelector) {
	// 解析来自DOM元素幻灯片数据（URL，标题，大小...）
	var parseThumbnailElements = function(el) {
		var thumbElements = el.childNodes,
			numNodes = thumbElements.length,
			items = [],
			figureEl,
			linkEl,
			size,
			item,
			divEl;
		for(var i = 0; i < numNodes; i++) {
			figureEl = thumbElements[i]; // <figure> element
			// 仅包括元素节点
			if(figureEl.nodeType !== 1) {
				continue;
			}
			divEl = figureEl.children[0];
			linkEl = divEl.children[0]; // <a> element
			size = linkEl.getAttribute('data-size').split('x');
			// 创建幻灯片对象
			item = {
				src: linkEl.getAttribute('href'),
				w: parseInt(size[0], 10),
				h: parseInt(size[1], 10)
			};
			if(figureEl.children.length > 1) {
				item.title = figureEl.children[1].innerHTML;
			}
			if(linkEl.children.length > 0) {
				// <img> 缩略图节点, 检索缩略图网址
				item.msrc = linkEl.children[0].getAttribute('src');
			}
			item.el = figureEl; // 保存链接元素 for getThumbBoundsFn
			items.push(item);
		}
		return items;
	};

	// 查找最近的父节点
	var closest = function closest(el, fn) {
		return el && ( fn(el) ? el : closest(el.parentNode, fn) );
	};

	// 当用户点击缩略图触发
	var onThumbnailsClick = function(e) {
		e = e || window.event;
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		var eTarget = e.target || e.srcElement;
		var clickedListItem = closest(eTarget, function(el) {
			return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
		});
		if(!clickedListItem) {
			return;
		}
		var clickedGallery = clickedListItem.parentNode,
			childNodes = clickedListItem.parentNode.childNodes,
			numChildNodes = childNodes.length,
			nodeIndex = 0,
			index;
		for (var i = 0; i < numChildNodes; i++) {
			if(childNodes[i].nodeType !== 1) {
				continue;
			}
			if(childNodes[i] === clickedListItem) {
				index = nodeIndex;
				break;
			}
			nodeIndex++;
		}
		if(index >= 0) {
			openPhotoSwipe( index, clickedGallery );
		}
		return false;
	};

	var photoswipeParseHash = function() {
		var hash = window.location.hash.substring(1),
			params = {};
		if(hash.length < 5) {
			return params;
		}
		var vars = hash.split('&');
		for (var i = 0; i < vars.length; i++) {
			if(!vars[i]) {
				continue;
			}
			var pair = vars[i].split('=');
			if(pair.length < 2) {
				continue;
			}
			params[pair[0]] = pair[1];
		}
		if(params.gid) {
			params.gid = parseInt(params.gid, 10);
		}
		return params;
	};

	var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
		var pswpElement = document.querySelectorAll('.pswp')[0],
			gallery,
			options,
			items;
		items = parseThumbnailElements(galleryElement);
		// 这里可以定义参数
		options = {
			barsSize: {
				top: 100,
				bottom: 100
			},
			fullscreenEl : false,
			shareButtons: [
				{id:'wechat', label:'分享微信', url:'#'},
				{id:'weibo', label:'新浪微博', url:'#'},
				{id:'download', label:'保存图片', url:'{{raw_image_url}}', download:true}
			],
			galleryUID: galleryElement.getAttribute('data-pswp-uid'),
			getThumbBoundsFn: function(index) {
				var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
					pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
					rect = thumbnail.getBoundingClientRect();
				return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
			}
		};
		if(fromURL) {
			if(options.galleryPIDs) {
				for(var j = 0; j < items.length; j++) {
					if(items[j].pid == index) {
						options.index = j;
						break;
					}
				}
			} else {
				options.index = parseInt(index, 10) - 1;
			}
		} else {
			options.index = parseInt(index, 10);
		}
		if( isNaN(options.index) ) {
			return;
		}
		if(disableAnimation) {
			options.showAnimationDuration = 0;
		}
		gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();
	};

	var galleryElements = document.querySelectorAll( gallerySelector );
	for(var i = 0, l = galleryElements.length; i < l; i++) {
		galleryElements[i].setAttribute('data-pswp-uid', i+1);
		galleryElements[i].onclick = onThumbnailsClick;
	}
	var hashData = photoswipeParseHash();
	if(hashData.pid && hashData.gid) {
		openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
	}
};

/*
* 函数：获取照片的原始尺寸
* 参数为dom对象
* 返回宽高
*/

function getNaturalSize (Domlement) {
    var natureSize = {};
    if(window.naturalWidth && window.naturalHeight) {
        natureSize.width = Domlement.naturalWidth;
        natureSize.height = Domlement.naturalHeight;
    } else {
        var img = new Image();
        img.src = Domlement.src;
        natureSize.width = img.width;
        natureSize.height = img.height;
    }
    return natureSize;
}

/*
*函数：判断图片是否完成并且获取原始尺寸
*/
function getWH(obj){
	var natural = getNaturalSize(obj);
	console.log(natural)
    $(obj).show();
    if($(obj).next().length>0){
        $(obj).next().hide();
    }
    $(obj).parent().attr("data-size",natural.width+"x"+natural.height);
}
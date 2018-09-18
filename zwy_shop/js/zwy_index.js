/**
 * 滚动特效 
 */
var _top = -71;

function scrollNews() {
	var pagepic = document.getElementById("pagePic");

	if(_top < -70) {
		if(_top < -120) {
			_top = 0;
			pagepic.children[0].appendChild(pagepic.children[0].children[0]);
			pagepic.children[0].appendChild(pagepic.children[0].children[0]);
		}
	} else {
		pagepic.children[0].style.top = _top + "px";
	}

	_top--;
}
/**
 * 热门推荐
 */
function getRMTJ() {
	var time = getNowFormatDate();
	var parameter = {
		time: time,
		pageNum: 1,
		pageSize: 10,
	}

	getData(domainName + "/mall_api/shop/get_ware_list", parameter, function(res) {
		console.log(res)
		if(res.code == 0 && res.success == true) {
			var DataList = res.data;
			//轮播图
			var LoopImg = DataList[0].recommendWare;
			var LoopStr = '';
			for(var i = 0; i < LoopImg.length; i++) {
				//LoopStr += '<div class="swiper-slide"><a href="src/shopdetail/shopdetail.html?wareid=' + LoopImg[i].wareid + '"><img src=' + LoopImg[i].coverList[0] + '></a></div>'
				LoopStr += '<li><a href="src/shopdetail/shopdetail.html?wareid=' + LoopImg[i].wareid + '" target="_blank">' +
					'<img src="' + LoopImg[i].coverList[0] + '" width="140" height="140"></a>' +
					'<p class="fnt18666"><a href="src/shopdetail/shopdetail.html?wareid=' + LoopImg[i].wareid + '" target="_blank">' + LoopImg[i].warename + '</a></p></li>';
			}

			//$("#rmtj_scroll").empty().append(LoopStr);
			$("#rmtj_scroll").append(LoopStr);
			// 热销分类
			// var HotCategory=DataList[0].hotCategory;
			// var hotCategoryStr=''; 
			// for(var i=0;i<HotCategory.length;i++){
			// 	hotCategoryStr+='<a href="src/shoptype/shoptype.html"><img src='+HotCategory[i].categoryIcon+' onerror="imgError(this);"/><p>'+HotCategory[i].categoryName+'</p></a>'
			// }
			// $("#HotCategory").empty().append(hotCategoryStr)

			// 推荐商品
			var WareList = DataList[0].wareList.list;
			var WareListStr = '';
			for(var i = 0; i < WareList.length; i++) {
				//				WareListStr += '<a href="src/shopdetail/shopdetail.html?wareid=' + WareList[i].wareid + '">' +
				//					'<div class="ListImg" style="height:130px;"><img src=' + WareList[i].coverList[0] + '></div>' +
				//					'<div class="txt"><span>' + WareList[i].warename + '</span></div>' +
				//					'<p class="money"><span>￥</span><span>' + WareList[i].wareprice + '</span></p>' +
				//					'</a>';

				WareListStr += '<li><div><a href="src/shopdetail/shopdetail.html?wareid=' + WareList[i].wareid + '" target="_blank"><img src="' + WareList[i].coverList[0] + '" width="140" height="140"></a>' +
					'<p class="fnt18666"><a href="src/shopdetail/shopdetail.html?wareid=' + WareList[i].wareid + '" target="_blank">' + WareList[i].warename + '</a></p></div>' +
					'<p class="fnt20cc0000">￥' + WareList[i].wareprice + '</p><span><a href="src/shopdetail/shopdetail.html?wareid=' + WareList[i].wareid + '" target="_blank"></a></span></li>';
			}
			//$("#rmtj_scroll2").empty().append(WareListStr)
			$("#rmtj_scroll2").append(WareListStr)
		}
	}, "POST")
}

/**
 * 获取类别 及子类别
 */
function getTypeList() {
	getData(domainName + "/mall_api/classify/getClassifyList", "", function(res) {
		console.log(res)
		if(res.code == 0) {
			dataList = res.data;
			var strctx = "";
			for(var i = 0; i < dataList.length; i++) {
				strctx += '<div class="bodyTopLeftItem">';
				strctx += '<div class="bodyTopLeftItemTitle">' +
					'<a href="#" target="_blank">' + dataList[i].categoryName + '</a>' +
					'</div>';
					
				strctx += '<ul>';
				
				for(var j = 0; j < dataList[i].children.length; j++) {
					strctx += '<li><a href="../search/search.html?keyword=' + dataList[i].children[j].categoryName + '" target="_blank">' + dataList[i].children[j].categoryName + '</a></li>';
				}
				
				strctx += '</ul></div>';
			}

			$("#typeList").empty().append(strctx)

		} else {

			var str = '<div style="width:100%;margin-top:50%;">' +
				'<div style="text-align:center;"><img src="../../img/NoSearch.png" style="width:40px;"></div>' +
				'<div style="text-align:center;color:#999;font-size: 0.75rem;">加载失败</div>'
			'</div>'
			$(".main").html(str)
		}
	}, "post");
}
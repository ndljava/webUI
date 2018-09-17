$(function() {
	// 点击input框&&展示历史记录
	$("body").on("click", "#SearchInput", function() {
		$(".SearchBg").show();
		var StrHistList = '';
		var SearchListData = JSON.parse(localStorage.getItem('SearchList'));
		if(localStorage.length > 0) {
			$("#HistListWrap").show();
			for(var i = 0; i < SearchListData.length; i++) {
				StrHistList += '<span class="HistoryList"><a>' + SearchListData[i] + '</a></span>';
			}
			$("#HistList").empty().append(StrHistList)
		}
	})

	//点击历史记录
	$("body").on("click", ".HistoryList", function() {
		var val = $(this).text();
		window.location.href = "src/search/search.html?keyword=" + val;
	})

	//删除历史记录
	$("body").on("click", "#DelHist", function() {
		$.confirm('确定删除本地历史么？', '', function() {
			localStorage.removeItem('SearchList');
			$("#HistListWrap").hide();
		}, null, "确定", "取消")
	})
	// 点击搜索按钮
	$("body").on("click", "#SearchBtn", function() {
		var keyword = $("#SearchVal").val();
		//搜索值为空
		if(keyword == '') {
			return false;
		}
		//先取出本地localStorage数据
		var aa = JSON.parse(localStorage.getItem('SearchList'))
		//如果没有本地数据
		if(aa == null || undefined) {
			aa = [];
			aa.push(keyword);
			localStorage.setItem('SearchList', JSON.stringify(aa));
		}
		//判断数据中是否重复
		if(aa.indexOf(keyword) == -1) {
			aa.push(keyword);
			localStorage.setItem('SearchList', JSON.stringify(aa));
		}

		val = $("#SearchVal").val();
		window.location.href = "src/search/search.html?keyword=" + val
	})

	//返回
	$("body").on("click", "#CloseSearch", function() {
		$(".SearchBg").hide();
	})

	$("body").on("click", "#common-cart-num", function() {
		if(sessionStorage.baseUser == undefined) {
			window.location.href = "src/login/login.html";
		} else {
			window.location.href = "src/shopcar/shopcar.html";
		}
	})

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
				LoopStr += '<div class="swiper-slide"><a href="src/shopdetail/shopdetail.html?wareid=' + LoopImg[i].wareid + '"><img src=' + LoopImg[i].coverList[0] + '></a></div>'
			}
			$("#BannerLoop").empty().append(LoopStr)

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
				WareListStr += '<a href="src/shopdetail/shopdetail.html?wareid=' + WareList[i].wareid + '">' +
					'<div class="ListImg" style="height:130px;"><img src=' + WareList[i].coverList[0] + '></div>' +
					'<div class="txt"><span>' + WareList[i].warename + '</span></div>' +
					'<p class="money"><span>￥</span><span>' + WareList[i].wareprice + '</span></p>' +
					'</a>'
			}
			$("#WareList").empty().append(WareListStr)
		}
	}, "POST")
	// 首页轮播
	setTimeout(function() {
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: true, //可选选项，自动滑动
			autoplayDisableOnInteraction: false,
			pagination: {
				el: '.swiper-pagination',
			}
		});
	}, 1000)

	// 购物车总数量
	CartQuantity();

	// 身份
	$("body").on("click", "#shomy", function() {
		window.location.href = "src/shopmy/shopmy.html";
	})

})
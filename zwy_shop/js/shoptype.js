$(function() {
	// 购物车总数量
	CartQuantity();
	$("body").on("click", "#userMob", function() {
		$("#ShopType").hide();
		$(".SearchBg").show();
		//展示历史记录
		var StrHistList = '';
		var SearchListData = JSON.parse(localStorage.getItem('SearchList'));
		if(localStorage.length > 0) {
			$("#HistListWrap").show();
			for(var i = 0; i < SearchListData.length; i++) {
				StrHistList += '<span class="HistoryList"><a>' + SearchListData[i] + '</a></span>';
			}
			$("#HistList").empty().append(StrHistList)
		}

		//删除历史记录
		$("body").on("click", "#DelHist", function() {
			$.confirm('确定删除本地历史么？', '', function() {
				localStorage.removeItem('SearchList');
				$("#HistListWrap").hide();
			}, null, "确定", "取消")
		})
	});
	$("body").on("click", "#HiddenCurrent", function() {
		$(".SearchBg").hide();
		$("#ShopType").show();
	})
	//点击历史记录
	$("body").on("click", ".HistoryList", function() {
		var val = $(this).text();
		window.location.href = "../search/search.html?keyword=" + val;
	})
	$("body").on("click", "#SearchBtn", function() {
		//搜索值为空
		var keyword = $("#SearchVal").val();
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
		window.location.href = "../search/search.html?keyword=" + val
	})

	getData(domainName + "/mall_api/classify/getClassifyList", "", function(res) {
		console.log(res)
		if(res.code == 0) {
			dataList = res.data;
			var strLeft = "";
			for(var i = 0; i < dataList.length; i++) {
				//标题栏
				if(i == 0) {
					strLeft += '<li class="white">' + dataList[i].categoryName + '</li>'
				} else {
					strLeft += '<li>' + dataList[i].categoryName + '</li>'
				}

				var strRigthLi = ''
				for(var j = 0; j < dataList[i].children.length; j++) {
					strRigthLi += '<a href="../search/search.html?keyword=' + dataList[i].children[j].categoryName + '"><img src=' + dataList[i].children[j].categoryIcon + '><p>' + dataList[i].children[j].categoryName + '</p></a>'
				};
				if(i == 0) {
					strRigth = '<div class="type_one" style="display:block;">' +
						'<div class="txt">' + dataList[i].categoryName + '</div>' +
						'<div class="list">' + strRigthLi + '</div>' +
						'</div>'
				} else {
					strRigth = '<div class="type_one">' +
						'<div class="txt">' + dataList[i].categoryName + '</div>' +
						'<div class="list"><div class="content" style="margin-top:2rem;">' + strRigthLi + '</div></div>' +
						'</div>'
				}

				$(".right-nav").append(strRigth);
			}
			$("#leftDataList").empty().append(strLeft)
		} else {

			var str = '<div style="width:100%;margin-top:50%;">' +
				'<div style="text-align:center;"><img src="../../img/NoSearch.png" style="width:40px;"></div>' +
				'<div style="text-align:center;color:#999;font-size: 0.75rem;">加载失败</div>'
			'</div>'
			$(".main").html(str)
		}
	}, "post");

	//内容切换
	$("body").on("click", "#leftDataList li", function() {
		$(this).addClass("white").siblings().removeClass("white")
		var index = $(this).index()
		$(this).parent().parent().next().children().eq(index).show().siblings().hide();
	})
	//购物车
	$("body").on("click", "#common-cart-num", function() {
		if(sessionStorage.baseUser == undefined) {
			window.location.href = "../login/login.html"
		} else {
			window.location.href = "../shopcar/shopcar.html";
		}
	})

	$("body").on("click", "#shopmy", function() {
		window.location.href = "../shopmy/shopmy.html";
	})
});
// 메인 중단 슬아이드 배너
function fnRolMove_Type1() {
	this.GoodsSetTime = null;
	this.BannerCurrent = 0;
	this.DateNum = 3;
	
	this.Start = function() {
		this.Obj = document.getElementById(this.BoxName);
		this.ObjBox = document.getElementById(this.DivName);

		this.ObjUl = this.ObjBox.getElementsByTagName("ul")[0];
		this.ObjLi = this.ObjUl.getElementsByTagName("li");
		
		// 배너 갯수를 파악하는 부분
		this.ObjLiNum = this.ObjLi.length;
		
		// 배너 부분의 총 넓이를 파악하는 부분
		this.TotalWidth = this.DateWidth * this.ObjLiNum;

		this.ObjBox.style.width = this.TotalWidth + "px";
		
		if ( this.ObjLiNum % this.DateNum == 0 ) {
			this.BannerEnd = this.TotalWidth - ( this.DateWidth * this.DateNum );
		} else {
			this.BannerEnd = this.TotalWidth - this.DateWidth;
		}
		
		// 배너를 쌓고 있는 부분의 박스에 Css를 입히기
		this._Style();
		
		if (jQuery("#banner_lst > ul").children().length>3){
			// Javascript 작동시 다음, 이전 버튼을 삽입하기
			this._ControlAdd();
		}
	
		// 다음, 이전 버튼을 클릭시 이동해야 할 위치 계산하기
		this.BannerPrevLeft = this.BannerEnd;
		this.BannerNextLeft = this.DateWidth * this.DateNum ;

		this.PrevBtnLinkImg.Num = this.BannerPrevLeft;
		this.PrevBtnLinkImg.onclick = function() {
			eval(this.fnName + "._moveFrame(" + this.Num + ",'prev')" );
			return false;
		}
		
		this.NextBtnLinkImg.Num = this.BannerNextLeft;
		this.NextBtnLinkImg.onclick = function() {
			eval(this.fnName + "._moveFrame(" + this.Num + ",'next')" );
			return false;
		}
	}
	
	this._ControlAdd = function() {
		this.NewControl = document.createElement('div');
		this.NewControl.id = "banner_btn";
		this.Obj.appendChild(this.NewControl);

		this.PrevBtnLink = document.createElement('a');
		this.PrevBtnLink.href = "#";
		this.PrevBtnLink.onclick = function() {
			return false;
		};
		this.NewControl.appendChild(this.PrevBtnLink);

		this.PrevBtnLinkImg = document.createElement('img');
		this.PrevBtnLinkImg.fnName = this.fnName;
		this.PrevBtnLinkImg.className = "btn_prev";
		this.PrevBtnLinkImg.src = "http://img.xinjiangnet.com.cn/templates/default/img/xjw_qnw/banner_btn_prev2.gif";
		if (this.altPrev) {
			this.PrevBtnLinkImg.alt = this.altPrev;
		} else {
			this.PrevBtnLinkImg.alt = "prev";
		}
		this.PrevBtnLink.appendChild(this.PrevBtnLinkImg);

		this.NextBtnLink = document.createElement('a');
		this.NextBtnLink.href = "#";
		this.NextBtnLink.onclick = function() {
			return false;
		};
		this.NewControl.appendChild(this.NextBtnLink);

		this.NextBtnLinkImg = document.createElement('img');
		this.NextBtnLinkImg.fnName = this.fnName;
		this.NextBtnLinkImg.className = "btn_next";
		this.NextBtnLinkImg.src = "http://img.xinjiangnet.com.cn/templates/default/img/xjw_qnw/banner_btn_next2.gif";
		if (this.altNext) {
			this.NextBtnLinkImg.alt = this.altNext;
		} else {
			this.NextBtnLinkImg.alt = "next";
		}
		this.NextBtnLink.appendChild(this.NextBtnLinkImg);

	}
	
	this._Style = function() {
		this.BoxStyle = this.ObjBox.parentNode;
		this.BoxStyle.className = "BannerListStyle";
		this.BoxUlStyle = this.ObjBox.getElementsByTagName("ul")[0];
		this.BoxUlStyle.className = "banner_style";
	}
	
	// 다음, 이전 버튼을 클릭시 배너를 이동 처리를 하는 부분
	this._moveFrame = function(val,fnmove) {
//		console.log(val);
		clearTimeout(this.GoodsSetTime);

		if ( Math.abs(val - this.BannerCurrent) > 5 ) {
			this.BannerCurrent = this.BannerCurrent + ( val - this.BannerCurrent ) * this.Speed;
		} else {
			this.BannerCurrent = val;
		}
		
		this.ObjUl.style.left = ( -1 * this.BannerCurrent ) + "px";
		
		if ( this.BannerCurrent != val ) {
			this.GoodsSetTime = setTimeout(this.fnName + "._moveFrame(" + val + ",'" + fnmove + "')",10);
		} else {
			this.CurrentPicNum = this.BannerCurrent / this.DateWidth;
			
			this.BannerPrevLeft = this.BannerCurrent - ( this.DateWidth * this.DateNum );
			this.BannerNextLeft = this.BannerCurrent + ( this.DateWidth * this.DateNum );
			
			if ( this.BannerCurrent == 0 ) {
				this.BannerPrevLeft = this.BannerEnd;
			} else if ( this.BannerCurrent >= this.TotalWidth - ( this.DateWidth * this.DateNum ) ) {
				this.BannerNextLeft = 0;
			}
			this.PrevBtnLinkImg.Num = this.BannerPrevLeft;
			this.PrevBtnLinkImg.onclick = function() {
				eval(this.fnName + "._moveFrame(" + this.Num + ",'prev')" );
				return false;
			}
			
			this.NextBtnLinkImg.Num = this.BannerNextLeft;
			this.NextBtnLinkImg.onclick = function() {
				eval(this.fnName + "._moveFrame(" + this.Num + ",'next')" );
				return false;
			}
		}
	}
}


(function($) {
	$(document).ready(function(){
		$("#banner_btn .btn_prev").hover(function() {
			$(this).attr("src", "http://img.xinjiangnet.com.cn/templates/default/img/xjw_qnw/banner_btn_prev2.gif");
		}, function() {
			$(this).attr("src", "http://img.xinjiangnet.com.cn/templates/default/img/xjw_qnw/banner_btn_prev2.gif");
		});
		$("#banner_btn .btn_next").hover(function() {
			$(this).attr("src", "http://img.xinjiangnet.com.cn/templates/default/img/xjw_qnw/banner_btn_next2.gif");
		}, function() {
			$(this).attr("src", "http://img.xinjiangnet.com.cn/templates/default/img/xjw_qnw/banner_btn_next2.gif");
		});
	});
})(jQuery); 

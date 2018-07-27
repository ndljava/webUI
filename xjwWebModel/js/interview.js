(function($) {
	var interview = {
		question: {
			add: function(contentid) {
				var nickname = $.cookie(COOKIE_PRE + 'username');
				var content = $("#content").val();
				if(islogin) {
					if(!nickname) {
						alert('请先登陆');
						return false;
					}
				} else {
					nickname = defaultname;
				}
				if(content == '') {
					alert('内容不能为空');
					return false;
				}
				$.getJSON(APP_URL + "?app=interview&controller=question&action=add&contentid=" + contentid + "&nickname=" + encodeURIComponent(nickname) + "&content=" + encodeURIComponent(content) + "&jsoncallback=?", function(response) {
					if(response.state) {
						if(response.ischeck) {
							alert('发送成功,等待审核');
						}
						interview.question.load();
						$('#content').val('');
						$('#content').focus();
					} else {
						alert(response.error);
					}
				});
			},

			load: function() {
				$.getJSON(APP_URL + '?app=interview&controller=question&action=load&contentid=' + contentid + '&jsoncallback=?', function(data) {
					if(data.length) {
						var html = '';
						$.each(data, function(key, r) {
							html += '<li class="item"><p class="content comment"><span>' + r.nickname + '：</span>' + r.content + '</p></li>';
						});
						$('#question').html(html);
						document.getElementById('question').scrollTop = document.getElementById('question').scrollHeight;
					} else {
						$('#question').html('<div class="interview-unstart-content-no">快来给嘉宾第一个提问吧</div>');
					}
				});
			},

			scroll: function(ms) {
				if(ms === undefined) ms = 10000;
				window.question_timer = setInterval(function() {
					interview.question.load();
				}, ms);
			},

			stop: function() {
				clearInterval(window.question_timer);
			}
		},

		chat: {
			load: function() {
				$.getJSON(APP_URL + '?app=interview&controller=chat&action=load&contentid=' + contentid + '&jsoncallback=?', function(data) {
					if(data) {
						var html = '';
						$.each(data, function(key, r) {
							if(r.guestid == null) {
								html += '<li class="item"><p class="content emcee"><span>主持人：</span>';
							} else {
								html += '<li class="item"><p class="content guest"><span><font color="' + $('#guest_' + r.guestid).attr('color') + '">' + $('#guest_' + r.guestid).attr('name') + '</font>：</span>';
							}
							html += r.content + '</p></li>';
						});
						$('#chat').html(html);
						document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
					} else {
						$('#chat').html('<div class="interview-unstart-content-no">暂无文字实录</div>');
					}
				});
			},

			scroll: function(ms) {
				if(ms === undefined) ms = 10000;
				window.chat_timer = setInterval(function() {
					interview.chat.load();
				}, ms);
			},

			stop: function() {
				clearInterval(window.chat_timer);
			}
		}
	};
	window.interview = interview;
})(jQuery);
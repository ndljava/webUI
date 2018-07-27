function onEndFinishJS(isFullScreen){
    if(!autoPlayList) return 0;
    var nextVideo = $('.list-point').find('li:has(a.now)').next();
    if(nextVideo.length == 0) return 0;
    if(typeof isFullScreen == 'undefined') return 1;
    var vid = nextVideo.children(':eq(1)').attr('vid');
    var player = nextVideo.children(':eq(1)').attr('player');
    var nextUrl = nextVideo.children(':eq(1)').attr('href');
    if(isFullScreen == '0'){
        window.location.href = nextUrl;
        return 0;
    }
    var playerLoad = false;
    if(player && vid){
        switch(player){
            case 'ctvideo':
                playerLoad = load_ctvideo({"vid":vid});
                break;
            case 'sobey':
                playerLoad = load_sobey({"vid":vid});
                break;
            default:
                break;
        }
    }
    if(playerLoad) {
        $('span.title').html(nextVideo.children(':eq(1)').html());
        nextVideo.prev().children().removeClass('now');
        nextVideo.children(':eq(1)').addClass('now');
    }
    if(playerLoad) return 1;
    window.location.href = nextUrl;
    return 0;
}

function load_ctvideo(options){
    if(typeof(ctVideoServer) == 'object'){
        window.setTimeout(function(){
            ctVideoServer.getMovie().loadAndPlay(options.vid);
        }, 100);
        return true;
    }
    return false;
}

function load_sobey(options){
    if(typeof(createPlayer) == 'function'){
        window.setTimeout(function(){
            var obj = 'MyVideoPlayer';
            var videoObj = document[obj] ? document[obj] : (window[obj] ? window[obj] : undefined);
            if(videoObj){
                if(typeof(videoObj.loadAndPlay) == "function") {
                    videoObj.loadAndPlay("video://vid:"+options.vid);
                }
            }
        }, 100);
        return true;
    }
    return false;
}

$(function(){
    // auto play
    autoPlayList = $('#autoplaylist').attr('checked');
    $('#autoplaylist').click(function(){
        autoPlayList = $(this).attr('checked');
        $.cookie(COOKIE_PRE+'videoAutoPlaylist', autoPlayList ? 1 : 0, {expires: 7, path: '/'});
    });
    if($.cookie(COOKIE_PRE+'videoAutoPlaylist') == 0 && $('#autoplaylist').attr('checked') == true){
        $('#autoplaylist').attr('checked', false);
    }
    // video list
    var ulist = $('.list-point').children(),
        pageBox = $('.page').find('tr:eq(0)'),
        pageSize = 10,
        pageTotal = 1,
        pageNow = 1;
    var total = ulist.length;
    pageTotal = Math.ceil(ulist.length/pageSize);
    pageBox.empty();
    if(pageTotal > 1){
        for(var i=0;i<pageTotal;i++){
            pageBox.append('<td><a href="javascript:void(0);" class="">'+(i+1)+'</a></td>');
        }
        pageBox.children().click(function(){
            pageNow = $(this).children().html();
            $(this).children().addClass('now');
            $(this).siblings().children().removeClass('now');
            ulist.hide();
            ulist.slice(pageSize*(pageNow-1), pageSize*(pageNow)).show();
        });
    }
    var videoNow = ulist.find('a').filter(function(){
        return this.getAttribute('href') === location.href;
    });
    if(videoNow.length == 0){
        $('.video-list').remove();
    }else{
        videoNow.addClass('now');
        var liNumber = ulist.index(videoNow.parent());
        pageNow = Math.ceil((liNumber+1)/pageSize);
        pageBox.children(':eq('+(pageNow-1)+')').click();
    }
});
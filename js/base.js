var page = {
    action: function() {

        i = 0;
        var arr = [];

        $('.list li').click(function() {
            i++;//点击计数开始
            var _this = $(this);
            var clickedIndex = _this.index();
            var clickedTitle = _this.children('img').eq(1).attr('title');
            var matchImg = $('.match img');
            _clicked = $('.list li');


            $('.hide').eq(clickedIndex).css('display','block');


            if(i>1)//第二次点击
            {
                y = clickedTitle;
                n = clickedIndex;

                if (x==y & m!=n ){
                    //国旗和货币匹配而非同一张
                        matchImg.attr('src', 'img/' + y + '_match.png').css('display', 'block');
                        _this.eq(m).children('img').eq(1).css('display', 'block');
                        _this.eq(n).children('img').eq(1).css('display', 'block');
//                        _clicked = $('.list li');
//                        _clicked.eq(m).unbind('click');
//                        _clicked.eq(n).unbind('click');

                        arr.push(m);
                        arr.push(n);
//                      console.log(arr);


                }else if(x==y & m==n ){
                    //如果国旗和货币匹配而且是同一张
                    _this.eq(m).children('img').eq(1).css('display', 'block');
                }
                else {
                    //国旗和货币不匹配
                    if($.inArray(m,arr)>=0 & $.inArray(n,arr)>=0){
                        //点击的两张都是已翻开的牌
                        _this.eq(m).children('img').eq(1).css('display', 'block');
                        _this.eq(n).children('img').eq(1).css('display', 'block');
                    }else if($.inArray(m,arr)<0 & $.inArray(n,arr)<0) {
                        //点击的两张都是未翻开的牌
                        setTimeout("_clicked.eq(m).children('img').eq(1).css('display','none')", 500);
                        setTimeout("_clicked.eq(n).children('img').eq(1).css('display','none')", 500);
                    }else if($.inArray(m,arr)<0 ){
                        //判断m牌是否已翻开，翻开的牌不关闭，未翻开的牌关闭
                        setTimeout("_clicked.eq(m).children('img').eq(1).css('display','none')", 500);
                        _this.eq(n).children('img').eq(1).css('display', 'block');
                    }else{//判断n牌是否已翻开，翻开的牌不关闭，未翻开的牌关闭
                        setTimeout("_clicked.eq(n).children('img').eq(1).css('display','none')", 500);
                        _this.eq(m).children('img').eq(1).css('display', 'block');
                    }
                }
                i = 0;//点击计数归零
            }
            else//第一次点击
            {
                x = clickedTitle;
                m = clickedIndex;
            }
        });
    }
};
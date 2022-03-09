var Links = {
    setColor:function(color) {
        // var alist = document.querySelectorAll('a') // a태그 전부 다 불러온 것을 변수로 지정
        // var i = 0;
        // while(i < alist.length) {
        //     alist[i].style.color = color;
        //     i++
        // }
        //이것과 똑같은 걸 짜게 됨
        $('a').css('color', color);
    }
}

var Body = {
    setColor:function (color) {
        // document.querySelector('body').style.color= color;
        $('body').css('color', color);
    },
 setBackgroundColor:function (color) {
    // document.querySelector('body').style.backgroundColor= color;
    $('body').css('backgroundColor', color);
    // 백그라운드컬러값을, 파라미터 컬러값으로
    }
}

function nightDayHandler(self2) {
  var target = document.querySelector('body');
    if(self2.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self2.value = 'day';

        Links.setColor('yellow')
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self2.value = 'night';

        Links.setColor('blue');
    }
  }
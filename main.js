$(".block1").html("更新");

$(".block2").css("background-color","#eee");
$(".block2").css("border-radius","100%");

$(".block3").addClass("bigblock");
$(".block4").removeClass("bigblock");

$(".block5").html("<div class='block'>商品1</div><div class='block'>商品2</div>");
$(".block5").prepend("商品清單");
$(".block5").append("總共有2個");

$(".block6").text("<div>123</div>")





$(".buybtn").click(function(){
        $(".buybtn").text("完成購買")
        $(".buybtn").addClass("buyed");
});

$(".selbtn").click(function () { 
    $(".show_info").text("已經選擇"+$(this).text()); // $(this).text()表示要抓取上面的元素
    var cata = $(this).attr("data-cata");
    $(".show_cata").text(cata);
    if(cata=="flower"){
        $(".show_cata").append("Bingo");
    }
    else{
        $(".show_cata").append("哭哭");
    }

    //   $(".show_cata").text($(this).attr("data-cata"));
    //     if($(this).attr("data-cata")=="flower"){

    //         $(".show_cata").append("他買的是花!!");

    //     }
    //     else{
    //         $(".show_cata").append("哭哭");
    //     }  
});

$(".hoverbox").mouseenter(function(){
    $(this).text("使用者有興趣!!");
});
$(".hoverbox").mouseleave(function(){
    $(this).text("使用者沒興趣...");
});

setTimeout(function(){
    $(".timerbox").css("background-color","#f24");
    $(".timerbox").css("margin-left","50px");
    $(".timerbox").css("color","#fff");

},5000);

var sec=1;
setInterval(function(){
    $(".countbox").text("經過了:"+sec+"秒");
    sec=sec+1;
},1000);

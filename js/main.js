$(function(){
  /*=================================================
  gallery hover action
  ===================================================*/
  $("#thumbnail img").on('click', function(){
    $("#thumbnail img").css('border','none');
    $(this).css('border','6px solid #ffffff');
    // 画像パス取得
    let img_src = $(this).attr("src");
    // 表示画像と同じサムネイルがクリックされた際は画像切り替えを実行しない
    // （メイン画像のsrcと九クリックされた画像のsrcが異なる場合のみ実行）
    if($("#slide img").attr("src") != img_src) {
      // ※「フェードアウトが完了した後に実行」のように、何かの処理が終わったあとに実行させたい場合、コールバック関数を使用
      $("#slide img").fadeOut(200, function() {
          $("#slide img").attr({src:img_src});
          $("#slide img").fadeIn(200);
      })
    }
  });
  /*=================================================
  nav open close action
  ===================================================*/
  $('.menu-open').click(function(){
    $('nav').addClass('nav-open');
  });
  $('.menu-close').click(function(){
    $('nav').removeClass('nav-open');
  });

  /*=================================================
  form action
  ===================================================*/
  $('.btn-mail').click(function(){
    if ($('.toggle-message').text() === 'Open form.') {
      $('.toggle-message').text('Close form.');
    } else {
      $('.toggle-message').text('Open form.');
    }
    $('#toggle-area').slideToggle('slow');
  });

  /*=================================================
  alert check
  ===================================================*/
  $('.form-send').click(function check(){
    if (mail_form.name.value == "" || mail_form.mail.value == "" || mail_form.address.value == ""){
        alert("未入力の必須項目があります。"); //エラーメッセージを出力
        return false; //送信ボタン本来の動作をキャンセルします
    } else {
        return true; //送信ボタン本来の動作を実行します
    }
  });
});

/*=================================================
scroll-in action
===================================================*/
let scrollElem = document.querySelectorAll('.fade-in');
let scrollAnimation = function() {
  for(let i = 0; i < scrollElem.length; i++) {
    let trigger = 50;
    if (window.innerHeight > scrollElem[i].getBoundingClientRect().top + trigger) {
      scrollElem[i].classList.add('scroll-in');
    }
  }
}
window.addEventListener('load', scrollAnimation);
window.addEventListener('scroll', scrollAnimation);

/*=================================================
touch device :hover -> :active
===================================================*/
document.getElementsByTagName('body')[0].setAttribute('ontouchstart',''); 
var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
if (touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;
      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;
        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          //styleSheet.deleteRule(ri);
          styleSheet.rules[ri].selectorText = styleSheet.rules[ri].selectorText.replace(':hover', ':active');
        }
      }
    }
  } catch (ex) {}
}

/*=================================================
logo animation
===================================================*/
$(window).on('load',function(){
  $("#splash").delay(1000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(800).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});
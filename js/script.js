$(function(){
  // ドロワーメニューの利用宣言
    $(document).ready(function () {
        $('.drawer').drawer();
    });
});

$(function(){
  // スムーススクロール
  // #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function () {
  // スムーススクロールの処理を書く
  });
});

$(function(){
  // #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function () {
      // 移動速度を指定（ミリ秒）
      let speed = 300;
      // hrefで指定されたidを取得
      let id = jQuery(this).attr("href");
      // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
      let target = jQuery("#" == id ? "html" : id);
      // ページのトップを基準にターゲットの位置を取得
      let position = jQuery(target).offset().top;
      // ターゲットの位置までspeedの速度で移動
      jQuery("html, body").animate({
              scrollTop: position
          },
          speed
      );
      return false;
    });
});

$(function(){
  // wow利用宣言
  new WOW().init();
});

$(function(){
  // 送信ボタン反転 
  jQuery(function ($) {
    $('form[data-validate]').on('input', function () {
        $(this).find(':submit').attr('disabled', !this.checkValidity());
    });
});
});
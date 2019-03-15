$(() => {
  // グローバルナビゲーション
  if($('.g-nav').length) {
    let str = '';
    str += '<ul class="g-nav__list">';
    str += '<li class="g-nav__item">';
    str += '<a class="g-nav__link" href="index.html">未来創造展2018アーカイブアルバム</a>';
    str += '</li>';
    str += '<li class="g-nav__item">';
    str += '<a class="g-nav__link" href="member.html">メンバ紹介</a>';
    str += '</li>';
    str += '<li class="g-nav__item">';
    str += '<a class="g-nav__link" href="system.html">システム</a>';
    str += '</li>';
    str += '<li class="g-nav__item">';
    str += '<a class="g-nav__link" href="booth.html">ブース</a>';
    str += '</li>';
    str += '<li class="g-nav__item">';
    str += '<a class="g-nav__link" href="image_illustration.html">イメージイラスト</a>';
    str += '</li>';
    str += '<li class="g-nav__item">';
    str += '<a class="g-nav__link" href="album.html">アルバム</a>';
    str += '</li>';
    str += '<li class="g-nav__item">';
    str += '<a class="g-nav__link" href="file_library.html">添付ファイル</a>';
    str += '</li>';
    str += '</ul>';
    $('.g-nav').html(str);
  }
});
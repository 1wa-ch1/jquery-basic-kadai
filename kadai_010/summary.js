$(function() {
  // 1.ボタンを押すと、文字色が変わる //
  $('#change-color').on('click', () => {
    $('#target').css('color', 'red');
  });
  
  // 2.ボタンを押すと、文字内容が変わる //
  $('#change-text').on('click', () => {
    $('#target').text('Hello!');
  });

  // 3.ボタンを押すと、フェードアウトで文字が消える //
  $('#fade-out').on('click', () => {
    $('#target').fadeOut();
  });

  // 4.ボタンを押すと、フェードインで文字が現れる //
  $('#fade-in').on('click', () => {
    $('#target').fadeIn();
  });

});

$(function(){
  $('.ex8').bind('input',function(){
    var fname = $('.ex8 .name1').val()
    var lname = $('.ex8 .name2').val()
    var gender = $('.ex8 input:checked').val()
    $('.ex8 .print').html(`이름: ${fname}${lname}, 성별: ${gender}`)
  })
})
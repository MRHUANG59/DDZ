$(function() {
    $('#yes').click(function(event) {
        modal('愿年复年，我始终如少年，你始终如初见！温馨提示有隐藏彩蛋(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });

$('#yes3').click(function(event) {
        modal('明年回来过年吧！温馨提示有隐藏彩蛋(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });

$('#yes1').click(function(event) {
        modal('愿年复年，我始终如少年，你始终如初见！温馨提示有隐藏彩蛋(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });

$('#yes2').click(function(event) {
        modal('愿常欣喜，常开心，有趣有盼，无灾无难！温馨提示有隐藏彩蛋(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });

   });

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}

$(function () {
    $('#vidBox').VideoPopUp({
        backgroundColor: "#17212a",
        opener: "video1",
            maxweight: "340",
            idvideo: "v1"
        });
});
$('#rating').likeDislike({
    reverseMode: false,
    disabledClass: 'disable',
    click: function (value, l, d, event) {
        var likes = $(this.element).find('.likes');
        var dislikes =  $(this.element).find('.dislikes');

        likes.text(parseInt(likes.text()) + l);
        dislikes.text(parseInt(dislikes.text()) + d);
    }
});
$(".tab-div-new p span").click(function() {
		$(this).addClass('tab-front')
			.siblings()
			.removeClass('tab-front');
		var index = $(this).index();
		$(".form-table01").eq(index).css("display", "table")
			.siblings()
			.css("display", "none");
		$(".button-div").css("display", "block");

	});
$(".button").click(function(){
	$.ajax({
			url: "/api/new",
			type: "post",
			data: {
				shopname: $(".left").val(),
				shopprice: $(".shopprice").val()
			},
			success: function(res) {
				console.log(res);
				}
		
		})
})

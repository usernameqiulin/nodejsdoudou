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
<<<<<<< HEAD
				console.log(res);
=======
				// query.exec(docs){
				console.log(res);
				// }
>>>>>>> 03c6407366c02ffbe36f42e66881569f34a0ad05
				}
		
		})
})

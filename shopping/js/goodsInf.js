var goodsID = window.location.hash.slice(1);
window.onload = function() {
	var userID = localStorage.getItem('userID');
	$.ajax({
		type: "get",
		url: " http://datainfo.duapp.com/shopdata/getGoods.php",
		dataType: "jsonp",
		data: {
			goodsID: goodsID
		},
		success: function(data) {
			var detail = data[0].detail.split('。');
			var imgsUrl = data[0].imgsUrl.replace(/"/g, '').replace('[', '').replace(']', '').split(',');
			var goodsBenUrl = data[0].goodsBenUrl.replace(/"/g, '').replace('[', '').replace(']', '').split(',');
			var buynumber = data[0].buynumber;
			for(var i = 0; i < goodsBenUrl.length; i++) {
				$('.swiper-wrapper').html($('.swiper-wrapper').html() +
					`<div class="swiper-slide"><img src="` + goodsBenUrl[i] + `"/></div>`);
			};
			$('#listname').html(`<h4>` + data[0].goodsName + `</h4>`);
			$('#price').html(`&yen;&nbsp;` + data[0].price);
			$('#xiaoliang').html(buynumber);
			for(var i = 0; i < detail.length; i++) {
				$('#goodsinfo').html($('#goodsinfo').html() +
					`<li>` + detail[i] + `</li>`);
			};
			for(var i = 0; i < imgsUrl.length; i++) {
				$('#imgshow').html($('#imgshow').html() +
					`<img src ="` + imgsUrl[i] + `">`);
			};

			var mySwiper = new Swiper('.swiper-container', {
				autoplay: false, //可选选项，自动滑动
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				},
			});
		}
	});
	var count = 0;
	$('.joincart').click(function() {
		count++;
		$.ajax({
			type: "get",
			url: "http://datainfo.duapp.com/shopdata/updatecar.php",
			dataType: 'json',
			data: {
				userID: userID,
				goodsID: goodsID,
				number: +count
			},
			success: function(data) {
				console.log(data);
			}
		});
		$('#myModal').modal('show');
		setTimeout("$('#myModal').modal('hide')", 1000);
	});
}
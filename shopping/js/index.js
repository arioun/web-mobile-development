$(document).ready(function() {
	if(localStorage.getItem('animation') == null) {
		window.location.href = "begin.html";
	}
	$.ajax({
		type: 'get',
		url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
		dataType: 'jsonp',
		success: function(data) {
			console.log(data)
			for(var i = 0; i < data.length; i++) {
				$('#goodsList').html($('#goodsList').html() +
					`<li class="col-xs-6" id="` + data[i].goodsID + `">
							<img src="` + data[i].goodsListImg + `">
							<p>` + data[i].goodsName + `</p>
							<span>&yen;&nbsp;` + data[i].price + `</span>
						</li>`)
			}
			$('#goodsList>li').on('click', function() {
				window.location.href = 'goodsInf.html#' + this.getAttribute('id');
			})
		}
	});
});

window.onload = function() {

	var mySwiper = new Swiper('.swiper-container', {
		autoplay: true, //可选选项，自动滑动
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
	});
	$('#srcinf').click(function() {
		window.location.href = 'search.html';
	});
}
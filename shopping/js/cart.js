var userID = localStorage.getItem('userID');
$.ajax({
	type: 'get',
	url: 'http://datainfo.duapp.com/shopdata/getCar.php',
	dataType: 'jsonp',
	data: {
		userID: userID
	},
	success: function(data) {
		console.log(data);
		sessionStorage.setItem('length',data.length);
		for(var i = 0; i < data.length; i++) {
			$('.cart').html($('.cart').html() +
				`<li class="cart-list a` + data[i].goodsID + `">
					<div class="col-xs-1 cart-check"><input type="checkbox"class="checkbox"name="` + data[i].price + `"/></div>
					<div class="col-xs-5 goods-img"><img src="` + data[i].goodsListImg + `"name="` + data[i].goodsID + `"/></div>
					<div class="col-xs-6 detail">
						<h5 class="col-xs-12">` + data[i].goodsName + `</h5>
						
						<span class="num col-xs-12">
							<ul class="btn-numbox">
            				<li><span class="number">数量</span></li>
            				<li><ul class="count">
                    			<li><span id="num-jian`+i+`" class="num-jian">-</span></li>
                    			<li><input type="text" class="input-num" id="input-num`+i+`" value="` + data[i].number + `"name="` + data[i].goodsID + `"/></li>
                    			<li><span id="num-jia`+i+`" class="num-jia">+</span></li>
                			</ul></li></ul>
						</span>
						<span class="price col-xs-6">&yen;` + data[i].price + `</span>
						<span class="col-xs-6 deletespan"><a class="delete" name="` + data[i].goodsID + `"><img src="img/delete.png"/></a></span>
					</div>
				</li>`
			);
			$('.goods-img>img').on('click', function() {
				window.location.href = 'goodsInf.html#' + this.getAttribute('name');
			});
		}
	}
});

window.onload = function() {
	if(userID == null) {
		$('#myModal').modal('show');
		setTimeout("$(location).attr('href', 'open.html')", 1000);
	};
	for (var i=0;i<sessionStorage.getItem('length');i++) {
		console.log(document.getElementById("input-num"+i).value);
		document.getElementById("num-jia"+i).onclick= function() {
		document.getElementById("input-num"+i).getAttribute("value") = 3;
		getPrice();
		$.ajax({
			type: "get",
			url: "http://datainfo.duapp.com/shopdata/updatecar.php",
			dataType: 'json',
			data: {
				userID: userID,
				goodsID: document.getElementById("input-num"+i).getAttribute('name'),
				number: document.getElementById("input-num"+i).value
			},
			success: function(data) {
				console.log(data);
			}
		});
	}
	document.getElementById("num-jian"+i).onclick = function() {
		var goodsID = document.getElementById("input-num"+i).getAttribute('name');
		if(document.getElementById("input-num"+i).value <= 0) {
			document.getElementById("input-num"+i).value = 0;

		} else {
			document.getElementById("input-num"+i).value = parseInt(document.getElementById("input-num"+i).value) - 1;
			getPrice();
			$.ajax({
				type: "get",
				url: "http://datainfo.duapp.com/shopdata/updatecar.php",
				dataType: 'json',
				data: {
					userID: userID,
					goodsID: goodsID,
					number: document.getElementById("input-num"+i).value
				},
				success: function(data) {
					if(parseInt(document.getElementById("input-num"+i).value) == 0) {
						$('.a' + goodsID).remove();
						getPrice();
					}
				}
			});
		}
	}
	document.getElementById("input-num"+i).onchange = function() {
		document.getElementById("input-num"+i).value = parseInt(document.getElementById("input-num"+i).value);
		var goodsID = document.getElementById("input-num"+i).getAttribute('name');
		$.ajax({
			type: "get",
			url: "http://datainfo.duapp.com/shopdata/updatecar.php",
			dataType: 'json',
			data: {
				userID: userID,
				goodsID: document.getElementById("input-num"+i).getAttribute('name'),
				number: document.getElementById("input-num"+i).value
			},
			success: function(data) {
				if(parseInt(document.getElementById("input-num"+i).value) == 0) {
					$('.a' + goodsID).remove();
				}
			}
		});
	}
	} //for
	
	
	
	$('.delete').click(function() {
		var goodsID = this.getAttribute('name');
		$.ajax({
			type: "get",
			url: "http://datainfo.duapp.com/shopdata/updatecar.php",
			dataType: 'json',
			data: {
				userID: userID,
				goodsID: goodsID,
				number: 0
			},
			success: function(data) {

				window.location.href = 'cart.html';
			}
		});
	})

	$('#all').click(function() {
		if($(this).is(':checked')) {
			$("input[type='checkbox']").attr("checked", true);
		} else {
			$('.checkbox').attr("checked", false);
		}
		getPrice();
	})
	$('.checkbox').click(function() {
		getPrice();
	})

	function getPrice() {
		var s = 0.0;
		$("input[type='checkbox']").each(function() {
			if(this.checked == true) {
				var p = $(this).attr("name");
				if(input_num.value > 0) {
					s += Number(p) * input_num.value;
				} else {
					s += Number(p);
				}
			}
		})
		$("#allprice").text(s);
	};
};
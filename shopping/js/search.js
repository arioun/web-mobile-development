window.onload=function(){
	$('#srcbtn').click(function(){
			var srcinf = encodeURI($('#srcinf').val());
			console.log(srcinf)
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",
				dataType:'jsonp',
				data:{selectText:srcinf},
				success:function(data){
					var goodsID = data[0].goodsID;
					$('#goodsList').html(
						`<li class="col-xs-6" id="`+goodsID+`">
							<img src="`+data[0].goodsListImg+`">
							<p>`+data[0].goodsName+`</p>
							<span>&yen;&nbsp;`+data[0].price+`</span>
						</li>`)
					$('#goodsList>li').on('click',function(){
					window.location.href='goodsInf.html#'+this.getAttribute('id');
				})
				}
			});
		})
}

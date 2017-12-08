var userID = localStorage.getItem('userID');
$.ajax({
			type:'get',
			url:'http://datainfo.duapp.com/shopdata/getCar.php',
			dataType:'jsonp',
			data:{userID:userID},
			success:function(data){
				console.log(data);
				for (var i=0;i<data.length;i++) {
					$('.cart').html($('.cart').html()+
					`<li class="cart-list `+data[i].goodsID+`">
					<div class="col-xs-1 cart-check"><input type="checkbox"class="checkbox"name="`+data[i].price+`"/></div>
					<div class="col-xs-5 goods-img"><img src="`+data[i].goodsListImg+`"name="`+data[i].goodsID+`"/></div>
					<div class="col-xs-6 detail">
						<h5>`+data[i].goodsName+`</h5>
						<span class="price">&yen;`+data[i].price+`</span>
						<span class="num">
							<ul class="btn-numbox">
            				<li><span class="number">数量</span></li>
            				<li><ul class="count">
                    			<li><span id="num-jian" class="num-jian">-</span></li>
                    			<li><input type="text" class="input-num" id="input-num" value="`+data[i].number+`"name="`+data[i].goodsID+`"/></li>
                    			<li><span id="num-jia" class="num-jia">+</span></li>
                			</ul></li></ul>
						</span>
						<span class="delete"><img src="img/delete.png"/></span>
					</div>
				</li>`
					);
				$('.goods-img>img').on('click',function(){
					window.location.href='goodsInf.html#'+this.getAttribute('name');
				});
				}
			}
});
window.onload=function(){
	
	var num_jia = document.getElementById("num-jia");
    var num_jian = document.getElementById("num-jian");
    var input_num = document.getElementById("input-num");
    
    num_jia.onclick = function() {
            input_num.value = parseInt(input_num.value) + 1;
            $.ajax({
            	type:"get",
            	url:"http://datainfo.duapp.com/shopdata/updatecar.php",
            	dataType:'json',
            	data:{userID:userID,goodsID:input_num.getAttribute('name'),number:input_num.value},
            	success:function(data){console.log(data);}
            });
        }
    num_jian.onclick = function() {
        var goodsID = input_num.getAttribute('name');	
            if(input_num.value <= 0) {
                input_num.value = 0;}
            else {
                input_num.value = parseInt(input_num.value)-1;
                $.ajax({
            	type:"get",
            	url:"http://datainfo.duapp.com/shopdata/updatecar.php",
            	dataType:'json',
            	data:{userID:userID,goodsID:goodsID,number:input_num.value},
            	success:function(data){
            		if(parseInt(input_num.value)==0){$('.'+goodsID).remove();}}
            	});
            }
        }
    input_num.onchange=function(){
        	input_num.value = parseInt(input_num.value);
        	var goodsID = input_num.getAttribute('name');
        	$.ajax({
            	type:"get",
            	url:"http://datainfo.duapp.com/shopdata/updatecar.php",
            	dataType:'json',
            	data:{userID:userID,goodsID:input_num.getAttribute('name'),number:input_num.value},
            	success:function(data){console.log(data);if(parseInt(input_num.value)==0){$('.'+goodsID).remove();}}
            	});
        }
    $('.delete').click(function(){
    	 var goodsID = input_num.getAttribute('name');
        	$.ajax({
            	type:"get",
            	url:"http://datainfo.duapp.com/shopdata/updatecar.php",
            	dataType:'json',
            	data:{userID:userID,goodsID:input_num.getAttribute('name'),number:0},
            	success:function(data){$('.'+goodsID).remove();}
            	});
        	
        })

	$('#all').click(function(){
		if ($(this).is(':checked')) {
            $("input[type='checkbox']").attr("checked",true);
        }
        else {
            $('.checkbox').attr("checked", false);
        }
        getPrice();
	})
	$('.checkbox').click(function(){
		getPrice();
	})
	function getPrice(){
		var s = 0.0;
		$("input[type='checkbox']").each(function(){
			if(this.checked==true){
				var p = $(this).attr("name");
				if (input_num.value>0) {
					s += Number(p)*input_num.value;
				} else{
					s += Number(p);
				}
				
			}
		})
		$("#allprice").text(s);
	};
};
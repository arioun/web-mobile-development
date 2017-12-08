window.onload=function(){
	$('#fname').focus(function(){
			$('#uidtest').html('');
		})
		$('#pwd').focus(function(){
			$('#pwdtest').html('');
		})
		$('#buton').click(function(){
				var id = $('#fname').val();
				var pwd = $('#pwd').val();
				$.ajax({
				type:"get",
				url:"https://datainfo.duapp.com/shopdata/userinfo.php",
				data:{status:'login',userID:id,password:pwd},
				dataType:'json',
				success:function(data){
					if(data == 0){
					$('#uidtest').html('用户名不存在');
				}
				else if(data == 2){
					$('#pwdtest').html('密码错误');
				}
				else{
					localStorage.setItem('userID',id);
					$('#myModal').modal('show');
            		setTimeout("$('#myModal').modal('hide')",1000);
            		setTimeout("$(location).attr('href', 'index.html')",1500);
				}
				}
			});
			})
}

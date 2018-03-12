window.onload = function() {
	$('#fname').focus(function() {
		$('#uidtest').html('');
	})
	$('#fname').blur(function() {
		var uid = $('#fname').val();
		$.ajax({
			type: "get",
			url: "http://datainfo.duapp.com/shopdata/getuser.php",
			data: {
				userID: uid
			},
			dataType: 'jsonp',
			success: function(data) {
				if(data == 0) {
					$('#uidtest').html('用户名可用');
				} else {
					$('#uidtest').html('用户名不可用');
				}
			}
		});
	})
	$('#pwd').focus(function() {
		$('#pwdtest').html('');
	})
	$('#pwdsecond').focus(function() {
		$('#pwdtest').html('');
	})

	$('#buton').click(function() {
		var uid = $('#fname').val();
		var pwd = $('#pwd').val();
		var pwds = $('#pwdsecond').val();
		if(pwd != pwds) {
			$('#pwdtest').html('两次密码输入不一致');
		} else if(pwd == pwds) {
			$.ajax({
				type: "get",
				url: "http://datainfo.duapp.com/shopdata/userinfo.php",
				data: {
					status: 'register',
					userID: uid,
					password: pwd
				},
				dataType: 'json',
				success: function(data) {

					if(data == 1) {
						$('#myModal').modal('show');
						setTimeout("$('#myModal').modal('hide')", 1000);
						setTimeout("$(location).attr('href','login.html')", 1500);
					} else if(data == 0) {
						$('#uidtest').html('用户名重复');
					} else if(data == 2) {
						alert('数据库报错');
					}
				}
			});
		}

	});
}
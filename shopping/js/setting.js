window.onload = function() {
	var userID = localStorage.getItem('userID');
	//if(userID == null) {
	//	$('#myModal').modal('show');
	//	setTimeout("$(location).attr('href', 'open.html')", 1000);
	//}
	else{
		$('.inf').html(
			`<h2>`+userID+`</h2>
			<p>会员名：`+userID+`</p>`
		)
	}
	$('#exit').click(function() {
		localStorage.removeItem('userID');
		window.location.href = "open.html";
	});
}
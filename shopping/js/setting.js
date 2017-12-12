window.onload=function(){
	var userID = localStorage.getItem('userID');
	if(userID == null){
    	$('#myModal').modal('show');
    	setTimeout("$(location).attr('href', 'open.html')",1000);
	}
	$('#exit').click(function(){
			localStorage.clear();
			window.location.href="open.html";
		})
}

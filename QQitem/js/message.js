$(document).ready(function(){
				$(document).on('pagecreate',function(){
					$('ulList').on('click','li',function(){
						$(this).hide();
					})
				})
			})
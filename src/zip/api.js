
//$("button[data-btn-type='ajax']")[0]

//http://zipcloud.ibsnet.co.jp/api/search?zipcode=2500011
$(function(){
	var send_data = {};
	$('body').on('click', 'button[data-btn-type=ajax]', function(){
		console.log('click btn');
		$.ajax({
			url: 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=2500011',
			dataType: "jsonp",
			data : send_data,
			success: function(res){
				if(res.result === 'OK') {
					console.log(res);
				} else {
					console.log(res);
				}
				return false;
			},
			error: function(){
				console.log("error occured");
			}
		});
	});
});


$(function(){
	$.ajax({
		url:"js/img.json",
		type:"get",
		data:{},
		async:false,
		datatype:"json"	,	
	}).done(function (result) {
		console.log(result)
		var image=result[0].data.list
		console.log(image)
 		for(var i=0;i<image.length;i++){
			$('.zhongco').append(`<li><img src="${image[i].coverImg}"><p>${image[i].name}</p></li>`)
 		}
		$('.zhonglei li').click(function () {
			var Name=$(this).attr('name')
			console.log(Name)
			$('.zhonglei li').removeClass('active')
			$(this).addClass('active')
			$('.zhongco').empty()
			$.each(result,function (i) {
				var List=result[i].data.list
				console.log(List)
				$.each(List,function (j) {
					// console.log(List[j].type)
					if(Name==List[j].type){
						$('.zhongco').append(`<li><img src="${List[j].coverImg}"><p>${List[j].name}</p></li>`)
						
					}else if(Name==List[j].class){
						$('.zhongco').append(`<li><img src="${List[j].coverImg}"><p>${List[j].name}</p></li>`)
					}
				})
			})
			
			
		})
		
		
		
	})






	
})
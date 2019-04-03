$(function(){
	var now=0
	var timer=null
	$('.lunbt span').hover(function(){
		now=$(this).index('.lunbt span')
		clearInterval(timer)
		move()
	},function(){
		timer=setInterval(move1,2000)
	})
	function move(){
		$('.lunbt span').removeClass('btn')
		$('.lunbt span').eq(now).addClass('btn')
		$('.lunboleft ul').css('left',now*-650)
	}
	function move1() {
		now++
		if(now==$('.lunboleft ul li').length){
			now=0
		}
		move()
	}
	timer=setInterval(move1,2000)
	
	
	$('.ulco ul').eq(0).show().siblings().hide()
	$('.lunrititle ul li').mouseover(function(){
		$('.lunrititle ul li').removeClass('on')
		$(this).addClass('on')
		$('.ulco ul').eq($(this).index()).show().siblings().hide()
	})
	
	
	
	//  职业介绍 角色介绍
	$('.zhiyeco div').eq(0).show().siblings().hide()//让第一张大图显示其余隐藏
	$('.zhiyetitle ul li').click(function () {
		$('.zhiyetitle ul li').removeClass('cur')
		$(this).addClass('cur')
		$('.zhiyeco>div').eq($(this).index()).show().siblings().hide()
	})
	$('.zhiyetitle ul li:last').click(function () {
		alert("即将跳转页面")
		$('.zhiyeco div').eq(0).show().siblings().hide()
	})
	//SSR SR R 按钮
	var acou=0
	$.ajax({
		url:"js/jiaose.json",
		type:"get",
		data:{},
		async:false,
		datatype:"json"		
	}).done(function(result){
		console.log(result)
		var Img=result.data.list
		console.log(Img)
		for(var i=0;i<Img.length;i++){
			$('.matcoo ul').append(`<li><img src="${Img[i].bgImg}"><img src="${Img[i].onImg}"><span>${Img[i].name}</span></li>`)
			$('.matcoo ul li:first').find('img:eq(1)').show().siblings().hide()
			$('.matcoo ul li:first').find('span').show().addClass('underline')
			$('.jiaoseco').append(`<img src="${Img[i].coverImg}" class="conl">`)
			$('.conl').eq(0).show().siblings('.conl').hide()
			$('.jiaoword').append(`${Img[i].describe}`)
			$('.wordd').eq(0).show().siblings('.wordd').hide()
		}
		$('.matit ul li').click(function () {
			acou=$(this).index()
			if(acou<=3){
			$('.matit ul li').removeClass('al')
			$(this).addClass('al')
			$('.matcoo ul').show().siblings().hide()
			var tit = $(this).attr('title')
			$('.jiaoseco img').remove(".conl")
			$('.jiaoword div').remove(".wordd")
			$('.matcoo ul').empty()
			for(var i=0;i<Img.length;i++){
				// console.log(Img[i].type)
				if(tit==Img[i].type){
					$('.jiaoseco').prepend(`<img src="${Img[i].coverImg}" class="conl">`)
					$('.conl').eq(0).show().siblings('.conl').hide()
					$('.jiaoword').prepend(`${Img[i].describe}`)
					$('.wordd').eq(0).show().siblings('.wordd').hide()
					$('.matcoo ul').prepend(`<li><img src="${Img[i].bgImg}"><img src="${Img[i].onImg}"><span>${Img[i].name}</span></li>`).append(`<li><img src="${Img[6].bgImg}"></li>`)
					// console.log($('.matcoo ul li:first img:eq(1)').index())
 					//$('.matcoo ul li:first').find('img:eq(1)').show().siblings().hide()
					//$('.matcoo ul li:first').find('span').show().addClass('underline')
				}else if(tit==Img[i].class){
					$('.jiaoseco').append(`<img src="${Img[i].coverImg}" class="conl">`)
					$('.conl').eq(0).show().siblings('.conl').hide()
					$('.jiaoword').append(`${Img[i].describe}`)
					$('.wordd').eq(0).show().siblings('.wordd').hide()
					$('.matcoo ul').append(`<li><img src="${Img[i].bgImg}"><img src="${Img[i].onImg}"><span>${Img[i].name}</span></li>`)
					$('.matcoo ul li:first').find('img:eq(1)').show().siblings().hide()
					$('.matcoo ul li:first').find('span').show().addClass('underline')
				}
			}
			//小图按钮
			$('.matcoo ul li').click(function () {
				alck=$(this).index()//获取到当前下标
				console.log(alck)
				$('.matcoo ul li img:odd').hide().siblings().show()//当点击时让全部的图片隐藏，背景图显示
				$(this).find('img:odd').show().siblings().hide()//让当前的的背景图隐藏，图片显示
				$('.conl').eq($(this).index()).show().siblings('.conl').hide()//当点击小图时让对应的大图显示
				$('.wordd').eq($(this).index()).show().siblings('.wordd').hide()//当点击小图时让对应的文字显示
				$('.matcoo ul li span').removeClass('underline').show()
				$('.matcoo ul li span').eq($(this).index()).addClass('underline').show()
			})
			}else{
				alert('敬请期待')
			}
		})
		//小图按钮
		$('.matcoo ul li').click(function () {
			alck=$(this).index()//获取到当前下标
			$('.matcoo ul li img:odd').hide().siblings().show()//当点击时让全部的图片隐藏，背景图显示
			$(this).find('img:odd').show().siblings().hide()//让当前的的背景图隐藏，图片显示
			$('.conl').eq($(this).index()).show().siblings('.conl').hide()//当点击小图时让对应的大图显示
			$('.wordd').eq($(this).index()).show().siblings('.wordd').hide()//当点击小图时让对应的文字显示
			$('.matcoo ul li span').removeClass('underline').show()
			$('.matcoo ul li span').eq($(this).index()).addClass('underline').show()
		})
		
	})
	console.log($('.matcoo ul li img'))
	var alck=0
	//点击右按钮时
	$('.mari').click(function () {
		// console.log(acou)
		$('.matcoo ul').find('li').find('img:eq(1)').hide().siblings().show()//让所有li标签下的第二章图片隐藏其余显示
		alck++
		$('.matcoo ul').find('li').eq(alck).find('img:eq(0)').hide().siblings().show()//让当前li标签下的第一张图片隐藏第二张显示
		$('.conl').eq(alck).show().siblings('.conl').hide()//当到达对应的小图时让对应的大图显示
		$('.wordd').eq(alck).show().siblings('.wordd').hide()//当到达对应的小图时让对应的文字显示
		$('.matcoo ul').find('li span').removeClass('underline').show()
		$('.matcoo ul').find('li span').eq(alck).addClass('underline').show()
		if($('.matcoo ul li').length>4){
			if(alck>3){//当下标大于3时让整个ul向左移动一个放ul的盒子的长度
			$('.matcoo ul').animate({'margin-left':-508},1000)
		}else if(alck==$('.matcoo ul').find('li').length-1){
			alck=0
		}
		if(alck>5){//当下标为5时，返回到第一个
			alck=0
			$('.matcoo ul').find('li span').removeClass('underline').show()
			$('.matcoo ul').find('li').first().find('span').eq(alck).addClass('underline').show()
			$('.matcoo ul').find('li').last().find('img').show()//当下标大于5时让最后一个li标签下的图片显示不隐藏
			$('.matcoo ul').animate({'margin-left':0},300)//当下标大于5时，让ul回到最初的位置
			$('.matcoo ul').find('li').first().find('img:eq(0)').hide().siblings().show()//让第一个li标签下的第一张图隐藏其余的显示
			$('.conl').eq(0).show().siblings('.conl').hide()//当下标大于5时让第一张大图显示，其余的隐藏
			$('.wordd').eq(0).show().siblings('.wordd').hide()//当下标大于5时然第一份文字显示
		}
		}else{
			if(alck==$('.matcoo ul').find('li').length){
				alck=0
			}
		}
		
		
	})
	$('.male').click(function(){//点击左按钮时
	console.log($('.matcoo ul').index('.matcoo ul'))
		if(alck==0){//当下标为零时
			alck=$('.matcoo ul').find('li').size()-1//下标变为最后一个
			$('.matcoo ul').animate({'margin-left':-508},1000);//让ul移动一个盒子的长度
		}
		alck--
		$('.matcoo ul').find('li').find('img:eq(1)').hide().siblings().show()//让所有ul下的li中的第二张图隐藏其余显示		
		$('.matcoo ul').find('li').eq(alck).find('img:eq(0)').hide().siblings().show()//让当前li标签下的第一张图隐藏其余的显示
		$('.matcoo ul').find('li').last().find('img').show()//让最后一个li标签下的图片显示
		if(alck==3){//当下标为3的时候
			$('.matcoo ul').animate({'margin-left':0},1000);//ul回到初始位置
		}
		$('.conl').eq(alck).show().siblings('.conl').hide()//当到达对应的小图时让对应的大图显示
		$('.wordd').eq(alck).show().siblings('.wordd').hide()//当到达对应的小图时让对应的文字显示
		$('.matcoo ul').find('li span').removeClass('underline').show()//删除所有span的border-bottom
		$('.matcoo ul').find('li span').eq(alck).addClass('underline').show()//给当前span添加border-bottom
	})
	$('.matcoo ul').eq(0).show().siblings().hide()
	
	// 助阵大咖
	var now2=0
	$('.zhucobo ul li').click(function () {
		now2=$(this).index()
		big()
	})
	function big() {
		$('.zhucobo ul li').removeClass('curr')
		$('.zhucobo ul li').eq(now2).addClass('curr')
		$('.zhucoto ul').animate({'left':now2*-755})
	}
	$('.toright').click(function () {
		now2++
		if(now2==$('.zhucobo ul li').length){
			now2=0
		}
		big()
		console.log(now2)
	})
	$('.toleft').click(function () {
		if(now2==0){
			now2=$('.zhucobo ul li').length
		}
		now2--
		console.log(now2)
		big()
	})
	
	// 画师
	// $('.zhu .zhuco').eq(0).show().siblings().hide()
	$('.huashi ul li').click(function () {
		hua=$(this).index()
		$('.huashi ul li').removeClass('ccl')
		$(this).addClass('ccl')
		// $('.zhu .zhuco').eq($(this).index()).show().siblings().hide()
	})
	
	
	
	
	
	
	// 同人图文
	$('.vidoco ul').eq(0).show().siblings().hide()
	$('.tongrentuwen p').click(function () {
		$('.tongrentuwen p').removeClass('aci')
		$(this).addClass('aci')
		$('.tongren .vidoco ul').eq($(this).index()).show().siblings().hide()
	})
	
	
	
	
	
	
})
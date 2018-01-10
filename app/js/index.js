$(".one").hover(function  () {
	$(this).addClass("bg-green")
	var i=$(this).index()
	console.log(i)
	$(".definite-one-jion").show()
},function  () {
	$(this).removeClass("bg-green")
	var i=$(this).index()
	console.log(i)
	$(".definite-one-jion").hide()
})

$(".two").hover(function  () {
	$(this).addClass("bg-green")
//	var i=$(this).index()
//	console.log(i)
	$(".definite-two-jion").show()
	
},function  () {
	$(this).removeClass("bg-green")
//	var i=$(this).index()
	$(".definite-two-jion").hide()
})

$(".three").hover(function  () {
	$(this).addClass("bg-green")
	$(".definite-three-jion").show()
	
},function  () {
	$(this).removeClass("bg-green")
	$(".definite-three-jion").hide()
})


$(".four").hover(function  () {
	$(this).addClass("bg-green")
	$(".definite-four-jion").show()
	
},function  () {
	$(this).removeClass("bg-green")
	$(".definite-four-jion").hide()
})





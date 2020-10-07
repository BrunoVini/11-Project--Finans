$('button[name=entrar]').click(function(){
	$('div.cadastrar').css('display','flex')
	$('body, html').css('overflow','hidden')
})

$('button[name=entrar]').click(function(e){
	e.stopPropagation()
})

$('i.fechar, body').click(function(){
	$('div.cadastrar').css('display','none')
	$('body, html').css('overflow','auto')
})


$('div.entrar').click(function(e){
	e.stopPropagation()
})

var booleanValue = true 

$('#show').click(() => {
	if(booleanValue){
		booleanValue = false
		$('i.senha').removeClass('fa-key')
		$('i.senha').addClass('fa-unlock-alt')
		$('#show span').html('Esconder senha')
	}else{
		booleanValue = true
		$('.showpassword').html('')
		$('i.senha').removeClass('fa-unlock-alt')
		$('i.senha').addClass('fa-key')
		$('#show span').html('Amostrar senha')
	}
})

$('.entrar [type="email"]').click(function(e){
	e.stopPropagation()
})

$('.entrar [type="email"]').focus(() => {
	trocarInputEmail()
})

$('window').click( function() {
	setEmail()
})

$('div.entrar').click(() => {
	let valorInput = $('.entrar [type="email"]').val()
	console.log(valorInput)
	if(valorInput == ''){
		setEmail()
	}else{
		trocarInputEmail()
	}
})

$('input[type="password"]').on('input',function() {
	let senha = $(this).val()
	if(!booleanValue){
		$('.showpassword').html(senha)
	}
})

function setEmail (){
	$('.login label').eq(0).css('font-size',' 1em');
	$('.login label').eq(0).css('bottom',' 10px');
} 

function trocarInputEmail (){
	$('.login label').eq(0).css('font-size',' 0.7em')
	$('.login label').eq(0).css('bottom',' 30px')
}
var butt = $('#btn');
var inpo = $('#in');
var list = $('#out');

butt.on('click', function(){
	list.append('<li>'+inpo.val()+'</li>');
})
var pos;
$('#btn1').on('click', function(){
	pos = 'left';
})
$('#btn2').on('click', function(){
	pos = 'right';
})


$('#add').on('click', function(){
	if(pos === undefined){
		alert('pick a direction')
	}else{
		if(pos==='left'){
			$('#left').append('<li>New Entry</li>')
		}

		if(pos==='right'){
			$('#right').append('<li>New Entry</li>')
		}
	}
})
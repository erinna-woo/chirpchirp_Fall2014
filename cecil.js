$(document).ready(function(){
	setTimeout(function(){}, 10000);

	var $randleft;
	var $randtop;
	var $bodyh = $('body').height()-406;
	var $bodyw = $('body').width()-350;

	function addCecilRandom() {
		var $cecil = $('<img>').attr('src', 'https://i.imgur.com/FGwnEdb.png');
		$('body').append($cecil);
		$randleft = ((Math.random()*$bodyw)+1);
		$randtop = ((Math.random()*$bodyh)+1);
		$cecil.css("position","absolute");
		$cecil.css("left", $randleft);
		$cecil.css("top", $randtop);
		// $("div.ctr-p img[src='https://i.imgur.com/FGwnEdb.png']").click(function(){
		// 	console.log("clicked");
		// 	$(this).fadeOut(1000);
		
}

	addCecilRandom();

	if($("form.cdr_frm input[name='q']").val()==="cmc"||$("form.cdr_frm input[name='q']").val()==="pomona" || 1===1){
		$('img').attr('src', 'https://i.imgur.com/FGwnEdb.png');
		console.log("2 works");

			setInterval(function() {addCecilRandom()}, 1000);	


	}

});

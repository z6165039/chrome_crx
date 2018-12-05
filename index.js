$(function(){
	let count = 10;
	const ids =[];
	
	function expand(){
		let ok = false;
		const e = $('.check-adblock-bg');

		if(e.length > 0){
			ok = true;
			e.remove();
			$('.hide-article-box').remove();
			$('#article_content').removeAttr('style');
			for(let i = 1; i < 1000; i++) {
					clearTimeout(i);
			}
			// $('.check-adblock-bg').remove();
		}
		
		if(!ok && --count){
			ids.push(setTimeout(expand, 500));
		}else{
			ids.forEach(id=>clearTimeout(id));
		}
	}
	
	expand();
});
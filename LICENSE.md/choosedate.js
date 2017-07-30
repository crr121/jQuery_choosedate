$(function(){

	$("select:first").change(function(){
		$(this).empty();
		//	添加年份
	var current = new Date();
//		console.log(current);
		var cur_year = current.getFullYear();
//		console.log(cur_year);
		for (var i=cur_year ;i>1990;i--) {
			$(this).append("<option value='"+i+"'>"+i+"年</option>");
		}
		
	})
//	给年份添加一个change事件,获取到option的id
	$("select:first").change(function(){
		var year_val =  $(this).val();
//		console.log(year_val);
		if ( (year_val%4==0 && year_val%100!=0) || (year_val%400==0) ) {
			days[1]=29;
		} 
	})
//	添加月份
	$("select:eq(1)").change(function(){
		$(this).empty();
		
//		console.log(this);
		if($(this).val()!=0){
			for (var i=1;i<=12;i++) {
			$(this).append("<option value='"+i+"'>"+i+"月</option>")
		}
		}
		
//		console.log($(this).val()) ;
		
	})
//	添加天数
	var days = [31,28,31,30,31,30,31,31,30,31,30,31];
	$("select:eq(1)").change(function(){
//		console.log($(this));
//		console.log($(this).val());
//		console.log($(this).attr("value"));
		var mon_val = $(this).val();
		$("select:last-child").empty();
		
		
		
		
		for ( var i=1;i<=days[mon_val-1];i++) {
			$("select:last-child").append("<option>"+i+"日</option>")
		}
	})
	
	
})

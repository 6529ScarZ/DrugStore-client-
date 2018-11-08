(function( $, undefined ) {
      $.datepicker.setDefaults({  
		dateFormat: 'dd/mm/yy',
		showOn: 'both', //showOn: 'both'
		buttonText: 'เลือกวันที่',
		buttonImage: 'images/calendar-icon.gif',
		altField: "altDatePicker",
		
		showAnim: 'drop', //slideDown,fadeIn,blind,bounce,clip,drop,fold,slide
		//maxDate: "+0d",
		//minDate: "+0d",
		buttonImageOnly: true,
		yearRange:parseInt((new Date()).getFullYear()-100)+':' + parseInt((new Date()).getFullYear()+8),
		dayNames: ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัส', 'วันศุกร์', 'วันเสาร์'], // For formatting
		dayNamesMin: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'], 
		monthNamesShort: ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],
		changeMonth: true,
		changeYear: true,
		beforeShowDay: null, 
		beforeShow:function(){
			if($(this).val()!=""){
				var arrD=$(this).val().split("/");		
				arrD[2]=parseInt(arrD[2]);
				$(this).val(arrD[0]+"-"+arrD[1]+"-"+arrD[2]);
			}
			setTimeout(function(){
				$.each($(".ui-datepicker-year option"),function(j,k){
					var textYear=parseInt($(".ui-datepicker-year option").eq(j).val());
					var textYearb=parseInt($(".ui-datepicker-year option").eq(j).val())+543;
					$(".ui-datepicker-year option").eq(j).text(textYear+' ('+textYearb+')');
				});				
			},50);
		},
		onChangeMonthYear: function(){
			setTimeout(function(){
				$.each($(".ui-datepicker-year option"),function(j,k){
					var textYear=parseInt($(".ui-datepicker-year option").eq(j).val());
					var textYearb=parseInt($(".ui-datepicker-year option").eq(j).val())+543;
					$(".ui-datepicker-year option").eq(j).text(textYear+' ('+textYearb+')');
				});				
			},50);		
		}
	 });
	  
})(jQuery);

	var dateBefore=null;
	var minD=null;
	var maxD=null;
	var obj = null;

	
	
	function setminDate(minDt){
		minD = minDt;
	}
	
	function setmaxDate(maxDt){
	   maxD = maxDt;	
	}
	
	function clearAvailable(){
	    minD = null;	
		maxD = null;
	}
		
	function setDatepicker(selector){
         $(selector).datepicker({
          
		  minDate: minD,  // กำหนดค่าต่ำสุดของวันที่เลือกได้
		  maxDate: maxD, //กำหนดค่าสูงสุดของวันที่เลือกได้
		  
		  beforeShow:function(){
			if($(this).val()!=""){
				var arrD=$(this).val().split("/");		
				arrD[2]=parseInt(arrD[2]);
				$(this).val(arrD[0]+"/"+arrD[1]+"/"+arrD[2]);
			}
			setTimeout(function(){
				$.each($(".ui-datepicker-year option"),function(j,k){
					var textYear=parseInt($(".ui-datepicker-year option").eq(j).val());
					var textYearb=parseInt($(".ui-datepicker-year option").eq(j).val())+543;
					$(".ui-datepicker-year option").eq(j).text(textYear+' ('+textYearb+')');
				});				
			},50);
		},
		
		onClose:function(){
			if($(this).val()!="" && $(this).val()==dateBefore){			
				var arrD=dateBefore.split("/");
				arrD[2]=parseInt(arrD[2]);
				$(this).val(arrD[0]+"/"+arrD[1]+"/"+arrD[2]);	
			}		
		},
		
		onSelect: function(dateText, inst){ 
			dateBefore=$(this).val();
			var arrD=dateText.split("/");
			arrD[2]=parseInt(arrD[2]);
			$(this).val(arrD[0]+"/"+arrD[1]+"/"+arrD[2]);
		} 
		 
		});
		 
		clearAvailable();
    } //function setDatepicker(selector){
		

		
		// เพิ่มเติมตอนเลือกให้ไปทำเหตุการณ์ onchage ด้วย
	function setDatepickerSchedule(selector){
         $(selector).datepicker({
          
		  minDate: minD,  // กำหนดค่าต่ำสุดของวันที่เลือกได้
		  maxDate: maxD, //กำหนดค่าสูงสุดของวันที่เลือกได้
		  
		  beforeShow:function(){
			if($(this).val()!=""){
				var arrD=$(this).val().split("/");		
				arrD[2]=parseInt(arrD[2]);
				$(this).val(arrD[0]+"/"+arrD[1]+"/"+arrD[2]);
			}
			setTimeout(function(){
				$.each($(".ui-datepicker-year option"),function(j,k){
					var textYear=parseInt($(".ui-datepicker-year option").eq(j).val());
					var textYearb=parseInt($(".ui-datepicker-year option").eq(j).val())+543;
					$(".ui-datepicker-year option").eq(j).text(textYear+' ('+textYearb+')');
				});				
			},50);
		},
		
		onClose:function(){
			if($(this).val()!="" && $(this).val()==dateBefore){			
				var arrD=dateBefore.split("/");
				arrD[2]=parseInt(arrD[2]);
				$(this).val(arrD[0]+"/"+arrD[1]+"/"+arrD[2]);	
			}		
		},
		
		onSelect: function(dateText, inst){ 
			dateBefore=$(this).val();
			var arrD=dateText.split("/");
			arrD[2]=parseInt(arrD[2]);
			$(this).val(arrD[0]+"/"+arrD[1]+"/"+arrD[2]);
			$(this).change();
		} 
		 
		});
		 
		clearAvailable();
    } //function setDatepicker(selector){
				
    function setDateBetween(select1,select2){
        $('#'+select1+',#'+select2).datepicker({
            beforeShow:function(){
                if($(this).val()!=""){
                    var arrD=$(this).val().split("/");		
                    arrD[2]=parseInt(arrD[2]);
                    $(this).val(arrD[0]+"/"+arrD[1]+"/"+arrD[2]);
                }
                setTimeout(function(){
                    $.each($(".ui-datepicker-year option"),function(j,k){
                        var textYear=parseInt($(".ui-datepicker-year option").eq(j).val());
                        var textYearb=parseInt($(".ui-datepicker-year option").eq(j).val())+543;
						$(".ui-datepicker-year option").eq(j).text(textYear+' ('+textYearb+')');
                    });				
                },50);
				if(this.id==select2 && $('#'+select1).val()!=""){
					var arrD = $('#'+select1).val().split("/");
					arrD[2]=parseInt(arrD[2]);
                    return{
						minDate: arrD[0]+"/"+arrD[1]+"/"+arrD[2], 
					}
                }else if(this.id==select1 && $('#'+select2).val()!=""){
					var arrD = $('#'+select2).val().split("/");
					arrD[2]=parseInt(arrD[2]);
                    return{ maxDate: arrD[0]+"/"+arrD[1]+"/"+arrD[2],  }
                }
            }, //beforeShow
			
			onClose:function(){
			if($(this).val()!="" && $(this).val()==dateBefore){			
				var arrD=dateBefore.split("/");
				arrD[2]=parseInt(arrD[2]);
				$(this).val(arrD[0]+"/"+arrD[1]+"/"+arrD[2]);	
			}		
		},
		
		onSelect: function(dateText, inst){ 
			dateBefore=$(this).val();
			var arrD=dateText.split("/");
			arrD[2]=parseInt(arrD[2]);
			$(this).val(arrD[0]+"/"+arrD[1]+"/"+arrD[2]);
		} 
		
        });
    }
function SellDrug (content,id=null) { 
    var RL = new ReportLayout(content);
    RL.GetRL();
   
    //$("li#page").empty().text(" ขายยา")
    $("li#page").remove();
    $("h2").empty().prepend("<img src='images/icon_set2/gear.ico' width='40'> ").append(" ขายยา");
    $("li#prev").remove();
    //$("#back").empty().append(" นำเข้ายา").attr("onclick","$('#body_text').empty();TBImp('index_content');");
    $("#back").remove();
    $("span.card-title").empty().append(" ขายยา");
    $("#add_body").prepend("<span id='body_text'></span>")
    // $.getJSON($.cookie('Readerurl')+'DT_Import.php',{data: id}, function (data) {
    //     $("#body_text").empty().append("<b>นำเข้าครั้งที : "+data[0].ID+" วันที่ : "+data[0].lot_date+" จากร้าน : "+data[0].name+"</b><p>");
        //$("#item-input").empty().append();

    $("#contentGr").empty().append($("<form action='' name='frmaddIM' id='frmaddIM' method='post' enctype='multipart/form-data'>"
                                +"<div class='card border-success'>"
                                +"<div class='card-header'>"
                                +"<input type='text' class='form-control-sm' id='read_barcode' name='read_barcode' placeholder='ใส่ Barcode' autofocus> <input type='button' class='btn btn-success' id='plus-btn' value='+ เพิ่มรายการ'> <input type='button' class='btn btn-danger' id='minus-btn' value='- ลบรายการ'></div>"
                                +"<div class='card-body'>"
                                +"<div class='container d-inline-block'><div class='row'> NO."
                                +"<div class='col col-lg-2 form-group'>ยี่ห้อ</div>"
                                +"<div class='col col-lg-2 form-group'>ราคาขาย/หน่วย</div>"
                                +"<div class='col col-lg-2 form-group'>จำนวน/ชิ้น</div>"
                                +"<div class='col col-lg-1s form-group'>หมดอายุ</div></div>"
                                +"<div class='container d-inline-block row' style='background-color: #eee;' id='item-input'><p></div><p><div id='add-button'></div></div></div></div></form>"));
                                //var hasFocus = $('#read_barcode').is(':focus');
                                var i=0;
                                if(i==0){ $('#minus-btn').hide(); }//else{$('#minus-btn').show()}
    $('#plus-btn').click(function () {
        if($("#read_barcode").val()==''){
            alert("กรุณาระบุ Barcode ครับ!!!");
            $("#read_barcode").focus();
            //e.preventDefault();
        }else{
            $.getJSON($.cookie('Readerurl')+'detail_LIAPI(barcode).php',{data: $("#read_barcode").val()}, function (data) {
                if(data=='ไม่มีข้อมูล'){
                    alert(data);
                }else{
                    $("#item-input").append("<div class='row' id='d"+(i+1)+"'> &nbsp;&nbsp;&nbsp;"+(i+1)+".  <div class='col col-lg-2 form-group'><input type='text' name='db_id_[]' class='form-control form-control-sm' id='db_id_[]' value='"+data.brand_name+"' readonly>"
                    +"<input type='hidden' id='db_id[]' name='db_id[]' value='"+data.db_id+"'></div>"
                    +"<div class='col col-lg-2 form-group'><input type='text' name='sell_price[]' class='form-control form-control-sm' id='sell_price[]' value='"+data.sell_price+"' placeholder='ราคาขาย/ชิ้น' readonly></div>"
                    +"<div class='col col-lg-2 form-group'><input type='text' name='sell_amount[]' class='form-control form-control-sm' id='sell_amount[]' value='1' placeholder='ระบุจำนวน' readonly></div>"
                    +"<div class='col col-lg-2 form-group'><input type='text' name='expire_date[]' class='form-control form-control-sm' id='expire_date"+i+"' placeholder='วันหมดอายุ' readonly></div>"
                    +"<input type='hidden' id='count[]' name='count[]' value='"+i+"'></div>")

                    $("#add-button").empty().append($("<input type='hidden' id='method' name='method' value='add_sellitem'>"
                                                +"<input type='hidden' id='seller' name='seller' value='"+$.cookie("user_id")+"'>"
                                                +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>")
                                                ,$("<center><button type='submit' class='btn btn-primary' id='IMsubmit'>ขาย</button></center>"));         
                            
                            var DP = new DatepickerThai();
                            DP.GetDatepicker('input#expire_date'+i);
                            $('input#expire_date'+i).datepicker("setDate",new Date(data.expire_date));
                            i++;
                            if(i!=0){$('#minus-btn').show()}
                }              
            })
    }
    $("#read_barcode").val('').focus();
    //$("#read_barcode").empty().focus();            
    });
    $('#minus-btn').click(function () {
        if(i==1){ $('#minus-btn').hide();$("#IMsubmit").hide(); }//else{$('#minus-btn').show()}
        $("div#d"+i).remove();
        i--;
    });
    $("#frmaddIM").on('submit', (function (e) {
         e.preventDefault(); 
            var dataForm = new FormData(this);
                var settings = {
                    type: "POST",
                    url: $.cookie('Readerurl')+"prcimpSIAPI.php",
                    async: true,
                    crossDomain: true,
                    data: dataForm,
                    contentType: false,
                    cache: false,
                    processData: false
                  }   
$.ajax(settings).done(function (result) {
alert(result.messege);
$("#body_text").empty();
SellDrug("index_content");
//$("#index_content").empty().load('content/add_user.html');

                })
                 
        
}));
//});
    //$("a#adduser").attr("onclick","AddBrandModal();").attr("data-toggle","modal").attr("data-target","#AddBrandModal");                 
    var column1 = ["เลขที่","วันที่","เวลา","จำนวน","ราคาขาย","ผู้ขาย","รายละเอียด","แก้ไข","ลบ"];
    
        var CTb = new createTableAjax();
        //RemovejQueryCookie('year')
        // GetjQueryCookie('year',nowyear)
                  CTb.GetNewTableAjax('contentTB',$.cookie('Readerurl')+'DT_sellitem.php?A',$.cookie('Readerurl')+'tempSendDataAPI.php',column1
                  ,'AddSellItemModal','bill','bill_id',"SellDrug",true,false,null,true,"DetailSellItemModal",false,null,null,null,null,null,'dbtb');
        
       
        }

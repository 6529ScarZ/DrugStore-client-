function AddItem (content,id=null) { 
    var RL = new ReportLayout(content);
    RL.GetRL();
   
    $("li#page").empty().text(" เพิ่มรายการ")
    $("h2").empty().prepend("<img src='images/icon_set2/gear.ico' width='40'> ").append(" เพิ่มรายการ");
    $("li#prev").show();
    $("#back").empty().append(" นำเข้ายา").attr("onclick","$('#body_text').empty();TBImp('index_content');");
    $("span.card-title").empty().append(" เพิ่มรายการ");
    $("#add_body").prepend("<span id='body_text'></span>")
    $.getJSON($.cookie('Readerurl')+'DT_Import.php',{data: id}, function (data) {
        $("#body_text").empty().append("<b>นำเข้าครั้งที : "+data[0].ID+" วันที่ : "+data[0].lot_date+" จากร้าน : "+data[0].name+"</b><p>");
        //$("#item-input").empty().append();

    $("#contentGr").empty().append($("<form action='' name='frmaddIM' id='frmaddIM' method='post' enctype='multipart/form-data'>"
                                +"<div class='card border-success'>"
                                +"<div class='card-header'><input type='button' class='btn btn-success' id='plus-btn' value='+ เพิ่มรายการ'> <input type='button' class='btn btn-danger' id='minus-btn' value='- ลบรายการ'></div>"
                                +"<div class='card-body'>"
                                +"<div class='container d-inline-block'><div class='row'> NO."
                                +"<div class='col col-lg-2 form-group'>ยี่ห้อ</div>"
                                +"<div class='col col-lg-2 form-group'>ราคา/หน่วย</div>"
                                +"<div class='col col-lg-1 form-group'>จำนวน</div>"
                                +"<div class='col col-lg-2 form-group'>ราคาขาย/หน่วย</div>"
                                +"<div class='col col-lg-1s form-group'>หมดอายุ</div></div>"
                                +"<div class='container d-inline-block row' style='background-color: #eee;' id='item-input'><p></div><p><div id='add-button'></div></div></div></div></form>"));
 
                                var i=0;
                                if(i==0){ $('#minus-btn').hide(); }//else{$('#minus-btn').show()}
    $('#plus-btn').click(function () {
                $("#item-input").append("<div class='row' id='d"+(i+1)+"'> &nbsp;&nbsp;&nbsp;"+(i+1)+".  <div class='col col-lg-2 form-group'><select name='db_id[]' class='form-control select2' id='db_id"+i+"' required></select></div>"
                            +"<div class='col col-lg-2 form-group'><input type='text' name='item_price[]' class='form-control form-control-sm' id='item_price[]' placeholder='ราคา/ชิ้น'></div>"
                            +"<div class='col col-lg-1 form-group'><input type='text' name='item_amount[]' class='form-control form-control-sm' id='item_amount[]' placeholder='จำนวน'></div>"
                            +"<div class='col col-lg-2 form-group'><input type='text' name='sell_price[]' class='form-control form-control-sm' id='sell_price[]' placeholder='ราคาขาย/ชิ้น'></div>"
                            +"<div class='col col-lg-2 form-group'><input type='text' name='expire_date[]' class='form-control form-control-sm' id='expire_date"+i+"' placeholder='วันหมดอายุ'></div>"
                            +"<input type='hidden' id='lot_id[]' name='lot_id[]' value='"+data[0].ID+"'><input type='hidden' id='count[]' name='count[]' value='"+i+"'></div>")
                $("#add-button").empty().append($("<input type='hidden' id='method' name='method' value='add_lotitem'>"
                                                +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>")
                                                ,$("<center><button type='submit' class='btn btn-primary' id='IMsubmit'>บันทึก</button></center>"));         
                            selectMash("#db_id"+i,"DT_Brander.php","เลือกยี่ห้อ");
                            var DP = new DatepickerThai();
                            DP.GetDatepicker('input#expire_date'+i);
                            i++;
                            if(i!=0){$('#minus-btn').show()}
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
                    url: $.cookie('Readerurl')+"prcimpLIAPI.php",
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
AddItem("index_content",id);
//$("#index_content").empty().load('content/add_user.html');

                })
                 
        
}));
});
    //$("a#adduser").attr("onclick","AddBrandModal();").attr("data-toggle","modal").attr("data-target","#AddBrandModal");                 
    var column1 = ["เลขที่","ยี่ห้อ","ราคา/หน่วย","จำนวน","ราคาขาย/หน่วย","วันหมดอายุ","แก้ไข","ลบ"];
    
        var CTb = new createTableAjax();
        //RemovejQueryCookie('year')
        // GetjQueryCookie('year',nowyear)
                  CTb.GetNewTableAjax('contentTB',$.cookie('Readerurl')+'DT_lotitem.php?'+id,$.cookie('Readerurl')+'tempSendDataAPI.php',column1
                  ,'AddLotItemModal','lot_item','li_id',"AddItem",true,false,null,false,null,false,null,null,null,null,null,'dbtb');
        
       
        }

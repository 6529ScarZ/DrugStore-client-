function AddLotItemModal () {
$("#createModal").empty().append("<div class='modal' id='AddLotItemModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<h5 class='modal-title' id='AddLotItemModalLabel'></h5>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"
                                    +"<form action='' name='frmaddLT' id='frmaddLT' method='post' enctype='multipart/form-data'>"
                                    +"<div class='modal-body' id='modelStore'><span id='Store_detail'></span></div>"
                                    +"<div class='modal-footer'></div></form></div></div></div>");
    $('#AddLotItemModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever');console.log(recipient)
  var modal = $(this)
  modal.find('.modal-title').text('แก้ไขรายการ')
  $('span#Store_detail').empty().append($("<div class='form-group'>ยีห้อ : <select name='db_id' class='form-control select2' id='db_id' required></select></div>")
                                    ,$("<div class='form-group'><label for='mash_pri'>ราคา/หน่วย : </label><br><input type='text' name='item_price' class='form-control form-control-sm' id='item_price' placeholder='ราคา/ชิ้น' required></div>")
                                    ,$("<div class='form-group'><label for='mash_sec'>จำนวน : </label><br><input type='text' name='item_amount' class='form-control form-control-sm' id='item_amount' placeholder='จำนวน' required></div>")
                                    ,$("<div class='form-group'><label for='mash_th'>ราคาขาย/หน่วย : </label><br><input type='text' name='sell_price' class='form-control form-control-sm' id='sell_price' placeholder='ราคาขาย/ชิ้น' required></div>")
                                    ,$("<div class='form-group'><label for='drug_kind'>Barcode : </label><br><input type='text' name='barcode' class='form-control form-control-sm' id='barcode' placeholder='Barcode' required></div>")
                                    ,$("<div class='form-group'>หมดอายุ : <input type='text' name='expire_date' class='form-control form-control-sm' id='expire_date' placeholder='วันหมดอายุ' required></div>"));
        // if(recipient == null){
        //     selectMash("#mash_pri","DT_medi.php","เลือกตัวยา");
        //     selectMash("#mash_sec","DT_medi.php","เลือกตัวยา");
        //     selectMash("#mash_th","DT_medi.php","เลือกตัวยา");
        //     selectMash("#drug_kind","DT_drugkind.php","เลือกชนิด");
        //     $("#max").attr("onkeyup","inputDigits(this)");
        //     $("#min").attr("onkeyup","inputDigits(this)");
        //                                      $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='add_brand'>"
        //                                                                 +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>");                
        //                                     $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-primary' id='USsubmit'>บันทึก</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");
        //                                     $('#loading').hide();
        //                                     $("#frmaddbrand").on('submit', (function (e) {
        //                                                             if($("#brand_name").val()==''){
        //                                                                     alert("กรุณาระบุชื่อยี่ห้อครับ!!!");
        //                                                                     $("#brand_name").focus();
        //                                                                     e.preventDefault();
        //                                                                 }else if($("#mash_pri").val()==''){
        //                                                                     alert("กรุณาเลือกตัวยาหลักครับ!!!");
        //                                                                     $("#mash_pri").focus();
        //                                                                     e.preventDefault();
        //                                                                 }else if($("#drug_kind").val()==''){
        //                                                                     alert("กรุณาเลือกชนิดครับ!!!");
        //                                                                     $("#drug_kind").focus();
        //                                                                     e.preventDefault();
        //                                                                 }else{ e.preventDefault();
        //                                                                     var settings = {
        //                                                                         type: "POST",
        //                                                                         url: $.cookie('Readerurl')+"prcbrandAPI.php",
        //                                                                         async: true,
        //                                                                         crossDomain: true,
        //                                                                         data: new FormData(this),
        //                                                                         contentType: false,
        //                                                                         cache: false,
        //                                                                         processData: false
        //                                                                       }                    
        //                                                 $.ajax(settings).done(function (result) {
        //                                                 modal.modal('hide')
        //                                                 alert(result.messege);
        //                                                 TBBrand("index_content");
        //                                                 //$("#index_content").empty().load('content/add_user.html');
                                                           
        //                                                                     })
                                                                             
        //                                                              }
        //                                 }));                            
        //     }else{
                $.getJSON($.cookie('Readerurl')+'detail_LIAPI.php',{data: recipient}, function (data) { console.log(data)
                    selectMash("#db_id","DT_Brander.php","เลือกยี่ห้อ",data.db_id);
                    $("input#item_price").attr("value",data.item_price);
                    $("input#item_amount").attr("value",data.item_amount);
                    $("input#sell_price").attr("value",data.sell_price);
                    $("input#barcode").attr("value",data.barcode);
                    var DP = new DatepickerThai();
                    DP.GetDatepicker('input#expire_date');
                    $('input#expire_date').datepicker("setDate",new Date(data.expire_date));
                    $("#item_price").attr("onkeyup","inputDigits(this)");
                    $("#item_amount").attr("onkeyup","inputDigits(this)"); 
                 
            $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='edit_lotitem'>"
                                    +"<input type='hidden' id='li_id' name='li_id' value='"+data.li_id+"'>"
                                    +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>"
                                    +"<input type='hidden' id='lot_id' name='lot_id' value='"+data.lot_id+"'></div></div>");   
            $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-warning' id='USsubmit'>แก้ไข</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");
            $("#frmaddLI").on('submit', (function (e) {
                e.preventDefault();
                var settings = {
                    type: "POST",
                    url: $.cookie('Readerurl')+"prcimpLIAPI.php",
                    async: true,
                    crossDomain: true,
                    data: new FormData(this),
                    contentType: false,
                    cache: false,
                    processData: false
                  }   
$.ajax(settings).done(function (result) { console.log(settings.data)
modal.modal('hide')
alert(result.messege);
$("#body_text").empty();
AddItem("index_content",id);
                                                                            })
                                        }));                            
                });
            //}
});
}

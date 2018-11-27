function AddSellItemModal () {
$("#createModal").empty().append("<div class='modal' id='AddSellItemModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<h5 class='modal-title' id='AddSellItemModalLabel'></h5>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"
                                    +"<form action='' name='frmaddLI' id='frmaddLI' method='post' enctype='multipart/form-data'>"
                                    +"<div class='modal-body' id='modelStore'><span id='Store_detail'></span></div>"
                                    +"<div class='modal-footer'></div></form></div></div></div>");
    $('#AddSellItemModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever');
  var modal = $(this)
  modal.find('.modal-title').text('แก้ไขรายการขาย BILL NO.'+recipient)

                $.getJSON($.cookie('Readerurl')+'detail_SIAPI.php',{data: recipient}, function (data) { 
                    for (var i = 0; i < data.length; i++) {
                    
                    $('span#Store_detail').append($("<div class='row' id='d"+(i+1)+"'> &nbsp;&nbsp;&nbsp;"+(i+1)+".  "
                    +"<div class='col col-lg-6 form-group'><select name='db_id[]' class='form-control select2' id='db_id"+i+"' required></select></div>"
                    +"<div class='col col-lg-2 form-group'><input type='text' name='sell_amount[]' class='form-control form-control-sm' id='sell_amount[]' value='1' placeholder='ระบุจำนวน' readonly></div>"
                    +"<div class='col col-lg-2 form-group'><input type='text' name='sell_price[]' class='form-control form-control-sm' id='sell_price[]' value='"+data[i].sell_price+"' placeholder='ราคาขาย/ชิ้น' readonly></div>"
                    +"<input type='hidden' id='count[]' name='count[]' value='"+i+"'><input type='hidden' id='db_id[]' name='db_id[]' value='"+data[i].bi_id+"'></div>"));
                    
                    selectMash("#db_id"+i,"DT_Brander.php","เลือกยี่ห้อ",data[i].db_id);
                }
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
$.ajax(settings).done(function (result) {
modal.modal('hide')
alert(result.messege);
$("#body_text").empty();
AddItem("index_content",data.lot_id);
                                                                            })
                                        }));                            
                });
});
}

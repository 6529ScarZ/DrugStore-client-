function AddImpModal () {
$("#createModal").empty().append("<div class='modal' id='AddImpModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<h5 class='modal-title' id='AddImpModalLabel'></h5>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"
                                    +"<form action='' name='frmaddimp' id='frmaddimp' method='post' enctype='multipart/form-data'>"
                                    +"<div class='modal-body' id='modelStore'><span id='Store_detail'></span></div>"
                                    +"<div class='modal-footer'></div></form></div></div></div>");
    $('#AddImpModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('นำเข้ายา')
  $('span#Store_detail').empty().append($("<div class='form-group'>วันที่นำเข้า : <INPUT TYPE='text' NAME='lot_date' id='datepicker' class='form-control' placeholder=''></div>")
                                    ,$("<div class='form-group'><label for='comp_id'>ร้านซื้อยา : </label><br><select name='comp_id' class='form-control select2' id='comp_id'></select></div>")
                                    // ,$("<div class='form-group'><label for='lot_price'>ราคารวม : </label><br><INPUT TYPE='text' NAME='lot_price' id='lot_price' class='form-control' placeholder='จำนวนราคารวม'></div>")
                                    // ,$("<div class='form-group'><label for='lot_amount'>จำนวนรายการ : </label><br><INPUT TYPE='text' NAME='lot_amount' id='lot_amount' class='form-control' placeholder='จำนวนราคารวม'></div>")
                                    );
        if(recipient == null){
            var DP = new DatepickerThai();
            DP.GetDatepicker('#datepicker');
            selectMash("#comp_id","DT_comp.php","เลือกร้าน");
            // $("#lot_price").attr("onkeyup","inputDigits(this)");
            // $("#lot_amount").attr("onkeyup","inputDigits(this)");
                                             $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='add_import'>"
                                                                        +"<input type='hidden' id='importer' name='importer' value='"+$.cookie("user_id")+"'>"
                                                                        +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>");                
                                            $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-primary' id='USsubmit'>บันทึก</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");
                                            $('#loading').hide();
                                            $("#frmaddimp").on('submit', (function (e) {
                                                                     if($("#comp_id").val()==''){
                                                                            alert("กรุณาเลือกร้านครับ!!!");
                                                                            $("#comp_id").focus();
                                                                            e.preventDefault();
                                                                        }else{ e.preventDefault();
                                                                            var settings = {
                                                                                type: "POST",
                                                                                url: $.cookie('Readerurl')+"prcimpAPI.php",
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
                                                        TBImp("index_content");
                                                        //$("#index_content").empty().load('content/add_user.html');
                                                           
                                                                            })
                                                                             
                                                                     }
                                        }));                            
            }else{
                $.getJSON($.cookie('Readerurl')+'detail_importAPI.php',{data: recipient}, function (data) {
                    var DP = new DatepickerThai();
                    DP.GetDatepicker('#datepicker');  
                    $("#datepicker").datepicker("setDate",new Date(data.lot_date));
                    selectMash("#comp_id","DT_comp.php","เลือกร้าน",data.comp_id);
                 
            $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='edit_import'>"
                                    +"<input type='hidden' id='lot_id' name='lot_id' value='"+data.lot_id+"'>"
                                    +"<input type='hidden' id='importer' name='importer' value='"+$.cookie("user_id")+"'>"
                                    +"<input type='hidden' id='lot_price' name='lot_price' value='"+data.lot_price+"'>"
                                    +"<input type='hidden' id='lot_amount' name='lot_amount' value='"+data.lot_amount+"'>"
                                    +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>");   
            $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-warning' id='USsubmit'>แก้ไข</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");
            $("#frmaddimp").on('submit', (function (e) {
                if($("#comp_id").val()==''){
                       alert("กรุณาเลือกร้านครับ!!!");
                       $("#comp_id").focus();
                       e.preventDefault();
                   }else{ e.preventDefault();
                       var settings = {
                           type: "POST",
                           url: $.cookie('Readerurl')+"prcimpAPI.php",
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
                        TBImp('index_content');
                                                                            })
                                                                     }
                                        }));                            
                });
            }
});
$(function () {
    $("#file").change(function () {
        $("#message").empty(); // To remove the previous error message
        var file = this.files[0];
        var imagefile = file.type;
        var match = ["image/jpeg", "image/png", "image/jpg"];
        if (!((imagefile == match[0]) || (imagefile == match[1]) || (imagefile == match[2])))
        {
            $('#previewing').attr('src', 'noimage.png');
            $("#message").html("<p id='error'>Please Select A valid Image File</p>" + "<h4>Note</h4>" + "<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
            return false;
        } else
        {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});
}

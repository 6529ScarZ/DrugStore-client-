function AddSellerModal () {
$("#createModal").empty().append("<div class='modal' id='AddSellerModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<h5 class='modal-title' id='AddSellerModalLabel'></h5>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"
                                    +"<form action='' name='frmaddseller' id='frmaddseller' method='post' enctype='multipart/form-data'>"
                                    +"<div class='modal-body' id='modelStore'><span id='Store_detail'></span></div>"
                                    +"<div class='modal-footer'></div></form></div></div></div>");
    $('#AddSellerModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('เพิ่มร้านซื้อยา')
  $('span#Store_detail').empty().append($("<div class='form-group'>ชื่อร้าน : <INPUT TYPE='text' NAME='comp_name' id='comp_name' class='form-control' placeholder='ระบุชื่อร้าน' required></div>")
                                    ,$("<div class='form-group'>เลขที่เสียภาษี : <INPUT type='number' maxlength='13' NAME='comp_vax' id='comp_vax' class='form-control' placeholder='ระบุเลขที่เสียภาษี (ถ้ามี)'></div>")
                                     ,$("<div class='form-group'>ที่อยู่ : <INPUT TYPE='text' NAME='comp_address' id='comp_address' class='form-control' placeholder='ระบุที่อยู่' required></div>")
                                    ,$("<div class='form-group'>เบอร์โทร : <INPUT TYPE='number' maxlength='10' NAME='comp_tel' id='comp_tel' class='form-control' placeholder='ระบุเบอร์โทร (ถ้ามี)'></div>")
                                    ,$("<div class='form-group'>มือถือ : <INPUT TYPE='number' maxlength='10' NAME='comp_mobile' id='comp_mobile' class='form-control' placeholder='ระบุมือถือ (ถ้ามี)'></div>")
                                    ,$("<div class='form-group'>FAX. : <INPUT TYPE='number' maxlength='10' NAME='comp_fax' id='comp_fax' class='form-control' placeholder='ระบุ FAX (ถ้ามี)'></div>"));
                        $("#comp_vax").attr("onkeyup","inputDigits(this)");
                        $("#comp_tel").attr("onkeyup","inputDigits(this)");
                        $("#comp_mobile").attr("onkeyup","inputDigits(this)");
                        $("#comp_fax").attr("onkeyup","inputDigits(this)");          
        if(recipient == null){
                                             $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='add_seller'>"
                                                                        +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>");                
                                            $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-primary' id='USsubmit'>บันทึก</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");
                                            $('#loading').hide();
                                            $("#frmaddseller").on('submit', (function (e) {
                                                $("#message").empty();
                                                $('#loading').show();
                                                                    if($("#comp_name").val()==''){
                                                                            alert("กรุณาระบุชื่อร้านครับ!!!");
                                                                            $("#comp_name").focus();
                                                                            e.preventDefault();
                                                                        }else if($("#comp_address").val()==''){
                                                                            alert("กรุณาระบุที่อยู่ร้านครับ!!!");
                                                                            $("#comp_address").focus();
                                                                            e.preventDefault();
                                                                        }else{ e.preventDefault();
                                                                            var settings = {
                                                                                type: "POST",
                                                                                url: $.cookie('Readerurl')+"prcsellerAPI.php",
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
                                                        TBSeller("index_content");
                                                        //$("#index_content").empty().load('content/add_user.html');
                                                           
                                                                            })
                                                                             
                                                                     }
                                        }));                            
            }else{
                $.getJSON($.cookie('Readerurl')+'detail_sellerAPI.php',{data: recipient}, function (data) { 
                    $("input#comp_name").attr("value",data.comp_name);  
                    $("input#comp_vax").attr("value",data.comp_vax); 
                    $("input#comp_address").attr("value",data.comp_address);
                    $("input#comp_tel").attr("value",data.comp_tel);  
                    $("input#comp_mobile").attr("value",data.comp_mobile); 
                    $("input#comp_fax").attr("value",data.comp_fax);
                 
            $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='edit_seller'>"
                                    +"<input type='hidden' id='user_id' name='comp_id' value='"+data.comp_id+"'>"
                                    +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>");   
            $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-warning' id='USsubmit'>แก้ไข</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");
            $('#loading').hide();
            $("#frmaddseller").on('submit', (function (e) {
                $("#message").empty();
                $('#loading').show();
                if($("#comp_name").val()==''){
                    alert("กรุณาระบุชื่อร้านครับ!!!");
                    $("#comp_name").focus();
                    e.preventDefault();
                }else if($("#comp_address").val()==''){
                    alert("กรุณาระบุที่อยู่ร้านครับ!!!");
                    $("#comp_address").focus();
                    e.preventDefault();
                }else{ e.preventDefault();
                                            var settings = {
                                                type: "POST",
                                                url: $.cookie('Readerurl')+"prcsellerAPI.php",
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
                        TBSeller('index_content');
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
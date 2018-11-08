function AddMedModal () {
$("#createModal").empty().append("<div class='modal' id='AddMedModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<h5 class='modal-title' id='AddMedModalLabel'></h5>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"
                                    +"<form action='' name='frmaddmed' id='frmaddmed' method='post' enctype='multipart/form-data'>"
                                    +"<div class='modal-body' id='modelStore'><span id='Store_detail'></span></div>"
                                    +"<div class='modal-footer'></div></form></div></div></div>");
    $('#AddMedModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('เพิ่มยา')
  $('span#Store_detail').empty().append($("<div class='form-group'>ชื่อยา : <INPUT TYPE='text' NAME='med_name' id='med_name' class='form-control' placeholder='ระบุชื่อยา' required></div>"));
        if(recipient == null){
                                             $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='add_med'>"
                                                                        +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>");                
                                            $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-primary' id='USsubmit'>บันทึก</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");
                                            $('#loading').hide();
                                            $("#frmaddmed").on('submit', (function (e) {
                                                                    if($("#med_name").val()==''){
                                                                            alert("กรุณาระบุชื่อยาครับ!!!");
                                                                            $("#med_name").focus();
                                                                            e.preventDefault();
                                                                        }else{ e.preventDefault();
                                                                            var settings = {
                                                                                type: "POST",
                                                                                url: $.cookie('Readerurl')+"prcmedAPI.php",
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
                                                        TBMed("index_content");
                                                        //$("#index_content").empty().load('content/add_user.html');
                                                           
                                                                            })
                                                                             
                                                                     }
                                        }));                            
            }else{
                $.getJSON($.cookie('Readerurl')+'detail_medAPI.php',{data: recipient}, function (data) { 
                    $("input#med_name").attr("value",data.med_name);  
                 
            $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='edit_med'>"
                                    +"<input type='hidden' id='user_id' name='med_id' value='"+data.med_id+"'>"
                                    +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>");   
            $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-warning' id='USsubmit'>แก้ไข</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");
            $("#frmaddmed").on('submit', (function (e) {
                if($("#med_name").val()==''){
                    alert("กรุณาระบุชื่อยาครับ!!!");
                    $("#med_name").focus();
                    e.preventDefault();
                }else{ e.preventDefault();
                                            var settings = {
                                                type: "POST",
                                                url: $.cookie('Readerurl')+"prcmedAPI.php",
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
                        TBMed('index_content');
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
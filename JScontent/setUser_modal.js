function AddUserModal () {
$("#createModal").empty().append("<div class='modal' id='AddUserModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<h5 class='modal-title' id='AddUserModalLabel'></h5>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"
                                    +"<form action='' name='frmadduser' id='frmadduser' method='post' enctype='multipart/form-data'>"
                                    +"<div class='modal-body' id='modelStore'><span id='Store_detail'></span></div>"
                                    +"<div class='modal-footer'></div></form></div></div></div>");
    $('#AddUserModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('เพิ่มผู้ใช้')
  $('span#Store_detail').empty().append($("<div class='form-group'>ชื่อผู้ใช้งาน : <INPUT TYPE='text' NAME='user_fname' id='user_fname' class='form-control' placeholder='ระบุชื่อ' required></div>")
                                    ,$("<div class='form-group'>นามสกุล : <INPUT TYPE='text' NAME='user_lname' id='user_lname' class='form-control' placeholder='ระบุนามสกุล' required></div>")
                                     ,$("<div class='form-group'>ระดับการใช้งาน : <select name='admin' class='form-control select2' id='admin'></select></div>")
                                    ,$("<div class='form-group'>ชื่อผู้ใช้ : <INPUT TYPE='text' NAME='user_account' id='user_account' class='form-control' placeholder='ระบุชื่อผู้ใช้' required></div>")
                                    ,$("<div class='form-group'>รหัสผ่าน : <INPUT TYPE='password' NAME='user_pwd' id='user_pwd' class='form-control' placeholder='ระบุรหัสผ่าน'></div>")
                                    ,$("<div class='form-group' id='con_pass'>ยืนยันรหัสผ่าน : <INPUT TYPE='password' NAME='con_password' id='con_password' class='form-control' placeholder='ยืนยันรหัสผ่าน'></div>")
                                    ,$("<div id='image_preview'><img id='previewing' src='images/icon_set2/image.ico' width='50' /></div>")
                                    ,$("<div class='form-group'>รูปภาพ : <input type='file' name='file' id='file' class='form-control' /></div></div><h4 id='loading' >loading..</h4><div id='message'></div>"));
    console.log($.cookie('path'));        if(recipient == null){
                $("select#admin").append($("<option value=''> เลือกระดับการใช้งาน </option>")
                                            ,$("<option value='N'> ผู้ใช้งานทั่วไป </option>")
                                            ,$("<option value='Y'> ผู้ดูแลระบบ </option>"));

                                            $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='add_user'>"
                                                                        +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>");                
                                            $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-primary' id='USsubmit'>บันทึก</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");
                                            $('#loading').hide();
                                            $("#frmadduser").on('submit', (function (e) {
                                                $("#message").empty();
                                                $('#loading').show();
                                                                    if($("#user_fname").val()==''){
                                                                            alert("กรุณาระบุชื่อครับ!!!");
                                                                            $("#user_fname").focus();
                                                                            e.preventDefault();
                                                                        }else if($("#user_lname").val()==''){
                                                                            alert("กรุณาระบุนามสกุลด้วยครับ!!!");
                                                                            $("#user_lname").focus();
                                                                            e.preventDefault();
                                                                        }else if($("#admin").val()==''){
                                                                            alert("กรุณาเลือกระดับการใช้งานด้วยครับ!!!");
                                                                            $("#admin").focus();
                                                                            e.preventDefault();
                                                                        }else if($("#user_account").val()==''){
                                                                            alert("กรุณาระบุชื่อผู้ใช้ด้วยครับ!!!");
                                                                            $("#user_account").focus();
                                                                            e.preventDefault();
                                                                        }else if($("#user_pwd").val()==''){
                                                                            alert("กรุณาระบุรหัสผ่านด้วยครับ!!!");
                                                                            $("#user_pwd").focus();
                                                                            e.preventDefault();
                                                                        }else if($("#user_pwd").val() != $("#con_password").val()){
                                                                            alert("รหัสผ่านไม่ตรงกันครับ กรุณายืนยันอีกครับ");
                                                                            $("#con_password").attr("value","").focus();
                                                                            e.preventDefault();
                                                                        }else{ e.preventDefault();
                                                                            var settings = {
                                                                                type: "POST",
                                                                                url: $.cookie('Readerurl')+"prcuserAPI.php",
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
                                                        TBUser("index_content");
                                                        //$("#index_content").empty().load('content/add_user.html');
                                                           
                                                                            })
                                                                             
                                                                     }
                                        }));                            
            }else{
                $.getJSON($.cookie('Readerurl')+'detail_userAPI.php',{data: recipient}, function (data) { 
                $("select#admin").append($("<option value=''> เลือกระดับการใช้งาน </option>")
                ,$("<option value='N'> ผู้ใช้งานทั่วไป </option>")
                ,$("<option value='Y'> ผู้ดูลระบบ </option>"));  
                if(data.status_user=='N'){
                    $("option[value^=N]").attr("selected","selected");
                }else if(data.status_user=='Y'){
                    $("option[value^=Y]").attr("selected","selected");
                }
                $("input#user_fname").attr("value",data.user_fname);  
                 $("input#user_lname").attr("value",data.user_lname); 
                 $("input#user_account").attr("value",data.user_name); 
                 if($.cookie("user_status")!='Y'){
                    $("input#user_fname").attr("readonly","readonly");  
                    $("input#user_lname").attr("readonly","readonly"); 
                     $("select#admin").attr("disabled","disabled"); 
                    $("div.box:last").remove();
                 }
                 //$("input#user_account").attr("value",data.user_name); 
                 $("div#con_pass").append($("<b style='color:red'>*หากไม่เปลี่ยนรหัสผ่านไม่ต้องแก้ไข</b>"));
                 if(data.photo){$('#previewing').attr('src', 'USERimgs/'+data.photo).attr('width','100');}
                 
            $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='edit_user'>"
                                    +"<input type='hidden' id='user_id' name='user_id' value='"+data.user_id+"'>"
                                    +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>");   
            $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-warning' id='USsubmit'>แก้ไข</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");
            $('#loading').hide();
            $("#frmadduser").on('submit', (function (e) {
                $("#message").empty();
                $('#loading').show();
                                    if($("#user_fname").val()==''){
                                            alert("กรุณาระบุชื่อครับ!!!");
                                            $("#user_fname").focus();
                                            e.preventDefault();
                                        }else if($("#user_lname").val()==''){
                                            alert("กรุณาระบุนามสกุลด้วยครับ!!!");
                                            $("#user_lname").focus();
                                            e.preventDefault();
                                        }else if($("#admin").val()==''){
                                            alert("กรุณาเลือกระดับการใช้งานด้วยครับ!!!");
                                            $("#admin").focus();
                                            e.preventDefault();
                                        }else if($("#user_account").val()==''){
                                            alert("กรุณาระบุชื่อผู้ใช้ด้วยครับ!!!");
                                            $("#user_account").focus();
                                            e.preventDefault();
                                        }else if($("#user_pwd").val() != $("#con_password").val()){
                                            alert("รหัสผ่านไม่ตรงกันครับ กรุณายืนยันอีกครับ");
                                            $("#con_password").attr("value","").focus();
                                            e.preventDefault();
                                        }else{ e.preventDefault();
                                            var settings = {
                                                type: "POST",
                                                url: $.cookie('Readerurl')+"prcuserAPI.php",
                                                async: true,
                                                crossDomain: true,
                                                data: new FormData(this),
                                                contentType: false,
                                                cache: false,
                                                processData: false
                                              } 
                                              console.log(settings)                   
                        $.ajax(settings).done(function (result) { 
                        modal.modal('hide')
                        alert(result.messege);
                        TBUser('index_content');
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
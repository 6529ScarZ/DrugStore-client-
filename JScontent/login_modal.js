function LoginModal () {
$("#createModal").empty().append("<div class='modal' id='LoginModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<h5 class='modal-title' id='LoginModalLabel'></h5>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"
                                    +"<form action='' name='frmlogin' id='frmlogin' method='post' enctype='multipart/form-data'>"
                                    +"<div class='modal-body' id='modelStore'><span id='Store_detail'></span></div>"
                                    +"<div class='modal-footer'></div></form></div></div></div>");
    $('#LoginModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').html('<h4><b>Drug Store system.v.1.0</b></h4><p>เข้าสู่ระบบเพื่อเริ่มใช้งาน')
  $('span#Store_detail').empty().append($("<div class='form-group'><INPUT TYPE='text' NAME='user_account' id='user_account' class='form-control' placeholder='Username' required></div>")
                                    ,$("<div class='form-group'><INPUT TYPE='password' NAME='user_pwd' id='user_pwd' class='form-control' placeholder='Password' required></div>"));
    if(recipient == null){
                            $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='add_user'>"
                                                                        +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>");                
                                            $("div.modal-footer").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='USsubmit'><b style='color: white'>เข้าสู่ระบบ</b></button></div>");
                                            $('#loading').hide();
                                            $("#frmlogin").on('submit', (function (e) {
                                                                     e.preventDefault();
                                                                     var Readerurl = localStorage.getItem("url");
                                                                     var settings = {
                                                                        "async": true,
                                                                        "crossDomain": true,
                                                                        url: Readerurl+"check_loginAPI.php",
                                                                        type: "POST",
                                                                        "processData": false,
                                                                        data: $("#frmlogin").serialize()
                                                                      }
                                                        $.ajax(settings).done(function (result) {
                                                            if(result.messege){
                                                                alert(result.messege);
                                                                $("#frmlogin").find('input:text, input:password').val('');
                                                                $("#user_account").focus();
                                                            }else{
                                                                $.cookie("user_id", result.user_id);
                                                                $.cookie("user_status", result.status_user);
                                                                $.cookie("name", result.fullname);
                                                                $.cookie("photo", result.photo);
                                                                $.cookie('Readerurl',localStorage.getItem("url"));
                                                                $.cookie('path',localStorage.getItem("path"));
                                                                modal.modal('hide')
                                                                location.reload();
                                                            }
                                                        
                                                        //$("#index_content").empty().load('index.html');
                                                           
                                                                            })
                                                                             
                                                                     
                                        }));                            
            }
});
}
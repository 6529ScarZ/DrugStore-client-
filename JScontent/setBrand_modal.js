function AddBrandModal () {
$("#createModal").empty().append("<div class='modal' id='AddBrandModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<h5 class='modal-title' id='AddBrandModalLabel'></h5>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"
                                    +"<form action='' name='frmaddbrand' id='frmaddbrand' method='post' enctype='multipart/form-data'>"
                                    +"<div class='modal-body' id='modelStore'><span id='Store_detail'></span></div>"
                                    +"<div class='modal-footer'></div></form></div></div></div>");
    $('#AddBrandModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('เพิ่มยี่ห้อ')
  $('span#Store_detail').empty().append($("<div class='form-group'>ชื่อยีห้อ : <INPUT TYPE='text' NAME='brand_name' id='brand_name' class='form-control' placeholder='ระบุชื่อยีห้อ' required></div>")
                                    ,$("<div class='form-group'><label for='mash_pri'>ตัวยาหลัก : </label><br><select name='mash_pri' class='form-control select2' id='mash_pri' required></select></div>")
                                    ,$("<div class='form-group'><label for='mash_sec'>ตัวยารอง1 : </label><br><select name='mash_sec' class='form-control select2' id='mash_sec'></select></div>")
                                    ,$("<div class='form-group'><label for='mash_th'>ตัวยารอง2 : </label><br><select name='mash_th' class='form-control select2' id='mash_th'></select></div>")
                                    ,$("<div class='form-group'><label for='drug_kind'>ชนิด : </label><br><select name='drug_kind' class='form-control select2' id='drug_kind' required></select></div>")
                                    ,$("<div class='form-group'>MAX. : <INPUT TYPE='text' NAME='max' id='max' class='form-control' placeholder='ระบุจำนวนสูงสุด' required></div>")
                                    ,$("<div class='form-group'>MIN. : <INPUT TYPE='text' NAME='min' id='min' class='form-control' placeholder='ระบุจำนวนต่ำสุด' required></div>"));
        if(recipient == null){
            selectMash("#mash_pri","DT_medi.php","เลือกตัวยา");
            selectMash("#mash_sec","DT_medi.php","เลือกตัวยา");
            selectMash("#mash_th","DT_medi.php","เลือกตัวยา");
            selectMash("#drug_kind","DT_drugkind.php","เลือกชนิด");
            $("#max").attr("onkeyup","inputDigits(this)");
            $("#min").attr("onkeyup","inputDigits(this)");
                                             $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='add_brand'>"
                                                                        +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>");                
                                            $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-primary' id='USsubmit'>บันทึก</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");
                                            $('#loading').hide();
                                            $("#frmaddbrand").on('submit', (function (e) {
                                                                    if($("#brand_name").val()==''){
                                                                            alert("กรุณาระบุชื่อยี่ห้อครับ!!!");
                                                                            $("#brand_name").focus();
                                                                            e.preventDefault();
                                                                        }else if($("#mash_pri").val()==''){
                                                                            alert("กรุณาเลือกตัวยาหลักครับ!!!");
                                                                            $("#mash_pri").focus();
                                                                            e.preventDefault();
                                                                        }else if($("#drug_kind").val()==''){
                                                                            alert("กรุณาเลือกชนิดครับ!!!");
                                                                            $("#drug_kind").focus();
                                                                            e.preventDefault();
                                                                        }else{ e.preventDefault();
                                                                            var settings = {
                                                                                type: "POST",
                                                                                url: $.cookie('Readerurl')+"prcbrandAPI.php",
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
                                                        TBBrand("index_content");
                                                        //$("#index_content").empty().load('content/add_user.html');
                                                           
                                                                            })
                                                                             
                                                                     }
                                        }));                            
            }else{
                $.getJSON($.cookie('Readerurl')+'detail_brandAPI.php',{data: recipient}, function (data) { 
                    $("input#brand_name").attr("value",data.brand_name); 
                    selectMash("#mash_pri","DT_medi.php","เลือกตัวยา",data.mash_pri);
            selectMash("#mash_sec","DT_medi.php","เลือกตัวยา",data.mash_sec);
            selectMash("#mash_th","DT_medi.php","เลือกตัวยา",data.mash_th);
            selectMash("#drug_kind","DT_drugkind.php","เลือกชนิด",data.drug_kind);
            $("input#max").attr("value",data.max);
            $("input#min").attr("value",data.min);
            $("#max").attr("onkeyup","inputDigits(this)");
            $("#min").attr("onkeyup","inputDigits(this)"); 
                 
            $("span#Store_detail").append("<input type='hidden' id='method' name='method' value='edit_brand'>"
                                    +"<input type='hidden' id='user_id' name='db_id' value='"+data.db_id+"'>"
                                    +"<input type='hidden' id='path' name='path' value='"+$.cookie('path')+"'>");   
            $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-warning' id='USsubmit'>แก้ไข</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");
            $("#frmaddbrand").on('submit', (function (e) {
                if($("#brand_name").val()==''){
                    alert("กรุณาระบุชื่อยี่ห้อครับ!!!");
                    $("#brand_name").focus();
                    e.preventDefault();
                }else if($("#mash_pri").val()==''){
                    alert("กรุณาเลือกตัวยาหลักครับ!!!");
                    $("#mash_pri").focus();
                    e.preventDefault();
                }else if($("#drug_kind").val()==''){
                    alert("กรุณาเลือกชนิดครับ!!!");
                    $("#drug_kind").focus();
                    e.preventDefault();
                }else{ e.preventDefault();
                                            var settings = {
                                                type: "POST",
                                                url: $.cookie('Readerurl')+"prcbrandAPI.php",
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
                        TBBrand('index_content');
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

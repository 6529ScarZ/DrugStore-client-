function URLModal () {
$("#createModal").empty().append("<div class='modal' id='URLModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<h5 class='modal-title' id='URLModalLabel'></h5>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"
                                    +"<div class='modal-body' id='modelStore'><span id='Store_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-primary' id='suburl'>บันทึก</button><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></div></div></div>");
    $('#URLModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  //var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text('Set URL & Client path')
  $('span#Store_detail').empty().append($("<input type='text' class='form-control' id='url' placeholder='set URL'><br>")
                                    ,$("<input type='text' class='form-control' id='path' placeholder='set Client path'><br>"));
  
            if (typeof(Storage) !== "undefined") {
                 var url = localStorage.getItem("url");
                 var path = localStorage.getItem("path");
                 if(url != ''){
                $("#url").val(url);
                $("#path").val(path);
            } 
            }    
            $("button#suburl").click(function (e) {
            e.preventDefault();
            modal.modal('hide');
            localStorage.setItem("url", $("#url").val());
            localStorage.setItem("path", $("#path").val());
            $("li#first_seturl").remove()
            $("#log").empty().append($("<a class='btn btn-sm btn-success' href='#' id='login' style='color: white'><i class='fa fa-key'></i><b> LOGIN</b></a>"))
            $("a#login").attr("onclick","popup('login_page.html', popup, 400, 300);"); 
            })
      });
}
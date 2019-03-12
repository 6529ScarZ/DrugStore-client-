function DetailSellItemModal() {
    $("#createModal").empty().append("<div class='modal' id='DetailSellItemModal' role='dialog' aria-labelledby='exampleModalLabel'>"
        + "<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><div class='modal-header'>"
        + "<h5 class='modal-title' id='DetailSellItemModalLabel'></h5>"
        + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"
        + "<form action='' name='frmaddLI' id='frmaddLI' method='post' enctype='multipart/form-data'>"
        + "<div class='modal-body' id='modelStore'><span id='bill_detail'></span><span id='bill_method'></span></div>"
        + "<div class='modal-footer'></div></form></div></div></div>");
    $('#DetailSellItemModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('whatever');
        var modal = $(this)
        modal.find('.modal-title').text('รายการขาย BILL NO.' + recipient)
        
        $.getJSON($.cookie('Readerurl') + 'detail_SIAPI.php', { data: recipient }, function (data) {
            //$('span#bill_detail').append($("<input type='text' class='form-control-sm' id='read_barcode2' name='read_barcode2' placeholder='ใส่ Barcode' autofocus> <input type='button' class='btn btn-success' id='plus-btn2' value='+ เพิ่มรายการ'> <input type='button' class='btn btn-danger' id='minus-btn2' value='- ลบรายการ'><p>"))
            var i;
            for (i = 0; i < data.length; i++) {
                $('span#bill_detail').append($("<div class='row' id='d2" + (i + 1) + "'> &nbsp;&nbsp;&nbsp;" + (i + 1) + ".  "
                    + "<div class='col col-lg-4 form-group'>"+data[i].brand_name+"</div>"
                    + "<div class='col col-lg-3 form-group'>จำนวน 1 ชิ้น</div>"
                    + "<div class='col col-lg-4 form-group'> ราคาชิ้นละ" + data[i].sell_price + " บาท</div>"));
            }
                $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");

        });
    });
}

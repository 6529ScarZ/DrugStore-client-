function AddSellItemModal() {
    $("#createModal").empty().append("<div class='modal' id='AddSellItemModal' role='dialog' aria-labelledby='exampleModalLabel'>"
        + "<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><div class='modal-header'>"
        + "<h5 class='modal-title' id='AddSellItemModalLabel'></h5>"
        + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"
        + "<form action='' name='frmaddLI' id='frmaddLI' method='post' enctype='multipart/form-data'>"
        + "<div class='modal-body' id='modelStore'><span id='bill_detail'></span><span id='bill_method'></span></div>"
        + "<div class='modal-footer'></div></form></div></div></div>");
    $('#AddSellItemModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('whatever');
        var modal = $(this)
        modal.find('.modal-title').text('แก้ไขรายการขาย BILL NO.' + recipient)
        
        $.getJSON($.cookie('Readerurl') + 'detail_SIAPI.php', { data: recipient }, function (data) {
            $('span#bill_detail').append($("<input type='text' class='form-control-sm' id='read_barcode2' name='read_barcode2' placeholder='ใส่ Barcode' autofocus> <input type='button' class='btn btn-success' id='plus-btn2' value='+ เพิ่มรายการ'> <input type='button' class='btn btn-danger' id='minus-btn2' value='- ลบรายการ'><p>"))
            var i;
            for (i = 0; i < data.length; i++) {

                $('span#bill_detail').append($("<div class='row' id='d2" + (i + 1) + "'> &nbsp;&nbsp;&nbsp;" + (i + 1) + ".  "
                    + "<div class='col col-lg-6 form-group'><select name='db_id[]' class='form-control select2' id='db_id" + i + "' required></select></div>"
                    + "<div class='col col-lg-2 form-group'><input type='text' name='sell_amount[]' class='form-control form-control-sm' id='sell_amount[]' value='1' placeholder='ระบุจำนวน' readonly></div>"
                    + "<div class='col col-lg-2 form-group'><input type='text' name='sell_price[]' class='form-control form-control-sm' id='sell_price[]' value='" + data[i].sell_price + "' placeholder='ราคาขาย/ชิ้น' readonly></div>"
                    + "<input type='hidden' id='count[]' name='count[]' value='" + i + "'><input type='hidden' id='db_id[]' name='db_id[]' value='" + data[i].bi_id + "'></div>"));

                selectMash("#db_id" + i, "DT_Brander.php", "เลือกยี่ห้อ", data[i].db_id);
            }
            $("span#bill_method").append("<input type='hidden' id='method' name='method' value='edit_lotitem'>"
                + "<input type='hidden' id='li_id' name='li_id' value='" + data.li_id + "'>"
                + "<input type='hidden' id='path' name='path' value='" + $.cookie('path') + "'>"
                + "<input type='hidden' id='lot_id' name='lot_id' value='" + data.lot_id + "'></div></div>");
            $("div.modal-footer").append("<div class='col-md-12' align='right'><button type='submit' class='btn btn-warning' id='USsubmit'>แก้ไข</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div>");

            $('#plus-btn2').click(function () {
                if ($("#read_barcode2").val() == '') {
                    alert("กรุณาระบุ Barcode ครับ!!!");
                    $("#read_barcode2").focus();
                }else {
                            $.getJSON($.cookie('Readerurl') + 'detail_LIAPI(barcode).php', { data: $("#read_barcode2").val() }, function (data) {
                                if (data == 'ไม่มีข้อมูล') {
                                    alert(data);
                                } else {
                                    $('span#bill_detail').append($("<div class='row' id='d2" + (i + 1) + "'> &nbsp;&nbsp;&nbsp;" + (i + 1) + ".  "
                                    + "<div class='col col-lg-6 form-group'><select name='db_id[]' class='form-control select2' id='db_id" + i + "' required></select></div>"
                                    + "<div class='col col-lg-2 form-group'><input type='text' name='sell_amount[]' class='form-control form-control-sm' id='sell_amount[]' value='1' placeholder='ระบุจำนวน' readonly></div>"
                                    + "<div class='col col-lg-2 form-group'><input type='text' name='sell_price[]' class='form-control form-control-sm' id='sell_price[]' value='" + data.sell_price + "' placeholder='ราคาขาย/ชิ้น' readonly></div>"
                                    + "<input type='hidden' id='count[]' name='count[]' value='" + i + "'><input type='hidden' id='db_id[]' name='db_id[]' value='" + data.bi_id + "'></div>"));
                
                                selectMash("#db_id" + i, "DT_Brander.php", "เลือกยี่ห้อ", data.db_id);
                                i++;
                                }
            })
        }
        })
            // $('#plus-btn') console.log($("#read_barcode").val());
            //     if ($("#read_barcode").val() == '') {
            //         alert("กรุณาระบุ Barcode ครับ!!!");
            //         $("#read_barcode").focus();
            //         //e.preventDefault();
            //     } else {
            //         $.getJSON($.cookie('Readerurl') + 'detail_LIAPI(barcode).php', { data: $("#read_barcode").val() }, function (data) {
            //             if (data == 'ไม่มีข้อมูล') {
            //                 alert(data);
            //             } else {
            //                 $("#item-input").append("<div class='row' id='d" + (i + 1) + "'> &nbsp;&nbsp;&nbsp;" + (i + 1) + ".  <div class='col col-lg-2 form-group'><input type='text' name='db_id_[]' class='form-control form-control-sm' id='db_id_[]' value='" + data.brand_name + "' readonly>"
            //                     + "<input type='hidden' id='db_id[]' name='db_id[]' value='" + data.db_id + "'></div>"
            //                     + "<div class='col col-lg-2 form-group'><input type='text' name='sell_price[]' class='form-control form-control-sm' id='sell_price[]' value='" + data.sell_price + "' placeholder='ราคาขาย/ชิ้น' readonly></div>"
            //                     + "<div class='col col-lg-2 form-group'><input type='text' name='sell_amount[]' class='form-control form-control-sm' id='sell_amount[]' value='1' placeholder='ระบุจำนวน' readonly></div>"
            //                     + "<div class='col col-lg-2 form-group'><input type='text' name='expire_date[]' class='form-control form-control-sm' id='expire_date" + i + "' placeholder='วันหมดอายุ' readonly></div>"
            //                     + "<input type='hidden' id='count[]' name='count[]' value='" + i + "'></div>")

            //                 $("#add-button").empty().append($("<input type='hidden' id='method' name='method' value='add_sellitem'>"
            //                     + "<input type='hidden' id='seller' name='seller' value='" + $.cookie("user_id") + "'>"
            //                     + "<input type='hidden' id='path' name='path' value='" + $.cookie('path') + "'>")
            //                     , $("<center><button type='submit' class='btn btn-primary' id='IMsubmit'>ขาย</button></center>"));

            //                 var DP = new DatepickerThai();
            //                 DP.GetDatepicker('input#expire_date' + i);
            //                 $('input#expire_date' + i).datepicker("setDate", new Date(data.expire_date));
            //                 i++;
            //                 if (i != 0) { $('#minus-btn').show() }
            //             }
            //         })
            //     }
            //     $("#read_barcode").val('').focus();
            // });
            $('#minus-btn2').click(function () { console.log($("#read_barcode").val());
                if (i == 1) { $('#minus-btn2').hide(); $("#IMsubmit").hide(); }//else{$('#minus-btn').show()}
                $("div#d2" + i).remove();
                i--;
            });
            $("#frmaddLI").on('submit', (function (e) {
                e.preventDefault();console.log($("#read_barcode").val());console.log($("#plus-btn").val());
                var settings = {
                    type: "POST",
                    url: $.cookie('Readerurl') + "prcimpLIAPI.php",
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
                    AddItem("index_content", data.lot_id);
                })
            }));
        });
    });
}

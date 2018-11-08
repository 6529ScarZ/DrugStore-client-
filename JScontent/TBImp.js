function TBImp (content,id=null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    
    $("li#page").empty().text(" นำเข้ายา")
    $("h2").empty().prepend("<img src='images/icon_set2/gear.ico' width='40'> ").append(" นำเข้ายา")
    $("span.card-title").empty().append(" นำเข้ายา");
    //$("li:nth-child(2)").remove();
    $("li#prev").hide();
    //$("#sel_year").append($("<select name='yearS' class='form-control' id='yearS'></select>"))
    //$("#back").append("ทดสอบ").attr("onclick","loadPage('#index_content','content/risk_report(admin).html');");
    $("#contentGr").empty().append($("<a href='' class='btn btn-success' id='adduser'><i class='fa fa-plus-circle'></i> นำเข้ายา</a>"))   
    $("a#adduser").attr("onclick","AddImpModal();").attr("data-toggle","modal").attr("data-target","#AddImpModal");                 
    var column1 = ["เลขที่","ชื่อร้าน","วันที่นำเข้า","ราคาทั้งหมด","จำนวนรายการ","ผู้นำเข้า","รายละเอียด","เพิ่มรายการ","แก้ไข","ลบ"];
    var idsymp = id;
    if(idsymp == null){
        var CTb = new createTableAjax();
        //RemovejQueryCookie('year')
        
       // GetjQueryCookie('year',nowyear)
                  CTb.GetNewTableAjax('contentTB',$.cookie('Readerurl')+'DT_Import.php',$.cookie('Readerurl')+'tempSendDataAPI.php',column1
                  ,'AddImpModal','lot','lot_id',"TBImp",true,true,"AddItem",true,"detailLot",false,null,null,null,null,null,'dbtb');
        
          }else{ 

          }
        }

function TBSell (content,id=null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    
    $("li#page").empty().text(" รายการขายยา")
    $("h2").empty().prepend("<img src='images/icon_set2/gear.ico' width='40'> ").append(" รายการขายยา")
    $("span.card-title").empty().append(" รายการขายยา");
    //$("li:nth-child(2)").remove();
    $("li#prev").hide();
    //$("#sel_year").append($("<select name='yearS' class='form-control' id='yearS'></select>"))
    //$("#back").append("ทดสอบ").attr("onclick","loadPage('#index_content','content/risk_report(admin).html');");
    // $("#contentGr").empty().append($("<a href='' class='btn btn-success' id='adduser'><i class='fa fa-plus-circle'></i> นำเข้าวัสดุ</a>"))   
    // $("a#adduser").attr("onclick","AddImpModal();").attr("data-toggle","modal").attr("data-target","#AddImpModal");                 
    var column1 = ["เลขที่","วันที่","เวลา","จำนวน","ราคาขาย","ผู้ขาย","รายละเอียด","แก้ไข","ลบ"];
    var idsymp = id;
    if(idsymp == null){
        var CTb = new createTableAjax();
        //RemovejQueryCookie('year')
                CTb.FileDel('DelDrawAPI.php');
       // GetjQueryCookie('year',nowyear)
                  CTb.GetNewTableAjax('contentTB',$.cookie('Readerurl')+'DT_sellitem.php?',$.cookie('Readerurl')+'tempSendDataAPI.php',column1
                  ,'AddSellItemModal','bill','bill_id',"SellDrug",true,false,null,true,"DetailSellItemModal",false,null,null,null,null,null,'dbtb');
                  //CTb.FileDel('1234.php');
          }else{ 

          }
        }

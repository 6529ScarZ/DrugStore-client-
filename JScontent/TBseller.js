function TBSeller (content,id=null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    
    $("li#page").empty().text(" ร้านที่ซื้อยา")
    $("h2").empty().prepend("<img src='images/icon_set2/gear.ico' width='40'> ").append(" ร้านที่ซื้อยา")
    $("span.card-title").empty().append(" ร้านที่ซื้อยา");
    //$("li:nth-child(2)").remove();
    $("li#prev").remove();
    //$("#sel_year").append($("<select name='yearS' class='form-control' id='yearS'></select>"))
    //$("#back").append("ทดสอบ").attr("onclick","loadPage('#index_content','content/risk_report(admin).html');");
    $("#contentGr").empty().append($("<a href='' class='btn btn-success' id='adduser'><i class='fa fa-plus-circle'></i> เพิ่มร้านซื้อยา</a>"))   
    $("a#adduser").attr("onclick","AddSellerModal();").attr("data-toggle","modal").attr("data-target","#AddSellerModal");                 
    var column1 = ["เลขที่","ชื่อร้าน","ที่อยู่","โทรศัพท์","มือถือ","แก้ไข","ลบ"];
    var idsymp = id;
    if(idsymp == null){
        var CTb = new createTableAjax();
        //RemovejQueryCookie('year')
        
       // GetjQueryCookie('year',nowyear)
                  CTb.GetNewTableAjax('contentTB',$.cookie('Readerurl')+'DT_seller.php',$.cookie('Readerurl')+'tempSendDataAPI.php',column1
                  ,'AddSellerModal','seller','comp_id',"TBSeller",true,false,null,false,null,false,null,null,null,null,null,'dbtb');
        
          }else{ 

          }
        }

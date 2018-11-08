function TBBrand (content,id=null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    
    $("li#page").empty().text(" ยี่ห้อยา")
    $("h2").empty().prepend("<img src='images/icon_set2/gear.ico' width='40'> ").append(" ยี่ห้อยา")
    $("span.card-title").empty().append(" ยี่ห้อยา");
    //$("li:nth-child(2)").remove();
    $("li#prev").remove();
    //$("#sel_year").append($("<select name='yearS' class='form-control' id='yearS'></select>"))
    //$("#back").append("ทดสอบ").attr("onclick","loadPage('#index_content','content/risk_report(admin).html');");
    $("#contentGr").empty().append($("<a href='' class='btn btn-success' id='adduser'><i class='fa fa-plus-circle'></i> เพิ่มยี่ห้อยา</a>"))   
    $("a#adduser").attr("onclick","AddBrandModal();").attr("data-toggle","modal").attr("data-target","#AddBrandModal");                 
    var column1 = ["เลขที่","ชื่อยี่ห้อ","ตัวยาหลัก","ตัวยารอง1","ตัวยารอง2","ชนิด","MAX","MIN","คงเหลือ","แก้ไข","ลบ"];
    var idsymp = id;
    if(idsymp == null){
        var CTb = new createTableAjax();
        //RemovejQueryCookie('year')
        
       // GetjQueryCookie('year',nowyear)
                  CTb.GetNewTableAjax('contentTB',$.cookie('Readerurl')+'DT_Brand.php',$.cookie('Readerurl')+'tempSendDataAPI.php',column1
                  ,'AddBrandModal','drug_brand','db_id',"TBBrand",true,false,null,false,null,false,null,null,null,null,null,'dbtb');
        
          }else{ 

          }
        }

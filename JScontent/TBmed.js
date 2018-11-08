function TBMed (content,id=null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    
    $("li#page").empty().text(" ตัวยา")
    $("h2").empty().prepend("<img src='images/icon_set2/gear.ico' width='40'> ").append(" ตัวยา")
    $("span.card-title").empty().append(" ตัวยา");
    //$("li:nth-child(2)").remove();
    $("li#prev").remove();
    //$("#sel_year").append($("<select name='yearS' class='form-control' id='yearS'></select>"))
    //$("#back").append("ทดสอบ").attr("onclick","loadPage('#index_content','content/risk_report(admin).html');");
    $("#contentGr").empty().append($("<a href='' class='btn btn-success' id='adduser'><i class='fa fa-plus-circle'></i> เพิ่มตัวยา</a>"))   
    $("a#adduser").attr("onclick","AddMedModal();").attr("data-toggle","modal").attr("data-target","#AddMedModal");                 
    var column1 = ["เลขที่","ชื่อยา","แก้ไข","ลบ"];
    var idsymp = id;
    if(idsymp == null){
        var CTb = new createTableAjax();
        //RemovejQueryCookie('year')
        
       // GetjQueryCookie('year',nowyear)
                  CTb.GetNewTableAjax('contentTB',$.cookie('Readerurl')+'DT_Med.php',$.cookie('Readerurl')+'tempSendDataAPI.php',column1
                  ,'AddMedModal','medicinal','med_id',"TBMed",true,false,null,false,null,false,null,null,null,null,null,'dbtb');
        
          }else{ 

          }
        }

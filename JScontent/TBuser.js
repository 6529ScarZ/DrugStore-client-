function TBUser (content,id=null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    
    $("li#page").empty().text(" ผู้ใช้งานระบบ")
    $("h2").empty().prepend("<img src='images/icon_set2/gear.ico' width='40'> ").append(" ผู้ใช้งานระบบ")
    $("span.card-title").empty().append(" ผู้ใช้งานระบบ");
    //$("li:nth-child(2)").remove();
    $("li#prev").remove();
    //$("#sel_year").append($("<select name='yearS' class='form-control' id='yearS'></select>"))
    //$("#back").append("ทดสอบ").attr("onclick","loadPage('#index_content','content/risk_report(admin).html');");
    $("#contentGr").empty().append($("<a href='' class='btn btn-success' id='adduser'><i class='fa fa-plus-circle'></i> เพิ่มผู้ใช้งาน</a>"))   
    $("a#adduser").attr("onclick","AddUserModal();").attr("data-toggle","modal").attr("data-target","#AddUserModal");                 
    var column1 = ["เลขที่","รายชื่อ","สถานะ","username","แก้ไข","ลบ"];
    var idsymp = id;
    if(idsymp == null){
        var CTb = new createTableAjax();
        //RemovejQueryCookie('year')
        
       // GetjQueryCookie('year',nowyear)
                  CTb.GetNewTableAjax('contentTB',$.cookie('Readerurl')+'DT_User.php',$.cookie('Readerurl')+'tempSendDataAPI.php',column1
                  ,'AddUserModal','user','user_id',"TBUser",true,false,null,false,null,false,null,null,null,null,null,'dbtb');
        
          }else{ 

          }
        }

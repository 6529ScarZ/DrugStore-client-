$("nav#head-nav").empty().append($("<a class='navbar-brand' href='#'><img src='images/cross.ico' width='35' class='d-inline-block align-top' alt=''><b>  Drug Store system.v.1.0</b></a>")
                                ,$("<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button>")
                                ,$("<div class='collapse navbar-collapse justify-content-end' id='navbarNavDropdown'><ul class='navbar-nav'></ul></div>"));
$("ul.navbar-nav").empty().append($("<li class='nav-item' id='log'></li>"));
                      
$("nav#foot-nav").empty().append($("<span style='color: white'>Copyright &copy; 2018 <a class='linkfoot' href='https://www.facebook.com/thapanapong.deeudomchan' target='_blank'>ScarZ</a>.</span> All rights reserved.")
        ,$("<div class='pull-right hidden-xs'><span id='version' style='color: white'></span></div>"));
                    $("#version").append("<b>Version</b> 1.0");                                  

                    if($.cookie("user_id")){
                        $("#login").remove();
                        $("#log").empty().append($("<li class='nav-item dropdown'>"
                        +"<a class='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"+$.cookie("name")+"</a>"
                        +"<div id='list2' class='dropdown-menu dropdown-menu-right' aria-labelledby='navbarDropdownMenuLink'></div></li>"))
                        
                        if($.cookie("photo")){
                            var photo = "USERimgs/"+$.cookie("photo");
                        }else{
                            var photo = "images/person.png";
                        }
                        $("#list2").empty().append($("<center><span class='dropdown-item'><img src='"+photo+"' width='75' class='rounded-circle'></span></center>")
                                                    ,$("<center><a class='dropdown-item' id='logout' href='#'>LOGOUT</a></center>"))

                        if($.cookie("user_status")=='Y'){                          
                        $("ul.navbar-nav").append($("<li class='nav-item dropdown'>"
                                    +"<a class='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i class='fa fa-gears'></i></a>"
                                    +"<div id='list1' class='dropdown-menu dropdown-menu-right' aria-labelledby='navbarDropdownMenuLink'></div></li>"));
            $("#list1").empty().append($("<a class='dropdown-item' id='preimport' href='#'><i class='fa fa-gear'></i> นำเข้า</a>")
                                    ,$("<a class='dropdown-item' id='presell' href='#'><i class='fa fa-gear'></i> รายการขาย</a><div class='dropdown-divider'></div>")
                                    ,$("<a class='dropdown-item' id='preuser' href='#'><i class='fa fa-gear'></i> ผู้ใช้งาน</a>")
                                    ,$("<a class='dropdown-item' href='#' id='preseller'><i class='fa fa-gear'></i> ร้านซื้อยา</a>")
                                    ,$("<a class='dropdown-item' href='#' id='premed'><i class='fa fa-gear'></i> ตัวยา</a>")
                                    ,$("<a class='dropdown-item' href='#' id='prebrand'><i class='fa fa-gear'></i> ยี่ห้อยา</a>")
                                    ,$("<div class='dropdown-divider'></div><a class='dropdown-item' href='#' id='smReader'><i class='fa fa-gear'></i> set URL</a>")
                                            );
                    $("a#preimport").attr("onclick","TBImp('#index_content');");  
                    $("a#presell").attr("onclick","TBSell('#index_content');");                       
                    $("a#preuser").attr("onclick","TBUser('#index_content');");
                    $("a#preseller").attr("onclick","TBSeller('#index_content');");
                    $("a#premed").attr("onclick","TBMed('#index_content');");
                    $("a#prebrand").attr("onclick","TBBrand('#index_content');");
                    $("a#smReader").attr("onclick","URLModal();").attr("data-toggle","modal").attr("data-target","#URLModal");
                                        }
                    }else{
                        $("#logout").remove();
                        console.log(localStorage.getItem("url"));
                        if(!localStorage.getItem("url")){
                            $("ul.navbar-nav").append($("<li class='nav-item dropdown' id='first_seturl'>"
                                                    +" <a href='#' id='smReader'> <i class='fa fa-gears'></i> set URL</a></li>"))
                            $("a#smReader").attr("onclick","URLModal();").attr("data-toggle","modal").attr("data-target","#URLModal");
                        }else{
                            $("li#first_seturl").remove()
                            $("#log").empty().append($("<a class='btn btn-sm btn-success' href='#' id='login' style='color: white'><img src='images/icon_set2/key.ico' width='25'><b> LOGIN</b></a>"))
                            $("a#login").attr("onclick","LoginModal();").attr("data-toggle","modal").attr("data-target","#LoginModal");
                        }
                    }
       
        $("#logout").click(function(e) {
           e.preventDefault();
           $.removeCookie("user_id");
           $.removeCookie("name");
           $.removeCookie("user_status");
           $.removeCookie("Readerurl");
           $.removeCookie("path");
           $.removeCookie("photo");
           alert('logout เรียบร้อยครับ');
           window.location.reload();
        })


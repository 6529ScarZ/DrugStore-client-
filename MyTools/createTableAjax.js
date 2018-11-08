var createTableAjax = function () {
    
    this.GetNewTableAjax = function (content,jsonsource,tempdata,cols,namefunc=null,deltable=null,delfield=null,resend=null,edit=false,process=false,pnamefunc=null
                                    ,detail=false,dmodal=null,print=false,printpage=null,red=null,orange=null,yellow=null,green=null,tid1=null,tid2=null,tid3=null) {
                var table = document.createElement ("table");
            	//table.border = "1px";
                if(tid1!=null){
                    var tid=tid1;
                }else if(tid2!=null){
                    var tid=tid2;
                }else if(tid3!=null){
                    var tid=tid3;
                }//console.log(tid1);console.log(tid);
                table.setAttribute("id", tid);
                table.setAttribute("class", "table table-border table-hover");
                table.setAttribute("frame","below");
                var tHead = document.createElement ("thead");
                tHead.setAttribute("bgcolor","#898888");
                tHead.setAttribute("style","text-align: center");
                table.appendChild (tHead);
                var rowh = tHead.insertRow (-1);
                var cellh;
                for (var keys in cols) {
                    cellh = rowh.insertCell (-1);
                    cellh.innerHTML = cols[keys];
                }
            	var tBody = document.createElement ("tbody");
            	table.appendChild (tBody);
                tBody.setAttribute("style","text-align: center");
                var jsonsub=jsonsource.split("?");
                var form = new FormData();
                $.each( jsonsub, function( key, value ) {
                    if(key!=0){
                        form.append("data"+key, value);
                    }
                  });
                var settings = {
                    type: "POST",
                    url: jsonsub[0],
                    async: true,
                    crossDomain: true,
                    data:form,
                    contentType: false,
                    cache: false,
                    processData: false
                  }
                $.when($.ajax(settings)).then( function (dataTB, textStatus, xhr) { 
                    if(xhr.readyState==3){
                        $('#' + content + '').html("กำลังโหลดจ้า.... ^_^ ");
                    } 
                var value=[];
                    if (dataTB != null && dataTB.length > 0) {
                for (var i = 0; i < dataTB.length; i++) {
                		var row = tBody.insertRow (-1);
                                var I=0;
                                    $.each( dataTB[i], function( dkey, val ) {
                    			var cell = row.insertCell (-1);
                    				cell.innerHTML = val;
                                                value[I]=val;
                                                I++;
                		});

                                if(print==true){
                                        var cellEdit = row.insertCell (-1);
					editButton = document.createElement("a");
					cellEdit.appendChild(editButton);
					editButton.innerHTML = "<img src='images/printer.ico' width='25'>";
					editButton.setAttribute("href","#");
                                        editButton.setAttribute("onclick","window.open('"+printpage+"?id="+value[0]+"', '', 'width=820,height=1000');return false;");
                                }                                           
                                if(detail==true){
                                     var modalsub=dmodal.split("?");
                                        var cellEdit = row.insertCell (-1);
					editButton = document.createElement("a");
					cellEdit.appendChild(editButton);
					editButton.innerHTML = "<img src='images/icon_set1/file_search.ico' width='25'>";
					editButton.setAttribute("href","#");
                                        editButton.setAttribute("onclick",modalsub[0]+"("+modalsub[1]+")");
                                        editButton.setAttribute("data-toggle","modal");
                                        editButton.setAttribute("data-target","#"+modalsub[0]);
                                        editButton.setAttribute("data-whatever",value[0]);
                                }
                                if(process==true){
                                        var cellEdit = row.insertCell (-1);
					editButton = document.createElement("a");
					cellEdit.appendChild(editButton);
					editButton.innerHTML = "<img src='images/icon_set1/file_add.ico' width='25'>";
					editButton.setAttribute("href","#");
                                        editButton.setAttribute("onclick","loadAjax('#index_content','"+tempdata+"','"+value[0]+"','"+pnamefunc+"');");
                                }
                                if(edit==true){
                                        var cellEdit = row.insertCell (-1);
					editButton = document.createElement("a");
					cellEdit.appendChild(editButton);
					editButton.innerHTML = "<img src='images/icon_set1/file_edit.ico' width='25'>";
                    editButton.setAttribute("href","#");
                    editButton.setAttribute("onclick",namefunc+"()");
                                        editButton.setAttribute("data-toggle","modal");
                                        editButton.setAttribute("data-target","#"+namefunc);
                                        editButton.setAttribute("data-whatever",value[0]);
                                        //editButton.setAttribute("onclick","loadAjax('#index_content','"+tempdata+"','"+value[0]+"','"+namefunc+"');");
                                        

					var cellDel = row.insertCell (-1);
					delButton = document.createElement("a");
					cellDel.appendChild(delButton);
					delButton.innerHTML = "<img src='images/icon_set1/file_delete.ico' width='25'>";
					delButton.setAttribute("href","#");
					delButton.setAttribute("onclick","DeleteData('http://localhost/DrugAPI/API/DeleteFileAPI.php','"+deltable+"','"+delfield+"','"+value[0]+"','"+resend+"','html');");
                                    }
            }
//            	var container = document.getElementById (content);
//            	container.appendChild(table);
                $('#' + content + '').html(table);
            }else{
                $('#' + content + '').text("ไม่มีข้อมูลแสดงครับ ^_^ ");
            }
//            $("td:contains("+red+")").attr("style","background-color: #d61b1b;color: white");
//            $("td:contains("+orange+")").attr("style","background-color: #e08002;color: white");
//            $("td:contains("+yellow+")").attr("style","background-color: #e3fc07;");
            //$("td:contains("+green+")").attr("style","background-color: #40ad57;color: white");
            $("td:contains("+red+")").empty().append($("<font color='#ff0000'><span class='fa fa-times-circle fa-2x'></span></font>"));
            $("td:contains("+orange+")").attr("style","background-color: #e08002;color: white");
            $("td:contains("+yellow+")").empty().append($("<font color='#e9b603'><span class='fa fa-exclamation-circle fa-2x'></span></font>"));
            $("td:contains("+green+")").empty().append($("<font color='#158d06'><span class='fa fa-check-circle fa-2x'></span></font>"));
            $("#"+tid1+"").DataTable();
            $("#"+tid2+"").DataTable({
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": true,
            "info": true,
            "autoWidth": false
        });
        $("#"+tid3+"").DataTable({
            "paging": false,
            "lengthChange": true,
            "searching": true,
            "ordering": true,
            "info": true,
            "autoWidth": true
        });
          
    });
    }    

            
        }

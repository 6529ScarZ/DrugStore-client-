var ReportLayout = function(content){
    this.content = content;
    this.GetRL= function (){
            var layout = "<h2 style='color: blue'></h2>"+
            "<nav aria-label='breadcrumb' id='nav_bc'><ol class='breadcrumb alert alert-success'>"+
            "<li class='breadcrumb-item'><a href='index.html'><i class='fa fa-home'></i> หน้าหลัก</a></li>"+
            "<li class='breadcrumb-item' id='prev'><a href='#' id='back'> </a></li>"+
            "<li class='breadcrumb-item active' aria-current='page' id='page'> </li></ol></nav>"+
            "<div class='row'>"+
            "<div id='sel_year' class='col-md-3 col-md-offset-9 form-group'></div>"+
            "<div class='col-md-12'>"+
            "<div class='card border-success'>"+
            "<div class='card-header'><b style='color: green'><i class='fa fa-star'></i> <span class='card-title'></span></b></div>"+
            "<div class='card-body' id='add_body'>"+
            "<div align='center' id='Budget'></div><div id='contentGr'></div><br><div id='contentTB'></div>"+
            "</div></div></div>";
        $(this.content).empty().append(layout);
    }
}
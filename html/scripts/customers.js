$(document).ready(function() {


    $.ajax({url: "http://localhost:3000/cust/customers", success: function(result){
        $("#d_tbody").empty();
            $.each(result, function(key, val){
                var cId, cName,cLocation, dstatus;
                $.each(val, function(k, vals){
                    if (k== "customer_id"){
                        cId = vals;
                    }else if(k== 'customer_name'){
                        cName = vals;
                    }else if (k== "customer_location"){
                        cLocation = vals;
                    }else if(k == 'status'){
                         dstatus = vals;
                    }else{
                        
                    }
                });
                var avail = '<div class="dropdown inline"><button class="btn btn-success dropdown-toggle" data-toggle="dropdown">'
                +dstatus+' </button>'
                +'<div class="dropdown-menu pull-right">'
                +' <a class="dropdown-item" href="#">Available</a>'
                +'  <a class="dropdown-item" href="#">Assigned</a>'
                +'  <a class="dropdown-item" href="#">in-progress</a>'
                +'</div>';
                var assig = '<div class="dropdown inline"><button class="btn btn-info dropdown-toggle" data-toggle="dropdown">'
                +dstatus+' </button>'
                +'<div class="dropdown-menu pull-right">'
                +' <a class="dropdown-item" href="#">Available</a>'
                +'  <a class="dropdown-item" href="#">Assigned</a>'
                +'  <a class="dropdown-item" href="#">inactive</a>'
                +'</div>';
                var inactive = '<div class="dropdown inline"><button class="btn btn-danger dropdown-toggle" data-toggle="dropdown">'
                +dstatus+' </button>'
                +'<div class="dropdown-menu pull-right">'
                +' <a class="dropdown-item" href="#">Available</a>'
                +'  <a class="dropdown-item" href="#">Assigned</a>'
                +'  <a class="dropdown-item" href="#">inactive</a>'
                +'</div>';
                var statusbtn;
                if(dstatus == 'active'){
                    statusbtn = avail
                }else if(dstatus == 'closed'){
                    statusbtn = inactive
                }
                var row = "<tr><td>"+cId+"</td><td>"+cName+"</td><td>"+cLocation+"</td><td>"+statusbtn+"</td></tr>";
                    $("#d_tbody").append(row);
            });
            $("#driver_table").DataTable();
        }});

    
} );
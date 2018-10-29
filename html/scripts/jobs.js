$(document).ready(function() {


    $.ajax({url: "http://localhost:3000/job/jobs", success: function(result){
        $("#d_tbody").empty();
            $.each(result, function(key, val){
                var cId, cName,jId,jLocation, jName,sdate, dstatus;
                $.each(val, function(k, vals){
                    if (k== "customer_id"){
                        cId = vals;
                    } else if(k== 'customer_name'){
                        cName = vals;
                    }if (k== "job_id"){
                        jId = vals;
                    } else if(k== 'job_location'){
                        jLocation = vals;
                    }if (k== "job_name"){
                        jName = vals;
                    } else if(k== 'start_date'){
                        sdate = vals;
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
                if(dstatus == 'running'){
                    statusbtn = avail
                }else if(dstatus == 'closed'){
                    statusbtn = inactive
                }
                var row = "<tr><td>"+cId+"</td><td>"+cName+"</td><td>"+jId+"</td><td>"+jName+"</td><td>"+jLocation+"</td><td>"+sdate+"</td><td>"+statusbtn+"</td></tr>";
                    $("#d_tbody").append(row);
            });
            $("#driver_table").DataTable();
        }});

    
} );
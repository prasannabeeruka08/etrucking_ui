$(document).ready(function() {


    $.ajax({url: "http://localhost:3000/dri/drivers", success: function(result){
        $("#d_tbody").empty();
            $.each(result, function(key, val){
                var dId, dName, tt, dstatus;
                $.each(val, function(k, vals){

                    if (k== "driver_id"){
                         dId = vals;
                    } else if(k== 'driver_name'){
                         dName = vals;
                    }else if(k == 'tt'){
                         tt = vals;
                    }else if(k == 'status'){
                         dstatus = vals;
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
                if(dstatus == 'available'){
                    statusbtn = avail
                }else if(dstatus == 'assigned'){
                    statusbtn = assig
                }else if(dstatus == 'inactive'){
                    statusbtn = inactive
                }
                var row = "<tr><td>"+dId+"</td><td>"+dName+"</td><td>"+tt+"</td><td>"+statusbtn+"</td></tr>";
                    $("#d_tbody").append(row);
            });
            $("#driver_table").DataTable();
        }});

        $("#saveDriver").click(function(){

            var driver = {
                driver_id: $("#driver_id").val(),
                driver_name:$("#driver_name").val(),
                tt:$("#truck_type").val(),
                status:"available"
            }
            $.ajax({
                url: "http://localhost:3000/dri/driver", 
                data: JSON.stringify(driver),
                type: 'post',
                dataType: 'json',
                contentType: 'application/json',    
                success: function(result){
                    if(result.msg == "success"){
                        alert("contact added successfully");
                        location.reload();
                    }else{
                        alert(result.msg);
                        console.log(result.msg);
                    }      
                }
        });
        });
    
} );
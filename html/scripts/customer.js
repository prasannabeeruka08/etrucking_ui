$(document).ready(function() {


    $.ajax({url: "http://localhost:3000/api/contacts", success: function(result){
            alert(result);
            console.log(result);
            $.each(result, function(key, val){
                $.each(val, function(k, vals){
                    if (k== "first_name"){
                        var fname = vals;
                    }
                    
                console.log(fname);
                })
                
            });
            $("#div1").html(result);
        }});

    $("#driver_table").DataTable();
} );
$(document).ready(function(){

    $("#getdata").click(function(){
        alert("test");
        $.ajax({url: "http://localhost:3000/api/contacts", success: function(result){
            alert(result);
            console.log(result);
            $("#div1").html(result);
        }});
    });
    $("#AddNewContactDetails").click(function(){
        var div = '<div class="col-sm-6"><div class="md-form-group"><input class="md-input" placeholder="Phone / Email"></div></div><div class="col-sm-6"><div class="md-form-group"><input class="md-input"></div></div>';
        $("#NewContactDetails").append(div);
    });
});
$(document).ready(function(){

    $("#getdata").click(function(){
        alert("test");
        $.ajax({url: "http://localhost:3000/api/contacts", success: function(result){
            alert(result);
            console.log(result);
            $("#div1").html(result);
        }});
    });
    var counter = 0;
    $("#AddNewContactDetails").click(function(){
        var div = '<div class="col-sm-6"><div class="md-form-group"><input class="md-input" id = "contact'+counter+'" placeholder="Phone / Email"></div></div><div class="col-sm-6"><div class="md-form-group"><input id = "details'+counter+'" class="md-input"></div></div>';
        counter ++;
        $("#NewContactDetails").append(div);
    });
    $("#AddNewCustomer").click(function(){
        var customerId = $("#customerId").val(),
        customerName = $("#customerName").val(),
        address = $("#address").val(),
        city = $("#city").val(),
        state = $("#state").val(),
        zipcode = $("#zipcode").val(),
        notes = $("#notes").val(),
        phone1 = $("#phone1").val(),
        phone2 = $("#phone2").val(),
        email1 = $("#email1").val(),
        email2 = $("#email2").val();
    });
});
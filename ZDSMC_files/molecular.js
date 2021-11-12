$(document).ready(function(){
    var idqr = $('#qrcode').val();
    ifetchdata(idqr);
});
function ifetchdata(icrud){
    $.ajax({
        method: 'POST',
        url: 'Obj/ifetch_molecular.php',
        data: {id:icrud},
        dataType: 'JSON',
        success: function(icrud){
            if(icrud.data.spec_no == null){
                alert("No records found!");
                $('#lblspecimen').html("<p>--</p>");
                $('#lblname').html("<p>--</p>");
                $('#lbladdress').html("<p>--</p>");
                $('#lblagesex').html("<p>--</p>");
                $('#lblbirth').html("--");
                $('#lblfacility').html("--");
                $('#lblscpecimentype').html("--");
                $('#lbltimecollect').html("--");
                $('#lbltimereceived').html("--");
                $('#lbltimereleased').html("--");
                $('#lblhosno').html("--");
                $('#lblpassport').html("--");
                $('#lblcontact').html("--");
                $('#lbltestresult').html("TEST RESULT: --");
                $('#lblinterpretation').html("INTERPRETATION OF RESULT: --");
               }else{
                $('#lblspecimen').html(icrud.data.spec_no);
                $('#lblname').html(icrud.data.spec_full);
                $('#lbladdress').html(icrud.data.spec_address);
                $('#lblagesex').html(icrud.data.spec_age +' '+ icrud.data.spec_gender );
                $('#lblbirth').html(icrud.data.spec_dob);
                $('#lblfacility').html(icrud.data.spec_facility);
                $('#lblscpecimentype').html(icrud.data.spec_type);
                $('#lbltimecollect').html(icrud.data.spec_collect);
                $('#lbltimereceived').html(icrud.data.spec_received);
                $('#lbltimereleased').html(icrud.data.spec_released);
                $('#lblhosno').html(icrud.data.spec_hosp_no);
                $('#lblpassport').html(icrud.data.spec_passport);
                $('#lblcontact').html(icrud.data.spec_contact);
                $('#lbltestresult').html("TEST RESULT: " + icrud.data.spec_result_desc);
                if(icrud.data.spec_interpretation == "NEGATIVE"){
                    $('#lblinterpretation').html("INTERPRETATION OF RESULT: " + "<span style='color: red'>" + icrud.data.spec_interpretation + "</span>");
                }else{
                    $('#lblinterpretation').html("INTERPRETATION OF RESULT: " + "<span style='color: green'>" + icrud.data.spec_interpretation + "</span>");
                }
               }
        }
      });
  }

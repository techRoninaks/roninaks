function apply_Career()
{
    var name=document.getElementById('c_name').value;
    var phone=document.getElementById('c_phone').value;
    var email=document.getElementById('c_email').value;
    var date=document.getElementById('dob').value;
    var cv=my_file;
    var datas='name='+name+'&phone='+phone+'&email='+email+'&date='+date+'&cv='+cv;

    $.ajax({
        type:"POST",
        data: datas,
        url:"career.php",
        success: function (responseData) {
            window.location.reload();
            alert("Data Saved Successfully");
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            // demo.showNotification('top','center', 'Something went wrong', 4);
            // window.location = window.location.origin;
        }
    });
    return false;
}
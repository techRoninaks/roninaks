function ad_call()
{

    
    $.ajax({type:"GET",url: "advert_call.php", success: function(result){
            populate(JSON.parse(result));

        }});
    }     
    function design_call()
   {
       $.ajax({type:"GET",url:"design_call.php",success: function(result){
           populate_des(JSON.parse(result));
       } });
   } 

   function project()
   {
       $.ajax({type:"GET",url:"advert_call.php",success: function(result){
           populate_pro(JSON.parse(result));!important
       }});
   }
// var temp="<div class='card p-3 col-12 col-md-6 col-lg-3'>"+
// "<div class='card-wrapper'>"+
//     "<div class='card-img'>"+
//         "<img src='assets/images/ezgif.com-crop.gif' alt='WinsIndia' title=''>"+
//     "</div>"+
//     "<div class='card-box'>"+
//         "<h4 class='card-title pb-3 mbr-fonts-style display-7'>"+
//            "WinsIndia&nbsp;</h4>"+
//         "<p class='mbr-text mbr-fonts-style display-7'>"+
//             "UI/UX design for WinsIndia Website. The website, themed around the company domains outline their various line of work<br>"+
//         "</p>"+
//     "</div>"+
// "</div>"+
// "</div>";



function populate(data){
var temp="";
// console.log(data[0].id);
for(i=0;i<data.length;i++)
{

    temp = temp + "<div class='cardPadding'>"+
    "<div class='card-wrapper'>"+
        "<div class='card-img'>"+
            "<img src='"+data[i].image+"'alt='WinsIndia' title="+data[i].title+">"+
        "</div>"+
        "<div class='card-box'>"+
            "<h4 class='card-title pb-3 mbr-fonts-style display-7'>"+data[i].title+"</h4>"+
            "<p class='mbr-text mbr-fonts-style display-7'>"+data[i].summary+" <br>"+
            "</p>"+
        "</div>"+
    "</div>"+
    "</div>";


}

document.getElementById("here").innerHTML=temp;
}


function populate_des(data)
{
    var temp="";
    // console.log(data[0].id);
    for(i=0;i<data.length;i++)
    {

     temp = temp + "<div class='mbr-gallery-item mbr-gallery-item--p0' data-video-url='false' data-tags='Illustrations'>"+
     "<div href='#lb-gallery3-1j' data-slide-to='0' data-toggle='modal'>"+
         "<img src="+data[i].image+" alt='Purffy' title=''>"+
         "<span class='icon-focus'></span>"+
         "<span class='mbr-gallery-title mbr-fonts-style display-7'>"+data[i].title+"</span>"+
     "</div>"+
 "</div>";
    }
    document.getElementById("try").innerHTML=temp;

}
 function populate_pro(data)
 {
     var temp="";
     console.log(data[0].id);
     for(i=0;i<4;i++)
     {
      temp = temp +"<div class='team-item col-lg-3 col-md-6'>"+
        "<div class='item-image'>"+
            "<img src="+data[i].image+" alt='Technospan' title=''>"+
        "</div>"+ 
        "<div class='item-caption py-3'>"+
            "<div class='item-name px-2'>"+
                "<p class='mbr-fonts-style display-5'>"+data[i].title+"</p>"+
            "</div>"+
            "<div class='item-role px-2'>"+
                "<p>"+data[i].summary+"</p>"+
            "</div>"+
            "</div>"+
    "</div>";
     }
     document.getElementById("pro").innerHTML=temp;
 }


$(document).ready(function()
                {
 $('#search').click(function()
                  {
   var str=$('#text').val();
  
    if ($.trim(str).length == 0) {
      
    $("#article").html("");
      return;
   }
   
   console.log(str);
   var url="http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+str+"&callback=?";
   $.ajax({
     type:"GET",
     url:url,
     async:false,
     dataType:"json",
     success:function(data)
     {
       console.log(data[1].length);
       console.log(url);
       for(i=0;i<data[1].length;i++)
         {
           $("#article").prepend("<div id='item'><p><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></div>");
           
         }
     },
     error:function(errorMessage)
     {
       
     }
     
   });
   
 });
  
});
  
  
  
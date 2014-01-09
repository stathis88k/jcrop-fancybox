$(document).ready(function() {
  $(".fancybox").fancybox({
   afterShow:function() 
   {
     var curr_url=window.location.pathname+window.location.search; //get the current url
     var img_src=$( '.fancybox-inner' ).find('img').attr("src");//get the source of the image
     var img_width=$( '.fancybox-inner' ).find('img').width();//get the width of the image as displayed on the browser
     var img_height=$( '.fancybox-inner' ).find('img').height();//get the width of the image as displayed on the browser
     var html_form="<form action='crop.php' method='post'>"+ //create the form and add the attributes
                    "<input type='hidden' id='curr_url' name='curr_url' value="+curr_url+" />"+
                    "<input type='hidden' id='img_src' name='img_src' value="+img_src+" />"+
                    //I add the following 2 lines to ensure that we get the current image width and height as displayed
                    //on the browser. If an image is too big for user's browser, the browser resize the image 
                    //to the browser's window max dimensions. With this we ensure that we get the dimensions of the
                    //current window and not of the real image and the crop will be fine.
                    "<input type='hidden' id='img_width' name='img_width' value="+img_width+"/>"+ 
                    "<input type='hidden' id='img_height' name='img_height' value="+img_height+"/>"+
                    "<input type='hidden' id='x' name='x' />"+//set the x,y,w,h of the new cropped image
                    "<input type='hidden' id='y' name='y' />"+
                    "<input type='hidden' id='w' name='w' />"+
                    "<input type='hidden' id='h' name='h' />"+
                    "<input type='submit' id='crop_image' name='crop_image' value='crop'>"+ //submit the image for crop
    $( '.fancybox-inner' ).append(html_form); //append the form inside fancybox
    $( '.fancybox-inner' ).find('img').Jcrop({
                    		onSelect: updateCoords //update the coords when we crop
      },
    function() { $.fancybox.resize(); /*Jcrop onload callback */ }); 
                      
      }
});

function updateCoords(c) //update the cropped image cords on change
{
  $('#x').val(c.x);
  $('#y').val(c.y);
  $('#w').val(c.w);
  $('#h').val(c.h);
};

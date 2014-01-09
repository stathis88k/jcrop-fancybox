 $(document).ready(function() {
                $(".fancybox").fancybox({
                    openEffect: 'none',
                    closeEffect: 'none',
                    arrows : false,
                    afterShow:function() 
                    {
                    	var curr_url=window.location.pathname+window.location.search; 
                        var img_src=$( '.fancybox-inner' ).find('img').attr("src");
                        var img_width=$( '.fancybox-inner' ).find('img').width();
                        var img_height=$( '.fancybox-inner' ).find('img').height();
                        var html_form="<form action='js/jcrop/crop.php' method='post'>"+
                        	"<input type='hidden' id='curr_url' name='curr_url' value="+curr_url+" />"+
                            "<input type='hidden' id='img_src' name='img_src' value="+img_src+" />"+
                            "<input type='hidden' id='img_width' name='img_width' value="+img_width+"/>"+
                            "<input type='hidden' id='img_height' name='img_height' value="+img_height+"/>"+
                            "<input type='hidden' id='x' name='x' />"+
                            "<input type='hidden' id='y' name='y' />"+
                            "<input type='hidden' id='w' name='w' />"+
                            "<input type='hidden' id='h' name='h' />"+
                            "<input type='submit' id='crop_image' name='crop_image' value='crop'>"+
                            "<input type='submit' id='rotate_image' name='rotate_image_270' value='Rotate -90o'>"+
                            "<input type='submit' id='rotate_image' name='rotate_image_90' value='Rotate 90o'>"+
                            "<input type='submit' id='rotate_image' name='rotate_image_180' value='Rotate 180o'>";
                    	$( '.fancybox-inner' ).append(html_form);

                      	$( '.fancybox-inner' ).find('img').Jcrop({
                    		onSelect: updateCoords
                    	},
                          function() { $.fancybox.resize(); /*Jcrop onload callback */ }); 
                      
                    }
                });

                function updateCoords(c)
                {
                    $('#x').val(c.x);
                    $('#y').val(c.y);
                    $('#w').val(c.w);
                    $('#h').val(c.h);
                };

<?php
  $targ_w = 396; //set the width of the new image
	$targ_h = 528; //set the height og the new image
	$jpeg_quality = 100; //set the quality of th new image
	
	$src = $_POST['img_src']; //get the image source

	$img_r = imagecreatefromjpeg($src); //open the image
	$dst_r = ImageCreateTrueColor( $targ_w, $targ_h ); //create a new image

	imagecopyresampled($dst_r,$img_r,0,0,$_POST['x'],$_POST['y'],
	$targ_w,$targ_h,$_POST['w'],$_POST['h']); // create the new image with the specified width and height from jcrop
	
	unlink($src); //delete the old image
	imagejpeg($dst_r,$src,$jpeg_quality); // save the new image
	imagedestroy($img_r); // remove the image from memory
	$return_to=$_POST['curr_url']; 
	header("Location: $return_to"); //return to the current url
?>

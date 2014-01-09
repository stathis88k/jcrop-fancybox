<?php

$jpeg_quality = 100; //set the quality of th new image

if (isset($_POST['crop_image']))
{
  $targ_w = 396; //set the width of the new image
  $targ_h = 528; //set the height og the new image
        
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
}

if (isset($_POST['rotate_image_270']))
{
	$src = $_POST['img_src'];//get the image source
	$img_r = imagecreatefromjpeg($src);//open the image
	$degrees=270;//set the degrees to rotate
	$dst_r = imagerotate($img_r, $degrees, 0); //rotatet the image
	unlink($src); //delete the old image
	imagejpeg($dst_r,$src,$jpeg_quality); //save the new image
	imagedestroy($img_r);//remove the image from memory
	$return_to=$_POST['curr_url'];
	header("Location: $return_to");//return to the current url

}

if (isset($_POST['rotate_image_90']))
{
	$src = $_POST['img_src'];
	$img_r = imagecreatefromjpeg($src);
	$degrees=90;
	$dst_r = imagerotate($img_r, $degrees, 0);
	unlink($src);
	imagejpeg($dst_r,$src,$jpeg_quality);
	imagedestroy($img_r);
	$return_to=$_POST['curr_url'];
	header("Location: $return_to");

}

if (isset($_POST['rotate_image_180']))
{
	$src = $_POST['img_src'];
	$img_r = imagecreatefromjpeg($src);
	$degrees=180;
	$dst_r = imagerotate($img_r, $degrees, 0);
	unlink($src);
	imagejpeg($dst_r,$src,$jpeg_quality);
	imagedestroy($img_r);
	$return_to=$_POST['curr_url'];
	header("Location: $return_to");

}

?>

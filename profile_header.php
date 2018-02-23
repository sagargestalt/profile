<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#" ng-app="material" ng-cloak>
    <head>
        <meta charset="utf-8">
	    <base href="<?php echo base_url(); ?>" />
	    <meta property="fb:app_id" content="1172282412829902" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:type" content="website" /> 
        <meta property="og:image" content="<?php echo base_url().$this->profile_data['getProfile']['personal'][0]->PROFILE_IMAGE; ?>" />
		<meta property="og:url" content="<?php echo base_url().'Profile/'.$this->profile_data['getProfile']['personal'][0]->HANDLE; ?>" />
		<meta property="og:title" content="<?php echo $this->profile_data['getProfile']['personal'][0]->USER_NAME;?>"/> 
		<meta property="og:description" content="<?php 
						if(!($this->profile_data['getProfile']['professional'][0]->INDUSTRY_STR)==0)
						{
							echo $this->profile_data['getProfile']['professional'][0]->INDUSTRY_STR .' | ';
						} 
						if(!($this->profile_data['getProfile']['professional'][0]->PROFESSIONAL_HEADLINE)==0)
						{
							echo $this->profile_data['getProfile']['professional'][0]->PROFESSIONAL_HEADLINE . ' | ';
						}
						if(!($this->profile_data['getProfile']['personal'][0]->LOCATION)==0)
						{
							echo $this->profile_data['getProfile']['personal'][0]->LOCATION;
						}
						else
						{
							echo 'CREATE & EXPLORE THE WORLD OF ARTISTS - A Global Platform for Artists & Artistes';
						}?>" />
		<meta property="og:image:width" content="450"/>
		<meta property="og:image:height" content="298"/>
						
		<meta name="twitter:card" content="summary">
       	<meta name="twitter:site" content="@Artistize.com">
      	<meta name="twitter:creator" content="@Artistize_World">
		<meta name="twitter:title" content="<?php echo $this->profile_data['getProfile']['personal'][0]->USER_NAME;?>" /> 
		<meta name="twitter:url" content="<?php echo base_url().'Profile/'.$this->profile_data['getProfile']['personal'][0]->HANDLE; ?>" /> 
		<meta name="twitter:description" content="<?php 
						if(!($this->profile_data['getProfile']['professional'][0]->INDUSTRY_STR)==0)
						{
							echo $this->profile_data['getProfile']['professional'][0]->INDUSTRY_STR .' | ';
						} 
						if(!($this->profile_data['getProfile']['professional'][0]->PROFESSIONAL_HEADLINE)==0)
						{
							echo $this->profile_data['getProfile']['professional'][0]->PROFESSIONAL_HEADLINE . ' | ';
						}
						if(!($this->profile_data['getProfile']['personal'][0]->LOCATION)==0)
						{
							echo $this->profile_data['getProfile']['personal'][0]->LOCATION;
						}
						else
						{
							echo 'CREATE & EXPLORE THE WORLD OF ARTISTS - A Global Platform for Artists & Artistes';
						}?>" />
		<meta name="twitter:image" content="<?php echo base_url().$this->profile_data['getProfile']['personal'][0]->PROFILE_IMAGE; ?>" /> 
 		<title><?php echo $this->profile_data['getProfile']['personal'][0]->USER_NAME;

						if(!($this->profile_data['getProfile']['professional'][0]->INDUSTRY_STR)==0)
								{
									echo ' - '.$this->profile_data['getProfile']['professional'][0]->INDUSTRY_STR;
								}
						if(!($this->profile_data['getProfile']['personal'][0]->LOCATION)==0)
								{
									echo ' - ' .$this->profile_data['getProfile']['personal'][0]->LOCATION;
								}?>
		</title>
        <!-- image for facebook share -->
        <link rel="image_src" type="image/jpeg" href="res/images/fb_wall.jpg" />
        <!-- Favicon -->
        <link rel="icon" type="image/png" href="<?php echo base_url(); ?>res/icon/Favicon-Icon.png"> 
        <!-- Bootstrap -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/custom.css?version=1.2" rel="stylesheet">
        <link href="css/creative.min.css" rel="stylesheet">
        <!--<link href="NewDesignSrc/css/bootstrap-select.css" rel="stylesheet">-->
        <link href="css/owl.carousel.css" rel="stylesheet">
        <link href="css/font-awesome.min.css" rel="stylesheet">
        <link href="css/owl.theme.css" rel="stylesheet">
        <link href ="css/owl.transitions.css" rel="stylesheet">
        <link href='css/Montserrat_fonts.css' rel='stylesheet' type='text/css'>
        <!--<link rel="stylesheet" href="css/artistize.css">-->
        <link href="css/main.css?version=1.6" rel="stylesheet">
        <link href="css/background.css" rel="stylesheet">
        <link href="css/project-edit.css" rel="stylesheet">	
        <link href="css/profile_edit.css" rel="stylesheet">
        <link href="css/portfolio.css" rel="stylesheet">
        <link href="css/cropper.css"  rel="stylesheet">
        <link href="css/profile-image-crop.css" rel="stylesheet">
        <link href="css/network.css" rel="stylesheet">
        <link href="css/pin.css" rel="stylesheet">
        <!-- <link href="css/bootstrap-datepicker.min.css" rel="stylesheet">-->

        <link href="color-picker/dist/css/bootstrap-colorpicker.min.css" rel="stylesheet">
        <link href="color-picker/src/css/docs.css" rel="stylesheet">

        <!--<link rel="stylesheet" type="text/css" href="css/changes.css">-->
        <link href="css/portfolio.css" rel="stylesheet">
        <!--<link href="css/static_pages.css" rel="stylesheet">-->
        <link href="css/new_profile_edit.css" rel="stylesheet">
        <!-- lightbox plugin for service gallery -->
        <link href='lightbox/css/lightgallery.css' rel='stylesheet' type='text/css'>
        <link href='js/lightbox/jquery_image_quickview.css' rel='stylesheet' type='text/css'>


        <script src="js/jquery-2.1.3.js"></script> 
        <script src="js/bootstrap.min.js"></script>

        <script src="js/googleAnalytics.js"></script>

        <script src="js/ajax.js?v=2"></script>
        <script src="js/cropper.min.js"></script>
        <script src="js/ckeditor/ckeditor.js"></script>
        <script src="js/bootstrap-datepicker.min.js"></script>
        <script src="js/jquery.validate.min.js"></script>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

        <!-- Social Icons Slider -->
        <link rel="stylesheet" href="res/Socail_icons_slider/css/contact-buttons.css"> 
        <!-- Socila Icons Slider End -->
		<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5926e3ea4a0d8067"></script>
		
		<script type="text/javascript">
			window.smartlook||(function(d) {
			var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
			var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
			c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
			})(document);
			smartlook('init', '27cf91f5b011600357b4e860d0732cf5708b5f09');
		</script> 

		<noscript>
			<style>
				.box {
				  width: 50%;
				  margin: 0 auto;
				  background: rgba(255,255,255,0.2);
				  padding: 35px;
				  border: 2px solid #fff;
				  border-radius: 20px/50px;
				  background-clip: padding-box;
				  text-align: center;
				}
				.popup h2 {
				  margin-top: 0;
				  color: #333;
				  font-family: Tahoma, Arial, sans-serif;
				}

				.popup .content {
				  max-height: 30%;
				  
				  margin-top:15px;
				  margin-bottom:10px;
				}

				/*Let's make it appear when the page loads*/
				.overlay:target:before {
					display: none;
				}
				.overlay:before {
				  content:"";
				  top: 0;
				  left: 0;
				  right: 0;
				  bottom: 0;
				  display: block;
				  background: rgba(0, 0, 0, 0.8);
				  position: fixed;
				  z-index: 1031;
				}
				.overlay .popup {
				  background: #fff;
				  border-radius: 5px;
				  width: 50%;
				  position: fixed;
				  top: 0;
				  left: 25%;
				  padding: 25px;
				  margin: 70px auto;
				  z-index: 1032;
				  -webkit-transition: all 0.6s ease-in-out;
				  -moz-transition: all 0.6s ease-in-out;
				  transition: all 0.6s ease-in-out;
				}
				.overlay:target .popup {
					top: -100%;
					left: -100%;
				}

				@media screen and (max-width: 768px){
				  .box{
					width: 70%;
				  }
				  .overlay .popup{
					width: 70%;
					left: 15%;
				  }
				}
			</style>
			<div id="popup1" class="overlay">
				<div class="popup text-center">
					<a class="btn btn-danger pull-right" href="http://www.enable-javascript.com/" target="_blank"><i class="fa fa-info"></i></a>
					<h2 class="text-center text-danger">Artistize works best with JavaScript.</h2> 
					<h4 class="content">Please enable JavaScript and click on reload.</h4>
					<div class="content"><a class="btn btn-primary" href="https://www.artistize.com/"><i class="fa fa-refresh"> Reload</i></a></div>
					
					
				</div>
			</div>
		</noscript>
		<script src="NewDesignSrc/Angular/angular.min.js?version=1.1"></script>
      <script src="https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-2.5.0.js?version=1.1"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-animate.js?version=1.1"></script>
      <script src="NewDesignSrc/Angular/angular-resource.min.js?version=1.1"></script>
      <link rel="stylesheet" href="https://raw.githack.com/sachinchoolur/lightGallery/1.1.5/light-gallery/css/lightGallery.css?version=1.1">
      <link rel="stylesheet" type="text/css" href="bower_components/ng-img-crop/compile/minified/ng-img-crop.css?version=1.1"/>
      <link rel="stylesheet" href="bower_components/summernote/dist/summernote.css?version=1.1" />
      <link rel="stylesheet" href="bower_components/ng-tags-input/ng-tags-input.min.css?version=1.1" />
      <link rel="stylesheet" href="bower_components/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.css?version=1.1">
      <script type="text/javascript" src="NewDesignSrc/Angular/angular-aria.min.js?version=1.1"></script>
      <script type="text/javascript" src="NewDesignSrc/Angular/angular-material.min.js?version=1.1"></script>
      <script type="text/javascript" src="NewDesignSrc/Angular/material.js?version=1.1"></script>
      <script src="bower_components/ladda/dist/spin.min.js?version=1.1"></script>
      <script src="bower_components/ladda/dist/ladda.min.js?version=1.1"></script>
      <script src="bower_components/angularjs-social-login/angularjs-social-login.js?version=1.1"></script>
      <script src="bower_components/angular-ladda/dist/angular-ladda.min.js?version=1.1"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-messages/1.5.7/angular-messages.min.js?version=1.1"></script>
      <script src="bower_components/angular-base64/angular-base64.js?version=1.1"></script>
      <script src="bower_components/angular-spinner/dist/angular-spinner.min.js?version=1.1"></script>
      <!--<script src="bower_components/angular-file-upload/dist/angular-file-upload.min.js"></script>-->
      <script src="bower_components/ng-file-upload/ng-file-upload.js?version=1.1"></script>
      <script src="bower_components/ng-img-crop/compile/minified/ng-img-crop.js?version=1.1"></script>
      <script src="bower_components/summernote/dist/summernote.js?version=1.1"></script>
      <script src="bower_components/angular-summernote/dist/angular-summernote.js?version=1.1"></script>
      <!--<script src="bower_components/ng-blueimp-gallery/ng-blueimp-gallery.js"></script>-->
      <script src="bower_components/ng-tags-input/ng-tags-input.js?version=1.1"></script>
      <script type="text/javascript" src="NewDesignSrc/Angular/app.js?version=1.1"></script>
	  <script type="text/javascript" src="NewDesignSrc/Angular/scripts/controller/portfolio.js?version=1.3"></script>
      <script type="text/javascript" src="NewDesignSrc/Angular/scripts/controller/PortfolioView.js?version=1.3"></script>
      <script type="text/javascript" src="NewDesignSrc/Angular/scripts/controller/projectview.js?version=1.3"></script>
	  <script type="text/javascript" src="NewDesignSrc/Angular/scripts/controller/profile.js?version=1.3"></script>
      <script type="text/javascript" src="NewDesignSrc/Angular/scripts/directives/validatepassword.js?version=1.3"></script>
      <script type="text/javascript" src="NewDesignSrc/Angular/scripts/directives/onlywords.js?version=1.1"></script>
      <script type="text/javascript" src="NewDesignSrc/Angular/scripts/services/loginservice.js?version=1.3"></script>
      <script type="text/javascript" src="NewDesignSrc/Angular/scripts/services/remember.js?version=1.1"></script>
      <!--<script src="http://cdnjs.cloudflare.com/ajax/libs/jspdf/0.9.0rc1/jspdf.min.js"></script>-->
      <script src="bower_components/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.js?version=1.3"></script>
      <!--<script src="https://raw.githack.com/sachinchoolur/lightGallery/1.1.5/light-gallery/js/lightGallery.js"></script>-->
      <script src="NewDesignSrc/Angular/lightGallery.js?version=1.1"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.6.6/angular-sanitize.min.js?version=1.1"></script>
      <script src="bower_components/angular-local-storage/dist/angular-local-storage.min.js?version=1.1"></script>
     
      <script src="NewDesignSrc/Angular/sweet-alert.js?version=1.1"></script>
      <script src="bower_components/angular-button-spinner/dist/angular-button-spinner.min.js?version=1.1"></script>
	  <script src="bower_components\angular-read-more\dist\readmore.min.js?version=1.1"></script> 
	  <script src="bower_components\ui-cropper\compile\unminified\ui-cropper.js?version=1.1"></script> 
	  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6_yB15T38Ezwn4GyzD4Psm4Cm0sqRrLE&libraries=places"></script>
	  <script src='http://cdn.jsdelivr.net/jquery.responsive-tabs/1.5.1/jquery.responsiveTabs.min.js'></script>
    </head>
    <body class="flexcroll">
        <!--**************************************** Loader Section ****************************************-->
        <div class="se-pre-con1"></div>
        <!--************************************** End Loader Section **************************************-->

        <?php 	/*print_r($this->profile_data['getProfile']['personal'][0]->LOCATION); 
        		print_r($this->profile_data['getProfile']['professional'][0]->INDUSTRY);  
        	  	print_r($this->profile_data['getProfile']['professional'][0]->PROFESSIONAL_HEADLINE);*/

        	  	//print_r($this->profile_data['getProfile']['professional']);  
        ?>
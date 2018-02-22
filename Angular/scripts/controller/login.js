'use strict';


angular.
module('material').
controller('tabCtrl', ['$scope','$http','$rootScope','Loginauth','$remember','$base64','$timeout','usSpinnerService','sweetAlert', function($scope,$http,$rootScope,Loginauth,$remember,$base64,$timeout,usSpinnerService,sweetAlert) {
  //console.log("hi");
  $scope.notvalidfirst = false;
  $scope.errorlogin = false;
  $scope.notvalidsecond = false;
  $scope.notvalidthird = false;
  $scope.appendbutton = false;
  $scope.frgtuserEmail = false;
  $scope.notvalidlocation = false;
   $scope.disabledsubmit = false;
   $scope.firstvalid = true;
  $scope.aboutm = "";
 $rootScope.baseurl = baseurl;
 $scope.appendbuttonforlogin = false;
 $rootScope.jobflag = jobflag;
 $rootScope.nextprofile = nextprofile;
 $rootScope.returnurl = return_url;
$scope.l = l;
 $scope.lk = lk;
 $scope.disablemailSubmit = false;

   if($scope.lk){


   }
   $scope.ph_numbr = /^(\+|\d)[0-9]{7,16}$/;


   $scope.validatefirst = function () {
     $scope.SignUperrors = [];
       $scope.appendbutton = false;
     if(!$scope.Fname || !$scope.Lname || !$scope.email || !$scope.user_password || !$scope.confirm_password){
         $scope.notvalidfirst = true;

     }
     if($scope.Fname && $scope.Lname && $scope.email  && $scope.user_password && $scope.confirm_password ){

            var data = {
                    user_first_name:$scope.Fname,
                    user_last_name:$scope.Lname,
                    user_email:$scope.email,
                    gender:$scope.gender,
                    return_url:$rootScope.returnurl,
                    step:1
                  };

        Loginauth.signupUser.save((data), function(data){

          if(data.status == true){
              $scope.firstvalid = false;
                $scope.lastid = data.last_id;
                   document.getElementById('tab2').checked = true;
                     $scope.notvalidfirst = false;
                        $scope.appendbutton = false;
            }


          if(data.status == false){
            if(data.flag == 1){
              $scope.SignUperrors = data.message;

            }
            if(data.flag == 2){
            $scope.SignUperrors = data.message;
              $scope.appendbutton = true;
              $scope.resendid = data.resend_id;
              $scope.resendurl = data.RETURN_URL;
            }
          }

      });
      }
   };


   $scope.validatesecond = function () {
    $scope.disabledsubmit = true;
     if(!$scope.gender || !$scope.industry || !$scope.categorys || !$scope.location || !$scope.city || !$scope.country){
         $scope.notvalidsecond = true;
         $scope.disabledsubmit = false;

     }
     if(!$scope.country){
      $scope.nocountry = true;
      $scope.disabledsubmit = false;

     }
     if($scope.user_password == $scope.confirm_password  && $scope.gender && $scope.location && $scope.city && $scope.state && $scope.country && $scope.industry  && $scope.categorys ){

     
      
      $scope.nocountry = false;
      usSpinnerService.spin('spinner-1');
       $scope.countryData = $("#phone").intlTelInput("getSelectedCountryData");
       $scope.mobilenumber = $scope.countryData.dialCode + "" + $scope.mobile;
       if(!$scope.aboutme){

          $scope.aboutme = "";

       }
       $scope.notvalidthird = false;;
     var data = {
         user_first_name:$scope.Fname,
         user_last_name:$scope.Lname,
         user_email:$scope.email,
         gender:$scope.gender,
         password:$scope.user_password,
         re_enter_password:$scope.confirm_password,
         city_name:$scope.city,
         state_name:$scope.state,
         country_name:$scope.country,
         latitude:$scope.latitude,
         longitude:$scope.langitude,
         category:$scope.categorys,
         industry:$scope.industry,
         //user_mobile:$scope.mobilenumber,
        // about_me:$scope.aboutme,
         next_url:$rootScope.nextprofile,
         return_url:$rootScope.returnurl,
         last_id:$scope.lastid
       };

     Loginauth.signupUser.save((data), function(data){

       if(data.status == true){
            usSpinnerService.stop('spinner-1');
           //$scope.alerts.push(data.message);
           sweetAlert.swal(data.message );
             document.getElementById('tab1').checked = true;
         $scope.Fname = "";
         $scope.Lname = "";
         $scope.email = "";
         $scope.gender = "";
         $scope.user_password = "";
         $scope.confirm_password = "";
         $scope.city = "";
         $scope.state = "";
         $scope.country = "";
         $scope.latitude = "";
         $scope.langitude = "";
         $scope.categorys = "";
         $scope.industry = "";
         $scope.mobile = undefined;
         $scope.aboutme = "";
         $scope.location = "";
         $scope.mobilenumber="";
         $scope.ty = "Thank-you?ref=register";
         $scope.disabledsubmit = false;
         $scope.firstvalid = true;
        /* $timeout(function() {
            window.location.href = "https://artistize.com/Thank-you?ref=register";
          }, 3000);*/



       }

       if(data.status == false){
         usSpinnerService.stop('spinner-1');
         $scope.SignUperrors = data.message;

          $scope.disabledsubmit = false;

       }

       if(data.Resend_status == true){
         usSpinnerService.stop('spinner-1');
         $scope.resendid = data.resend_id;
       //  

               $scope.appendbutton = true;
             document.getElementById('tab1').checked = true;
               $scope.Fname = "";
               $scope.Lname = "";
               $scope.email = "";
               $scope.gender = "";
               $scope.user_password = "";
               $scope.confirm_password = "";
               $scope.city = "";
               $scope.state = "";
               $scope.country = "";
               $scope.latitude = "";
               $scope.langitude = "";
               $scope.categorys = "";
               $scope.industry = "";
               $scope.mobile = undefined;
               $scope.aboutme = "";
               $scope.location = "";
               $scope.mobilenumber = "";
                $scope.disabledsubmit = false;
                  $scope.firstvalid = true;




       }

        });
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $scope.notvalidsecond = false;
        // document.getElementById('tab3').checked = true;





     }
     else{

      $scope.disabledsubmit = false;
     }

   };



 Loginauth.industryGet.get({}, function (data){
   $scope.allindustry = data.getIndustryData;


});

$scope.checklocation = function(){
  console.log($scope.country);

  console.log("inside");
};

 $scope.closeAlerts = function(index) {
         $scope.alerts.splice(1, index);
         $scope.alerts = [];
     };

     $scope.closeAlerts1 = function(index) {
             $scope.SignUperrors.splice(1, index);
             $scope.SignUperrors = [];

         };


         $scope.closeAlerts2 = function(index) {
                 $scope.loginalerts.splice(1, index);
                 $scope.loginalerts = [];

             };

             $scope.closeAlerts3 = function(index) {
                     $scope.frgtsuccess.splice(1, index);
                     $scope.frgtsuccess = [];

                 };

                 $scope.closeAlerts4 = function(index) {
                         $scope.errors.splice(1, index);
                         $scope.errors = [];

                     };



 $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
     usSpinnerService.spin('spinner-1');
   Loginauth.validatelogin.save((userDetails), function(data){

     if(data.flag == 1){
        usSpinnerService.stop('spinner-1');
            if($rootScope.returnurl)
            {
                window.location.href = $rootScope.baseurl +""+ $rootScope.returnurl;
            }

            else
            {
            window.location.href = $rootScope.baseurl + "" + data.redirect;

           }
        }
        if(data.flag == 2){
            usSpinnerService.stop('spinner-1');
            if($rootScope.returnurl)
            {
                window.location.href = $rootScope.baseurl +""+ $rootScope.returnurl;
            }

            else
            {
              window.location.href = $rootScope.baseurl + "" + data.redirect;
            }

        }
        if(data.flag == 3){
            usSpinnerService.stop('spinner-1');
            window.location.href = $rootScope.baseurl + "" + data.redirect;
        }


});


      });



      $scope.Loginuser = function() {
          $scope.loginalerts = [];

          if(!$scope.userEmail || !$scope.userPassword  ){

             $scope.loginerror = true;


          }



       if($scope.userEmail && $scope.userPassword  ){
         usSpinnerService.spin('spinner-1');
         $scope.loginerror = false;
        var data = {

          user_email:$scope.userEmail,
          password:$scope.userPassword,
          return_url:$rootScope.returnurl
        };
           Loginauth.login.save((data), function(data){

             if(data.status == true){

                usSpinnerService.stop('spinner-1');
               window.location.href = $rootScope.baseurl + "" + data.redirect;


             }

             if(data.status == false){
               usSpinnerService.stop('spinner-1');
                  if(data.flag == 5){
                  $scope.loginalerts.push({msg: 'Your account already exist, to activate this account check your email for verification or click on below button to resend verification link', type:'danger'});
                    $scope.appendbuttonforlogin = true;
                    $scope.resendid = data.resend_id;
                    $scope.resendurl = data.RETURN_URL;
                  }
                  else{
                 $scope.loginalerts.push({msg: 'Invalid Username or Password.', type:'danger'});
               }

             }




           });

         }

      };


      $scope.submitEmail = function () {

        if(!$scope.ForgetEmail){
           $scope.frgtuserEmail = true;

        }
        if($scope.ForgetEmail){
          $scope.disablemailSubmit = true;
          $scope.frgtuserEmail = false;
        var data = {
           user_email:$scope.ForgetEmail

        };

        Loginauth.ForgetPassword.save((data), function(data){
            $scope.frgtsuccess = [];
            $scope.errors = [];
           if(data.status == true){
             $scope.ForgetEmail = "";
             $scope.frgtsuccess.push(data.message);

           }

           if(data.status == false){
              $scope.disablemailSubmit = false;

           $scope.errors.push(data.message);



           }


            });

          }

      };



  /* $scope.SignUp = function () {
        $scope.disabledsubmit = true;

     $scope.alerts = [];
     $scope.SignUperrors = [];

     if(!$scope.industry || !$scope.categorys){
            $scope.notvalidthird = true;
            $scope.disabledsubmit = false;

     }
     if($scope.industry && $scope.categorys){
       usSpinnerService.spin('spinner-1');
       $scope.countryData = $("#phone").intlTelInput("getSelectedCountryData");
       $scope.mobilenumber = $scope.countryData.dialCode + "" + $scope.mobile;
       if(!$scope.aboutme){

          $scope.aboutme = "";

       }
       $scope.notvalidthird = false;;
     var data = {
         user_first_name:$scope.Fname,
         user_last_name:$scope.Lname,
         user_email:$scope.email,
         gender:$scope.gender,
         password:$scope.user_password,
         re_enter_password:$scope.confirm_password,
         city_name:$scope.city,
         state_name:$scope.state,
         country_name:$scope.country,
         latitude:$scope.latitude,
         longitude:$scope.langitude,
         category:$scope.categorys,
         industry:$scope.industry,
         user_mobile:$scope.mobilenumber,
         about_me:$scope.aboutme,
         next_url:$rootScope.nextprofile,
         return_url:$rootScope.returnurl,
         last_id:$scope.lastid
       };

     Loginauth.signupUser.save((data), function(data){

       if(data.status == true){
            usSpinnerService.stop('spinner-1');
           //$scope.alerts.push(data.message);
           sweetAlert.swal(data.message );
             document.getElementById('tab1').checked = true;
         $scope.Fname = "";
         $scope.Lname = "";
         $scope.email = "";
         $scope.gender = "";
         $scope.user_password = "";
         $scope.confirm_password = "";
         $scope.city = "";
         $scope.state = "";
         $scope.country = "";
         $scope.latitude = "";
         $scope.langitude = "";
         $scope.categorys = "";
         $scope.industry = "";
         $scope.mobile = undefined;
         $scope.aboutme = "";
         $scope.location = "";
         $scope.mobilenumber="";
         $scope.ty = "Thank-you?ref=register";
         $scope.disabledsubmit = false;
         $scope.firstvalid = true;
        /* $timeout(function() {
            window.location.href = "https://artistize.com/Thank-you?ref=register";
          }, 3000);



       }

       if(data.status == false){
         usSpinnerService.stop('spinner-1');
         $scope.SignUperrors = data.message;

          $scope.disabledsubmit = false;

       }

       if(data.Resend_status == true){
         usSpinnerService.stop('spinner-1');
         $scope.resendid = data.resend_id;
         $scope.disabledsubmit = false;

               $scope.appendbutton = true;
             document.getElementById('tab1').checked = true;
               $scope.Fname = "";
               $scope.Lname = "";
               $scope.email = "";
               $scope.gender = "";
               $scope.user_password = "";
               $scope.confirm_password = "";
               $scope.city = "";
               $scope.state = "";
               $scope.country = "";
               $scope.latitude = "";
               $scope.langitude = "";
               $scope.categorys = "";
               $scope.industry = "";
               $scope.mobile = undefined;
               $scope.aboutme = "";
               $scope.location = "";
               $scope.mobilenumber = "";
                $scope.disabledsubmit = false;
                  $scope.firstvalid = true;




       }

        });
      }

   };*/



   $scope.resendemail = function () {

     var senddata = {

       user_id:$scope.resendid,
        return_url:$scope.resendurl


     };
     Loginauth.resendRequest.save((senddata), function(data){


         });

   };






   $scope.getCategory = function(industry) {

     var data = {

         INDUSTRY:industry
     };
     Loginauth.getCategorys.save((data), function(data){

       $scope.categorydata = data.getCategoryData;

     });

   };

   $(function () {

  var input = document.getElementById('location');
  $scope.nocountry = false;
     var autocomplete = new google.maps.places.Autocomplete(input,{types: ['(cities)']});

   google.maps.event.addListener(autocomplete, 'place_changed', function(event) {
     var place = autocomplete.getPlace();
     var arr = new Array();
     for (var i = 0; i < place.address_components.length; i++) {

       arr[i]= place.address_components[i].types[0];
       if('administrative_area_level_2'==place.address_components[i].types[0]){

      $scope.city = place.address_components[i].long_name;

       }
       else  if('locality'==place.address_components[i].types[0]) {
        $scope.city= place.address_components[i].long_name;
        }

       if('country'==place.address_components[i].types[0]){

       $scope.country = place.address_components[i].long_name;
      
       }

       if('administrative_area_level_1'==place.address_components[i].types[0]){

      $scope.state= place.address_components[i].long_name;

       }
       else  if('locality'==place.address_components[i].types[0]) {
      $scope.state= place.address_components[i].long_name;
        }





       }

       //console.log(place.address_components[i].types[0]);
         $scope.latitude = place.geometry.location.lat();
           $scope.langitude = place.geometry.location.lng();


   });
 });

 $scope.remember = false;
       if ($remember('username') && $remember('password') ) {
           $scope.remember = true;
           $scope.userEmail = $remember('username');
           $scope.userPassword = $remember('password');
       }
       $scope.rememberMe = function() {
           if ($scope.remember) {
               $remember('username', $scope.userEmail);
               $remember('password', $scope.userPassword);
           } else {
               $remember('username', '');
               $remember('password', '');
           }
       };







}]);

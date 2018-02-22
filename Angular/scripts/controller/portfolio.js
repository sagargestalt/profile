'use strict';


angular.
module('material').
controller('portfolioCtrl', ['$scope', '$http', '$rootScope', '$base64', '$timeout', 'Upload', 'Loginauth', 'portfolioservice', 'Lightbox', '$sce', '$uibModal', 'localStorageService', 'usSpinnerService', '$location', '$anchorScroll', 'sweetAlert','$filter','mediaService',function ($scope, $http, $rootScope, $base64, $timeout, Upload, Loginauth, portfolioservice, Lightbox, $sce, $uibModal, localStorageService, usSpinnerService, $location, $anchorScroll, sweetAlert,$filter,mediaService) {
    //console.log("hi");
    $scope.projecteditinfo = true;
    $scope.mainloding = true;
    $rootScope.newProject = localStorageService.get('newProject');
    $rootScope.projectcreated = localStorageService.get('projectcreated');
    $scope.proscessstart = function () {
      $scope.resizestarted = true;

    };
    //$rootScope.baseUrl = 'http://103.50.163.54/~stagingartistize/artistize-safari/';
   $rootScope.baseUrl = baseurl;
   $rootScope.project_id = project_id;
   //console.log( $rootScope.project_id);
    $scope.loading = false;
    if ($rootScope.newProject == true) {
     // $rootScope.project_id = undefined;
    }
    if ($rootScope.newProject == false) {
      //$rootScope.project_id = localStorageService.get('project_id');
      $scope.infosubmited = false;
      $scope.projecteditinfo = true;

    }

    $rootScope.user_id = userid;
    $rootScope.login_user_id = login_user_id;

    if ($rootScope.project_id == null) {
      $rootScope.project_id = "";
      $scope.hideupload = true;
     
    }

    if(!$rootScope.project_id){
      
      $rootScope.project_id = "";
     

    }
    $scope.enablecoverImage = true;

    function init() {

      var data = {

        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id

      };
      portfolioservice.getcontent.save((data), function (data) {
        usSpinnerService.spin('spinner-1');
        //console.log(data);
        $scope.resizestarted = false;
        if (data.status == "True") {
          $scope.media = data.getProjectMedia;
          //console.log($scope.media);
          $scope.personalinfo = data.getProfile;
          $scope.projectinfo = data.getProjectData;
          $rootScope.mediacount = data.getProjectMediaCount;
          $scope.mediaImages = data.getProjectMediaImage;
          $scope.mediavideos = data.getProjectMediaVideo;
          $scope.mediaAudios = data.getProjectMediaAudio;
          $scope.mediaEmbeds = data.getProjectMediaEmbed;
          $scope.mediaurls = data.getProjectMediaUrl;

          $scope.urlsyoutube =[];
          $scope.normalurl = [];
          for (var i = 0; i < $scope.mediaurls.length; i++) {
              
             // $scope.mediaurls[i].url = $sce.trustAsResourceUrl($scope.mediaurls[i].url);
                  var url = $scope.mediaurls[i].CONTENT;
                 // console.log(links);
                  var ID = '';
                  url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                  
                  if(url.length > 1){
                  if (url[2] !== undefined) {
                      ID = url[2].split(/[^0-9a-z_\-]/i);
                     // ID = ID[0];
                     
                      $scope.mediaurls[i].newurl = ID[0];
                     
            
                  } else {
                    //$scope.urlsmore[i] = url;
                  }
                 
                  $scope.urlsyoutube.push( $scope.mediaurls[i]);
                 
                 
                }

                else{
                 // console.log(url);
                 
                 
                  $scope.normalurl.push($scope.mediaurls[i]);
                 // console.log($scope.normalurl);



                }
               
            
               
          }
         
        
         
         
       
          $scope.mediaDocuments = data.getProjectMediaApplication;
          if(data.getProjectMediaText != false){
          $scope.textcontent = data.getProjectMediaText[0].CONTENT;
          $scope.texttitle = data.getProjectMediaText[0].CAPTION;
          $rootScope.textcontent_id = data.getProjectMediaText[0].ID;
          }
          if ($scope.projectinfo[0].COVER_IMAGE) {

            $scope.imagepath = $scope.projectinfo[0].COVER_IMAGE;
          }
          if ($scope.projectinfo) {
            $scope.tags = [];
            $scope.projectname = $scope.projectinfo[0].COMPLETE_TITLE;
            if($scope.projectname){
              $scope.enablecoverImage = false;
            }
            $scope.projectdecp = $scope.projectinfo[0].DESCRIPTION;
            $scope.industry = $scope.projectinfo[0].INDUSTRY;
            $scope.tags = $scope.projectinfo[0].ALL_TAG;

          }

          


         /* for (var i = 0; i < $scope.media.length; i++) {
            $scope.media[i].url = $sce.trustAsResourceUrl($scope.media[i].url);
          }*/

          $scope.textcontentarry = [];
          $scope.imageContentData = [];
          $scope.videoContentData = [];
          $scope.audioContentData = [];
          $scope.embedContentData = [];
          $scope.applicationContentData = [];
         /* angular.forEach($scope.media, function (value, key) {

            if (value.type === "text") {
              $scope.textcontentarry.push(value);

              $scope.textcontent = $scope.textcontentarry[0].CONTENT;
              $scope.texttitle = $scope.textcontentarry[0].CAPTION;
              $rootScope.textcontent_id = $scope.textcontentarry[0].ID;
            }
            if (value.type === "image") {

              $scope.imageContentData.push(value);
              //  console.log($scope.imageContentData);


            }
            if (value.type === "video") {
              $scope.videoContentData.push(value);


            }
            if (value.type === "audio") {
              $scope.audioContentData.push(value);


            }

            if (value.type === "embed") {
              $scope.embedContentData.push(value);


            }

            if (value.type === "application") {
              $scope.applicationContentData.push(value);


            }


          });*/
        }
        if(data.status == "false"){

          $scope.media = false;
        }
        usSpinnerService.stop('spinner-1');
        $scope.mainloding = false;

      });

      Loginauth.industryGet.get({}, function (data) {
        $scope.allindustry = data.getIndustryData;


      });

    }


    init();

    $scope.loadall = function () {
      $scope.mediaImages = undefined;
      $scope.mediavideos = undefined;
      $scope.mediaAudios = undefined;
      $scope.mediaEmbeds = undefined;
      $scope.mediaDocuments = undefined;

      var data = {

        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id

      };
      portfolioservice.getcontent.save((data), function (data) {

       // $scope.media = data.getProjectMedia;
        $scope.mediaImages = data.getProjectMediaImage;
        $scope.mediavideos = data.getProjectMediaVideo;
        $scope.mediaAudios = data.getProjectMediaAudio;
        $scope.mediaEmbeds = data.getProjectMediaEmbed;
        $scope.mediaDocuments = data.getProjectMediaApplication;
        if(data.getProjectMediaText != false){
          $scope.textcontent = data.getProjectMediaText[0].CONTENT;
          $scope.texttitle = data.getProjectMediaText[0].CAPTION;
          $rootScope.textcontent_id = data.getProjectMediaText[0].ID;
          }
        





        /*for (var i = 0; i < $scope.media.length; i++) {
            $scope.media[i].url = $sce.trustAsResourceUrl($scope.media[i].url);
          }*/

        
        /*angular.forEach($scope.media, function (value, key) {

          if (value.type === "text") {
            $scope.textcontentarry.push(value);

            $scope.textcontent = $scope.textcontentarry[0].CONTENT;
            $scope.texttitle = $scope.textcontentarry[0].CAPTION;
            $rootScope.textcontent_id = $scope.textcontentarry[0].ID;
          }
          if (value.type === "image") {
            $scope.imageContentData.push(value);


          }
          if (value.type === "video") {
            $scope.videoContentData.push(value);


          }
          if (value.type === "audio") {
            $scope.audioContentData.push(value);


          }

          if (value.type === "embed") {
            $scope.embedContentData.push(value);


          }

          if (value.type === "application") {
            $scope.applicationContentData.push(value);


          }

        });*/

      });





    };

    $scope.scrolltotext = function () {
      $scope.active = 7;
      $scope.edittext();
      $scope.media = true;

    };
    $scope.tabPhoto = function () {

      $scope.active = 2;
      $scope.loadphotos();
      $scope.disableLoadmore = false;
    };

    $scope.tabvideo = function () {
      $scope.active = 3;
      $scope.loadvideos();
      $scope.disableLoadmorevideo = false;
    };

    $scope.tabaudio = function () {
      $scope.active = 4;
      $scope.loadaudio();
      $scope.disableLoadmoreaudio = false;
    };

    $scope.tablink = function () {
      $scope.active = 5;
      $scope.loadlink();
      $scope.disableLoadmorelink = false;
    };

    $scope.tabdocument = function () {
      $scope.active = 6;
      $scope.loaddoc();
      $scope.disableLoadmoredoc = false;
    };

    $scope.tabtext = function () {
      $scope.active = 7;
      $scope.edittext();
      document.getElementById('textsection').scrollIntoView()
     
      
    };
    // upload later on form submit or something similar
    $scope.submit = function () {
      if ($scope.form.file.$valid && $scope.file) {
        $scope.upload($scope.file);
      }
    };

    // upload on file select or drop
    $scope.upload = function (file) {
      $scope.filealerts = [];
      $scope.resizestarted = false;
      if ($scope.myForm.$error.pattern) {

        $scope.filealerts.push({
          msg: 'Please select valid file.',
          type: 'danger'
        });
        $timeout(function () {
          $scope.filealerts = [];
        }, 4000);
        $scope.imagefile = undefined;
        $scope.imagefile = undefined;
        $scope.videofile = undefined;
        $scope.docfile = undefined;
        $scope.audioFile = undefined;

      }
      if ($scope.myForm.$error.maxFiles) {

        $scope.filealerts.push({
          msg: 'Limit cannot exceed more than 5 files.',
          type: 'danger'
        });
        $timeout(function () {
          $scope.filealerts = [];
        }, 4000);
        $scope.imagefile = undefined;
        $scope.imagefile = undefined;
        $scope.videofile = undefined;
        $scope.docfile = undefined;
        $scope.audioFile = undefined;

      }
      if ($scope.myForm.$error.maxSize) {
        
                $scope.filealerts.push({
                  msg: 'File is too large.',
                  type: 'danger'
                });
                $timeout(function () {
                  $scope.filealerts = [];
                }, 4000);
                $scope.imagefile = undefined;
                $scope.imagefile = undefined;
                $scope.videofile = undefined;
                $scope.docfile = undefined;
                $scope.audioFile = undefined;
        
              }
      if ($scope.myForm.file.$valid && $scope.myForm.file1.$valid && $scope.myForm.file2.$valid && $scope.myForm.file4.$valid) {

        if (file.length) {

          $scope.filetype = file;
          $scope.filealerts = [];
          $scope.dynamic = 0;
          $scope.uplodingfile = true;
          Upload.upload({
            url: $rootScope.baseUrl + '' + 'Ajax_Project/project_media_add',
            data: {
              project_image: file,
              user_id: $rootScope.login_user_id,
              project_id: $rootScope.project_id
            }
          }).then(function (resp) {

            if (resp.data.flag == 1) {
            //  init();
            $scope.media = true;
              $scope.filealerts.push({
                msg: 'Media added successfully.',
                type: 'success'
              });
              $timeout(function () {
                $scope.filealerts = [];
              }, 4000);

              $scope.uplodingfile = false;

              if ($scope.filetype[0].type == "image/jpeg") {
               // console.log("image file");
                $scope.nophotos = false;
                $scope.active = 2;
                if ($scope.active == 2) {
                  
                  //$scope.startfrom = "0";
                  //$scope.loadMorephotos();
                  $scope.photosmore.length = 0;
                  var data = {
                    
                            user_id: $rootScope.login_user_id,
                            project_id: $rootScope.project_id,
                            media_type: "image",
                            start_index: $scope.photosmore.length,
                            limit: 10
                          };
                    
                          portfolioservice.loadMedia.save((data), function (data) {
                            /*for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                              data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                            }*/
                    
                            angular.forEach(data.getProjectMediaByType, function (value, key) {
                              
                              $scope.photosmore.push(value);
                              
                    
                    
                            });
                          if($rootScope.mediacount){
                            if($scope.photosmore.length == $rootScope.mediacount.IMAGE){
                              $scope.disableLoadmore = true;
                              
                            }
                            else{
                    
                              $scope.disableLoadmore = false;
                            }

                          }
                    
                            if (data.getProjectMediaByType == false) {
                    
                              $scope.disableLoadmore = true;
                            } 
                    
                            $scope.loading = false;
                          });
                    
                  
                
                          $scope.raisecount();
                      
                  

                }
                $scope.imagefile = "";
              }
              else if ($scope.filetype[0].type == "image/png") {
               //console.log("image file");
                $scope.nophotos = false;
                $scope.active = 2;
                if ($scope.active == 2) {
                 
                 // $scope.startfrom = "0";
                  //$scope.loadMorephotos();
                  $scope.photosmore.length = 0;
                  var data = {
                    
                            user_id: $rootScope.login_user_id,
                            project_id: $rootScope.project_id,
                            media_type: "image",
                            start_index: $scope.photosmore.length,
                            limit: 10
                          };
                    
                          portfolioservice.loadMedia.save((data), function (data) {
                            /*for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                              data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                            }*/
                    
                            angular.forEach(data.getProjectMediaByType, function (value, key) {
                              
                              $scope.photosmore.push(value);
                              
                    
                    
                            });
                              if($rootScope.mediacount){
                            if($scope.photosmore.length == $rootScope.mediacount.IMAGE){
                              $scope.disableLoadmore = true;
                              
                            }
                            else{
                              
                                        $scope.disableLoadmore = false;
                                      }
                          }
                            
                    
                            if (data.getProjectMediaByType == false) {
                    
                              $scope.disableLoadmore = true;
                            } 
                    
                            $scope.loading = false;
                          });
                    
                
                  
                          $scope.raisecount();
                  

                }
                $scope.imagefile = "";
              }
              else if ($scope.filetype[0].type == "application/pdf") {
                $scope.nodocuments = false;
                $scope.active = 6;
                if ($scope.active == 6) {
                 // $scope.loadMoredocs();
                 $scope.docsmore.length = 0;
                 var data = {
                  
                          user_id: $rootScope.login_user_id,
                          project_id: $rootScope.project_id,
                          media_type: "application",
                          start_index: $scope.docsmore.length,
                          limit: 10
                        };
                  
                        portfolioservice.loadMedia.save((data), function (data) {
                          for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                            data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                          }
                  
                          angular.forEach(data.getProjectMediaByType, function (value, key) {
                            $scope.docsmore.push(value);
                  
                  
                          });
                          if($rootScope.mediacount){
                          if($scope.docsmore.length == $rootScope.mediacount.APPLICATION){
                            $scope.disableLoadmoredoc = true;
                            
                          }
                          else{
                  
                            $scope.disableLoadmoredoc = false;
                          }
                        }
                          if (data.getProjectMediaByType == false) {
                  
                            $scope.disableLoadmoredoc = true;
                          } 
                          $scope.loading = false;
                        });
                        $scope.raisecount();
                }
                $scope.docfile = "";

              }
             else if ($scope.filetype[0].type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
                $scope.nodocuments = false;
                $scope.active = 6;
                if ($scope.active == 6) {
                  //$scope.loadMoredocs();
                  $scope.docsmore.length = 0;
                  var data = {
                   
                           user_id: $rootScope.login_user_id,
                           project_id: $rootScope.project_id,
                           media_type: "application",
                           start_index: $scope.docsmore.length,
                           limit: 10
                         };
                   
                         portfolioservice.loadMedia.save((data), function (data) {
                           for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                             data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                           }
                   
                           angular.forEach(data.getProjectMediaByType, function (value, key) {
                             $scope.docsmore.push(value);
                   
                   
                           });
                           if($rootScope.mediacount){
                           if($scope.docsmore.length == $rootScope.mediacount.APPLICATION){
                             $scope.disableLoadmoredoc = true;
                             
                           }
                           else{
                   
                             $scope.disableLoadmoredoc = false;
                           }
                          }
                           if (data.getProjectMediaByType == false) {
                   
                             $scope.disableLoadmoredoc = true;
                           } 
                           $scope.loading = false;
                         });
                         $scope.raisecount();
                }
                $scope.docfile = "";

              }
             else if ($scope.filetype[0].type == "application/vnd.oasis.opendocument.text") {
                $scope.nodocuments = false;
                $scope.active = 6;
                if ($scope.active == 6) {
                  //$scope.loadMoredocs();
                  $scope.docsmore.length = 0;
                  var data = {
                   
                           user_id: $rootScope.login_user_id,
                           project_id: $rootScope.project_id,
                           media_type: "application",
                           start_index: $scope.docsmore.length,
                           limit: 10
                         };
                   
                         portfolioservice.loadMedia.save((data), function (data) {
                           for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                             data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                           }
                   
                           angular.forEach(data.getProjectMediaByType, function (value, key) {
                             $scope.docsmore.push(value);
                   
                   
                           });
                           if($rootScope.mediacount){
                           if($scope.docsmore.length == $rootScope.mediacount.APPLICATION){
                             $scope.disableLoadmoredoc = true;
                             
                           }
                           else{
                   
                             $scope.disableLoadmoredoc = false;
                           }
                          }
                           if (data.getProjectMediaByType == false) {
                   
                             $scope.disableLoadmoredoc = true;
                           } 
                           $scope.loading = false;
                         });
                         $scope.raisecount();
                }
                $scope.docfile = "";

              }

              else if ($scope.filetype[0].type == "application/msword") {
                $scope.nodocuments = false;
                $scope.active = 6;
                if ($scope.active == 6) {
                  //$scope.loadMoredocs();
                  $scope.docsmore.length = 0;
                  var data = {
                   
                           user_id: $rootScope.login_user_id,
                           project_id: $rootScope.project_id,
                           media_type: "application",
                           start_index: $scope.docsmore.length,
                           limit: 10
                         };
                   
                         portfolioservice.loadMedia.save((data), function (data) {
                           for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                             data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                           }
                   
                           angular.forEach(data.getProjectMediaByType, function (value, key) {
                             $scope.docsmore.push(value);
                   
                   
                           });
                           if($rootScope.mediacount){
                           if($scope.docsmore.length == $rootScope.mediacount.APPLICATION){
                             $scope.disableLoadmoredoc = true;
                             
                           }
                           else{
                   
                             $scope.disableLoadmoredoc = false;
                           }
                          }
                           if (data.getProjectMediaByType == false) {
                   
                             $scope.disableLoadmoredoc = true;
                           } 
                           $scope.loading = false;
                         });
                         $scope.raisecount();
                }
                $scope.docfile = "";

              }

             else if ($scope.filetype[0].type == "video/mp4") {
                $scope.novideos = false;
                $scope.active = 3;
                if ($scope.active == 3) {
                 // $scope.loadMorevideos();
                 $scope.videosmore.length = 0;
                 var data = {
                  
                          user_id: $rootScope.login_user_id,
                          project_id: $rootScope.project_id,
                          media_type: "video",
                          start_index: $scope.videosmore.length,
                          limit: 10
                        };
                  
                        portfolioservice.loadMedia.save((data), function (data) {
                          for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                            data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                          }
                  
                          angular.forEach(data.getProjectMediaByType, function (value, key) {
                            $scope.videosmore.push(value);
                  
                  
                          });
                          if($rootScope.mediacount){
                          if($scope.videosmore.length == $rootScope.mediacount.VIDEO){
                            $scope.disableLoadmorevideo = true;
                            
                          }
                          else{
                  
                            $scope.disableLoadmorevideo = false;
                          }
                        }
                          if (data.getProjectMediaByType == false) {
                  
                            $scope.disableLoadmorevideo = true;
                          }
                          $scope.loading = false;
                        });
                        $scope.raisecount();
                }
                $scope.videofile = "";

              }
              
              else if ($scope.filetype[0].type == "audio/mp3" || $scope.filetype[0].type == "audio/mpeg" ) {
                $scope.noaudios = false;
                $scope.active = 4;
                if ($scope.active == 4) {
                 // $scope.loadMoreaudios();
                 $scope.audiosmore.length = 0;
                 var data = {
                  
                          user_id: $rootScope.login_user_id,
                          project_id: $rootScope.project_id,
                          media_type: "audio",
                          start_index: $scope.audiosmore.length,
                          limit: 10
                        };
                  
                        portfolioservice.loadMedia.save((data), function (data) {
                          for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                            data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                          }
                  
                          angular.forEach(data.getProjectMediaByType, function (value, key) {
                            $scope.audiosmore.push(value);
                  
                  
                          });
                          if($rootScope.mediacount){
                          if($scope.audiosmore.length == $rootScope.mediacount.AUDIO){
                            $scope.disableLoadmoreaudio = true;
                            
                          }
                          else{
                  
                            $scope.disableLoadmoreaudio = false;
                          }
                        }
                          if (data.getProjectMediaByType == false) {
                  
                            $scope.disableLoadmoreaudio = true;
                          } 
                          $scope.loading = false;
                        });
                        $scope.raisecount();
                }
                $scope.audioFile = "";

              }





            } else {
              $scope.uplodingfile = false;
              $scope.filealerts.push({
                msg: 'Error occured, Please try again',
                type: 'danger'
              });
              $timeout(function () {
                $scope.filealerts = [];
              }, 4000);

              if ($scope.filetype[0].type == "image/jpeg") {
                $scope.imagefile = "";

              }
              if ($scope.filetype[0].type == "application/pdf") {
                $scope.docfile = "";

              }
              if ($scope.filetype[0].type == "video/mp4") {
                $scope.videofile = "";

              }
              if ($scope.filetype[0].type == "audio/mp3") {
                $sccope.audioFile = "";

              }
            }
            //console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          }, function (resp) {

          }, function (evt) {
            $scope.dynamic = parseInt(100.0 * evt.loaded / evt.total);
            //console.log('progress: ' + $scope.dynamic + '% ' + evt.config.data.file.name);
          });
        }
      }
    };
    // for multiple files:
    $scope.uploadFiles = function (files) {

      $scope.uplodingfile = true;
      $scope.files = files;
      if (files && files.length) {

        Upload.upload({
          url: $rootScope.baseUrl + '' + 'Ajax_Project/project_media_add',
          data: {
            project_image: files,
            user_id: $rootScope.login_user_id,
            project_id: $rootScope.project_id
          }
        }).then(function (response) {

          if (response.data.flag == 1) {
            //$rootScope.project_id = response.data.project_id;

          }

        }, function (response) {
          if (response.status > 0) {
            $scope.errorMsg = response.status + ': ' + response.data;

          }
        }, function (evt) {
          $scope.progress =
            Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

        });
      }
    };
    $scope.uplodingfile = false;
    $scope.dynamic = 0;
    $scope.uploads = function (myCroppedImage1, name) {
     
      $scope.loading1 = true;
      $scope.uplodingfile = true;
      if(!$rootScope.project_id){
        
        $rootScope.project_id = "";
  
      }
      Upload.upload({
        url: $rootScope.baseUrl + '' + 'Ajax_Project/project_cover_add_edit',
        data: {
          project_cover_image: Upload.dataUrltoBlob(myCroppedImage1, name),
          user_id: $rootScope.login_user_id,
          project_id: $rootScope.project_id
        },
      }).then(function (response) {
        $scope.loading1 = false;
        if (response.data.flag == 1) {

          $scope.picFile = "";
          $scope.imageadded = true;
          $scope.imagepath = response.data.cover_image;
          $rootScope.project_id = response.data.project_id;
         // localStorageService.set('project_id', $rootScope.project_id);
          $rootScope.projectcreated = true;
          $scope.uplodingfile = false;

          var data = {
            
                    user_id: $rootScope.login_user_id,
                    project_id: $rootScope.project_id
            
                  };
                  portfolioservice.getcontent.save((data), function (data) {
                  
                  
                    if (data.status == "True") {
                     
                      //console.log($scope.media);
                     
                      $scope.projectinfo = data.getProjectData;

                      if ($rootScope.newProject == true) {
                        // $rootScope.project_id = undefined;
                        document.getElementById('scrolltothis').scrollIntoView()
                       }
                     
                    
            
                   
            
                    
                    }
                   
                  });
            
         // init();


        }
        $timeout(function () {
          $scope.result = response.data;
        });
      }, function (response) {

        if (response.status > 0) $scope.errorMsg = response.status +
          ': ' + response.data;
      }, function (evt) {
        $scope.dynamic = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));


      });
    };

    $scope.projectcontent();
    $scope.projectcontent = function () {
      if (!$scope.projectname || !$scope.industry || $scope.summeryForm.tagname.$invalid) {

        $scope.submiterror = true;



      }
      if ($scope.projectname && $scope.industry && $scope.summeryForm.tagname.$valid) {
        $scope.projecteditinfo = false;
        $scope.loading = true;
        $scope.alerts = [];
        $scope.submited = true;
        
       
        /*var tempArr = [];
    angular.forEach($scope.tags, function(value,key){
    console.log(value);
     tempArr.push(value.text);
   });*/

        var data = {
          project_title: $scope.projectname,
          project_description: $scope.projectdecp,
          project_industry: $scope.industry,
          project_tag: $scope.tags,
          user_id: $rootScope.login_user_id,
          project_id: $rootScope.project_id

        };
        portfolioservice.addcontent.save((data), function (data) {
          
          if (data.flag == 1) {
            $rootScope.project_id = data.project_id;
           // localStorageService.set('project_id', $rootScope.project_id);
            $rootScope.projectcreated = true;
            if ($rootScope.newProject == true) {
              // $rootScope.project_id = undefined;
              document.getElementById('scrolltothis').scrollIntoView()
             }
           
          
           
            $rootScope.newProject = false;
            $scope.enablecoverImage = false;

            $scope.loading = false;
            $scope.alerts.push({
              msg: 'Content added successfully.',
              type: 'success'
            });
            $timeout(function () {
             $scope.alerts = [];
            }, 4000);
           // init();
            $scope.submited = false;
            $scope.infosubmited = true;
            var data = {
              
                      user_id: $rootScope.login_user_id,
                      project_id: $rootScope.project_id
              
                    };
                    portfolioservice.getcontent.save((data), function (data) {
                    
                    
                      if (data.status == "True") {
                       
                        //console.log($scope.media);
                       
                        $scope.projectinfo = data.getProjectData;
                       
                       
              
                     
              
                      
                      }
                     
                    });
          } else {

            $scope.alerts.push({
              msg: 'Something went wrong.',
              type: 'alert-danger'
            });
            $timeout(function () {
              $scope.alerts = [];
            }, 4000);
            $scope.submited = false;
          }
        });
      }
      /*$http({
    method: 'POST',
    url:'http://103.50.163.54/~stagingartistize/artistize-safari/Ajax_Project/project_text_content_add',
    data: data,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})*/



    };

    $scope.projectcontenedit = function () {
      $scope.infosubmited = false;
      $scope.projecteditinfo = true;
      $scope.submiterror = false;


    };
    
    $scope.$watch('projectcreated', function () {
      localStorageService.set('projectcreated', $rootScope.projectcreated);
      // localStorageService.set('userid',$rootScope.userid);
    }, true);
    
    $scope.closeAlerts = function (index) {
      $scope.alerts.splice(1, index);
      $scope.alerts = [];
      $scope.filealerts = [];
    };
    $rootScope.options = {
      height: 300,
      focus: true,

      toolbar: [
        ['edit', ['undo', 'redo']],
      
        ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
      
        ['insert', ['link','hr']],
        


      ]
    };

    $scope.openAudio = function (audio) {
      $scope.content = audio;
      $rootScope.modalInstance = $uibModal.open({
        templateUrl: 'NewDesignSrc/video.html',
        windowClass: 'customPortfolioModalDialog',
        scope: $scope,
        audio, //passed current scope to the modal
        size: 'lg',
        resolve: {
          items: function () {
            return $scope.content;
          }
        }
      });

    };

    $scope.openvideo = function (video) {
      $scope.videocontent = video;
      $rootScope.modalInstance = $uibModal.open({
        templateUrl: 'NewDesignSrc/audio.html',
        scope: $scope,
        video, //passed current scope to the modal
        size: 'lg',
        windowClass: 'customPortfolioModalDialog',
        resolve: {
          items: function () {
            return $scope.videocontent;
          }
        }
      });

    };

    $scope.closemodal = function () {

      $rootScope.modalInstance.close();
    };


    $scope.openIfrem = function () {
      $rootScope.modalInstance = $uibModal.open({
        templateUrl: 'NewDesignSrc/iframe.html',
        scope: $scope, //passed current scope to the modal
        size: 'lg',
        windowClass: 'customPortfolioModalDialog',
        resolve: {
          items: function () {
            return $scope.videocontent;
          }
        },
        persist: true
      });


    };

    $scope.addiframe = function (embd) {
      $scope.filealerts = [];
      $scope.adding = true;
      $rootScope.modalInstance.close();
      var data = {
        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id,
        embed_code_url: embd,
        content_id: "",
        content_type:"embed"

      };

      portfolioservice.addiframe.save((data), function (data) {


       
        $scope.active = 5;
        $scope.noembed = false;
        if ($scope.active == 5) {
          $scope.linksmore.length = 0;
          //$scope.loadMorelinks();
          var data = {
            
                    user_id: $rootScope.login_user_id,
                    project_id: $rootScope.project_id,
                    media_type: "embed",
                    start_index: $scope.linksmore.length,
                    limit: 10
                  };
            
                  portfolioservice.loadMedia.save((data), function (data) {
                    for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                      data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                    }
            
                    angular.forEach(data.getProjectMediaByType, function (value, key) {
                      $scope.linksmore.push(value);
            
            
                    });
                    if($rootScope.mediacount){
                    if($scope.linksmore.length == $rootScope.mediacount.EMBED){
                      $scope.disableLoadmorelink = true;
                      
                    }
                    else{
            
                      $scope.disableLoadmorelink = false;
                    }
                  }
                    if (data.getProjectMediaByType == false) {
            
                      $scope.disableLoadmorelink = true;
                    } 
                    $scope.loading = false;
                  });
            
        //  init();
          $scope.filealerts.push({
            msg: 'Media added successfully.',
            type: 'success'
          });
          $timeout(function () {
            $scope.filealerts = [];
          }, 4000);

        }
        $scope.adding = false;
        $scope.media = true;
        $scope.raisecount();
       // $scope.loadall();

      });

    };

    $scope.addviemoiframe = function(viemoid){
      $scope.filealerts = [];
      $scope.adding = true;
      $rootScope.modalInstance.close();
      mediaService.getHash(viemoid)
      .then(function(data) {
       
        $scope.dummyimage = data.preview_thumb;
      //  $scope.getImage();



        var data = {
          user_id: $rootScope.login_user_id,
          project_id: $rootScope.project_id,
          embed_code_url: viemoid,
          content_id: "",
          content_type:"embed-vimeo",
          thumb_url:$scope.dummyimage
  
        };
  
        portfolioservice.addiframe.save((data), function (data) {
  
          $scope.active = 5;
          $scope.noembed = false;
          if ($scope.active == 5) {
            $scope.linksmore.length = 0;
            //$scope.loadMorelinks();
            var data = {
              
                      user_id: $rootScope.login_user_id,
                      project_id: $rootScope.project_id,
                      media_type: "embed",
                      start_index: $scope.linksmore.length,
                      limit: 10
                    };
              
                    portfolioservice.loadMedia.save((data), function (data) {
                      for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                        data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                      }
              
                      angular.forEach(data.getProjectMediaByType, function (value, key) {
                        $scope.linksmore.push(value);
              
              
                      });
                      if($rootScope.mediacount){
                      if($scope.linksmore.length == $rootScope.mediacount.EMBED){
                        $scope.disableLoadmorelink = true;
                        
                      }
                      else{
              
                        $scope.disableLoadmorelink = false;
                      }
                    }
                      if (data.getProjectMediaByType == false) {
              
                        $scope.disableLoadmorelink = true;
                      } 
                      $scope.loading = false;
                    });
              
          //  init();
            $scope.filealerts.push({
              msg: 'Media added successfully.',
              type: 'success'
            });
            $timeout(function () {
              $scope.filealerts = [];
            }, 4000);
  
          }
          $scope.adding = false;
          $scope.media = true;
          $scope.raisecount();
         // $scope.loadall();
  
  
         
         
         // $scope.loadall();
  
        });
  
      
       
      // console.log
      });
     
     


    };

    $scope.openembed = function (embd) {
     
      if(embd.type == "embed"){
      $scope.embdcontent = embd;
      $rootScope.modalInstance = $uibModal.open({
        templateUrl: 'NewDesignSrc/embed.html',
        scope: $scope,
        embd, //passed current scope to the modal
        size: 'lg',
        windowClass: 'customPortfolioModalDialog',
        resolve: {
          items: function () {
            return $scope.embdcontent;
          }
        },
        persist: true
      });
    }
    if(embd.type == "embed-vimeo"){

      $scope.embdcontent = embd;
      $rootScope.modalInstance = $uibModal.open({
        templateUrl: 'NewDesignSrc/viemo-embed.html',
        scope: $scope,
        embd, //passed current scope to the modal
        size: 'lg',
        windowClass: 'customPortfolioModalDialog',
        resolve: {
          items: function () {
            return $scope.embdcontent;
          }
        },
        persist: true
      });


    }
    else{

      $scope.embdcontent = embd;
      $rootScope.modalInstance = $uibModal.open({
        templateUrl: 'NewDesignSrc/embed.html',
        scope: $scope,
        embd, //passed current scope to the modal
        size: 'lg',
        windowClass: 'customPortfolioModalDialog',
        resolve: {
          items: function () {
            return $scope.embdcontent;
          }
        },
        persist: true
      });

    }
    };

    $scope.openevimeombed = function (embd) {
      
      $scope.embdcontent = embd;
      $rootScope.modalInstance = $uibModal.open({
        templateUrl: 'NewDesignSrc/viemo-embed.html',
        scope: $scope,
        embd, //passed current scope to the modal
        size: 'lg',
        windowClass: 'customPortfolioModalDialog',
        resolve: {
          items: function () {
            return $scope.embdcontent;
          }
        },
        persist: true
      });

    };

    $scope.iframeregex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;;
    $scope.veiomoregExp = /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/;

    $scope.submittext = function (texttitle, textcontent) {
      $scope.startediting = false;
      
      var titletext = texttitle;
      usSpinnerService.spin('spinner-1');
      if (texttitle == null) {
        titletext = "Untitled";

      }
      if ($rootScope.textcontent_id == null) {

        $rootScope.textcontent_id = "";
      }
      var data = {
        caption: titletext,
        project_text_writeup: textcontent,
        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id,
        content_id: $rootScope.textcontent_id
      };
      portfolioservice.addtext.save((data), function (data) {
        $scope.textcontentarry = [];
        if(data.flag == 1){
          $scope.showtextcontent = true;
         
          var data = {
            
                    user_id: $rootScope.login_user_id,
                    project_id: $rootScope.project_id
            
                  };
                  portfolioservice.getcontent.save((data), function (data) {
                   // usSpinnerService.spin('spinner-1');
                   // console.log(data);
                    $scope.resizestarted = false;
                    if (data.status == "True") {
                    
                      if(data.getProjectMediaText != false){
                      $scope.textcontent = data.getProjectMediaText[0].CONTENT;
                      $scope.texttitle = data.getProjectMediaText[0].CAPTION;
                      $rootScope.textcontent_id = data.getProjectMediaText[0].ID;
                      }
                     
                      
                     
                   
                    }
                    
                    
                  });

        }
        usSpinnerService.stop('spinner-1');
        
       
       
       

      });

    };


    $scope.photosmore = [];
    $scope.nophotos = false;
    $scope.loadphotos = function () {
      $scope.disableLoadmore = false;

      if ($scope.photosmore.length == 0) {
        usSpinnerService.spin('spinner-1');
        var data = {

          user_id: $rootScope.login_user_id,
          project_id: $rootScope.project_id,
          media_type: "image",
          start_index: $scope.photosmore.length,
          limit: 8
        };

        portfolioservice.loadMedia.save((data), function (data) {
         /* for (var i = 0; i < data.getProjectMediaByType.length; i++) {
            data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
          }*/

          angular.forEach(data.getProjectMediaByType, function (value, key) {
            $scope.photosmore.push(value);


          });
          usSpinnerService.stop('spinner-1');

          if (data.getProjectMediaByType == false) {
            $scope.nophotos = true;

          }

        });

      }


    };
    $scope.loadMorephotos = function () {
      

      $scope.loading = true;
      var data = {

        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id,
        media_type: "image",
        start_index: $scope.photosmore.length,
        limit: 8
      };

      portfolioservice.loadMedia.save((data), function (data) {
        /*for (var i = 0; i < data.getProjectMediaByType.length; i++) {
          data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
        }*/

        angular.forEach(data.getProjectMediaByType, function (value, key) {
          
          $scope.photosmore.push(value);
          


        });
      
        if($scope.photosmore.length == $rootScope.mediacount.IMAGE){
          $scope.disableLoadmore = true;
          
        }
        else{

          $scope.disableLoadmore = false;
        }

        if (data.getProjectMediaByType == false) {

          $scope.disableLoadmore = true;
        } 

        $scope.loading = false;
      });

    };

    $scope.videosmore = [];
    $scope.novideos = false;
    $scope.loadvideos = function () {
      $scope.disableLoadmorevideo = false;

      if ($scope.videosmore.length == 0) {
        usSpinnerService.spin('spinner-1');
        var data = {

          user_id: $rootScope.login_user_id,
          project_id: $rootScope.project_id,
          media_type: "video",
          start_index: $scope.videosmore.length,
          limit:8
        };

        portfolioservice.loadMedia.save((data), function (data) {
          for (var i = 0; i < data.getProjectMediaByType.length; i++) {
            data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
          }

          angular.forEach(data.getProjectMediaByType, function (value, key) {
            $scope.videosmore.push(value);


          });

          usSpinnerService.stop('spinner-1');
          if (data.getProjectMediaByType == false) {

            $scope.novideos = true;
          }

        });

      }


    };
    $scope.loadMorevideos = function () {
      $scope.loading = true;
      var data = {

        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id,
        media_type: "video",
        start_index: $scope.videosmore.length,
        limit: 8
      };

      portfolioservice.loadMedia.save((data), function (data) {
        for (var i = 0; i < data.getProjectMediaByType.length; i++) {
          data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
        }

        angular.forEach(data.getProjectMediaByType, function (value, key) {
          $scope.videosmore.push(value);


        });
        if($scope.videosmore.length == $rootScope.mediacount.VIDEO){
          $scope.disableLoadmorevideo = true;
          
        }
        else{

          $scope.disableLoadmorevideo = false;
        }
        if (data.getProjectMediaByType == false) {

          $scope.disableLoadmorevideo = true;
        }
        $scope.loading = false;
      });

    };

    $scope.audiosmore = [];
    $scope.noaudios = false;
    $scope.loadaudio = function () {
      $scope.disableLoadmoreaudio = false;
      if ($scope.audiosmore.length == 0) {
        usSpinnerService.spin('spinner-1');
        var data = {

          user_id: $rootScope.login_user_id,
          project_id: $rootScope.project_id,
          media_type: "audio",
          start_index: $scope.audiosmore.length,
          limit: 8
        };

        portfolioservice.loadMedia.save((data), function (data) {
          for (var i = 0; i < data.getProjectMediaByType.length; i++) {
            data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
          }

          angular.forEach(data.getProjectMediaByType, function (value, key) {
            $scope.audiosmore.push(value);


          });
          usSpinnerService.stop('spinner-1');

          if (data.getProjectMediaByType == false) {

            $scope.noaudios = true;
          }
        });

      }


    };
    $scope.loadMoreaudios = function () {
      $scope.loading = true;
      var data = {

        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id,
        media_type: "audio",
        start_index: $scope.audiosmore.length,
        limit: 8
      };

      portfolioservice.loadMedia.save((data), function (data) {
        for (var i = 0; i < data.getProjectMediaByType.length; i++) {
          data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
        }

        angular.forEach(data.getProjectMediaByType, function (value, key) {
          $scope.audiosmore.push(value);


        });
        if($scope.audiosmore.length == $rootScope.mediacount.AUDIO){
          $scope.disableLoadmoreaudio = true;
          
        }
        else{

          $scope.disableLoadmoreaudio = false;
        }
        if (data.getProjectMediaByType == false) {

          $scope.disableLoadmoreaudio = true;
        } 
        $scope.loading = false;
      });

    };

    $scope.linksmore = [];
    $scope.urlsmore = [];
    $scope.noembed = false;
    $scope.nolinks = false;
    $scope.loadlink = function () {
      $scope.disableLoadlink = false;
      if ($scope.linksmore.length == 0) {
        usSpinnerService.spin('spinner-1');
        var data = {

          user_id: $rootScope.login_user_id,
          project_id: $rootScope.project_id,
          media_type: "embed",
          start_index: $scope.linksmore.length,
          limit: 8
        };

        portfolioservice.loadMedia.save((data), function (data) {
          for (var i = 0; i < data.getProjectMediaByType.length; i++) {
            data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
          }

          angular.forEach(data.getProjectMediaByType, function (value, key) {
            $scope.linksmore.push(value);


          });
          usSpinnerService.stop('spinner-1');
          if (data.getProjectMediaByType == false) {

            $scope.noembed = true;
          }
        });

      }

      var data = {
                
        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id,
        media_type: "url",
        start_index: $scope.urlsmore.length,
        limit: 8
    };

    portfolioservice.loadMedia.save((data), function(data) {
       
        angular.forEach(data.getProjectMediaByType, function(value, key) {
            $scope.urlsmore.push(value);


        });
        
        usSpinnerService.stop('spinner-1');
        $scope.urlsyoutubemore =[];
        $scope.normalurlmore = [];
        for (var i = 0; i < $scope.urlsmore.length; i++) {
           
           // $scope.mediaurls[i].url = $sce.trustAsResourceUrl($scope.mediaurls[i].url);
                var url = $scope.urlsmore[i].CONTENT;
               // console.log(links);
                var ID = '';
                url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                
                if(url.length > 1){
                if (url[2] !== undefined) {
                    ID = url[2].split(/[^0-9a-z_\-]/i);
                   // $scope.urlsmore[i].thumbUrl = ID[0];
                   $scope.urlsmore[i].newurl = ID[0];
          
                } else {
                 // $scope.urlsmore[i].thumbUrl = url;
                }
               
                $scope.urlsyoutubemore.push($scope.urlsmore[i]);
               
              
               
              }

              else{
               
               
                $scope.normalurlmore.push($scope.urlsmore[i]);



              }
             
          
             
        }

        if(data.getProjectMediaByType == false && $scope.urlsmore.length == 0 ){

          $scope.nolinks = true;
        }
    });




    };
    $scope.andurlsmore = [];
    $scope.loadMorelinks = function () {
      $scope.loading = true;
      var data = {

        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id,
        media_type: "embed",
        start_index: $scope.linksmore.length,
        limit: 8
      };

      portfolioservice.loadMedia.save((data), function (data) {
        for (var i = 0; i < data.getProjectMediaByType.length; i++) {
          data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
        }

        angular.forEach(data.getProjectMediaByType, function (value, key) {
          $scope.linksmore.push(value);


        });
        if($scope.linksmore.length == $rootScope.mediacount.EMBED){
          $scope.disableLoadmorelink = true;
          
        }
        else{

          $scope.disableLoadmorelink = false;
        }
        if (data.getProjectMediaByType == false) {

          $scope.disableLoadmorelink = true;
        } 
        $scope.loading = false;
      });

      var data = {
            
        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id,
        media_type: "url",
        start_index: $scope.urlsmore.length,
        limit: 8
    };

    portfolioservice.loadMedia.save((data), function(data) {
        angular.forEach(data.getProjectMediaByType, function(value, key) {
            $scope.urlsmore.push(value);
            $scope.andurlsmore.push(value);


        });
        $scope.normalurlmore = [];
        for (var i = 0; i < $scope.andurlsmore.length; i++) {
       
          //  $scope.urlsyoutubemore =[];
           // $scope.mediaurls[i].url = $sce.trustAsResourceUrl($scope.mediaurls[i].url);
                var url = $scope.andurlsmore[i].CONTENT;
               // console.log(links);
                var ID = '';
                url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                
                if(url.length > 1){
                if (url[2] !== undefined) {
                    ID = url[2].split(/[^0-9a-z_\-]/i);
                   // $scope.urlsmore[i].thumbUrl = ID[0];
                   $scope.andurlsmore[i].newurl = ID[0];
          
                } else {
                 // $scope.urlsmore[i].thumbUrl = url;
                }
               
                $scope.urlsyoutubemore.push($scope.andurlsmore[i]);
                
              
               
              }

              else{
               
              
                $scope.normalurlmore.push($scope.andurlsmore[i]);



              }
             
          
             
        }

        

        
        if($scope.urlsmore.length == $rootScope.mediacount.URL){
            $scope.disableLoadmoreurl = true;
            
          }
          else{
  
            $scope.disableLoadmoreurl = false;
          }
        if (data.getProjectMediaByType == false) {

            $scope.disableLoadmoreurl = true;
        } 
        $scope.loading = false;

    });


    };

    $scope.docsmore = [];
    $scope.nodocuments = false;
    $scope.loaddoc = function () {
      $scope.disableLoaddoc = false;
      if ($scope.docsmore.length == 0) {
        usSpinnerService.spin('spinner-1');
        var data = {

          user_id: $rootScope.login_user_id,
          project_id: $rootScope.project_id,
          media_type: "application",
          start_index: $scope.docsmore.length,
          limit: 8
        };

        portfolioservice.loadMedia.save((data), function (data) {
          for (var i = 0; i < data.getProjectMediaByType.length; i++) {
            data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
          }

          angular.forEach(data.getProjectMediaByType, function (value, key) {
            $scope.docsmore.push(value);


          });
          usSpinnerService.stop('spinner-1');
          if (data.getProjectMediaByType == false) {
            $scope.nodocuments = true;
          }
        });

      }


    };
    $scope.loadMoredocs = function () {
      $scope.loading = true;
      var data = {

        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id,
        media_type: "application",
        start_index: $scope.docsmore.length,
        limit: 8
      };

      portfolioservice.loadMedia.save((data), function (data) {
        for (var i = 0; i < data.getProjectMediaByType.length; i++) {
          data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
        }

        angular.forEach(data.getProjectMediaByType, function (value, key) {
          $scope.docsmore.push(value);


        });
        if($scope.docsmore.length == $rootScope.mediacount.APPLICATION){
          $scope.disableLoadmoredoc = true;
          
        }
        else{

          $scope.disableLoadmoredoc = false;
        }
        if (data.getProjectMediaByType == false) {

          $scope.disableLoadmoredoc = true;
        } 
        $scope.loading = false;
      });

    };
    $scope.showtextcontent = true;
    $scope.edittext = function () {
      $scope.showtextcontent = false;
      $scope.startediting = true;
      $scope.edittextcontent = true;
      


    };

    $scope.deletemedia = function (item, index, photosmore) {
      $scope.dummeyarry = photosmore;
      sweetAlert.swal({
          title: "Are you sure you want to delete this Media?",
          //text: "Your will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: " Delete",
          cancelButtonText: "Cancel",
          closeOnConfirm:false,
          closeOnCancel: false
        },
        function (isConfirm) {
          if (isConfirm) {
            var data = {
              content_id: item.ID,
              user_id: $rootScope.login_user_id,
              project_id: $rootScope.project_id

            };

            portfolioservice.removeMedia.save((data), function (data) {
              $scope.dummeyarry.splice(index, 1);


            });
            $scope.raisecount();

            sweetAlert.swal("Deleted!", "Media deleted successfully", "success");
          } else {
            sweetAlert.swal("Cancelled");
          }
        });


    };

    $scope.deletemediamain = function (item, index) {

      sweetAlert.swal({
          title: "Are you sure you want to delete this Media?",
          //text: "Your will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText:  "Delete",
          cancelButtonText: " Cancel",
          closeOnConfirm: false,
          closeOnCancel: false,
          showLoaderOnConfirm: true,
        },
        function (isConfirm) {
          if (isConfirm) {

            var data = {
              content_id: item.ID,
              user_id: $rootScope.login_user_id,
              project_id: $rootScope.project_id

            };

            portfolioservice.removeMedia.save((data), function (data) {
              init();

              if ($scope.photosmore.length > 0 || item.CONTENT_TYPE == "image/jpeg") {

                $scope.photosmore.splice(index, 1);
              }

              if ($scope.audiosmore.length > 0 || item.CONTENT_TYPE == "audio/mp3") {

                $scope.audiosmore.splice(index, 1);
              }
              if ($scope.videosmore.length > 0 || item.CONTENT_TYPE == "video/mp4") {

                $scope.videosmore.splice(index, 1);
              }

              if ($scope.docsmore.length > 0 || item.CONTENT_TYPE == "application/pdf") {

                $scope.docsmore.splice(index, 1);
              }



            });
            sweetAlert.swal("Deleted!", "Media deleted successfully", "success");
            $scope.raisecount();
            
          } else {
            sweetAlert.swal("Cancelled");
          }
        });

    };
    this.editmediacaption = false;
    $scope.editcaption = function (item) {
      item.editmediacaption = true;
      if(item.CAPTION == "Untitled"){
      item.CAPTION = "";
      }
    };

    $scope.savecaption = function (item) {
      var data = {
        content_id: item.ID,
        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id,
        content_caption: item.CAPTION
      };
      portfolioservice.addmediacaption.save((data), function (data) {
        item.editmediacaption = false;

      });
    };

    $scope.openLightboxModal = function (index) {
     // $scope.photosmore = $filter('orderBy')($scope.photosmore, '-CREATED_ON');
      Lightbox.openModal($scope.photosmore, index);
    };
    $scope.openLightboxModal1 = function (index) {
      Lightbox.openModal($scope.mediaImages, index);
    };


    $scope.Lightbox = Lightbox;


    $scope.publishStatus = function (data) {
      $scope.loadingStatus = true;
      $scope.status = undefined;
      if (data.PUBLISH_STATUS == 0) {
        $scope.status = 1;
      }

      if (data.PUBLISH_STATUS == 1) {
        $scope.status = 0;
      }

      var data = {
        user_id: $rootScope.login_user_id,
        project_id: $rootScope.project_id,
        publish_status: $scope.status
      };
      portfolioservice.publishPortfolio.save((data), function (data) {
       // init();
       $scope.projectcontent();
        $scope.loadingStatus = false;
        if(data.flag == 1){
          localStorageService.set('project_id', null);
          window.location.href = $rootScope.baseUrl + "" + data.redirect;
        }
        else if(data.flag == 2){
          localStorageService.set('project_id', null);
          window.location.href = $rootScope.baseUrl + "" + data.redirect;
        }
        else if(data.flag == 3){
          localStorageService.set('project_id', null);
          window.location.href = $rootScope.baseUrl + "" + data.redirect;
        }
        else{
          $scope.alerts = [];
          $scope.alerts.push({
            msg: 'Something went wrong.',
            type: 'alert-danger'
          });
          $timeout(function () {
            $scope.alerts = [];
          }, 4000);
        }
        

      });



    };

    $scope.save = function () {

     // window.location.href = $rootScope.baseUrl + "" + "Portfolio";
      localStorageService.set('project_id', null);
      $scope.projectcontent();
      portfolioservice.saveAndExit.get({}, function (data) {
        window.location.href = $rootScope.baseUrl + "" + data.redirect;
        
      });

    };


    $scope.likepost = function (data) {
     
      $scope.like = undefined;

      if (data.YOU_LIKED_FLAG == 0) {

        $scope.like = true;
        data.TOTAL_LIKES++;
        $scope.likeclass = "LikeRed";

        var data1 = {
          user_id: $rootScope.login_user_id,
          project_id: data.PROJECT_ID,
          media_id: data.ID


        };

        portfolioservice.LikeUnlike.save((data1), function (data) {


        });



      }

      if (data.YOU_LIKED_FLAG == 1) {

        $scope.like = false;

        data.TOTAL_LIKES--;
        $scope.likeclass = "UnlikeBlack";

        var data1 = {
          user_id: $rootScope.login_user_id,
          project_id: data.PROJECT_ID,
          media_id: data.ID


        };

        portfolioservice.LikeUnlike.save((data1), function (data) {


        });

      }

      if ($scope.like == true) {

        data.YOU_LIKED_FLAG = 1;
      } else {

        data.YOU_LIKED_FLAG = 0;
      }




    };


    $scope.mainloding = false;

    $scope.raisecount = function(){
      var data = {
        
                user_id: $rootScope.login_user_id,
                project_id: $rootScope.project_id
        
              };
              portfolioservice.getcontent.save((data), function (data) {
               // usSpinnerService.spin('spinner-1');
               // console.log(data);
                $scope.resizestarted = false;
                if (data.status == "True") {
                
                  $rootScope.mediacount = data.getProjectMediaCount;
                 
                  
                 
               
                }
                
                
              });


    };

    


  }]).directive('widthCounterimage', function ($rootScope,$timeout) {
    return {

      restrict: 'EA',
      link: function (scope, element, attrs) {
        if (scope.$last){
          $timeout(function () {
        $rootScope.portImgWidthimage = element.innerWidth();
       
      });
        
      }
        
       
      }
    };
  }).directive('widthCounterimagemain', function ($rootScope,$timeout) {
    return {

      restrict: 'EA',
      link: function (scope, element, attrs) {
        if (scope.$last){
          $timeout(function () {
        $rootScope.portImgWidthimagemain = element.innerWidth();
      
      });
        
      }
        
       
      }
    };
  }).directive('widthCountervideo', function ($rootScope,$timeout) {
    return {

      restrict: 'EA',
      link: function (scope, element, attrs) {
        if (scope.$last){
          $timeout(function () {
        $rootScope.portImgWidthimagevideo = element.innerWidth();
        
      });
    }
        
       
      }
    };
  }).directive('widthCounteraudio', function ($rootScope,$timeout) {
    return {

      restrict: 'EA',
      link: function (scope, element, attrs) {
        if (scope.$last){
          $timeout(function () {
        $rootScope.portImgWidthimageaudio = element.innerWidth();
        
      });
    }
        
       
      }
    };
  }).directive('widthCounterlink', function ($rootScope,$timeout) {
    return {

      restrict: 'EA',
      link: function (scope, element, attrs) {
        if (scope.$last){
          $timeout(function () {
        $rootScope.portImgWidthlink = element.innerWidth();
        
      });
    }
        
       
      }
    };
  }).directive('widthCounterdocument', function ($rootScope,$timeout) {
    return {

      restrict: 'EA',
      link: function (scope, element, attrs) {
        if (scope.$last){
          $timeout(function () {
        $rootScope.portImgWidthdocument = element.innerWidth();
        
      });
    }
        
       
      }
    };
  }).directive('widthCountertext', function ($rootScope,$timeout) {
    return {

      restrict: 'EA',
      link: function (scope, element, attrs) {
       
        $rootScope.portImgWidthdocumenttext = element.innerWidth();
        
     
        
       
      }
    };
  }).directive('widthCounter1', function ($rootScope,$timeout) {
    return {

      restrict: 'EA',
      link: function (scope, element, attrs) {
        if (scope.$last){
          $timeout(function () {
          $rootScope.portImgWidth1 = element.innerWidth(); 
        });
      }
        
        

                

      
      
      }
    };
  }).filter('trustEmbed', function ($sce) {
    return function (value) {
      return $sce.trustAsHtml(value);
    };
  }).filter('youtubecode', function ($sce) {
    return function (url) {
      var ID = '';
      url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      
     
      if (url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];

      } else {
        ID = url;
      }
      return ID;
    

    };
  }).filter('vimeocode', function ($sce) {
    return function (url) {
      
      var ID = '';
      var regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
     // url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
     var match = url.match(regExp);
    
      if (match) {
        ID =  match[5];
      
        

      } else {
       // ID = null;
      }

      
      return $sce.trustAsResourceUrl(ID);
    

    };
  }).filter('vimeoiframe', function ($sce) {
    return function (url) {
      
      var ID = '';
      var regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
     // url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
     var match = url.match(regExp);
    
      if (match) {
        ID =  match[5];
      
        

      } else {
       // ID = null;
      }

      var bsurl="https://player.vimeo.com/video/"
      var maincontaintcode =  bsurl + "" + ID;
      return $sce.trustAsResourceUrl(maincontaintcode);
    

    };
  })
  .filter('youtubeiframe', function ($sce) {
    return function (url) {

      var ID = '';
      url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      if (url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];

      } else {
        ID = url;
      }
      var burl = "https://www.youtube.com/embed/";
      var contenntcode = burl + "" + ID;
      return $sce.trustAsResourceUrl(contenntcode);


    };
  })
  .directive("getElement", function () {
    return {
      restrict: "EA",
      //  require: "ngModel",
      link: function (scope, element, attrs) {


        scope.$watch('embdcontent', function () {
         
          var content = element().children();
          var wid = content.prevObject[0].children;
          var set = 'auto';
          content.height(set);
          var set1 = 100 + '%'
          content.width(set1);

          //console.log(content.prevObject[0].clientHeight);
        });

      }
    };
  }).directive('editInPlace', function () {
    return {
      restrict: 'E',
      scope: {
        value: '='
      },
      template: '<span ng-click="edit()" ng-bind="value"></span><input ng-model="value"></input>',
      link: function ($scope, element, attrs) {
        // Let's get a reference to the input element, as we'll want to reference it.
        var inputElement = angular.element(element.children()[1]);

        // This directive should have a set class so we can style it.
        element.addClass('edit-in-place');

        // Initially, we're not editing.
        $scope.editing = false;

        // ng-click handler to activate edit-in-place
        $scope.edit = function () {
          $scope.editing = true;

          // We control display through a class on the directive itself. See the CSS.
          element.addClass('active');

          // And we must focus the element.
          // `angular.element()` provides a chainable array, like jQuery so to access a native DOM function,
          // we have to reference the first element in the array.
          inputElement[0].focus();
        };

        // When we leave the input, we're done editing.
        inputElement.prop('onblur', function () {
          $scope.editing = false;
          element.removeClass('active');
        });
      }
    };
  }).filter('myDateFormat', function myDateFormat($filter) {
    return function (text) {
      var tempdate = new Date(text.replace(/-/g, "/"));
      return $filter('date')(tempdate, "dd-mm-yyyy");
    }
  }).filter('cut', function () {
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace !== -1) {
              //Also remove . and , so its gives a cleaner result.
              if (value.charAt(lastspace-1) === '.' || value.charAt(lastspace-1) === ',') {
                lastspace = lastspace - 1;
              }
              value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
}).factory('mediaService', function($http, $q) {
  function youtube_id_from_url(url) {
    var id = '';
    url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(url[2] !== undefined) {
      id = url[2].split(/[^0-9a-z_]/i);
      id = id[0];
    } else {
      id = url;
    }
    return id;
  }

  function vimeo_id_from_url(url) {

    var regExp = /(http:\/\/|https:\/\/)?(www\.)?vimeo.com\/(\d+)(\/)?(#.*)?/

    var match = url.match(regExp)

    if (match)
        return match[3]

  }
  
  function getPropByString(obj, propString) {
    if (!propString)
        return obj;

    var prop, props = propString.split('.');

    for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
        prop = props[i];

        var candidate = obj[prop];
        if (candidate !== undefined) {
            obj = candidate;
        } else {
            break;
        }
    }
    return obj[props[i]];
  }

  var apiNames = ['youtube','vimeo'];

  var apis = {
    youtube : {
      url : 'http://gdata.youtube.com/feeds/api/videos/%s%?v=2&alt=jsonc',
      title : 'data.title',
      description : 'data.description',
      preview_thumb : 'data.thumbnail.sqDefault',
      parse: youtube_id_from_url
        
    },
    vimeo : {
      url : 'http://vimeo.com/api/oembed.json?url=http%3A//vimeo.com/%s%',
      title : 'title',
      description : 'description',
      preview_thumb : 'thumbnail_url',
      parse : vimeo_id_from_url
    },
    image : {
      title : '%s%',
      description : '',
      preview_thumb : '%s%',
      parse : function(url) { return url; }
    }
  }

  var obj = {
    getHash : function(url) {
      var hash = {
        preview_thumb: '',
        meta: {
          title : '',
          description : '',
        }
      };
      var api = 'image';
      var id = '';

      apiNames.map(function(el, ix, arr) {
        if(url.indexOf(el) > -1) {
          api = el;
        }
      });

      var deferred = $q.defer();

      if(apis[api].url) {
        var apiUrl = apis[api].url.replace('%s%', apis[api].parse(url));
        $http({method: 'GET', url : apiUrl}).
          success(function(data, status, headers, config) {
            hash.preview_thumb = getPropByString(data,apis[api].preview_thumb);
            hash.meta.title = getPropByString(data, apis[api].title);
            hash.meta.description = getPropByString(data,apis[api].description);
            //The rest from the api, if you want it.
            hash.meta.data = data;
            deferred.resolve(hash);
          }).
           error(function(data, status, headers, config) {
            deferred.reject(data);
          });
      } else {
        if(url.length && url.length > 4) {
          hash.preview_thumb = url;
          hash.meta.title = url;
          hash.meta.description = '';
          //The rest from the api, if you want it.
          deferred.resolve(hash);
        } else {
          deferred.reject({'error' : 'invalid url'});
        }
      }

      return deferred.promise;
    }
  };
  return obj;
});

'use strict';
angular.
module('material').
controller('portfolioViewCtrl', ['$scope', '$http', '$rootScope', '$base64', '$timeout', 'Upload', 'Loginauth', 'portfolioservice', 'Lightbox', '$sce', '$uibModal', 'localStorageService', 'usSpinnerService', 'sweetAlert', function($scope, $http, $rootScope, $base64, $timeout, Upload, Loginauth, portfolioservice, Lightbox, $sce, $uibModal, localStorageService, usSpinnerService, sweetAlert) {
    $rootScope.baseUrl = baseurl;
    $scope.loadingmain = true;
    $scope.loading = false;
    $rootScope.user_id = userid;
    

    $rootScope.project_id = project_id;
    $rootScope.login_user_id = login_user_id;
    if ($rootScope.project_id == null) {
        $rootScope.project_id = "";
    }

    $scope.activateTab = function(tab) {

        $scope.inProgressTab = tab;
    };

   
     
    $scope.tabPhoto = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;
        }
        else if($rootScope.islogin == true){
        $scope.disableLoadmore = false;

        $scope.active = 1;
        $scope.loadphotos();
        }
    };

    $scope.tabvideo = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;
        }
        else if($rootScope.islogin == true){
        $scope.active = 2;
        $scope.disableLoadmorevideo = false;
        $scope.loadvideos();
        }
    };

    $scope.tabaudio = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;
        }
        else if($rootScope.islogin == true){
        $scope.active = 3;
        $scope.loadaudio();
        $scope.disableLoadmoreaudio = false;
        }
    };

    $scope.tablink = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;
        }
        else if($rootScope.islogin == true){
            
        $scope.active = 4;
        $scope.loadlink();
        document.getElementById('embedsection').scrollIntoView();
        $scope.disableLoadmorelink = false;
        }
    };

    $scope.tabdocument = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;
        }
        else if($rootScope.islogin == true){
        $scope.active = 5;
        $scope.loaddoc();
        document.getElementById('docsection').scrollIntoView();
        $scope.disableLoadmoredoc = false;
        }
    };

    $scope.tabtext = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;

        }
        else if($rootScope.islogin == true){
        $scope.active = 6;
        document.getElementById('textsection').scrollIntoView();
        }

    };
    $scope.tabtextsection = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;

        }
        else if($rootScope.islogin == true){
        $scope.active = 6;
       // document.getElementById('textsection').scrollIntoView();
        }

    };
    

    function init() {
        var data = {

            user_id: $rootScope.login_user_id,
            project_id: $rootScope.project_id

        };
        portfolioservice.getcontent.save((data), function(data) {
            usSpinnerService.spin('spinner-load');
            $scope.loadingmain = false;
           
            $rootScope.islogin = data.isLoggedIn;
            if($rootScope.islogin == false){
                
                 $rootScope.modalInstance = $uibModal.open({
                     templateUrl: 'NewDesignSrc/login.php',
                     scope: $scope, //passed current scope to the modal
                     size: 'lg',
                     windowClass: 'customPortfolioModalDialog',
                     backdrop  : 'static',
                     keyboard  : false,
                     resolve: {
                       items: function () {
                         return $scope.videocontent;
                       }
                     },
                     persist: true
                   });
                   usSpinnerService.stop('spinner-load');
        
        
             }
            //usSpinnerService.stop('spinner-load');
            
            $scope.comments1 = [];
            $scope.exp =[];
            $scope.media = data.getProjectMedia;
            $scope.personalinfo = data.getProfile;
            $scope.projectinfo = data.getProjectData;
            $scope.datacount = data.getTotalSocialCount;
            $scope.mediaImages = data.getProjectMediaImage;
            $scope.mediavideos = data.getProjectMediaVideo;
            $scope.mediaAudios = data.getProjectMediaAudio;
            $scope.mediaEmbeds = data.getProjectMediaEmbed;
            $scope.mediaDocuments = data.getProjectMediaApplication;
            $scope.mediaurls = data.getProjectMediaUrl;
            $rootScope.mediacount = data.getProjectMediaCount;
             if($scope.projectinfo){
            if($rootScope.login_user_id != $scope.projectinfo[0].USER_ID &&  $scope.projectinfo[0].PUBLISH_STATUS == 0 ){
                portfolioservice.saveAndExit.get({}, function (data) {
                   window.location.href = $rootScope.baseUrl + "" + data.redirect;
                    
                  });

                }
            }
           
            if(data.getProjectMediaText != false){
            $scope.textcontent = data.getProjectMediaText[0].CONTENT;
            $scope.texttitle = data.getProjectMediaText[0].CAPTION;
            $rootScope.textcontent_id = data.getProjectMediaText[0].ID;}
            angular.forEach(data.getProjectComments, function(value, key) {
              
                $scope.exp.push(value);
             


            });
             
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
                       // ID = url;
                    }
                   
                    $scope.urlsyoutube.push( $scope.mediaurls[i]);
                    
                   
                  }

                  else{
                   
                   
                    $scope.normalurl.push($scope.mediaurls[i]);



                  }
                 
              
                 
            }

            $scope.textcontentarry = [];
            $scope.imageContentData = [];
            $scope.videoContentData = [];
            $scope.audioContentData = [];
            $scope.embedContentData = [];
            $scope.applicationContentData = [];
            /*angular.forEach($scope.media, function(value, key) {

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
            usSpinnerService.stop('spinner-1');
            usSpinnerService.stop('spinner-load');

        });

       

        
        

    }
    init();

    

    $scope.closemodal = function() {

        $rootScope.modalInstance.close();
    };

    $scope.openvideo = function(video) {
        if($rootScope.islogin == false){
            
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });


         }
         if($rootScope.islogin == true){
        $scope.videocontent = video;
        $rootScope.modalInstance = $uibModal.open({
            templateUrl: 'NewDesignSrc/audio.html',
            scope: $scope,
            video, //passed current scope to the modal
            size: 'lg',
            windowClass: 'customPortfolioModalDialog',
            resolve: {
                items: function() {
                    return $scope.videocontent;
                }
            }
        });

    }

    };

    $scope.openAudio = function(audio) {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });

        }
        if($rootScope.islogin == true){
        $scope.content = audio;
        $rootScope.modalInstance = $uibModal.open({
            templateUrl: 'NewDesignSrc/video.html',
            scope: $scope,
            audio, //passed current scope to the modal
            size: 'sm',
            windowClass: 'customPortfolioModalDialog',
            resolve: {
                items: function() {
                    return $scope.content;
                }
            }
        });
    }
    };

    $scope.openembed = function(embd) {
       
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
            
        }
        if($rootScope.islogin == true){
            if(embd.type == "embed"){
        $scope.embdcontent = embd;
        $rootScope.modalInstance = $uibModal.open({
            templateUrl: 'NewDesignSrc/embed.html',
            scope: $scope,
            embd, //passed current scope to the modal
            size: 'lg',
            windowClass: 'customPortfolioModalDialog',
            resolve: {
                items: function() {
                    return $scope.embdcontent;
                }
            }
        });
    }

    else if(embd.type == "embed-vimeo"){


        $scope.embdcontent = embd;
        $rootScope.modalInstance = $uibModal.open({
            templateUrl: 'NewDesignSrc/viemo-embed.html',
            scope: $scope,
            embd, //passed current scope to the modal
            size: 'lg',
            windowClass: 'customPortfolioModalDialog',
            resolve: {
                items: function() {
                    return $scope.embdcontent;
                }
            }
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
                items: function() {
                    return $scope.embdcontent;
                }
            }
        });





    }



    }
    };
    $scope.openevimeombed = function(embd) {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
            
        }
        if($rootScope.islogin == true){
        $scope.embdcontent = embd;
        $rootScope.modalInstance = $uibModal.open({
            templateUrl: 'NewDesignSrc/viemo-embed.html',
            scope: $scope,
            embd, //passed current scope to the modal
            size: 'lg',
            windowClass: 'customPortfolioModalDialog',
            resolve: {
                items: function() {
                    return $scope.embdcontent;
                }
            }
        });
    }
    };
    $scope.openLightboxModal = function(index) {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
            
        }
        if($rootScope.islogin == true){
        Lightbox.openModal($scope.photosmore, index);
        }
    };
    $scope.openLightboxModal1 = function(index) {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
            
        }
        if($rootScope.islogin == true){
            Lightbox.openModal($scope.mediaImages, index);
        }

       
    };

    $scope.photosmore = [];
    $scope.nophotos = false;
    $scope.loadphotos = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;
            
        }
        if($rootScope.islogin == true){
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

            portfolioservice.loadMedia.save((data), function(data) {
                for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                    data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                }

                angular.forEach(data.getProjectMediaByType, function(value, key) {
                    $scope.photosmore.push(value);


                });
                usSpinnerService.stop('spinner-1');
                if(data.getProjectMediaByType == false){
                   $scope.nophotos = true;

                }

            });

        }

    }
    };
    $scope.loadMorephotos = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });

        }
        if($rootScope.islogin == true){
        $scope.loading = true;
        var data = {

            user_id: $rootScope.login_user_id,
            project_id: $rootScope.project_id,
            media_type: "image",
            start_index: $scope.photosmore.length,
            limit: 8
        };

        portfolioservice.loadMedia.save((data), function(data) {
            for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
            }

            angular.forEach(data.getProjectMediaByType, function(value, key) {
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
    }

    };

    $scope.videosmore = [];
    $scope.novideos = false;
    $scope.loadvideos = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;
        }
        if($rootScope.islogin == true){
        $scope.disableLoadmorevideo = false;

        if ($scope.videosmore.length == 0) {
            usSpinnerService.spin('spinner-1');
            var data = {

                user_id: $rootScope.login_user_id,
                project_id: $rootScope.project_id,
                media_type: "video",
                start_index: $scope.videosmore.length,
                limit: 8
            };

            portfolioservice.loadMedia.save((data), function(data) {
                for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                    data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                }

                angular.forEach(data.getProjectMediaByType, function(value, key) {
                    $scope.videosmore.push(value);


                });
                usSpinnerService.stop('spinner-1');
                if(data.getProjectMediaByType == false){

                  $scope.novideos = true;
                }
            });

        }
    }

    };
    $scope.loadMorevideos = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
        }
        if($rootScope.islogin == true){
        $scope.loading = true;
        var data = {

            user_id: $rootScope.login_user_id,
            project_id: $rootScope.project_id,
            media_type: "video",
            start_index: $scope.videosmore.length,
            limit: 8
        };

        portfolioservice.loadMedia.save((data), function(data) {
            for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
            }

            angular.forEach(data.getProjectMediaByType, function(value, key) {
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
    }
    };

    $scope.audiosmore = [];
    $scope.noaudios = false;
    $scope.loadaudio = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;
        }
        if($rootScope.islogin == true){
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

            portfolioservice.loadMedia.save((data), function(data) {
                for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                    data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                }

                angular.forEach(data.getProjectMediaByType, function(value, key) {
                    $scope.audiosmore.push(value);


                });
                usSpinnerService.stop('spinner-1');
                if(data.getProjectMediaByType == false){

                  $scope.noaudios = true;
                }

            });

        }

    }
    };
    $scope.loadMoreaudios = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
        }
        if($rootScope.islogin == true){
        $scope.loading = true;
        var data = {

            user_id: $rootScope.login_user_id,
            project_id: $rootScope.project_id,
            media_type: "audio",
            start_index: $scope.audiosmore.length,
            limit: 8
        };

        portfolioservice.loadMedia.save((data), function(data) {
            for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
            }

            angular.forEach(data.getProjectMediaByType, function(value, key) {
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
    }

    };
    $scope.linksmore = [];
    $scope.urlsmore = [];
    $scope.urlsyoutubemore =[];
    $scope.normalurlmore = [];
    $scope.noembed = false;
    $scope.nolinks = false;
    $scope.loadlink = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;
        }
        if($rootScope.islogin == true){
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

            portfolioservice.loadMedia.save((data), function(data) {
                for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                    data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                }

                angular.forEach(data.getProjectMediaByType, function(value, key) {
                    $scope.linksmore.push(value);


                });
                usSpinnerService.stop('spinner-1');

                if(data.getProjectMediaByType == false){

                  $scope.noembed = true;
                }
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
                
                
                                });
                                
                                usSpinnerService.stop('spinner-1');
                                
                                for (var i = 0; i < $scope.urlsmore.length; i++) {
                                   
                                   // $scope.mediaurls[i].url = $sce.trustAsResourceUrl($scope.mediaurls[i].url);
                                        var url = $scope.urlsmore[i].CONTENT;
                                       // console.log(links);
                                        var ID = '';
                                        url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                                        
                                        if(url.length > 1){
                                        if (url[2] !== undefined) {
                                            ID = url[2].split(/[^0-9a-z_\-]/i);
                                          //  ID = ID[0];
                                          $scope.urlsmore[i].newurl = ID[0];
                                  
                                        } else {
                                            ID = url;
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

            

        }
    }

    };
     $scope.normalurlmore = [];
     $scope.andurlsmore = [];
    $scope.loadMorelinks = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
        }
        if($rootScope.islogin == true){
        $scope.loading = true;
        var data = {

            user_id: $rootScope.login_user_id,
            project_id: $rootScope.project_id,
            media_type: "embed",
            start_index: $scope.linksmore.length,
            limit: 8
        };

        portfolioservice.loadMedia.save((data), function(data) {
            for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
            }

            angular.forEach(data.getProjectMediaByType, function(value, key) {
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
                            $scope.andurlsmore.push(value);
                            $scope.urlsmore.push(value);
            
            
                        });
                       
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
                                    //ID = ID[0];
                                    $scope.andurlsmore[i].newurl = ID[0];
                                  
                          
                                } else {
                                    //ID = url;
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








    }
    };

    $scope.docsmore = [];
      $scope.nodocuments = false;
    $scope.loaddoc = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;
        }
        if($rootScope.islogin == true){
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

            portfolioservice.loadMedia.save((data), function(data) {
                for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                    data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
                }

                angular.forEach(data.getProjectMediaByType, function(value, key) {
                    $scope.docsmore.push(value);


                });
                usSpinnerService.stop('spinner-1');
                if(data.getProjectMediaByType == false){
                  $scope.nodocuments = true;
                }
            });

        }
    }

    };
    $scope.loadMoredocs = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
        }
        if($rootScope.islogin == true){
        $scope.loading = true;
        var data = {

            user_id: $rootScope.login_user_id,
            project_id: $rootScope.project_id,
            media_type: "application",
            start_index: $scope.docsmore.length,
            limit: 8
        };

        portfolioservice.loadMedia.save((data), function(data) {
            for (var i = 0; i < data.getProjectMediaByType.length; i++) {
                data.getProjectMediaByType[i].url = $sce.trustAsResourceUrl(data.getProjectMediaByType[i].url);
            }

            angular.forEach(data.getProjectMediaByType, function(value, key) {
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
    }
    };

    $scope.textmore = function(){
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
              $scope.active = 0;
        }


    };

    $scope.edittextcontent = false;
    $scope.edittext = function() {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
        }
        if($rootScope.islogin == true){
        $scope.edittextcontent = true;
        }

    };

    



    
    $scope.likepost = function(data) {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
        }
        if($rootScope.islogin == true){
     
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

            portfolioservice.LikeUnlike.save((data1), function(data) {


            });

        }

        

        if (data.YOU_LIKED_FLAG == 1) {

            $scope.like = false;

            data.TOTAL_LIKES--;
            $scope.likeclass = "UnlikeBlack";

            var data1 = {
                user_id: $rootScope.login_user_id,
                project_id: $rootScope.project_id,
                media_id: data.ID


            };

            portfolioservice.LikeUnlike.save((data1), function(data) {


            });

        }

        if ($scope.like == true) {

            data.YOU_LIKED_FLAG = 1;
        } else {

            data.YOU_LIKED_FLAG = 0;
        }


    }

    };



    $scope.likeproject = function(data) {
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
        }
        if($rootScope.islogin == true){
     
        $scope.like = undefined;

        if (data.YOU_LIKED == 0) {

            $scope.like = true;
            data.LIKES++;
            $scope.likeclass = "LikeRed";

            var data1 = {
                user_id: $rootScope.login_user_id,
                project_id: $rootScope.project_id,



            };

            portfolioservice.projectlike.save((data1), function(data) {


            });



        }

        if (data.YOU_LIKED == 1) {

            $scope.like = false;

            data.LIKES--;
            $scope.likeclass = "UnlikeBlack";

            var data1 = {
                user_id: $rootScope.login_user_id,
                project_id: $rootScope.project_id,



            };

            portfolioservice.projectlike.save((data1), function(data) {


            });

        }

        if ($scope.like == true) {
          
            data.YOU_LIKED = 1;
        }   if ($scope.like == false)  {
        
            data.YOU_LIKED = 0;
        }

    }


    };




   /* $scope.cratePortfolio = function() {
        $rootScope.project_id = undefined;
        $rootScope.newProject = true;
        //console.log($rootScope.baseurl);
        //window.location.href = $rootScope.baseUrl +""+"Project/new_project";

    };

    $scope.editportfolio = function(infoproject) {
        $rootScope.project_id = infoproject.ID;
          $rootScope.newProject = false;
        //window.location.href = $rootScope.baseUrl +""+"Project/edit_project";

    };

    $scope.viewproject = function(infoproject) {
        $rootScope.project_id = infoproject.ID;
        //window.location.href = $rootScope.baseUrl +""+"Project/project_new3";
        //window.location.href = "http://103.50.163.54/~stagingartistize/artistize-safari/Project/project_new3";
    };*/
   /* $scope.$watch('project_id', function() {
        localStorageService.set('project_id', $rootScope.project_id);
        // localStorageService.set('userid',$rootScope.userid);
    }, true);*/
    $scope.editportfolio = function (infoproject) {
        //  $rootScope.project_id = infoproject.ID;
          $rootScope.newProject = false;
  
          //window.location.href = $rootScope.baseUrl +""+"Project/edit_project";
  
      };
    $scope.$watch('newProject', function() {
        localStorageService.set('newProject', $rootScope.newProject);
        // localStorageService.set('userid',$rootScope.userid);
    }, true);

    
    
  
    $scope.addComment = function(){
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
        }
        if($rootScope.islogin == true){
      $scope.commentadding = true;
      $scope.commentsloading = true;
    var data1 =  {

        user_id:$rootScope.login_user_id,
        project_id:$rootScope.project_id,
        comment:$scope.projectcomment,
        project_user_id:$rootScope.user_id

      };

        portfolioservice.addcomment.save((data1), function(data) {
            //item.editmediacaption = false;
            $scope.projectcomment = "";
              $scope.commentsloading = false;
              $scope.commentadding = false;
              $scope.disablemorecomment = false;
            init();

        });
    }

    };


    $scope.deleteComment = function(data, index, exp){
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
        }
        if($rootScope.islogin == true){
            $scope.dummeyarry = exp;
    var data1 =

          {

          user_id:$rootScope.login_user_id,
          project_id:$rootScope.project_id,
          comment_id:data.ID

        };


        portfolioservice.deleteComment.save((data1), function(data) {
            //item.editmediacaption = false;
            $scope.projectcomment = "";
            $scope.dummeyarry.splice(index, 1);
            init();
           // $scope.loadMorecomments();
            //init();

        });

    }

    };


    $scope.projectshare = function(){
        var data ={
            project_id:$rootScope.project_id,
            share_with:1,
            cover_image:$scope.projectinfo[0].COVER_IMAGE,
            post_content:$scope.projectinfo[0].COMPLETE_TITLE

        };

       /* portfolioservice.shareproject.save((data), function(data) {
            //item.editmediacaption = false;
            
            //init();

        });*/

        $http({
            method: 'POST',
            url: $rootScope.baseUrl+''+'Ajax_Home/add_user_post',
            data: data,
          //  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response) {
            // success
            }, 
            function(response) { // optional
                    // failed
            });






    };
    $scope.disablemorecomment = false;
    $scope.loadMorecomments = function(){
        
        $scope.commentadding1 = true;
        $scope.commentsloading1 = true;
              var data1 =  {
          
                  user_id:$rootScope.login_user_id,
                  project_id:$rootScope.project_id,
                  start_index: $scope.exp.length,
                  limit:"5"
          
                };
          
                portfolioservice.getcomment.save((data1), function(data) {
                    
                   
                      angular.forEach( data.comments, function(value, key) {
                        $scope.exp.push(value);
                       
                          //console.log($scope.comments);
                         
                          
                          
                       
        
        
                    });
                    $scope.commentsloading1 = false;
                    $scope.commentadding1 = false;
                    if(data.comments == false){

                        $scope.disablemorecomment = true;
                        $scope.commentsloading1 = false;
                        $scope.commentadding1 = false;
                    }
                   
                   
                  });
        
        
        
    };


    $scope.closelogin = function(){
        $rootScope.modalInstance.close();

    };

    $scope.noDownloadDoc = function(){
        if($rootScope.islogin == false){
            $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'NewDesignSrc/login.php',
                scope: $scope, //passed current scope to the modal
                size: 'lg',
                windowClass: 'customPortfolioModalDialog',
                backdrop  : 'static',
                keyboard  : false,
                resolve: {
                  items: function () {
                    return $scope.videocontent;
                  }
                },
                persist: true
              });
        }



    };

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

      $scope.deleteproject = function (data) {
       
        sweetAlert.swal({
                title: "Are you sure you want to delete this Project?",
                //text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Delete",
                cancelButtonText: "Cancel",
                closeOnConfirm: true,
                closeOnCancel: true
            },
            function (isConfirm) {
                if (isConfirm) {

                    var data1 = {

                        user_id: $rootScope.user_id,
                        project_id: data.ID

                    }
                    portfolioservice.deleteproject.save((data1), function (data) {
                        //item.editmediacaption = false;
                        portfolioservice.saveAndExit.get({}, function (data) {
                            window.location.href = $rootScope.baseUrl + "" + data.redirect;
                            
                          });
                    
                       

                       
                            
                    });

                    sweetAlert.swal("Deleted!", "Project Deleted successfully", "success");
                    init();
                } else {
                    sweetAlert.swal("Cancelled");
                }
            });


    };
    

}]).filter('trustEmbed', function($sce) {
    return function(value) {
        return $sce.trustAsHtml(value);
    };
}).filter('myDateFormat', function myDateFormat($filter) {
    return function (text) {
      var tempdate = new Date(text.replace(/-/g, "/"));
      return $filter('date')(tempdate, "dd-MMM-yyyy");
    }
  });

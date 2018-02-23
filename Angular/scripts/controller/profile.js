'use strict';


angular.
module('material').
controller('profileCtrl', ['$scope', '$http', '$rootScope', '$base64', '$timeout', 'Upload',  'Lightbox', '$sce', '$uibModal', 'localStorageService', 'usSpinnerService', '$location', '$anchorScroll', 'sweetAlert','$filter','mediaService',function ($scope, $http, $rootScope, $base64, $timeout, Upload, Lightbox, $sce, $uibModal, localStorageService, usSpinnerService, $location, $anchorScroll, sweetAlert,$filter,mediaService) {
    $scope.cropper = {};
    $scope.cropper.sourceImage = null;
    $scope.cropper.croppedImage   = null;
    $scope.bounds = {};
    $scope.bounds.left = 0;
    $scope.bounds.right = 0;
    $scope.bounds.top = 0;
    $scope.bounds.bottom = 0;
$scope.profileimagemodel = function(){

   
        $rootScope.modalInstance = $uibModal.open({
            templateUrl: 'NewDesignSrc/profile-models/ProfilePicture-modal.html',
            controller: 'profileCtrl',
        });
};

$scope.profileCoverimagemodel = function(){

   
    $rootScope.modalInstance = $uibModal.open({
        templateUrl: 'NewDesignSrc/profile-models/ProfileCover-modal.html',
        controller: 'profileCtrl',
    });
};

$scope.closemodel = function(){
    $rootScope.modalInstance.close();

};

$scope.uploads = function (myCroppedImage1) {
     
    
    Upload.upload({
      url: '/uplod',
      data: {
        project_cover_image: Upload.dataUrltoBlob(myCroppedImage1),
        
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


  $scope.editprofile = function(){
   
    $rootScope.modalInstance = $uibModal.open({
      templateUrl: 'NewDesignSrc/profile-models/Profileheading-edit.html',
      controller: 'profileCtrl',
  });


  };


}]).directive('googleplace', [ function() {
  return {
      require: 'ngModel',
      scope: {
          ngModel: '=',
          details: '=?'
      },
      link: function(scope, element, attrs, model) {
          var options = {
              types: ['(cities)'],
              componentRestrictions: {}
          };

          scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

          google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
              var geoComponents = scope.gPlace.getPlace();
              var latitude = geoComponents.geometry.location.lat();
              var longitude = geoComponents.geometry.location.lng();
              var addressComponents = geoComponents.address_components;

              addressComponents = addressComponents.filter(function(component){
                  switch (component.types[0]) {
                      case "locality": // city
                          return true;
                      case "administrative_area_level_1": // state
                          return true;
                      case "country": // country
                          return true;
                      default:
                          return false;
                  }
              }).map(function(obj) {
                  return obj.long_name;
              });

              addressComponents.push(latitude, longitude);

              scope.$apply(function() {
                  scope.details = addressComponents; // array containing each location component
                  model.$setViewValue(element.val());
              });
          });
      }
  };
}]).directive('responsiveTabs', [ function() {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {

            element.responsiveTabs({
                startCollapsed: false
              });
        

        }

    }
}]);
'use strict';
angular.module('material').controller('projectviewCtrl', ['$scope', '$http', '$rootScope', '$base64', '$timeout', 'Upload', 'Loginauth', 'portfolioservice', 'Lightbox', '$sce', '$uibModal', 'localStorageService', 'usSpinnerService', 'sweetAlert', function($scope, $http, $rootScope, $base64, $timeout, Upload, Loginauth, portfolioservice, Lightbox, $sce, $uibModal, localStorageService, usSpinnerService, sweetAlert) {
    $rootScope.user_id = userid;
    $rootScope.login_user_id = login_user_id;
    $scope.noprojects = false;
    $scope.projectloaded = true;
    $scope.disableLoadmore = false;
    $scope.projectlist = [];

    function init() {
        var data = {
            start: $scope.projectlist.length,
            user_id: $rootScope.user_id,
            limit: 6
        };
        portfolioservice.getproject.save((data), function(data) {
            usSpinnerService.spin('spinner-1');
            $scope.projectCount = data.projects_count;
            if (data.projects != false) {
                $scope.projectlist.push(data.projects);
                if ($scope.projectlist.length == $scope.projectlist) {
                    $scope.disableLoadmore = true;
                }
            }
            $scope.projectloaded = false;
            if (data.projects == false && data.projects_count == false) {
                $scope.noprojects = true;
            }
            usSpinnerService.stop('spinner-1');
        });
    }
    init();
    $scope.loadMoreproject = function() {
        $scope.loadingprojects = true;
        var data = {
            start: $scope.projectlist[0].length,
            user_id: $rootScope.user_id,
            limit: 6
        };
        portfolioservice.getproject.save((data), function(data) {
            for (var i = 0; i < data.projects.length; i++) {
                $scope.projectlist[0].push(data.projects[i]);
            }
            if ($scope.projectlist[0].length == $scope.projectlist) {
                $scope.disableLoadmore = true;
            }
            if (data.projects == false) {
                $scope.projectloaded = false;
                $scope.disableLoadmore = true;
            }
            $scope.loadingprojects = false;
        });
        $rootScope.islogin =  data.isLoggedIn;
    };
    $scope.cratePortfolio = function() {
        $rootScope.project_id = undefined;
        $rootScope.newProject = true;
    };
    $scope.editportfolio = function(infoproject) {
        $rootScope.newProject = false;
    };
    $scope.viewproject = function(infoproject) {
        $rootScope.project_id = infoproject.ID;
    };
    $scope.$watch('project_id', function() {
        localStorageService.set('project_id', $rootScope.project_id);
    }, true);
    $scope.$watch('newProject', function() {
        localStorageService.set('newProject', $rootScope.newProject);
    }, true);
    $scope.deleteproject = function(data, index, projectlist) {
        $scope.dummeyarry = projectlist;
        sweetAlert.swal({
            title: "Are you sure you want to delete this Project?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: " delete it",
            cancelButtonText: " cancel",
            closeOnConfirm: true,
            closeOnCancel: true
        }, function(isConfirm) {
            if (isConfirm) {
                var data1 = {
                    user_id: $rootScope.user_id,
                    project_id: data.ID
                }
                portfolioservice.deleteproject.save((data1), function(data) {
                    $scope.dummeyarry.splice(index, 1);
                    $scope.loadMoreproject();
                });
                sweetAlert.swal("Deleted!", "Project Deleted successfully", "success");
                init();
            } else {
                sweetAlert.swal("Cancelled");
            }
        });
    };

    $scope.likepost = function(data) {
      
            console.log("inside like");
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


    

    };
}]).filter('trustEmbed', function($sce) {
    return function(value) {
        return $sce.trustAsHtml(value);
    };
});

'use strict';
angular.module('material').
factory('Loginauth', ['$resource','$rootScope', function($resource,$rootScope) {
       var baseurls = baseurl;

       return{
        validatelogin:$resource(baseurls+'Web_Services_Social_Login/social_login', {} ),
        login:$resource(baseurls+'Index/login', {} ),
        ForgetPassword:$resource(baseurls+'Index/forgot', {} ),
        signupUser:$resource(baseurls+'Index/Registration', {} ),
        industryGet:$resource(baseurls+'Index/get_industry', {},{isArray:false}),
        getCategorys:$resource(baseurls+'Index/get_category', {},{isArray:false}),
        resendRequest:$resource(baseurls+'Index/resendVerificationMail', {} ),
    };

}]).
factory('portfolioservice', ['$resource','$rootScope', function($resource,$rootScope) {
       var baseurls = baseurl;
       return{

        addcontent:$resource(baseurls+'Ajax_Project/project_text_content_add', {} ),
        getcontent:$resource(baseurls+'Project/project_view', {},{isArray:false} ),
        addiframe:$resource(baseurls+'Ajax_Project/project_embed_url_media_add', {} ),
        addtext:$resource(baseurls+'Ajax_Project/project_textwriteup_content_add', {} ),
        loadMedia:$resource(baseurls+'Project/get_project_media_by_type', {} ),
        removeMedia:$resource(baseurls+'Ajax_Project/project_content_delete_service', {} ),
        addmediacaption:$resource(baseurls+'Ajax_Project/project_content_caption_add', {} ),
        getproject:$resource(baseurls+'Project/see_all_projects', {}, ),
        deleteproject:$resource(baseurls+'Ajax_Project/project_delete_service', {}, ),
        LikeUnlike:$resource(baseurls+'Ajax_Project/add_project_media_like', {}, ),
        publishPortfolio:$resource(baseurls+'Ajax_Project/publish_project', {}, ),
        addcomment:$resource(baseurls+'Ajax_Project/add_project_comments', {}, ),
        getcomment:$resource(baseurls+'Ajax_Project/get_project_comment', {}, ),
        deleteComment:$resource(baseurls+'Ajax_Project/project_comment_delete', {}, ),
        projectlike:$resource(baseurls+'Ajax_Project/add_project_likes', {}, ),
        shareproject:$resource(baseurls+'Ajax_Project/project_share', {}, ),
    };

}])

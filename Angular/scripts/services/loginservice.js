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
        saveAndExit:$resource(baseurls+'Ajax_Project/save_exit', {}, ),
    };

}]).factory('mediaService', function($http, $q) {
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
     
      vimeo : {
        url : 'https://vimeo.com/api/oembed.json?url=http%3A//vimeo.com/%s%',
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
          $http({method: 'GET', url : apiUrl})
          .then(function(success,data, status, headers, config) {
              if(success.status == 200){
              hash.preview_thumb = getPropByString(success.data,apis[api].preview_thumb);
              hash.meta.title = getPropByString(success.data, apis[api].title);
              hash.meta.description = getPropByString(success.data,apis[api].description);
              //The rest from the api, if you want it.
              hash.meta.data = success.data;
              deferred.resolve(hash);
          }
            }),
             function(error,data, status, headers, config) {
              deferred.reject(error.data);
            };
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
  }).
  factory('profileService', ['$resource','$rootScope', function($resource,$rootScope) {
         var baseurls = 'http://staging.artistize.com/PROFILEV1/';
  
         return{
          getprofiledata:$resource(baseurls+'Profile/get_profile', {} ),
          login:$resource(baseurls+'Index/login', {} ),
          ForgetPassword:$resource(baseurls+'Index/forgot', {} ),
          signupUser:$resource(baseurls+'Index/Registration', {} ),
          industryGet:$resource(baseurls+'Index/get_industry', {},{isArray:false}),
          getCategorys:$resource(baseurls+'Index/get_category', {},{isArray:false}),
          resendRequest:$resource(baseurls+'Index/resendVerificationMail', {} ),
      };
  
  }])

<script type="text/javascript">
var userhandle = '<?php echo $this->uri->segment(2); ?>';

</script>
<section id="profileSection" class="profileSection" ng-controller="profileCtrl">
  <div class="container">
<!--     <div class="menuBarWrap col-xs-1" id="menuBarWrap">
      <ul class="menuBar">
        <li>Home</li>
        <li>Profile</li>
        <li>Network</li>
        <li>Portfolio</li>
        <li>Groups</li>
        <li>Jobs</li>
        <li>Services</li>
        <li>Agency</li>
        <li>Blogs</li>
        <li>Explore</li>
        <li>Auditions</li>
      </ul>
    </div> -->
    <div class="contentWrap" id="contentWrap">
      <div class="col-xs-12">
        <div class="profileCoverImgWrap">
          <img id="CoverImg" ng-src="" class="img-responsive"/>
          <button ng-click="profileCoverimagemodel()" class="coverImageButton imgChngBtn"><i class="atzIcon atzIcon-camera"></i><span>Upload Cover Photo</span></button>
          <div class="panelCover col-md-offset-3 col-md-9 col-xs-12">
            <ul>
              <li>Views 203</li>
              <li>Projects 357</li>
              <li>Services 406</li>
              <li>Friends 550</li>
              <li>Followers 121</li>
              <li>Jobs Offered 021</li>
              <li>Recommendations 25k</li>
            </ul>
          </div>
        </div>  
        <div class="profileDescription">
          <div class="col-xs-12 col-md-3">
            <div class="row">
              <div class="col-md-12 col-xs-7 col-sm-5 profileImgWrap" id="profileImgWrap">
                <div class="col-xs-12 profileImg padd-0">
                  <img ng-src="{{personalData.PROFILE_IMAGE}}" id="profileImg" alt="">
                  <button class="profilePicButton imgChngBtn" ng-click="profileimagemodel()"><i class="atzIcon atzIcon-camera"></i><span>Change Profile Picture</span></button>
                </div>
              </div>
              <div class="col-md-12 col-xs-9 col-sm-6 profileOptnWrap">
                <div class="profileOptns">
                  <div class="optn optn1">
                      <button>
                        <i class="atzIcon atzIcon-share"></i>
                        <p><span>Share</span><span>Profile</span></p>
                      </button>
                  </div>
                  <div class="optn optn2">
                      <button>
                        <i class="atzIcon atzIcon-bars"></i>
                        <!-- <i class="fa fa-bar-chart" aria-hidden="true"></i> -->
                        <p><span>Engagement</span><span>Statistics</span></p>
                      </button>
                  </div>
                  <div class="optn optn3">
                      <button ng-click="editprofile()">
                        <i class="atzIcon atzIcon-pencil"></i>
                        <!-- <i class="atzIcon atzIcon-mail"></i> -->
                        <p><span>Edit</span><span>Profile</span></p>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-9">
            <div class="row">           
              <div class="profileDescDetails col-xs-12 col-md-9">
                <h1>{{personalData.USER_NAME}}</h1> 
                <h2>{{personalData.PROFESSIONAL_HEADLINE}}</h2>
                <p class="industry">{{personalData.INDUSTRY_STR}}</p>
                <p class="location">{{personalData.LOCATION}}</p>
                <div class="downloadProfileNStrengthWrap col-xs-12">
                  <div class="progress btnProgress col-sm-5 col-xs-12">
                    <div class="progress-bar " style="min-width: 80%; width: 2%; position: relative;">
                      <span>Profile Strength 80%</span>
                    </div>
                  </div>
                  <!-- <div class="ProfileBtnWrap col-sm-6 col-xs-12">  
                    <button>Download Profile</button>
                  </div> -->
                </div>
                <!-- <button class="editProfileDesc" ng-click="editprofile()"><span>Edit</span><i class="fa fa-edit"></i></button> -->
              </div>
              <div class="profileOptions col-xs-12 col-md-3">
                <div class="ProfileBtnWrap col-xs-12 padd-0">  
                  <button class="col-xs-6 col-md-12 padd-0">Add Friend</button>
                  <button class="col-xs-6 col-md-12 padd-0">Block</button>
                  <button class="col-xs-6 col-md-12 padd-0">Follow</button>
                  <button class="col-xs-6 col-md-12 padd-0">Ignore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12 profileSummaryWrap">
        <div class="col-xs-12 profileSummary">
      
          <p>{{personalData.PROFILE_SUMMARY}}</p>
        </div>
      </div>

      <div class="profileDataWrap col-xs-12">  
        <div class="row"> 
          <div class="toggleWrap col-xs-12 col-sm-9"> 
            <uib-tabset active="active" class="toggleTabs">
              <uib-tab index="0" heading="Profile Overview">
                <div class="toggleTabWrap col-xs-12">
                  <div class="row profileData"> 
                    <!-- <ul class="dataTabs">
                      <li class="active one">All</li>
                      <li class="two">Portfolio</li>
                      <li class="three">Experience</li>
                      <li class="four">Personal</li>
                      <li class="five">Education</li>
                      <li class="six">Skill Board</li>
                      <li class="seven">Jobs Posted</li>
                      <li class="eight">Services Listed</li>
                      <li class="nine">Recommendations</li>
                    </ul> -->

                    <uib-tabset active="active" justified="true" class="dataTabs">
                      <uib-tab index="0" heading="All">Justified content</uib-tab>
                      <uib-tab index="1" heading="Portfolio">Short Labeled Justified content</uib-tab>
                      <uib-tab index="2" heading="Experience">Long Labeled Justified content</uib-tab>
                      <uib-tab index="3" heading="Personal">Long Labeled Justified content</uib-tab>
                      <uib-tab index="4" heading="Education">Long Labeled Justified content</uib-tab>
                      <uib-tab index="5" heading="Skill Board">Long Labeled Justified content</uib-tab>
                      <uib-tab index="6" heading="Jobs Posted">Long Labeled Justified content</uib-tab>
                      <uib-tab index="7" heading="Services Listed">Long Labeled Justified content</uib-tab>
                      <uib-tab index="8" heading="Recommendations">Long Labeled Justified content</uib-tab>
                    </uib-tabset>
                    
                  </div>
                </div>
              </uib-tab>
              <uib-tab index="1" heading="My Artscape">Short Labeled Justified content</uib-tab>
            </uib-tabset>
          </div>
        </div>
      </div>
    </div>


<div class="clearfix"></div>

<uib-tabset active="active" justified="true">
    <uib-tab index="0" heading="Justified">Justified content</uib-tab>
    <uib-tab index="1" heading="SJ">Short Labeled Justified content</uib-tab>
    <uib-tab index="2" heading="Long Justified">Long Labeled Justified content</uib-tab>
  </uib-tabset>
 <!-- <link rel='stylesheet prefetch' href='http://cdn.jsdelivr.net/jquery.responsive-tabs/1.5.1/responsive-tabs.css'>



   <style>
     /* Tabs container */
.r-tabs {
  position: relative;

  background-color: #00c5ad;

  border-top: 1px solid #00c5ad;
  border-right: 1px solid #00c5ad;
  border-left: 1px solid #00c5ad;
  border-bottom: 4px solid #00c5ad;
  border-radius: 4px;

}

/* Tab element */
.r-tabs .r-tabs-nav .r-tabs-tab {
  position: relative;
  background-color: #00c5ad;
}

/* Tab anchor */
.r-tabs .r-tabs-nav .r-tabs-anchor {
  display: inline-block;
  padding: 10px 12px;

  text-decoration: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.4);
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}

/* Disabled tab */
.r-tabs .r-tabs-nav .r-tabs-state-disabled {
  opacity: 0.5;
}

/* Active state tab anchor */
.r-tabs .r-tabs-nav .r-tabs-state-active .r-tabs-anchor {
  color: #00c5ad;
  text-shadow: none;

  background-color: white;

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

/* Tab panel */
.r-tabs .r-tabs-panel {
  background-color: white;

  border-bottom: 4px solid white;

  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

}

/* Accordion anchor */
.r-tabs .r-tabs-accordion-title .r-tabs-anchor {
  display: block;
  padding: 10px;

  background-color: #00c5ad;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.4);
  font-size: 14px;

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

/* Active accordion anchor */
.r-tabs .r-tabs-accordion-title.r-tabs-state-active .r-tabs-anchor {
  background-color: #fff;
  color: #00c5ad;
  text-shadow: none;
}

/* Disabled accordion button */
.r-tabs .r-tabs-accordion-title.r-tabs-state-disabled {
  opacity: 0.5;
}

/* Buttons */
button {
  display:inline-block;
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px 20px;
  line-height: 100%;

  color: #fff;
  font-size: 14px;
  text-align: center;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  vertical-align: middle;
  font-weight: bold;
  
  border: 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #00c5ad;
  box-shadow: 0px 3px 0px 0px #00ab94;
  
  cursor: pointer;
}

/* Info bar */
.info {
  display:inline-block;
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px 20px;
  width: 300px;
  line-height: 100%;

  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 14px;
  color: #00c5ad;
  border: 2px solid #00ab94;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #fff;

  cursor: pointer;
} 
   </style> 





<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <div id="responsiveTabs" responsive-tabs>
        <ul>
          <li><a href="#tab-1"> Tab 1 </a></li>
          <li><a href="#tab-2"> Tab 2 </a></li>
          <li><a href="#tab-3"> Tab3 </a></li>
        </ul>

        <div id="tab-1"> Content tab 1 </div>
        <div id="tab-2"> Content tab 2 </div>
        <div id="tab-3"> Content tab 3 </div>
      </div>
    </div>
  </div>
</div>


   
</section> -->

<!-- $( document ).ready(function() {
        
        var width_old = $('#profile-pic-wrapper4101')[0].getBoundingClientRect().width;
        var width = Math.floor(width_old)-30;
        //alert(width);
        var portfolio_pic = $('#portfolio-pic4101');
        portfolio_pic.css('min-width',width).css('min-height',width).css('width',width).css('height',width);
        $(window).resize(function(){
            portfolio_pic.css('min-width',width).css('min-height',width).css('width',width).css('height',width);
        });     
    }); -->  
<script src="js/jquery-2.1.3.js"></script>
<script type="text/javascript">

    function makeDOMChange() {
      window_width = $(window).width();
      window_height= $(window).height();
      // $("#menuBarWrap").css('height',window_height);
      // sidebarWidth = $("#menuBarWrap")[0].getBoundingClientRect().width;
      // $("#contentWrap").css('width',(window_width-sidebarWidth));
      profileImgHt = $("#profileImgWrap")[0].getBoundingClientRect().height;
      console.log(profileImgHt);
      if (window_width > 993) {
        $("#profileImgWrap").css('margin-top',(-(0.65*profileImgHt)));
      }
      else {
        $("#profileImgWrap").css('margin-top',(-(0.15*profileImgHt)));
      }
    }

    $(document).ready(function(){
      makeDOMChange();
    });

    $(window).resize(function(){
      makeDOMChange();
    });



</script>
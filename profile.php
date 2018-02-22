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
          <img id="CoverImg" src="upload/10/user_cover/1444824077_CoverImage.jpg" class="img-responsive"/>
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
                  <img src="NewDesignSrc/img/male.jpg" id="profileImg" alt="">
                  <button class="profilePicButton imgChngBtn" ng-click="profileimagemodel()"><i class="atzIcon atzIcon-camera"></i><span>Change Profile Picture</span></button>
                </div>
              </div>
              <div class="col-md-12 col-xs-9 col-sm-6 profileOptnWrap">
                <div class="profileOptns">
                  <div class="optn optn1">
                      <i class="atzIcon atzIcon-share"></i>
                      <p><span>Share</span><span>Profile</span></p>
                  </div>
                  <div class="optn optn2">
                      <!-- <i class="atzIcon tatistics"></i> -->
                      <i class="fa fa-bar-chart" aria-hidden="true"></i>
                      <p><span>Engagement</span><span>Statistics</span></p>
                  </div>
                  <div class="optn optn3">
                      <i class="atzIcon atzIcon-mail"></i>
                      <p><span>Contact</span><span>Me</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-9">
            <div class="row">           
              <div class="profileDescDetails col-xs-12 col-md-9">
                <h1>Name of the User</h1> 
                <h2>International BHARATANATYAM Dancer Performer & Choreographer</h2>
                <p class="industry">Dancer</p>
                <p class="location">New Delhi, India</p>
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
                <button class="editProfileDesc" ng-click="editprofile()"><span>Edit</span><i class="fa fa-edit"></i></button>
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
      
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
      </div>

      <div class="profileDataWrap col-xs-12">  
        <div class="row"> 
          <div class="toggleWrap col-xs-12 col-sm-9"> 
            <uib-tabset active="active">
              <uib-tab index="0" heading="Profile Overview">
                <div class="toggleTabWrap col-xs-12">
                  <div class="row profileData"> 
                    <ul class="dataTabs">
                      <li class="active">All</li>
                      <li>Portfolio</li>
                      <li>Experience</li>
                      <li>Personal</li>
                      <li>Education</li>
                      <li>Skill Board</li>
                      <li>Jobs Posted</li>
                      <li>Services Listed</li>
                      <li>Recommendations</li>
                    </ul>
                  </div>
                </div>
              </uib-tab>
              <uib-tab index="1" heading="My Artscape">Short Labeled Justified content</uib-tab>
            </uib-tabset>
          </div>
        </div>
      </div>
    </div>
   


</section>

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
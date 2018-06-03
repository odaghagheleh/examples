INSERT INTO pagemodels (code, descr, frames, plugincode, templategui) VALUES ('service', 'Service Page', '<?xml version="1.0" encoding="UTF-8"?>
<frames>
	<frame pos="0">
		<descr>Sample Frame</descr>
		<sketch x1="0" y1="0" x2="11" y2="0" />
	</frame>
</frames>

', NULL, '<#assign wp=JspTaglibs["/aps-core"]>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<title><@wp.currentPage param="title" /></title>
</head>
<body>
<h1><@wp.currentPage param="title" /></h1>
<a href="<@wp.url page="homepage" />" >Home</a><br>
<div><@wp.show frame=0 /></div>
</body>
</html>');
INSERT INTO pagemodels (code, descr, frames, plugincode, templategui) VALUES ('home', 'Home Page', NULL, NULL, NULL);
INSERT INTO pagemodels (code, descr, frames, plugincode, templategui) VALUES ('entando-page-purple', 'Purple - BPM', '<?xml version="1.0" encoding="UTF-8"?>
<frames>
	<frame pos="0">
		<descr>Top bar 1</descr>
		<sketch x1="0" y1="0" x2="2" y2="0" />
	</frame>
	<frame pos="1">
		<descr>Top Bar 2</descr>
		<sketch x1="3" y1="0" x2="5" y2="0" />
	</frame>
	<frame pos="2">
		<descr>Top Bar 3</descr>
		<sketch x1="6" y1="0" x2="8" y2="0" />
	</frame>
	<frame pos="3">
		<descr>Top Bar 4</descr>
		<sketch x1="9" y1="0" x2="11" y2="0" />
	</frame>
	<frame pos="4">
		<descr>Central Bar 1</descr>
		<sketch x1="0" y1="1" x2="11" y2="1" />
	</frame>
	<frame pos="5">
		<descr>Central Bar mortgage 2</descr>
		<sketch x1="2" y1="2" x2="9" y2="2" />
	</frame>
	<frame pos="6">
		<descr>Central Bar left</descr>
		<sketch x1="2" y1="3" x2="4" y2="3" />
	</frame>
	<frame pos="7">
		<descr>Central Bar Center</descr>
		<sketch x1="5" y1="3" x2="7" y2="3" />
	</frame>
	<frame pos="8">
		<descr>Central Bar right</descr>
		<sketch x1="8" y1="3" x2="9" y2="3" />
	</frame>
	<frame pos="9">
		<descr>Banner Advisor</descr>
		<sketch x1="0" y1="4" x2="11" y2="4" />
	</frame>
	<frame pos="10">
		<descr>Full</descr>
		<sketch x1="0" y1="5" x2="11" y2="5" />
	</frame>
	<frame pos="11">
		<descr>Footer Left</descr>
		<sketch x1="0" y1="6" x2="5" y2="6" />
	</frame>
	<frame pos="12">
		<descr>Footer right</descr>
		<sketch x1="6" y1="6" x2="11" y2="6" />
	</frame>
	<frame pos="13">
		<descr>Footer 2 Left</descr>
		<sketch x1="0" y1="7" x2="5" y2="7" />
	</frame>
	<frame pos="14">
		<descr>Footer 2 right</descr>
		<sketch x1="6" y1="7" x2="11" y2="7" />
	</frame>
</frames>

', NULL, '<#assign wp=JspTaglibs["/aps-core"]>
<#assign c=JspTaglibs["http://java.sun.com/jsp/jstl/core"]>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>
            <@wp.currentPage param="title" /> - <@wp.i18n key="PORTAL_TITLE" />
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="icon" href="<@wp.info key="systemParam" paramName="applicationBaseURL" />
              favicon.png" type="image/png" />
              <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
              <!--[if lt IE 9]>
              <script src="<@wp.resourceURL />static/js/entando-misc-html5-essentials/html5shiv.js"></script>
              <![endif]-->
              <@c.import url="/WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp" />
              <@c.import url="/WEB-INF/aps/jsp/models/inc/header-inclusions_light.jsp" />
              
              <style>
              .editableform .control-group {
               margin-bottom: 0;
                white-space: nowrap;
               line-height: 28px;
               }
              </style>
    </head>
     <body class="purple" data-spy="scroll" data-target="#navbar-menu">
        <!-- Navbar -->
        <div class="navbar navbar-custom navbar-fixed-top sticky" role="navigation" id="sticky-nav">
            <div class="container">
                <!-- Navbar-header -->
                <div class="navbar-header">
                    <!-- Responsive menu button -->
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- LOGO -->
                    <a class="navbar-brand logo" href="#">
                        <img alt="acme-logo"  class="logo-img" src="<@wp.imgURL />Logo_Acme_Bank.png">
                    </a>
                </div>
                <!-- end navbar-header -->
                <!-- menu -->
                <div class="navbar-collapse collapse" id="navbar-menu">
                    <!--Navbar left-->
                    <ul class="nav navbar-nav nav-custom-left">
                        <!--frame 0 1-->
                        <@wp.show frame=0 />
                        <@wp.show frame=1 />
                    </ul>
                    <!-- Navbar right -->
                    <ul class="nav navbar-nav navbar-right">
                        <!--frame 2 3-->
                        <@wp.show frame=2 />
                        <@wp.show frame=3 />
                    </ul>
                </div>
                <!--/Menu -->
            </div>
            <!-- end container -->
        </div>
        <!-- End navbar-custom -->

        <!-- HOME -->
        <section>
               <!--frame 4-->
                 <@wp.show frame=4 />
               <!--frame 4-->
        </section>
        <!-- END HOME -->

        <!-- Features Alt -->
        <section class="section" id="mortgage">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <!--frame 5-->
                        <@wp.show frame=5 />
                        <!--frame 5-->
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="col-sm-4">
                        <!--frame 6-->
                        <@wp.show frame=6 />
                        <!--frame 5-->
                    </div>
                    <div class="col-sm-4">
                        <!--frame 7 frame bpm -->
                        <@wp.show frame=7 />
                        <!--frame 7-->
                    </div>
                     <div class="col-sm-4">
                        <!--frame 8 frame bpm -->
                        <@wp.show frame=8 />
                        <!--frame 8-->
                    </div>
            </div>
        </section>

        <section>
            <!--frame 9-->
            <@wp.show frame=9 />
            <!--frame 9-->
        </section>
        <section class="">
                <!--frame 10-->
                <@wp.show frame=10 />
                <!--frame 10-->
        </section>

        <section class="">
            <div class="container">
                <div class="col-md-12">
                    <div class="text-center">
                        <!--frame 11-->
                        <@wp.show frame=11 />
                    </div>
                    <!--frame 11-->
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class=" ">
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-12">
                        <!--frame 12-->
                        <@wp.show frame=12 />
                        <!--frame 12-->
                    </div>
                </div> <!-- end row -->

                <div class="row">
                    <div class="col-sm-6">
                        <!--frame 13-->
                        <@wp.show frame=13 />
                        <!--frame 13-->
                    </div>
                    <div class="col-sm-6">
                        <!--frame 14-->
                        <@wp.show frame=14 />
                        <!--frame 14-->
                    </div>
                </div>
            </div>
        </footer>
        <!-- END FOOTER -->

        <script src="<@wp.resourceURL />static/js/jquery.ajaxchimp.js"></script>
        <script src="<@wp.resourceURL />static/js/jquery.sticky.js"></script>
        <script src="<@wp.resourceURL />static/js/jquery.app.js"></script>
    </body>
</html>');
INSERT INTO pagemodels (code, descr, frames, plugincode, templategui) VALUES ('entando-page-light', 'Light - BPM', '<?xml version="1.0" encoding="UTF-8"?>
<frames>
	<frame pos="0">
		<descr>Top bar 1</descr>
		<sketch x1="0" y1="0" x2="2" y2="0" />
	</frame>
	<frame pos="1">
		<descr>Top Bar 2</descr>
		<sketch x1="3" y1="0" x2="5" y2="0" />
	</frame>
	<frame pos="2">
		<descr>Top Bar 3</descr>
		<sketch x1="6" y1="0" x2="8" y2="0" />
	</frame>
	<frame pos="3">
		<descr>Top Bar 4</descr>
		<sketch x1="9" y1="0" x2="11" y2="0" />
	</frame>
	<frame pos="4">
		<descr>Central Bar 1</descr>
		<sketch x1="0" y1="1" x2="11" y2="1" />
	</frame>
	<frame pos="5">
		<descr>Central Bar mortgage 2</descr>
		<sketch x1="2" y1="2" x2="9" y2="2" />
	</frame>
	<frame pos="6">
		<descr>Central Bar left</descr>
		<sketch x1="2" y1="3" x2="5" y2="3" />
	</frame>
	<frame pos="7">
		<descr>Central Bar right</descr>
		<sketch x1="6" y1="3" x2="9" y2="3" />
	</frame>
	<frame pos="8">
		<descr>Banner Advisor</descr>
		<sketch x1="2" y1="4" x2="9" y2="4" />
	</frame>
	<frame pos="9">
		<descr>Full</descr>
		<sketch x1="2" y1="5" x2="9" y2="5" />
	</frame>
	<frame pos="10">
		<descr>Footer 2 Left</descr>
		<sketch x1="0" y1="6" x2="11" y2="6" />
	</frame>
	<frame pos="11">
		<descr>Footer Left</descr>
		<sketch x1="0" y1="7" x2="5" y2="7" />
	</frame>
	<frame pos="12">
		<descr>Footer right</descr>
		<sketch x1="6" y1="7" x2="11" y2="7" />
	</frame>
</frames>

', NULL, '<#assign wp=JspTaglibs["/aps-core"]>
<#assign c=JspTaglibs["http://java.sun.com/jsp/jstl/core"]>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>
            <@wp.currentPage param="title" /> - <@wp.i18n key="PORTAL_TITLE" />
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="icon" href="<@wp.info key="systemParam" paramName="applicationBaseURL" />
              favicon.png" type="image/png" />
              <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
              <!--[if lt IE 9]>
              <script src="<@wp.resourceURL />static/js/entando-misc-html5-essentials/html5shiv.js"></script>
              <![endif]-->
              <@c.import url="/WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp" />
              <@c.import url="/WEB-INF/aps/jsp/models/inc/header-inclusions_light.jsp" />
    </head>
    <body data-spy="scroll" data-target="#navbar-menu">

        <!-- Navbar -->
        <div class="navbar navbar-custom light navbar-fixed-top sticky" role="navigation" id="sticky-nav">
            <div class="container">

                <!-- Navbar-header -->
                <div class="navbar-header">

                    <!-- Responsive menu button -->
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- LOGO -->
                    <a class="navbar-brand logo" href="#">
                        <img alt="acme-logo"  class="logo-img" src="<@wp.imgURL />Logo_Acme_Bank.png">
                    </a>

                </div>
                <!-- end navbar-header -->

                <!-- menu -->
                <div class="navbar-collapse collapse" id="navbar-menu">

                    <!--Navbar left-->
                    <ul class="nav navbar-nav nav-custom-left">
                        <!--frame 0 1-->
                        <@wp.show frame=0 />
                        <@wp.show frame=1 />
                    </ul>

                    <!-- Navbar right -->
                    <ul class="nav navbar-nav navbar-right">
                        <!--frame 2 3-->
                        <@wp.show frame=2 />
                        <@wp.show frame=3 />
                    </ul>
                </div>
                <!--/Menu -->
            </div>
            <!-- end container -->
        </div>
        <!-- End navbar-custom -->

        <!-- HOME -->
        <section class="bg-custom home" id="home">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <!--frame 4-->
                        <@wp.show frame=4 />
                        <!--frame 4-->
                    </div>
                </div>
            </div>
        </section>
        <!-- END HOME -->

        <!-- Features Alt -->
        <section class="section" id="mortgage">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <!--frame 5-->
                        <@wp.show frame=5 />
                        <!--frame 5-->
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <!--frame 6-->
                        <@wp.show frame=6 />
                        <!--frame 5-->
                    </div>
                    <div class="col-sm-6">
                        <!--frame 7 frame bpm -->
                        <@wp.show frame=7 />
                        <!--frame 7-->
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <!--frame 8-->
            <@wp.show frame=8/>
            <!--frame 8-->
        </section>
        <section class="section">
            <!--frame 9-->
            <@wp.show frame=9 />
            <!--frame 9-->
        </section>
        <section class="section">
            <!--frame 10-->
            <@wp.show frame=10 />
            <!--frame 10-->
        </section>

        <!-- FOOTER -->
        <footer class="section ">
            <div class="row">
                <div class="col-md-6">
                    <!--frame 11-->
                    <@wp.show frame=11 />
                    <!--frame 11-->
                </div>
                <div class="col-md-6">
                    <!--frame 12-->
                    <@wp.show frame=12 />
                    <!--frame 12-->
                </div>
            </div>
        </footer>
        <!-- END FOOTER -->

        <script src="<@wp.resourceURL />static/js/jquery.ajaxchimp.js"></script>
        <script src="<@wp.resourceURL />static/js/jquery.sticky.js"></script>
        <script src="<@wp.resourceURL />static/js/jquery.app.js"></script>
    </body>
</html>');
INSERT INTO pagemodels (code, descr, frames, plugincode, templategui) VALUES ('entando-page-inspinia', 'Inspinia - BPM', '<?xml version="1.0" encoding="UTF-8"?>
<frames>
	<frame pos="0">
		<descr>Sidebar 1</descr>
		<sketch x1="0" y1="0" x2="1" y2="0" />
	</frame>
	<frame pos="1">
		<descr>Top Bar 1</descr>
		<sketch x1="2" y1="0" x2="4" y2="0" />
	</frame>
	<frame pos="2">
		<descr>Top Bar 2</descr>
		<sketch x1="5" y1="0" x2="7" y2="0" />
	</frame>
	<frame pos="3">
		<descr>Top Bar 3</descr>
		<sketch x1="8" y1="0" x2="9" y2="0" />
	</frame>
	<frame pos="4">
		<descr>Top Bar 4</descr>
		<sketch x1="10" y1="0" x2="11" y2="0" />
	</frame>
	<frame pos="5">
		<descr>Left</descr>
		<sketch x1="2" y1="1" x2="4" y2="1" />
	</frame>
	<frame pos="6">
		<descr>Center</descr>
		<sketch x1="5" y1="1" x2="7" y2="1" />
	</frame>
	<frame pos="7">
		<descr>Right</descr>
		<sketch x1="8" y1="1" x2="11" y2="1" />
	</frame>
	<frame pos="8">
		<descr>Sidebar 2</descr>
		<sketch x1="0" y1="1" x2="1" y2="1" />
	</frame>
	<frame pos="9">
		<descr>Full 1</descr>
		<sketch x1="2" y1="2" x2="11" y2="2" />
	</frame>
	<frame pos="10">
		<descr>Sidebar 3</descr>
		<sketch x1="0" y1="2" x2="1" y2="2" />
	</frame>
	<frame pos="11" main="true">
		<descr>full 2</descr>
		<sketch x1="2" y1="3" x2="11" y2="3" />
	</frame>
	<frame pos="12">
		<descr>Sidebar 4</descr>
		<sketch x1="0" y1="3" x2="1" y2="3" />
	</frame>
	<frame pos="13">
		<descr>Content left</descr>
		<sketch x1="2" y1="4" x2="6" y2="4" />
	</frame>
	<frame pos="14">
		<descr>Content right</descr>
		<sketch x1="7" y1="4" x2="11" y2="4" />
	</frame>
	<frame pos="15">
		<descr>Sidebar 5</descr>
		<sketch x1="0" y1="4" x2="1" y2="4" />
	</frame>
	<frame pos="16">
		<descr>Full 3</descr>
		<sketch x1="2" y1="5" x2="11" y2="5" />
	</frame>
	<frame pos="17">
		<descr>Sidebar 5</descr>
		<sketch x1="0" y1="5" x2="1" y2="5" />
	</frame>
	<frame pos="18">
		<descr>Left</descr>
		<sketch x1="0" y1="6" x2="3" y2="6" />
	</frame>
	<frame pos="19">
		<descr>Center</descr>
		<sketch x1="4" y1="6" x2="7" y2="6" />
	</frame>
	<frame pos="20">
		<descr>Right</descr>
		<sketch x1="8" y1="6" x2="11" y2="6" />
	</frame>
	<frame pos="21">
		<descr>Left</descr>
		<sketch x1="0" y1="7" x2="3" y2="7" />
	</frame>
	<frame pos="22">
		<descr>Center</descr>
		<sketch x1="4" y1="7" x2="7" y2="7" />
	</frame>
	<frame pos="23">
		<descr>Right</descr>
		<sketch x1="8" y1="7" x2="11" y2="7" />
	</frame>
	<frame pos="24">
		<descr>Footer</descr>
		<sketch x1="0" y1="8" x2="11" y2="8" />
	</frame>
</frames>

', NULL, '<#assign wp=JspTaglibs["/aps-core"]>
<#assign c=JspTaglibs["http://java.sun.com/jsp/jstl/core"]>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>
            <@wp.currentPage param="title" /> - <@wp.i18n key="PORTAL_TITLE" />
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="icon" href="<@wp.info key="systemParam" paramName="applicationBaseURL" />
              favicon.png" type="image/png" />
              <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
              <!--[if lt IE 9]>
              <script src="<@wp.resourceURL />static/js/entando-misc-html5-essentials/html5shiv.js"></script>
              <![endif]-->
              <@c.import url="/WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp" />
              <@c.import url="/WEB-INF/aps/jsp/models/inc/header-inclusions.jsp" />
    </head>
    <body class="pace-done">
        <div class="pace  pace-inactive">
            <div class="pace-progress" data-progress-text="100%" data-progress="99" style="transform: translate3d(100%, 0px, 0px);">
                <div class="pace-progress-inner"></div>
            </div>
            <div class="pace-activity"></div>
        </div>
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <li class="nav-header">
                            <div class="dropdown profile-element">
                                <#if (accountExpired?? && accountExpired == true) || (wrongAccountCredential?? && wrongAccountCredential == true)>open</#if>
                                <#if (Session.currentUser != "guest")>
                                <span>
                                    <img alt="image" class="" src="<@wp.imgURL />entando-logo.png">
                                </span>
                                <#else>
                                <span>
                                    <img alt="image" class="" src="<@wp.imgURL />entando-logo-1.png">
                                </span>
                                </#if>
                                <br>
                                <@wp.show frame=0 />
                            </div>
                            <div class="logo-element">
                                E
                            </div>
                        </li>
                        <@wp.show frame=8 />
                        <@wp.show frame=10 />
                        <@wp.show frame=12 />
                        <@wp.show frame=15 />
                        <@wp.show frame=17 />
                    </ul>
                </div>
            </nav>
            <div id="page-wrapper" class="gray-bg dashbard-1">
                <div class="row border-bottom">
                    <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
                        <div class="navbar-header">
                            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#">
                                <i class="fa fa-bars"></i>
                            </a>
                        </div>
                        <ul class="nav navbar-top-links navbar-right">
                            <li class="dropdown">
                                <@wp.show frame=1 />
                                <@wp.show frame=2 />
                                <@wp.show frame=3 />
                                <@wp.show frame=4 />
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="row" >
                    <div class="col-md-4">
                        <div class="white-bg">
                            <@wp.show frame=5 />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="white-bg">
                            <@wp.show frame=6 />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="white-bg">
                            <@wp.show frame=7 />
                        </div>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-md-12">
                        <@wp.show frame=9 />
                    </div>
                </div>
                <div class="row" >
                    <div class="col-md-12">
                        <@wp.show frame=11 />
                    </div>
                </div>
                <div class="m-t-md">
                    <div class="col-md-6">
                        <div class="white-bg">
                            <@wp.show frame=13 />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="white-bg">
                            <@wp.show frame=14 />
                        </div>
                    </div>
                </div>
                <div class="col-md-12" >
                    <@wp.show frame=16 />
                </div>
                <div class="row">
                    <div class="wrapper wrapper-content">
                        <div class="row">
                            <div class="col-lg-4">
                                <@wp.show frame=18 />
                            </div>
                            <div class="col-lg-4">
                                <@wp.show  frame=19/>
                            </div>
                            <div class="col-lg-4">
                                <@wp.show  frame=20 />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <@wp.show frame=21 />
                            </div>
                            <div class="col-lg-4">
                                <@wp.show  frame=22/>
                            </div>
                            <div class="col-lg-4">
                                <@wp.show  frame=23 />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="footer">
                        <@wp.show frame=24 />
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>');

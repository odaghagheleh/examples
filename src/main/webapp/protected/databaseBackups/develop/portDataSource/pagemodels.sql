INSERT INTO pagemodels (code,descr,frames,plugincode,templategui) VALUES ('service','Service Page','<frames>
	<frame pos="0">
		<descr>Sample Frame</descr>
	</frame>
</frames>',NULL,'<#assign wp=JspTaglibs["/aps-core"]>
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
INSERT INTO pagemodels (code,descr,frames,plugincode,templategui) VALUES ('home','Home Page',NULL,NULL,NULL);
INSERT INTO pagemodels (code,descr,frames,plugincode,templategui) VALUES ('inspinia','inspinia','<?xml version="1.0" encoding="UTF-8"?>
<frames>
	<frame pos="0">
		<descr>main</descr>
		<sketch x1="0" y1="0" x2="11" y2="11" />
	</frame>
</frames>

',NULL,'<#assign wp=JspTaglibs["/aps-core"]>
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
              <!--[if lt IE 9]><#assign wp=JspTaglibs["/aps-core"]>
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
              <@c.import url="/WEB-INF/aps/jsp/models/inc/flash_toast.jsp" />
    </head>
    <body class="pace-done">
    <div class="pace  pace-inactive"><div class="pace-progress" data-progress-text="100%" data-progress="99" style="transform: translate3d(100%, 0px, 0px);">
            <div class="pace-progress-inner"></div>
        </div>
        <div class="pace-activity"></div></div>

                <@wp.show  frame=0 />

</body>
</html>');
INSERT INTO pagemodels (code,descr,frames,plugincode,templategui) VALUES ('inspinia-default','inspinia-default','<?xml version="1.0" encoding="UTF-8"?>
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
		<descr>Header</descr>
		<sketch x1="2" y1="1" x2="11" y2="1" />
	</frame>
	<frame pos="6">
		<descr>Sidebar 2</descr>
		<sketch x1="0" y1="1" x2="1" y2="1" />
	</frame>
	<frame pos="7">
		<descr>Content Left 1</descr>
		<sketch x1="2" y1="2" x2="4" y2="2" />
	</frame>
	<frame pos="8">
		<descr>Content Central 1</descr>
		<sketch x1="5" y1="2" x2="8" y2="2" />
	</frame>
	<frame pos="9">
		<descr>Content Right 1</descr>
		<sketch x1="9" y1="2" x2="11" y2="2" />
	</frame>
	<frame pos="10">
		<descr>Sidebar 3</descr>
		<sketch x1="0" y1="2" x2="1" y2="2" />
	</frame>
	<frame pos="11">
		<descr>Content Left 2</descr>
		<sketch x1="2" y1="3" x2="4" y2="3" />
	</frame>
	<frame pos="12">
		<descr>Content Central 2</descr>
		<sketch x1="5" y1="3" x2="8" y2="3" />
	</frame>
	<frame pos="13">
		<descr>Content Right 2</descr>
		<sketch x1="9" y1="3" x2="11" y2="3" />
	</frame>
	<frame pos="14">
		<descr>Sidebar 4</descr>
		<sketch x1="0" y1="3" x2="1" y2="3" />
	</frame>
	<frame pos="15" main="true">
		<descr>Content Full 1</descr>
		<sketch x1="2" y1="4" x2="11" y2="4" />
	</frame>
	<frame pos="16">
		<descr>Sidebar 5</descr>
		<sketch x1="0" y1="4" x2="1" y2="4" />
	</frame>
	<frame pos="17">
		<descr>Content Full 2</descr>
		<sketch x1="2" y1="5" x2="11" y2="5" />
	</frame>
	<frame pos="18">
		<descr>Sidebar 6</descr>
		<sketch x1="0" y1="5" x2="1" y2="5" />
	</frame>
	<frame pos="19">
		<descr>Content Left 3</descr>
		<sketch x1="2" y1="6" x2="4" y2="6" />
	</frame>
	<frame pos="20">
		<descr>Content Central 3</descr>
		<sketch x1="5" y1="6" x2="8" y2="6" />
	</frame>
	<frame pos="21">
		<descr>Content Right 3</descr>
		<sketch x1="9" y1="6" x2="11" y2="6" />
	</frame>
	<frame pos="22">
		<descr>Content Left 4</descr>
		<sketch x1="2" y1="7" x2="4" y2="7" />
	</frame>
	<frame pos="23">
		<descr>Content Central 4</descr>
		<sketch x1="5" y1="7" x2="8" y2="7" />
	</frame>
	<frame pos="24">
		<descr>Content Right 4</descr>
		<sketch x1="9" y1="7" x2="11" y2="7" />
	</frame>
	<frame pos="25">
		<descr>Footer</descr>
		<sketch x1="2" y1="8" x2="11" y2="8" />
	</frame>
</frames>

',NULL,'<#assign wp=JspTaglibs["/aps-core"]>
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
              <@c.import url="/WEB-INF/aps/jsp/models/inc/flash_toast.jsp" />
    </head>
    <body class="pace-done">
    <div class="pace  pace-inactive"><div class="pace-progress" data-progress-text="100%" data-progress="99" style="transform: translate3d(100%, 0px, 0px);">
            <div class="pace-progress-inner"></div>
        </div>
        <div class="pace-activity"></div></div>

    <div id="wrapper">

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
                    </ul>
                </nav>
            </div>
            <div class="row white-bg" style="padding-bottom:10px; border-bottom:2px solid #e7eaec;">
                <@wp.show  frame=5 />
            </div>
            <div style="padding-top:20px;">
                <div class="col-md-4">
                    <div class="white-bg">
                        <@wp.show frame=7 />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="white-bg">
                        <@wp.show frame=8 />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="white-bg">
                        <@wp.show frame=9 />
                    </div>
                </div>
            </div>
            <div style="padding-top:20px;">
                <div class="col-md-4">
                    <div class="white-bg">
                        <@wp.show frame=11 />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="white-bg">
                        <@wp.show  frame=12 />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="white-bg">
                        <@wp.show  frame=13 />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="wrapper wrapper-content">
                        <div class="row">
                            <div class="col-lg-12">
                                <@wp.show frame=15 />

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <@wp.show  frame= 17/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="white-bg">
                                    <@wp.show  frame=19 />
                                </div>
                                <div class="white-bg">
                                    <@wp.show frame=22/>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="white-bg">
                                    <@wp.show frame=20 />
                                </div>
                                <div class="white-bg">
                                    <@wp.show  frame=23 />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="white-bg">
                                    <@wp.show  frame=21 />
                                </div>
                                <div class="white-bg">
                                    <@wp.show frame=24 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <@wp.show frame=25 />
                    </div>
                </div>
            </div>
        </div>
    </div> 
</body>
</html>');

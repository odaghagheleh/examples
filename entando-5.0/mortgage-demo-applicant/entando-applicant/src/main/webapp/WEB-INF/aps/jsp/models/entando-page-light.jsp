<%@ taglib prefix="wp" uri="/aps-core" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>
            <wp:currentPage param="title" /> - <wp:i18n key="PORTAL_TITLE" />
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <link rel="icon" href="<wp:info key="systemParam" paramName="applicationBaseURL" />favicon.png" type="image/png" />

        <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
                <script src="<wp:resourceURL />static/js/entando-misc-html5-essentials/html5shiv.js"></script>
        <![endif]-->

        <jsp:include page="inc/content_inline_editing.jsp" />
        <jsp:include page="inc/header-inclusions_light.jsp" />
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
                        <img alt="acme-logo"  class="logo-img" src="<wp:imgURL />Logo_Acme_Bank.png">
                    </a>
                </div>
                <!-- end navbar-header -->

                <!-- menu -->
                <div class="navbar-collapse collapse" id="navbar-menu">

                    <!--Navbar left-->
                    <ul class="nav navbar-nav nav-custom-left">
                        <!--frame 0 1-->
                        <wp:show frame="0" />
                        <wp:show frame="1" />
                    </ul>

                    <!-- Navbar right -->
                    <ul class="nav navbar-nav navbar-right">
                        <!--frame 2 3-->
                        <wp:show frame="2" />
                        <wp:show frame="3" />
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
                        <wp:show frame="4" />
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
                        <wp:show frame="5" />
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
                        <wp:show frame="6" />
                        <!--frame 5-->
                    </div>
                    <div class="col-sm-6">
                        <!--frame 7 frame bpm -->
                        <wp:show frame="7" />
                        <!--frame 7-->
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <!--frame 8-->
            <wp:show frame="8"/>
            <!--frame 8-->
        </section>

        <section class="section">
            <!--frame 9-->
            <wp:show frame="9" />
            <!--frame 9-->
        </section>

        <section class="section">
            <!--frame 10-->
            <wp:show frame="10" />
            <!--frame 10-->
        </section>

        <!-- FOOTER -->
        <footer class="section ">
            <div class="row">
                <div class="col-md-6">
                    <!--frame 11-->
                    <wp:show frame="11" />
                    <!--frame 11-->
                </div>
                <div class="col-md-6">
                    <!--frame 12-->
                    <wp:show frame="12" />
                    <!--frame 12-->
                </div>
            </div>
        </footer>
        <!-- END FOOTER -->

        <script src="<wp:resourceURL />static/js/jquery.ajaxchimp.js"></script>
        <script src="<wp:resourceURL />static/js/jquery.sticky.js"></script>
        <script src="<wp:resourceURL />static/js/jquery.app.js"></script>
    </body>
</html>
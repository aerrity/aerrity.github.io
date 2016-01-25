<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Kabzy - Vehicle and Driver Stats Dashboard</title>

    <!-- Bootstrap Core CSS -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Timeline CSS -->
    <link href="../dist/css/timeline.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="../bower_components/morrisjs/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">Kabzy Stats</a>
            </div>
            <!-- /.navbar-header -->
            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">   
                        <li>
                            <a href="index.html"><i class="fa fa-car fa-fw"></i> Live Fleet</a>
                        </li>
                        <li>
                            <a href="trips.html"><i class="fa fa-globe fa-fw"></i> Trip Details</a>
                        </li>
                        <li>
                            <a href="geo.html"><i class="fa fa-map-marker fa-fw"></i> Geo Fence</a>
                        </li>
                        <li>
                            <a href="drivers.html"><i class="glyphicon glyphicon-user"></i> Driver Behaviour</a>
                        </li>
                        <li>
                            <a href="lpg.html"><i class="fa fa-bar-chart-o fa-fw"></i> LPG Usage</a>
                        </li>
                        <li>
                            <a href="fuel.html"><i class="fa fa-bar-chart-o fa-fw"></i> Fuel Monitoring</a>
                        </li>
                        <li>
                            <a href="ecu.html"><i class="fa fa-bar-chart-o fa-fw"></i> ECU Reader</a>
                        </li>
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Live Fleet</h1>
                </div>
                <!-- /.col-lg-12 -->
                <input type="submit" class="btn btn-lg btn-success btn-block" value="Test" onclick = "verify();" >
            </div>
            <!-- /.row -->
            
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

    <script>
        //test login functionality
        function verify() {
            var form = new FormData();
            form.append("username", "andrew.errity@iadt.ie");
            form.append("password", "kabzy1adt");

            var settings = {
              "async": true,
              "crossDomain": true,
              "url": "https://www.track.kabzy.com/api/login",
              "method": "POST",
              
              "processData": false,
              "contentType": false,
              "mimeType": "multipart/form-data",
              "data": form
            }
            var auth;
            $.ajax(settings).done(function (response) {
              console.log(response);
              auth = response.auth;
            });
            alert

            var settings2 = {
              "async": true,
              "crossDomain": true,
              "url": "https://www.track.kabzy.com/api/vehicles",
              "method": "GET",
               headers: {
                    "Authentication":auth
                },
              "processData": false,
              "contentType": false,
              //"mimeType": "multipart/form-data",
              //"data": form
            }

            $.ajax(settings2).done(function (response) {
              console.log(response);
            });
        }
        
    </script>

</body>

</html>

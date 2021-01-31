<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page isELIgnored="false" %>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Document</title>
</head>
<body>

    <div class="container">
        <div class="col-md-4 mx-auto text-center">
            <h3 class="my-5">Login Form</h3>

            <form action="login" method="post">
                <div class="input-group">
                    <input type="text" class="form-control my-5" name="username" placeholder="username" />
                </div>
                <div class="input-group">
                    <input type="text" class="form-control" name="password" placeholder="password" />
                </div>
                <div class="input-group">
                    <div class="row">
                        <div class="col">
                            <input type="submit" class="btn btn-primary mt-5" value="Login" />
                        </div>
                        <div class="col">
                            <a href="login?logout" class="btn btn-primary mt-5">Logout</a>
                        </div>
                        <div class="col">
                            <a href="home" class="btn btn-primary mt-5">Home</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js"></script>
</body>
</html>
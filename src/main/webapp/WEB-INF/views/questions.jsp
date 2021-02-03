<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Questions</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>

<div class="jumbotron jumbotron-fluid" style="background-color: white">
    <div class="container">
        <h1 class="display-4">Questions?</h1>
    </div>
</div>

<div class="container">
    <div class="accordion" id="questionsAccordion">

    </div>
</div>

<div class="container my-5">
    <label for="questionsTextArea">Complaints </label>
    <textarea class='form-control' id='questionsTextArea' placeholder='' rows='7'></textarea>
    <input class="btn btn-primary btn-lg my-3" id="submitQuery" type="button" value="Submit"/>
</div>

<div class="modal" id="confirmationModal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Thank you for your submission.</h5>
            </div>

            <div class="modal-body">
                <p>We have received your submission.</p>
                <p>Your ticket id is: </p>
                <p id="confirmId"></p>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Stay</button>
                <a href="home" class="btn btn-primary">Home</a>
            </div>
        </div>
    </div>
</div>

<div class="jumbotron jumbotron-fluid" style="background-color: white"><div class="container"></div></div>
<div class="jumbotron jumbotron-fluid" style="background-color: white"><div class="container"></div></div>
<div class="jumbotron jumbotron-fluid" style="background-color: white"><div class="container"></div></div>
<div class="jumbotron jumbotron-fluid" style="background-color: white"><div class="container"></div></div>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/questions.js"></script>
</body>
</html>
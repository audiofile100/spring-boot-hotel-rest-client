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

        <div class="card">
            <div class="card-header" id="heading-1">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                        Question 1
                    </button>
                </h2>
            </div>

            <div id="collapse-1" class="collapse show" aria-labelledby="heading-1" data-parent="#questionsAccordion">
                <div class="card-body">
                    Answer 1
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="heading-2">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                        Question 2
                    </button>
                </h2>
            </div>

            <div id="collapse-2" class="collapse" aria-labelledby="heading-2" data-parent="#questionsAccordion">
                <div class="card-body">
                    Answer 2
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="heading-3">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                        Question 3
                    </button>
                </h2>
            </div>

            <div id="collapse-3" class="collapse" aria-labelledby="heading-3" data-parent="#questionsAccordion">
                <div class="card-body">
                    Answer 3
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="heading-4">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                        Question 4
                    </button>
                </h2>
            </div>

            <div id="collapse-4" class="collapse" aria-labelledby="heading-4" data-parent="#questionsAccordion">
                <div class="card-body">
                    Answer 4
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="heading-5">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                        Question 5
                    </button>
                </h2>
            </div>

            <div id="collapse-5" class="collapse" aria-labelledby="heading-5" data-parent="#questionsAccordion">
                <div class="card-body">
                    Answer 5
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="heading-6">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                        Question 6
                    </button>
                </h2>
            </div>

            <div id="collapse-6" class="collapse" aria-labelledby="heading-6" data-parent="#questionsAccordion">
                <div class="card-body">
                    Answer 6
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="heading-7">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
                        Question 7
                    </button>
                </h2>
            </div>

            <div id="collapse-7" class="collapse" aria-labelledby="heading-7" data-parent="#questionsAccordion">
                <div class="card-body">
                    Answer 7
                </div>
            </div>
        </div>

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
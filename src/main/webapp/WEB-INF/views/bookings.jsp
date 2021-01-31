<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Account</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>

<div class="jumbotron jumbotron-fluid" style="background-color: white">
    <div class="container"></div>
</div>

<div class="container">
    <ul class="nav nav-tabs mb-5" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <a class="nav-link active" id="upcoming-tab" data-toggle="tab" href="#upcoming" role="tab" aria-controls="upcoming" aria-selected="true">Upcoming</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="canceled-tab" data-toggle="tab" href="#canceled" role="tab" aria-controls="canceled" aria-selected="false">Canceled</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="completed-tab" data-toggle="tab" href="#completed" role="tab" aria-controls="completed" aria-selected="false">Completed</a>
        </li>
    </ul>

    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="upcoming" role="tabpanel" aria-labelledby="upcoming-tab">

        </div>
        <div class="tab-pane fade" id="canceled" role="tabpanel" aria-labelledby="canceled-tab">
            <p>canceled</p>
        </div>
        <div class="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="completed-tab">
            <p>completed</p>
        </div>
    </div>
</div>

<div class="modal" id="reviewModal">
    <input class="form-control" type="hidden" id="reviewModal_bookingId"/>
    <input class="form-control" type="hidden" id="reviewModal_hotelId"/>
    <input class="form-control" type="hidden" id="reviewModal_cid"/>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Ratings</h5>
            </div>
            <div class="modal-body" id="reviewModalBody">

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="saveReview">Save</button>
            </div>

        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/bookings.js"></script>
</body>
</html>
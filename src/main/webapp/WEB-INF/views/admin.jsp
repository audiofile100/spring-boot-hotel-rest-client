<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>
<div class="jumbotron jumbotron-fluid" style="background-color: white"><div class="container"></div></div>

<div class="container">
    <ul class="nav nav-tabs mb-5" id="myAdminTab" role="tablist">
        <li class="nav-item" role="presentation">
            <a class="nav-link active" id="adminInbox-tab" data-toggle="tab" href="#adminInbox" role="tab" aria-controls="adminInbox" aria-selected="true">In Box</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="openIssues-tab" data-toggle="tab" href="#openIssues" role="tab" aria-controls="openIssues" aria-selected="false">Open Issues</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="closedIssues-tab" data-toggle="tab" href="#closedIssues" role="tab" aria-controls="closedIssues" aria-selected="false">Closed Issues</a>
        </li>
    </ul>

    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="adminInbox" role="tabpanel" aria-labelledby="adminInbox-tab">

        </div>
        <div class="tab-pane fade" id="openIssues" role="tabpanel" aria-labelledby="openIssues-tab">

        </div>
        <div class="tab-pane fade" id="closedIssues" role="tabpanel" aria-labelledby="closedIssues-tab">

        </div>
    </div>
</div>

<div class="modal" id="actionsModal">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Actions</h5>
            </div>
            <div class="modal-body">
                <div class="row" id="assignment">

                </div>
                <div class="container" id="actionsBody">

                </div>
                <div class="container">
                    <label class="mt-3" for="adminTextArea">Enter your response:</label>
                    <textarea class="form-control" rows="7" id="adminTextArea"></textarea>
                </div>
                <div class="container mt-5">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="statusUpdate">Status</label>
                        </div>
                        <select class="custom-select" id="statusUpdate">
                            <option value="open" selected>Open</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="modal-footer" id="actionsFooter">
                <input type="hidden" id="issueId">
                <button type="button" class="btn btn-primary adminSubmitBtn" data-dismiss="modal">Done</button>
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
<script src="js/admin.js"></script>
</body>
</html>
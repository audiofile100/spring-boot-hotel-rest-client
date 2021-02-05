$(document).ready(function () {

    updateAdmin();

    $(document).on('click', '.actionsBtn', function () {
        var complaintId = $(this).attr("data-complaintId");
        $("#issueId").val(complaintId);

        var assignedId = $(this).attr("data-assignedId");

        var $assignment = $("#assignment");
        $assignment.empty();
        $assignment.append(displayAssignment(assignedId));

        getMessages(complaintId);

        $("#actionsModal").modal("toggle");
    });

    $(document).on('click', '.adminSubmitBtn', function () {
        var $assigmentVal = $("#assignmentOption").val();
        var $adminTextArea = $("#adminTextArea");
        var $selectStatus = $("#statusUpdate option:selected").val();
        var $complaintId = $("#issueId").val();

        var reqBody = {
            "complaintId" : $complaintId,
            "assignmentId" : $assigmentVal,
            "response" : $adminTextArea.val(),
            "status" : $selectStatus
        };

        $.ajax({
            url: "/complaint/" + $complaintId,
            type: "PUT",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(reqBody),
            success: function (res) {
                console.log("Success updating complaint " + res);

                updateAdmin();
                $adminTextArea.empty();
            },
            error: function (err) {
                console.log("Error updating complaint " + err);
            }
        });
    });
});

function updateAdmin() {
    var cid = localStorage.getItem("cid");
    $.ajax({
        url: "/complaint",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        cache: false,
        success: function (res) {

            var $adminInbox = $("#adminInbox");
            var $openIssues = $("#openIssues");
            var $closedIssues = $("#closedIssues");
            $adminInbox.empty();
            $openIssues.empty();
            $closedIssues.empty();

            $.each(res, function (key, val) {
                console.log(val);
                if (val.status === "closed") {
                    $closedIssues.append(complaintCard(val));
                } else if (parseInt(val.assignedId) === parseInt(cid) && val.status === "open") {
                    $adminInbox.append(complaintCard(val));
                } else {
                    $openIssues.append(complaintCard(val));
                }
            });
        },
        error: function (err) {
            console.log("Error: " + err);
        }
    });
}

function complaintCard(val) {
    return "<div class='row border rounded complaintCard' style='padding: 16px;'>" +
        "<div class='col-4'>" +
        "<p>Issue #: " + val.complaintId + " </p>" +
        "<p>Associate Id: " + val.assignedId + "</p>" +
        "</div>" +
        "<div class='col-5'>" +
        "<p>Last update: " + val.raisedOn + "</p>" +
        "<p>Customer Id: " + val.cid + "</p>" +
        "</div>" +
        "<div class='col-3'>" +
        "<p>Status: " + val.status + "</p>" +
        "<input class='btn btn-primary actionsBtn' id='actionBtn' data-complaintId='" + val.complaintId + "' data-assignedId='" + val.assignedId + "' type='button' value='Actions' />" +
        "</div>" +
        "</div>";
}

// complaint/message api
function getMessages(complaintId) {
    $.ajax({
        url: "/complaint/messages/" +  complaintId,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        cache: false,
        success: function (res) {
            console.log("Success getting messages: " + res);

            displayMessages(res);
        },
        error: function (err) {
            console.log("Error getting messages: " + err);
        }
    });
}

function displayMessages(res) {

    var $actionsBody = $("#actionsBody");
    $actionsBody.empty();

    $.each(res, function (key, val) {
         $actionsBody.append(message(val));
    });
}

function message(msg) {
    var ans = (msg.answer == null) ? "" : msg.answer;
    return "<div class='container border rounded my-3'>" +
        "<div class='row my-2'>" +
        "<p class='mx-1'>" + msg.date + "</p>" +
        "</div>" +
        "<div class='row my-2'>" +
        "<p class='mx-2'>" + msg.query + "</p>" +
        "</div>" +
        "<div class='row my-2'>" +
        "<p class='mx-2'>" + ans + "</p>" +
        "</div>" +
        "</div>";
}

function displayAssignment(empId) {
    empId = (empId === "0") ? "" : empId;
    return "<div class='col'>" +
        "<h6>Assigned to associate #: " + empId + "</h6>" +
        "</div>" +
        "<div class='col'>" +
        "<label for='assignmentOption'>Assign To</label>" +
        "<input type='text' class='form-control' id='assignmentOption' placeholder='enter new associate #'>" +
        "</div>";
}
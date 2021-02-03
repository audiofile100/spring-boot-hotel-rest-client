$(document).ready(function () {

    displayComplaints();
});

function displayComplaints() {
    $.ajax({
        url: "/complaint",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        cache: false,
        success: function (res) {

            var $complaintsDiv = $("#complaintsContainer");
            $complaintsDiv.empty();

            $.each(res, function (key, val) {

                $complaintsDiv.append(complaintCard(val));
            });
        },
        error: function (err) {
            console.log("Error: " + err);
        }
    });
}

function complaintCard(val) {
    return "<div class='row border rounded' style='height: 100px;'>" +
        "<div class='col-2'>" + val.complaintId + "</div>" +
        "<div class='col-2'>" + val.cid + "</div>" +
        "<div class='col-2'>" + val.message + "</div>" +
        "<div class='col-2'>" + val.raisedOn + "</div>" +
        "<div class='col-2'>" + val.status + "</div>" +
        "<div class='col-2'>" + val.assignedId + "</div>" +
        "</div>";
}
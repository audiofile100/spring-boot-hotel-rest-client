$(document).ready(function () {

    updateBookings();
    updateInbox();

    $(document).on('click', '.cancelBtn', function () {
        $.ajax({
            url: "/booking/" + ($(this).attr("data-bookingId")),
            type: "PUT",
            success: function () {
                updateBookings();
            },
            error: function (err) {
                alert("Error canceling booking" + err);
            }
        });
    });

    $(document).on('click', '.reviewBtn', function () {
        var $reviewModal = $("#reviewModal");
        $reviewModal.find("#reviewModal_bookingId").val($(this).attr("data-bookingId"));
        $reviewModal.find("#reviewModal_hotelId").val($(this).attr("data-hotelId"));
        $reviewModal.find("#reviewModal_cid").val($(this).attr("data-cid"));

        var $reviewModalBody = $reviewModal.find("#reviewModalBody");
        $reviewModalBody.empty();

        $reviewModalBody.append(rateCleanliness() + rateService() + rateProperty() + rateAmenities() + rateAtmosphere() + commentsArea() + displayName());

        $reviewModal.modal("toggle");
    });

    $("#saveReview").click(function () {
        $("#reviewModal").modal("toggle");

        var cleanlinessRating = $("input:radio[name=cleanlinessOptions]:checked").val();
        var serviceRating = $("input:radio[name=serviceOptions]:checked").val();
        var propertyRating = $("input:radio[name=propertyOptions]:checked").val();
        var amenitiesRating = $("input:radio[name=amenitiesOptions]:checked").val();
        var atmosphereRating = $("input:radio[name=atmosphereOptions]:checked").val();
        var comments = $("#commentsTextArea").val();
        var displayName = $("#displayName").val();
        displayName = (displayName.length === 0) ? "anonymous" : displayName;
        var overallRating = (parseInt(cleanlinessRating) + parseInt(serviceRating) + parseInt(propertyRating) + parseInt(amenitiesRating) + parseInt(atmosphereRating)) / 5;

        var review = {
            "cid" : $("#reviewModal_cid").val(),
            "bookingId" : $("#reviewModal_bookingId").val(),
            "hotelId" : $("#reviewModal_hotelId").val(),
            "cleanliness" : cleanlinessRating,
            "service" : serviceRating,
            "property" : propertyRating,
            "amenities" : amenitiesRating,
            "atmosphere" : atmosphereRating,
            "overall" : overallRating,
            "comments" : comments,
            "displayName" : displayName
        }

        $.ajax({
            url: "/hotelreview",
            type: "POST",
            data: JSON.stringify(review),
            contentType: "application/json",
            dataType: "json",
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                console.log("Error: " + err);
            }
        });
    });

    $(document).on('click', '.actionsBtn2', function () {
        var complaintId = $(this).attr("data-complaintId");
        $("#issueId2").val(complaintId);

        getMessagesForCustomer(complaintId);

        $("#customerActionsModal").modal("toggle");
    });

    $(document).on('click', '.customerActionSubmitBtn', function () {
        var $complaintId = $("#issueId2").val();
        var $customerTextArea = $("#customerTextArea");

        var reqBody = {
            "complaintId" : $complaintId,
            "assignmentId" : 0,
            "response" : $customerTextArea.val()
        };

        $.ajax({
            url: "/complaint/" + $complaintId,
            type: "PUT",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(reqBody),
            success: function (res) {
                console.log("Success updating complaint " + res);

                updateInbox();
                $customerTextArea.empty();
            },
            error: function (err) {
                console.log("Error updating complaint " + err);
            }
        });
    });
});

function updateBookings() {
    var cid = localStorage.getItem("cid");
    $.ajax({
        url: "/bookings/" + cid,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        cache: false,
        success: function (result) {
            console.log(result);

            var $upcoming = $("#upcoming");
            var $canceled = $("#canceled");
            var $completed = $("#completed");
            $upcoming.empty();
            $canceled.empty();
            $completed.empty();

            $.each(result, function (idx, val) {

                if (val.status === "upcoming") {
                    $upcoming.append(bookingRow(val));
                    $upcoming.find(".reviewBtn").hide();
                } else if (val.status === "canceled") {
                    $canceled.append(bookingRow(val));
                    $canceled.find(".cancelBtn").hide();
                    $canceled.find(".reviewBtn").hide();
                    addRooms(val);
                } else {
                    $completed.append(bookingRow(val));
                    $completed.find(".cancelBtn").hide();
                    $completed.find(".reviewBtn").show();
                    addRooms(val);
                }
            });
        },
        error: function (err) {
            console.log("ERROR: updateBookings() " + err);
        }
    });
}

function bookingRow(val) {
    return "<div class='row mt-2'>"
        + "<div class='col border rounded' style='margin-left: 25px; margin-right: 25px; padding:25px;'>"
        + "<div class='row'>"
        + "<div class='col-3'>"
        + "<img src='" + val.hotelImgUrl + "' alt='hotel' width='200' height='200'>"
        + "</div>"
        + "<div class='col-4'>"
        + "<h5>" + val.hotelName + "</h5>"
        + "</div>"
        + "<div class='col-3'>"
        + "<h6>Check In:</h6>"
        + "<p>" + val.checkInDate + "</p>"
        + "<h6>Check Out:</h6>"
        + "<p>" + val.checkOutDate + "</p>"
        + "</div>"
        + "<div class='col-2'>"
        + "<input class='btn btn-primary cancelBtn' type='button' data-bookingId='" + val.bookingId + "' value='Cancel'/>"
        + "<input class='btn btn-primary reviewBtn' type='button' data-bookingId='" + val.bookingId + "' data-hotelId='" + val.hotelId + "' data-cid='" + val.cid + "' value='Add Review'/>"
        + "</div>"
        + "</div>"
        + "</div>"
        + "</div>";
}

function rateCleanliness() {
    return "<div class='row my-4'>" +
        "<div class='col'>Cleanliness</div>" +
        "<div class='col'>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='cleanlinessOptions' value='0' checked hidden>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='cleanlinessOptions' value='1'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='cleanlinessOptions' value='2'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='cleanlinessOptions' value='3'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='cleanlinessOptions' value='4'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='cleanlinessOptions' value='5'>" +
        "</div>" +
        "</div>" +
        "</div>";
}

function rateService() {
    return "<div class='row my-4'>" +
        "<div class='col'>Service</div>" +
        "<div class='col'>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='serviceOptions' value='0' checked hidden>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='serviceOptions' value='1'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='serviceOptions' value='2'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='serviceOptions' value='3'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='serviceOptions' value='4'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='serviceOptions' value='5'>" +
        "</div>" +
        "</div>" +
        "</div>";
}

function rateProperty() {
    return "<div class='row my-4'>" +
        "<div class='col'>Property</div>" +
        "<div class='col'>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='propertyOptions' value='0' checked hidden>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='propertyOptions' value='1'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='propertyOptions' value='2'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='propertyOptions' value='3'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='propertyOptions' value='4'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='propertyOptions' value='5'>" +
        "</div>" +
        "</div>" +
        "</div>";
}

function rateAmenities() {
    return "<div class='row my-4'>" +
        "<div class='col'>Amenities</div>" +
        "<div class='col'>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='amenitiesOptions' value='0' checked hidden>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='amenitiesOptions' value='1'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='amenitiesOptions' value='2'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='amenitiesOptions' value='3'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='amenitiesOptions' value='4'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='amenitiesOptions' value='5'>" +
        "</div>" +
        "</div>" +
        "</div>";
}

function rateAtmosphere() {
    return "<div class='row my-4'>" +
        "<div class='col'>Atmosphere</div>" +
        "<div class='col'>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='atmosphereOptions' value='0' checked hidden>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='atmosphereOptions' value='1'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='atmosphereOptions' value='2'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='atmosphereOptions' value='3'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='atmosphereOptions' value='4'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='atmosphereOptions' value='5'>" +
        "</div>" +
        "</div>" +
        "</div>";
}

function commentsArea() {
    return "<div class='row mt-5 mb-1 mx-1'>" +
        "<textarea class='form-control' id='commentsTextArea' rows='7' placeholder='suggestions/comments...'></textarea>" +
        "</div>";
}

function displayName() {
    return "<div class='row mx-1'>" +
        "<input class='form-control mt-2' type='text' id='displayName' placeholder='name (optional)' />" +
        "</div>";
}

function addRooms(val) {
    $.ajax({
        url: "/hotelrooms/add/" + val.hotelId + "/" + val.roomType + "/" + val.totalRooms,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        cache: false,
        success: function (res) {
            console.log("Success adding rooms: " + res);
        },
        error: function (err) {
            console.log("Error adding rooms: " + err);
        }
    });
}

function updateInbox() {
    var cid = localStorage.getItem("cid");
    $.ajax({
        url: "/complaint/" + cid,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        cache: false,
        success: function (res) {

            var $inbox = $("#inbox");
            $inbox.empty();

            $.each(res, function (key, val) {

                if (val.status === "open") {
                    $inbox.append(customerComplaintCard(val));
                }
            });
        },
        error: function (err) {
            console.log("Error: " + err);
        }
    });
}

function customerComplaintCard(val) {
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
        "<input class='btn btn-primary actionsBtn2' id='actionBtn2' data-complaintId='" + val.complaintId + "' data-assignedId='" + val.assignedId + "' type='button' value='Actions' />" +
        "</div>" +
        "</div>";
}

function getMessagesForCustomer(complaintId) {
    $.ajax({
        url: "/complaint/messages/" + complaintId,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        cache: false,
        success: function (res) {
            console.log("Success getting messages: " + res);

            displayMessagesForCustomer(res);
        },
        error: function (err) {
            console.log("Error getting messages: " + err);
        }
    });
}

function displayMessagesForCustomer(res) {
    var $actionsBody2 = $("#actionsBody2");
    $actionsBody2.empty();

    $.each(res, function (key, val) {
        $actionsBody2.append(messageView(val));
    });
}

function messageView(msg) {
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
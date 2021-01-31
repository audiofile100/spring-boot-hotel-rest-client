$(document).ready(function () {

    updateBookings();

    $(document).on('click', '.cancelBtn', function () {
        alert("clicked canceled " + ($(this).attr("data-bookingId")));
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
       $reviewModal.find("#modal_bookingId").val($(this).attr("data-bookingId"));

       var $reviewModalBody = $reviewModal.find("#reviewModalBody");
       $reviewModalBody.empty();

       $reviewModalBody.append(rateCleanliness() + rateService() + rateProperty() + rateAmenities() + rateAtmosphere());

       $reviewModal.modal("toggle");
    });

    $("#saveReview").click(function () {
        $("#reviewModal").modal("toggle");


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
                } else {
                    $completed.append(bookingRow(val));
                    $completed.find(".cancelBtn").hide();
                    $completed.find(".reviewBtn").show();
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
        + "<input class='btn btn-primary reviewBtn' type='button' data-bookingId='" + val.bookingId + "' value='Add Review'/>"
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
        "<input class='form-check-input' type='radio' name='cleanlinessOptions' id='cleanliness1'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='cleanlinessOptions' id='cleanliness2'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='cleanlinessOptions' id='cleanliness3'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='cleanlinessOptions' id='cleanliness4'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='cleanlinessOptions' id='cleanliness5'>" +
        "</div>" +
        "</div>" +
        "</div>";
}

function rateService() {
    return "<div class='row my-4'>" +
        "<div class='col'>Service</div>" +
        "<div class='col'>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='serviceOptions' id='service1'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='serviceOptions' id='service2'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='serviceOptions' id='service3'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='serviceOptions' id='service4'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='serviceOptions' id='service5'>" +
        "</div>" +
        "</div>" +
        "</div>";
}

function rateProperty() {
    return "<div class='row my-4'>" +
        "<div class='col'>Property</div>" +
        "<div class='col'>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='propertyOptions' id='property1'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='propertyOptions' id='property2'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='propertyOptions' id='property3'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='propertyOptions' id='property4'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='propertyOptions' id='property5'>" +
        "</div>" +
        "</div>" +
        "</div>";
}

function rateAmenities() {
    return "<div class='row my-4'>" +
        "<div class='col'>Amenities</div>" +
        "<div class='col'>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='amenitiesOptions' id='amenities1'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='amenitiesOptions' id='amenities2'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='amenitiesOptions' id='amenities3'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='amenitiesOptions' id='amenities4'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='amenitiesOptions' id='amenities5'>" +
        "</div>" +
        "</div>" +
        "</div>";
}

function rateAtmosphere() {
    return "<div class='row my-4'>" +
        "<div class='col'>Atmosphere</div>" +
        "<div class='col'>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='atmosphereOptions' id='atmosphere1'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='atmosphereOptions' id='atmosphere2'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='atmosphereOptions' id='atmosphere3'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='atmosphereOptions' id='atmosphere4'>" +
        "</div>" +
        "<div class='form-check form-check-inline'>" +
        "<input class='form-check-input' type='radio' name='atmosphereOptions' id='atmosphere5'>" +
        "</div>" +
        "</div>" +
        "</div>";
}
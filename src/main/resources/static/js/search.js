$(document).ready(function () {
    if ($("#currentUser").val() === "anonymousUser") {
        $("#account").hide();
    } else {
        $("#account").show();
        localStorage.setItem("cid", $("#cid").val());
    }

    $("#searchBtn").click(function () {
        var search = $("#searchLocation").val();

        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/hotel?search=" + search,
            dataType: "json",
            cache: false,
            success: function(result){
                console.log(result);

                var $hotelContainer = $("#hotelContainer");
                $hotelContainer.empty();

                $.each(result, function(key1, value1) {
                    $hotelContainer.append("<div id='hotelRow' class='row my-2'>"
                                            + "<div class='col-3'>"
                                                + "<img src='" + value1.imageURL + "' alt='hotel' width='200' height='200'>"
                                            + "</div>"
                                            + "<div class='col-7 my-3'>"
                                                + "<h4>" + value1.hotelName + "</h4>"
                                                + "<p id='hiddenStar' hidden>" + value1.starRating + "</p>"
                                                + "<p>" + getStars(value1.starRating) + "</p>"
                                                + "<p id='amenities' class='my-3 text-small'>" + getAmenities(value1.amenities) + "</p>"
                                                + "<p class='mt-5'>" + value1.address + "</p>"
                                            + "</div>"
                                            + "<div class='col-2 mt-3'>"
                                                + "<h6 id='price'>" + value1.averagePrice + "</h6>"
                                                + "<input class='btn btn-info btn-lg bookBtn' " +
                                                            "type='button' value='book' " +
                                                            "data-id='" + value1.hotelId + "' data-hotel='" + value1.hotelName + "' data-hotelImg='" + value1.imageURL + "' data-hotelPrice='" + value1.averagePrice + "' />"
                                            + "</div>"
                                        + "</div>");
                });
            },
            error: function(e){
                alert("Error!");
                console.log("ERROR: ", e);
            }
        });

    });

    $(document).on('click','.bookBtn', function() {
        if ($("#currentUser").val() === "anonymousUser") {
            window.location.replace("http://localhost:8080/login");
        } else {
            $.ajax({
                type: "GET",
                contentType: "application/json",
                url: "/roomtype",
                dataType: "json",
                cache: false,
                success: function(result) {
                    console.log(result);

                    var $roomTypesSelect = $("#myModal").find("#select_roomTypes");
                    $roomTypesSelect.empty();

                    $.each(result, function(key1, value1) {
                        $roomTypesSelect.append(
                            "<option value='" + value1.name + "'>" + value1.name + "</option>"
                        );
                    });

                },
                error: function(e){
                    alert("Error!");
                    console.log("ERROR: ", e);
                }
            });

            var $myModal = $("#myModal");
            $myModal.find("#modal_hotelId").val($(this).attr("data-id"));
            $myModal.find("#modal_hotelName").val($(this).attr("data-hotel"));
            $myModal.find("#modal-hotelImg").val($(this).attr("data-hotelImg"));
            $myModal.find("#modal_noGuests").val(parseInt($("#noGuests").val()));
            $myModal.find("#modal_noRooms").val(parseInt($("#noRooms").val()));
            $myModal.find("#modal_checkInDate").val($("#checkInDate").val());
            $myModal.find("#modal_checkOutDate").val($("#checkOutDate").val());
            $myModal.modal("toggle");
        }
    });

    $(document).on('click', '.addGuestBtn', function () {

        var $myModal = $("#myModal");
        $myModal.modal("toggle");

        var numGuests = parseInt($("#modal_noGuests").val());
        numGuests = !isNaN(numGuests) ? numGuests : 0;

        var $guestModal = $("#guestModal");

        var $guestModalForm = $("#guestModalForm");
        $guestModalForm.empty();

        for (let i = 0; i < numGuests; i++) {
            $guestModalForm.append("<div class='row guestRow'>" +
                                        "<div class='col'><input type='text' class='form-control mb-2 guestName' placeholder='Name'></div> " +
                                        "<div class='col'><input type='text' class='form-control mb-2 guestAge' placeholder='Age'></div>" +
                                        "<div class='col'><input type='text' class='form-control mb-2 guestGender' placeholder='Gender'></div>" +
                                    "</div>");
        }
        $guestModal.modal("toggle");
    });

    $("#guestModalDone").click(function () {

        var booking = {
            "cid" : $("#cid").val(),
            "checkInDate" : $("#modal_checkInDate").val(),
            "checkOutDate" : $("#modal_checkOutDate").val(),
            "hotelId" : $("#modal_hotelId").val(),
            "hotelName" : $("#modal_hotelName").val(),
            "hotelImgUrl" : $("#modal-hotelImg").val(),
            "totalRooms" : parseInt($("#modal_noRooms").val()),
            "totalGuests" : parseInt($("#modal_noGuests").val()),
            "roomType" : $("#select_roomTypes").val(),
            "roomPrice" : parseFloat($("#modal_hotelPrice").val()),
            "status" : "upcoming"
        };

        // save all guest info
        var guestList = [];
        $(".guestRow").each(function () {
            var obj = {};
            obj.name = $(this).find(".guestName").val();
            obj.age = $(this).find(".guestAge").val();
            obj.gender = $(this).find(".guestGender").val();
            guestList.push(obj);
        });
        booking.guestList = guestList;

        //save the booking
        $.ajax({
            url: "/booking",
            type: "POST",
            data: JSON.stringify(booking),
            contentType: "application/json",
            dataType: "json",
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                alert("Error!");
                console.log("ERROR: ", err);
            }
        });
    });

    $("#filterBtn").click(function () {

        var $hotelContainer = $("#hotelContainer");

        var selectedRatings = $("input[name='rating']:checked");
        var selectedAmenities = $("input[name='amenity']:checked");
        var selectedPrice = parseInt($("#priceValue").text());

        $.each($hotelContainer.children("#hotelRow"), function (index, hotel) {

            var thisHotelPrice = parseInt($(this).find("#price").text());
            var thisHotelAmenities = $(this).find("#amenities").text();
            var thisHotelRating = $(this).find("#hiddenStar").text();
            var flag = true;

            // filter by price
            if (selectedPrice < thisHotelPrice) {
                $(this).hide();
            }

            // filter by amenities
            $.each(selectedAmenities, function (index, amenity) {
                flag = thisHotelAmenities.includes($(this).val());
                if (flag === false) return false;
            });
            if (flag === false) {
                $(this).hide();
            }

            // filter by star rating
            flag = false;
            $.each(selectedRatings, function (index, rating) {
                flag = ($(this).val() === thisHotelRating);
                if (flag === true) return false;
            });
            if (flag === false) {
                $(this).hide();
            }
        });
    });

    // helpers
    function getAmenities(amenities) {
        var amen = "";
        var spacer = "&emsp;&bull;&emsp;";
        $.each(amenities, function (key, val) {
            amen += val.name + spacer;
        });
        return amen.slice(0, -spacer.length);
    }

    function getStars(hotelRating) {
        const maxStars = 5;
        var stars = [];
        for (let i = 0; i < maxStars; i++) {
            stars[i] = (i < hotelRating) ? "<span class='fa fa-star checked'></span>" : "<span class='fa fa-star'></span>";
        }
        return stars.join("");
    }
});
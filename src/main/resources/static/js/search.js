$(document).ready(function () {
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
                                                + "<p id='hotelId' hidden>" + value1.hotelId + "</p>"
                                                + "<h4>" + value1.hotelName + "</h4>"
                                                + "<p id='hiddenStar' hidden>" + value1.starRating + "</p>"
                                                + "<p>" + getStars(value1.starRating) + "</p>"
                                                + "<p id='amenities' class='my-3 text-small'>" + getAmenities(value1.amenities) + "</p>"
                                                + "<p class='mt-5'>" + value1.address + "</p>"
                                            + "</div>"
                                            + "<div class='col-2 mt-3'>"
                                                + "<h6 id='price'>" + value1.averagePrice + "</h6>"
                                                + "<input class='btn btn-info btn-lg bookBtn' type='button' value='book' data-hotel='" + value1.hotelName + "'>"
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
        var hotelName = $(this).attr("data-hotel");
        var numRooms = parseInt($("#noRooms").val());
        var numGuests = parseInt($("#noGuests").val());
        var checkIn = $("#checkInDate").val();
        var checkout = $("#checkOutDate").val();

        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/roomtype",
            dataType: "json",
            cache: false,
            success: function(result) {
                console.log(result);

                var $roomTypesSelect = $("#myModal").find("#select_roomTypes");

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
        $myModal.modal("toggle");

        $myModal.find("#modal_hotelName").val(hotelName);
        $myModal.find("#modal_noGuests").val(numGuests);
        $myModal.find("#modal_noRooms").val(numRooms);
        $myModal.find("#modal_checkInDate").val(checkIn);
        $myModal.find("#modal_checkOutDate").val(checkout);
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
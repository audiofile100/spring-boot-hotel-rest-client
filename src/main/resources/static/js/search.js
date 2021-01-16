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
                                            + "<div id='imgDiv' class='col-3'>"
                                                + "<img src='" + value1.imageURL + "' alt='hotel' width='200' height='200'>"
                                            + "</div>"
                                            + "<div id='hotelInfoDiv' class='col-7 my-3'>"
                                                + "<h4>" + value1.hotelName + "</h4>"
                                                + "<p id='hiddenStar' hidden>" + value1.starRating + "</p>"
                                                + "<p>" + getStars(value1.starRating) + "</p>"
                                                + "<p id='amenities' class='my-3 text-small'>" + getAmenities(value1.amenities) + "</p>"
                                                + "<p class='mt-5'>" + value1.address + "</p>"
                                            + "</div>"
                                            + "<div id='priceDiv' class='col-2 mt-3'>"
                                                + "<h6 id='price'>" + value1.averagePrice + "</h6>"
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

    $("#filterBtn").click(function () {

        var $hotelContainer = $("#hotelContainer");

        var selectedRatings = $("input[name='rating']:checked");
        var selectedAmenities = $("input[name='amenity']:checked");
        var selectedPrice = parseInt($("#priceValue").text());

        $.each($hotelContainer.children("#hotelRow"), function (index, hotel) {

            // filter by price
            var thisHotelPrice = parseInt($(this).children("#priceDiv").children("#price").text());
            if (selectedPrice < thisHotelPrice) {
                $(this).hide();
            }

            // filter by amenities
            var thisHotelAmenities = $(this).children("#hotelInfoDiv").children("#amenities").text();
            var flag = true;
            $.each(selectedAmenities, function (index, amenity) {
                flag = thisHotelAmenities.includes($(this).val());
                if (flag === false) return false;
            });
            if (flag === false) {
                $(this).hide();
            }

            // filter by star rating
            var thisHotelRating = $(this).children("#hotelInfoDiv").children("#hiddenStar").text();
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
        var stars = ["<span class='fa fa-star'></span>",
            "<span class='fa fa-star'></span>",
            "<span class='fa fa-star'></span>",
            "<span class='fa fa-star'></span>",
            "<span class='fa fa-star'></span>"
        ];
        for (var i = 0; i < hotelRating; i++) {
            stars[i] = "<span class='fa fa-star checked'></span>";
        }
        return stars.join("");
    }
});
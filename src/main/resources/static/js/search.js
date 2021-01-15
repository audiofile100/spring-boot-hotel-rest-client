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

                var $hotelsTable = $("#hotelsTable");
                $hotelsTable.empty();
                $hotelsTable.append("<thead><tr class='hotelsTableHeader'><th>Name</th><th>Address</th><th>City</th><th>State</th><th>Phone</th></tr></thead><tbody>");
                $.each(result, function(key1, value1) {
                    $hotelsTable.append("<tr><td>" + value1.hotelName + "</td><td>" + value1.address + "</td><td>" + value1.city + "</td><td>" + value1.state + "</td><td>" + value1.mobile + "</td></tr>");
                });
                $hotelsTable.append("</tbody>");
            },
            error: function(e){
                alert("Error!");
                console.log("ERROR: ", e);
            }
        });

    });

    $("#filterBtn").click(function () {
        alert("test");
        $.each($("#hotelsTable tr").not('.hotelsTableHeader'), function(index, hotel) {
            alert($(this).children("td").eq("0").text());
        });
    });
});
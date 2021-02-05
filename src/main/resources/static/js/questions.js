$(document).ready(function () {

    loadFAQs();

    $("#submitQuery").click(function () {
        var $textArea = $("#questionsTextArea");
        var $customerText = $textArea.val();
        var cid = localStorage.getItem("cid");

        var complaint = {
            "cid" : cid,
            "inBox" : [
                {
                    "date" : new Date(),
                    "query" : $customerText
                }
            ],
            "raisedOn" : new Date(),
            "status" : "open"
        };

        $.ajax({
            url: "/complaint",
            type: "POST",
            data: JSON.stringify(complaint),
            dataType: "json",
            contentType: "application/json",
            cache: false,
            success: function (res) {
                console.log("Res: " + res.complaintId);
                var $confirm = $("#confirmationModal");

                $("#confirmId").text(res.complaintId);

                $confirm.modal("toggle");
            },
            error: function (err) {
                console.log("Error: " + err);
            }
        });
        $textArea.val("");
    });
});

function loadFAQs() {
    $.ajax({
        url: "/faqs",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        cache: false,
        success: function (res) {

            var $qa = $("#questionsAccordion");
            $qa.empty();

            $.each(res, function (key, val) {
                 $qa.append(FAQsCard(key, val));
            });
        },
        error: function (err) {
            console.log("Error: " + err);
        }
    });
}

function FAQsCard(idx, val) {
    return "<div class='card'>" +
        "<div class='card-header' id='heading-"+idx+"'>" +
        "<h2 class='mb-0'>" +
        "<button class='btn btn-link btn-block text-left' type='button' data-toggle='collapse' data-target='#collapse-"+idx+"' aria-expanded='false' aria-controls='collapse-"+idx+"'>" +
        val.question +
        "</button>" +
        "</h2>" +
        "</div>" +

        "<div id='collapse-"+idx+"' class='collapse' aria-labelledby='heading-"+idx+"' data-parent='#questionsAccordion'>" +
        "<div class='card-body'>" +
        val.answer +
        "</div>" +
        "</div>" +
        "</div>";
}
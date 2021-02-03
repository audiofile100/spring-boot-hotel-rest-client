$(document).ready(function () {

    $("#submitQuery").click(function () {
        var $textArea = $("#questionsTextArea");
        var $customerText = $textArea.val();
        var cid = localStorage.getItem("cid");

        var complaint = {
            "cid" : cid,
            "message" : $customerText,
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
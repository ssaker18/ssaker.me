
        $("#food").hide();

        $("#secret").click(function () {
            $("#secret").html("<h1>You found me!</h1>");
            $("#food").toggle();
        });

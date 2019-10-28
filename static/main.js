$(document).ready(function () {
        $(".special").toggle("#secret");

        $(".secret").click(function () {
            $(".secret").html("<h1>You found me!</h1>");
            $(".special").toggle("#secret");
        });

});

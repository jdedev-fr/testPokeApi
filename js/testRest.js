$(() => {
    $.get("https://pokeapi.co/api/v2/berry/1", function (data) {
        $("#result").html(" ");
        for (let index in data) {
            if (typeof data[index] === "object") {
                //let films = data[index].toString().split(",");
                $("#result").html($("#result").html() + "<br/> -" + index + " : Tableau : ");
                for (let numF in data[index]) {

                    if (typeof data[index][numF] === "object") {
                        //let films = data[index].toString().split(",");
                        $("#result").html($("#result").html() + "<br/> -" + numF + " : Tableau : ");
                        for (let numF2 in data[index][numF]) {
                            $("#result").html($("#result").html() + "<br/> -" + numF2 + " : " + data[index][numF][numF2]);

                        }
                    }
                    else {
                        $("#result").html($("#result").html() + "<br/> -" + numF + " : " + data[index][numF]);
                    }
                }
            }
            else {
                $("#result").html($("#result").html() + "<br/> -" + index + " : " + data[index]);
            }


        }

        console.log(data)
    });
});
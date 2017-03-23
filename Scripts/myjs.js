function kliknieto() {
    //alert('klik');
    var content2 = document.getElementById("Content2");
    content2.style.color = "blue";
    content2.style.fontSize = "large";
    for(i = 0; i < 30; i++){
        content2.innerHTML += "<button>" + i + "</button>";
    }

    content2.fun = function () {
        //
    }
}

$(document).ready(function () {
    
    $('button').click(function () {
        //alert('new klik');
        $('#Content2').toggle(1000);
        $(".myClass").css({'color': 'yellow'});
    });

    $('#GetButton').click(function() {
        $.ajax({
            url: 'http://localhost:20952/api/Authors',
            type: 'GET', //POST, PUT, DELETE
            success: function (_data) {
                alert(JSON.stringify(_data));
            },
            error: function (e) {
                allert(e.message);
            }
        });
    });

    var nobiekt = {
        "Name": "Adam",
        "Surname" : "Mickiewicz",
        "Sname" : "A.Mickiewicz"
    }

    $('#PostButton').click(function () {
        $.ajax({
            url: 'http://localhost:20952/api/Authors',
            type: 'POST', //GET, PUT, DELETE
            data: nobiekt,
            success: function (_data) {
                alert(JSON.stringify(_data));
            },
            error: function (e) {
                allert(e.message);
            }
        });
    });

    var nobiekt2 = {
        "Id" : "3",
        "Name": "Test",
        "Surname": "Przykladowski",
        "Sname": "T.Przykladowski"
    }

    $('#PutButton').click(function () {
        $.ajax({
            url: 'http://localhost:20952/api/Authors/3',
            type: 'PUT', //GET, POST, DELETE
            data: nobiekt2,
            success: function (_data) {
                alert(JSON.stringify(_data));
            },
            error: function (e) {
                alert(e.message);
            }
        });
    });

    $('#DeleteButton').click(function () {
        $.ajax({
            url: 'http://localhost:20952/api/Authors/6',
            type: 'DELETE', //GET, POST, PUT
            success: function (_data) {
                alert(JSON.stringify(_data));
            },
            error: function (e) {
                allert(e.message);
            }
        });
    });

});


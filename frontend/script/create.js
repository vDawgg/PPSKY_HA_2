$('document').ready(function (){
    $('form').submit(function(e) {

        e.preventDefault();

        let text = $('#editToDo').val()
        let date = $('#deadline').val()
        let progress = $('#progressInPercent').val()

        let todo = JSON.stringify({
            "id": Math.random()*10000,
            "text": text,
            "date": date,
            "progress": progress
        });

        console.log(todo)

        $.ajax({
            type: "POST",
            url: "http://0.0.0.0:8080/todo",
            crossDomain: true,
            data: todo,
            dataType: "json",
            contentType: 'application/json',
            success: function (response) {
                console.log("Response: " + response);
            },
            error: function (xhr, textStatus, err) {
                console.log(xhr.status + ";" + xhr.statusText)
                console.log("An error occurred: " + textStatus + ", " + err)
            }
        });
    });
});

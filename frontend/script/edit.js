  $('document').ready(function (element){
     
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    $.ajax({
        url: `http://localhost:8080/todo?id=${id}`,
        type: "GET",
        crossDomain: true,
        success: function (response){
            console.log(response);
            $('#editToDo').val(response.text)
            $('#deadline').val(response.date)
            $('#progressInPercent').val(response.progress)
        },
        error: function (xhr, status){
            console.log("Error: "+xhr.status)
        }
    })


    $('form').submit(function(e) {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        e.preventDefault();

        let text = $('#editToDo').val()
        let date = $('#deadline').val()
        let progress = $('#progressInPercent').val()

        let todo = JSON.stringify({
            id,
            text,
            date,
            progress
        });

        console.log(todo)

        $.ajax({
            type: "POST",
            url: "http://0.0.0.0:8080/edit",
            crossDomain: true,
            data: todo,
            dataType: "json",
            contentType: 'application/json',
            success: function (response) {
                console.log("Response: " + response);
                alert("Successfully edited")
            },
            error: function (xhr, textStatus, err) {
                console.log(xhr.status + ";" + xhr.statusText)
                console.log("An error occurred: " + textStatus + ", " + err)
            }
        });
    });
});

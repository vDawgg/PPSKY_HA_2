$(document).ready(function () {
  $.ajax({
      url: "http://localhost:8080/allTodos",
      type: "GET",
      crossDomain: true,
      success: function (response){
          console.log(response);
          for(let i=0; i<response.length; i++) {
              addTodos(response[i]);
          }
      },
      error: function (xhr, status){
          console.log("Error: "+xhr.status)
      }
      })
})

function addTodos(r) {
    $("#todos").find('tbody')
        .append($('<tr>')
            .append($('<th>')
                .attr('scope', 'row')
                .attr('class', 'col-auto d-none d-sm-table-cell')
                .text(r.id)
            )
            .append($('<td>')
                .attr('class', 'text-break')
                .text(r.text)
            )
            .append($('<td>')
                .attr('class', 'col-auto')
                .append($('<time>')
                    .text(r.date)
                )
            )
            .append($('<td>')
                .attr('class', 'col-auto')
                .text(r.progress+"%")
            )
            .append($('<td>')
                .attr('class', 'col-auto')
                .append($('<div>')
                    .attr('class', 'btn-group-vertical d-inline-flex d-sm-none')
                    .attr('role', 'group')
                    .append($('<a>')
                        .attr('class', 'btn btn-primary')
                        .attr('href', 'edit.html')
                        .append($('<i>')
                            .attr('class', 'bi bi-pen')
                        )
                    )
                    .append($('<a>')
                        .attr('class', 'btn btn-danger')
                        //TODO: Add functionality for deleting the todo
                        .append($('<i>')
                            .attr('class', 'bi bi-trash')
                        )
                    )
                )
                .append($('<div>')
                    .attr('class', 'btn-group d-none d-sm-inline-flex')
                    .attr('role', 'group')
                    .append($('<a>')
                        .attr('class', 'btn btn-primary')
                        .attr('href', 'edit.html')
                        .append($('<i>')
                            .attr('class', 'bi bi-pen')
                        )
                    )
                    .append($('<a>')
                        .attr('class', 'btn btn-danger')
                        //TODO: Add functionality for deleting the todo
                        .append($('<i>')
                            .attr('class', 'bi bi-trash')
                        )
                    )
                )
            )
        );
}
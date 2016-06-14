$(document).ready(function() {
    $('form').submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        console.log("form was submitted!");

        $.ajax({
            type: 'POST',
            url: $(this).attr('action') + '/api/v1/postData',
            contentType: 'application/json',
            data: JSON.stringify($(this).serializeJSON()),
            success: function(data, textStatus, jqXHR) {
                $('#id_post_result').html(data.message);
            }
        })
    });

    $('#id_get_data').on('click', function(event) {
        console.log("button was clicked!");

        $.ajax({
            type: 'GET',
            url: $('form').attr('action') + '/api/v1/getData',
            contentType: 'application/json',
            success: function(data, textStatus, jqXHR) {
                var resultsTable = $('#id_results');
                resultsTable.empty();
                resultsTable.append('<tr><th>Person</th><th>Color</th></tr>');
                for (var i = 0; i < data.length; i++) {
                    resultsTable.append('<tr><td>' + data[i].name + '</td>' +
                        '<td>' + data[i].color + '</td></tr>');
                }
            }
        })
    });
});

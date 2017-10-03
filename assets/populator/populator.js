$.getJSON('assets/populator/populator.js', function(data) {
    $.each(data, function(index, element) {
        $('body').append($('<div>', {
            text: message.text
        }));
    });
});

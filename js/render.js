function render_actions() {
    var $actions = $('#actions');
    $actions.html('');
    $(player.actions).each(function(i, el) {
        var $action;
        if ((playerSupport >= el.supportNeeded) && el.isUnlocked) {
            $actions.append('<button class="btn btn-primary">' + el.text + '</button>');
        }
    });
}



$(function() {
    render_actions();

    $('#actions').on('click', '.btn', function(e) {
        e.preventDefault();
        alert($(this).text());
    });

});
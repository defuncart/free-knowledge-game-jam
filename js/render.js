function render_actions() {
    var $actions = $('#actions');
    $actions.html('');
    $(player.actions).each(function(i, el) {
        var $action;
        if ((playerSupport >= el.supportNeeded) && el.isUnlocked) {
            $actions.append('<img alt="" title="' + el.text + '" src="img/icon_' + el.id + '.png" data-id="' + el.id + '" />');
        }
    });
}

function update_map(region_id, player_support) {
    var $county = $('.county-' + region_id).hide();
    if (player_support < 45) {
        // color red
        $county.filter('.map-layer-failure').show();
    } else if (player_support > 55) {
        // color green
        $county.filter('.map-layer-success').show();
    } else {
        // color brown - default
    }
}

function update_progress(player_support) {
    $('#progress_bar').css('width', player_support + '%');
}

function random_progress() {  // just for testing purposes
    update_progress(Math.floor((Math.random() * 100)));
    setTimeout(random_progress, 1000);
}

function random_coloring() {  // just for testing purposes
    $(counties).each(function(i, el) {
        update_map(el.id, Math.floor((Math.random() * 100)));
    });
    setTimeout(random_coloring, 1000);
}


$(function() {
    render_actions();

    $('#actions').on('click', 'img', function(e) {
        e.preventDefault();
        alert($(this).data('id'));
    });    
    
    // test colouring and progress
    random_coloring();
    random_progress();
    $('#main-container').removeClass('hidden');
});

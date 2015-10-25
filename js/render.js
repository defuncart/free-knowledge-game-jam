var gameEngine = new GameEngine();

var actionMap = {};
$(player.actions).each(function(i, el) {
        actionMap[el.id] = el;
});


function render_actions() {
    var $actions = $('#actions');
    $actions.html('');
    $(player.actions).each(function(i, el) {
        var $action;
        if ((playerSupport >= el.supportNeeded) && el.isUnlocked) {
            $actions.append('<img alt="" class="active" title="' + el.text + '" src="img/actions/icon_' + el.id + '.png" data-id="' + el.id + '" />');
        }
        else
        {
            $actions.append('<img alt="" title="' + el.text + '" src="img/actions_disabled/icon_' + el.id + '_disabled.png" data-id="' + el.id + '" />');
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

    $('#actions').on('click', 'img.active', function(e) {
        // e.preventDefault();
        // alert($(this).data('id'));

        var action = actionMap[$(this).data('id')];

        if( action.isGlobal )
        {
            bootbox.dialog({
                message: "Would you like to proceed?",
                title: action.text,
                buttons:
                {
                    no:
                    {
                        label: "no",
                    },
                    yes:
                    {
                        label: "yes",
                        callback: function()
                        {
                            console.log("yes");
                            // player.recruits.push( recruit );
                            // recruit.ability();

                            gameEngine.playerGameMove(action);  
                        }
                    }
                }
            }); 
        }
        else
        {
            bootbox.dialog({
                message: action.message,
                title: action.text,
                buttons:
                {
                    county1:
                    {
                        label: '<img src="'+counties[0].icon+'"/>',
                        callback: function()
                        {
                            gameEngine.playerGameMove(action, counties[0]);
                        }
                    },
                    county2:
                    {
                        label: '<img src="'+counties[1].icon+'"/>',
                        callback: function()
                        {
                            gameEngine.playerGameMove(action, counties[1]);
                        }
                    },
                    county3:
                    {
                        label: '<img src="'+counties[2].icon+'"/>',
                        callback: function()
                        {
                            gameEngine.playerGameMove(action, counties[2]);
                        }
                    },
                    county4:
                    {
                        label: '<img src="'+counties[3].icon+'"/>',
                        callback: function()
                        {
                            gameEngine.playerGameMove(action, counties[3]);
                        }
                    },
                    county5:
                    {
                        label: '<img src="'+counties[4].icon+'"/>',
                        callback: function()
                        {
                            gameEngine.playerGameMove(action, counties[4]);
                        }
                    },
                    county6:
                    {
                        label: '<img src="'+counties[5].icon+'"/>',
                        callback: function()
                        {
                            gameEngine.playerGameMove(action, counties[5]);
                        }
                    },
                    county7:
                    {
                        label: '<img src="'+counties[6].icon+'"/>',
                        callback: function()
                        {
                            gameEngine.playerGameMove(action, counties[6]);
                        }
                    },
                    county8:
                    {
                        label: '<img src="'+counties[7].icon+'"/>',
                        callback: function()
                        {
                            gameEngine.playerGameMove(action, counties[7]);
                        }
                    }
                }
            });
        }

    });  

  
    
    // test colouring and progress
    random_coloring();
    random_progress();
});

function myFunction()
{
    console.log("here");
}

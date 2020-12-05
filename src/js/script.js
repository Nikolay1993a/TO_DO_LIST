$(document).ready(function() {
    'use strict';

    $('.input').on('keyup', function(e) {
        if (e.keyCode == 13 && $('.input').val() != '') {
            
            let $taskContent = $('<p class="taskContent"contenteditable="true"></p>').text($('.input').val());
            let $task = $('<div class="task"></div>').append($taskContent)
            let $del = $('<i class="fa fa-close"></i>').on('click', function() {
                const p = $(this).parent();
                p.fadeOut(function() {
                    p.remove();
                });
            });
            let $comp =$('<i class="fa fa-check-square"></i>').on('click', function() {
                const p = $(this).parent();
                const c = $(this);
                $taskContent.css('text-decoration', 'line-through');
                
                c.fadeOut(300, function() {
                    this.remove();
                });
                
            });

            $task.append($del, $comp);
            $('.allTasks').append($task);


            $('.input').val('');
        }
    });

});
/**
 * Success Toast:
 * Icon: fa-check
 * Color: #27ae60 (Green)

 * Error Toast:
 * Icon: fa-xmark
 * Color: #c0392b (Red)

 * Warning Toast:
 * Icon: fa-triangle-exclamation
 * Color: #f39c12 (Yellow/Orange)

 * Info Toast:
 * Icon: fa-info
 * Color: #2980b9 (Blue)
 * */
jQuery(document).ready(function ($) {
    window.toastCounter = 1;

    if ($('.toasts').length === 0) {
        $('body').append('<div class="toasts"></div>');
    }

    if ($('.master-toast-notification').length === 0) {
        $('body').append(`
            <div class="master-toast-notification hide-toast">
                <div class="toast-content">
                    <div class="toast-icon">
                        <i class="fa-solid"></i>
                    </div>
                    <div class="toast-msg"></div>
                </div>
                <div class="toast-progress">
                    <div class="toast-progress-bar"></div>
                </div>
            </div>
        `);
    }

    window.displayToastNotification = function (msg, icon, icon_color, animation) {
        const class_name = 'toast-' + window.toastCounter;
        let master_toast_notification = $('.master-toast-notification');
        let new_node;

        new_node = master_toast_notification.clone().appendTo('.toasts').addClass(class_name + ' toast-notification').removeClass('master-toast-notification');
        new_node.find('.toast-msg').text(msg);
        new_node.find('.toast-icon i').addClass(icon);
        new_node.find('.toast-icon').addClass('wiggle-me').css('background-color', icon_color);
        new_node.removeClass('hide-toast').addClass(animation);
        setTimeout(function () {
            new_node.remove();
        }, 3800);
        window.toastCounter++;
    }
});

let previewBox          = $('.preview-box');
let msgcontainer        = $('#msg-container');
let clearBtn            = $('#clear-img');
let clearBtnContainer   = $('.clear-img-container');



clearBtn.click(function (e) {
    previewBox.css('background', 'url()');
    previewBox.attr('href', '');
    clearBtnContainer.hide();
    msgcontainer.show();
});

/**
 * @param ev
 *
 * This method prevents the redirect to the image location after the drop
 */
function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * @param e
 * @returns {boolean}
 *
 * This method is used to render the image after a drop
 */
function drop(e) {
    e.preventDefault();
    var dt    = e.dataTransfer;
    var files = dt.files;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();
        reader.onload = function(e) {
            let r = this.result;
            displayImg(r);
        };

        reader.readAsDataURL(file);
    }
    return false;

}

/**
 * @param imgPath
 *
 * This method takes the image path and updates the div container to display it
 */

function displayImg(imgPath) {

    if(imgPath.length > 0) {
        previewBox.css('background', 'url('+imgPath+')');
        previewBox.attr('href', imgPath);
    }

    clearBtnContainer.show();
    msgcontainer.hide();
}
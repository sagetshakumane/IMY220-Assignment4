/* Sange Tshakumane 21479748 */

$('.messages').addClass('row');

function isYouTubeLink(text) {
    // Regular expression to match YouTube video URLs
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([a-zA-Z0-9_-]+)/;
    return text.match(youtubeRegex);
}

//$("[class~='submit']").on('click', function() {

$("button#left").on('click', function() {

    let message = $('#message').val();    //var for the message

    //"if this value is empty, then a message should NOT be added"
    if (message.trim().length > 0) {    //.trim() removes all whitespaces... if there's a bunch of spaces = still empty
        const messageParts = message.split(" ");    //split message at the spaces... that way link is seperated from the other text... returns array of substrings
        const messageWithLinks = messageParts.map((part) => {   //loop through messageParts with the map() func then call the isYoutubeLink() func on each index... so i can have an iframe for each link (allows multiple links)
            if (isYouTubeLink(part)) {  //if is a link create an iframe
                return part + `<iframe width="100%" height="315" src="${part.replace(  //embed it using the format of how to embed it
                    "watch?v=",
                    "embed/"
                )}" frameborder="0" allowfullscreen></iframe>`; 
            } else {
                return part;
            }
        });

        const modifiedMessage = messageWithLinks.join(" ");

        $("[class^='messages']").append(
            $('<div></div>', {
                html: modifiedMessage,    //inner html of the div
                class: 'col-4 offset-md-4 mb-2 rounded left-button'     //"take up a third of the width of the row and it will also need an offset of a third of the width of the row. It must be rounded, and it must also have a bottom margin.
            })
        );

        $('#message').val('');  //clear the textarea
    }
})

$("button#right").on('click', function() {

    let message = $('#message').val();    //var for the message

    //"if this value is empty, then a message should NOT be added"
    if (message.trim().length > 0) {    //.trim() removes all whitespaces... if there's a bunch of spaces = still empty
        const messageParts = message.split(" ");    //split message at the spaces... that way link is seperated from the other text... returns array of substrings
        const messageWithLinks = messageParts.map((part) => {   //loop through messageParts with the map() func then call the isYoutubeLink() func on each index... so i can have an iframe for each link (allows multiple links)
            if (isYouTubeLink(part)) {  //if is a link create an iframe
                return part + `<iframe width="100%" height="315" src="${part.replace(  //embed it using the format of how to embed it
                    "watch?v=",
                    "embed/"
                )}" frameborder="0" allowfullscreen></iframe>`; 
            } else {
                return part;
            }
        });

        const modifiedMessage = messageWithLinks.join(" ");

        $("[class^='messages']").append(
            $('<div></div>', {
                html: modifiedMessage,
                class: 'col-4 offset-md-4 mb-2 rounded right-button'     //"take up a third of the width of the row and it will also need an offset of a third of the width of the row. It must be rounded, and it must also have a bottom margin.
            })
        );

        $('#message').val('');  //clear the textarea
    }
})
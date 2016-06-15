$('iframe').load( function() {
    $('iframe').contents().find("head")
      .append($("<link rel='stylesheet' href='CSS/main.css''>"));
    console.log('That worked');
});

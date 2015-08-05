var timeUp = new Countdown(); 
timeUp = new Countdown(timeUp.getFullYear() + 1, 1 - 1, 1); 
$('#defaultCountdown').countdown({until: timeUp}); 
 
$('#removeCountdown').click(function() { 
    var destroy = $(this).text() === 'Remove'; 
    $(this).text(destroy ? 'Re-attach' : 'Remove'); 
    $('#defaultCountdown').countdown(destroy ? 'destroy' : {until: timeUp}); 
});
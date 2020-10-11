//Make sure the html is loaded before running script
$(document).ready(function() {
    // $('.saveBtn').on('click', function() {
    //     alert('You clicked me!');
    // })

    const m = moment();
    let dateDisplay = m.format('dddd, MMMM Do YYYY');
    let currentHour = m.format('H');

    $('#currentDay').text(dateDisplay);


    if (currentHour > 9) {
        $('#hour-9').addClass('past');
    } else if (currentHour == 9) {
        $('#hour-9').addClass('present');
    } else if (currentHour < 9) {
        $('#hour-9').addClass('future');
    }

    if (currentHour > 10) {
        $('#hour-10').addClass('past');
    } else if (currentHour == 10) {
        $('#hour-10').addClass('present');
    } else if (currentHour < 10) {
        $('#hour-10').addClass('future');
    }
    
    if (currentHour > 11) {
        $('#hour-11').addClass('past');
    } else if (currentHour == 11) {
        $('#hour-11').addClass('present');
    } else if (currentHour < 11) {
        $('#hour-11').addClass('future');
    }
    
    if (currentHour > 12) {
        $('#hour-12').addClass('past');
    } else if (currentHour == 12) {
        $('#hour-12').addClass('present');
    } else if (currentHour < 12) {
        $('#hour-12').addClass('future');
    }
    
    if (currentHour > 13) {
        $('#hour-1').addClass('past');
    } else if (currentHour == 13) {
        $('#hour-1').addClass('present');
    } else if (currentHour < 13) {
        $('#hour-1').addClass('future');
    }
    
    if (currentHour > 14) {
        $('#hour-2').addClass('past');
    } else if (currentHour == 14) {
        $('#hour-2').addClass('present');
    } else if (currentHour < 14) {
        $('#hour-2').addClass('future');
    }
    
    if (currentHour > 15) {
        $('#hour-3').addClass('past');
    } else if (currentHour == 15) {
        $('#hour-3').addClass('present');
    } else if (currentHour < 15) {
        $('#hour-3').addClass('future');
    }
    
    if (currentHour > 16) {
        $('#hour-4').addClass('past');
    } else if (currentHour == 16) {
        $('#hour-4').addClass('present');
    } else if (currentHour < 16) {
        $('#hour-4').addClass('future');
    }
    
    if (currentHour > 17) {
        $('#hour-5').addClass('past');
    } else if (currentHour == 17) {
        $('#hour-5').addClass('present');
    } else if (currentHour < 17) {
        $('#hour-5').addClass('future');
    }

    // if (currentHour = 13) {
    //     $('#hour-1').removeClass('past');
    //     $('#hour-1').removeClass('future');
    //     $('#hour-1').addClass('present');
    // } else if (currentHour < 13) {
    //     $('#hour-1').removeClass('past');
    //     $('#hour-1').removeClass('present');
    //     $('#hour-1').addClass('future');
    // } else if (currentHour > 13) {
    //     $('#hour-1').removeClass('present');
    //     $('#hour-1').removeClass('future');
    //     $('#hour-1').addClass('past');
    // }

    // if (currentHour = 9) {
    //     $('#hour-9').removeClass('past');
    //     $('#hour-9').removeClass('future');
    //     $('#hour-1').addClass('present');
    // } else if (currentHour < 9) {
    //     $('#hour-9').removeClass('past');
    //     $('#hour-9').removeClass('present');
    //     $('#hour-9').addClass('future');
    // } else if (currentHour > 9) {
    //     $('#hour-9').removeClass('present');
    //     $('#hour-9').removeClass('future');
    //     $('#hour-9').addClass('past');
    // }

    $('.saveBtn').on('click', function() {
        const value9 = $('#hour-9').val();
        const value10 = $('#hour-10').val();
        const value11 = $('#hour-11').val();
        const value12 = $('#hour-12').val();
        const value1 = $('#hour-1').val();
        const value2 = $('#hour-2').val();
        const value3 = $('#hour-3').val();
        const value4 = $('#hour-4').val();
        const value5 = $('#hour-5').val();

        
        localStorage.setItem('hour9', value9);
        localStorage.setItem('hour10', value10);
        localStorage.setItem('hour11', value11);
        localStorage.setItem('hour12', value12);
        localStorage.setItem('hour1', value1);
        localStorage.setItem('hour2', value2);
        localStorage.setItem('hour3', value3);
        localStorage.setItem('hour4', value4);
        localStorage.setItem('hour5', value5); 

        location.reload();
    });

    $('#hour-9').text(localStorage.getItem('hour9'));
    $('#hour-10').text(localStorage.getItem('hour10'));
    $('#hour-11').text(localStorage.getItem('hour11'));
    $('#hour-12').text(localStorage.getItem('hour12'));
    $('#hour-1').text(localStorage.getItem('hour1'));
    $('#hour-2').text(localStorage.getItem('hour2'));
    $('#hour-3').text(localStorage.getItem('hour3'));
    $('#hour-4').text(localStorage.getItem('hour4'));
    $('#hour-5').text(localStorage.getItem('hour5'));
    
    








});
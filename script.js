//Make sure the html is loaded before running script
$(document).ready(function () {

    //Time Variables
    const m = moment();
    let dateDisplay = m.format('dddd, MMMM Do YYYY');
    let currentHour = parseInt(m.format('H'));

    //Display Current Date
    $('#currentDay').text(dateDisplay);

    //Color Coding IF/ELSE Statements
    function updateTime() {
        $('.description').each(function () {
            var textAreaHour = parseInt($(this).attr('id').split('-')[1])
            if (currentHour > textAreaHour) {
                $(this).addClass('past');
            } else if (currentHour === textAreaHour) {
                $(this).addClass('present');
            } else if (currentHour < textAreaHour) {
                $(this).addClass('future');
            }
        })
    }
    updateTime()

    //Save All Text Fields Function
    $('.saveBtn').on('click', function () {
        
        //Setting Text Field Variables
        const value9 = $('#hour-9').val();
        const value10 = $('#hour-10').val();
        const value11 = $('#hour-11').val();
        const value12 = $('#hour-12').val();
        const value1 = $('#hour-1').val();
        const value2 = $('#hour-2').val();
        const value3 = $('#hour-3').val();
        const value4 = $('#hour-4').val();
        const value5 = $('#hour-5').val();

        //Save Text Field Values to localStorage
        localStorage.setItem('hour9', value9);
        localStorage.setItem('hour10', value10);
        localStorage.setItem('hour11', value11);
        localStorage.setItem('hour12', value12);
        localStorage.setItem('hour1', value1);
        localStorage.setItem('hour2', value2);
        localStorage.setItem('hour3', value3);
        localStorage.setItem('hour4', value4);
        localStorage.setItem('hour5', value5);

        //Reload Page
        location.reload();
    });

    //Display Saved Text Field Values In Their Saved Locations
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
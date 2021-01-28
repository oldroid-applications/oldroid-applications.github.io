// Time Sheet Demo JS File
// Original Author: Mauricio Giraldo <mgiraldo@gmail.com>
// Stolen by Adrian Rivera (a.k.a. rarebride) <riveraadrian672@gmail.com>

var number_of_rows = 3;
var total_hours = 0;
var total_cost = 0;

function re_compute()
{
    var hour_cost = document.getElementById("hour_cost").value;
    var extra_cost = document.getElementById("extra_hour_cost").value;
    if(hour_cost && hour_cost)
    {
        // Move across available rows
        for(i = 1 ; i <= number_of_rows; i++)
        {
            if(document.getElementById("start_" + i).value != undefined && document.getElementById("end_" + i).value != undefined)
            var hour_1 = document.getElementById("start_" + i).value;
            var hour_2 = document.getElementById("end_" + i).value;


            if(hour_2 < hour_1)
            {
                // Only calculate if the times are correct
                //alert("Hours in row " + i + " are not correct.");
            }
            else
            {
                // Raw-Basic hour calculation, no minutes involved
                var hours = hour_2.split(':')[0] - hour_1.split(':')[0];
                document.getElementById("hours_" + i).value = hours;
                // Keep the total hours
                total_hours += hours;
                document.getElementById("total_hours").innerHTML = "$" + total_hours;
                if(document.getElementById("type_" + i).value == "Normal")
                {
                    // Compute normal hours
                    document.getElementById("cost_" + i).innerHTML = "$" + hour_cost;
                    document.getElementById("total_" + i).innerHTML = "$" + (hour_cost*hours);
                    total_cost += hour_cost*hours;
                }
                else
                {
                    // Compute extra hours
                    document.getElementById("cost_" + i).innerHTML = "$" + extra_cost;
                    document.getElementById("total_" + i).innerHTML = "$" + (extra_cost*hours);
                    total_cost += extra_cost*hours;
                }
                document.getElementById("total_cost").innerHTML = "$" + total_cost;
            }
        }
    }
    else
    {
        alert("Please type the cost of the normal and extra hours.");
    }
}

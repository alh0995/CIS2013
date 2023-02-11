var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter your age"));
     floatDays = floatAge *365.25;
     floatMonths = floatAge * 12;
     intWeeks = floatDays / 7;
     intFortnights = floatDays / 14;
     alert("Your age in years is " + floatAge + "." + "Your age in days is " + floatDays + "." + "Your age in Months is " + floatMonths + "." + "Your age in Weeks is " + intWeeks.toFixed(2) + "." + "Your age in Fortnights is " + intFortnights.toFixed(2) + ".");

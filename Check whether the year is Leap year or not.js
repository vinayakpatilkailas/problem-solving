var Check_Leap = (year) => 
{
  const Feb = new Date(year, 1, 29).getDate() === 29;
    if (Feb) {
        return ("Leap Year");
    } else {
        return ("Non Leap Year");
    }
  

};
 

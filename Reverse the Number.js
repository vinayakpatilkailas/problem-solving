var Reverse_Number = (N) => 
{
   return (parseFloat(N.toString().split('').reverse().join('')) * Math.sign(N));

};
 

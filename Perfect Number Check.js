var Perfect_Check = (N) => 
{
       var temp = 0;
   for(var i=1;i<=N/2;i++)
     {
         if(N%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === N && temp !== 0)
        {
       return "YES";
        } 
     else
        {
       return "NO";
        }   
        
};
 

var Minimal_Angle = (h, m) => 
{
     const minuteAngle = m * 6;
    const hourAngle = (h * 30) + (m * 0.5);
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);      
};
 

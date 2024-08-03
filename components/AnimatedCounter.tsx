'use client';

import CountUp from "react-countup";

function AnimatedCounter({amount}:{amount:number}) {
  return (
    <div className="w-full">
       <CountUp 
      decimals={2}
       decimal="."
       prefix="&#8377;"
       end={amount} />
    </div>
  )
}

export default AnimatedCounter
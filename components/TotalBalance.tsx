import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'
import AnimatedCounter from './AnimatedCounter'
import DoghnutChart from './DoghnutChart'
const TotalBalance = ({
    accounts = [], totalBanks, totalCurrentBalance
}:TotlaBalanceBoxProps)=> {
  return (
   <section className="total-balance">
    <div className="total-balance-chart">
       <DoghnutChart accounts={accounts}/>
    </div>
    <div className="flex flex-col gap-6">
        <div className="header-2">
        Bank Accounts: {totalBanks} 
        </div>
        <div className="flex flex-col gap-2">
            <p className="total-balance-label">
                Total Current balance
            </p>
            <div className="total-balance-amount flex-center gap-2">
        <AnimatedCounter amount={totalCurrentBalance}/>
              {/* {formatAmount(totalCurrentBalance)}   */}
            </div>
        </div>
    </div>
   </section>
  )
}

export default TotalBalance
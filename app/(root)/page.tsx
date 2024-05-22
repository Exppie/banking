import RightSidebar from '@/components/RightSidebar';
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Kennedy', lastName: 'Reis', email: 'kennedy@reis.com'};
  
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type = "greeting"
            title = "Bem vindo,"
            user = {loggedIn?.firstName || 'Guest'}
            subtext = 'Acesse suas contas e transações de maneira eficiente.'
          />

          <TotalBalanceBox
            accounts= {[]}
            totalBanks = {1}
            totalCurrentBalance={5500.85}
          />
        </header>

        TRANSAÇÕES RECENTES
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions = {[]}
        banks = {[{currentBalance: 123.78},{currentBalance: 500.50}]}
      />
    </section>
  )
}

export default Home
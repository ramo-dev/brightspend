import React from 'react'
import Navbar from '../components/Navigation/Navigation'
import Transaction from '../components/Transaction/Transaction'

const Dashboard = () => {
  return (
    <section>
    <Navbar />
    <div style={{ padding: "5rem 1rem" }}>
      <Transaction />
    </div>
  </section>
  )
}

export default Dashboard
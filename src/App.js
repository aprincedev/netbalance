import React from 'react'
import Header from './components/header/Header'
import RebalanceForm from './components/rebalanceform/RebalanceForm'
import ErrorMsg from './components/errormsg/ErrorMsg' /*eventually will be imported in main content component*/
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <RebalanceForm />
      <ErrorMsg type="Error" message="Fund Allocations should total 100% for each group"/>
      <Footer />
    </div>
  );
}

export default App;

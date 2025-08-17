import React from 'react'
import Hero from './components/hero/Hero'
import SignIn from './components/register/SignIn'
import SignUp from './components/register/SignUp'
import PageNotFound from './components/pages/PageNotFound'
import Playground from './components/pages/Playground'

const App = () => {
  return (
    <div>
    <PageNotFound/>
    <SignIn/>
    <SignUp/>
    <Hero/>
    <Playground/>
    </div>
  )
}
export default App  
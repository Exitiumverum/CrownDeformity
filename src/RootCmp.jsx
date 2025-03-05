import { useEffect, useRef, useState } from 'react'
import { Routes, Route } from 'react-router'

// import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
// import { AdminIndex } from './pages/AdminIndex.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/Home.jsx'
import { Footer } from './cmps/Footer.jsx'

export function RootCmp() {
  return (
    <div className='main-container main-layout'>
      <AppHeader />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

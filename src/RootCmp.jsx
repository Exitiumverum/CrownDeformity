import { useEffect, useRef, useState } from 'react'
import { Routes, Route } from 'react-router'

// import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
// import { AdminIndex } from './pages/AdminIndex.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/Home.jsx'
import { Footer } from './cmps/Footer.jsx'
// import { AppFooter } from './cmps/AppFooter'
// import { UserMsg } from './cmps/UserMsg.jsx'
// import { SideBar } from './cmps/SideBar.jsx'
// import HiddenReactPlayer from './cmps/HiddenReactPlayer'
// import { playerSongEndedEvent } from './store/actions/player.actions.js'

// import { Login } from './pages/Login.jsx'
// import { StationIndex } from './pages/StationIndex.jsx'
// import { StationDetails } from './pages/StationDetails.jsx'
// import { StationExplore } from './pages/StationExplore.jsx'
// // import { StationSearch } from './pages/StationSearch.jsx'

// // Init db
// import {} from './services/station'
// import {} from './services/song'
// import {} from './services/youtube-api.service.js'
// import { login } from './store/actions/user.actions.js'
// import { loadStations, setLikedSongs } from './store/actions/station.actions.js'

export function RootCmp() {
  // const playerRef = useRef(null)
  // const mainRef = useRef(null)

  // const handleSongEnded = () => {
  //   playerSongEndedEvent()
  // }

  useEffect(() => {
    // Connect default guest
    // login({ username: 'guest', password: 'guest' })
  }, [])

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

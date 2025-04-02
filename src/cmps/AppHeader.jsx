import { useEffect, useState } from 'react'
import Logo from '../assets/Branding/logo1.svg'
// import Logo from '/src/assets/Branding/logo1.svg'

export function AppHeader({ style }) {
  return (
    <div className='app-header' style={style}>
      <img className='logo' src={Logo} alt='logo' />
    </div>
  )
}

import Logo from '../assets/Branding/logo1.svg'
// import Logo from '/src/assets/Branding/logo1.svg'

export function AppHeader() {
  return (
    <div className='app-header'>
      {/* <div className='left-links'>
        <a href='#'>Home</a>
        <a href='#'>Merch</a>
      </div> */}
      <img className='logo' src={Logo} alt='logo' />
      {/* <div className='right-links'>
        <a href='#'>Concerts</a>
        <a href='#'>Releases</a>
      </div> */}
    </div>
  )
}

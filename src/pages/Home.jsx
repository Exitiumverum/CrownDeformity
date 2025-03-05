import CoverArt from '../assets/Branding/BlackenedSkiesCover.png'
import Spotify from '../assets/Branding/spotify-icon.svg'
import AppleMusic from '../assets/Branding/apple-music-icon.svg'
import YouTube from '../assets/Branding/youtube-music-icon.svg'
import Img from '../assets/Branding/IMG_2184.jpg'
import Ticket from '../assets/Branding/Tickets.svg'

export function Home() {
  return (
    <div className='home-page'>
      <h1>Blackened Skies</h1>
      <h3>Our debut single</h3>
      <img className='cover-art' src={CoverArt} alt='Blackened skies cover' />
      <h3>Listen on:</h3>
      <div className='single-links'>
        <button className='spotify btn'>
          <img src={Spotify} alt='Spotify' />
          <h4>Spotify</h4>
        </button>
        <button className='apple-music btn'>
          <img src={AppleMusic} alt='Apple Music' />
          <h4>Apple Music</h4>
        </button>
        <button className='youtube btn'>
          <img src={YouTube} alt='YouTube' />
          <h4>YouTube</h4>
        </button>
      </div>
      <hr className='divider' />

      <h2>Come see us live!</h2>
      <img className='concert-img' src={Img} alt='Syrup haifa concert' />
      <button
        onClick={() => window.open('https://www.eventer.co.il/come7', '_blank')}
        className='ticket-btn'
      >
        <img className='ticket-img' src={Ticket} alt='Ticket' />
        Buy tickets
      </button>
      <hr className='divider' />
    </div>
  )
}

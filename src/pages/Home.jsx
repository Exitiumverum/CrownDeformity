import { useEffect, useState } from 'react'
import CoverArt from '../assets/Branding/BlackenedSkiesCover.png'
import Spotify from '../assets/Branding/spotify-icon.svg'
import AppleMusic from '../assets/Branding/apple-music-icon.svg'
import YouTube from '../assets/Branding/youtube-music-icon.svg'
import Img from '../assets/Branding/MakeDeathcoreGreatAgain.png'
import Ticket from '../assets/Branding/tickets.svg'
import { AppHeader } from '../cmps/AppHeader'
import { ReleasesModal } from '../cmps/ReleasesModal'

export function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerStyle = {
    opacity: scrollPosition >= 300 ? 0 : Math.max(0, 1 - scrollPosition / 300),
    visibility: scrollPosition >= 300 ? 'hidden' : 'visible',
  }

  return (
    <>
      <AppHeader style={headerStyle} />
      <ReleasesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className='home-page'>
        <section className='hero-section'>
          <div className='hero-overlay'></div>
          <div className='hero-content'>
            <div className='hero-title-container'>
              <h1 className='hero-title'>Crown Deformity</h1>
              <div className='title-accent'></div>
            </div>
            <p className='hero-subtitle'>
              <span className='accent-text'>Aggressive</span> MySpace Deathcore
              from Tel Aviv
            </p>
            <div className='hero-description'>
              <p className='glitch-text'>
                Bringing back the raw energy and intensity of the MySpace
                deathcore era.
              </p>
              <p className='glitch-text'>
                Based in Tel Aviv, we're here to make deathcore great again.
              </p>
            </div>
            <div className='hero-cta'>
              <button
                className='cta-button'
                onClick={() => setIsModalOpen(true)}
              >
                Listen Now
              </button>
            </div>
          </div>
          <div className='scroll-indicator'>
            <div className='scroll-line'></div>
          </div>
        </section>
        <hr className='divider' />

        <h2>Come see us live!</h2>
        <img
          onClick={() =>
            window.open(
              'https://levontin7.com/events/make-deathcore-great-again/?sd=1747339200&ed=1747346400?sd=1747339200&ed=1747346400',
              '_blank'
            )
          }
          className='concert-img'
          src={Img}
          alt='Make deathcore great again Levontin 7 15.5.2025'
        />
        <button
          onClick={() =>
            window.open(
              'https://levontin7.com/events/make-deathcore-great-again/?sd=1747339200&ed=1747346400?sd=1747339200&ed=1747346400',
              '_blank'
            )
          }
          className='ticket-btn'
        >
          <img className='ticket-img' src={Ticket} alt='Ticket' />
          Buy tickets
        </button>
        <hr className='divider' />
      </div>
    </>
  )
}

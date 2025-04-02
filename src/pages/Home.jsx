import { useEffect, useState } from 'react'
import CoverArt from '../assets/Branding/BlackenedSkiesCover.png'
import Spotify from '../assets/Branding/spotify-icon.svg'
import AppleMusic from '../assets/Branding/apple-music-icon.svg'
import YouTube from '../assets/Branding/youtube-music-icon.svg'
import Img from '../assets/Branding/MakeDeathcoreGreatAgain.png'
import Ticket from '../assets/Branding/tickets.svg'
import { AppHeader } from '../cmps/AppHeader'

export function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)

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
                onClick={() =>
                  window.open(
                    'https://open.spotify.com/album/5JxCimTH6lOODiWwNsQUvw',
                    '_blank'
                  )
                }
              >
                Listen Now
              </button>
            </div>
          </div>
          <div className='scroll-indicator'>
            <div className='scroll-line'></div>
          </div>
        </section>
        <h1>Blackened Skies</h1>
        <h3>Our debut single</h3>
        <img className='cover-art' src={CoverArt} alt='Blackened skies cover' />
        <h3>Listen on:</h3>
        <div className='single-links'>
          <button
            onClick={() =>
              window.open(
                'https://open.spotify.com/album/5JxCimTH6lOODiWwNsQUvw',
                '_blank'
              )
            }
            className='spotify btn'
          >
            <img src={Spotify} alt='Spotify' />
            <h4>Spotify</h4>
          </button>
          <button
            onClick={() =>
              window.open(
                'https://music.apple.com/us/album/blackened-skies-single/1799451085',
                '_blank'
              )
            }
            className='apple-music btn'
          >
            <img src={AppleMusic} alt='Apple Music' />
            <h4>Apple Music</h4>
          </button>
          <button
            onClick={() =>
              window.open(
                'https://www.youtube.com/watch?v=SDdGMV4wBIs',
                '_blank'
              )
            }
            className='youtube btn'
          >
            <img src={YouTube} alt='YouTube' />
            <h4>YouTube</h4>
          </button>
        </div>
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

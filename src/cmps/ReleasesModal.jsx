import { useState } from 'react'
import ReactModal from 'react-modal'
import CoverArt from '../assets/Branding/BlackenedSkiesCover.png'
import Spotify from '../assets/Branding/spotify-icon.svg'
import AppleMusic from '../assets/Branding/apple-music-icon.svg'
import YouTube from '../assets/Branding/youtube-music-icon.svg'
import '../assets/styles/cmps/ReleasesModal.scss'

ReactModal.setAppElement('#root')

export function ReleasesModal({ isOpen, onClose }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='releases-modal'
      overlayClassName='releases-modal-overlay'
    >
      <div className='releases-modal-content'>
        <button className='close-button' onClick={onClose}>
          ×
        </button>
        <h2>Our Releases</h2>
        <div className='releases-grid'>
          <div className='release-card'>
            <img
              src={CoverArt}
              alt='Blackened Skies'
              className='release-cover'
            />
            <div className='release-info'>
              <h3>Blackened Skies</h3>
              <p className='release-date'>2024</p>
              <div className='release-links'>
                <a
                  href='https://open.spotify.com/album/5JxCimTH6lOODiWwNsQUvw'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='stream-link spotify'
                >
                  <img src={Spotify} alt='Spotify' />
                  <span>Spotify</span>
                </a>
                <a
                  href='https://music.apple.com/us/album/blackened-skies-single/1799451085'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='stream-link apple'
                >
                  <img src={AppleMusic} alt='Apple Music' />
                  <span>Apple Music</span>
                </a>
                <a
                  href='https://www.youtube.com/watch?v=SDdGMV4wBIs'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='stream-link youtube'
                >
                  <img src={YouTube} alt='YouTube' />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
          {/* Add more release cards here as needed */}
        </div>
      </div>
    </ReactModal>
  )
}

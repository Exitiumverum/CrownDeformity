import Instagram from '../assets/Social media/instagram.svg'
import Facebook from '../assets/Social media/facebook.svg'
import Youtube from '../assets/Social media/youtube.svg'

export function Footer() {
  return (
    <footer className='footer'>
      <div className='social-links'>
        <a
          href='https://www.instagram.com/syrup_band/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Instagram} alt='Instagram' />
        </a>
        <a
          href='https://www.instagram.com/syrup_band/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Facebook} alt='Facebook' />
        </a>
        <a
          href='https://www.instagram.com/syrup_band/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Youtube} alt='Youtube' />
        </a>
      </div>
      <p>Copyright 2025 - CROWN DEFORMITY</p>
    </footer>
  )
}

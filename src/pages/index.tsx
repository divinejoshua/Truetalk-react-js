import React from 'react'
import '../App.css';
import facebookSvg from "../assets/socials/facebook.svg";
import instagramSvg from "../assets/socials/instagram.svg";
import twitterSvg from "../assets/socials/twitter.svg";
import snapchatSvg from "../assets/socials/snapchat.svg";
import whatsappSvg from "../assets/socials/whatsapp.svg";
import copyLinkSvg from "../assets/hero/copy-link.svg";
import HeaderComponent from '../components/Header'
import MessageList from '../components/MessageList';

export default function HomePage() {
  return (
    <main className='main'>
      {/* Header component  */}
      <HeaderComponent/>

      {/* Hero section  */}
      <section className='hero-section'>
        <div className='hero-images-list flex place-content-center'>
          <img alt="truetalk" src={require("../assets/hero/one.png")} />
          <img alt="truetalk" src={require("../assets/hero/two.png")} />
          <img alt="truetalk" src={require("../assets/hero/three.png")} />
          <img alt="truetalk" src={require("../assets/hero/four.png")} />
        </div>

        <p className='mt-3'>Receive messages from people who care about you</p>

        <div className='hero-social-icons flex place-content-center mt-2'>
          <img alt="truetalk" src={facebookSvg} />
          <img alt="truetalk" src={instagramSvg} />
          <img alt="truetalk" src={twitterSvg} className='twitterSvg' />
          <img alt="truetalk" src={snapchatSvg} />
          <img alt="truetalk" src={whatsappSvg} />
        </div>

        <center>
          <button className='btn flex place-content-center mt-2 bg-default text-white px-7 py-2 rounded-full text-sm drop-shadow'>
            <img alt="truetalk" src={copyLinkSvg} className='mt-1'/> &nbsp;&nbsp;Copy link
          </button>
        </center>
      </section>

      <section className='message-section mt-7 mb-20 px-4'>
        <MessageList/>
      </section>


    </main>
  )
}

import React from 'react'
import '../App.css';
import HeaderComponent from '../components/header'

export default function HomePage() {
  return (
    <main className='main'>
      <HeaderComponent/>

      <section className='hero-section'>
        <p>Receive messages from people who care about you </p>
      </section>
    </main>
  )
}

import { ArrowDown, ArrowUpRight, Bath, BedDouble, CarFront, ChefHat, Dog, MapPin, Tv, Waves, Accessibility } from 'lucide-react';

const features = [
  { icon: BedDouble, label: '3 comfortable bedrooms' },
  { icon: Waves, label: 'Direct beach access' },
  { icon: Dog, label: 'Pets are welcome' },
  { icon: Accessibility, label: 'Paraplegic friendly' },
  { icon: ChefHat, label: 'Fully equipped kitchen' },
  { icon: CarFront, label: 'Ample secure parking' },
  { icon: Tv, label: 'DStv & home comforts' },
  { icon: Bath, label: 'Fully furnished' },
];

const gallery = [
  { src: '/photos/exterior.jpeg', alt: 'SeaFever beach house and garden with the ocean beyond', label: 'The house' },
  { src: '/photos/lounge.jpeg', alt: 'SeaFever sunlit lounge', label: 'Lounge' },
  { src: '/photos/main-bedroom.jpeg', alt: 'SeaFever main bedroom', label: 'Main bedroom' },
  { src: '/photos/kitchen.jpeg', alt: 'SeaFever fully equipped kitchen', label: 'Full kitchen' },
  { src: '/photos/twin-bedroom.jpeg', alt: 'SeaFever twin bedroom', label: 'Twin bedroom' },
  { src: '/photos/patio.jpeg', alt: 'SeaFever covered garden patio', label: 'Covered patio' },
  { src: '/photos/games-room.jpeg', alt: 'SeaFever games room with pool table', label: 'Games room' },
  { src: '/photos/ocean-mural.jpeg', alt: 'Hand-painted ocean mural at SeaFever', label: 'A house with character' },
  { src: '/photos/garden.jpeg', alt: 'SeaFever garden seating area', label: 'Private garden' },
];

export default function Home() {
  return <main>
    <section className="hero" id="home">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="SeaFever home"><span className="brand-mark">S</span><span>SEAFEVER</span></a>
        <div className="nav-links"><a href="#stay">The stay</a><a href="#gallery">Gallery</a><a href="#pets">Pet friendly</a><a href="#location">Location</a></div>
        <a className="nav-cta" href="#booking">Enquire <ArrowUpRight size={17}/></a>
      </nav>
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow"><MapPin size={15}/> Amanzimtoti · KwaZulu-Natal</p>
        <h1>Your beach house.<br/><em>Right on the sand.</em></h1>
        <p className="hero-copy">A relaxed, pet-friendly three-bedroom escape with everything you need—and the Indian Ocean at your doorstep.</p>
        <div className="hero-actions"><a className="button button-light" href="#booking">Plan your stay <ArrowUpRight size={18}/></a><a className="text-link" href="#stay">Discover SeaFever <ArrowDown size={17}/></a></div>
      </div>
      <div className="hero-note"><span>155 Beach Road</span><span>Amanzimtoti, Durban</span></div>
    </section>

    <section className="intro" id="stay">
      <p className="section-kicker">Room to breathe</p>
      <div className="intro-grid"><h2>A proper seaside home, made for easy holidays.</h2><div className="intro-copy"><p>Wake to the sound of the ocean, wander straight onto the beach, and come home to a space that is entirely yours.</p><p>SeaFever is a fully furnished, free-standing self-catering house designed for unhurried family time, salty dogs and long summer evenings.</p></div></div>
    </section>

    <section className="gallery" id="gallery">
      <div className="gallery-heading">
        <div><p className="section-kicker">Take a look around</p><h2>Colourful, comfortable<br/><em>and unmistakably SeaFever.</em></h2></div>
        <p>A laid-back coastal home with generous living spaces, a private garden and plenty of personality.</p>
      </div>
      <div className="gallery-grid">
        {gallery.map((photo, index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={photo.src}>
          <img src={photo.src} alt={photo.alt} loading={index > 1 ? 'lazy' : 'eager'} />
          <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{photo.label}</figcaption>
        </figure>)}
      </div>
    </section>

    <section className="pets" id="pets">
      <div className="pets-photo"><img src="/photos/dogs.jpeg" alt="A happy group of dogs enjoying SeaFever's private garden" loading="lazy" /></div>
      <div className="pets-copy">
        <p className="section-kicker">Four paws welcome</p>
        <h2>Holidays are better with the whole family.</h2>
        <p>SeaFever is proudly pet friendly, with a private garden and the beach just beyond the gate. Bring the dogs along—there’s room for everyone to settle in.</p>
        <span className="pet-badge"><Dog size={18} strokeWidth={1.7}/> Pet-friendly stay</span>
      </div>
    </section>

    <section className="details" id="details">
      <div className="details-heading"><div><p className="section-kicker light">Everything you need</p><h2>Come as you are.<br/>We’ve got the rest.</h2></div></div>
      <div className="feature-grid">{features.map(({icon: Icon, label}, index) => <div className="feature" key={label}><span className="feature-number">{String(index + 1).padStart(2,'0')}</span><Icon size={26} strokeWidth={1.5}/><span>{label}</span></div>)}</div>
    </section>

    <section className="location" id="location">
      <div className="location-card"><p className="section-kicker">Find your way to the sea</p><h2>A beachfront base on Durban’s sunny south coast.</h2><p>155 Beach Road<br/>Amanzimtoti, Durban, 4215<br/>South Africa</p><a href="https://www.google.com/maps/search/?api=1&query=155+Beach+Road+Amanzimtoti+Durban+4215" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={17}/></a></div>
      <div className="location-art" aria-hidden="true"><span className="map-line line-one"/><span className="map-line line-two"/><span className="map-dot"><Waves size={24}/></span><strong>SEA<br/>FEVER</strong></div>
    </section>

    <section className="booking" id="booking"><p className="section-kicker light">Your next escape</p><h2>Sea you soon?</h2><p>Rates, availability and direct booking details are coming next.</p><a className="button button-outline" href="#home">Back to the top <ArrowUpRight size={18}/></a></section>
    <footer><span>SEAFEVER</span><span>Beach house · Amanzimtoti</span><span>Made for slow days by the sea.</span></footer>
  </main>;
}

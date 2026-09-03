import "./App.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1600&q=90";

const BIRYANI_IMAGE =
  "https://images.pexels.com/photos/12737817/pexels-photo-12737817.jpeg?auto=compress&cs=tinysrgb&w=800";

const menuItems = [
  {
    name: "Chicken Biryani",
    image: BIRYANI_IMAGE,
  },
  {
    name: "Mutton Biryani",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Chicken 65",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Paneer Butter Masala",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Veg Fried Rice",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=85",
  },
];

function App() {
  return (
    <div className="page">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="logo-area">
          <div className="logo-circle">SH</div>

          <div>
            <div className="logo-name">SPICE HEAVEN</div>
            <div className="logo-tagline">TASTE OF HOME</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About Us</a>
          <a href="#menu">Menu</a>
          <a href="#reviews">Reviews</a>
          <a href="#location">Location</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#order" className="gold-button nav-button">
          🛍 Order Now
        </a>
      </header>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-copy">

          <div className="gold-label">
            ❧ AUTHENTIC HOME STYLE ❧
          </div>

          <h1>
            Spice Heaven
            <span>Taste of Home</span>
          </h1>

          <div className="gold-line"></div>

          <p>
            Experience the richness of authentic home-style
            cooking, made with love and the finest ingredients.
          </p>

          <a href="#order" className="gold-button">
            🛍 Order Now
          </a>

        </div>

        <div className="hero-photo">
          <img
            src={HERO_IMAGE}
            alt="Chicken biryani"
          />
        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features">

        <div className="feature">
          <div className="feature-icon">⌂</div>

          <div>
            <h3>Home Style Cooking</h3>
            <p>
              Made with love
              <br />
              just like home.
            </p>
          </div>
        </div>


        <div className="feature">
          <div className="feature-icon">⌁</div>

          <div>
            <h3>Fresh Ingredients</h3>
            <p>
              We use only the
              <br />
              finest & freshest.
            </p>
          </div>
        </div>


        <div className="feature">
          <div className="feature-icon">♧</div>

          <div>
            <h3>Hygiene & Safe</h3>
            <p>
              Prepared with strict
              <br />
              hygiene standards.
            </p>
          </div>
        </div>


        <div className="feature">
          <div className="feature-icon">♥</div>

          <div>
            <h3>Made with Love</h3>
            <p>
              Every dish is prepared
              <br />
              with care & passion.
            </p>
          </div>
        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about" id="about">

        <div className="about-photo">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
            alt="Restaurant interior"
          />
        </div>

        <div className="about-copy">

          <div className="gold-label">
            ❧ ABOUT US ❧
          </div>

          <h2>A Taste That Feels Like Home</h2>

          <div className="small-divider">
            ─── ❧ ───
          </div>

          <p>
            At Spice Heaven, we believe that the best meals are
            made with love and shared with joy. Our recipes are
            inspired by traditional flavors and home-style cooking,
            bringing you a comforting and authentic dining experience.
          </p>

          <p>
            Thank you for being a part of our journey.
          </p>

          <button className="dark-button">
            Know More About Us
          </button>

        </div>

      </section>


      {/* =====================================================
          OUR STORIES
      ===================================================== */}
      {/* ==================== OUR STORIES ==================== */}

<section className="stories-section">

  <div className="section-heading">
    <div className="gold-label">✦ OUR JOURNEY ✦</div>
    <h2>Our Stories</h2>

    <div className="heading-line">
      <span>― ✦ ―</span>
    </div>
  </div>

  {/* BOTH CARDS ARE INSIDE THIS ONE GRID */}
  <div className="stories-grid">

    {/* CARD 01 */}
    <div className="story-card">

      <div className="story-number">
        01
      </div>

      <div className="story-content">

        <h3>How It All Started</h3>

        <p>
          Spice Heaven started with a simple dream — a small beginning,
          a big passion and a love for authentic home-style food.
        </p>

        <div className="story-year">
          2018
        </div>

        <h4>Where It All Started</h4>

        <p>
          A small kitchen, a big dream and a passion for authentic taste.
        </p>

      </div>

    </div>


    {/* CARD 02 */}
    <div className="story-card">

      <div className="story-number">
        02
      </div>

      <div className="story-content">

        <h3>Growing With You</h3>

        <p>
          With the love and support of our customers, our journey continued
          to grow while our promise of quality and taste remained the same.
        </p>

        <div className="story-year">
          2020
        </div>

        <h4>Growing Together</h4>

        <p>
          Your love and support helped us grow beyond expectations.
        </p>

        <div className="story-year">
          2024
        </div>

        <h4>Stronger Than Ever</h4>

        <p>
          More love, more flavours, same promise of quality.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          FOUNDER'S STORY
      ===================================================== */}

      <section className="founder-section">

        <div className="section-heading">

          <div className="gold-label">
            ❧ THE HEART BEHIND IT ❧
          </div>

          <h2>Founder’s Story</h2>

          <div className="heading-line">
            ─── ❧ ───
          </div>

        </div>


        <div className="founder-card">

          <div className="founder-photo">
            <div className="founder-photo-inner">
              ✦
              <span>OUR FOUNDER</span>
            </div>
          </div>


          <div className="founder-content">

            <h3>Every great restaurant has a story.</h3>

            <p>
              Ours is built on hard work, late nights,
              dedication and a belief that good food can
              bring people together.
            </p>

            <p>
              From the very beginning, the focus has been
              on authentic flavours, quality ingredients and
              creating food that gives every customer the
              feeling of home.
            </p>

            <p>
              Thank you for being a part of our journey.
            </p>

            <strong>
              – Founder
            </strong>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUALITY PROMISES
      ===================================================== */}

      {/* ==================== QUALITY PROMISES ==================== */}

<section className="quality-section">

  <div className="section-heading">
    <div className="gold-label">✦ OUR PROMISE ✦</div>
    <h2>Our Quality Promises</h2>

    <div className="heading-line">
      <span>― ✦ ―</span>
    </div>
  </div>

  <div className="quality-grid">

    <div className="quality-card">
      <div className="quality-icon">✓</div>
      <h3>100% Fresh &amp; Hygienic</h3>
      <p>
        We serve 100% fresh, hygienic &amp; high-quality food.
      </p>
    </div>

    <div className="quality-card">
      <div className="quality-icon">✦</div>
      <h3>Taste You Can Trust</h3>
      <p>
        We never compromise on taste or customer satisfaction.
      </p>
    </div>

    <div className="quality-card">
      <div className="quality-icon">♡</div>
      <h3>Made With Love</h3>
      <p>
        Every meal is prepared with care, passion and attention to detail.
      </p>
    </div>

    <div className="quality-card">
      <div className="quality-icon">♨</div>
      <h3>Hygiene First</h3>
      <p>
        Clean preparation and high hygiene standards are always our priority.
      </p>
    </div>

  </div>

</section>

     

         
           


      {/* =====================================================
          BEWARE OF FAKE BRANCHES
      ===================================================== */}

      <section className="fake-branch-section">

        <div className="fake-branch-card">

          <div className="warning-symbol">
            !
          </div>

          <div className="warning-content">

            <div className="gold-label">
              IMPORTANT NOTICE
            </div>

            <h2>Beware of Fake Branches</h2>

            <p>
              We have only one official branch.
              Please do not trust any fake branches,
              duplicate listings or anyone falsely
              representing Spice Heaven.
            </p>

            <strong>
              Your trust is our responsibility!
            </strong>

          </div>

        </div>

      </section>


      {/* ================= MENU ================= */}

      <section className="menu-section" id="menu">

        <div className="section-heading">

          <div className="gold-label">
            ❧ OUR SPECIALTIES ❧
          </div>

          <h2>Menu Highlights</h2>

          <div className="heading-line">
            ─── ❧ ───
          </div>

        </div>


        <div className="menu-cards">

          {menuItems.map((item) => (
            <div className="menu-card" key={item.name}>

              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

            </div>
          ))}

        </div>


        <div className="menu-button-wrap">

          <button className="dark-button">
            ▣ &nbsp; View Full Menu
          </button>

        </div>

      </section>


      {/* ================= REVIEWS ================= */}

<section className="reviews" id="reviews">

  <div className="section-heading">

    <div className="gold-label">
      ❧ WHAT OUR CUSTOMERS SAY ❧
    </div>

    <h2>Customer Reviews</h2>

    <div className="heading-line">
      ─── ❧ ───
    </div>

  </div>


  <div className="reviews-wrap">

    <button className="review-arrow" aria-label="Previous review">
      ‹
    </button>


    <div className="review-cards">

      {/* Review 1 */}
      <div className="review-card">

        <div className="review-stars">
          ★★★★★
        </div>

        <div className="quote">
          “
        </div>

        <p>
          The food tastes exactly like home!
          Loved the biryani and Chicken 65.
          Will definitely order again.
        </p>

        <strong>
          – Priya K.
        </strong>

      </div>


      {/* Review 2 */}
      <div className="review-card">

        <div className="review-stars">
          ★★★★★
        </div>

        <div className="quote">
          “
        </div>

        <p>
          Super delicious and hygienic food.
          You can feel the homely touch in
          every bite.
        </p>

        <strong>
          – Rohit M.
        </strong>

      </div>


      {/* Review 3 */}
      <div className="review-card">

        <div className="review-stars">
          ★★★★★
        </div>

        <div className="quote">
          “
        </div>

        <p>
          Best home-style food in town.
          Packaging, taste, and quantity
          everything is perfect!
        </p>

        <strong>
          – Anitha R.
        </strong>

      </div>

    </div>


    <button className="review-arrow" aria-label="Next review">
      ›
    </button>

  </div>


  <div className="review-dots">
    <span></span>
    <span className="selected"></span>
    <span></span>
  </div>

</section>


      {/* ================= LOCATION / CONTACT / ORDER ================= */}

      <section className="bottom-info">

        <div className="info-column" id="location">

          <div className="gold-label">
            ❧ OUR LOCATION
          </div>

          <p>
            Spice Heaven
            <br />
            Habsiguda, Hyderabad
            <br />
            Telangana – 500007
          </p>

          <div className="map-box">

            <iframe
              title="Spice Heaven location"
              src="https://www.google.com/maps?q=Habsiguda,Hyderabad&output=embed"
              loading="lazy"
            ></iframe>

          </div>

        </div>


        <div className="info-column" id="contact">

          <div className="gold-label">
            ❧ CONTACT US
          </div>

          <div className="contact-row">
            <span>☎</span>
            <span>+91 91217 77557</span>
          </div>

          <div className="contact-row">
            <span>✉</span>
            <span>srisairamtasteofhome@gmail.com</span>
          </div>

          <div className="contact-row">
            <span>◷</span>
            <span>
              Mon – Sun : 11:00 AM – 10:30 PM
            </span>
          </div>

        </div>


        <div className="info-column" id="order">

          <div className="gold-label">
            ❧ ORDER ONLINE
          </div>

          <div className="delivery-buttons">

            <a
              href="https://www.swiggy.com/"
              target="_blank"
              rel="noreferrer"
              className="swiggy"
            >
              Swiggy
            </a>

            <a
              href="https://www.zomato.com/"
              target="_blank"
              rel="noreferrer"
              className="zomato"
            >
              zomato
            </a>

          </div>


          <div className="follow-title">
            FOLLOW US
          </div>

          <a
            href="#"
            className="instagram"
            aria-label="Instagram"
          >
            ◎
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="logo-area">

          <div className="logo-circle">
            SH
          </div>

          <div>
            <div className="logo-name">
              SPICE HEAVEN
            </div>

            <div className="logo-tagline">
              TASTE OF HOME
            </div>
          </div>

        </div>


        <div className="copyright">
          © 2025 Spice Heaven. All Rights Reserved.
        </div>


        <div className="made">
          Made with <span>♥</span>
        </div>

      </footer>

    </div>
  );
}

export default App;
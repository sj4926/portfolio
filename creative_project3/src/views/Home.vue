<template>
  <div class="home">
    <img class="logo" alt="Travel logo" src="../assets/travel-logo-design.jpg" />
    <h1>The Finest Adventures Right Out Your Door</h1>
    <div class="break"></div>
    <div class="body">
      <div class="packages">
        <h2>Our Best Deal Referrals</h2>
        <div class="package_1">
          <div class="photo">
            <img class="pack_pic" src="../assets/paris.jpg">
          </div>
          <div class="price">
            <p>$2652</p>
          </div>
          <div class="description">
            <p>For six days rest easy in the city of lights, love, and pastries.
            With a stay at Hotel Napoleon in Paris (Paris City Centre),
            you'll be steps from Champs-Elysees and 4 minutes by foot from Arc de Triomphe.
            Featured amenities include a business center, express check-in, and express check-out.
            Hotels and Air fares included!</p>
            <br/>
            <p>Rating: 4.8/5</p>
          </div>
        </div>
        <div class="package_2">
          <div class="photo">
            <img class="pack_pic" src="../assets/rome.jpg">
          </div>
          <div class="price">
            <p>$1875</p>
          </div>
          <div class="description">
            <p>The Hotel Quirinale offers all guests an unforgettable four star Roman vacation in the very
            heart of one of the most celebrated cities on earth.
            The elegance and charm is befitting a hotel surrounded by the Piazza della Repubblica, Piazza Venezia and the Trevi Fountain.
            Each of the 209 rooms are decorated with period furniture and equipped with every modern luxury.
            </p>
            <br/>
            <p>Rating 4.5/5</p>
          </div>
        </div>
        <div class="package_3">
          <div class="photo">
            <img class="pack_pic" src="../assets/london.jpg">
          </div>
          <div class="price">
            <p>$4948</p>
          </div>
          <div class="description">
            <p>On this vacation to London, you're planning to go big.
            A standard hotel is well and good, but you'd like something extra on this trip.
            A luxury hotel in London is just the thing you need.
            A top-notch accommodation with loads of thoughtful touches will take your vacation from good to great.
            Booking a stay at The Pelham - Starhotels Collezione will do the trick.
            We can help you book that luxury retreat that you are going to love.
            </p>
            <br/>
            <p>Rating: 4.9/5</p>
          </div>
        </div>
        <div class="package_4">
          <div class="photo">
            <img class="pack_pic" src="../assets/NYC.jpg">
          </div>
          <div class="price">
            <p>$1421</p>
          </div>
          <div class="description">
            <p>New York Hilton Midtown is your launch pad for new adventures.
            Whether you’re traveling for work or for fun, we’ve got what you want.
            You’ll be in walking distance of Central Park, Radio City Music Hall, MOMA, and Broadway.
            Discover exceptional WiFi, an expansive fitness center, and seasonal favorites from Herb N' Kitchen.
            Take on a new view and immerse yourself in a new experience. </p>
            <br/>
            <p>Rating: 4.7/5</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>

<style>
  body {
    text-align: center;
  }

  .home {
    width: 80%;
    padding: 20px 100px 20px 100px;
  }

  h1{
    font-family: Impact, fantasy;
  }

  .logo{
    height: 400px;
    width: 400px;
  }

  .break {
    height: 50px;
    width: auto;
  }

  .packages {
    display: flex;
    align-content: space-between;
    flex-direction: column;
  }

  .package_1, .package_2, .package_3, .package_4{
    display: flex;
    background-color: #3E98DA;
    height: auto;
    width: auto;
    padding: 15px;
    margin: 15px;
    border-radius: 10px;
  }

  .pack_pic{
    height: 150px;
  }
  .price {
    padding: 10px;
    margin-right: 30px;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-weight: 800;
  }
  .description{
    text-align: left;
    font-family: American Typewriter, serif;
  }
</style>

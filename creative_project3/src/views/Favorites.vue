<template>
    <div class="favorites">
      <h1>Our Favorite Agencies</h1>

      <p>We have spent years compiling a stock pile of our favorite travel agencies.
        Here are just a few of our top 20!
      </p>
      <br/>
      <div class="top_five">
        <div class="left_pic">
          <div class="num_pic">
            <img class="number" src="../assets/numbers (1).jpg">
          </div>
          <div class="logo">
            <img class="logo_pic" src="../assets/bookitcom_logo.jpg">
          </div>
          <p class="expo">With an expertise in interface design, BookIt.com offers travelers the most intuitive online travel services around.
          Their easy-to-navigate website makes booking hotels, airfare and rental cars an easy experience.</p>
        </div>

        <div class="right_pic">
          <div class="num_pic">
            <img class="number" src="../assets/numbers (2).jpg">
          </div>
          <p class="expo">Expedia is an online travel agency that was founded by Microsoft in 2001.
          The site helps people find diverse travel services, including car rentals, flights and hotels and makes them easy to schedule.
          It also recommends activities in destination cities that all can enjoy.</p>
          <div class="logo">
            <img class="logo_pic" src="../assets/expedia_logo.jpg">
          </div>
        </div>

        <div class="left_pic">
          <div class="num_pic">
            <img class="number" src="../assets/numbers (3).jpg">
          </div>
          <div class="logo">
            <img class="logo_pic" src="../assets/zicasso_logo.jpg">
          </div>
          <p class="expo">Zicasso is a unique travel site that matches clients with their own travel experts to plan a unique and personalized itinerary.
          Plan romantic get-aways or luxury tours in Latin America, Asia and Europe with the help of all-day support.</p>
        </div>

        <div class="right_pic">
          <div class="num_pic">
              <img class="number" src="../assets/numbers (4).jpg">
          </div>
          <p class="expo">CheapOair is a a very easy-to-use vacation planner that includes search engines for hotels, flights, car rentals and package deals.
          The system also compares costs from many different companies to find the very best prices.</p>
          <div class="logo">
            <img class="logo_pic" src="../assets/cheapoair_logo.jpg">
          </div>
        </div>

        <div class="left_pic">
          <div class="num_pic">
              <img class="number" src="../assets/numbers (5).jpg">
          </div>
          <div class="logo">
            <img class="logo_pic" src="../assets/hotels.com-logo.jpg">
          </div>
          <p class="expo">Hotels.com is an online travel agency that is centered around helping people find and book reservations at hotels, condos, bed and breakfasts and more.
          The company was founded in 1991 and joined Expedia Inc. in 2002.</p>
        </div>
      </div>
    </div>
</template>

<script>


</script>

<style>

  .favorites {
    padding: 20px 80px 80px 100px;

  }
  .top_five{
    border-radius: 20px;
    background-color: #06AFD8;
  }

  .left_pic{
    display: flex;
    justify-content: space-between;
    padding: 50px;
    height: 200px;
  }

  .right_pic{
    display: flex;
    justify-content: space-between;
    padding: 50px;
    height: 200px;
    background-color: #D88F06;
  }

  .logo{
    margin: 15px;
  }

  .expo{
    text-align: justify;
    padding-left: 10px;
    padding-right: 10px;
    font-family: Courier, monospace;
  }
</style>

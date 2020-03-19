<template>
<div class="wrapper">
  <h1 v-show="this.$root.$data.cart.length === 0">Your Cart is Empty</h1>
  <div class="items">
    <div class="item" v-for="item in this.$root.$data.cart" :key="item.id">
      <div class="info">
        <h1>{{item.name}}</h1>
        <p>{{item.country}}</p>
      </div>
      <div class = "imageAndPrice">
        <div class="image">
          <img :src="'/images/products/'+item.image">
        </div>
        <div class ="space_price">
          <h2>{{item.price}}</h2>
        </div>
        <div class ="space"></div>
        <div class ="space_button">
          <button v-on:click="removeFromCart(item)">Remove From Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    items: Array
  },
  methods: {
    removeFromCart(item) {
      var index = this.$root.$data.cart.indexOf(item);
      if (index !== -1) this.$root.$data.cart.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item {
  margin: 10px;
  margin-top: 50px;
  width: 800px;
}

.item img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.item .image {
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
}

.info {
  background: #1B5503;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.imageAndPrice{
  width: auto;
  display: flex;
  justify-content: right;
}

.space{
  width: 200px;
  height: 200px;
}

.space_button{
  width: 200px;
  height: 250px;
  justify-content: right;
  text-align: right;
}

.space_price{
  width: 200px;
  height: 250px;
  text-align: center;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>

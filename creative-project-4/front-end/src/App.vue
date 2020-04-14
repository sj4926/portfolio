<template>
<div id="app">
  <div class="header">
    <router-link to="/">
      <div class="logo">
        <img src="/book.jpg">
      </div>
    </router-link>
    <div class="title">
      <h1>Your Online Journal</h1>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <router-link to="/">Journal</router-link>
    <router-link to="/gallery">Photo Gallery</router-link>
    <router-link to="/admin">Entries</router-link>
    <a href="https://github.com/sj4926/portfolio.git">Repository</a>
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  justify-content: center;
  padding: 10px 100px 0px 100px;
  background-color: #E76E0A;
  color: #1C454F;
}

.logo {
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
  padding-left: 10px;
  padding-right: 10px;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>

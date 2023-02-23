<template>
  <section class="rose">
    <!-- ======= Header ======= -->
    <div class="search-bar">
      <form class="search-form d-flex align-items-center" method="POST" action="#"> 
        <input type="text" name="query" placeholder="Search" title="Enter search keyword"> 
        <button type="submit" value="Search"><i class="bi bi-search"></i></button>
      </form>
    </div>
    <div class="social-links d-none d-md-flex align-items-center">
        <img class="twitter" src="../../public/assets/icons/Asset_3ldpi.png">
        <img class="youtube" src="../../public/assets/icons/Asset2ldpi.png">
        <i class='fa fa-facebook'></i>
    </div>
    
  <header id="header" class="header" data-scrollto-offset="0">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <!--  -->
        <div class="logoheader">
          <img class="logo" src="../../public/assets/icons/Asset4ldpi.png">
       </div>
  

      <nav id="navbar" class="navbar">
        <ul>

          <li class="dropdown"><nuxt-link to="/"><span>Home</span> <i class="bi bi-chevron-down dropdown-indicator"></i></nuxt-link>
          </li>

          <li><NuxtLink class="nav-link scrollto" to="/aboutus">About Us</NuxtLink></li>
          <li class="dropdown"><a href="#"><span>Our Services</span><i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><nuxt-link to="/ourservice1">ourservice1</nuxt-link></li>
              <li><nuxt-link to="/ourservice2">ourservice2</nuxt-link></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="index.html#portfolio">Our Projects</a></li>
          <li><a class="nav-link scrollto" href="index.html#team">Our Clients</a></li>
          <li><a href="blog.html">Media Center</a></li>
          
        
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="index.html#contact">Contact Us</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle d-none"></i>
        <a class="btn-getstarted scrollto" href="index.html#about">Get Started</a>
      </nav><!-- .navbar -->

      

    </div>
    <div class="m">
      <h2>TIGER</h2>
      <h2><b>GENERAL MAINTAINANCE <br>AND DECOR</b></h2>
    </div>
    <button class="btn btn-primary bg-white bt-desc" style="color: black;">Descover More</button>
  </header><!-- End Header -->
  </section>
</template>

<script>


export default {
  name: "Header",
  
};
</script>

<style lang="scss" scoped src="@/public/assets/scss/header.scss"></style>

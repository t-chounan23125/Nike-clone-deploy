class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Start Navbar -->
    <div class="">
        <header class="navbar">
            <div class="upper-container">
                <div class="uppernav">
                    <nav class="left">
                        <img id="jordan" src="../src/Image/Jordan_logo.svg" alt="logo">
                        <a href="converse.html"><img id="converse" src="../src/Image/Converse-Logo.png" alt="logo"><a/>
                    </nav>
                    <nav class="right">
                        <a href="#findastore">Find a Store <span>|</span></a>
                        <a href="#help">Help <span>|</span></a>
                        <a href="#joinUs">Join Us <span>|</span></a>
                        <a href="#signin">Sign In </a>
                    </nav>
                </div>
            </div>
            <div class="undernav-container">
                <div class="undernav">
                    <nav class="left">
                        <a href="home.html"><img id="nike" src="../src/Image/nike.png" alt=""></a>
                    </nav>
                    <ul class="menu">
                        <li id="lis-feature">
                            <div class="group " id=" hoverLink" onmouseenter="navDrop(1)" onmouseleave="navHides(-1)"> 
                                <a href="new&feature.html">New & Featured</a>
                                
                        </div>
                        </li>
                        <li id="lis-men">
                            <div class="group " id=" hoverLink" onmouseenter="navDrop(2)" onmouseleave="navHides(-2)"> 
                                <a href="#men">Men</a>
                        </li>
                        <li id="lis-women">
                            <div class="group " id=" hoverLink" onmouseenter="navDrop(3)" onmouseleave="navHides(-3)"> 
                                <a href="#women">Women</a>
                        </li>
                        <li id="lis-kid">
                            <div class="group " id=" hoverLink" onmouseenter="navDrop(4)" onmouseleave="navHides(-4)"> 
                                <a href="#kids">Kids</a>
                        </li>
                        
                        
                        <li id="lis-sale"><a href="#sale">Sale</a></li>
                        <li id="lis-hid"><a href="#acces">Accessories</a></li>
    
                    </ul>
                    <div class="nav-right">
                        <div class="search">
                            <form class="searchbar">
                                <input class="searchbar" type="search" placeholder="Search">
                            </form>
    
                        </div>
    
                        <nav class="right">
                            <div class="heart">
                                <a href="#fav"> <img id="fav" src="../src/Image/heart.png" alt=""></a>
                            </div>
                            <div class="ex">
                                <a href="#search"> <img id="exp" src="../src/Image/glas.png" alt=""></a>
                            </div>
                            <div class="shop">
                                <a href="#shop"> <img id="bag" src="../src/Image/shop.webp" alt=""></a>
                            </div>
                            <div class="contact">
                                <a href="#contact"> <img id="person" src="../src/Image/user.png" alt=""></a>
                            </div>
                            <div class="burger">
                                <a href="#menu"> <img id="bur" src="../src/Image/burger.png" alt=""></a>
                            </div>
                        </nav>
                    </div>
    
                </div>
                <section id="men" class= "">
                    <div id="HoverBox " class="hoverbox" >
                    <ul class="headerList">
                        <li><span>Nike Summer Event</span></li>
                        <li>Extra 25% Off Select Styles</li>
                    </ul>
                    <ul>
                        <li><span>New & Featured</span></li>
                        <li>New Arrivals</li>
                        <li>Best Sellers</li>
                        <li>New & Upcoming Drops</li>
                        <li>Add to Bag to See Price</li>
                    </ul>
                    <ul>
                        <li><span>Shoes</span></li>
                        <li>All Shoes</li>
                        <li>Lifestyle</li>
                        <li>Jordan</li>
                        <li>Dunk</li>
                        <li>Lifestyle Running</li>
                        <li>Air Max</li>
                        <li>Air Force 1</li>
                        <li>Training & Gym</li>
                        <li>Basketball</li>
                        <li>Running</li>
                        <li>Nike SB</li>
                        <li>Sandals & Slides</li>
                        <li>Nike by You</li>
                        <li>Shoes $100 & Under</li>
                    </ul>
                    <ul>
                        <li><span>Clothing</span></li>
                        <li>All Clothing</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Pants & Tights</li>
                        <li>Jackets & Vests</li>
                        <li>Tops & T-Shirts</li>
                        <li>Shorts</li>
                        <li>Matching Sets</li>
                        <li>Big & Tall</li>
                        <li>Jordan</li>
                        <li>Accessories</li>
                        <li>All Accessories</li>
                        <li>Bags & Backpacks</li>
                        <li>Hats & Headwear</li>
                        <li>Socks</li>
                    </ul>
                    <ul>
                        <li><span>Explore</span></li>
                        <li>SNKRS Launch Calendar</li>
                        <li>Running Shoe Finder</li>
                        <li>Bra Finder</li>
                        <li>Product Care</li>
                        <li>Member Rewards</li>
                        <li>Member Rewards</li>
                    </ul>
                    </div>
                </section>
                <section id="new-feature" class= "">
                    <div id="HoverBox " class="hoverbox" >
                    <ul class="headerList">
                        <li><span>Nike Summer Event</span></li>
                        <li>Extra 25% Off Select Styles</li>
                    </ul>
                    <ul>
                        <li><span>New & Featured</span></li>
                        <li>New Arrivals</li>
                        <li>Best Sellers</li>
                        <li>New & Upcoming Drops</li>
                        <li>Add to Bag to See Price</li>
                    </ul>
                    <ul>
                        <li><span>Trending</span></li>
                        <li>Lifestyle Running</li>
                        <li>The Color Shop</li>
                        <li>Shop Sport</li>
                        <li>Jordan Family Days</li>
                        <li>ACG</li>
                    </ul>
                    <ul>
                        <li><span>Shop Classics</span></li>
                        <li>Dunk</li>
                        <li>Air Jordan 1</li>
                        <li>Air Force</li>
                        <li>Air Max</li>
                        <li>Blazer</li>
                        <li>Vomero</li>
                    </ul>
                    <ul>
                        <li><span>Explore</span></li>
                        <li>SNKRS Launch Calendar</li>
                        <li>Running Shoe Finder</li>
                        <li>Bra Finder</li>
                        <li>Product Care</li>
                        <li>Member Rewards</li>
                        <li>Member Rewards</li>
                    </ul>
                    </div>
                </section>
                <section id="womenn" class= "">
                    <div id="HoverBox " class="hoverbox" >
                    <ul class="headerList">
                        <li><span>Nike Summer Event</span></li>
                        <li>Extra 25% Off Select Styles</li>
                    </ul>
                    <ul>
                        <li><span>New & Featured</span></li>
                        <li>New Arrivals</li>
                        <li>Best Sellers</li>
                        <li>New & Upcoming Drops</li>
                        <li>Add to Bag to See Price</li>
                    </ul>
                    <ul>
                        <li><span>Shoes</span></li>
                        <li>All Shoes</li>
                        <li>Lifestyle</li>
                        <li>Jordan</li>
                        <li>Dunk</li>
                        <li>Lifestyle Running</li>
                        <li>Air Max</li>
                        <li>Air Force 1</li>
                        <li>Training & Gym</li>
                        <li>Basketball</li>
                        <li>Running</li>
                        <li>Nike SB</li>
                        <li>Sandals & Slides</li>
                        <li>Nike by You</li>
                        <li>Shoes $100 & Under</li>
                    </ul>
                    <ul>
                        <li><span>Clothing</span></li>
                        <li>All Clothing</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Pants & Tights</li>
                        <li>Jackets & Vests</li>
                        <li>Tops & T-Shirts</li>
                        <li>Shorts</li>
                        <li>Matching Sets</li>
                        <li>Big & Tall</li>
                        <li>Jordan</li>
                        <li>Accessories</li>
                        <li>All Accessories</li>
                        <li>Bags & Backpacks</li>
                        <li>Hats & Headwear</li>
                        <li>Socks</li>
                    </ul>
                    <ul>
                        <li><span>Explore</span></li>
                        <li>SNKRS Launch Calendar</li>
                        <li>Running Shoe Finder</li>
                        <li>Bra Finder</li>
                        <li>Product Care</li>
                        <li>Member Rewards</li>
                        <li>Member Rewards</li>
                    </ul>
                    </div>
                </section>
                <section id="kids" class= "">
                    <div id="HoverBox " class="hoverbox" >
                    <ul class="headerList">
                        <li><span>Nike Summer Event</span></li>
                        <li>Extra 25% Off Select Styles</li>
                    </ul>
                    <ul>
                        <li><span>New & Featured</span></li>
                        <li>New Arrivals</li>
                        <li>Best Sellers</li>
                        <li>Add to Bag to See Price</li>
                        <li>All Sale</li>
                        <li>Collections</li>
                        <li>EasyOn</li>
                        <li>Teen Essentials</li>
                        <li>New in Basketball</li>
                        <li>Skate X Lifestyle</li>
                        <li>Jordan Family Days</li>
                    </ul>
                    <ul>
                        <li><span>Trending</span></li>
                        <li>Lifestyle Running</li>
                        <li>The Color Shop</li>
                        <li>Shop Sport</li>
                        <li>Jordan Family Days</li>
                        <li>ACG</li>
                    </ul>
                    <ul>
                        <li><span>Shoes by Size</span></li>
                        <li>Big Kids (1Y - 7Y)</li>
                        <li>Little Kids (8C - 3Y)</li>
                        <li>Baby & Toddler (1C - 10C)</li>
                        <li>All Shoes</li>
                        <li>Lifestyle</li>
                        <li>Jordan</li>
                        <li>Dunk</li>
                        <li>Air Max</li>
                        <li>Air Force 1</li>
                        <li>Basketball</li>
                        <li>Running</li>
                        <li>Sandals & Slides</li>
                    </ul>
                    <ul>
                        <li><span>Clothing By Size</span></li>
                        <li>Big Kids (XS - XL)</li>
                        <li>Little Kids (4 - 7)</li>
                        <li>Baby & Toddler (0M - 4T)</li>
                        <li>Extended Sizing</li>
                        <li>All Clothing</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Pants & Tights</li>
                        <li>Jackets & Vests</li>
                        <li>Tops & T-Shirts</li>
                        <li>Shorts</li>
                        <li>Skirts & Dresses</li>
                        <li>Bras</li>
                        <li>Matching Sets</li>
                        <li>Jordan</li>
                    </ul>
                    
                    </div>
                </section>
            </div>
        </header>
        
        <!-- Start Mobile Navbar -->
        <nav class="mobile-nav ">
            <div class="xbttn">
                <img src="../src/Image/close.png" alt="">
            </div>
            <div class="nav-content">
                <div class="nav-menu-bar">
                    <ul>
                        <div class="lis"><li id="content-list"><a href="new&feature.html"> New & Featured </a> </li><div class="text-arrow"><img id="toggle" src="../src/Image/right-chevron.png" alt=""></div></div>
                        <div class="lis"><li id="content-list">Men </li><div class="text-arrow"><img id="toggle" src="../src/Image/right-chevron.png" alt=""></div></div>
                        <div class="lis"><li id="content-list">Women</li><div class="text-arrow"><img id="toggle" src="../src/Image/right-chevron.png" alt=""></div></div>
                        <div class="lis"><li id="content-list">Kids </li><div class="text-arrow"><img id="toggle" src="../src/Image/right-chevron.png" alt=""></div></div>
                        <div class="lis"><li id="content-list">Jordan </li><div class="text-arrow"><img id="toggle" src="../src/Image/right-chevron.png" alt=""></div></div>
                        <div class="lis"><li id="content-list">Sale</li><div class="text-arrow"><img id="toggle" src="../src/Image/right-chevron.png" alt=""></div></div>
                    </ul>
                </div>
                <div class="logo">
                    <div class="jordan-logo">
                        <img src="../src/Image/Jordan_logo.svg" alt="">
                        <p>Jordan</p>
                    </div>
                    <div class="jordan-logo">
                        <a href="converse.html"><img src="./Image/Converse-Logo.png" alt=""><a/>
                        <p>Converse</p>
                    </div>
              
                    
                </div>
                <div class="middle-nav">
                    <div class="quote-wrap">
                        <p>
                            Become a Nike Member for <br>
                            the best products, <br>
                            inspiration and stories in <br>
                            sport. <span id="learn-more"> Learn more </span>
                        </p>
                    </div>
                    <div class="bttn-wrapp">
                        <div class="shop-buttn1">
                            <div class="button">
                                <a href="#shop">Join Us</a>
                            </div>
                        </div>
                        <div class="shop-buttn2" >
                            <div class="button">
                                <a href="#shop">Sign In</a>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div class="others">
                    <div class="bag" id="more">
                        <img src="../src/Image/bagg.png" alt="">
                        <p>Bag</p>
                    </div>
                    <div class="order" id="more">
                        <img src="../src/Image/box.png" alt="">
                        <p>Orders</p>
                    </div>
                    <div class="store" id="more">
                        <img src="../src/Image/store.png" alt="">
                        <p>Find a Store</p>
                    </div>
                    <div class="help" id="more">
                        <img src="../src/Image/ask.png" alt="">
                        <p>Help</p>
                    </div> 
                </div>
            
            </div>
        </nav>
    <!-- End Mobile Navar -->
    </div>
        `;
    }
}
customElements.define('my-navbar', Navbar)



// mobile buger nav

const hamburger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");
const closebttn = document.querySelector(".xbttn");
const container = document.querySelector(".content-container")

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("openDrawer");
    container.classList.toggle("blur");
    
    
    
});


closebttn.addEventListener("click", () => {
    mobileNav.classList.toggle("openDrawer");
    container.classList.toggle("blur");
});

// drop down nav
function navDrop(x){
    if (x === 1){
      document.querySelector('#new-feature').classList.toggle('show');
      document.querySelector('.content-container').classList.toggle("blur");
    }
    if (x === 2){
      document.querySelector('#men').classList.toggle('show');
      document.querySelector('.content-container').classList.toggle("blur");
    }
    if (x === 3){
      document.querySelector('#womenn').classList.toggle('show');
      document.querySelector('.content-container').classList.toggle("blur");
    }
    if (x === 4){
      document.querySelector('#kids').classList.toggle('show');
      document.querySelector('.content-container').classList.toggle("blur");
    }
    if (x === 5){
      document.querySelector('#sales').classList.toggle('show');
      document.querySelector('.content-container').classList.toggle("blur");
    }
    if (x === 6){
      document.querySelector('#jordan').classList.toggle('show');
      document.querySelector('.content-container').classList.toggle("blur");
    }
  }
  function navHides(x){
    if (x === -1){
      document.querySelector('#new-feature').classList.toggle('show');
      document.querySelector('.content-container').classList.toggle("blur");
    }
    if (x === -2){
      document.querySelector('#men').classList.toggle('show');
      document.querySelector('.content-container').classList.toggle("blur");
    }
    if (x === -3){
      document.querySelector('#womenn').classList.toggle('show');
      document.querySelector('.content-container').classList.toggle("blur");
    }
    if (x === -4){
      document.querySelector('#kids').classList.toggle('show');
      document.querySelector('.content-container').classList.toggle("blur");
    }
    if (x === -5){
      document.querySelector('#sales').classList.toggle('show');
      document.querySelector('.content-container').classList.toggle("blur");
    }
    
  }
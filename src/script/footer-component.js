//Footer Component
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="black-footer">
                <div class="footer-body">
                    <div class="ncss-col">
                    
                        <div class="wrap-link-footer" >
                            <div class=" first" >
                                <ul >
                                    <li class="footer-link"><p>Resources</p> </li>
                                    <li class="footer-link"><p>Gift Card </p> </li>
                                    <li class="footer-link"><p>Find a Store </p></li>
                                    <li class="footer-link"><p>Become a membership</p> </li>
                                    <li class="footer-link"><p>Nike x nba </p> </li>
                                    <li class="footer-link"><p>Nike Journal </p> </li>
                                    <li class="footer-link"><p>Site Feedback </p></li>
                                </ul>
                            </div>
                        </div>
                        <div class="wrap-link-footer">
                            <p class="header-li">Help</p>
                            <div class="ul-footer">
                                <ul>
                                    <li class="footer-link"><a href="">Get Help</a></li>
                                    <li class="footer-link"><a href="">Order </a></li>
                                    <li class="footer-link"><a href="">Shipping and Delivetry</a></li>
                                    <li class="footer-link"><a href=""></a></li>
                                    <li class="footer-link"><a href=""></a></li>
                                    <li class="footer-link"><a href=""></a></li>
                                    <li class="footer-link"><a href=""></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="wrap-link-footer">
                                <p class="header-li">Company</p>
                                <div class="ul-footer">
                                    <ul>
                                        <li class="footer-link"><a href="">About Nike</a></li>
                                        <li class="footer-link"><a href="">News</a></li>
                                        <li class="footer-link"><a href="">Careers</a></li>
                                        <li class="footer-link"><a href="">Investors</a></li>
                                        <li class="footer-link"><a href="">Purpose</a></li>
                                        <li class="footer-link"><a href="">Sustainability</a></li>
                                        
                                    </ul>
                                </div>
                        </div>
                        <div class="wrap-link-footer">
                                <p class="header-li">Promotions & Discount</p>
                                <div class="ul-footer">
                                    <ul>
                                        <li class="footer-link"><a href="">Student</a></li>
                                        <li class="footer-link"><a href="">Military</a></li>
                                        <li class="footer-link"><a href="">Teacher</a></li>
                                        <li class="footer-link"><a href="">First Responders & Medicals Profestional</a></li>
                                        <li class="footer-link"><a href="">Birthday</a></li>
                                        <li class="footer-link"><a href=""></a></li>
                                        
                                    </ul>
                                </div>
                        </div>
    
                        
                    
                </div>
                <div class="social-menu">
                    <ul class="social-list">
                        <li id="twttr"><a href=""><img src="../src/Image/twttr.png" alt=""></a></li>
                        <li id="fb"><a href=""><img src="../src/Image/facebook.png" alt=""></a></li>
                        <li id="yt"><a href=""><img src="../src/Image/youtube.png" alt=""></a></li>
                        <li id="ig"> <a href=""><img src="../src/Image/instagram.png" alt=""></a></li>
                    </ul>
                </div> 
                
            </div>
            <div class="sub-footer ">
                <!-- pl2 -->
                <div class="right-sub-footer">
                    <div class="container-right">
                        <a href="">
                            <img src="./Image/maps-and-flags (1).png" alt="">
                            <span>United Stat</span>
                        </a>
                        <div class="copyrigh-continer">
                            <span> @ 2024 Nike, lnc, All Rights Reserved </span>
                        </div>
                    </div>
                </div>
                <!-- pl5 -->
                <div class="left-sub-footer">
                    <ul class="sub-footer-menu">
                        <li> <a href="#guide">Guides</a></li>
                        <li> <a href="#guide">Term of Sale</a> </li>
                        <li> <a href="#guide">Term of Use</a></li>
                        <li> <a href="#guide">NIke Privacy Policy</a> </li>
                        <li> <a href="#guide"><img src="./Image/rights.png" alt=""> Your Privacy Choices</a></li>
                        
                        <li> <a href="#guide"> CA Supply Chains Act</a></li>
                    </ul>
                </div>
            </div>
            
            
        </div>
    </footer> 
        `;
    }
}
customElements.define('ni-footer', Footer)
document.querySelector(".more-click").addEventListener("click", ()=>{
    document.querySelector(".more").innerHTML=""
    document.querySelector(".post").innerHTML+=`
   
        <article class="grid blog-seven">
            <img src="images/mountain.jpg" alt="A screen of laptop with the display of codes and blue logo of React">
            <header>
                <span class="par-date">JULY 23, 2022</span>
                <h1>Blog Seven</h1>
                <p class="par-content">I'm excited to start a new learning journey as a 
                Scrimba Bootcamp student! After several months of learning in the 
                Frontend Developer Career Path.
                </p> 
            </header>
            
        </article>
        <article class="grid blog-eight">
            <img src="images/office.jpg" alt="A screen of laptop with the display of codes and blue logo of React">
            <header>
                <span class="par-date">JULY 23, 2022</span>
                <h1>Blog Eight</h1>
                <p class="par-content">I'm excited to start a new learning journey as a 
                Scrimba Bootcamp student! After several months of learning in the 
                Frontend Developer Career Path.
                </p> 
            </header>
        </article>  
        <article class="grid blog-nine">
            <img src="images/cat.jpg" alt="A screen of laptop with the display of codes and blue logo of React">
            <header>
                <span class="par-date">JULY 23, 2022</span>
                <h1>Blog Nine</h1>
                <p class="par-content">I'm excited to start a new learning journey as a 
                Scrimba Bootcamp student! After several months of learning in the 
                Frontend Developer Career Path.
                </p> 
            </header>
        </article>
        <article class="grid blog-ten">
            <img src="images/tree.jpg" alt="A screen of laptop with the display of codes and blue logo of React">
            <header>
                <span class="par-date">JULY 23, 2022</span>
                <h1>Blog Ten</h1>
                <p class="par-content">I'm excited to start a new learning journey as a 
                Scrimba Bootcamp student! After several months of learning in the 
                Frontend Developer Career Path.
                </p> 
            </header>
        </article>     
        <article class="grid blog-ten">
            <img src="images/sky.jpg" alt="A screen of laptop with the display of codes and blue logo of React">
            <header>
                <span class="par-date">JULY 23, 2022</span>
                <h1>Blog Eleven</h1>
                <p class="par-content">I'm excited to start a new learning journey as a 
                Scrimba Bootcamp student! After several months of learning in the 
                Frontend Developer Career Path.
                </p> 
            </header>
        </article> 
        <article class="grid blog-ten">
            <img src="images/laptopClose.jpg" alt="A screen of laptop with the display of codes and blue logo of React">
            <header>
                <span class="par-date">JULY 23, 2022</span>
                <h1>Blog Twelve</h1>
                <p class="par-content">I'm excited to start a new learning journey as a 
                Scrimba Bootcamp student! After several months of learning in the 
                Frontend Developer Career Path.
                </p> 
            </header>
        </article> 
       
       
    `
})
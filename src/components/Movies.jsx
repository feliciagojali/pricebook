import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
  import {RiStarFill} from 'react-icons/ri';
const flickityOptions = {
    initialIndex: 1,
    wrapAround:true,
    pageDots:false,
    draggable:true,
    prevNextButtons:false,
    lazyLoad:2
}

function Movies(){

        return (
          <div><br/><br/>
          <Flickity
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false}
          reloadOnUpdate // default false
          static>
          <div className="carousel-cell">
          <a href="/movie">
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Ford_v._Ferrari_%282019_film_poster%29.png" className="poster" /> <br/><br/> </a>
            <b>Ford vs Ferrari</b>
            <div> <RiStarFill/> 8.2 </div>
          </div>
          <div className="carousel-cell">
          <a href="/movie">
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Ford_v._Ferrari_%282019_film_poster%29.png"/> <br/><br/> </a>
            <b>Ford vs Ferrari</b>
            <div> <RiStarFill/> 8.2 </div>
          </div>
          <div className="carousel-cell">
          <a href="/movie">
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Ford_v._Ferrari_%282019_film_poster%29.png"/> <br/><br/> </a>
            <b>Ford vs Ferrari</b>
            <div> <RiStarFill/> 8.2 </div>
          </div>
           </Flickity>

          </div>
         );
    }



export default Movies;

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';


export default function MyCarousel(){
    return ( 
        <Carousel>
               <div> 
                  <img src = "assets/images.jpeg" />
                  <p className = "legend"> Legend 1 </p>
                </div>
                <div> 
                  <img src = "assets/Oak-Tree-PNG-Image.png" />
                  <p className = "legend"> Legend 1 </p>
                </div>
                <div> 
                  <img src = "assets/png-transparent-cherry-blossom-tree-apricot-branch-twig-fruit-nut.png" />
                  <p className = "legend"> Legend 1 </p>
                </div>
            </Carousel>
        )
};

import { render } from '@testing-library/react';
import React from 'react';

const Slider=()=>{ 
    render()
    {
        var i =0;
               var time=3000;
               var images=[];
               images[0]='/img/slide/slide1.jpg';
               images[1]='/img/slide/slide2.jpg';
               images[2]='img/slide/slide3.jpg';
               images[3]='img/slide/slide4.gif';

              function slideShow(){
                document.slide.src=images[i];
                if(i<images.length-1){
                    i++;
                }
                else{
                    i=0;    
                }
                setTimeout(slideShow, time);
              }
              

              window.onload=slideShow;
    return(
        <div id ="slidebar">
          
            <img width="90%" height="400" name="slide" id="slideimages" alt="scroll"/>
       </div>
    );
};
};
export default Slider;
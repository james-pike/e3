import { component$ } from '@builder.io/qwik'
import { Carousel } from 'flowbite-qwik'

export default component$(() => {
  return (
    <Carousel pauseOnHover noControls>
           <Carousel.Slide>
           <img class="object-cover h-full w-full" src="/images/placeholder.png" alt="..." />
           </Carousel.Slide>

      <Carousel.Slide>
        <img class="object-cover h-full w-full" src="/images/placeholder.png" alt="..." />
      </Carousel.Slide>
       
  
    

    
 
    </Carousel>
  )
})
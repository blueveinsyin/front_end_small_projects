const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
/*Loop through all the images, and for each one insert an <img> element 
  inside the thumb-bar <div> that embeds that image in the page.*/

for(let i = 1; i <=5; i++){
    const imgUrl = 'images/pic' + i +'.jpg';
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgUrl);
    thumbBar.appendChild(newImage);
}

/*Attach an onclick handler to each <img> inside the thumb-bar <div> so that when they are clicked, 
the corresponding image is displayed in the displayed-img <img> element.*/
const imgs = thumbBar.getElementsByTagName('img')
for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener('click',function(){
        displayedImage.setAttribute('src','images/pic' + (i+1) +'.jpg')
    })
}

/* Wiring up the Darken/Lighten button */
/*Attach an onclick handler to the <button> so that when it is clicked, 
a darken effect is applied to the full-size image. 
When it is clicked again, the darken effect is removed again.*/

btn.addEventListener('click',function(){
    if(btn.innerHTML == 'Darken'){
        btn.innerHTML = 'Lighten'
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    }else{
        btn.innerHTML = 'Darken'
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    }

})





let img = document.images[0]
let nextbutton = document.getElementById('next')
let nextprevious = document.getElementById('previous')
let slideButton = document.getElementById('slide')
let stopButton = document.getElementById('stop')
let imgs=['1.jpg','2.jpg','3.jpg','4.jpg']
img.count=0;


nextbutton.onclick = function(){
    if(img.count >= imgs.length -1)
        img.count = 0;

        img.count ++;
        img.src = imgs[img.count];
    
}
nextprevious.onclick = function(){
    if(img.count <= 0)
        img.count = imgs.length;
        img.count --;
         img.src = imgs[img.count]; 
};
slideButton.onclick = function(){
    if (img.intervalId == undefined) {
        let id = setInterval( () => {
            if(img.count >= imgs.length -1)
                img.count = 0;
            img.count ++
            img.src = imgs[img.count];

        },1000);  
        img.intervalId = id 
    }    
}

stopButton.onclick = function () {
    clearInterval(img.intervalId)
    img.intervalId = undefined;
}
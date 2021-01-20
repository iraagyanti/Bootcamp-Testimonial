var sliderImage = document.querySelector(".testi-img");
var sliderText = document.querySelector(".testimony");
var boldName = document.querySelector(".reviewer-name");
var reviewerTitle = document.querySelector(".reviewer-title");

var tanya = {  
    name: 'Tanya Sinclair',
    profession: 'UX Engineer',
    image: 'images/image-tanya.jpg',
    testimony: ' “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ' 
}

var john = {
    name: 'John Tarkpor',
    profession: 'Junior Front-end Developer',
    image: 'images/image-john.jpg',
    testimony: ' “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” '
}

var reviewer = [tanya, john];
var i = 0;

function prev() {
    if(i <= 0) i = reviewer.length;
    i--;
    return setImage();
}

function next() {
    if(i >= reviewer.length-1) i = -1;
    i++;
    return setImage();
}

function setImage() {
    sliderImage.src = reviewer[i].image;
    sliderText.innerHTML = reviewer[i].testimony;   
    boldName.innerHTML = reviewer[i].name;
    reviewerTitle.innerHTML = reviewer[i].profession;
}
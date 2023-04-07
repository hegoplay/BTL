var images = document.querySelectorAll(".slide_img");
var prevBtn = document.querySelector(".app_withslidebar .controls #prevBtn");
var nextBtn = document.querySelector(".app_withslidebar .controls #nextBtn");
var currentIndex = 0;
var intervalID;

function showImage(index) {
    if(index < 0){
        index = images.length -1;
    }
    else if (index >= images.length)
    {
        index = 0;
    }
    images[currentIndex].classList.remove("active");
    images[index].classList.add("active");
    currentIndex = index;
}

function showNext() {
    showImage(currentIndex + 1);
}

function showPrevious() {
    showImage(currentIndex - 1);
}

function startSlider() {
    intervalID = setInterval(showNext, 100000);
}

function stopSlider() {
    clearInterval(intervalID);
}

prevBtn.addEventListener("click", function() {
    // console.log(123);
    stopSlider();
    showPrevious();
});

nextBtn.addEventListener("click", function() {
    // console.log(456);
    
    stopSlider();
    showNext();
});

startSlider();

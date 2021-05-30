const prev = document.getElementById('team__btn-prev'),
      next = document.getElementById('team__btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.team__dot'),
      slidesWrapper = document.querySelectorAll('.slider-wrapper');

let index = 0;


const activeSlide = n => {
	for(slide  of  slides) {
		slide.classList.remove('slide_active');
	}
	slides[n].classList.add('slide_active');
}

const activeDot = n => {
	for(dot  of  dots) {
		dot.classList.remove('team__dot-active');
	}
	dots[n].classList.add('team__dot-active');
}

const prepareCurrentSlide = ind => {
	activeSlide(ind)
	activeDot(ind)
}

const nextSlide = () => {
	if(index == slides.length - 1) {
		index = 0; 
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
}

const prevSlide = () => {
	if(index == 0) {
		index = slides.length - 1; 
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}

dots.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 2500);
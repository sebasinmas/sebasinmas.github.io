const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.remove('hidden');
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    })
});

hiddenElements.forEach((element) => {
    observer.observe(element);
});

console.log(hiddenElements);
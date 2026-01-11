const ghostfade = document.getElementsByClassName('logo');

document.addEventListener('scroll', (e) => {
    var scrollPercent = (document.body.scrollTop +
document.documentElement.scrollTop) / (document.documentElement.scrollHeight -
document.documentElement.clientHeight);

if(scrollPercent < 0.10) {
        ghostfade.style.opacity = '1';
} 
else ghostfade.style.opacity = '0';
});


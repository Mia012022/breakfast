function moveUp2(element) {
    element.style.transform = "rotate(-10deg)";//往 左 轉10度
}
function moveDown2(element) {
    element.style.transform = "translateY(0px)";//返回原本位置

}
function moveUp(element) {
    element.style.transform = "rotate(10deg)";//往 右 轉10度
}
function moveDown(element) {
    element.style.transform = "translateY(0px)";//返回原本位置

}
const introduce = document.querySelector("article");
window.addEventListener('wheel', (event) => {           //wheel滑鼠滾輪
    const direction = event.deltaY > 0 ? 'down' : 'up';//deltaY滾輪時往下滑為 正 , 往上滑為 負

    // 根据滚动方向改变背景颜色
    if (direction === 'down') {
        introduce.style.backgroundColor = 'grey';
    } else {
        introduce.style.backgroundColor = '#4a4e69';
    }
}
);

window.addEventListener('load', function () {
    const image = document.getElementById('image');
    const logoimg = document.getElementById('logoimg');
    const dropBtn = document.getElementsByClassName('dropBtn');
    const icon = this.document.getElementsByClassName('icon');
    // 设置图片的透明度为1（完全显示）和定位效果
    image.style.opacity = '1';
    image.style.transform = 'translateY(0)'; // 设置定位效果，这里是不进行位移

    logoimg.style.opacity = '1';
    logoimg.style.transform = 'translateX(0)';
    for (let i = 0; i < dropBtn.length; i++) {
        dropBtn[i].style.opacity = '1';
        dropBtn[i].style.transform = 'translateY(0)';
    }
    for (let ic = 0; ic < icon.length; ic++) {
        icon[ic].style.opacity = '1';
        icon[ic].style.transform = 'translateX(0)';
    }
    // 可以根据需要添加其他定位效果，比如旋转、缩放等
});
window.addEventListener('scroll', function () {
    const newsTitle = document.getElementById('newsTitle');
    const scrollHeight = window.scrollY;
    const appearPosition = 550;
    const moveDistance = 200;
    if (scrollHeight > appearPosition) {
        const opacity = (scrollHeight - appearPosition) / 200;
        newsTitle.style.opacity = opacity > 1 ? 1 : opacity;
        newsTitle.style.bottom = `${-moveDistance + (scrollHeight - appearPosition)}px`;
    } 
});
//滑鼠移過去 圖片翻轉效果
function moveUp2(element) {
    //往 左 轉10度
    element.style.transform = "rotate(-10deg)";
}
function moveDown2(element) {
    //返回原本位置
    element.style.transform = "translateY(0px)";//
}
function moveUp(element) {
    //往 右 轉10度
    element.style.transform = "rotate(10deg)";
}
function moveDown(element) {
    //返回原本位置
    element.style.transform = "translateY(0px)";
}
//scroll滑上滑下 更改背景顏色
const introduce = document.querySelector("article");
//wheel滑鼠滾輪
window.addEventListener('wheel', (event) => {
    //deltaY滾輪時往下滑為 正 , 往上滑為 負
    const direction = event.deltaY > 0 ? 'down' : 'up';
    // 根据滚动方向改变背景颜色
    if (direction === 'down') {
        introduce.style.backgroundColor = 'grey';
    } else {
        introduce.style.backgroundColor = '#4a4e69';
    }
}
);
//載入網頁 動畫效果
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
    //因為className有很多個，所以每個都要呼叫，用迴圈一個一個叫出來
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
//卷軸拉下  最新消息 文字圖片載入
window.addEventListener('scroll', function () {
    const newsTitle = document.getElementById('newsTitle');
    const newsthree = document.getElementsByClassName('newsthree');
    const scrollHeight = window.scrollY;
    const appearPosition = 550;//newsTitle最新消息
    const appearPosition2 =700;//newsthree消息列表
    const appearPosition3 =1200;//newsthree消息列表

    if (scrollHeight > appearPosition) {
        const opacity = (scrollHeight - appearPosition) / 200;
        const opacity2 =(scrollHeight - appearPosition2)/200;
        const opacity3 =(scrollHeight - appearPosition3)/200;
        newsTitle.style.opacity = opacity > 1 ? 1 : opacity;
        for (let i = 0; i < newsthree.length; i++) {
            newsthree[i].style.opacity = opacity2 > 1 ? 1 : opacity2;
        }

    } else {
        newsTitle.style.opacity = 0; // 滚动位置未达到出现位置时，设置透明度为0
        for (let i = 0; i < newsthree.length; i++) {
            newsthree[i].style.opacity = 0; // 滚动位置未达到出现位置时，设置透明度为0
        }
    }
});
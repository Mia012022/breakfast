function moveUp2(element) {
    element.style.transform="rotate(-10deg)";//往 左 轉10度
}
function moveDown2(element) {
    element.style.transform="translateY(0px)";//返回原本位置
    
}
function moveUp(element) {
    element.style.transform="rotate(10deg)";//往 右 轉10度
}
function moveDown(element) {
    element.style.transform="translateY(0px)";//返回原本位置
    
}
const introduce = document.querySelector("article");
window.addEventListener('wheel',(event)=>{           //wheel滑鼠滾輪
    const direction = event.deltaY > 0 ? 'down' : 'up';//deltaY滾輪時往下滑為 正 , 往上滑為 負

    // 根据滚动方向改变背景颜色
    if (direction === 'down') {
      introduce.style.backgroundColor = 'grey';
    } else {
      introduce.style.backgroundColor = '#4a4e69';
    }
  }
);

window.addEventListener('load', () => {
    const image = document.getElementById('image');
    const logoimg = document.getElementById('logoimg');
    // 设置图片的透明度为1（完全显示）和定位效果
    image.style.opacity = '1'; 
    image.style.transform = 'translateY(0)'; // 设置定位效果，这里是不进行位移
    logoimg.style.opacity ='1';
    logoimg.style.transform = 'tranlateX(0)';
    // 可以根据需要添加其他定位效果，比如旋转、缩放等
  });
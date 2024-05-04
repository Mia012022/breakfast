let selectedButton = null;

function selectButton(clickedButton) {
  // 移除之前選擇的按鈕的紅框效果
  if (selectedButton !== null) {
    selectedButton.classList.remove('selected');
  }
  timeValue.innerText = clickedButton.innerText;
  // 添加紅框效果到當前選擇的按鈕
  clickedButton.classList.add('selected');

  // 更新選擇的按鈕為當前按鈕
  selectedButton = clickedButton;
};

function getValue(){

    let adultNum = document.getElementById('adultNum');
    let childNum = document.getElementById('childNum');
    adultNumValue.innerText = adultNum.options[adultNum.selectedIndex].innerText;
    childNumValue.innerText = childNum.options[childNum.selectedIndex].innerText;
    dateValue.innerText = myDatepicker.value;
};


    
async function show_attack_method()
{
    const select_reaction_method = document.getElementById("select_reaction_method");
    select_reaction_method.innerHTML = "";
    console.log(selectedCharId);
    switch (selectedCharId)
    {
        case 56:
            const attack_method = document.getElementById("attack_method");
            const attack_index = attack_method.value;
            
            let options = [];
            
            if (attack_index[0]) {
              options = [
                { text: "１段目", value: "0", checked: true },
                { text: "２段目", value: "1" },
                { text: "３段目", value: "2" },
                { text: "４段目", value: "3", checked: true },
              ];
            } else if (attack_index[1]) {
              options = [
                { text: "重撃", value: "0", checked: true },
              ];
            } else if (attack_index[2]) {
              options = [
                { text: "滅浄三業", value: "0", checked: true },
              ];
            }
            createRadioButtons(options)
        break
    }

}



function createRadioButtons(options) {
    // ラジオボタンを生成
    options.forEach((option) => {
      const radioLabel = document.createElement("label");
      radioLabel.textContent = option.text;
  
      const radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.value = option.value;
      if (option.checked) {
        radioButton.checked = true;
      }
  
      // ラジオボタンとラベルをコンテナに追加
      const containerElement = document.getElementById("select_reaction_method"); // ここにラジオボタンを追加する要素を指定
      containerElement.appendChild(radioButton);
      containerElement.appendChild(radioLabel);
      containerElement.appendChild(document.createElement("br")); // 改行を追加
    });
  }
async function show_attack_method()
{
    const select_reaction_method = document.getElementById("select_reaction_method");
    select_reaction_method.innerHTML = "";
    switch (selectedCharId)
    {
        case "56":
            console.log(selectedCharId);
            const attack_method = document.getElementById("attack_method_id");
            const attack_index = attack_method.value;
            
            let options = [];
            
            if (attack_index == 0) {
              options = [
                { text: "１段目", value: "0", checked: true },
                { text: "２段目", value: "1" },
                { text: "３段目", value: "2" },
                { text: "４段目", value: "3", checked: true },
              ];
            } else if (attack_index == 1) {
              options = [
                { text: "重撃", value: "0", checked: true },
              ];
            } else if (attack_index==2) {
              options = [
                { text: "滅浄三業", value: "0", checked: true },
              ];
            }
            createCheckboxList(options)
        break
    }

}



function createCheckboxList(options) {
    const select_reaction_method = document.getElementById("select_reaction_method"); // チェックボックスを追加する要素を指定

    options.forEach((option) => {
        const checkboxLabel = document.createElement("label");
        checkboxLabel.textContent = option.text;

        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.value = option.value;
        if (option.checked) {
            checkboxInput.checked = true;
        }
        checkboxInput.id = "checkbox_" + option.value; // チェックボックスに一意のIDを設定
        checkboxLabel.htmlFor = checkboxInput.id;

        checkboxLabel.appendChild(checkboxInput); // チェックボックスをラベル内に追加
        select_reaction_method.appendChild(checkboxLabel); // ラベルを select_reaction_method に追加
    });
}

// 関数を呼び出してチェックボックスを生成
createCheckboxList(options); // optionsは適切なオプションの配列と仮定

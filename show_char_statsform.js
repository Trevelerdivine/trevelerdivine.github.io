async function show_char_statsform()
   {

    await calculate_depend_status();
    const lineBreak = document.createElement("br");
    let hp_form = document.getElementById("hp_form");
    let attck_form = document.getElementById("attck_form");
    let deff_form = document.getElementById("deff_form");
    let elm_form = document.getElementById("elm_form");
    let elm_charge_form = document.getElementById("elm_charge_form");
    let cr_form = document.getElementById("cr_form");
    let cd_form = document.getElementById("cd_form");
    let calculateButton = document.getElementById("calculateButton");
    
    // すべてのフォームを非表示にする
    const forms = [hp_form, attck_form, deff_form, elm_form, elm_charge_form, cr_form, cd_form];
    forms.forEach((form) => {
      form.style.display = "none";
    });
    calculateButton.style.display = "block";
  
    // 必要なフォームを表示する
    const formIndices = [0, 1, 2, 3, 4, 5, 6];
    formIndices.forEach((index) => {
      if (depend_status[index] == 1) {
        forms[index].style.display = "block";
      }
    });

    const characterSelect = document.getElementById("char_index");
    const selectedCharacter = characterSelect.value;
    const characterInfo = document.getElementById("characterInfo");
    characterInfo.style.display = "block";

    // チェックボックスの表示をクリア
    characterInfo.innerHTML = "";

      if (selectedCharacter === "0") {
    // ナヒーダの特性情報を表示
    const traits = [
      { label: "1重：心識蘊蔵の種", value: "traitCheckbox" },
      { label: "2重：正覚善見の根 激化で防御力-20%", value: "traitCheckbox2" },
      { label: "4重：正覚善見の根 激化で防御力-20%", value: "traitCheckbox3" }
    ];

    traits.forEach((trait) => {
      const traitCheckbox = document.createElement("input");
      traitCheckbox.type = "checkbox";
      traitCheckbox.id = trait.value;
      traitCheckbox.value = trait.value;

      const traitLabel = document.createElement("label");
      traitLabel.htmlFor = trait.value;
      traitLabel.textContent = trait.label;

      characterInfo.appendChild(traitCheckbox);
      characterInfo.appendChild(traitLabel);
      characterInfo.appendChild(lineBreak);
    });
      // 雷電将軍の特性を考慮するかを選ぶチェックボックスを表示
      const traitCheckbox = document.createElement("input");
      traitCheckbox.type = "checkbox";
      traitCheckbox.id = "traitCheckbox";
      traitCheckbox.value = "traitCheckbox";

      const traitLabel = document.createElement("label");
      traitLabel.htmlFor = "traitCheckbox";
      traitLabel.textContent = "神変·悪曜開眼: 元素爆発ダメージ+27%";

      const traitCheckbox2 = document.createElement("input");
      traitCheckbox2.type = "checkbox";
      traitCheckbox2.id = "traitCheckbox2";
      traitCheckbox2.value = "traitCheckbox2";

      const traitLabel2 = document.createElement("label");
      traitLabel2.htmlFor = "traitCheckbox2";
      traitLabel2.textContent = "絶縁";

      characterInfo.appendChild(traitCheckbox);
      characterInfo.appendChild(traitLabel);
      characterInfo.appendChild(lineBreak);
      characterInfo.appendChild(traitCheckbox2);
      characterInfo.appendChild(traitLabel2);
    }
}
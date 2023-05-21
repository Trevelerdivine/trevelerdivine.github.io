async function show_char_statsform()
   {

    await calculate_depend_status();
    let hp_form = document.getElementById("hp_form");
    let attck_form = document.getElementById("attck_form");
    let deff_form = document.getElementById("deff_form");
    let elm_form = document.getElementById("elm_form");
    let elm_charge_form = document.getElementById("elm_charge_form");
    let cr_form = document.getElementById("cr_form");
    let cd_form = document.getElementById("cd_form");
    let calculateButton = document.getElementById("calculateButton");
    
    const formElements = [
      { form: hp_form, index: 0 },
      { form: attck_form, index: 1 },
      { form: deff_form, index: 2 },
      { form: elm_form, index: 3 },
      { form: elm_charge_form, index: 4 },
      { form: cr_form, index: 5 },
      { form: cd_form, index: 6 }
    ];
    
    for (const element of formElements) {
      if (depend_status[element.index] === 1) {
        element.form.style.display = "block";
      }
    }
  
    const characterSelect = document.getElementById("char_index");
    const selectedCharacter = characterSelect.value;
    const characterInfo = document.getElementById("characterInfo");
    characterInfo.style.display = "block";

    // チェックボックスの表示をクリア
    characterInfo.innerHTML = "";
    if (selectedCharacter === "0") {
      const traits = [
        {
          id: "traitCheckbox",
          label: "1重：心識蘊蔵の種"
        },
        {
          id: "traitCheckbox2",
          label: "2重：正覚善見の根 激化で防御力-20%"
        },
        {
          id: "traitCheckbox3",
          label: "4重：比量現行の茎 敵の人数に応じて熟知バフ"
        },
        {
          id: "traitCheckbox4",
          label: "6重：大辯円成の実 追撃"
        }
      ];
      
      for (let i = 0; i < traits.length; i++) {
        const traitCheckbox = document.createElement("input");
        traitCheckbox.type = "checkbox";
        traitCheckbox.id = traits[i].id;
        traitCheckbox.value = traits[i].id;
      
        const traitLabel = document.createElement("label");
        traitLabel.htmlFor = traits[i].id;
        traitLabel.textContent = traits[i].label;
      
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        const lineBreak = document.createElement("br");
        characterInfo.appendChild(lineBreak);
      }
      
    } else if (selectedCharacter === "3") {
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
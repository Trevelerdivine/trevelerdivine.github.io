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
    const char_constellations = document.getElementById("char_constellations").value;

    hp_form.style.display = "none";  // HPフォームを非表示
    attck_form.style.display = "none";  // 攻撃力フォームを非表示
    deff_form.style.display = "none";  // 防御力フォームを非表示
    elm_form.style.display = "none";  // 元素熟知を非表示
    elm_charge_form.style.display = "none";  // 元素チャージ効率フォームを非表示
    cr_form.style.display = "none";  // 会心率フォームを非表示
    cd_form.style.display = "none";  // 会心ダメージフォームを非表示
    calculateButton.style.display = "block";
    
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
    const checkboxStates = []; // チェックボックスの状態を格納する配列
    characterInfo.style.display = "block";

// チェックボックスと説明テキストの表示をクリア
const existingCheckboxes = characterInfo.querySelectorAll("input[type=checkbox]");
for (const checkbox of existingCheckboxes) {
  checkbox.remove();
  const associatedLabel = document.querySelector(`label[for="${checkbox.id}"]`);
  associatedLabel.remove();
}

// 改行を削除
const lineBreaks = characterInfo.querySelectorAll("br");
for (const lineBreak of lineBreaks) {
  lineBreak.remove();
}
    if (selectedCharacter === "0") {
      const traits = [
        {
          id: "traitCheckbox",
          label: "第1重：心識蘊蔵の種"
        },
        {
          id: "traitCheckbox2",
          label: "第2重：正覚善見の根 激化で防御力-30%"
        },
        {
          id: "traitCheckbox3",
          label: "第4重：比量現行の茎 敵の人数に応じて熟知バフ"
        },
        {
          id: "traitCheckbox4",
          label: "第6重：大辯円成の実 追撃"
        }
      ];
      if (char_constellations > 0)
      {
        for (let i = 0; i < char_constellations; i++) {
          const traitCheckbox = document.createElement("input");
          traitCheckbox.type = "checkbox";
          traitCheckbox.id = traits[i].id;
          traitCheckbox.value = traits[i].id;
          traitCheckbox.checked = true;
        
          const traitLabel = document.createElement("label");
          traitLabel.htmlFor = traits[i].id;
          traitLabel.textContent = traits[i].label;
        
          characterInfo.appendChild(traitCheckbox);
          characterInfo.appendChild(traitLabel);
          const lineBreak = document.createElement("br");
          characterInfo.appendChild(lineBreak);
        }
      }
    } else if (selectedCharacter === "3") {
        const traits = [
          {
            id: "traitCheckbox",
            label: "第1重：悪曜の呪詛 眼力溜まりやすさup"
          },
          {
            id: "traitCheckbox2",
            label: "第2重：斬鉄断金 防御力60%無視"
          },
          {
            id: "traitCheckbox3",
            label: "第4重：常道への誓い 雷電将軍以外の攻撃力+30%"
          },
          {
            id: "traitCheckbox4",
            label: "第6重：願いの代行者 雷電将軍以外の元素爆発クールタイム減少"
          }
        ];
        if (char_constellations > 0)
        {
          for (let i = 0; i < char_constellations; i++) {
            const traitCheckbox = document.createElement("input");
            traitCheckbox.type = "checkbox";
            traitCheckbox.id = traits[i].id;
            traitCheckbox.value = traits[i].id;
            traitCheckbox.checked = true;
          
            const traitLabel = document.createElement("label");
            traitLabel.htmlFor = traits[i].id;
            traitLabel.textContent = traits[i].label;
          
            characterInfo.appendChild(traitCheckbox);
            characterInfo.appendChild(traitLabel);
            const lineBreak = document.createElement("br");
            characterInfo.appendChild(lineBreak);
          }
        }
      }
    }
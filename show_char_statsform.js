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
    let fix_hp_form = document.getElementById("fix_hp_form");
    let fix_hprate_form = document.getElementById("fix_hp%_form");
    let fix_attack_form = document.getElementById("fix_attack_form");
    let fix_attackrate_form = document.getElementById("fix_attack%_form");
    let fix_deff_form = document.getElementById("fix_deff_form");
    let fix_deffrate_form = document.getElementById("fix_deff%_form");
    let fix_elm_form = document.getElementById("fix_elm_form");
    let fix_elm_charge_form = document.getElementById("fix_elm_charge_form");
    let fix_cr_form = document.getElementById("fix_cr_form");
    let fix_cd_form = document.getElementById("fix_cd_form");
    let dynamic_hp_form = document.getElementById("dynamic_hp_form");
    let dynamic_hprate_form = document.getElementById("dynamic_hp%_form");
    let dynamic_attack_form = document.getElementById("dynamic_attack_form");
    let dynamic_attackrate_form = document.getElementById("dynamic_attack%_form");
    let dynamic_deff_form = document.getElementById("dynamic_deff_form");
    let dynamic_deffrate_form = document.getElementById("dynamic_deff%_form");
    let dynamic_elm_form = document.getElementById("dynamic_elm_form");
    let dynamic_elm_charge_form = document.getElementById("dynamic_elm_charge_form");
    let dynamic_cr_form = document.getElementById("dynamic_cr_form");
    let dynamic_cd_form = document.getElementById("dynamic_cd_form");
    let calculateButton = document.getElementById("calculateButton");
    const char_constellations = document.getElementById("char_constellations").value;

    hp_form.style.display = "none";  // HPフォームを非表示
    attck_form.style.display = "none";  // 攻撃力フォームを非表示
    deff_form.style.display = "none";  // 防御力フォームを非表示
    elm_form.style.display = "none";  // 元素熟知を非表示
    elm_charge_form.style.display = "none";  // 元素チャージ効率フォームを非表示
    cr_form.style.display = "none";  // 会心率フォームを非表示
    cd_form.style.display = "none";  // 会心ダメージフォームを非表示
    fix_hp_form.style.display = "none";
    fix_hprate_form.style.display = "none";
    fix_attack_form.style.display = "none";
    fix_attackrate_form.style.display = "none";
    fix_deff_form.style.display = "none";
    fix_deffrate_form.style.display = "none";
    fix_elm_form.style.display = "none";
    fix_elm_charge_form.style.display = "none";
    fix_cr_form.style.display = "none";
    fix_cd_form.style.display = "none";
    dinamic_hp_form.style.display = "none";
    dinamic_hprate_form.style.display = "none";
    dinamic_attack_form.style.display = "none";
    dinamic_attackrate_form.style.display = "none";
    dinamic_deff_form.style.display = "none";
    dinamic_deffrate_form.style.display = "none";
    dinamic_elm_form.style.display = "none";
    dinamic_elm_charge_form.style.display = "none";
    dinamic_cr_form.style.display = "none";
    dinamic_cd_form.style.display = "none";
    calculateButton.style.display = "block";
    
    const characterInfo = document.getElementById("characterInfo");
    const checkboxStates = []; // チェックボックスの状態を格納する配列
    characterInfo.style.display = "block";

    characterInfo.innerHTML = "";
    
    if (selectedCharId  === "56") {
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
    } else if (selectedCharId  === "34")
      {
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
          for (let i = 0; i < char_constellations; i++) 
          {
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
      const formElements = [
        { forms: [hp_form, fix_hp_form, fix_hprate_form, dynamic_hp_form, dynamic_hprate_form], index: 0 },
        { forms: [attack_form, fix_attack_form, fix_attackrate_form, dynamic_attack_form, dynamic_attackrate_form], index: 4 },
        { forms: [deff_form, fix_deff_form, fix_deffrate_form, dynamic_deff_form, dynamic_deffrate_form], index: 1 },
        { forms: [elm_form, fix_elm_form, dynamic_elm_form], index: 2 },
        { forms: [elm_charge_form, fix_elm_charge_form], dynamic_elm_charge_form, index: 3 },
        { forms: [cr_form, fix_cr_form, dynamic_cr_form], index: 5 },
        { forms: [cd_form, fix_cd_for, dynamic_cd_form], index: 6 }
      ];
      
      for (const element of formElements) {
        if (depend_status[element.index] === 1) {
          for (let i = 0; i < element.forms.length; i++) {
            element.forms[i].style.display = "block";
          }
        }
      }
    }
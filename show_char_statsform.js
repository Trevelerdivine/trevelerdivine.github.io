async function show_char_statsform() {
  await calculate_depend_status();

  // フォーム要素の取得
  const forms = [
    "hp_form", "attck_form", "deff_form", "elm_form", "elm_charge_form",
    "cr_form", "cd_form", "team_hp_form", "team_hprate_form",
    "team_attack_form", "team_attackrate_form", "team_deff_form",
    "team_deffrate_form", "team_elm_form", "team_elm_charge_form",
    "team_cr_form", "team_cd_form"
  ];

  for (const formId of forms) {
    const formElement = document.getElementById(formId);
    if (formElement) {
      formElement.style.display = "none";
    }
  }
    
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
        { forms: [hp_form, team_hp_form, team_hprate_form], index: 0 },
        { forms: [attck_form, team_attack_form, team_attackrate_form], index: 4 },
        { forms: [deff_form, team_deff_form, team_deffrate_form], index: 1 },
        { forms: [elm_form, team_elm_form], index: 2 },
        { forms: [elm_charge_form, team_elm_charge_form], index: 3 },
        { forms: [cr_form, team_cr_form], index: 5 },
        { forms: [cd_form, team_cd_form], index: 6 }
      ];
      
      for (const element of formElements) {
        if (depend_status[element.index] === 1) {
          for (let i = 0; i < element.forms.length; i++) {
            element.forms[i].style.display = "table-row";
          }
        }
      }
    }
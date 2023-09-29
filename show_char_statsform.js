async function show_char_statsform()
   {
    let hp_form = document.getElementById("hp_form");
    let attck_form = document.getElementById("attck_form");
    let deff_form = document.getElementById("deff_form");
    let elm_form = document.getElementById("elm_form");
    let elm_charge_form = document.getElementById("elm_charge_form");
    let cr_form = document.getElementById("cr_form");
    let cd_form = document.getElementById("cd_form");
    let team_hp_form = document.getElementById("team_hp_form");
    let team_hprate_form = document.getElementById("team_hprate_form");
    let team_attack_form = document.getElementById("team_attack_form");
    let team_attackrate_form = document.getElementById("team_attackrate_form");
    let team_deff_form = document.getElementById("team_deff_form");
    let team_deffrate_form = document.getElementById("team_deffrate_form");
    let team_elm_form = document.getElementById("team_elm_form");
    let team_elm_charge_form = document.getElementById("team_elm_charge_form");
    let team_cr_form = document.getElementById("team_cr_form");
    let team_cd_form = document.getElementById("team_cd_form")



    const char_constellations = document.getElementById("char_constellations").value;
    hp_form.style.display = "none";  // HPフォームを非表示
    attck_form.style.display = "none";  // 攻撃力フォームを非表示
    deff_form.style.display = "none";  // 防御力フォームを非表示
    elm_form.style.display = "none";  // 元素熟知を非表示
    elm_charge_form.style.display = "none";  // 元素チャージ効率フォームを非表示
    cr_form.style.display = "none";  // 会心率フォームを非表示
    cd_form.style.display = "none";  // 会心ダメージフォームを非表示
    team_hp_form.style.display = "none";
    team_hprate_form.style.display = "none";
    team_attack_form.style.display = "none";
    team_attackrate_form.style.display = "none";
    team_deff_form.style.display = "none";
    team_deffrate_form.style.display = "none";
    team_elm_form.style.display = "none";
    team_elm_charge_form.style.display = "none";
    team_cr_form.style.display = "none";
    team_cd_form.style.display = "none";
    
    const characterInfo = document.getElementById("characterInfo");
    const elemental_reaction = document.getElementById("element_action");
    const attack_method = document.getElementById("attack_method");
    const char_talent = document.getElementById("char_talent");

    characterInfo.style.display = "block";

    characterInfo.innerHTML = "";
    elemental_reaction.innerHTML = "";
    attack_method.innerHTML = "";
    char_talent.innerHTML = "";
    if (selectedCharId === "56") {
      const traits = [
        { id: "traitCheckbox", label: "第1重：心識蘊蔵の種" },
        { id: "traitCheckbox2", label: "第2重：防御力-30%" },
        { id: "traitCheckbox3", label: "第4重：蘊種印状態にある敵数：" },
        { id: "traitCheckbox4", label: "第6重：大辯円成の実 追撃" },
      ];

      const options = [
        { text: "攻撃方法", value: "", disabled: true, selected: true },
        { text: "通常攻撃（1ループ）", value: "1" },
        { text: "重撃", value: "6" },
        { text: "スキル（滅浄三業）", value: "16" }
      ];
      
      if (char_constellations == 4) {
        options.push({ text: "滅浄三業·破業障(6凸)", value: "17" });
      }
    
      createchar_attackmethod(options);
    
      const elementsToAddToCharTalent = [
        createCheckbox("nahida_Q", true),
        createLabel("nahida_Q", "摩耶の宮殿"),
        createCheckbox("talent1", true),
        createLabel("talent1", "出場中"),
        document.createElement("br"),
        createTextNode("　炎元素キャラ数："),
        createSelectList("nahida_Qpyro", 3, "人"),
        document.createElement("br"),
        createLabel("maxMasteryLabel", "チーム内最大熟知キャラ"),
        document.createElement("br"),
        createRadio("char_type", "nahida", true, "nahida-label", "ナヒーダ"),
        createLabel("nahida-label", "ナヒーダ"),
        document.createElement("br"),
        createRadio("char_type", "other", false, "other-label", "その他"),
        createLabel("other-label", "その他"),
        document.createElement("br"),
        createLabel("element-mastery-label", "　元素熟知："),
        createInput("text", "element-mastery", "800"),
        document.createElement("br")
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
    
      if (char_constellations > 1)
      {
        let traitCheckbox = createCheckbox(traits[1].id, true);
        let traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    
      if (char_constellations > 2)
      {
        traitCheckbox = createCheckbox(traits[2].id, true);
        traitLabel = createLabel(traits[2].id, traits[2].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        const four_conste_selectList = createSelectList("four_conste", 4, "体");
        const four_conste_option = document.createElement("option");
        four_conste_option.value = 4;
        four_conste_option.text = "4体以上";
        four_conste_selectList.appendChild(four_conste_option);
        characterInfo.appendChild(four_conste_selectList);
      }
    }
    

    else if (selectedCharId  === "34")
    {
      const traits = [
        {
          id: "traitCheckbox",
          label: "第1重：悪曜の呪詛 眼力溜まりやすさup"
        },
        {
          id: "traitCheckbox2",
          label: "第2重：防御力60%無視"
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

      const options = [
        { text: "攻撃方法", value: "", disabled: true, selected: true },
        { text: "通常1ループ（爆発中）", value: "21" },
        { text: "重撃(爆発中)", value: "22" },
        { text: "元素爆発（初撃）", value: "23" },
      ];

      createchar_attackmethod(options)

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
      showFormElements();
    }

function createchar_attackmethod(options)
{
  const selectElement = document.createElement("select");
  selectElement.id = "attack_method_id";

  // オプションを追加
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.text = option.text;
    optionElement.value = option.value;
    if (option.disabled) {
      optionElement.disabled = true;
    }
    if (option.selected) {
      optionElement.selected = true;
    }
    selectElement.appendChild(optionElement);
  });

  // 生成したセレクトボックスを指定された要素に追加
  const containerElement = document.getElementById("attack_method"); // ここにセレクトボックスを追加する要素を指定
  containerElement.appendChild(selectElement);
}

function showFormElements()
{
  let hp_form = document.getElementById("hp_form");
  let attck_form = document.getElementById("attck_form");
  let deff_form = document.getElementById("deff_form");
  let elm_form = document.getElementById("elm_form");
  let elm_charge_form = document.getElementById("elm_charge_form");
  let cr_form = document.getElementById("cr_form");
  let cd_form = document.getElementById("cd_form");
  let team_hp_form = document.getElementById("team_hp_form");
  let team_hprate_form = document.getElementById("team_hprate_form");
  let team_attack_form = document.getElementById("team_attack_form");
  let team_attackrate_form = document.getElementById("team_attackrate_form");
  let team_deff_form = document.getElementById("team_deff_form");
  let team_deffrate_form = document.getElementById("team_deffrate_form");
  let team_elm_form = document.getElementById("team_elm_form");
  let team_elm_charge_form = document.getElementById("team_elm_charge_form");
  let team_cr_form = document.getElementById("team_cr_form");
  let team_cd_form = document.getElementById("team_cd_form");
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


async function elemental_reaction_add()
{
  let elm_form = document.getElementById("elm_form");
  let team_elm_form = document.getElementById("team_elm_form");
  elm_form.style.display = "none";
  team_elm_form.style.display = "none";
  await calculate_depend_status();
  showFormElements();
}

// チェックボックスを生成するユーティリティ関数
function createCheckbox(id, checked) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.checked = checked;
  return checkbox;
}

// ラベルを生成するユーティリティ関数
function createLabel(forId, labelText) {
  const label = document.createElement("label");
  label.htmlFor = forId;
  label.textContent = labelText;
  return label;
}

// テキストノードを生成するユーティリティ関数
function createTextNode(text) {
  return document.createTextNode(text);
}

// セレクトリストを生成するユーティリティ関数
function createSelectList(id, optionsCount, unit) {
  const selectList = document.createElement("select");
  selectList.id = id;

  for (let j = 0; j < optionsCount; j++) {
    const option = document.createElement("option");
    option.value = j;
    option.text = `${j}${unit}`;
    selectList.appendChild(option);
  }

  return selectList;
}

function createRadio(name, value, checked, id, labelText) {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = name;
  radio.value = value;
  radio.checked = checked;
  radio.id = id;
  return radio;
}

function createInput(type, id, value) {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.value = value;
  return input;
}

async function reffer_char_element() {
  const method_index = document.getElementById("attack_method").value;

  if (method_index > 0) {
    let element_type;

    if (method_index >= 1 && method_index <= 5) {
      element_type = 0;
    } else if (method_index >= 6 && method_index <= 10) {
      element_type = 1;
    } else if (method_index >= 11 && method_index <= 15) {
      element_type = 2;
    } else if (method_index >= 16 && method_index <= 20) {
      element_type = 3;
    } else if (method_index >= 21 && method_index <= 25) {
      element_type = 4;
    } else {
      element_type = -1; // エラーハンドリングの場合、デフォルト値を設定する
    }

    const response = await fetch(`./data/character/char_data/${char_name[selectedCharId]}.json`);
    const data = await response.json();

    char_propaty[0] = data[attack_method_name[element_type]]["元素"];
  }

  console.log(char_propaty);

  const elemental_reaction = document.getElementById("element_action");
  const radio_label = document.createElement("label");
  const radiobutton = document.createElement("input");
  radiobutton.type = "radio";
  radiobutton.id = "no-reaction";
  radiobutton.name = "elemental-reaction";
  radiobutton.checked = true;
  radiobutton.value = "no-reaction";
  
  elemental_reaction.innerHTML = "";
  radio_label.htmlFor = "no-reaction";
  radio_label.textContent = "反応なし";
  elemental_reaction.appendChild(radiobutton);
  elemental_reaction.appendChild(radio_label);

  const createTraitCheckbox = (id, value, label) => {
    const traitCheckbox = document.createElement("input");
    traitCheckbox.type = "radio";
    traitCheckbox.id = id;
    traitCheckbox.name = "elemental-reaction";
    traitCheckbox.value = value;

    const traitLabel = document.createElement("label");
    traitLabel.htmlFor = id;
    traitLabel.textContent = label;

    elemental_reaction.appendChild(traitCheckbox);
    elemental_reaction.appendChild(traitLabel);
  };

  switch (char_propaty[0]) {
    case 0:
      createTraitCheckbox(elm_reaction_obj[0].id, elm_reaction_obj[0].id, elm_reaction_obj[0].label);
      createTraitCheckbox(elm_reaction_obj[2].id, elm_reaction_obj[2].id, elm_reaction_obj[2].label);
      break;

    case 1:
      createTraitCheckbox(elm_reaction_obj[1].id, elm_reaction_obj[1].id, elm_reaction_obj[1].label);
      break;

    case 2:
      createTraitCheckbox(elm_reaction_obj[3].id, elm_reaction_obj[3].id, elm_reaction_obj[3].label);
      break;

    case 3:
      createTraitCheckbox(elm_reaction_obj[5].id, elm_reaction_obj[5].id, elm_reaction_obj[5].label);
      break;

    case 5:
      createTraitCheckbox(elm_reaction_obj[4].id, elm_reaction_obj[4].id, elm_reaction_obj[4].label);
      break;

    default:
      break;
  }
}

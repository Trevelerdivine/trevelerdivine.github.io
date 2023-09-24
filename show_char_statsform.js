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
    let team_cd_form = document.getElementById("team_cd_form");
    const char_constellations = document.getElementById("char_constellations").value;
    const response = await fetch("./data/character/char_data/" + char_name[selectedCharId] + ".json");
    const data = await response.json();
    char_propaty = data.ステータス.属性;

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
    characterInfo.style.display = "block";

    characterInfo.innerHTML = "";
    elemental_reaction.innerHTML = "";
    attack_method.innerHTML = "";

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

      const options = [
        { text: "攻撃方法", value: "", disabled: true, selected: true },
        { text: "通常攻撃（1ループ）", value: "0" },
        { text: "重撃", value: "1" },
        { text: "スキル（滅浄三業）", value: "2" },
      ];

      createchar_attackmethod(options)

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

        const options = [
          { text: "攻撃方法", value: "", disabled: true, selected: true },
          { text: "通常1ループ（爆発中）", value: "0" },
          { text: "重撃(爆発中)", value: "1" },
          { text: "元素爆発（初撃）", value: "2" },
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

      const radiobutton = document.createElement("input");
      radiobutton.type = "radio";
      radiobutton.id = "no-reaction";
      radiobutton.name = "elemental-reaction";
      radiobutton.checked = true;
      radiobutton.value = "no-reaction";
      
      const radio_label = document.createElement("label");
      radio_label.htmlFor = "no-reaction";
      radio_label.textContent = "反応なし";
      
      elemental_reaction.appendChild(radiobutton);
      elemental_reaction.appendChild(radio_label);

      if (char_propaty[0] == 0)
      {
        const traitCheckbox1 = document.createElement("input");
        traitCheckbox1.type = "radio";
        traitCheckbox1.id = elm_reaction_obj[0].id;
        traitCheckbox1.name = "elemental-reaction";
        traitCheckbox1.value = elm_reaction_obj[0].id;

        const traitLabel1 = document.createElement("label");
        traitLabel1.htmlFor = elm_reaction_obj[0].id;
        traitLabel1.textContent = elm_reaction_obj[0].label;

        const traitCheckbox2 = document.createElement("input");
        traitCheckbox2.type = "radio";
        traitCheckbox2.id = elm_reaction_obj[2].id;
        traitCheckbox2.name = "elemental-reaction";
        traitCheckbox2.value = elm_reaction_obj[2].id;

        traitLabel2 = document.createElement("label");
        traitLabel2.htmlFor = elm_reaction_obj[2].id;
        traitLabel2.textContent = elm_reaction_obj[2].label;

        elemental_reaction.appendChild(traitCheckbox1);
        elemental_reaction.appendChild(traitLabel1);
        elemental_reaction.appendChild(traitCheckbox2);
        elemental_reaction.appendChild(traitLabel2);
      }

      if (char_propaty[0] == 1)
      {
        const traitCheckbox1 = document.createElement("input");
        traitCheckbox1.type = "radio";
        traitCheckbox1.name = "elemental-reaction";
        traitCheckbox1.id = elm_reaction_obj[1].id;
        traitCheckbox1.value = elm_reaction_obj[1].id;

        const traitLabel1 = document.createElement("label");
        traitLabel1.htmlFor = elm_reaction_obj[1].id;
        traitLabel1.textContent = elm_reaction_obj[1].label;

        elemental_reaction.appendChild(traitCheckbox1);
        elemental_reaction.appendChild(traitLabel1);
      }

      if (char_propaty[0] == 2)
      {
        const traitCheckbox1 = document.createElement("input");
        traitCheckbox1.type = "radio";
        traitCheckbox1.id = elm_reaction_obj[3].id;
        traitCheckbox1.name = "elemental-reaction";
        traitCheckbox1.value = elm_reaction_obj[3].id;

        const traitLabel1 = document.createElement("label");
        traitLabel1.htmlFor = elm_reaction_obj[3].id;
        traitLabel1.textContent = elm_reaction_obj[3].label;

        elemental_reaction.appendChild(traitCheckbox1);
        elemental_reaction.appendChild(traitLabel1);
      }

      if (char_propaty[0] == 3)
      {
        const traitCheckbox1 = document.createElement("input");
        traitCheckbox1.type = "radio";
        traitCheckbox1.name = "elemental-reaction";
        traitCheckbox1.id = elm_reaction_obj[5].id;
        traitCheckbox1.value = elm_reaction_obj[5].id;

        const traitLabel1 = document.createElement("label");
        traitLabel1.htmlFor = elm_reaction_obj[5].id;
        traitLabel1.textContent = elm_reaction_obj[5].label;

        elemental_reaction.appendChild(traitCheckbox1);
        elemental_reaction.appendChild(traitLabel1);
      }

      if (char_propaty[0] == 5)
      {
        const traitCheckbox1 = document.createElement("input");
        traitCheckbox1.type = "radio";
        traitCheckbox1.id = elm_reaction_obj[4].id;
        traitCheckbox1.name = "elemental-reaction";
        traitCheckbox1.value = elm_reaction_obj[4].id;

        const traitLabel1 = document.createElement("label");
        traitLabel1.htmlFor = elm_reaction_obj[4].id;
        traitLabel1.textContent = elm_reaction_obj[4].label;

        elemental_reaction.appendChild(traitCheckbox1);
        elemental_reaction.appendChild(traitLabel1);
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

function showFormElements() {
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

  await calculate_depend_status();
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
  await calculate_depend_status();
  showFormElements();
}
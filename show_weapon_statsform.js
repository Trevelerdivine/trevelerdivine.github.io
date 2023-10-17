async function show_weapon_statsform() {
  let weaponInfo = document.getElementById("weaponInfo");
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
  const weapon_rank = document.getElementById("weapon_rank").value;

  hp_form.style.display = "none"; // HPフォームを非表示
  attck_form.style.display = "none"; // 攻撃力フォームを非表示
  deff_form.style.display = "none"; // 防御力フォームを非表示
  elm_form.style.display = "none"; // 元素熟知を非表示
  elm_charge_form.style.display = "none"; // 元素チャージ効率フォームを非表示
  cr_form.style.display = "none"; // 会心率フォームを非表示
  cd_form.style.display = "none"; // 会心ダメージフォームを非表示
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
  weaponInfo.style.display = "block";

  weaponInfo.innerHTML = "";

  if (selectedWeaponId == "127") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "千夜の暁歌：チームキャラの元素に応じてバフ"
      }
    ];
  
    const traitCheckbox = document.createElement("input");
    traitCheckbox.type = "checkbox";
    traitCheckbox.id = traits[0].id;
    traitCheckbox.value = traits[0].id;
    traitCheckbox.checked = true;
  
    const traitLabel = document.createElement("label");
    traitLabel.htmlFor = traits[0].id;
    traitLabel.textContent = traits[0].label;
  
    const textNode1 = document.createTextNode("　同じ元素のキャラ数　　");
    const textNode2 = document.createTextNode("　異なる元素のキャラ数　");
    const traitContainer = document.createElement("div"); // テキストとチェックボックスを包むコンテナ要素
  
    traitContainer.classList.add("checkbox-container");
    traitContainer.appendChild(traitCheckbox);
    traitContainer.appendChild(traitLabel);
  
    const selectList1 = createSelectList("traitSelect1", 3); // 1つ目のプルダウンリストを生成
    const selectList2 = createSelectList("traitSelect2", 3); // 2つ目のプルダウンリストを生成
  
    weaponInfo.appendChild(traitContainer);
    weaponInfo.appendChild(textNode1);
    weaponInfo.appendChild(selectList1);
    weaponInfo.appendChild(document.createElement("br"));
    weaponInfo.appendChild(textNode2);
    weaponInfo.appendChild(selectList2);
  
    // プルダウンリストを生成する関数
    function createSelectList(id, optionCount) {
      const selectList = document.createElement("select");
      selectList.id = id;
  
      for (let i = 0; i <= optionCount; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = `${i}人`;
        selectList.appendChild(option);
      }
  
      return selectList;
    }
  }
  
  else if (selectedWeaponId == "68") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "非時の夢·常世竈食: 元素チャージ効率が100%を超えた部分の28%分、攻撃力がアップ。最大80%まで。元素チャージ効率+30%"
      }
    ];
        const traitCheckbox = document.createElement("input");
        traitCheckbox.type = "checkbox";
        traitCheckbox.id = traits[0].id;
        traitCheckbox.value = traits[0].id;
        traitCheckbox.checked = true;

        const traitLabel = document.createElement("label");
        traitLabel.htmlFor = traits[0].id;
        traitLabel.textContent = traits[0].label;

        weaponInfo.appendChild(traitCheckbox);
        weaponInfo.appendChild(traitLabel);
      }

      else if (selectedWeaponId == "54") {
        const traits = [
          {
            id: "traitCheckbox",
            label: "注入の刃: 攻撃力と防御力+6%/7.5%/9%/10.5%/12%"
          }
        ];
            const Whiteblind_effect = createweaponSelectList("Whiteblind_effect", 0, 4, "", "層", 4);
            const traitCheckbox = document.createElement("input");
            traitCheckbox.type = "checkbox";
            traitCheckbox.id = traits[0].id;
            traitCheckbox.value = traits[0].id;
            traitCheckbox.checked = true;
    
            const traitLabel = document.createElement("label");
            traitLabel.htmlFor = traits[0].id;
            traitLabel.textContent = traits[0].label;
    
            weaponInfo.appendChild(traitCheckbox);
            weaponInfo.appendChild(traitLabel);
            weaponInfo.appendChild(Whiteblind_effect);
          }

      else if (selectedWeaponId == "69") {
        const traits = [
          {
            id: "traitCheckbox",
            label: "護摩の杖：HP50%未満"
          }
        ];
            const traitCheckbox = document.createElement("input");
            traitCheckbox.type = "checkbox";
            traitCheckbox.id = traits[0].id;
            traitCheckbox.value = traits[0].id;
            traitCheckbox.checked = true;
    
            const traitLabel = document.createElement("label");
            traitLabel.htmlFor = traits[0].id;
            traitLabel.textContent = traits[0].label;
    
            weaponInfo.appendChild(traitCheckbox);
            weaponInfo.appendChild(traitLabel);
          }

  const formElements = [
    { form: hp_form, index: 0 },
    { form: attck_form, index: 4 },
    { form: deff_form, index: 1 },
    { form: elm_form, index: 2 },
    { form: elm_charge_form, index: 3 },
    { form: cr_form, index: 5 },
    { form: cd_form, index: 6 }
  ];

  for (const element of formElements) {
    if (depend_status[element.index] === 1) {
      element.form.style.display = "table-row";
    }
  }
}

function createweaponSelectList(id, initial, optionsCount, head_unit, unit, select_index) {
  const selectList = document.createElement("select");
  selectList.id = id;

  for (let j = initial; j <= optionsCount; j++) { // 条件を j <= optionsCount に変更
    const option = document.createElement("option");
    option.value = j;
    option.text = `${head_unit}${j}${unit}`;
    
    if (j == select_index) {
      option.selected = true;
    }
    
    selectList.appendChild(option);
  }

  return selectList;
}
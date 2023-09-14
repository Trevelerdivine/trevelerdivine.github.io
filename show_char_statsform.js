async function show_char_statsform() {
  await calculate_depend_status();
  const char_constellations = document.getElementById("char_constellations").value;

  // フォーム要素のIDをまとめる
  const formIds = [
    "hp_form", "attck_form", "deff_form", "elm_form", "elm_charge_form",
    "cr_form", "cd_form", "team_hp_form", "team_hprate_form",
    "team_attack_form", "team_attackrate_form", "team_deff_form",
    "team_deffrate_form", "team_elm_form", "team_elm_charge_form",
    "team_cr_form", "team_cd_form"
  ];

  // フォーム要素を非表示にする
  formIds.forEach(id => {
    const form = document.getElementById(id);
    if (form) {
      form.style.display = "none";
    }
  });

  const characterInfo = document.getElementById("characterInfo");
  const checkboxStates = []; // チェックボックスの状態を格納する配列
  characterInfo.style.display = "block";
  characterInfo.innerHTML = "";

  if (selectedCharId === "56" || selectedCharId === "34") {
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

    if (char_constellations > 0) {
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

  const formElements = [
    { forms: ["hp_form", "team_hp_form", "team_hprate_form"], index: 0 },
    { forms: ["attck_form", "team_attack_form", "team_attackrate_form"], index: 4 },
    { forms: ["deff_form", "team_deff_form", "team_deffrate_form"], index: 1 },
    { forms: ["elm_form", "team_elm_form"], index: 2 },
    { forms: ["elm_charge_form", "team_elm_charge_form"], index: 3 },
    { forms: ["cr_form", "team_cr_form"], index: 5 },
    { forms: ["cd_form", "team_cd_form"], index: 6 }
  ];

  for (const element of formElements) {
    if (depend_status[element.index] === 1) {
      element.forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
          form.style.display = "table-row";
        }
      });
    }
  }
}

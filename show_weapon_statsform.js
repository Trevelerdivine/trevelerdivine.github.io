async function show_weapon_statsform()
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
    const weapon_rank = document.getElementById("weapon_rank").value;

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
      const weaponSelect = document.getElementById("weapon_index");
    const selectedWeapon = weaponSelect.value;
    const weaponInfo = document.getElementById("weaponInfo");
    const checkboxStates = []; // チェックボックスの状態を格納する配列
    weaponInfo.style.display = "block";

// チェックボックスと説明テキストの表示をクリア
const existingCheckboxes = weaponInfo.querySelectorAll("input[type=checkbox]");
for (const checkbox of existingCheckboxes) {
  checkbox.remove();
  const associatedLabel = document.querySelector(`label[for="${checkbox.id}"]`);
  associatedLabel.remove();
}

// 改行を削除
const lineBreaks = weaponInfo.querySelectorAll("br");
for (const lineBreak of lineBreaks) {
  lineBreak.remove();
}
    if (selectedWeapon === "0") {
      const traits = [
        {
          id: "traitCheckbox",
          label: "千夜の暁歌：チーム内の他のキャラクターの元素に依ってバフ"
        },
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
          const lineBreak = document.createElement("br");
          weaponInfo.appendChild(lineBreak);
        }
        else if (selectedWeapon === "2") {
        const traits = [
          {
            id: "traitCheckbox",
            label: "落ち着き：一定確率でスキルクールタイム0"
          },
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
            const lineBreak = document.createElement("br");
            weaponInfo.appendChild(lineBreak);
          }
        }
      }
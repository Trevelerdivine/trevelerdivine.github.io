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
    
    hp_form.style.display = "none";  // HPフォームを非表示
    attck_form.style.display = "none";  // 攻撃力フォームを非表示
    deff_form.style.display = "none";  // 防御力フォームを非表示
    elm_form.style.display = "none";  // 元素熟知を非表示
    elm_charge_form.style.display = "none";  // 元素チャージ効率フォームを非表示
    cr_form.style.display = "none";  // 会心率フォームを非表示
    cd_form.style.display = "none";  // 会心ダメージフォームを非表示
    calculateButton.style.display = "block";
    
    if (depend_status[0] == 1) 
    {
      hp_form.style.display = "block";  // hpフォームを表示
    }
    
    if (depend_status[1] == 1) 
    {
      attck_form.style.display = "block";  // 攻撃力フォームを表示
    }
    if (depend_status[2] == 1) 
    {
      deff_form.style.display = "block";  // 防御力フォームを表示
    }
    if (depend_status[3] == 1) 
    {
      elm_form.style.display = "block";  // 元素熟知フォームを表示
    }
    if (depend_status[4] == 1) 
    {
      elm_charge_form.style.display = "block";  // 元素チャージ効率フォームを表示
    }
    if (depend_status[5] == 1) 
    {
      cr_form.style.display = "block";  // 会心率フォームを表示
    }
    if (depend_status[6] == 1) 
    {
      cd_form.style.display = "block";  // 会心ダメージフォームを表示
    }

    const characterSelect = document.getElementById("char_index");
    const selectedCharacter = characterSelect.value;
    const characterInfo = document.getElementById("characterInfo");

    // チェックボックスの表示をクリア
    characterInfo.innerHTML = "";

    if (selectedCharacter === "0") {
      // ナヒーダの特性を考慮するかを選ぶチェックボックスを表示
      const traitCheckbox = document.createElement("input");
      traitCheckbox.type = "checkbox";
      traitCheckbox.id = "traitCheckbox";
      traitCheckbox.value = "traitCheckbox";

      const traitLabel = document.createElement("label");
      traitLabel.htmlFor = "traitCheckbox";
      traitLabel.textContent = "心景幻成: 元素熟知+250";

      characterInfo.appendChild(traitCheckbox);
      characterInfo.appendChild(traitLabel);
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
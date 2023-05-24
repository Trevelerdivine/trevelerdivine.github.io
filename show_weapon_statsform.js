async function show_weapon_statsform() {
  await calculate_depend_status();
  let weaponInfo = document.getElementById("weaponInfo");
  let hp_form = document.getElementById("hp_form");
  let attck_form = document.getElementById("attck_form");
  let deff_form = document.getElementById("deff_form");
  let elm_form = document.getElementById("elm_form");
  let elm_charge_form = document.getElementById("elm_charge_form");
  let cr_form = document.getElementById("cr_form");
  let cd_form = document.getElementById("cd_form");
  let calculateButton = document.getElementById("calculateButton");
  const weapon_rank = document.getElementById("weapon_rank").value;

  hp_form.style.display = "none"; // HPフォームを非表示
  attck_form.style.display = "none"; // 攻撃力フォームを非表示
  deff_form.style.display = "none"; // 防御力フォームを非表示
  elm_form.style.display = "none"; // 元素熟知を非表示
  elm_charge_form.style.display = "none"; // 元素チャージ効率フォームを非表示
  cr_form.style.display = "none"; // 会心率フォームを非表示
  cd_form.style.display = "none"; // 会心ダメージフォームを非表示
  calculateButton.style.display = "block";

  const weaponSelect = document.getElementById("weapon_index");
  const selectedweapon = weaponSelect.value;
  const checkboxStates = []; // チェックボックスの状態を格納する配列
  weaponInfo.style.display = "block";

  weaponInfo.innerHTML = "";

  if (selectedweapon === "0") {
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
    
    const selectList1 = createSelectList("traitSelect1", 4); // 1つ目のプルダウンリストを生成
    const selectList2 = createSelectList("traitSelect2", 3); // 2つ目のプルダウンリストを生成
    
    const weaponInfo = document.getElementById("weaponInfo");
    weaponInfo.appendChild(traitCheckbox);
    weaponInfo.appendChild(traitLabel);
    weaponInfo.appendChild(document.createElement("br")); // 改行を追加
    weaponInfo.appendChild(selectList1);
    weaponInfo.appendChild(document.createElement("br")); // 改行を追加
    weaponInfo.appendChild(selectList2);
    
    // チェックボックスが初期状態でチェックされている場合、プルダウンリストを表示
    if (traitCheckbox.checked) {
      selectList1.classList.remove("hidden");
      selectList2.classList.remove("hidden");
    }
    
    traitCheckbox.addEventListener("change", function() {
      if (traitCheckbox.checked) {
        selectList1.classList.remove("hidden"); // チェックされたら表示
        selectList2.classList.remove("hidden");
      } else {
        selectList1.classList.add("hidden"); // チェックが解除されたら非表示
        selectList2.classList.add("hidden");
      }
    });
    
    // プルダウンリストを生成する関数
    function createSelectList(id, optionCount) {
      const selectList = document.createElement("select");
      selectList.id = id;
      selectList.classList.add("hidden"); // 初期状態では非表示
    
      for (let i = 1; i <= optionCount; i++) {
        const option = document.createElement("option");
        option.value = `option${i}`;
        option.text = `オプション${i}`;
        selectList.appendChild(option);
      }
    
      return selectList;
    }
    
      } 
      else if (selectedweapon === "4") {
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
      element.form.style.display = "block";
    }
  }
}
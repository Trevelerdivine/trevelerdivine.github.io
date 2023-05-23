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
    }
   }
    
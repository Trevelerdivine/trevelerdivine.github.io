let base_status = [0,0,0,0,0,0,0,0];
let char_base_status = [0,0,0,0,0,0,0,0];
let weapon_base_status = [0,0,0,0,0,0,0,0];
let base_hp = 0;
let base_attck = 0;
let base_deff = 0;
let base_elm = 0;
let base_elm_charge = 0;
let base_cr = 0;
let base_cd = 0;
let base_dmg_buff = 0;


async function showTable() {
  document.getElementById("myTable").style.display = "table";
  base_status = await calculate_base_status();
  base_hp = base_status[0];
  document.getElementById("base_hp").textContent = base_hp;
  base_attck = base_status[1];
  document.getElementById("base_attck").textContent = base_attck;
  base_deff = base_status[2];
  document.getElementById("base_deff").textContent = base_deff;
  base_elm = base_status[3];
  document.getElementById("base_elm").textContent = base_elm;
  base_elm_charge = base_status[4];
  document.getElementById("base_elm_charge").textContent = base_elm_charge;
  base_cr = base_status[5];
  document.getElementById("base_cr").textContent = base_cr;
  base_cd = base_status[6];
  document.getElementById("base_cd").textContent = base_cd;
  base_dmg_buff = base_status[7];
  document.getElementById("base_dmg_buff").textContent = base_dmg_buff;
}

/////////


async function calculate_char_base_status() 
{
  const char_name = document.getElementById("char_name").value;
  const response = await fetch("./data/character/" + char_name + ".json");
  const data = await response.json();
  const char_base_hp = data.ステータス.基礎HP["90"];
  const char_base_attck = data.ステータス.基礎攻撃力["90"];
  const char_base_deff = data.ステータス.基礎防御力["90"];
  const char_base_elm = data.ステータス.基礎元素熟知["90"];
  const char_base_elm_charge = data.ステータス.基礎元素チャージ効率["90"];
  const char_base_cr = data.ステータス.基礎会心率["90"];
  const char_base_cd = data.ステータス.基礎会心ダメージ["90"];
  const char_base_dmg_buff = data.ステータス.基礎ダメージバフ["90"];
  char_base_status = [char_base_hp, char_base_attck, char_base_deff, char_base_elm, char_base_elm_charge, char_base_cr, char_base_cd, char_base_dmg_buff];
  console.log(char_base_status);
  return char_base_status;
}

///////////////  


async function calculate_weapon_base_status() {
  const weapon_name = document.getElementById("weapon_name").value;
  const response = await fetch("./data/weapon/" + weapon_name + ".json");
  const data = await response.json();
  const weapon_base_hp = data.ステータス.基礎HP["90"];
  const weapon_base_attck = data.ステータス.基礎攻撃力["90"];
  const weapon_base_deff = data.ステータス.基礎防御力["90"];
  const weapon_base_elm = data.ステータス.基礎元素熟知["90"];
  const weapon_base_elm_charge = data.ステータス.基礎元素チャージ効率["90"];
  const weapon_base_cr = data.ステータス.基礎会心率["90"];
  const weapon_base_cd = data.ステータス.基礎会心ダメージ["90"];
  const weapon_base_dmg_buff = data.ステータス.基礎ダメージバフ["90"];
  weapon_base_status = [weapon_base_hp, weapon_base_attck, weapon_base_deff, weapon_base_elm, weapon_base_elm_charge, weapon_base_cr, weapon_base_cd, weapon_base_dmg_buff];
  console.log(weapon_base_status);
  return weapon_base_status;
  }
////////


async function calculate_base_status() {
  char_base_status = await calculate_char_base_status();
  weapon_base_status = await calculate_weapon_base_status();
  base_hp = char_base_status[0] + weapon_base_status[0];
  base_attck = char_base_status[1] + weapon_base_status[1];
  base_deff = char_base_status[2] + weapon_base_status[2];
  base_elm = char_base_status[3] + weapon_base_status[3];
  base_elm_charge = char_base_status[4] + weapon_base_status[4];
  base_cr = char_base_status[5] + weapon_base_status[5];
  base_cd = char_base_status[6] + weapon_base_status[6];
  base_dmg_buff = char_base_status[7] + weapon_base_status[7];
  base_status = [base_hp, base_attck, base_deff, base_elm, base_elm_charge, base_cr, base_cd, base_dmg_buff];
  console.log(base_status);
  return base_status;
  }
///////////
async function calculate_af_score() {
  char_base_status = await calculate_base_status();
  console.log(base_status);
  return base_status;
  }


  async function showStatsForm()
   {
    const characterSelect = document.getElementById("character");
    const response = await fetch("./data/charcter/" + characterSelect + ".json");
    const data = await response.json();
    const depend_status = data.ステータス.依存ステータス;

    let hp_form = document.getElementById("hp_form");
    let attck_form = document.getElementById("attck_form");
    let deff_form = document.getElementById("deff_form");
    let elm_form = document.getElementById("elm_form");
    let elm_charge_form = document.getElementById("elm_charge_form");
    let cr_form = document.getElementById("cr_form");
    let cd_form = document.getElementById("cd_form");
    
    hp_form.style.display = "none";  // HPフォームを非表示
    attck_form.style.display = "none";  // 攻撃力フォームを非表示
    deff_form.style.display = "none";  // 防御力フォームを非表示
    elm_form.style.display = "none";  // 元素熟知を非表示
    elm_charge_form.style.display = "none";  // 元素チャージ効率フォームを非表示
    cr_form.style.display = "none";  // 会心率フォームを非表示
    cd_form.style.display = "none";  // 会心ダメージフォームを非表示
    
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
}
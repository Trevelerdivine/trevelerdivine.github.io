let base_status = [0,0,0,0,0,0,0,0];

function showTable() {
  document.getElementById("myTable").style.display = "table";
  calculate_base_status();
}

/////////


async function calculate_char_base_status() 
{
  const char_name = document.getElementById("char_name").value;
  const response = await fetch("./data/character/" + char_name + ".json");
  const data = await response.json();
  const char_base_hp = data.ステータス.基礎HP["90"];
  document.getElementById("char_base_hp").textContent = char_base_hp;
  const char_base_attck = data.ステータス.基礎攻撃力["90"];
  document.getElementById("char_base_attck").textContent = char_base_attck;
  const char_base_deff = data.ステータス.基礎防御力["90"];
  document.getElementById("char_base_deff").textContent = char_base_deff;
  const char_base_elm = data.ステータス.基礎元素熟知["90"];
  document.getElementById("char_base_elm").textContent = char_base_elm;
  const char_base_elm_charge = data.ステータス.基礎元素チャージ効率["90"];
  document.getElementById("char_base_elm_charge").textContent = char_base_elm_charge;
  const char_base_cr = data.ステータス.基礎会心率["90"];
  document.getElementById("char_base_cr").textContent = char_base_cr;
  const char_base_cd = data.ステータス.基礎会心ダメージ["90"];
  document.getElementById("char_base_cd").textContent = char_base_cd;
  const char_base_dmg_buff = data.ステータス.基礎ダメージバフ["90"];
  document.getElementById("char_base_dmg_buff").textContent = char_base_dmg_buff;
  const char_base_status = [char_base_hp, char_base_attck, char_base_deff, char_base_elm, char_base_elm_charge, char_base_cr, char_base_cd, char_base_dmg_buff];
  return char_base_status;
  console.log(char_base_status);
}

///////////////  


async function calculate_weapon_base_status() {
  const weapon_name = document.getElementById("weapon_name").value;
  const response = await fetch("./data/weapon/" + weapon_name + ".json");
  const data = await response.json();
  const weapon_base_hp = data.ステータス.基礎HP["90"];
  document.getElementById("weapon_base_hp").textContent = weapon_base_hp;
  const weapon_base_attck = data.ステータス.基礎攻撃力["90"];
  document.getElementById("weapon_base_attck").textContent = weapon_base_attck;
  const weapon_base_deff = data.ステータス.基礎防御力["90"];
  document.getElementById("weapon_base_deff").textContent = weapon_base_deff;
  const weapon_base_elm = data.ステータス.基礎元素熟知["90"];
  document.getElementById("weapon_base_elm").textContent = weapon_base_elm;
  const weapon_base_elm_charge = data.ステータス.基礎元素チャージ効率["90"];
  document.getElementById("weapon_base_elm_charge").textContent = weapon_base_elm_charge;
  const weapon_base_cr = data.ステータス.基礎会心率["90"];
  document.getElementById("weapon_base_cr").textContent = weapon_base_cr;
  const weapon_base_cd = data.ステータス.基礎会心ダメージ["90"];
  document.getElementById("weapon_base_cd").textContent = weapon_base_cd;
  const weapon_base_dmg_buff = data.ステータス.基礎ダメージバフ["90"];
  document.getElementById("weapon_base_dmg_buff").textContent = weapon_base_dmg_buff;
  const weapon_base_status = [weapon_base_hp, weapon_base_attck, weapon_base_deff, weapon_base_elm, weapon_base_elm_charge, weapon_base_cr, weapon_base_cd, weapon_base_dmg_buff];
  return weapon_base_status;
  }
////////


async function calculate_base_status() {
  const char_base_status = await calculate_char_base_status();
  const weapon_base_status = await calculate_weapon_base_status();
  const base_hp = char_base_status[0] + weapon_base_status[0];
  const base_attck = char_base_status[1] + weapon_base_status[1];
  const base_deff = char_base_status[2] + weapon_base_status[2];
  const base_elm = char_base_status[3] + weapon_base_status[3];
  const base_elm_charge = char_base_status[4] + weapon_base_status[4];
  const base_cr = char_base_status[5] + weapon_base_status[5];
  const base_cd = char_base_status[6] + weapon_base_status[6];
  const base_dmg_buff = char_base_status[7] + weapon_base_status[7];
  base_status = [base_hp, base_attck, base_deff, base_elm, base_elm_charge, base_cr, base_cd, base_dmg_buff];
  return base_status;
  }

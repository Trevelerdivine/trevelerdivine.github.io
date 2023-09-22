let base_status = [0,0,0,0,0,0,0,0];
let char_base_status = [0,0,0,0,0,0,0,0];
let weapon_base_status = [0,0,0,0,0,0,0,0];
let depend_status = [0,0,0,0,0,0,0];
let char_depend_status = [0,0,0,0,0,0,0];
let weapon_depend_status = [0,0,0,0,0,0,0];
let char_propaty = [0,0];
let af_score = 0;
let attack_method = 0;
const element = ["炎元素", "水元素", "氷元素", "雷元素", "風元素", "草元素", "岩元素"]
const char_name = ["dehya","yoimiya","hutao","klee","diluc","thoma","yanfei","xinyan","bennett","xiangling",
                   "amber","nirou","yelan","kamisatoayato","sangonomiyakokomi","tartaglia","mona","candace","barbara","xingqiu",
                   "shenhe","kamisatoayaka","eula","ganyu","qiqi","aloy","mika","layla","rosaria","diona",
                   "chongyun","kaeya","cyno","yaemiko","raidenshougun","keqing","dori","kukishinobu","kujousara","fischl",
                   "beidou","razor","lisa","travelarelectro","wanderer","kazuhakaedehara","xiao","venti","jean","faruzan",
                   "shikanoinheizou","sayu","sucrose","traveraranemo","baizhu","alhaitham","nahida","tighnari","kirara","kaveh",
                   "yaoyao","collei","travelardendro","aratakiitto","albedo","zhongli","yunjin","gorou","noelle","ningguang","travelergeo"];
const weapon_name = ["AThousandFloatingDreams","Kagura'sVerity","SacrificialFragments","StaffofHoma","EngulfingLightning","TheCatch"];
                  

/////////////////////

async function calculate_char_base_status() 
{
  const char_level = document.getElementById("char_level").value;
  const response = await fetch("./data/character/char_data/" + char_name[selectedCharId] + ".json");
  const data = await response.json();
  const char_base_hp = data.ステータス.基礎HP[char_level];
  const char_base_attck = data.ステータス.基礎攻撃力[char_level];
  const char_base_deff = data.ステータス.基礎防御力[char_level];
  const char_base_elm = data.ステータス.基礎元素熟知[char_level];
  const char_base_elm_charge = 1 + data.ステータス.基礎元素チャージ効率[char_level];
  const char_base_cr = data.ステータス.基礎会心率[char_level];
  const char_base_cd = data.ステータス.基礎会心ダメージ[char_level];
  const char_base_dmg_buff = data.ステータス.基礎ダメージバフ[char_level];
  char_propaty = data.ステータス.属性;
  char_depend_status = data.ステータス.依存ステータス;
  char_base_status = [char_base_hp, char_base_deff, char_base_elm, char_base_elm_charge, char_base_attck, char_base_cr, char_base_cd, char_base_dmg_buff];
  return char_base_status;
}

///////////////  

async function calculate_weapon_base_status() 
{
  const weapon_index = document.getElementById("weapon_index").value;
  const weapon_level = document.getElementById("weapon_level").value;
  const response = await fetch("./data/weapon/weapon_data/" + weapon_name[weapon_index] + ".json");
  const data = await response.json();
  const weapon_base_hp = data.ステータス.基礎HP[weapon_level];
  const weapon_base_attck = data.ステータス.基礎攻撃力[weapon_level];
  const weapon_base_deff = data.ステータス.基礎防御力[weapon_level];
  const weapon_base_elm = data.ステータス.基礎元素熟知[weapon_level];
  const weapon_base_elm_charge = data.ステータス.基礎元素チャージ効率[weapon_level];
  const weapon_base_cr = data.ステータス.基礎会心率[weapon_level];
  const weapon_base_cd = data.ステータス.基礎会心ダメージ[weapon_level];
  const weapon_base_dmg_buff = data.ステータス.基礎ダメージバフ[weapon_level];
  weapon_depend_status = data.ステータス.依存ステータス;
  weapon_base_status = [weapon_base_hp, weapon_base_deff, weapon_base_elm, weapon_base_elm_charge, weapon_base_attck, weapon_base_cr, weapon_base_cd, weapon_base_dmg_buff];
  return weapon_base_status;
}

///////////////////

async function calculate_base_status() 
{
  char_base_status = await calculate_char_base_status();
  weapon_base_status = await calculate_weapon_base_status();
  let base_hp = char_base_status[0] + weapon_base_status[0];
  let base_attck = char_base_status[4] + weapon_base_status[4];
  let base_deff = char_base_status[1] + weapon_base_status[1];
  let base_elm = char_base_status[2] + weapon_base_status[2];
  let base_elm_charge = char_base_status[3] + weapon_base_status[3];
  let base_dmg_buff = char_base_status[7] + weapon_base_status[7];
  let base_cr = char_base_status[5] + weapon_base_status[5];
  let base_cd = char_base_status[6] + weapon_base_status[6];
  let base_status = [base_hp, base_deff, base_elm, base_elm_charge, base_attck, base_cr, base_cd, base_dmg_buff];
  return base_status;
}

/////////////////////

async function calculate_af_main_status_buff() 
{
  const clock_mainstatus = parseInt(document.getElementById("clock_mainstatus").value);
  const goblet_mainstatus = parseInt(document.getElementById("goblet_mainstatus").value);
  const circlet_mainstatus = parseInt(document.getElementById("circlet_mainstatus").value);
  const af_main_status = [0.466,0.583,187,51.8,0.466,31.1,62.2,0.466];
  let set_main_status = [0,0,0,0,0,0,0,0];
  let af_main_status_buff = [0,0,0,0,0,0,0,0];
  set_main_status[clock_mainstatus] = set_main_status[clock_mainstatus] + 1;
  set_main_status[goblet_mainstatus] = set_main_status[goblet_mainstatus] + 1;
  set_main_status[circlet_mainstatus] = set_main_status[circlet_mainstatus] + 1;
  for (let i = 0; i < 8; i++)
  {
    af_main_status_buff[i] = af_main_status[i] *  set_main_status[i];
  }    
  return af_main_status_buff;
}

//////////////////////////

async function calculate_af_score(af_main_status_buff,depend_status,base_status) 
{
  const af_hp = parseInt(document.getElementById("af_hp").value);//聖遺物HP上昇量
  const af_attck = parseInt(document.getElementById("af_attck").value);//聖遺物攻撃力上昇量
  const af_deff = parseInt(document.getElementById("af_deff").value);//聖遺物防御力上昇量
  const af_elm = parseInt(document.getElementById("af_elm").value);//聖遺物元素熟知上昇量
  const af_elm_charge= parseFloat(document.getElementById("af_elm_charge").value);//聖遺物会心率上昇量
  const af_cr= parseFloat(document.getElementById("af_cr").value);//聖遺物会心率上昇量
  const af_cd = parseFloat(document.getElementById("af_cd").value);//聖遺物会心ダメージ上昇量
  let af_score_distribution = [0,0,0,0,0,0,0,0];
  for (let i = 0; i < 7; i++)
  {
    if (depend_status[i]==0)
    {
      af_score_distribution[i] = 0
      continue;
    }
    switch (i)
    {
      case 0:
        af_score_distribution[0] = af_score+((af_hp - 4780)/base_status[0] - af_main_status_buff[0])*400/3;
        break;
      case 1:
        af_score_distribution[1] = (af_deff/base_status[1] - af_main_status_buff[1])*1600/15;
        break;
      case 2:
        af_score_distribution[2] = (af_elm -  af_main_status_buff[2])/3;
        break;
      case 3:
        af_score_distribution[3] = (af_elm_charge - af_main_status_buff[3])*1.2;
        break;
      case 4:
        af_score_distribution[4] =((af_attck - 311)/base_status[4] - af_main_status_buff[4])*400/3;
        break;
      case 5:
        af_score_distribution[5] = (af_cr - af_main_status_buff[5])*2;
        break
      case 6:
        af_score_distribution[6] = (af_cd - af_main_status_buff[6]);
    }
  }
  for (let n = 0; n < 7; n++)
  {
    af_score_distribution[7]=af_score_distribution[7] + af_score_distribution[n];
  }
  return af_score_distribution
}

///////////////////

async function calculate_depend_status()
{
  const char_response = await fetch("./data/character/char_data/" + char_name[selectedCharId] + ".json");
  const char_data = await char_response.json();
  const char_depend_status = char_data.ステータス.依存ステータス;
  const weapon_index = document.getElementById("weapon_index").value;
  const weapon_response = await fetch("./data/weapon/weapon_data/" + weapon_name[weapon_index] + ".json");
  const weapon_data = await weapon_response.json();
  const weapon_depend_status = weapon_data.ステータス.依存ステータス;
  for (let i = 0; i < 7; i++)
  {
    depend_status[i] = char_depend_status[i] + weapon_depend_status[i];
    if (depend_status[i]>1)
    {
      depend_status[i] = 1
    }
  }
  return depend_status
}


///////////////////

async function calculate_depend_status_index(array)
{
  depend_status_index = [];
  for (let i = 0; i < array.length; i++) 
  {
    if (array[i] === 1) 
    {
      depend_status_index.push(i);
    }
  }
  return depend_status_index;
}

/////////////////////////

async function calculate_score_distribute(af_score,depend_status)
{
  let k = 0;
  let rundom_count = 0;
  let distribute = [];
  let score_distribution = [];
  for (let i = 0; i < 7; i++)
  {
    rundom_count = rundom_count + depend_status[i];
  }
  let randomNumbers = Array.from({ length: rundom_count - 1 }, () => af_score*Math.random());
  randomNumbers.sort((a, b) => a - b);
  distribute[0] = randomNumbers[0];
  for (let j = 1; j < randomNumbers.length; j++) 
  {
    distribute[j] = randomNumbers[j] - randomNumbers[j - 1];
  }
  distribute[rundom_count - 1] = af_score - randomNumbers[rundom_count - 2];
  for (let i = 0; i < 7; i++)
  {
    if (depend_status[i]==0)
    {
    score_distribution[i] = 0;
    continue;
    }
    score_distribution[i] = depend_status[i] * distribute[k];
    k = k + 1; 
  }
  return score_distribution;
}

////////////////////////////////

async function calculate_fixed_status(sd,bs,amsb)
//変数は左から（score_distribution,base_status,af_main_status_buff）
{
  let fixed_status = [0,0,0,0,0,0,0,0];
  fixed_status[0] = bs[0]*(1 + sd[0]*3/400 + amsb[0]) + 4780;
  fixed_status[1] = bs[1]*(1 + sd[1]*3/320 + amsb[1]);
  fixed_status[2] = bs[2] + sd[2]*3 + amsb[2];
  fixed_status[3] = bs[3] + sd[3]/120 + amsb[3]/100;
  fixed_status[4] = bs[4]*(1 + sd[4]*3/400 + amsb[4]) + 311;
  fixed_status[5] = bs[5] + sd[5]/200 + amsb[5]/100;
  fixed_status[6] = bs[6] + sd[6]/100 + amsb[6]/100;
  fixed_status[7] = bs[7] + amsb[7];
  return fixed_status;
}

////////////////////////

async function create_char_instance(base_status, fixed_status, result_status,parameter) {
  if (selectedCharId === "56") {
    // ナヒーダのインスタンスを生成
    const char_instance = new nahida(base_status, fixed_status, result_status,parameter);
    return char_instance;
  }
  if (selectedCharId === "34") {
    // 雷電将軍のインスタンスを生成
    const char_instance = new raiden(base_status, fixed_status, result_status, parameter);
    return char_instance;
  }
}

///////////////////////

async function calculate_team_fix_buff(base_status)
{
  const fix_hp_buff = parseInt(document.getElementById("fix_hp_buff").value) || 0; // 聖遺物HP上昇量
  const fix_hprate_buff = parseFloat(document.getElementById("fix_hp%_buff").value) / 100 || 0; // 聖遺物HP上昇量
  const fix_attack_buff = parseInt(document.getElementById("fix_attack_buff").value) || 0; // 聖遺物攻撃力上昇量
  const fix_attackrate_buff = parseFloat(document.getElementById("fix_attack%_buff").value) / 100 || 0; // 聖遺物攻撃力上昇量
  const fix_deff_buff = parseInt(document.getElementById("fix_deff_buff").value) || 0; // 聖遺物防御力上昇量
  const fix_deffrate_buff = parseFloat(document.getElementById("fix_deff%_buff").value) / 100 || 0; // 聖遺物防御力上昇量
  const fix_elm_buff = parseInt(document.getElementById("fix_elm_buff").value) || 0; // 聖遺物元素熟知上昇量
  const fix_elm_charge_buff = parseFloat(document.getElementById("fix_elm_charge_buff").value) / 100 || 0; // 聖遺物元素チャージ効率上昇量
  const fix_cr_buff = parseFloat(document.getElementById("fix_cr_buff").value) / 100 || 0; // 聖遺物会心率上昇量
  const fix_cd_buff = parseFloat(document.getElementById("fix_cd_buff").value) / 100 || 0; // 聖遺物会心ダメージ上昇量
  const fix_dmg_buff = parseFloat(document.getElementById("fix_dmg_buff").value) / 100 || 0; // 聖遺物会心ダメージ上昇量
  const af_setbuff = await create_afset_instance();
  let team_buff = [0,0,0,0,0,0,0,0];

  const pyroCheckbox = document.getElementById("pyro_reso");
  const hydroCheckbox = document.getElementById("hydro_reso");
  const cyroCheckbox = document.getElementById("cyro_reso");
  const dendroCheckbox = document.getElementById("dendro_reso");
  const geoCheckbox = document.getElementById("geo_reso");
  
  // チェックボックスの情報をまとめた配列を作成
  const checkboxStates = [
    { id: "pyro_reso", checked: pyroCheckbox.checked },
    { id: "hydro_reso", checked: hydroCheckbox.checked },
    { id: "cyro_reso", checked: cyroCheckbox.checked },
    { id: "dendro_reso", checked: dendroCheckbox.checked },
    { id: "geo_reso", checked: geoCheckbox.checked }
  ];

  team_buff[0] = fix_hp_buff + (fix_hprate_buff + af_setbuff[0] + 0.25 * checkboxStates["hydro_reso"]) * base_status[0];
  team_buff[1] = fix_deff_buff + (fix_deffrate_buff + af_setbuff[1]) * base_status[1];
  if (checkboxStates["dendro_reso"] == 1)
  {
    const dendro_reso_select = document.getElementById("dendro_reso_select");
    const dendro_elm = dendro_reso_select.value;
    team_buff[2] = fix_elm_buff + af_setbuff[2] + dendro_elm;
  }
  else
  {
    team_buff[2] = fix_elm_buff + af_setbuff[2];
  }
  team_buff[3] = fix_elm_charge_buff + af_setbuff[3];
  team_buff[4] = fix_attack_buff + (fix_attackrate_buff + af_setbuff[4] + 0.25 * checkboxStates["pyro_reso"]) * base_status[4];
  team_buff[5] = fix_cr_buff + af_setbuff[5] + 0.15 * checkboxStates["cyro_reso"];
  team_buff[6] = fix_cd_buff + af_setbuff[6];
  team_buff[7] = fix_dmg_buff + af_setbuff[7] + 0.15 * checkboxStates["geo_reso"];

  return team_buff
}

///////////////////////

async function calculate_team_dynamic_buff(base_status)
{
  const dynamic_hp_buff = parseInt(document.getElementById("dynamic_hp_buff").value) || 0; // 聖遺物HP上昇量
  const dynamic_hprate_buff = parseFloat(document.getElementById("dynamic_hp%_buff").value) / 100 || 0; // 聖遺物HP上昇量
  const dynamic_attack_buff = parseInt(document.getElementById("dynamic_attack_buff").value) || 0; // 聖遺物攻撃力上昇量
  const dynamic_attackrate_buff = parseFloat(document.getElementById("dynamic_attack%_buff").value) / 100 || 0; // 聖遺物攻撃力上昇量
  const dynamic_deff_buff = parseInt(document.getElementById("dynamic_deff_buff").value) || 0; // 聖遺物防御力上昇量
  const dynamic_deffrate_buff = parseFloat(document.getElementById("dynamic_deff%_buff").value) / 100 || 0; // 聖遺物防御力上昇量
  const dynamic_elm_buff = parseInt(document.getElementById("dynamic_elm_buff").value) || 0; // 聖遺物元素熟知上昇量
  const dynamic_elm_charge_buff = parseFloat(document.getElementById("dynamic_elm_charge_buff").value) / 100 || 0; // 聖遺物元素チャージ効率上昇量
  const dynamic_cr_buff = parseFloat(document.getElementById("dynamic_cr_buff").value) / 100 || 0; // 聖遺物会心率上昇量
  const dynamic_cd_buff = parseFloat(document.getElementById("dynamic_cd_buff").value) / 100 || 0; // 聖遺物会心ダメージ上昇量
  const dynamic_dmg_buff = parseFloat(document.getElementById("dynamic_dmg_buff").value) / 100 || 0; // 聖遺物会心ダメージ上昇量
  let team_buff = [0,0,0,0,0,0,0,0];

  team_buff[0] = dynamic_hp_buff + dynamic_hprate_buff * base_status[0];
  team_buff[1] = dynamic_deff_buff + dynamic_deffrate_buff * base_status[1];
  team_buff[2] = dynamic_elm_buff;
  team_buff[3] = dynamic_elm_charge_buff;
  team_buff[4] = dynamic_attack_buff + dynamic_attackrate_buff * base_status[4];
  team_buff[5] = dynamic_cr_buff;
  team_buff[6] = dynamic_cd_buff;
  team_buff[7] = dynamic_dmg_buff;

  return team_buff
}

///////////////////////

async function calculate_table_status()
{
  const af_hp = parseInt(document.getElementById("af_hp").value);//聖遺物HP上昇量
  const af_attck = parseInt(document.getElementById("af_attck").value);//聖遺物攻撃力上昇量
  const af_deff = parseInt(document.getElementById("af_deff").value);//聖遺物防御力上昇量
  const af_elm = parseInt(document.getElementById("af_elm").value);//聖遺物元素熟知上昇量
  const af_elm_charge= parseFloat(document.getElementById("af_elm_charge").value)/100;//聖遺物元素チャージ効率上昇量
  const af_cr= parseFloat(document.getElementById("af_cr").value)/100;//聖遺物会心率上昇量
  const af_cd = parseFloat(document.getElementById("af_cd").value)/100;//聖遺物会心ダメージ上昇量
  const af_buff = [af_hp, af_deff, af_elm, af_elm_charge, af_attck, af_cr, af_cd];
  const base_status = await calculate_base_status();
  const depend_status = await calculate_depend_status();
  const af_main_status_buff = await calculate_af_main_status_buff();
  const char_parameter = await import_char_parameter();
  let buff_status = [0,0,0,0,0,0,0,0];
  let team_fix_buff = await calculate_team_fix_buff(base_status);
  let team_dynamic_buff = await calculate_team_dynamic_buff(base_status);
  let fixed_status = base_status.slice();
  let result_status;

  document.getElementById("table_base_hp").innerHTML = base_status[0];
  document.getElementById("table_base_deff").innerHTML = base_status[1];
  document.getElementById("table_base_elm").innerHTML = base_status[2];
  document.getElementById("table_base_elm_charge").innerHTML = (base_status[3]*100).toFixed(1) + "％";
  document.getElementById("table_base_attck").innerHTML = base_status[4];
  document.getElementById("table_base_cr").innerHTML = (base_status[5]*100).toFixed(1) + "％";
  document.getElementById("table_base_cd").innerHTML = (base_status[6]*100).toFixed(1) + "％";
  document.getElementById("table_base_dmg_buff").innerHTML = (base_status[7]*100).toFixed(1) + "％";

  for (let i = 0; i < 7; i++)
  {
    fixed_status[i] = fixed_status[i] + af_buff[i] + team_fix_buff[i];
  }
  fixed_status[7] = af_main_status_buff[7] + team_fix_buff[7];
  result_status = fixed_status.slice();
  
  const char_instance = await create_char_instance(base_status, fixed_status, result_status,char_parameter);
  const weapon_instance = await create_weapon_instance(base_status, fixed_status, result_status);

  char_instance.update_status(fixed_status, result_status);
  weapon_instance.update_status(fixed_status, result_status);
  if (depend_status[0] == 1)
  {
    fixed_status[0] += await (char_instance.calculate_char_fixed_hp() + weapon_instance.calculate_weapon_fixed_hp());
    result_status[0] = team_dynamic_buff[0] + fixed_status[0] + await (char_instance.calculate_char_result_hp() + weapon_instance.calculate_weapon_result_hp());
    buff_status[0] = result_status[0] - af_buff[0] - base_status[0];
    document.getElementById("table_buff_hp").innerHTML = buff_status[0].toFixed(0);
    document.getElementById("table_af_hp").innerHTML = af_buff[0].toFixed(0);
    document.getElementById("table_final_hp").innerHTML = result_status[0].toFixed(0);
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }
  else
  {
    document.getElementById("table_buff_hp").innerHTML = "-";
    document.getElementById("table_af_hp").innerHTML = "-";
    document.getElementById("table_final_hp").innerHTML = "-";
  }

  if (depend_status[1] == 1)
  {
    fixed_status[1] += await (char_instance.calculate_char_fixed_deff() + weapon_instance.calculate_weapon_fixed_deff());
    result_status[1] = team_dynamic_buff[1] + fixed_status[1] + await (char_instance.calculate_char_result_deff() + weapon_instance.calculate_weapon_result_deff());
    buff_status[1] = result_status[1] - af_buff[1] - base_status[1];
    document.getElementById("table_buff_deff").innerHTML = buff_status[1].toFixed(0);
    document.getElementById("table_af_deff").innerHTML = af_buff[1].toFixed(0);
    document.getElementById("table_final_deff").innerHTML = result_status[1].toFixed(0);
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }
  else
  {
    document.getElementById("table_buff_deff").innerHTML = "-";
    document.getElementById("table_af_deff").innerHTML = "-";
    document.getElementById("table_final_deff").innerHTML = "-";
  }

  if (depend_status[2] == 1)
  {
    fixed_status[2] += await (char_instance.calculate_char_fixed_elm() + weapon_instance.calculate_weapon_fixed_elm());
    result_status[2] = team_dynamic_buff[2] + fixed_status[2] + await (char_instance.calculate_char_result_elm() + weapon_instance.calculate_weapon_result_elm());
    buff_status[2] = result_status[2] - af_buff[2] - base_status[2];
    document.getElementById("table_buff_elm").innerHTML = buff_status[2].toFixed(0);
    document.getElementById("table_af_elm").innerHTML = af_buff[2].toFixed(0);
    document.getElementById("table_final_elm").innerHTML = result_status[2].toFixed(0);
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }
  else
  {
    document.getElementById("table_buff_elm").innerHTML = "-";
    document.getElementById("table_af_elm").innerHTML = "-";
    document.getElementById("table_final_elm").innerHTML = "-";
  }

  if (depend_status[3] == 1)
  {
    fixed_status[3] += await (char_instance.calculate_char_fixed_elm_charge() + weapon_instance.calculate_weapon_fixed_elm_charge());
    result_status[3] = team_dynamic_buff[3] + fixed_status[3] + await (char_instance.calculate_char_result_elm_charge() + weapon_instance.calculate_weapon_result_elm_charge());
    buff_status[3] = result_status[3] - af_buff[3] - base_status[3];
    document.getElementById("table_buff_elm_charge").innerHTML = (buff_status[3]*100).toFixed(1) + "％";
    document.getElementById("table_af_elm_charge").innerHTML = (af_buff[3]*100).toFixed(1) + "％";
    document.getElementById("table_final_elm_charge").innerHTML = (result_status[3]*100).toFixed(1) + "％";
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }
  else
  {
    document.getElementById("table_buff_elm_charge").innerHTML = "-";
    document.getElementById("table_af_elm_charge").innerHTML = "-";
    document.getElementById("table_final_elm_charge").innerHTML = "-";
  }

  if (depend_status[4] == 1)
  {
    fixed_status[4] += await (char_instance.calculate_char_fixed_attck() + weapon_instance.calculate_weapon_fixed_attck());
    result_status[4] = team_dynamic_buff[4] + fixed_status[4] + await (char_instance.calculate_char_result_attck() + weapon_instance.calculate_weapon_result_attck());
    buff_status[4] = result_status[4] - af_buff[4] - base_status[4];
    document.getElementById("table_buff_attck").innerHTML = buff_status[4].toFixed(0);
    document.getElementById("table_af_attck").innerHTML = af_buff[4].toFixed(0);
    document.getElementById("table_final_attck").innerHTML = result_status[4].toFixed(0);
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }
  else
  {
    document.getElementById("table_buff_attck").innerHTML = "-";
    document.getElementById("table_af_attck").innerHTML = "-";
    document.getElementById("table_final_attck").innerHTML = "-";
  }

  if (depend_status[5] == 1)
  {
    fixed_status[5] += await (char_instance.calculate_char_fixed_cr() + weapon_instance.calculate_weapon_fixed_cr());
    result_status[5] = team_dynamic_buff[5] + fixed_status[5] + await (char_instance.calculate_char_result_cr() + weapon_instance.calculate_weapon_result_cr());
    buff_status[5] = result_status[5] - af_buff[5] - base_status[5];
    if (fixed_status[5] > 1)
    {
      fixed_status[5] = 1;
    }
    if (result_status[5] > 1)
    {
      result_status[5] = 1;
    }
    document.getElementById("table_buff_cr").innerHTML = (buff_status[5]*100).toFixed(1) + "％";
    document.getElementById("table_af_cr").innerHTML = (af_buff[5]*100).toFixed(1) + "％";
    document.getElementById("table_final_cr").innerHTML = (result_status[5]*100).toFixed(1) + "％";
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }
  else
  {
    document.getElementById("table_buff_cr").innerHTML = "-";
    document.getElementById("table_af_cr").innerHTML = "-";
    document.getElementById("table_final_cr").innerHTML = "-";
  }

  if (depend_status[6] == 1)
  {
    fixed_status[6] += await (char_instance.calculate_char_fixed_cd() + weapon_instance.calculate_weapon_fixed_cd());
    result_status[6] = team_dynamic_buff[6] + fixed_status[6] + await (char_instance.calculate_char_result_cd() + weapon_instance.calculate_weapon_result_cd());
    buff_status[6] = result_status[6] - af_buff[6] - base_status[6];
    document.getElementById("table_buff_cd").innerHTML = (buff_status[6]*100).toFixed(1) + "％";
    document.getElementById("table_af_cd").innerHTML = (af_buff[6]*100).toFixed(1) + "％";
    document.getElementById("table_final_cd").innerHTML = (result_status[6]*100).toFixed(1) + "％";
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }
  else
  {
    document.getElementById("table_buff_cd").innerHTML = "-";
    document.getElementById("table_af_cd").innerHTML = "-";
    document.getElementById("table_final_cd").innerHTML = "-";
  }

  fixed_status[7] += await (char_instance.calculate_char_fixed_dmg_buff() + weapon_instance.calculate_weapon_fixed_dmg_buff());
  result_status[7] = team_dynamic_buff[7] + fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff() + weapon_instance.calculate_weapon_result_dmg_buff());
  char_instance.update_status(fixed_status, result_status);
  weapon_instance.update_status(fixed_status, result_status);
  buff_status[7] = result_status[7] - af_main_status_buff[7] - base_status[7];
  document.getElementById("table_buff_dmg_buff").innerHTML = (buff_status[7]*100).toFixed(1) + "％";
  document.getElementById("table_af_dmg_buff").innerHTML = (af_main_status_buff[7]*100).toFixed(1) + "％";
  document.getElementById("table_final_dmg_buff").innerHTML = (result_status[7]*100).toFixed(1) + "％";
}

///////////////////////

async function create_weapon_instance(base_status, fixed_status, result_status) 
{
  const weapon_index = document.getElementById("weapon_index").value;
  if (weapon_index === "0") 
  {
    const weapon_instance = new AThousandFloatingDreams(base_status, fixed_status, result_status);
    return weapon_instance;
  }
  if (weapon_index === "2") 
  {
    const weapon_instance = new SacrificialFragments(base_status, fixed_status, result_status);
    return weapon_instance;
  }
  if (weapon_index === "4") 
  {
    const weapon_instance = new EngulfingLightning(base_status, fixed_status, result_status);
    return weapon_instance;
  }
  if (weapon_index === "5") 
  {
    const weapon_instance = new TheCatch(base_status, fixed_status, result_status);
    return weapon_instance;
  }
}

///////////////////////


async function create_afset_instance() 
{
  let set1_buff;
  let set2_buff;
  let buff = [0, 0, 0, 0, 0, 0, 0, 0];
  if (selectedImageIds[0] == selectedImageIds[1])
  {
    set1_buff = set_effect2[selectedImageIds[0]]();
    set2_buff = set_effect4[selectedImageIds[0]]();
  }
  else
  {
    set1_buff = await set_effect2[selectedImageIds[0]]();
    set2_buff = await set_effect2[selectedImageIds[1]]();
  }

 for (let i = 0; i < 8; i++)
  {
    buff[i] = set1_buff[i] + set2_buff[i];
  }
  const attackSelect = document.getElementById("attack_method");
  attack_method = attackSelect.value;
  return buff
}


///////////////////////

async function calculate_my_exp_dmg (base_status,af_main_status_buff,depend_status)
{
  const af_hp = parseInt(document.getElementById("af_hp").value);//聖遺物HP上昇量
  const af_attck = parseInt(document.getElementById("af_attck").value);//聖遺物攻撃力上昇量
  const af_deff = parseInt(document.getElementById("af_deff").value);//聖遺物防御力上昇量
  const af_elm = parseInt(document.getElementById("af_elm").value);//聖遺物元素熟知上昇量
  const af_elm_charge= parseFloat(document.getElementById("af_elm_charge").value)/100;//聖遺物元素チャージ効率上昇量
  const af_cr= parseFloat(document.getElementById("af_cr").value)/100;//聖遺物会心率上昇量
  const af_cd = parseFloat(document.getElementById("af_cd").value)/100;//聖遺物会心ダメージ上昇量
  const af_buff = [af_hp, af_deff, af_elm, af_elm_charge, af_attck, af_cr, af_cd];
  const char_parameter = await import_char_parameter();
  let basic_dmg;
  let exp_dmg;
  let team_fix_buff = await calculate_team_fix_buff(base_status)
  let team_dynamic_buff = await calculate_team_dynamic_buff(base_status)
  let fixed_status = [0,0,0,0,0,0,0];
  let result_status;
  for (let i = 0; i < 7; i++)
  {
    fixed_status[i] = base_status[i] + af_buff[i] + team_fix_buff[i];
  }
  fixed_status[7] = af_main_status_buff[7] + team_fix_buff[7];
  result_status = fixed_status.slice();

  const char_instance = await create_char_instance(base_status, fixed_status, result_status,char_parameter);
  const weapon_instance = await create_weapon_instance(base_status, fixed_status, result_status);
  const dmg_rate = await char_instance.dmg_rate_data();
  char_instance.update_status(fixed_status, result_status);
  weapon_instance.update_status(fixed_status, result_status);

  if (depend_status[0] == 1)
  {
    fixed_status[0] += await (char_instance.calculate_char_fixed_hp() + weapon_instance.calculate_weapon_fixed_hp());
    result_status[0] = team_dynamic_buff[0] + fixed_status[0] + await (char_instance.calculate_char_result_hp() + weapon_instance.calculate_weapon_result_hp());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }

  if (depend_status[1] == 1)
  {
    fixed_status[1] += await (char_instance.calculate_char_fixed_deff() + weapon_instance.calculate_weapon_fixed_deff());
    result_status[1] = team_dynamic_buff[1] + fixed_status[1] + await (char_instance.calculate_char_result_deff() + weapon_instance.calculate_weapon_result_deff());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }

  if (depend_status[2] == 1)
  {
    fixed_status[2] += await (char_instance.calculate_char_fixed_elm() + weapon_instance.calculate_weapon_fixed_elm());
    result_status[2] = team_dynamic_buff[2] + fixed_status[2] + await (char_instance.calculate_char_result_elm() + weapon_instance.calculate_weapon_result_elm());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }

  if (depend_status[3] == 1)
  {
    fixed_status[3] += await (char_instance.calculate_char_fixed_elm_charge() + weapon_instance.calculate_weapon_fixed_elm_charge());
    result_status[3] = team_dynamic_buff[3] + fixed_status[3] + await (char_instance.calculate_char_result_elm_charge() + weapon_instance.calculate_weapon_result_elm_charge());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }

  if (depend_status[4] == 1)
  {
    fixed_status[4] += await (char_instance.calculate_char_fixed_attck() + weapon_instance.calculate_weapon_fixed_attck());
    result_status[4] = team_dynamic_buff[4] + fixed_status[4] + await (char_instance.calculate_char_result_attck() + weapon_instance.calculate_weapon_result_attck());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }

  if (depend_status[5] == 1)
  {
    fixed_status[5] += await (char_instance.calculate_char_fixed_cr() + weapon_instance.calculate_weapon_fixed_cr());
    result_status[5] = team_dynamic_buff[5] + fixed_status[5] + await (char_instance.calculate_char_result_cr() + weapon_instance.calculate_weapon_result_cr());
    if (fixed_status[5] > 1)
    {
      fixed_status[5] = 1;
    }
    if (result_status[5] > 1)
    {
      result_status[5] = 1;
    }
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }

  if (depend_status[6] == 1)
  {
    fixed_status[6] += await (char_instance.calculate_char_fixed_cd() + weapon_instance.calculate_weapon_fixed_cd());
    result_status[6] = team_dynamic_buff[6] + fixed_status[6] + await (char_instance.calculate_char_result_cd() + weapon_instance.calculate_weapon_result_cd());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
  }

  fixed_status[7] += await (char_instance.calculate_char_fixed_dmg_buff() + weapon_instance.calculate_weapon_fixed_dmg_buff());
  result_status[7] = team_dynamic_buff[7] + fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff() + weapon_instance.calculate_weapon_result_dmg_buff());
  char_instance.update_status(fixed_status, result_status);
  weapon_instance.update_status(fixed_status, result_status);

  console.log(result_status);
  console.log(dmg_rate);

  basic_dmg = await char_instance.calculate_basic_dmg(dmg_rate);
  exp_dmg = basic_dmg *(1 + result_status[5]*result_status[6])
    *(1 + result_status[7])*0.45;
  result_status.push(exp_dmg);
  console.log(result_status);
  return result_status;
}

//////////////////////
async function import_char_parameter()
{
  const levelSelect = document.getElementById("char_level");
  const level_index = levelSelect.value;
  const response = await fetch("./data/element.json");
  const levelData = await response.json();
  const levelObject = levelData["レベル"];
  const aggobject = levelData["反応固有値"]; 
  const selectedLevel = levelObject[level_index];
  const agg_fixed_value = aggobject[selectedLevel];
  const char_constellations = document.getElementById("char_constellations");
  const constellations = char_constellations.value;
  const parameter = [selectedLevel,agg_fixed_value,constellations];
  return parameter;
}


//////////////////////

async function monte_carlo_calculate()
{
  const checkboxStates = [];
  const characterInfo = document.getElementById("characterInfo");
  const checkboxes = characterInfo.querySelectorAll('input[type="checkbox"]');
  const char_parameter = await import_char_parameter();

  checkboxes.forEach((checkbox) => {
    checkboxStates.push(checkbox.checked);
  });
  while (checkboxStates.length < 4) {
    checkboxStates.push(false);
  }

  const base_status = await calculate_base_status();
  const af_main_status_buff = await calculate_af_main_status_buff();
  const depend_status = await calculate_depend_status();
  const team_fix_buff = await calculate_team_fix_buff(base_status);
  const team_dynamic_buff = await calculate_team_dynamic_buff(base_status);
  const depend_status_index = await calculate_depend_status_index(depend_status);
  let my_result_status = await calculate_my_exp_dmg(base_status,af_main_status_buff,depend_status);
  let my_exp_dmg = my_result_status[8];
  let my_af_score_distribution = await  calculate_af_score(af_main_status_buff,depend_status,base_status);
  let af_score = my_af_score_distribution[7];
  const my_af_score = my_af_score_distribution[7];
  const dlt_score = 0.1;
  let critical_dmg;
  let temp_critical_dmg;
  let response = "<br>";
  document.getElementById("response").innerHTML = response;
  if (my_exp_dmg < 0 || !Number.isFinite(my_exp_dmg))
  {
    response ="ダメージ期待値が異常値を示しています。再入力してください。"
    document.getElementById("response").innerHTML = response;
    return response;
  }
  
  if (af_score < 0 || af_score > 350 || !Number.isFinite(af_score))
  {
    console.log(af_score);
    response = "  聖遺物スコア: " + af_score + "<br>" + "聖遺物スコアが異常値を示しています。再入力してください。"
    document.getElementById("response").innerHTML = response;
    return response;
  }
  my_exp_dmg = my_exp_dmg.toFixed(0);
  let score_distribute;
  let af_score_upper_limit = af_score;
  let af_score_lower_limit = 0;
  af_score = af_score/2;

  let base_parameter;
  let fixed_status = [0,0,0,0,0,0,0,0];
  let result_status = [0,0,0,0,0,0,0,0];
  let random_1;
  let random_2;
  let output_exp_dmg = Infinity;
  let temp_status = [0,0,0,0,0,0,0,0];
  let temp_score_distribute = [0,0,0,0,0,0,0];
  let old_score_distribution = [0,0,0,0,0,0,0];
  let new_score_distribution = [0,0,0,0,0,0,0];
  let basic_dmg;
  let n_count = 0;

  const char_instance = await create_char_instance(base_status, fixed_status, result_status, char_parameter);
  const weapon_instance = await create_weapon_instance(base_status, fixed_status, result_status);
  const dmg_rate = await char_instance.dmg_rate_data();

  let fixed_buff =[0,0,0,0,0,0,0,0];
  fixed_buff[0] = await (char_instance.calculate_char_fixed_hp() + weapon_instance.calculate_weapon_fixed_hp() + team_fix_buff[0]);
  fixed_buff[1] = await (char_instance.calculate_char_fixed_deff() + weapon_instance.calculate_weapon_fixed_deff()+ team_fix_buff[1]);
  fixed_buff[2] = await (char_instance.calculate_char_fixed_elm() + weapon_instance.calculate_weapon_fixed_elm() + team_fix_buff[2]);
  fixed_buff[3] = await (char_instance.calculate_char_fixed_elm_charge() + weapon_instance.calculate_weapon_fixed_elm_charge() + team_fix_buff[3]);
  fixed_buff[4] = await (char_instance.calculate_char_fixed_attck() + weapon_instance.calculate_weapon_fixed_attck() + team_fix_buff[4]);
  fixed_buff[5] = await (char_instance.calculate_char_fixed_cr() + weapon_instance.calculate_weapon_fixed_cr() + team_fix_buff[5]);
  fixed_buff[6] = await (char_instance.calculate_char_fixed_cd() + weapon_instance.calculate_weapon_fixed_cd() + team_fix_buff[6]);
  fixed_buff[7] = await (char_instance.calculate_char_fixed_dmg_buff() + weapon_instance.calculate_weapon_fixed_dmg_buff() + team_fix_buff[7]);
  console.log(fixed_buff);
  console.log(team_dynamic_buff);

  while (my_exp_dmg !== output_exp_dmg && n_count < 30)
  {
    let exp_dmg = 0;
    let temp_exp_dmg = 0;
    n_count = n_count + 1;

    for (let i = 0; i < 10000; i++)
    {
      score_distribute = await calculate_score_distribute(af_score,depend_status);
      base_parameter = await calculate_fixed_status(score_distribute,base_status,af_main_status_buff);
      
      for (let g = 0; g < depend_status_index.length; g++)
      {
        fixed_status[depend_status_index[g]] = base_parameter[depend_status_index[g]] + fixed_buff[depend_status_index[g]];
        result_status[depend_status_index[g]] = fixed_status[depend_status_index[g]] + team_dynamic_buff[depend_status_index[g]];
      }
      fixed_status[7] = base_parameter[7] + fixed_buff[7];
      result_status[7] = fixed_status[7] + team_dynamic_buff[7];
      char_instance.update_status(fixed_status, result_status);
      weapon_instance.update_status(fixed_status, result_status);

      if (depend_status[0] == 1)
      {
        result_status[0] += await (char_instance.calculate_char_result_hp() + weapon_instance.calculate_weapon_result_hp());
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }

      if (depend_status[1] == 1)
      {
        result_status[1] += await (char_instance.calculate_char_result_deff() + weapon_instance.calculate_weapon_result_deff());
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }

      if (depend_status[2] == 1)
      {
        result_status[2] += await (char_instance.calculate_char_result_elm() + weapon_instance.calculate_weapon_result_elm());
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }

      if (depend_status[3] == 1)
      {
        result_status[3] += await (char_instance.calculate_char_result_elm_charge() + weapon_instance.calculate_weapon_result_elm_charge());
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }

      if (depend_status[4] == 1)
      {
        result_status[4] += await (char_instance.calculate_char_result_attck() + weapon_instance.calculate_weapon_result_attck());
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }
      if (depend_status[5] == 1)
      {
        result_status[5] += await (char_instance.calculate_char_result_cr() + weapon_instance.calculate_weapon_result_cr());
        if (result_status[5] > 1)
        {
          result_status[5] = 1;
        }
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }

      if (depend_status[6] == 1)
      {
        result_status[6] += await (char_instance.calculate_char_result_cd() + weapon_instance.calculate_weapon_result_cd());
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }
      
      result_status[7] += await (char_instance.calculate_char_result_dmg_buff() + weapon_instance.calculate_weapon_result_dmg_buff());
      char_instance.update_status(fixed_status, result_status);
      weapon_instance.update_status(fixed_status, result_status);

      basic_dmg = await char_instance.calculate_basic_dmg(dmg_rate);
      exp_dmg = basic_dmg*(1 + result_status[5]*result_status[6])
        *(1 + result_status[7])*0.45;

      if (temp_exp_dmg < exp_dmg)
      {
        temp_score_distribute = score_distribute;
        temp_status = result_status.slice();
        temp_exp_dmg = exp_dmg;
      }
    }

    old_score_distribution = temp_score_distribute.slice();
    new_score_distribution = temp_score_distribute.slice();

    for (let k = 0; k < 5000; k++)
    {
      random_1 = Math.floor(depend_status_index.length * Math.random());
      random_2 = Math.floor(depend_status_index.length * Math.random());

      if (random_1 == random_2)
      {
        random_2 = (random_2 + Math.floor((depend_status_index.length - 1)*Math.random() + 1)) % depend_status_index.length;
      }

      if (new_score_distribution[depend_status_index[random_1]] == 0 || new_score_distribution[depend_status_index[random_2]] == 0)
      {
        continue;
      }

      new_score_distribution[depend_status_index[random_1]] =  new_score_distribution[depend_status_index[random_1]] + dlt_score;
      new_score_distribution[depend_status_index[random_2]] =  new_score_distribution[depend_status_index[random_2]] - dlt_score;

      if (new_score_distribution[depend_status_index[random_2]] < 0)
      {
        new_score_distribution[depend_status_index[random_1]] =  new_score_distribution[depend_status_index[random_1]] +  new_score_distribution[depend_status_index[random_2]];
        new_score_distribution[depend_status_index[random_2]] = 0;
      }

      base_parameter = await calculate_fixed_status(new_score_distribution,base_status,af_main_status_buff,depend_status);
      for (g = 0; g < depend_status_index.length; g++)
      {
        fixed_status[depend_status_index[g]] = base_parameter[depend_status_index[g]] + fixed_buff[depend_status_index[g]];
        result_status[depend_status_index[g]] = fixed_status[depend_status_index[g]] + team_dynamic_buff[depend_status_index[g]]
      }
      fixed_status[7] = base_parameter[7] + fixed_buff[7];
      result_status[7] = fixed_status[7] + team_dynamic_buff[7]
      char_instance.update_status(fixed_status, result_status);
      weapon_instance.update_status(fixed_status, result_status);

      if (depend_status[0] == 1)
      {
        result_status[0] += await (char_instance.calculate_char_result_hp() + weapon_instance.calculate_weapon_result_hp());
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }

      if (depend_status[1] == 1)
      {
        result_status[1] += await (char_instance.calculate_char_result_deff() + weapon_instance.calculate_weapon_result_deff());
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }

      if (depend_status[2] == 1)
      {
        result_status[2] += await (char_instance.calculate_char_result_elm() + weapon_instance.calculate_weapon_result_elm());
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }

      if (depend_status[3] == 1)
      {
        result_status[3] += await (char_instance.calculate_char_result_elm_charge() + weapon_instance.calculate_weapon_result_elm_charge());
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }

      if (depend_status[4] == 1)
      {
        result_status[4] += await (char_instance.calculate_char_result_attck() + weapon_instance.calculate_weapon_result_attck());
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }

      if (depend_status[5] == 1)
      {
        result_status[5] += await (char_instance.calculate_char_result_cr() + weapon_instance.calculate_weapon_result_cr());
        if (result_status[5] > 1)
        {
          result_status[5] = 1;
        }
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }

      if (depend_status[6] == 1)
      {
        result_status[6] += await (char_instance.calculate_char_result_cd() + weapon_instance.calculate_weapon_result_cd());
        char_instance.update_status(fixed_status, result_status);
        weapon_instance.update_status(fixed_status, result_status);
      }

      result_status[7] += await (char_instance.calculate_char_result_dmg_buff() + weapon_instance.calculate_weapon_result_dmg_buff());
      char_instance.update_status(fixed_status, result_status);
      weapon_instance.update_status(fixed_status, result_status);

      basic_dmg = await char_instance.calculate_basic_dmg(dmg_rate);
      exp_dmg = basic_dmg*(1 + result_status[5]*result_status[6])
        *(1 + result_status[7])*0.45;
      critical_dmg = basic_dmg*(1 + result_status[6])
        *(1 + result_status[7])*0.45;
      
      if (temp_exp_dmg < exp_dmg)
      {
        temp_exp_dmg = exp_dmg;
        temp_status = result_status.slice();
        old_score_distribution = new_score_distribution.slice();
        temp_critical_dmg = critical_dmg;
      }
      else
      {
        new_score_distribution = old_score_distribution.slice();
      }
    }
    output_exp_dmg = temp_exp_dmg.toFixed(0);
    if (my_exp_dmg < output_exp_dmg)
    {
      af_score_upper_limit = af_score;
      af_score = (af_score_upper_limit + af_score_lower_limit)/2;
    }
    else
    {
      af_score_lower_limit = af_score;
      af_score = (af_score_upper_limit + af_score_lower_limit)/2;
    }
  }

  let result = "最適化換算聖遺物スコア： " + af_score.toFixed(1) +"<br>" + "ダメージ期待値： " + output_exp_dmg;
  document.getElementById("result").innerHTML = result;

  if (depend_status[0] == 1)
  {
    let result_dlthp = (my_af_score_distribution[0] - old_score_distribution[0])
    let dlthpScore = document.getElementById("dlt_hp_score");
    let dltAfhp = document.getElementById("dlt_af_hp");
    let hpcolor;
    document.getElementById("my_result_hp").innerHTML = my_result_status[0].toFixed(0);
    document.getElementById("appro_result_hp").innerHTML =temp_status[0].toFixed(0);
    document.getElementById("my_hp_score").innerHTML = my_af_score_distribution[0].toFixed(1);
    document.getElementById("appro_hp_score").innerHTML = old_score_distribution[0].toFixed(1);
    document.getElementById("count_hp_score").innerHTML = (old_score_distribution[0]/7.8).toFixed(1);
    document.getElementById("my_af_hp").innerHTML = (base_status[0]*my_af_score_distribution[0]*3/400).toFixed(0);
    document.getElementById("appro_af_hp").innerHTML = (base_status[0]*old_score_distribution[0]*3/400).toFixed(0);
    document.getElementById("count_hp_score3").innerHTML = (old_score_distribution[0]/7.8).toFixed(1);
    if (result_dlthp > 0)
    {
      hpcolor = "#66bb6a"; // 薄い緑色
    } 
    else
    {
      hpcolor = "red";
    }
    dlthpScore.style.color = hpcolor;
    dlthpScore.innerHTML = result_dlthp.toFixed(1);
    dltAfhp.style.color = hpcolor;
    dltAfhp.innerHTML = (base_status[0]*result_dlthp*3/400).toFixed(0);
  }
  else
  {
    document.getElementById("my_result_hp").innerHTML = "-";
    document.getElementById("appro_result_hp").innerHTML = "-";
    document.getElementById("my_hp_score").innerHTML = "-";
    document.getElementById("appro_hp_score").innerHTML = "-";
    document.getElementById("dlt_hp_score").innerHTML = "-";
    document.getElementById("count_hp_score").innerHTML = "-";
    document.getElementById("my_af_hp").innerHTML = "-";
    document.getElementById("appro_af_hp").innerHTML = "-";
    document.getElementById("dlt_af_hp").innerHTML = "-";
    document.getElementById("count_hp_score3").innerHTML = "-";
  }

  if (depend_status[1] == 1)
  {
    let result_dltdeff = (my_af_score_distribution[1] - old_score_distribution[1])
    let dltdeffScore = document.getElementById("dlt_deff_score");
    let dltAfdeff = document.getElementById("dlt_af_deff");
    let deffcolor;
    document.getElementById("my_result_deff").innerHTML = my_result_status[1].toFixed(0);
    document.getElementById("appro_result_deff").innerHTML =temp_status[1].toFixed(0);
    document.getElementById("my_deff_score").innerHTML = my_af_score_distribution[1].toFixed(1);
    document.getElementById("appro_deff_score").innerHTML = old_score_distribution[1].toFixed(1);
    document.getElementById("count_deff_score").innerHTML = (old_score_distribution[1]/7.8).toFixed(1);
    document.getElementById("my_af_deff").innerHTML = (base_status[1]*my_af_score_distribution[1]*15/1600).toFixed(0);
    document.getElementById("appro_af_deff").innerHTML = (base_status[1]*old_score_distribution[1]*15/1600).toFixed(0);
    document.getElementById("count_deff_score3").innerHTML = (old_score_distribution[1]/7.8).toFixed(1);
    if (result_dltdeff > 0)
    {
      deffcolor = "#66bb6a"; // 薄い緑色
    } 
    else
    {
      deffcolor = "red";
    }
    dltdeffScore.style.color = deffcolor;
    dltdeffScore.innerHTML = result_dltdeff.toFixed(1);
    dltAfdeff.style.color = deffcolor;
    dltAfdeff.innerHTML = (base_status[1]*result_dltdeff*15/1600).toFixed(0);
  }
  else
  {
    document.getElementById("my_result_deff").innerHTML = "-";
    document.getElementById("appro_result_deff").innerHTML = "-";
    document.getElementById("my_deff_score").innerHTML = "-";
    document.getElementById("appro_deff_score").innerHTML = "-";
    document.getElementById("dlt_deff_score").innerHTML = "-";
    document.getElementById("count_deff_score").innerHTML = "-";
    document.getElementById("my_af_deff").innerHTML = "-";
    document.getElementById("appro_af_deff").innerHTML = "-";
    document.getElementById("dlt_af_deff").innerHTML = "-";
    document.getElementById("count_deff_score3").innerHTML = "-";
  }

  if (depend_status[2] == 1)
  {
    let result_dltelm = (my_af_score_distribution[2] - old_score_distribution[2])
    let dltElmScore = document.getElementById("dlt_elm_score");
    let dltAfElm = document.getElementById("dlt_af_elm");
    let elmcolor;
    document.getElementById("my_result_elm").innerHTML = my_result_status[2].toFixed(0);
    document.getElementById("appro_result_elm").innerHTML =temp_status[2].toFixed(0);
    document.getElementById("my_elm_score").innerHTML = my_af_score_distribution[2].toFixed(1);
    document.getElementById("appro_elm_score").innerHTML = old_score_distribution[2].toFixed(1);
    document.getElementById("count_elm_score").innerHTML = (old_score_distribution[2]/7.8).toFixed(1);
    document.getElementById("my_af_elm").innerHTML = (my_af_score_distribution[2]*3).toFixed(0);
    document.getElementById("appro_af_elm").innerHTML = (old_score_distribution[2]*3).toFixed(0);
    document.getElementById("count_elm_score3").innerHTML = (old_score_distribution[2]/7.8).toFixed(1);
  
    if (result_dltelm > 0)
    {
      elmcolor = "#66bb6a"; // 薄い緑色
    } 
    else
    {
      elmcolor = "red";
    }
    dltElmScore.style.color = elmcolor;
    dltElmScore.innerHTML = result_dltelm.toFixed(1);
    dltAfElm.style.color = elmcolor;
    dltAfElm.innerHTML = (3*result_dltelm).toFixed(0);
  }
  else
  {
    document.getElementById("my_result_elm").innerHTML = "-";
    document.getElementById("appro_result_elm").innerHTML = "-";
    document.getElementById("my_elm_score").innerHTML = "-";
    document.getElementById("appro_elm_score").innerHTML = "-";
    document.getElementById("dlt_elm_score").innerHTML = "-";
    document.getElementById("count_elm_score").innerHTML = "-";
    document.getElementById("my_af_elm").innerHTML = "-";
    document.getElementById("appro_af_elm").innerHTML = "-";
    document.getElementById("dlt_af_elm").innerHTML = "-";
    document.getElementById("count_elm_score3").innerHTML = "-";
  }

  if (depend_status[3] == 1)
  {
    let result_dltelmcharge = (my_af_score_distribution[3] - old_score_distribution[3])
    let dltelmchargeScore = document.getElementById("dlt_elm_charge_score");
    let dltAfelmcharge = document.getElementById("dlt_af_elm_charge");
    let elmchargecolor;
    document.getElementById("my_result_elm_charge").innerHTML = (my_result_status[3]*100).toFixed(1) + "％";
    document.getElementById("appro_result_elm_charge").innerHTML =(temp_status[3]*100).toFixed(1) + "％";
    document.getElementById("my_elm_charge_score").innerHTML = my_af_score_distribution[3].toFixed(1);
    document.getElementById("appro_elm_charge_score").innerHTML = old_score_distribution[3].toFixed(1);
    document.getElementById("count_elm_charge_score").innerHTML = (old_score_distribution[3]/7.8).toFixed(1);
    document.getElementById("my_af_elm_charge").innerHTML = (my_af_score_distribution[3]*5/6).toFixed(1) + "％";
    document.getElementById("appro_af_elm_charge").innerHTML = (old_score_distribution[3]*5/6).toFixed(1) + "％";
    document.getElementById("count_elm_charge_score3").innerHTML = (old_score_distribution[3]/7.8).toFixed(1);
    if (result_dltelmcharge > 0)
    {
      elmchargecolor = "#66bb6a"; // 薄い緑色
    } 
    else
    {
      elmchargecolor = "red";
    }
    dltelmchargeScore.style.color = elmchargecolor;
    dltelmchargeScore.innerHTML = result_dltelmcharge.toFixed(1);
    dltAfelmcharge.style.color = elmchargecolor;
    dltAfelmcharge.innerHTML = (result_dltelmcharge*5/6).toFixed(1) + "％";
  }
  else
  {
    document.getElementById("my_result_elm_charge").innerHTML = "-";
    document.getElementById("appro_result_elm_charge").innerHTML = "-";
    document.getElementById("my_elm_charge_score").innerHTML = "-";
    document.getElementById("appro_elm_charge_score").innerHTML = "-";
    document.getElementById("dlt_elm_charge_score").innerHTML = "-";
    document.getElementById("count_elm_charge_score").innerHTML = "-";
    document.getElementById("my_af_elm_charge").innerHTML = "-";
    document.getElementById("appro_af_elm_charge").innerHTML = "-";
    document.getElementById("dlt_af_elm_charge").innerHTML = "-";
    document.getElementById("count_elm_charge_score3").innerHTML = "-";
  }

  if (depend_status[4] == 1)
  {
    let result_dltattck = (my_af_score_distribution[4] - old_score_distribution[4])
    let dltattckScore = document.getElementById("dlt_attck_score");
    let dltAfattck = document.getElementById("dlt_af_attck");
    let attckcolor;
    document.getElementById("my_result_attck").innerHTML = my_result_status[4].toFixed(0);
    document.getElementById("appro_result_attck").innerHTML =temp_status[4].toFixed(0);
    document.getElementById("my_attck_score").innerHTML = my_af_score_distribution[4].toFixed(1);
    document.getElementById("appro_attck_score").innerHTML = old_score_distribution[4].toFixed(1);
    document.getElementById("count_attck_score").innerHTML = (old_score_distribution[4]/7.8).toFixed(1);
    document.getElementById("my_af_attck").innerHTML = (base_status[4]*my_af_score_distribution[4]*3/400).toFixed(0);
    document.getElementById("appro_af_attck").innerHTML = (base_status[4]*old_score_distribution[4]*3/400).toFixed(0);
    document.getElementById("count_attck_score3").innerHTML = (old_score_distribution[4]/7.8).toFixed(1);
    if (result_dltattck > 0)
    {
      attckcolor = "#66bb6a"; // 薄い緑色
    } 
    else
    {
      attckcolor = "red";
    }
    dltattckScore.style.color = attckcolor;
    dltattckScore.innerHTML = result_dltattck.toFixed(1);
    dltAfattck.style.color = attckcolor;
    dltAfattck.innerHTML = (base_status[4]*result_dltattck*3/400).toFixed(0);
    }
  else
  {
    document.getElementById("my_result_attck").innerHTML = "-";
    document.getElementById("appro_result_attck").innerHTML = "-";
    document.getElementById("my_attck_score").innerHTML = "-";
    document.getElementById("appro_attck_score").innerHTML = "-";
    document.getElementById("dlt_attck_score").innerHTML = "-";
    document.getElementById("count_attck_score").innerHTML = "-";
    document.getElementById("my_af_attck").innerHTML = "-";
    document.getElementById("appro_af_attck").innerHTML = "-";
    document.getElementById("dlt_af_attck").innerHTML = "-";
    document.getElementById("count_attck_score3").innerHTML = "-";
  }

  if (depend_status[5] == 1)
  {
    let result_dltcr = (my_af_score_distribution[5] - old_score_distribution[5])
    let dltcrScore = document.getElementById("dlt_cr_score");
    let dltAfcr = document.getElementById("dlt_af_cr");
    let crcolor;
    document.getElementById("my_result_cr").innerHTML = (my_result_status[5]*100).toFixed(1) + "%";
    document.getElementById("appro_result_cr").innerHTML = (temp_status[5]*100).toFixed(1) + "%";
    document.getElementById("my_cr_score").innerHTML = my_af_score_distribution[5].toFixed(1);
    document.getElementById("appro_cr_score").innerHTML = old_score_distribution[5].toFixed(1);
    document.getElementById("count_cr_score").innerHTML = (old_score_distribution[5]/7.8).toFixed(1);
    document.getElementById("my_af_cr").innerHTML = (my_af_score_distribution[5]/2).toFixed(1) + "%";
    document.getElementById("appro_af_cr").innerHTML = (old_score_distribution[5]/2).toFixed(1) + "%";
    document.getElementById("count_cr_score3").innerHTML = (old_score_distribution[5]/7.8).toFixed(1);
    if (result_dltcr > 0)
    {
      crcolor = "#66bb6a"; // 薄い緑色
    } 
    else
    {
      crcolor = "red";
    }
    dltcrScore.style.color = crcolor;
    dltcrScore.innerHTML = result_dltcr.toFixed(1);
    dltAfcr.style.color = crcolor;
    dltAfcr.innerHTML = (result_dltcr/2).toFixed(1) + "％";  
  }
  else
  {
    document.getElementById("my_result_cr").innerHTML = "-";
    document.getElementById("appro_result_cr").innerHTML = "-";
    document.getElementById("my_cr_score").innerHTML = "-";
    document.getElementById("appro_cr_score").innerHTML = "-";
    document.getElementById("dlt_cr_score").innerHTML = "-";
    document.getElementById("count_cr_score").innerHTML = "-";
    document.getElementById("my_af_cr").innerHTML = "-";
    document.getElementById("appro_af_cr").innerHTML = "-";
    document.getElementById("dlt_af_cr").innerHTML = "-";
    document.getElementById("count_cr_score3").innerHTML = "-";
  }

  if (depend_status[6] == 1)
  {
    let result_dltcd = (my_af_score_distribution[6] - old_score_distribution[6])
    let dltcdScore = document.getElementById("dlt_cd_score");
    let dltAfcd = document.getElementById("dlt_af_cd");
    let cdcolor;
    document.getElementById("my_result_cd").innerHTML = (my_result_status[6]*100).toFixed(1) + "%";
    document.getElementById("appro_result_cd").innerHTML = (temp_status[6]*100).toFixed(1) + "%";
    document.getElementById("my_cd_score").innerHTML = my_af_score_distribution[6].toFixed(1);
    document.getElementById("appro_cd_score").innerHTML = old_score_distribution[6].toFixed(1);
    document.getElementById("dlt_cd_score").innerHTML = (my_af_score_distribution[6] - old_score_distribution[6]).toFixed(1);
    document.getElementById("count_cd_score").innerHTML = (old_score_distribution[6]/7.8).toFixed(1);
    document.getElementById("my_af_cd").innerHTML = (my_af_score_distribution[6]).toFixed(1) + "%";
    document.getElementById("appro_af_cd").innerHTML = (old_score_distribution[6]).toFixed(1) + "%";
    document.getElementById("dlt_af_cd").innerHTML = ((my_af_score_distribution[6] - old_score_distribution[6])).toFixed(1) + "%";
    document.getElementById("count_cd_score3").innerHTML = (old_score_distribution[6]/7.8).toFixed(1);
    if (result_dltcd > 0)
    {
      cdcolor = "#66bb6a"; // 薄い緑色
    } 
    else
    {
      cdcolor = "red";
    }
    dltcdScore.style.color = cdcolor;
    dltcdScore.innerHTML = result_dltcd.toFixed(1);
    dltAfcd.style.color = cdcolor;
    dltAfcd.innerHTML = (result_dltcd).toFixed(1) + "％";  
  }
  else
  {
    document.getElementById("my_result_cd").innerHTML = "-";
    document.getElementById("appro_result_cd").innerHTML = "-";
    document.getElementById("my_cd_score").innerHTML = "-";
    document.getElementById("appro_cd_score").innerHTML = "-";
    document.getElementById("dlt_cd_score").innerHTML = "-";
    document.getElementById("count_cd_score").innerHTML = "-";
    document.getElementById("my_af_cd").innerHTML = "-";
    document.getElementById("appro_af_cd").innerHTML = "-";
    document.getElementById("dlt_af_cd").innerHTML = "-";
    document.getElementById("count_cd_score3").innerHTML = "-";
  }

  document.getElementById("my_result_dmg_buff").innerHTML = (my_result_status[7]*100).toFixed(1) + "％";
  document.getElementById("appro_result_dmg_buff").innerHTML = (temp_status[7]*100).toFixed(1) + "％";
  document.getElementById("my_af_score").innerHTML = my_af_score.toFixed(1);
  document.getElementById("appro_af_score").innerHTML = af_score.toFixed(1);
  document.getElementById("dlt_af_score").innerHTML = (my_af_score-af_score).toFixed(1);
  document.getElementById("my_af_score3").innerHTML = my_af_score.toFixed(1);
  document.getElementById("appro_af_score3").innerHTML = af_score.toFixed(1);
  document.getElementById("dlt_af_score3").innerHTML = (my_af_score-af_score).toFixed(1);
  console.log(n_count);
}

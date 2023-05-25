let base_status = [0,0,0,0,0,0,0,0];
let char_base_status = [0,0,0,0,0,0,0,0];
let weapon_base_status = [0,0,0,0,0,0,0,0];
let depend_status = [0,0,0,0,0,0,0];
let char_depend_status = [0,0,0,0,0,0,0];
let weapon_depend_status = [0,0,0,0,0,0,0];
let base_hp = 0;
let base_attck = 0;
let base_deff = 0;
let base_elm = 0;
let base_elm_charge = 0;
let base_cr = 0;
let base_cd = 0;
let base_dmg_buff = 0;
let af_score = 0;
const char_name = ["nahida","yaoyao","tighnari","raiden"];
const weapon_name = ["AThousandFloatingDreams","Kagura'sVerity","SacrificialFragments","StaffofHoma","EngulfingLightning","TheCatch"];

/////////////////////

async function calculate_char_base_status() 
{
  const char_index = document.getElementById("char_index").value;
  const char_level = document.getElementById("char_level").value;
  const response = await fetch("./data/character/" + char_name[char_index] + ".json");
  const data = await response.json();
  const char_base_hp = data.ステータス.基礎HP[char_level];
  const char_base_attck = data.ステータス.基礎攻撃力[char_level];
  const char_base_deff = data.ステータス.基礎防御力[char_level];
  const char_base_elm = data.ステータス.基礎元素熟知[char_level];
  const char_base_elm_charge = 1 + data.ステータス.基礎元素チャージ効率[char_level];
  const char_base_cr = data.ステータス.基礎会心率[char_level];
  const char_base_cd = data.ステータス.基礎会心ダメージ[char_level];
  const char_base_dmg_buff = data.ステータス.基礎ダメージバフ[char_level];
  char_depend_status = data.ステータス.依存ステータス;
  char_base_status = [char_base_hp, char_base_deff, char_base_elm, char_base_elm_charge, char_base_attck, char_base_cr, char_base_cd, char_base_dmg_buff];
  return char_base_status;
}

///////////////  

async function calculate_weapon_base_status() {
  const weapon_index = document.getElementById("weapon_index").value;
  const weapon_level = document.getElementById("weapon_level").value;
  const response = await fetch("./data/weapon/" + weapon_name[weapon_index] + ".json");
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

async function calculate_base_status() {
  char_base_status = await calculate_char_base_status();
  weapon_base_status = await calculate_weapon_base_status();
  base_hp = char_base_status[0] + weapon_base_status[0];
  base_attck = char_base_status[4] + weapon_base_status[4];
  base_deff = char_base_status[1] + weapon_base_status[1];
  base_elm = char_base_status[2] + weapon_base_status[2];
  base_elm_charge = char_base_status[3] + weapon_base_status[3];
  base_dmg_buff = char_base_status[7] + weapon_base_status[7];
  base_cr = char_base_status[5] + weapon_base_status[5];
  base_cd = char_base_status[6] + weapon_base_status[6];
  base_status = [base_hp, base_deff, base_elm, base_elm_charge, base_attck, base_cr, base_cd, base_dmg_buff];
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
  for (let i = 0; i < 8; i++){
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
  let af_score = 0
  for (let i = 0; i < 7; i++){
    if (depend_status[i]==0){
      continue;
    }
    switch (i)
    {
      case 0:
       af_score = af_score+((af_hp - 4780)/base_status[0] - af_main_status_buff[0])*400/3;
       break;
      case 1:
        af_score = af_score + (af_deff/base_status[1] - af_main_status_buff[1])*1600/15;
        break;
      case 2:
        af_score = af_score + (af_elm -  af_main_status_buff[2])/3;
        break;
      case 3:
        af_score = af_score + (af_elm_charge - af_main_status_buff[3])*1.2;
        break;
      case 4:
        af_score = af_score+((af_attck - 311)/base_status[4] - af_main_status_buff[4])*400/3;
        break;
      case 5:
        af_score = af_score + (af_cr - af_main_status_buff[5])*2;
        break
      case 6:
        af_score = af_score + (af_cd - af_main_status_buff[6]);
    }
  }
  return af_score
}

///////////////////

async function calculate_depend_status()
  {
    const char_index = document.getElementById("char_index").value;
    const char_response = await fetch("./data/character/" + char_name[char_index] + ".json");
    const char_data = await char_response.json();
    const char_depend_status = char_data.ステータス.依存ステータス;
    const weapon_index = document.getElementById("weapon_index").value;
    const weapon_response = await fetch("./data/weapon/" + weapon_name[weapon_index] + ".json");
    const weapon_data = await weapon_response.json();
    const weapon_depend_status = weapon_data.ステータス.依存ステータス;
    for (let i = 0; i < 7; i++){
      depend_status[i] = char_depend_status[i] + weapon_depend_status[i]
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
  for (let i = 0; i < array.length; i++) {
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
  for (let j = 1; j < randomNumbers.length; j++) {
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

async function create_char_instance(base_status, fixed_status, result_status) {
  const char_index = document.getElementById("char_index").value;
  if (char_index === "0") {
    // ナヒーダのインスタンスを生成
    const char_instance = new nahida(base_status, fixed_status, result_status);
    return char_instance;
  }
  if (char_index === "3") {
    // 雷電将軍のインスタンスを生成
    const char_instance = new raiden(base_status, fixed_status, result_status);
    return char_instance;
  }
}

///////////////////////

async function create_weapon_instance(base_status, fixed_status, result_status) {
  const weapon_index = document.getElementById("weapon_index").value;
  if (weapon_index === "0") {
    const weapon_instance = new AThousandFloatingDreams(base_status, fixed_status, result_status);
    return weapon_instance;
  }
  if (weapon_index === "2") {
    const weapon_instance = new SacrificialFragments(base_status, fixed_status, result_status);
    return weapon_instance;
  }
  if (weapon_index === "4") {
    const weapon_instance = new EngulfingLightning(base_status, fixed_status, result_status);
    return weapon_instance;
  }
  if (weapon_index === "5") {
    const weapon_instance = new EngulfingLightning(base_status, fixed_status, result_status);
    return weapon_instance;
  }
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
  console.log(af_buff);
  let basic_dmg;
  let exp_dmg;

  let fixed_status = base_status.slice();
  let result_status;
  for (let i = 0; i < 7; i++)
  {
    fixed_status[i] = fixed_status[i] + af_buff[i];
  }
  fixed_status[7] = af_main_status_buff[7];
  result_status = fixed_status.slice();

  const char_instance = await create_char_instance(base_status, fixed_status, result_status);
  const weapon_instance = await create_weapon_instance(base_status, fixed_status, result_status);

  const dmg_rate = await char_instance.dmg_rate_data();
  char_instance.update_status(fixed_status, result_status);
  weapon_instance.update_status(fixed_status, result_status);

    if (depend_status[0] == 1)
    {
      fixed_status[0] += await (char_instance.calculate_char_fixed_hp() + weapon_instance.calculate_weapon_fixed_hp());
      result_status[0] = fixed_status[0] + await (char_instance.calculate_char_result_hp() + weapon_instance.calculate_weapon_result_hp());
      char_instance.update_status(fixed_status, result_status);
      weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[1] == 1)
    {
      fixed_status[1] += await (char_instance.calculate_char_fixed_deff() + weapon_instance.calculate_weapon_fixed_deff());
      result_status[1] = fixed_status[1] + await (char_instance.calculate_char_result_deff() + weapon_instance.calculate_weapon_result_deff());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[2] == 1)
    {
      fixed_status[2] += await (char_instance.calculate_char_fixed_elm() + weapon_instance.calculate_weapon_fixed_elm());
      result_status[2] = fixed_status[2] + await (char_instance.calculate_char_result_elm() + weapon_instance.calculate_weapon_result_elm());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[3] == 1)
    {
      fixed_status[3] += await (char_instance.calculate_char_fixed_elm_charge() + weapon_instance.calculate_weapon_fixed_elm_charge());
      result_status[3] = fixed_status[3] + await (char_instance.calculate_char_result_elm_charge() + weapon_instance.calculate_weapon_result_elm_charge());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[4] == 1)
    {
      fixed_status[4] += await (char_instance.calculate_char_fixed_attck() + weapon_instance.calculate_weapon_fixed_attck());
      result_status[4] = fixed_status[4] + await (char_instance.calculate_char_result_attck() + weapon_instance.calculate_weapon_result_attck());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[5] == 1)
    {
      fixed_status[5] += await (char_instance.calculate_char_fixed_cr() + weapon_instance.calculate_weapon_fixed_cr());
      result_status[5] = fixed_status[5] + await (char_instance.calculate_char_result_cr() + weapon_instance.calculate_weapon_result_cr());
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
      result_status[6] = fixed_status[6] + await (char_instance.calculate_char_result_cd() + weapon_instance.calculate_weapon_result_cd());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    fixed_status[7] += await (char_instance.calculate_char_fixed_dmg_buff() + weapon_instance.calculate_weapon_fixed_dmg_buff());
    result_status[7] = fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff() + weapon_instance.calculate_weapon_result_dmg_buff());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);

    console.log(result_status);
    console.log(dmg_rate);

    basic_dmg = await char_instance.calculate_basic_dmg(dmg_rate);
    exp_dmg = basic_dmg *(1 + result_status[5]*result_status[6])
      *(1 + result_status[7])*0.45;
    console.log(result_status);
    return exp_dmg;
  }

//////////////////////

//////////////////////

async function monte_carlo_calculate()
{

    const checkboxStates = [];
    const characterInfo = document.getElementById("characterInfo");
    const checkboxes = characterInfo.querySelectorAll('input[type="checkbox"]');
  
    checkboxes.forEach((checkbox) => {
      checkboxStates.push(checkbox.checked);
    });
    while (checkboxStates.length < 4) {
      checkboxStates.push(false);
    }
  console.log(checkboxStates); // チェックボックスの入力結果の配列を表示

  const base_status = await calculate_base_status();
  const af_main_status_buff = await calculate_af_main_status_buff();
  const depend_status = await calculate_depend_status();
  console.log(depend_status);
  const depend_status_index = await calculate_depend_status_index(depend_status);
  let my_exp_dmg = await calculate_my_exp_dmg(base_status,af_main_status_buff,depend_status);
  let af_score = await  calculate_af_score(af_main_status_buff,depend_status,base_status);
  let critical_dmg;
  let temp_critical_dmg;
  let my_af_score = await calculate_af_score(af_main_status_buff,depend_status,base_status);
  console.log(my_exp_dmg);
  if (my_exp_dmg < 0 || !Number.isFinite(my_exp_dmg))
  {
    result = "  ダメージ期待値: " + my_exp_dmg + "<br>" + "ダメージ期待値が異常値を示しています。再入力してください。"
    document.getElementById("result").innerHTML = result;
    console.log(my_exp_dmg);
    return result;
  }
  
  if (af_score < 0 || af_score>500 || !Number.isFinite(af_score))
  {
    console.log(af_score);
    result = "  聖遺物スコア: " + af_score + "<br>" + "聖遺物スコアが異常値を示しています。再入力してください。"
    document.getElementById("result").innerHTML = result;
    return result;
  }
  my_exp_dmg = my_exp_dmg.toFixed(0);
  console.log(my_exp_dmg);
  let score_distribute;
  let af_score_upper_limit = af_score;
  let af_score_lower_limit = 0;
  af_score = af_score/2;

  let fixed_status;
  let result_status;
  let random_1;
  let random_2;
  let output_exp_dmg = Infinity;
  const dlt_score = 0.1;
  let temp_status = [0,0,0,0,0,0,0,0];
  let temp_score_distribute = [0,0,0,0,0,0,0];
  let old_score_distribution = [0,0,0,0,0,0,0];
  let new_score_distribution = [0,0,0,0,0,0,0];
  let basic_dmg;
  let n_count = 0;

  const char_instance = await create_char_instance(base_status, fixed_status, result_status);
  const weapon_instance = await create_weapon_instance(base_status, fixed_status, result_status);
  const dmg_rate = await char_instance.dmg_rate_data();
  console.log(dmg_rate);
while (my_exp_dmg !== output_exp_dmg && n_count < 30)
{
  let exp_dmg = 0;
  let temp_exp_dmg = 0;
  n_count = n_count + 1;

  for (let i = 0; i < 10000; i++)
  {
    score_distribute = await calculate_score_distribute(af_score,depend_status);
    fixed_status = await calculate_fixed_status(score_distribute,base_status,af_main_status_buff);
    result_status = fixed_status.slice();
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);

    if (depend_status[0] == 1)
    {
      fixed_status[0] += await (char_instance.calculate_char_fixed_hp() + weapon_instance.calculate_weapon_fixed_hp());
      result_status[0] = fixed_status[0] + await (char_instance.calculate_char_result_hp() + weapon_instance.calculate_weapon_result_hp());
      char_instance.update_status(fixed_status, result_status);
      weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[1] == 1)
    {
      fixed_status[1] += await (char_instance.calculate_char_fixed_deff() + weapon_instance.calculate_weapon_fixed_deff());
      result_status[1] = fixed_status[1] + await (char_instance.calculate_char_result_deff() + weapon_instance.calculate_weapon_result_deff());
      char_instance.update_status(fixed_status, result_status);
      weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[2] == 1)
    {
      fixed_status[2] += await (char_instance.calculate_char_fixed_elm() + weapon_instance.calculate_weapon_fixed_elm());
      result_status[2] = fixed_status[2] + await (char_instance.calculate_char_result_elm() + weapon_instance.calculate_weapon_result_elm());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[3] == 1)
    {
      fixed_status[3] += await (char_instance.calculate_char_fixed_elm_charge() + weapon_instance.calculate_weapon_fixed_elm_charge());
      result_status[3] = fixed_status[3] + await (char_instance.calculate_char_result_elm_charge() + weapon_instance.calculate_weapon_result_elm_charge());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[4] == 1)
    {
      fixed_status[4] += await (char_instance.calculate_char_fixed_attck() + weapon_instance.calculate_weapon_fixed_attck());
      result_status[4] = fixed_status[4] + await (char_instance.calculate_char_result_attck() + weapon_instance.calculate_weapon_result_attck());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[5] == 1)
    {
      fixed_status[5] += await (char_instance.calculate_char_fixed_cr() + weapon_instance.calculate_weapon_fixed_cr());
      result_status[5] = fixed_status[5] + await (char_instance.calculate_char_result_cr() + weapon_instance.calculate_weapon_result_cr());
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
      result_status[6] = fixed_status[6] + await (char_instance.calculate_char_result_cd() + weapon_instance.calculate_weapon_result_cd());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    fixed_status[7] += await (char_instance.calculate_char_fixed_dmg_buff() + weapon_instance.calculate_weapon_fixed_dmg_buff());
    result_status[7] = fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff() + weapon_instance.calculate_weapon_result_dmg_buff());
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

    fixed_status = await calculate_fixed_status(new_score_distribution,base_status,af_main_status_buff,depend_status);
    result_status = fixed_status.slice();
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);

    if (depend_status[0] == 1)
    {
      fixed_status[0] += await (char_instance.calculate_char_fixed_hp() + weapon_instance.calculate_weapon_fixed_hp());
      result_status[0] = fixed_status[0] + await (char_instance.calculate_char_result_hp() + weapon_instance.calculate_weapon_result_hp());
      char_instance.update_status(fixed_status, result_status);
      weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[1] == 1)
    {
      fixed_status[1] += await (char_instance.calculate_char_fixed_deff() + weapon_instance.calculate_weapon_fixed_deff());
      result_status[1] = fixed_status[1] + await (char_instance.calculate_char_result_deff() + weapon_instance.calculate_weapon_result_deff());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[2] == 1)
    {
      fixed_status[2] += await (char_instance.calculate_char_fixed_elm() + weapon_instance.calculate_weapon_fixed_elm());
      result_status[2] = fixed_status[2] + await (char_instance.calculate_char_result_elm() + weapon_instance.calculate_weapon_result_elm());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[3] == 1)
    {
      fixed_status[3] += await (char_instance.calculate_char_fixed_elm_charge() + weapon_instance.calculate_weapon_fixed_elm_charge());
      result_status[3] = fixed_status[3] + await (char_instance.calculate_char_result_elm_charge() + weapon_instance.calculate_weapon_result_elm_charge());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[4] == 1)
    {
      fixed_status[4] += await (char_instance.calculate_char_fixed_attck() + weapon_instance.calculate_weapon_fixed_attck());
      result_status[4] = fixed_status[4] + await (char_instance.calculate_char_result_attck() + weapon_instance.calculate_weapon_result_attck());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    if (depend_status[5] == 1)
    {
      fixed_status[5] += await (char_instance.calculate_char_fixed_cr() + weapon_instance.calculate_weapon_fixed_cr());
      result_status[5] = fixed_status[5] + await (char_instance.calculate_char_result_cr() + weapon_instance.calculate_weapon_result_cr());
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
      result_status[6] = fixed_status[6] + await (char_instance.calculate_char_result_cd() + weapon_instance.calculate_weapon_result_cd());
    char_instance.update_status(fixed_status, result_status);
    weapon_instance.update_status(fixed_status, result_status);
    }

    fixed_status[7] += await (char_instance.calculate_char_fixed_dmg_buff() + weapon_instance.calculate_weapon_fixed_dmg_buff());
    result_status[7] = fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff() + weapon_instance.calculate_weapon_result_dmg_buff());
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
  temp_status[0] = temp_status[0].toFixed(0);
  temp_status[1] = temp_status[1].toFixed(0);
  temp_status[2] = temp_status[2].toFixed(0);
  temp_status[3] = (temp_status[3]*100).toFixed(1);
  temp_status[4] = temp_status[4].toFixed(0);
  temp_status[5] = (temp_status[5]*100).toFixed(1);
  temp_status[6] = (temp_status[6]*100).toFixed(1);
  temp_status[7] = (temp_status[7]*100).toFixed(1);
  temp_critical_dmg = temp_critical_dmg.toFixed(0)
  af_score = af_score.toFixed(1);
  console.log(temp_status);
  console.log(my_exp_dmg);

  result ="ループ回数" + n_count + "<br>" + "my聖遺物スコア" + my_af_score + "<br>" + "  会心ダメージ: " + temp_critical_dmg + "<br>" +"  聖遺物スコア: " + af_score + "<br>" + "  ダメージ期待値: " + output_exp_dmg + "<br>" +  "  HP: " + temp_status[0] + "<br>" + "  攻撃力: " + temp_status[4] + "<br>" +"  防御力: " + 
  temp_status[1] + "<br>"+"  元素熟知: " + temp_status[2] + "<br>" + "  元素チャージ効率: " + temp_status[3] + "%" + "<br>" + "  会心率: " + temp_status[5] + "%" + "<br>" +
   "  会心ダメージ：" + temp_status[6] + "%" + "<br>" + "  ダメージバフ: " + temp_status[7] + "%";
  document.getElementById("result").innerHTML = result;

  return result;
  
}

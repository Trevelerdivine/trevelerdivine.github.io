let depend_status = [0,0,1,0,1,1,1];
let af_score = 0;
let attack_method = 0;
let attack_method_index = 0;
let AfMainFixStatus = [0,0];//[HP実数値,攻撃力実数値]
const attack_method_name = ["通常攻撃", "重撃", "落下攻撃", "元素スキル", "元素爆発"];
const element = ["炎元素", "水元素", "氷元素", "雷元素", "風元素", "草元素", "岩元素"]

const elm_reaction_obj = [
  {
    id: "Vaporize_pyro",
    label: "蒸発-炎　"
  },
  {
    id: "Vaporize-hydro",
    label: "蒸発-水　"
  },
  {
    id: "Melt-pyro",
    label: "溶解-炎　"
  },
  {
    id: "Melt-cyro",
    label: "溶解-氷　"
  },
  {
    id: "Spread",
    label: "草激化　"
  },
  {
    id: "Aggravate",
    label: "超激化　"
  },
  {
    id: "Aggravate",
    label: "超伝導　"
  }
];

async function calculate_base_status() {
  // 武器の装備データを取得
  let WeaponEquipData = UserData.data.avatarInfoList[CharIndexList[SelectId]].equipList[EquipNumber - 1].flat.weaponStats[1];

  // キャラクターと武器のデータを取得
  const CharResponse = await fetch("../data/character/char_data/" + CharJsonData["CharMap"][selectedCharId.toString()]["name"] + ".json");
  const CharData = await CharResponse.json();
  const WeaponResponse = await fetch("../data/weapon/weapon_data/" + WeaponJsonData["CharMap"][selectedWeaponId.toString()]["name"] + ".json");
  const WeaponData = await WeaponResponse.json();

  // 基礎ステータスを取得し、小数点以下を四捨五入
  const base_hp = Math.round(UserData.data.avatarInfoList[CharIndexList[SelectId]].fightPropMap["1"]);
  const base_attck = Math.round(UserData.data.avatarInfoList[CharIndexList[SelectId]].fightPropMap["4"]);
  const base_deff = Math.round(UserData.data.avatarInfoList[CharIndexList[SelectId]].fightPropMap["7"]);

  // 基礎元素熟知を計算
  let base_elm = CharData.ステータス.基礎元素熟知[(parseInt(CharAdvanceRank) + 2) * 10 + "+"];
  if (WeaponEquipData.appendPropId === "FIGHT_PROP_ELEMENT_MASTERY") {
      base_elm += WeaponEquipData.statValue;
  }

  // 基礎元素チャージ効率を計算
  let base_elm_charge = 1 + CharData.ステータス.基礎元素チャージ効率[(parseInt(CharAdvanceRank) + 2) * 10 + "+"];
  if (WeaponEquipData.appendPropId === "FIGHT_PROP_CHARGE_EFFICIENCY") {
      base_elm_charge += WeaponEquipData.statValue / 100;
  }

  // 基礎会心率を計算
  let base_cr = CharData.ステータス.基礎会心率[(parseInt(CharAdvanceRank) + 2) * 10 + "+"];
  if (WeaponEquipData.appendPropId === "FIGHT_PROP_CRITICAL") {
      base_cr += WeaponEquipData.statValue / 100;
  }

  // 基礎会心ダメージを計算
  let base_cd = CharData.ステータス.基礎会心ダメージ[(parseInt(CharAdvanceRank) + 2) * 10 + "+"];
  if (WeaponEquipData.appendPropId === "FIGHT_PROP_CRITICAL_HURT") {
      base_cd += WeaponEquipData.statValue / 100;
  }

  // 基礎ダメージバフを計算
  const CharDmgBuffType = parseInt(CharData.ステータス.基礎ダメージバフ.元素);
  const WeaponDmgBuffType = parseInt(WeaponData.ステータス.基礎ダメージバフ.元素);
  let base_dmg_buff = 0;
  if (CharDmgBuffType == char_propaty[0]) {
      base_dmg_buff += parseFloat(CharData.ステータス.基礎ダメージバフ.数値[(parseInt(CharAdvanceRank) + 2) * 10 + "+"]);
  }
  if (WeaponDmgBuffType == char_propaty[0]) {
      base_dmg_buff += WeaponEquipData.statValue / 100;
  }

  if (selectedCharId == 62 || selectedCharId == 70)
  {
    const special_buff_check = document.getElementById("special_buff");
    if(special_buff_check.checked)
    {
      base_attck += 3;
    }
  }
  else if (selectedCharId == 85 && CharConstellations > 1)
  {
    base_attck += 200;
  }

  // 基礎ステータス配列を作成
  const base_status = [base_hp, base_deff, base_elm, base_elm_charge, base_attck, base_cr, base_cd, base_dmg_buff];
  return base_status;
}

async function calculate_af_main_status_buff() 
{
    const DmgBuffName = ["FIGHT_PROP_FIRE_ADD_HURT", "FIGHT_PROP_WATER_ADD_HURT", "FIGHT_PROP_ICE_ADD_HURT", "FIGHT_PROP_ELEC_ADD_HURT", "FIGHT_PROP_WIND_ADD_HURT", "FIGHT_PROP_GRASS_ADD_HURT", "FIGHT_PROP_ROCK_ADD_HURT", "FIGHT_PROP_PHYSICAL_ADD_HURT"];
    const EachBuffName = ["FIGHT_PROP_HP_PERCENT", "FIGHT_PROP_DEFENSE_PERCENT", "FIGHT_PROP_ELEMENT_MASTERY", "FIGHT_PROP_CHARGE_EFFICIENCY", "FIGHT_PROP_ATTACK_PERCENT", "FIGHT_PROP_CRITICAL", "FIGHT_PROP_CRITICAL_HURT", DmgBuffName[char_propaty[0]]];
    let AfMainStatusBuff = [0,0,0,0,0,0,0,0];
    let CharEquipData = UserData.data.avatarInfoList[CharIndexList[SelectId]].equipList;
    let EachBuff;
    for (let i = 0; i < 8; i++)
    {
        EachBuff = 0;
        CharEquipData.forEach(item => {
            if (item.flat && item.flat.reliquaryMainstat && item.flat.reliquaryMainstat.mainPropId === EachBuffName[i]) {
                EachBuff += item.flat.reliquaryMainstat.statValue;
            }
            if (i == 0)
            {
                if (item.flat && item.flat.reliquaryMainstat && item.flat.reliquaryMainstat.mainPropId === "FIGHT_PROP_HP") {
                  AfMainFixStatus[0] = item.flat.reliquaryMainstat.statValue;
                }
            }
            if (i == 4)
            {
                if (item.flat && item.flat.reliquaryMainstat && item.flat.reliquaryMainstat.mainPropId === "FIGHT_PROP_ATTACK") {
                  AfMainFixStatus[1] = item.flat.reliquaryMainstat.statValue;
                }
            }
        });
        AfMainStatusBuff[i] = EachBuff;
    }
  AfMainStatusBuff[0] *= 0.01;
  AfMainStatusBuff[1] *= 0.01;
  AfMainStatusBuff[4] *= 0.01;
  AfMainStatusBuff[7] /= 100;
  return AfMainStatusBuff
}

async function calculate_af_score(depend_status,base_status) 
{
  let CharEquipData = UserData.data.avatarInfoList[CharIndexList[SelectId]].equipList;
  let AfScoreDistribution = [0,0,0,0,0,0,0,0];
  let RateStatusBuff = 0;
  let FixStatusBuff = 0;
  for (let i = 0; i < 7; i++)
  {
    if (depend_status[i] == 0)
    {
      AfScoreDistribution[i] = 0
      continue;
    }
    switch (i)
    {
      case 0:
        RateStatusBuff = 0;
        FixStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
              equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_HP_PERCENT") {
                        RateStatusBuff += Math.round(substat.statValue / 0.583);
                    }
                    if (substat.appendPropId === "FIGHT_PROP_HP") {
                        FixStatusBuff += Math.round(substat.statValue / 29.875);
                    }
                });
            }
        });
        AfScoreDistribution[0] = (FixStatusBuff * 2987.5 / base_status[0] + RateStatusBuff * 0.583) * 4/3;
        break;
      case 1:
        RateStatusBuff = 0;
        FixStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
              equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_DEFENSE_PERCENT") {
                        RateStatusBuff += Math.round(substat.statValue / 0.729);
                    }
                    if (substat.appendPropId === "FIGHT_PROP_DEFENSE") {
                        FixStatusBuff += Math.round(substat.statValue / 2.315);
                    }
                });
            }
        });
        AfScoreDistribution[1] = (FixStatusBuff * 231.5 / base_status[1] + RateStatusBuff * 0.729) * 16/15;
        break;
      case 2:
        FixStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
              equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_ELEMENT_MASTERY") {
                        FixStatusBuff += Math.round(substat.statValue / 2.331);
                    }
                });
            }
        });
        AfScoreDistribution[2] = FixStatusBuff * 2.331 / 3;
        break;
      case 3:
        RateStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
                equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_CHARGE_EFFICIENCY") {
                        RateStatusBuff += Math.round(substat.statValue / 0.648);
                    }
                });
            }
        });
        AfScoreDistribution[3] =  RateStatusBuff * 0.648 * 1.2;
        break;
      case 4:
        RateStatusBuff = 0;
        FixStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
                equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_ATTACK_PERCENT") {
                        RateStatusBuff += Math.round(substat.statValue / 0.583);
                    }
                    if (substat.appendPropId === "FIGHT_PROP_ATTACK") {
                        FixStatusBuff += substat.statValue / 1.945;
                    }
                });
            }
        });
        AfScoreDistribution[4] = (FixStatusBuff * 194.5 / base_status[4] + RateStatusBuff * 0.583) * 4/3;
        break;
      case 5:
        RateStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
                equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_CRITICAL") {
                        RateStatusBuff += Math.round(substat.statValue / 0.389);
                    }
                });
            }
        });
        AfScoreDistribution[5] =  RateStatusBuff * 0.389 * 2;
        break;
      case 6:
        RateStatusBuff = 0;
        CharEquipData.forEach(equip => {
            if (equip.reliquary && equip.flat.reliquarySubstats) {
                equip.flat.reliquarySubstats.forEach(substat => {
                    if (substat.appendPropId === "FIGHT_PROP_CRITICAL_HURT") {
                        RateStatusBuff += Math.round(substat.statValue / 0.777);
                    }
                });
            }
        });
        AfScoreDistribution[6] =  RateStatusBuff * 0.777
    }
  }
  for (let n = 0; n < 7; n++)
  {
    AfScoreDistribution[7] += AfScoreDistribution[n];
  }
  return AfScoreDistribution
}

async function calculate_depend_status()
{
  attack_method = document.getElementById("attack_method_id").value;
  if (attack_method > 0)
  {
    if (attack_method >= 1 && attack_method <= 5) {
        attack_method_index = 0;
    } else if (attack_method >= 6 && attack_method <= 10) {
    attack_method_index = 1;
    } else if (attack_method >= 11 && attack_method <= 15) {
    attack_method_index = 2;
    } else if (attack_method >= 16 && attack_method <= 20) {
    attack_method_index = 3;
    } else if (attack_method >= 21 && attack_method <= 25) {
    attack_method_index = 4;
    } else {
        attack_method_index = -1;
    }
    }
    depend_status = [0,0,0,0,0,0,0];
    const char_response = await fetch("../data/character/char_data/" + CharJsonData["CharMap"][selectedCharId.toString()]["name"] + ".json");
    const char_data = await char_response.json();
    if (attack_method != 0)
    {
        char_propaty[0] = char_data[attack_method_name[attack_method_index]]["元素"];
        const char_depend_status = char_data[attack_method_name[attack_method_index]].依存ステータス;
        const weapon_response = await fetch("../data/weapon/weapon_data/" + WeaponJsonData["CharMap"][selectedWeaponId.toString()]["name"] + ".json");
        const weapon_data = await weapon_response.json();
        const weapon_depend_status = weapon_data.ステータス.依存ステータス;
        const button = document.getElementById("reactionoff_flag");
        for (let i = 0; i < 7; i++)
        {
            depend_status[i] = char_depend_status[i] + weapon_depend_status[i];
            if (depend_status[i] > 1)
            {
            depend_status[i] = 1
            }
        }

        if (button !== null && !button.checked && char_propaty[0] != 7)
        {
            depend_status[2] = 1;
        }

        if (selectedImageIds[0] ==17 && selectedImageIds[1] == 17)
        {
            const zetsuen_checkbox = document.getElementById("af17_4");
            if(zetsuen_checkbox.checked && attack_method_index == 4)
            {
            depend_status[3] = 1;
            }
        }
    }
    return depend_status;
}

function calc_zetsuen_buff(elm_charge)
{
  const zetsuen_dmgbuff = Math.min(elm_charge / 4, 0.75);
  return zetsuen_dmgbuff;
}

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

async function calculate_score_distribute(af_score,depend_status)
{
  let k = 0;
  let rundom_count = 0;
  let distribute = [];
  let score_distribution = [];
  for (let i = 0; i < 7; i++)
  {
    rundom_count += depend_status[i];
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

async function calculate_fixed_status(bs, AfParameter)
//変数は左から（score_distribution,base_status,af_main_status_buff）
{
  let fixed_status = [0,0,0,0,0,0,0,0];
  fixed_status[0] = bs[0] * (1 + AfParameter[0] / 100) + AfParameter[7];
  fixed_status[1] = bs[1] * (1 + AfParameter[1] / 100) + AfParameter[9];
  fixed_status[2] = bs[2] + AfParameter[2];
  fixed_status[3] = bs[3] + AfParameter[3] / 100;
  fixed_status[4] = bs[4] * (1 + AfParameter[4] / 100) + AfParameter[8];
  fixed_status[5] = bs[5] + AfParameter[5] / 100;
  fixed_status[6] = bs[6] + AfParameter[6] / 100;
  fixed_status[7] = bs[7] + AfParameter[parseInt(char_propaty[0]) + 10] / 100;
  return fixed_status;
}

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

  const char_response = await fetch("../data/character/char_data/" + CharJsonData["CharMap"][selectedCharId.toString()]["name"] + ".json");
  const char_data = await char_response.json();
  const char_base_hpper = parseFloat(char_data["ステータス"]["基礎HP％"][(parseInt(CharAdvanceRank) + 2) * 10 + "+"]);
  const char_base_attackper = parseFloat(char_data["ステータス"]["基礎攻撃力％"][(parseInt(CharAdvanceRank) + 2) * 10 + "+"]);
  const char_base_deffper = parseFloat(char_data["ステータス"]["基礎防御力％"][(parseInt(CharAdvanceRank) + 2) * 10 + "+"]);

  const WeaponEquipData = UserData.data.avatarInfoList[CharIndexList[SelectId]].equipList[EquipNumber - 1].flat.weaponStats[1];
  let weapon_base_hpper = 0;
  let weapon_base_attackper = 0;
  let weapon_base_deffper = 0;

  if (WeaponEquipData.appendPropId === "FIGHT_PROP_HP_PERCENT") {
    weapon_base_hpper = WeaponEquipData.statValue / 100;
  }
  else if (WeaponEquipData.appendPropId === "FIGHT_PROP_ATTACK_PERCENT") {
    weapon_base_attackper = WeaponEquipData.statValue / 100;
  }
  else if (WeaponEquipData.appendPropId === "FIGHT_PROP_DEFENSE_PERCENT") {
    weapon_base_deffper = WeaponEquipData.statValue / 100;
  }

  // チェックボックスの情報をまとめた配列を作成
  const checkboxStates = {
    pyro_reso: pyroCheckbox.checked ? 1 : 0,
    hydro_reso: hydroCheckbox.checked ? 1 : 0,
    cyro_reso: cyroCheckbox.checked ? 1 : 0,
    dendro_reso: dendroCheckbox.checked ? 1 : 0,
    geo_reso: geoCheckbox.checked ? 1 : 0
  };

  team_buff[0] = fix_hp_buff + (fix_hprate_buff + af_setbuff[0] + 0.25 * checkboxStates.hydro_reso + char_base_hpper + weapon_base_hpper) * base_status[0];
  team_buff[1] = fix_deff_buff + (fix_deffrate_buff + af_setbuff[1] + char_base_deffper + weapon_base_deffper) * base_status[1];
  if (checkboxStates.dendro_reso == 1)
  {
    const dendro_reso_select = document.getElementById("dendro_reso_select");
    const dendro_elm = parseInt(dendro_reso_select.value);
    team_buff[2] = fix_elm_buff + af_setbuff[2] + dendro_elm;
  }
  else
  {
    team_buff[2] = fix_elm_buff + af_setbuff[2];
  }
  team_buff[3] = fix_elm_charge_buff + af_setbuff[3];
  team_buff[4] = fix_attack_buff + (fix_attackrate_buff + af_setbuff[4] + 0.25 * checkboxStates.pyro_reso + char_base_attackper + weapon_base_attackper) * base_status[4];
  team_buff[5] = fix_cr_buff + af_setbuff[5] + 0.15 * checkboxStates.cyro_reso;
  team_buff[6] = fix_cd_buff + af_setbuff[6];
  team_buff[7] = fix_dmg_buff + af_setbuff[7] + 0.15 * checkboxStates.geo_reso;

  return team_buff
}

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

async function calculate_table_status()
{
  let AfStatusBuff = [0, 0, 0, 0, 0, 0, 0];
  const base_status = await calculate_base_status();
  const af_main_status_buff = await calculate_af_main_status_buff();
  const char_parameter = await import_char_parameter();
  let DisplayDependStatus = depend_status;
  DisplayDependStatus[3] = 1;
  let zetsuen_check = 0;
  let buff_status = [0,0,0,0,0,0,0,0];
  let team_fix_buff = await calculate_team_fix_buff(base_status);
  let team_dynamic_buff = await calculate_team_dynamic_buff(base_status);
  let AfSubBuff = await calculate_af_score(DisplayDependStatus,base_status);
  let fixed_status = base_status.slice();
  let result_status;
  let zetsuen_dmgbuff = 0;
  identify_condition();

  AfStatusBuff[0] = base_status[0] * (af_main_status_buff[0] + AfSubBuff[0] * 3 / 400) + AfMainFixStatus[0];;
  AfStatusBuff[1] = base_status[1] * (af_main_status_buff[1] + AfSubBuff[1] * 15 / 1600);
  AfStatusBuff[2] = af_main_status_buff[2]  + AfSubBuff[2] * 3;
  AfStatusBuff[3] = (af_main_status_buff[3] + AfSubBuff[3] / 1.2) / 100;
  AfStatusBuff[4] = base_status[4] * (af_main_status_buff[4] + AfSubBuff[4] * 3 / 400) + AfMainFixStatus[1];
  AfStatusBuff[5] = (af_main_status_buff[5] + AfSubBuff[5] / 2) / 100;
  AfStatusBuff[6] = (af_main_status_buff[6] + AfSubBuff[6]) / 100;
  AfStatusBuff[7] = af_main_status_buff[7];

  if (selectedImageIds[0] == 17 && selectedImageIds[1] == 17 && attack_method_index == 4)
  {
    const zetsuen_checkbox = document.getElementById("af17_4");
    if(zetsuen_checkbox.checked)
    {
      zetsuen_check = 1;
    }
  }

  document.getElementById("table_base_hp").innerHTML = base_status[0];
  document.getElementById("table_base_deff").innerHTML = base_status[1];
  document.getElementById("table_base_elm").innerHTML = base_status[2];
  document.getElementById("table_base_elm_charge").innerHTML = (base_status[3] * 100).toFixed(1) + "％";
  document.getElementById("table_base_attck").innerHTML = base_status[4];
  document.getElementById("table_base_cr").innerHTML = (base_status[5] * 100).toFixed(1) + "％";
  document.getElementById("table_base_cd").innerHTML = (base_status[6] * 100).toFixed(1) + "％";
  document.getElementById("table_base_dmg_buff").innerHTML = (base_status[7] * 100).toFixed(1) + "％";

  for (let i = 0; i < 7; i++)
  {
    fixed_status[i] += AfStatusBuff[i] + team_fix_buff[i];
  }
  fixed_status[7] += af_main_status_buff[7] + team_fix_buff[7];
  
  const char_instance = await create_char_instance(base_status, char_parameter);
  const weapon_instance = await create_weapon_instance(base_status);
  const dmg_rate = await char_instance.dmg_rate_data();
  
  fixed_status[0] += await (char_instance.calculate_char_fixed_hp(fixed_status) + weapon_instance.calculate_weapon_fixed_hp(fixed_status));
  fixed_status[1] += await (char_instance.calculate_char_fixed_deff(fixed_status) + weapon_instance.calculate_weapon_fixed_deff(fixed_status));
  fixed_status[2] += await (char_instance.calculate_char_fixed_elm(fixed_status) + weapon_instance.calculate_weapon_fixed_elm(fixed_status));
  fixed_status[3] += await (char_instance.calculate_char_fixed_elm_charge(fixed_status) + weapon_instance.calculate_weapon_fixed_elm_charge(fixed_status));
  fixed_status[4] += await (char_instance.calculate_char_fixed_attck(fixed_status) + weapon_instance.calculate_weapon_fixed_attck(fixed_status));
  fixed_status[5] += await (char_instance.calculate_char_fixed_cr(fixed_status) + weapon_instance.calculate_weapon_fixed_cr(fixed_status));
  fixed_status[6] += await (char_instance.calculate_char_fixed_cd(fixed_status) + weapon_instance.calculate_weapon_fixed_cd(fixed_status));
  fixed_status[7] += await (char_instance.calculate_char_fixed_dmg_buff(fixed_status) + weapon_instance.calculate_weapon_fixed_dmg_buff(fixed_status));
  result_status = fixed_status.slice();

  async function updateStatus(index, resultStatus, buffStatus, afBuff, baseStatus, dynamicBuff, calculateResultFunction, tablePrefix) {
    if (DisplayDependStatus[index] === 1) 
    {
      if (index == 3 || index == 6)
      {
        resultStatus[index] = dynamicBuff[index] + fixed_status[index] + await calculateResultFunction(fixed_status, resultStatus);
        buffStatus[index] = resultStatus[index] - afBuff[index] - baseStatus[index];
        document.getElementById(`table_buff_${tablePrefix}`).innerHTML = (buffStatus[index]*100).toFixed(1) + "％";
        document.getElementById(`table_af_${tablePrefix}`).innerHTML = (afBuff[index]*100).toFixed(1) + "％";
        document.getElementById(`table_final_${tablePrefix}`).innerHTML = (resultStatus[index]*100).toFixed(1) + "％";
      }
      else if (index == 5)
      {
        resultStatus[index] = dynamicBuff[index] + fixed_status[index] + await calculateResultFunction(fixed_status, resultStatus);
        buffStatus[index] = resultStatus[index] - afBuff[index] - baseStatus[index];
        document.getElementById(`table_buff_${tablePrefix}`).innerHTML = (buffStatus[index]*100).toFixed(1) + "％";
        document.getElementById(`table_af_${tablePrefix}`).innerHTML = (afBuff[index]*100).toFixed(1) + "％";
        document.getElementById(`table_final_${tablePrefix}`).innerHTML = Math.min((resultStatus[index]*100).toFixed(1),100) + "％";
      }
      else
      {
        resultStatus[index] = dynamicBuff[index] + fixed_status[index] + await calculateResultFunction(fixed_status, resultStatus);
        buffStatus[index] = resultStatus[index] - afBuff[index] - baseStatus[index];
        document.getElementById(`table_buff_${tablePrefix}`).innerHTML = buffStatus[index].toFixed(0);
        document.getElementById(`table_af_${tablePrefix}`).innerHTML = afBuff[index].toFixed(0);
        document.getElementById(`table_final_${tablePrefix}`).innerHTML =resultStatus[index].toFixed(0);
      }
    } 
    else
    {
      document.getElementById(`table_buff_${tablePrefix}`).innerHTML = "-";
      document.getElementById(`table_af_${tablePrefix}`).innerHTML = "-";
      document.getElementById(`table_final_${tablePrefix}`).innerHTML = "-";
    }
  }
  
  // ステータスの更新
  await updateStatus(0, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_hp(fixed_status, result_status) + weapon_instance.calculate_weapon_result_hp(fixed_status, result_status), "hp");
  await updateStatus(1, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_deff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_deff(fixed_status, result_status), "deff");
  await updateStatus(2, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_elm(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm(fixed_status, result_status), "elm");
  await updateStatus(3, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_elm_charge(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm_charge(fixed_status, result_status), "elm_charge");
  await updateStatus(4, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_attck(fixed_status, result_status) + weapon_instance.calculate_weapon_result_attck(fixed_status, result_status), "attck");
  await updateStatus(5, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_cr(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cr(fixed_status, result_status), "cr");
  await updateStatus(6, result_status, buff_status, AfStatusBuff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_cd(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cd(fixed_status, result_status), "cd");
  
  if(zetsuen_check == 1)
  {
    zetsuen_dmgbuff = calc_zetsuen_buff(fixed_status[3]);
    result_status[7] = team_dynamic_buff[7] + fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status) + zetsuen_dmgbuff);
  }
  else
  {
    result_status[7] = team_dynamic_buff[7] + fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status));
  }
  buff_status[7] = result_status[7] - af_main_status_buff[7] - base_status[7];
  document.getElementById("table_buff_dmg_buff").innerHTML = (buff_status[7]*100).toFixed(1) + "％";
  document.getElementById("table_af_dmg_buff").innerHTML = (af_main_status_buff[7]*100).toFixed(1) + "％";
  document.getElementById("table_final_dmg_buff").innerHTML = (result_status[7]*100).toFixed(1) + "％";
}

function identify_condition() {
  const attack_method_type = document.getElementById("attack_method_id").value;
  let response = document.getElementById("response");
  let error_message;
  response.innerHTML = "";
  if (attack_method_type == 0) {
    error_message = "攻撃方法を設定してください";
    response.innerHTML = error_message;
    return 1;
  }
  return 0;
}

async function create_afset_instance() 
{
  const attackSelect = document.getElementById("attack_method_id");
  attack_method = attackSelect.value;
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
  return buff
}

function create_reactioncount_list(){
  let reaction_count_list = [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0];
  if (char_propaty[0] == 0)
  {
    const Overloaded_count = parseInt(document.getElementById("Overloaded").value);
    const Burgeon_count = parseInt(document.getElementById("Burgeon").value);
    reaction_count_list[0] = Overloaded_count;
    reaction_count_list[1] = Burgeon_count;
  }
  else if (char_propaty[0] == 1)
  {
    const Electro_Charged_count = parseInt(document.getElementById("Electro_Charged").value);
    const Bloom_count = parseInt(document.getElementById("Bloom").value);
    const Niou_bloom_count = parseInt(document.getElementById("NirouBloom").value);
    reaction_count_list[2] = Electro_Charged_count;
    reaction_count_list[3] = Bloom_count;
    reaction_count_list[4] = Niou_bloom_count;
  }
  else if (char_propaty[0] == 3)
  {
    const Overloaded_count = parseInt(document.getElementById("Overloaded").value);
    const Electro_Charged_count = parseInt(document.getElementById("Electro_Charged").value);
    const Hyperbloom_count = parseInt(document.getElementById("Hyperbloom").value);
    reaction_count_list[5] = Overloaded_count;
    reaction_count_list[6] = Electro_Charged_count;
    reaction_count_list[7] = Hyperbloom_count;
  }
  else if (char_propaty[0] == 5)
  {
    const Bloom_count = parseInt(document.getElementById("Bloom").value);
    const Niou_bloom_count = parseInt(document.getElementById("NirouBloom").value);
    reaction_count_list[3] = Bloom_count;
    reaction_count_list[4] = Niou_bloom_count;
  }
  return reaction_count_list;
}

function create_reactionbonus_list(){
    //reaction_list = [過負荷炎, 烈開花, 感電水, 開花水, 豊穣開花, 過負荷雷, 感電雷, 超開花]
  let reaction_bonus_list = [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0];
  if (char_propaty[0] == 0)
  {
    if (selectedImageIds[0] == 11 && selectedImageIds[1] == 11)
    {
      reaction_bonus_list[0] += 0.4;
      reaction_bonus_list[1] += 0.4;
    }
    else if (selectedImageIds[0] == 9 && selectedImageIds[1] == 9)
    {
      reaction_bonus_list[0] += 0.4;
    }
    else if (selectedImageIds[0] == 24 && selectedImageIds[1] == 24)
    {
      const af24_4check = document.getElementById("af24_4");
      if (af24_4check.checked)
      {
        const af_24_4count = parseInt(document.getElementById("af24_4select").value);
        reaction_bonus_list[1] += 0.4 + 0.1 * af_24_4count;
      }
    }
  }
  else if (char_propaty[0] == 1)
  {
    if (selectedImageIds[0] == 9 && selectedImageIds[1] == 9)
    {
      reaction_bonus_list[2] += 0.4;
    }
    else if (selectedImageIds[0] == 24 && selectedImageIds[1] == 24)
    {
      const af24_4check = document.getElementById("af24_4");
      if (af24_4check.checked)
      {
        const af_24_4count = parseInt(document.getElementById("af24_4select").value);
        reaction_bonus_list[3] += 0.4 + 0.1 * af_24_4count;
        reaction_bonus_list[4] += 0.4 + 0.1 * af_24_4count;
      }
    }
    if (selectedCharId != 11)
    {
      const Nirou_HP = parseInt(document.getElementById("Nirou_HP").value);
      reaction_bonus_list[4] += Math.min(Math.max(Nirou_HP - 30000, 0) * 0.00009, 4);
    }
  }
  else if (char_propaty[0] == 3)
  {
    if (selectedImageIds[0] == 11 && selectedImageIds[1] == 11)
    {
      reaction_bonus_list[5] += 0.4;
    }
    else if (selectedImageIds[0] == 9 && selectedImageIds[1] == 9)
    {
      reaction_bonus_list[5] += 0.4;
      reaction_bonus_list[6] += 0.4;
      reaction_bonus_list[7] += 0.4;
    }
    else if (selectedImageIds[0] == 24 && selectedImageIds[1] == 24)
    {
      const af24_4check = document.getElementById("af24_4");
      if (af24_4check.checked)
      {
        const af_24_4count = parseInt(document.getElementById("af24_4select").value);
        reaction_bonus_list[7] += 0.4 + 0.1 * af_24_4count;
      }
    }
  }
  else if (char_propaty[0] == 5)
  {
    const Nirou_HP = parseInt(document.getElementById("Nirou_HP").value);
    reaction_bonus_list[4] += Math.min(Math.max(Nirou_HP - 30000, 0) * 0.00009, 4);
    if (selectedImageIds[0] == 24 && selectedImageIds[1] == 24)
    {
      const af24_4check = document.getElementById("af24_4");
      if (af24_4check.checked)
      {
        const af_24_4count = parseInt(document.getElementById("af24_4select").value);
        reaction_bonus_list[3] += 0.4 + 0.1 * af_24_4count;
        reaction_bonus_list[4] += 0.4 + 0.1 * af_24_4count;
      }
    }
  }
  return reaction_bonus_list;
}

function calculate_elmreaction_constdmg(reaction_coeff, status_array, resist, reaction_check, reaction_list, reaction_bonus_list){
  //reaction_list = [過負荷炎, 烈開花, 感電水, 開花水, 豊穣開花, 過負荷雷, 感電雷, 超開花]
  const reaction_elm_bunus = 16 * status_array[2] / (status_array[2] + 2000);
  if (reaction_check.checked)
  {
    return 0;
  }
  let reaction_dmg = 0;
  if (char_propaty[0] == 0)
  {
    reaction_dmg = reaction_list[0] * 2.75 * resist[0] * (1 + reaction_bonus_list[0] + reaction_elm_bunus) 
                 + reaction_list[1] * 3 * resist[5] * (1 + reaction_bonus_list[1] + reaction_elm_bunus);
  }
  else if (char_propaty[0] == 1)
  {
    if (selectedCharId != 11)
    {
      reaction_dmg = reaction_list[2] * 2 * resist[3] * (1 + reaction_bonus_list[2] + reaction_elm_bunus)
                   + reaction_list[3] * 2 * resist[5] * (1 + reaction_elm_bunus)
                   + reaction_list[4] * 2 * resist[5] * (1 + reaction_bonus_list[4] + reaction_elm_bunus);
    }
    else
    {
      reaction_dmg = reaction_list[2] * 2 * resist[3] * (1 + reaction_bonus_list[2] + reaction_elm_bunus)
                   + reaction_list[3] * 2 * resist[5] * (1 + reaction_elm_bunus)
                   + reaction_list[4] * 2 * resist[5] * (1 + Math.min(Math.max(status_array[0] - 30000, 0) * 0.00009, 4) + reaction_elm_bunus);
    }
  }
  else if (char_propaty[0] == 3)
  {
    reaction_dmg = reaction_list[5] * 2.75 * resist[0] * (1 + reaction_bonus_list[5] + reaction_elm_bunus)
                 + reaction_list[6] * 2 * resist[3] * (1 + reaction_bonus_list[5] + reaction_elm_bunus)
                 + reaction_list[7] * 3 * resist[5] * (1 + reaction_bonus_list[7] + reaction_elm_bunus);
  }
  else if (char_propaty[0] == 5)
  {
    reaction_dmg = reaction_list[3] * 2 * resist[5] * (1 + reaction_bonus_list[3] + reaction_elm_bunus)
                 + reaction_list[4] * 2 * resist[5] * (1 + reaction_bonus_list[4] + reaction_elm_bunus);
  }
  reaction_dmg *= reaction_coeff;
  return reaction_dmg;
}

async function calculateEnemyProps(charDebuff, weaponDebuff) {
  let pyro_resist = (parseInt(document.getElementById("enemy-pyroresist").value) - parseInt(document.getElementById("pyrodebuff").value)) / 100;
  let hydro_resist = (parseInt(document.getElementById("enemy-hydroresist").value) - parseInt(document.getElementById("hydrodebuff").value)) / 100;
  let cyro_resist = (parseInt(document.getElementById("enemy-cyroresist").value) - parseInt(document.getElementById("cyrodebuff").value)) / 100;
  let electro_resist = (parseInt(document.getElementById("enemy-electroresist").value) - parseInt(document.getElementById("electrodebuff").value)) / 100;
  let anemo_resist = (parseInt(document.getElementById("enemy-anemoresist").value) - parseInt(document.getElementById("anemodebuff").value)) / 100;
  let dendro_resist = (parseInt(document.getElementById("enemy-dendroresist").value) - parseInt(document.getElementById("dendrodebuff").value)) / 100;
  let geo_resist = (parseInt(document.getElementById("enemy-georesist").value) - parseInt(document.getElementById("geodebuff").value)) / 100;
  let phisics_resist = (parseInt(document.getElementById("enemy-phisicsresist").value) - parseInt(document.getElementById("phisicsdebuff").value)) / 100;
  let geo_resonance = document.getElementById("geo_reso");

  if (selectedImageIds[0] == 22 && selectedImageIds[1] == 22)
  {
    const deepwoodCheck = document.getElementById("af22_4");
    if (deepwoodCheck.checked && char_propaty[0] == 5) {
      dendro_resist -= 0.3;
    }
  }
  if (geo_resonance.checked && char_propaty[0] == 6)
  {
    geo_resist -= parseFloat(document.getElementById("geo_reso_select").value) / 100;
  }

  let enemy_resist = [pyro_resist, hydro_resist, cyro_resist, electro_resist, anemo_resist, dendro_resist, geo_resist, phisics_resist];
  enemy_resist[char_propaty[0]] -= charDebuff[0] - weaponDebuff[0];
  

  // 敵の情報取得
  const enemyLevel = parseInt(document.getElementById("enemy-level").value);
  const enemyDeffDebuff = parseFloat(document.getElementById("deff-debuff").value) / 100;
  const CharcterLevel = parseInt(CharLevel);

  // 防御補正計算
  const deffCorrection = (CharcterLevel + 100) / ((1 - charDebuff[2]) * (1 - charDebuff[1] - weaponDebuff[1] - enemyDeffDebuff) * (enemyLevel + 100) + CharcterLevel + 100);
  console.log(deffCorrection);

  // 補正係数の計算
  let element_resistCorrection = [0, 0, 0, 0, 0, 0, 0, 0, 0];// [炎補正, 水補正, 氷補正, 雷補正, 風補正, 草補正, 岩補正, 物理補正, 攻撃元素補正]
  for (let i = 0; i < 8; i++)
  {
    if (enemy_resist[i] < 0) {
      element_resistCorrection[i] = (1 - enemy_resist[i] / 2);
    } else if (enemy_resist[i] > 0.75) {
      element_resistCorrection[i] = (1 / (4 * enemy_resist[i] + 1));
    } else {
      element_resistCorrection[i] = (1 - enemy_resist[i]);
    }
  }
  element_resistCorrection[8] =  element_resistCorrection[char_propaty[0]] * deffCorrection;
  return element_resistCorrection;
}

async function calculate_my_exp_dmg (base_status,af_main_status_buff,depend_status)
{
  const AfStatusBuff = [0, 0, 0, 0, 0, 0, 0];
  const char_parameter = await import_char_parameter();
  const reaction_count_list = create_reactioncount_list();
  const reaction_bonus_list = create_reactionbonus_list();
  let AfSubBuff = await calculate_af_score(depend_status,base_status);
  AfStatusBuff[0] = base_status[0] * (af_main_status_buff[0] + AfSubBuff[0] * 3 / 400) + AfMainFixStatus[0];
  AfStatusBuff[1] = base_status[1] * (af_main_status_buff[1] + AfSubBuff[1] * 15 / 1600);
  AfStatusBuff[2] = af_main_status_buff[2]  + AfSubBuff[2] * 3;
  AfStatusBuff[3] = (af_main_status_buff[3] + AfSubBuff[3] / 1.2) / 100;
  AfStatusBuff[4] = base_status[4] * (af_main_status_buff[4] + AfSubBuff[4] * 3 / 400) + AfMainFixStatus[1];
  AfStatusBuff[5] = (af_main_status_buff[5] + AfSubBuff[5] / 2) / 100;
  AfStatusBuff[6] = (af_main_status_buff[6] + AfSubBuff[6]) / 100;
  AfStatusBuff[7] = af_main_status_buff[7];
  let zetsuen_check = 0;
  if (selectedImageIds[0] ==17 && selectedImageIds[1] == 17 && attack_method_index == 4)
  {
    const zetsuen_checkbox = document.getElementById("af17_4");
    if(zetsuen_checkbox.checked)
    {
      zetsuen_check = 1;
    }
  }
  let basic_dmg;
  let exp_dmg;
  let team_fix_buff = await calculate_team_fix_buff(base_status)
  let team_dynamic_buff = await calculate_team_dynamic_buff(base_status)
  let fixed_status = [0,0,0,0,0,0,0];
  let result_status;
  let zetsuen_dmgbuff = 0;
  for (let i = 0; i < 7; i++)
  {
    fixed_status[i] = base_status[i] + AfStatusBuff[i] + team_fix_buff[i];
  }
  fixed_status[7] = base_status[7] + af_main_status_buff[7] + team_fix_buff[7];
  result_status = fixed_status.slice();

  const char_instance = await create_char_instance(base_status, char_parameter);
  const weapon_instance = await create_weapon_instance(base_status);
  const dmg_rate = await char_instance.dmg_rate_data();
  const char_debuff = await char_instance.calculate_char_debuff();
  const weapon_debuff =  await weapon_instance.calculate_weapon_debuff();
  const correct_coeff = await calculateEnemyProps(char_debuff, weapon_debuff);
  const reaction_check = document.getElementById("reactionoff_flag");

  if (depend_status[0] == 1)
  {
    fixed_status[0] += await (char_instance.calculate_char_fixed_hp(fixed_status) + weapon_instance.calculate_weapon_fixed_hp(fixed_status));
    result_status[0] = team_dynamic_buff[0] + fixed_status[0] + await (char_instance.calculate_char_result_hp(fixed_status, result_status) + weapon_instance.calculate_weapon_result_hp(fixed_status, result_status));
  }

  if (depend_status[1] == 1)
  {
    fixed_status[1] += await (char_instance.calculate_char_fixed_deff(fixed_status) + weapon_instance.calculate_weapon_fixed_deff(fixed_status));
    result_status[1] = team_dynamic_buff[1] + fixed_status[1] + await (char_instance.calculate_char_result_deff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_deff(fixed_status, result_status));
  }

  if (depend_status[2] == 1)
  {
    fixed_status[2] += await (char_instance.calculate_char_fixed_elm(fixed_status) + weapon_instance.calculate_weapon_fixed_elm(fixed_status));
    result_status[2] = team_dynamic_buff[2] + fixed_status[2] + await (char_instance.calculate_char_result_elm(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm(fixed_status, result_status));
  }

  if (depend_status[3] == 1)
  {
    fixed_status[3] += await (char_instance.calculate_char_fixed_elm_charge(fixed_status) + weapon_instance.calculate_weapon_fixed_elm_charge(fixed_status));
    result_status[3] = team_dynamic_buff[3] + fixed_status[3] + await (char_instance.calculate_char_result_elm_charge(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm_charge(fixed_status, result_status));
  }

  if (depend_status[4] == 1)
  {
    fixed_status[4] += await (char_instance.calculate_char_fixed_attck(fixed_status) + weapon_instance.calculate_weapon_fixed_attck(fixed_status));
    result_status[4] = team_dynamic_buff[4] + fixed_status[4] + await (char_instance.calculate_char_result_attck(fixed_status, result_status) + weapon_instance.calculate_weapon_result_attck(fixed_status, result_status));

  }

  if (depend_status[5] == 1)
  {
    fixed_status[5] += await (char_instance.calculate_char_fixed_cr(fixed_status) + weapon_instance.calculate_weapon_fixed_cr(fixed_status));
    result_status[5] = team_dynamic_buff[5] + fixed_status[5] + await (char_instance.calculate_char_result_cr(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cr(fixed_status, result_status));
    if (fixed_status[5] > 1)
    {
      fixed_status[5] = 1;
    }
    if (result_status[5] > 1)
    {
      result_status[5] = 1;
    }
  }

  if (depend_status[6] == 1)
  {
    fixed_status[6] += await (char_instance.calculate_char_fixed_cd(fixed_status) + weapon_instance.calculate_weapon_fixed_cd(fixed_status));
    result_status[6] = team_dynamic_buff[6] + fixed_status[6] + await (char_instance.calculate_char_result_cd(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cd(fixed_status, result_status));
  }

  fixed_status[7] += await (char_instance.calculate_char_fixed_dmg_buff(fixed_status) + weapon_instance.calculate_weapon_fixed_dmg_buff(fixed_status));
  if(zetsuen_check == 1)
  {
    zetsuen_dmgbuff = calc_zetsuen_buff(fixed_status[3]);
    result_status[7] = team_dynamic_buff[7] + fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status) + zetsuen_dmgbuff);
  }
  else
  {
    result_status[7] = team_dynamic_buff[7] + fixed_status[7] + await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status));
  }

  basic_dmg = await char_instance.calculate_basic_dmg(dmg_rate, result_status);
  if (depend_status[2] == 1) {
    exp_dmg = basic_dmg*(1 + result_status[5]*result_status[6])
    *(1 + result_status[7]) * correct_coeff[8] + calculate_elmreaction_constdmg(char_parameter[1], result_status, correct_coeff, reaction_check, reaction_count_list, reaction_bonus_list);
  } else {
    exp_dmg = basic_dmg*(1 + result_status[5]*result_status[6])
    *(1 + result_status[7]) * correct_coeff[8];
  }
  result_status.push(exp_dmg);
  return result_status;
}

async function import_char_parameter()
{
  let ReactionFixValue
  let CharacterLevel = parseInt(CharLevel);
  if(CharLevel == 90)
  {
    ReactionFixValue = 1446.85
  }
  else
  {
    ReactionFixValue =  0.000000000755856 * CharacterLevel**7 - 0.000000227931736 * CharacterLevel**6 + 0.000025874407743 * CharacterLevel**5 - 0.001355874350326 * CharacterLevel**4 + 0.033618145604131 * CharacterLevel**3 - 0.264196827606430 * CharacterLevel**2 + 2.413548140527692 * CharacterLevel + 14.837426209163127;
  }
  const parameter = [CharacterLevel, ReactionFixValue, CharConstellations, CharTalentLevel[attack_method_index]];
  return parameter;
}

async function DefineMainStatus(DependStatusList, AfMainStatus) {
  let MainStatusList = [];
  let ClockMainStatus = [];
  let GobletMainStatus = [];
  let CircletMainStatus = [];

  if (DependStatusList[0] == 1) {
    ClockMainStatus.push(0);
    GobletMainStatus.push(0);
    CircletMainStatus.push(0);
  } 
  if (DependStatusList[1] == 1) {
    ClockMainStatus.push(1);
    GobletMainStatus.push(1);
    CircletMainStatus.push(1); 
  }
  if (DependStatusList[2] == 1) {
    ClockMainStatus.push(2);
    GobletMainStatus.push(2);
    CircletMainStatus.push(2); 
  }
  if (DependStatusList[3] == 1) {
    ClockMainStatus.push(3); 
  }
  if (DependStatusList[4] == 1) {
    ClockMainStatus.push(4);
    GobletMainStatus.push(4);
    CircletMainStatus.push(4); 
  }
  if (DependStatusList[5] == 1) {
    CircletMainStatus.push(5); 
  }
  if (DependStatusList[6] == 1) {
    CircletMainStatus.push(6); 
  }

  if (AfMainStatus[3] > 0)
  {
    ClockMainStatus = [3]
  }
  if(char_propaty[0] !=7)
  {
    GobletMainStatus.push(7);
  }
  else
  {
    GobletMainStatus.push(8);
  }
  MainStatusList = [ClockMainStatus, GobletMainStatus, CircletMainStatus];
  return MainStatusList;
}

async function CalculateIdealAfMainStatusBuff(status_array)
{
  const af_main_status = [0.466, 0.583, 187, 51.8, 0.466, 31.1, 62.2, 0.466, 0.583];
  let set_main_status = [0,0,0,0,0,0,0,0,0];
  let af_main_status_buff = [0,0,0,0,0,0,0,0,0];
  set_main_status[status_array[0]] += 1;
  set_main_status[status_array[1]] += 1;
  set_main_status[status_array[2]] += 1;
  for (let i = 0; i < 7; i++)
  {
    af_main_status_buff[i] = af_main_status[i] *  set_main_status[i];
  }
  if(char_propaty[0] !=7)
  {
    af_main_status_buff[7] = af_main_status[7] *  set_main_status[7];
  }
  else
  {
    af_main_status_buff[7] = af_main_status[8] *  set_main_status[8];
  }
  return af_main_status_buff;
}

async function calculateAndStoreResult(resultList) {
  // 降順にソート
  resultList.sort((a, b) => b[0] - a[0]);
  // 上位5つのみを取得
  const topFive = resultList.slice(0, 5);
  return topFive;
}

async function createAf(paramList) {
    let fixBuffList = [7, 8, 9];
    let rateList = [0, 1, 2, 3, 4];
    let criticalList = [5, 6];
    let subStatusList = [];
    let mainBuffList = [];
    const subStatusBaseIndex = [0.583, 0.729, 2.331, 0.648, 0.583, 0.389, 0.777, 29.875, 1.945, 2.315];

    if (paramList[0] == 0) {
      mainBuffList = [0, 80 * subStatusBaseIndex[0]];
    }
    else if (paramList[0] == 1) {
      mainBuffList = [1, 80 * subStatusBaseIndex[1]];
    }
    else if (paramList[0] == 2) {
      mainBuffList = [2, 80 * subStatusBaseIndex[2]];
    }
    else if (paramList[0] == 3) {
      mainBuffList = [3, 80 * subStatusBaseIndex[3]];
    }
    else if (paramList[0] == 4) {
      mainBuffList = [4, 80 * subStatusBaseIndex[4]];
    }
    else if (paramList[0] == 5) {
      mainBuffList = [5, 80 * subStatusBaseIndex[5]];
    }
    else if (paramList[0] == 6) {
      mainBuffList = [6, 80 * subStatusBaseIndex[6]];
    }
    else if (paramList[0] == 7) {
      mainBuffList = [7, 160 * subStatusBaseIndex[7]];
    }
    else if (paramList[0] == 8) {
      mainBuffList = [8, 160 * subStatusBaseIndex[8]];
    }
    else if (paramList[0] == 10) {
      mainBuffList = [10, 80 * subStatusBaseIndex[4]];
    }
    else if (paramList[0] == 11) {
      mainBuffList = [11, 80 * subStatusBaseIndex[4]];
    }
    else if (paramList[0] == 12) {
      mainBuffList = [12, 80 * subStatusBaseIndex[4]];
    }
    else if (paramList[0] == 13) {
      mainBuffList = [13, 80 * subStatusBaseIndex[4]];
    }
    else if (paramList[0] == 14) {
      mainBuffList = [14, 80 * subStatusBaseIndex[4]];
    }
    else if (paramList[0] == 15) {
      mainBuffList = [15, 80 * subStatusBaseIndex[4]];
    }
    else if (paramList[0] == 16) {
      mainBuffList = [16, 80 * subStatusBaseIndex[4]];
    }
    else if (paramList[0] == 16) {
      mainBuffList = [17, 100 * subStatusBaseIndex[4]];
    }
    else if (paramList[0] == 16) {
      mainBuffList = [18, 0];
    }

    for (let i = 0; i < 3; i++)
    {
      if (paramList[i] < 10) {
          const lists = [fixBuffList, rateList, criticalList];

          for (const list of lists) {
              const index = list.indexOf(paramList[i]);
              if (index !== -1) {
                  list.splice(index, 1);
                  break;
              }
          }
      }
    }

    for (let i = 0; i < 2; i++)
    {
        const randomBuffInt = 10 - Math.floor(Math.random() * 4);
        const selectedList = [paramList[i + 1], randomBuffInt];
        subStatusList.push(selectedList);
    }

    for (let i = 0; i < 2; i++) {
        const baseNum = 6 * fixBuffList.length + 4 * rateList.length + 3 * criticalList.length;
        const randomTypeIndex = Math.floor(Math.random() * baseNum);

        if (randomTypeIndex < 6 * fixBuffList.length) {
            const randomBuffInt = 10 - Math.floor(Math.random() * 4);
            const randomBuffIndex = Math.floor(Math.random() * fixBuffList.length);
            const selectedList = [fixBuffList[randomBuffIndex], randomBuffInt];
            subStatusList.push(selectedList);
            fixBuffList.splice(randomBuffIndex, 1);
        } else if (randomTypeIndex < 6 * fixBuffList.length + 4 * rateList.length) {
            const randomBuffInt = 10 - Math.floor(Math.random() * 4);
            const randomBuffIndex = Math.floor(Math.random() * rateList.length);
            const selectedList = [rateList[randomBuffIndex], randomBuffInt];
            subStatusList.push(selectedList);
            rateList.splice(randomBuffIndex, 1);
        } else {
            const randomBuffInt = 10 - Math.floor(Math.random() * 4);
            const randomBuffIndex = Math.floor(Math.random() * criticalList.length);
            const selectedList = [criticalList[randomBuffIndex], randomBuffInt];
            subStatusList.push(selectedList);
            criticalList.splice(randomBuffIndex, 1);
        }
    }

    const optionNum = Math.random() < 1/3 ? 5 : 4;

    for (let i = 0; i < optionNum; i++) {
        const randomBuffIndex1 = Math.floor(Math.random() * 4);
        const randomBuffIndex2 = 10 - Math.floor(Math.random() * 4);
        subStatusList[randomBuffIndex1][1] += randomBuffIndex2;
    }

    for (let i = 0; i < 4; i++) {
        subStatusList[i][1] *= subStatusBaseIndex[subStatusList[i][0]];
    }

    const afInfoList = [mainBuffList, subStatusList];
    return afInfoList;
}

async function SetMyAfStatus(){
    const Afresponse = await fetch("../data/JsonData/AfSubStatusData.json");
    SubstatusData = await Afresponse.json();
    let AfJsonList = UserData.data.avatarInfoList[CharIndexList[SelectId]].equipList;
    // "itemId" の値を格納するための配列を初期化
    let AfIdList = [];
    let tempAfStatusList = [];
    let AfSutatusList = [];
    let MainPropList = [];
    let SubPropList = [];
    let MainStatus;
    const AfArray = [4,2,5,1,3]
    const subStatusBaseIndex = [0.583, 0.729, 2.331, 0.648, 0.583, 0.389, 0.777, 29.875, 1.945, 2.315, 0.583, 0.583, 0.583, 0.583, 0.583, 0.583, 0.583, 0.583, 0];
    // JSON配列の各要素を走査して、"itemId" の要素を取り出す
    AfJsonList.forEach(status => {
        // オブジェクトから "itemId" の要素を取り出して配列に追加
        if (status.hasOwnProperty("itemId") && status.hasOwnProperty("reliquary")) {
            AfIdList.push(status["itemId"]);
            SubPropList = [];
            MainPropList = [];
            status.flat.reliquarySubstats.map(stat => {
                SubPropList.push([SubstatusData[stat.appendPropId]["id"], Math.round(stat.statValue / SubstatusData[stat.appendPropId]["基礎数値"]) * subStatusBaseIndex[SubstatusData[stat.appendPropId]["id"]]]);
            });
            MainStatus = [SubstatusData[status.flat.reliquaryMainstat.mainPropId]["id"], Math.round(status.flat.reliquaryMainstat.statValue / SubstatusData[status.flat.reliquaryMainstat.mainPropId]["基礎数値"]) * SubstatusData[status.flat.reliquaryMainstat.mainPropId]["基礎数値"]];
            tempAfStatusList.push([MainStatus, SubPropList]);
        }
    });
    const fourthDigits = AfIdList.map(number => {
        const numberAsString = number.toString();
        const fourthDigit = numberAsString.charAt(3); // 4桁目の数値のインデックスは3
        return parseInt(fourthDigit); // 文字列から数値に変換して返す
    });
    
    let k = 0
    for (let i = 0; i <fourthDigits.length; i++) {
        if (fourthDigits[i] == AfArray[k])
        {
            AfSutatusList.push(tempAfStatusList[i]);
            k += 1;
        }
        else
        {
            AfSutatusList.push([0,0], [[0,0], [0,0], [0,0], [0,0]]);
            i-=1;
            k += 1;
        }
    }
    return AfSutatusList;
}

async function SetAfParams()
{
  const AfMainParams = ["clock_main", "goblet_main", "circlet_main"];
  const AfSubParams1 = ["clock_sub1", "goblet_sub1", "circlet_sub1"];
  const AfSubParams2 = ["clock_sub2", "goblet_sub2", "circlet_sub2"];
  let AfList = [0,0,0,0,0];
  AfList[0] = [7, parseInt(document.getElementById("flower_sub1").value), parseInt(document.getElementById("flower_sub2").value)];
  AfList[1] = [8, parseInt(document.getElementById("feather_sub1").value), parseInt(document.getElementById("feather_sub2").value)];
  for (let i = 0; i < 3; i++)
  {
      AfList[i + 2] = [parseInt(document.getElementById(AfMainParams[i]).value), parseInt(document.getElementById(AfSubParams1[i]).value), parseInt(document.getElementById(AfSubParams2[i]).value)];
  }

  return AfList
}

function showLoadingSpinner() {
  const spinner = document.getElementById('spinner');
  spinner.style.visibility = "visible"; // スピナーを可視化
}

// スピナー非表示
function hideLoadingSpinner() {
  const spinner = document.getElementById('spinner');
  spinner.style.visibility = "hidden"; // スピナーを非表示にする
}

async function monte_carlo_calculate()
{
    console.time('myTimer'); 
    const input_check = identify_condition();
    if (input_check ==1)
    {
        hideLoadingSpinner();
        return;
    }

    const char_parameter = await import_char_parameter();

    const base_status = await calculate_base_status();
    const af_main_status_buff = await calculate_af_main_status_buff();
    const depend_status = await calculate_depend_status();
    const team_fix_buff = await calculate_team_fix_buff(base_status);
    const team_dynamic_buff = await calculate_team_dynamic_buff(base_status);
    const TryCount = 60000;
    let my_result_status = await calculate_my_exp_dmg(base_status,af_main_status_buff,depend_status);
    let my_exp_dmg = my_result_status[8];
    let MyAfStatusSave = await SetMyAfStatus();
    let MyAfStatus;
    let DependSubStatusIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let base_parameter;
    let exp_dmg;
    let fixed_status = [0,0,0,0,0,0,0,0];
    let result_status = [0,0,0,0,0,0,0,0];
    let AfPartsNum = [0,0,0,0,0];
    let AfUpdateNum = [0,0,0,0,0];
    let AfPartsRate = [0,0,0,0,0];
    let AfUpdateRate = [0,0,0,0,0];
    let AfSquareRate= [0,0,0,0,0];

    const char_instance = await create_char_instance(base_status, char_parameter);
    const weapon_instance = await create_weapon_instance(base_status);
    const dmg_rate = await char_instance.dmg_rate_data();
    const char_debuff = await char_instance.calculate_char_debuff();
    const weapon_debuff =  await weapon_instance.calculate_weapon_debuff();
    const correct_coeff = await calculateEnemyProps(char_debuff, weapon_debuff);
    const reaction_check = document.getElementById("reactionoff_flag");
    const reaction_count_list = create_reactioncount_list();
    const reaction_bonus_list = create_reactionbonus_list();
    console.log(correct_coeff);
    let zetsuen_check = 0;
    let afStatusList;

    const depend_status_index = await calculate_depend_status_index(depend_status);
    for (let d= 0; d < depend_status_index.length; d++)
      {
          DependSubStatusIndex[depend_status_index[d]] = 1; 
      }
      DependSubStatusIndex[10 + parseInt(char_propaty[0])] = 1;
    if (selectedImageIds[0] ==17 && selectedImageIds[1] == 17 && attack_method_index == 4)
    {
        const zetsuen_checkbox = document.getElementById("af17_4");
        if(zetsuen_checkbox.checked)
        {
          zetsuen_check = 1;
        }
    }

    let fixed_buff =[0,0,0,0,0,0,0,0];
    fixed_buff[0] = await (char_instance.calculate_char_fixed_hp(fixed_status) + weapon_instance.calculate_weapon_fixed_hp(fixed_status) + team_fix_buff[0]);
    fixed_buff[1] = await (char_instance.calculate_char_fixed_deff(fixed_status) + weapon_instance.calculate_weapon_fixed_deff(fixed_status)+ team_fix_buff[1]);
    fixed_buff[2] = await (char_instance.calculate_char_fixed_elm(fixed_status) + weapon_instance.calculate_weapon_fixed_elm(fixed_status) + team_fix_buff[2]);
    fixed_buff[3] = await (char_instance.calculate_char_fixed_elm_charge(fixed_status) + weapon_instance.calculate_weapon_fixed_elm_charge(fixed_status) + team_fix_buff[3]);
    fixed_buff[4] = await (char_instance.calculate_char_fixed_attck(fixed_status) + weapon_instance.calculate_weapon_fixed_attck(fixed_status) + team_fix_buff[4]);
    fixed_buff[5] = await (char_instance.calculate_char_fixed_cr(fixed_status) + weapon_instance.calculate_weapon_fixed_cr(fixed_status) + team_fix_buff[5]);
    fixed_buff[6] = await (char_instance.calculate_char_fixed_cd(fixed_status) + weapon_instance.calculate_weapon_fixed_cd(fixed_status) + team_fix_buff[6]);
    fixed_buff[7] = await (char_instance.calculate_char_fixed_dmg_buff(fixed_status) + weapon_instance.calculate_weapon_fixed_dmg_buff(fixed_status) + team_fix_buff[7]);

    const AfParamsList = await SetAfParams();
    for (let j= 0; j < TryCount * 5; j++)
    {
        let AfPartIndex;
        if (j < TryCount)
        {
          AfPartIndex = 0;
        }
        else if (j < TryCount * 2)
        {
          AfPartIndex = 1;
        }
        else if (j < TryCount * 3)
        {
          AfPartIndex = 2;
        }
        else if (j < TryCount * 4)
        {
          AfPartIndex = 3;
        }
        else if (j < TryCount * 5)
        {
          AfPartIndex = 4;
        }
        MyAfStatus = MyAfStatusSave.slice();
        afInfo = await createAf(AfParamsList[AfPartIndex]);
        MyAfStatus[AfPartIndex] = afInfo;
        afStatusList = Array(19).fill(0);
        for (let i = 0; i < 5; i++) {
            afStatusList[MyAfStatus[i][0][0]] += MyAfStatus[i][0][1];
            for (let k = 0; k < 4; k++) {
                afStatusList[MyAfStatus[i][1][k][0]] += MyAfStatus[i][1][k][1];
            }
        }
        base_parameter = await calculate_fixed_status(base_status,afStatusList);
        for (let g = 0; g < depend_status_index.length; g++)
            {
              fixed_status[depend_status_index[g]] = base_parameter[depend_status_index[g]] + fixed_buff[depend_status_index[g]];
              result_status[depend_status_index[g]] = fixed_status[depend_status_index[g]] + team_dynamic_buff[depend_status_index[g]];
            }
        fixed_status[7] = base_parameter[7] + fixed_buff[7];
        result_status[7] = fixed_status[7] + team_dynamic_buff[7];
        
        if (depend_status[0] == 1)
        {
            result_status[0] += await (char_instance.calculate_char_result_hp(fixed_status, result_status) + weapon_instance.calculate_weapon_result_hp(fixed_status, result_status));
        }
        
        if (depend_status[1] == 1)
        {
            result_status[1] += await (char_instance.calculate_char_result_deff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_deff(fixed_status, result_status));
        }
        
        if (depend_status[2] == 1)
        {
            result_status[2] += await (char_instance.calculate_char_result_elm(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm(fixed_status, result_status));
        }
        
        if (depend_status[3] == 1)
        {
            result_status[3] += await (char_instance.calculate_char_result_elm_charge(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm_charge(fixed_status, result_status));
        }
        
        if (depend_status[4] == 1)
        {
            result_status[4] += await (char_instance.calculate_char_result_attck(fixed_status, result_status) + weapon_instance.calculate_weapon_result_attck(fixed_status, result_status));
        }
        if (depend_status[5] == 1)
        {
            result_status[5] += await (char_instance.calculate_char_result_cr(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cr(fixed_status, result_status));
            if (result_status[5] > 1)
            {
              result_status[5] = 1;
            }
        }
        
        if (depend_status[6] == 1)
        {
            result_status[6] += await (char_instance.calculate_char_result_cd(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cd(fixed_status, result_status));
        }
        
        if(zetsuen_check == 1)
        {
            let zetsuen_dmgbuff = calc_zetsuen_buff(fixed_status[3]);
            result_status[7] += await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status) + zetsuen_dmgbuff);
        }
        else
        {
            result_status[7] += await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status));
        }
        let basic_dmg = await char_instance.calculate_basic_dmg(dmg_rate, result_status);
        if (depend_status[2] == 1) {
            exp_dmg = basic_dmg * (1 + result_status[5]*result_status[6])
                    * (1 + result_status[7]) * correct_coeff[8] + calculate_elmreaction_constdmg(char_parameter[1], result_status, correct_coeff, reaction_check, reaction_count_list, reaction_bonus_list);
        } else {
            exp_dmg = basic_dmg * (1 + result_status[5]*result_status[6])
                    * (1 + result_status[7]) * correct_coeff[8];
        }

        AfPartsNum[AfPartIndex] += 1;
        AfPartsRate[AfPartIndex] += exp_dmg / my_exp_dmg;
        AfSquareRate[AfPartIndex] += (exp_dmg / my_exp_dmg) ** 2;
      if (exp_dmg > my_exp_dmg)
        {
          AfUpdateNum[AfPartIndex] += 1;
          AfUpdateRate[AfPartIndex] += exp_dmg / my_exp_dmg;
        }
        
    }

    hideLoadingSpinner();

    const pdfJson = await fetch("../data/JsonData/pdfData.json");
    const pdfData = await pdfJson.json();
    const pdfProbList = [0,0,0,0,0];

    for (let i = 0; i < 5; i++) {
      let probVariable = ((1 - AfPartsRate[i] / AfPartsNum[i]) / (AfSquareRate[i] / AfPartsNum[i] - (AfPartsRate[i] / TryCount) ** 2) ** 0.5);
      if(probVariable > 0)
      {
        probVariable = probVariable.toFixed(2);
        pdfProbList[i] = ((1 - pdfData[probVariable]) * 100).toFixed(2);
      }
      else
      {
        probVariable = probVariable.toFixed(2);
        pdfProbList[i] = ((pdfData[-probVariable]) * 100).toFixed(2);
      }
    }

    console.log(pdfProbList);

    document.getElementById("clock1").innerHTML = (AfUpdateNum[0] * 100 / TryCount).toFixed(2) + "％";
    document.getElementById("clock2").innerHTML = (AfUpdateNum[1] * 100 / TryCount).toFixed(2) + "％";
    document.getElementById("clock3").innerHTML = (AfUpdateNum[2] * 100 / TryCount).toFixed(2) + "％";
    document.getElementById("clock4").innerHTML = (AfUpdateNum[3] * 100 / TryCount).toFixed(2) + "％";
    document.getElementById("clock5").innerHTML = (AfUpdateNum[4] * 100 / TryCount).toFixed(2) + "％";
    document.getElementById("goblet1").innerHTML = pdfProbList[0] + "％";
    document.getElementById("goblet2").innerHTML = pdfProbList[1] + "％";
    document.getElementById("goblet3").innerHTML = pdfProbList[2] + "％";
    document.getElementById("goblet4").innerHTML = pdfProbList[3] + "％";
    document.getElementById("goblet5").innerHTML = pdfProbList[4] + "％";
    document.getElementById("circlet1").innerHTML = (((1 - AfPartsRate[0] / AfPartsNum[0]) / (AfSquareRate[0] / AfPartsNum[0] - (AfPartsRate[0] / TryCount) ** 2) ** 0.5) * 10 + 50).toFixed(1);
    document.getElementById("circlet2").innerHTML = (((1 - AfPartsRate[1] / AfPartsNum[1]) / (AfSquareRate[1] / AfPartsNum[1] - (AfPartsRate[1] / TryCount) ** 2) ** 0.5) * 10 + 50).toFixed(1);
    document.getElementById("circlet3").innerHTML = (((1 - AfPartsRate[2] / AfPartsNum[2]) / (AfSquareRate[2] / AfPartsNum[2] - (AfPartsRate[2] / TryCount) ** 2) ** 0.5) * 10 + 50).toFixed(1);
    document.getElementById("circlet4").innerHTML = (((1 - AfPartsRate[3] / AfPartsNum[3]) / (AfSquareRate[3] / AfPartsNum[3] - (AfPartsRate[3] / TryCount) ** 2) ** 0.5) * 10 + 50).toFixed(1);
    document.getElementById("circlet5").innerHTML = (((1 - AfPartsRate[4] / AfPartsNum[4]) / (AfSquareRate[4] / AfPartsNum[4] - (AfPartsRate[4] / TryCount) ** 2) ** 0.5) * 10 + 50).toFixed(1);

    
    console.timeEnd('myTimer'); // タイマーを終了し、経過時間をコンソールに表示
}

async function DoCalculate(){
  showLoadingSpinner()
  setTimeout(monte_carlo_calculate, 100)
}


function create_radarchart(depend_index, myStatus, TheoreticalStatus) {
  let statusList = ["HP%", "防御力％", "元素熟知", "元素チャージ効率", "攻撃力％", "会心率", "会心ダメージ"];
  let itemList = [];
  let myData = [];
  let TheoreticalData = [];
  let dltScore = 0;

  for (let i = 0; i < 7; i++) {
      if (depend_index[i] == 1) {
          itemList.push(statusList[i]);
          dltScore =  100 + (myStatus[i] - TheoreticalStatus[i]);
          if (dltScore > 0)
          {
            myData.push(dltScore);
          }
          else
          {
            myData.push(0);
          }
          TheoreticalData.push(100);
      }
  }

  let maxElement = Math.max(...myData);
  let maxborder = 0;
  if (maxElement < 140)
  {
    maxborder = 140;
  }
  else
  {
    maxborder = 200;
  }

  let ctx = document.getElementById("myChart");

  // 既存のチャートを削除する
  if (window.myChart instanceof Chart) {
      window.myChart.destroy();
  }

  // 新しいチャートを作成する
  window.myChart = new Chart(ctx, {
      type: 'radar',
      data: {
          labels: itemList,
          datasets: [
              {
                  label: "ステータスバランス",
                  backgroundColor: "rgba(51,255,51,0.5)",
                  borderColor: "rgba(51,255,51,1)",
                  pointBackgroundColor: "rgba(51,255,51,1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgba(51,255,51,1)",
                  hitRadius: 5,
                  data: myData
              },
              {
                  label: "理論値",
                  backgroundColor: "rgba(255,51,51,0.5)",
                  borderColor: "rgba(255,51,51,1)",
                  pointBackgroundColor: "rgba(255,51,51,1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgba(255,51,51,1)",
                  hitRadius: 5,
                  data: TheoreticalData
              }
          ]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scale: {
              ticks: {
                  beginAtZero: true,
                  min: 0,
                  stepSize: 20,
                  max: maxborder,
              },
              pointLabels: {
                  fontSize: 10
              }
          },
          legend: {
              fontSize: 10,
              labels: {
                  fontSize: 14,
              }
          }
      }
  });
}
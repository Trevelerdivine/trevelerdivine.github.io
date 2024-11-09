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
      base_dmg_buff += parseFloat(WeaponData.ステータス.基礎ダメージバフ.数値[weapon_level]);
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
  AfMainStatusBuff[7] *= 0.01;
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

async function calculate_fixed_status(sd,bs,amsb)
//変数は左から（score_distribution,base_status,af_main_status_buff）
{
  let fixed_status = [0,0,0,0,0,0,0,0];
  fixed_status[0] = bs[0] * (1 + sd[0] * 3 / 400 + amsb[0]);
  fixed_status[1] = bs[1] * (1 + sd[1] * 3 / 320 + amsb[1]);
  fixed_status[2] = bs[2] + sd[2] * 3 + amsb[2];
  fixed_status[3] = bs[3] + sd[3] / 120 + amsb[3]/100;
  fixed_status[4] = bs[4] * (1 + sd[4] * 3 / 400 + amsb[4]);
  fixed_status[5] = bs[5] + sd[5] / 200 + amsb[5] / 100;
  fixed_status[6] = bs[6] + sd[6] / 100 + amsb[6] / 100;
  fixed_status[7] = bs[7] + amsb[7];
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
  let zetsuen_check = 0;
  let buff_status = [0,0,0,0,0,0,0,0];
  let team_fix_buff = await calculate_team_fix_buff(base_status);
  let team_dynamic_buff = await calculate_team_dynamic_buff(base_status);
  let AfSubBuff = await calculate_af_score(depend_status,base_status);
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
    if (depend_status[index] === 1) 
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
    reaction_dmg = reaction_list[0] * 2 * resist[0] * (1 + reaction_bonus_list[0] + reaction_elm_bunus) 
                 + reaction_list[1] * 3 * resist[5] * (1 + reaction_bonus_list[1] + reaction_elm_bunus);
  }
  else if (char_propaty[0] == 1)
  {
    if (selectedCharId != 11)
    {
      reaction_dmg = reaction_list[2] * 1.2 * resist[3] * (1 + reaction_bonus_list[2] + reaction_elm_bunus)
                   + reaction_list[3] * 2 * resist[5] * (1 + reaction_elm_bunus)
                   + reaction_list[4] * 2 * resist[5] * (1 + reaction_bonus_list[4] + reaction_elm_bunus);
    }
    else
    {
      reaction_dmg = reaction_list[2] * 1.2 * resist[3] * (1 + reaction_bonus_list[2] + reaction_elm_bunus)
                   + reaction_list[3] * 2 * resist[5] * (1 + reaction_elm_bunus)
                   + reaction_list[4] * 2 * resist[5] * (1 + Math.min(Math.max(status_array[0] - 30000, 0) * 0.00009, 4) + reaction_elm_bunus);
    }
  }
  else if (char_propaty[0] == 3)
  {
    reaction_dmg = reaction_list[5] * 2 * resist[0] * (1 + reaction_bonus_list[5] + reaction_elm_bunus)
                 + reaction_list[6] * 1.2 * resist[3] * (1 + reaction_bonus_list[5] + reaction_elm_bunus)
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

async function CalculateExpDmg(
                               score_distribute, base_parameter, depend_status_index, fixed_buff, fixed_status,
                               result_status, team_dynamic_buff, char_instance, weapon_instance, zetsuen_check, dmg_rate, correct_coeff,
                               char_parameter, reaction_check, reaction_count_list, reaction_bonus_list
                              )
{
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
  let exp_dmg;
  if (depend_status[2] == 1) {
    exp_dmg = basic_dmg * (1 + result_status[5]*result_status[6])
            * (1 + result_status[7]) * correct_coeff[8] + calculate_elmreaction_constdmg(char_parameter[1], result_status, correct_coeff, reaction_check, reaction_count_list, reaction_bonus_list);
  } else {
    exp_dmg = basic_dmg * (1 + result_status[5]*result_status[6])
            * (1 + result_status[7]) * correct_coeff[8];
  }
  return exp_dmg
}

async function calculateAndStoreResult(resultList) {
  // 降順にソート
  resultList.sort((a, b) => b[0] - a[0]);
  // 上位5つのみを取得
  let leave_num = 10
  if (leave_num > resultList.length)
  {
    leave_num = resultList.length
  }
  const topFive = resultList.slice(0, leave_num);
  return topFive;
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
  let my_af_score_distribution = await  calculate_af_score(depend_status,base_status);
  let af_score = my_af_score_distribution[7];
  const my_af_score = my_af_score_distribution[7];
  let dlt_score;
  let critical_dmg;
  let temp_critical_dmg;
  let excess_crscore;
  let response = "";
  let LoopCount = 2000 * depend_status_index.length;
  document.getElementById("response").innerHTML = response;
  if (my_exp_dmg < 0 || !Number.isFinite(my_exp_dmg))
  {
    hideLoadingSpinner();
    response ="ダメージ期待値が異常値を示しています。再入力をするかリロードをしてください。"
    document.getElementById("response").innerHTML = response;
    return response;
  }
  
  if (af_score < 0 || af_score > 350 || !Number.isFinite(af_score))
  {
    hideLoadingSpinner();
    response = "  聖遺物スコア: " + af_score + "<br>" + "聖遺物スコアが異常値を示しています。再入力してください。"
    document.getElementById("response").innerHTML = response;
    return response;
  }
  let score_distribute;
  let af_score_upper_limit = af_score;
  let af_score_lower_limit = 0;
  af_score = af_score/2;

  let base_parameter;
  let fixed_status = [0,0,0,0,0,0,0,0];
  let result_status = [0,0,0,0,0,0,0,0];
  let save_status = [0,0,0,0,0,0,0,0];
  let save_score_distribute = [0,0,0,0,0,0,0,0];
  let save_af_score;
  let optimaize_af_score;
  let main_status_name = ["HP%","防御力%","元素熟知","元チャ効率","攻撃力%","会心率","会心ダメージ","元素ダメバフ","物理ダメバフ"]
  let random_1;
  let random_2;
  let output_exp_dmg;
  let dmg_error = Infinity;
  let abs_dmg_error = Infinity;
  let temp_status = [0,0,0,0,0,0,0,0];
  let temp_score_distribute = [0,0,0,0,0,0,0];
  let old_score_distribution = [0,0,0,0,0,0,0];
  let new_score_distribution = [0,0,0,0,0,0,0];
  let basic_dmg;
  let n_count = 0;

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
  let zetsuen_dmgbuff;
  if (selectedImageIds[0] ==17 && selectedImageIds[1] == 17 && attack_method_index == 4)
  {
    const zetsuen_checkbox = document.getElementById("af17_4");
    if(zetsuen_checkbox.checked)
    {
      zetsuen_check = 1;
    }
  }

  let fixed_buff =[0,0,0,0,0,0,0,0];
  fixed_buff[0] = await (char_instance.calculate_char_fixed_hp(fixed_status) + weapon_instance.calculate_weapon_fixed_hp(fixed_status) + team_fix_buff[0]) + AfMainFixStatus[0];
  fixed_buff[1] = await (char_instance.calculate_char_fixed_deff(fixed_status) + weapon_instance.calculate_weapon_fixed_deff(fixed_status)+ team_fix_buff[1]);
  fixed_buff[2] = await (char_instance.calculate_char_fixed_elm(fixed_status) + weapon_instance.calculate_weapon_fixed_elm(fixed_status) + team_fix_buff[2]);
  fixed_buff[3] = await (char_instance.calculate_char_fixed_elm_charge(fixed_status) + weapon_instance.calculate_weapon_fixed_elm_charge(fixed_status) + team_fix_buff[3]);
  fixed_buff[4] = await (char_instance.calculate_char_fixed_attck(fixed_status) + weapon_instance.calculate_weapon_fixed_attck(fixed_status) + team_fix_buff[4]) + AfMainFixStatus[1];
  fixed_buff[5] = await (char_instance.calculate_char_fixed_cr(fixed_status) + weapon_instance.calculate_weapon_fixed_cr(fixed_status) + team_fix_buff[5]);
  fixed_buff[6] = await (char_instance.calculate_char_fixed_cd(fixed_status) + weapon_instance.calculate_weapon_fixed_cd(fixed_status) + team_fix_buff[6]);
  fixed_buff[7] = await (char_instance.calculate_char_fixed_dmg_buff(fixed_status) + weapon_instance.calculate_weapon_fixed_dmg_buff(fixed_status) + team_fix_buff[7]);

  while (n_count < 30)
  {
    let exp_dmg = 0;
    let temp_exp_dmg = 0;
    n_count = n_count + 1;
    for (let i = 0; i < LoopCount; i++)
    {
      score_distribute = await calculate_score_distribute(af_score,depend_status);
      base_parameter = await calculate_fixed_status(score_distribute,base_status,af_main_status_buff);
      exp_dmg = await CalculateExpDmg(
                                        score_distribute, base_parameter, depend_status_index, fixed_buff, fixed_status,
                                        result_status, team_dynamic_buff, char_instance, weapon_instance, zetsuen_check, dmg_rate, correct_coeff,
                                        char_parameter, reaction_check, reaction_count_list, reaction_bonus_list
                                      );

      if (temp_exp_dmg < exp_dmg)
      {
        temp_score_distribute = score_distribute;
        temp_status = result_status.slice();
        temp_exp_dmg = exp_dmg;
      }
    }

    old_score_distribution = temp_score_distribute.slice();
    new_score_distribution = temp_score_distribute.slice();

    for (let k = 0; k < LoopCount; k++)
    {
      random_1 = Math.floor(depend_status_index.length * Math.random());
      random_2 = Math.floor(depend_status_index.length * Math.random());
      if (k < 0.4 * LoopCount)
      {
        dlt_score = 0.1;
      }
      else if (k < 0.8 * LoopCount)
      {
        dlt_score = 0.01;
      }
      else
      {
        dlt_score = 0.001;
      }

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
      }

      if (depend_status[6] == 1)
      {
        result_status[6] += await (char_instance.calculate_char_result_cd(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cd(fixed_status, result_status));
      }

      if(zetsuen_check == 1)
      {
        zetsuen_dmgbuff = calc_zetsuen_buff(fixed_status[3]);
        result_status[7] += await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status) + zetsuen_dmgbuff);
      }
      else
      {
        result_status[7] += await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status));
      }

      if (result_status[5] > 1)
      {
        excess_crscore = (result_status[5] - 1) * 200;
        new_score_distribution[5] -= excess_crscore;
        if (new_score_distribution[5] > 0)
        {
          new_score_distribution[6] += excess_crscore;
          result_status[6] += excess_crscore / 100;
        }
        else
        {
          new_score_distribution[5] = 0;
        }
        result_status[5] = 1;
      }

      basic_dmg = await char_instance.calculate_basic_dmg(dmg_rate, result_status);
      if (depend_status[2] == 1) {
        exp_dmg = basic_dmg * (1 + result_status[5]*result_status[6])
                * (1 + result_status[7]) * correct_coeff[8] + calculate_elmreaction_constdmg(char_parameter[1], result_status, correct_coeff, reaction_check, reaction_count_list, reaction_bonus_list);
      } else {
        exp_dmg = basic_dmg * (1 + result_status[5] * result_status[6])
                * (1 + result_status[7]) * correct_coeff[8];
      }
      
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
    output_exp_dmg = temp_exp_dmg;
    dmg_error = my_exp_dmg - output_exp_dmg;
    abs_dmg_error = Math.abs(dmg_error);
    if (abs_dmg_error < 1 ) break;

    if (dmg_error < 0)
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
  save_status = temp_status.slice();
  save_score_distribute = old_score_distribution.slice();
  save_af_score = af_score;
  const MainStatusIndexList = await DefineMainStatus(depend_status, af_main_status_buff);
  let ExpDmgList = [];
  console.log(MainStatusIndexList);
  let AllPatternResult;
  let MainStatusList;
  let MainStatusBuff;
  for (let x = 0; x < MainStatusIndexList[0].length; x++)
  {
    for (let y = 0; y < MainStatusIndexList[1].length; y++)
    {
      for (let z = 0; z < MainStatusIndexList[2].length; z++)
      {
        exp_dmg = 0;
        temp_exp_dmg = 0;
        MainStatusList = [MainStatusIndexList[0][x],MainStatusIndexList[1][y], MainStatusIndexList[2][z]];
        MainStatusBuff = await CalculateIdealAfMainStatusBuff(MainStatusList);
        for (let i = 0; i < LoopCount; i++)
        {
          score_distribute = await calculate_score_distribute(af_score,depend_status);
          base_parameter = await calculate_fixed_status(score_distribute,base_status,MainStatusBuff);
          exp_dmg = await CalculateExpDmg(
                                            score_distribute, base_parameter, depend_status_index, fixed_buff, fixed_status,
                                            result_status, team_dynamic_buff, char_instance, weapon_instance, zetsuen_check, dmg_rate, correct_coeff,
                                            char_parameter, reaction_check, reaction_count_list, reaction_bonus_list
                                          );

          if (temp_exp_dmg < exp_dmg)
          {
            temp_score_distribute = score_distribute;
            temp_status = result_status.slice();
            temp_exp_dmg = exp_dmg;
          }
        }
        old_score_distribution = temp_score_distribute.slice();
        new_score_distribution = temp_score_distribute.slice();

        for (let k = 0; k < LoopCount; k++)
        {
          random_1 = Math.floor(depend_status_index.length * Math.random());
          random_2 = Math.floor(depend_status_index.length * Math.random());
          if (k < 0.4 * LoopCount)
          {
            dlt_score = 0.1;
          }
          else if (k < 0.8 * LoopCount)
          {
            dlt_score = 0.01;
          }
          else
          {
            dlt_score = 0.001;
          }

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

          base_parameter = await calculate_fixed_status(new_score_distribution,base_status,MainStatusBuff,depend_status);
          for (g = 0; g < depend_status_index.length; g++)
          {
            fixed_status[depend_status_index[g]] = base_parameter[depend_status_index[g]] + fixed_buff[depend_status_index[g]];
            result_status[depend_status_index[g]] = fixed_status[depend_status_index[g]] + team_dynamic_buff[depend_status_index[g]]
          }
          fixed_status[7] = base_parameter[7] + fixed_buff[7];
          result_status[7] = fixed_status[7] + team_dynamic_buff[7]

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
          }

          if (depend_status[6] == 1)
          {
            result_status[6] += await (char_instance.calculate_char_result_cd(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cd(fixed_status, result_status));
          }

          if(zetsuen_check == 1)
          {
            zetsuen_dmgbuff = calc_zetsuen_buff(fixed_status[3]);
            result_status[7] += await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status) + zetsuen_dmgbuff);
          }
          else
          {
            result_status[7] += await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status));
          }

          if (result_status[5] > 1)
          {
            excess_crscore = (result_status[5] - 1) * 200;
            new_score_distribution[5] -= excess_crscore;
            if (new_score_distribution[5] > 0)
            {
              new_score_distribution[6] += excess_crscore;
              result_status[6] += excess_crscore / 100;
            }
            else
            {
              new_score_distribution[5] = 0;
            }
            result_status[5] = 1;
          }

          basic_dmg = await char_instance.calculate_basic_dmg(dmg_rate, result_status);
          if (depend_status[2] == 1) {
            exp_dmg = basic_dmg * (1 + result_status[5]*result_status[6])
                    * (1 + result_status[7]) * correct_coeff[8] + calculate_elmreaction_constdmg(char_parameter[1], result_status, correct_coeff, reaction_check, reaction_count_list, reaction_bonus_list);
          } else {
            exp_dmg = basic_dmg * (1 + result_status[5] * result_status[6])
                    * (1 + result_status[7]) * correct_coeff[8];
          }
          
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
        AllPatternResult = [temp_exp_dmg,MainStatusList]
        ExpDmgList.push(AllPatternResult);
      }
    }
  }
  ExpDmgList = await calculateAndStoreResult(ExpDmgList);
  n_count = 0;
  af_score_upper_limit = af_score;
  af_score_lower_limit = 0;
  af_score = save_af_score / 2;
  MainStatusList = [ExpDmgList[0][1][0],ExpDmgList[0][1][1], ExpDmgList[0][1][2]];
  MainStatusBuff = await CalculateIdealAfMainStatusBuff(MainStatusList);

  while (n_count < 30)
  {
    let exp_dmg = 0;
    let temp_exp_dmg = 0;
    n_count = n_count + 1;
    for (let i = 0; i < LoopCount; i++)
    {
      score_distribute = await calculate_score_distribute(af_score,depend_status);
      base_parameter = await calculate_fixed_status(score_distribute,base_status,MainStatusBuff);
      exp_dmg = await CalculateExpDmg(
                                        score_distribute, base_parameter, depend_status_index, fixed_buff, fixed_status,
                                        result_status, team_dynamic_buff, char_instance, weapon_instance, zetsuen_check, dmg_rate, correct_coeff,
                                        char_parameter, reaction_check, reaction_count_list, reaction_bonus_list
                                      );

      if (temp_exp_dmg < exp_dmg)
      {
        temp_score_distribute = score_distribute;
        temp_status = result_status.slice();
        temp_exp_dmg = exp_dmg;
      }
    }

    old_score_distribution = temp_score_distribute.slice();
    new_score_distribution = temp_score_distribute.slice();

    for (let k = 0; k < LoopCount; k++)
    {
      random_1 = Math.floor(depend_status_index.length * Math.random());
      random_2 = Math.floor(depend_status_index.length * Math.random());
      if (k < 0.4 * LoopCount)
      {
        dlt_score = 0.1;
      }
      else if (k < 0.8 * LoopCount)
      {
        dlt_score = 0.01;
      }
      else
      {
        dlt_score = 0.001;
      }
      
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

      base_parameter = await calculate_fixed_status(new_score_distribution,base_status,MainStatusBuff,depend_status);
      for (g = 0; g < depend_status_index.length; g++)
      {
        fixed_status[depend_status_index[g]] = base_parameter[depend_status_index[g]] + fixed_buff[depend_status_index[g]];
        result_status[depend_status_index[g]] = fixed_status[depend_status_index[g]] + team_dynamic_buff[depend_status_index[g]]
      }
      fixed_status[7] = base_parameter[7] + fixed_buff[7];
      result_status[7] = fixed_status[7] + team_dynamic_buff[7]

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
      }

      if (depend_status[6] == 1)
      {
        result_status[6] += await (char_instance.calculate_char_result_cd(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cd(fixed_status, result_status));
      }

      if(zetsuen_check == 1)
      {
        zetsuen_dmgbuff = calc_zetsuen_buff(fixed_status[3]);
        result_status[7] += await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status) + zetsuen_dmgbuff);
      }
      else
      {
        result_status[7] += await (char_instance.calculate_char_result_dmg_buff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_dmg_buff(fixed_status, result_status));
      }

      if (result_status[5] > 1)
      {
        excess_crscore = (result_status[5] - 1) * 200;
        new_score_distribution[5] -= excess_crscore;
        if (new_score_distribution[5] > 0)
        {
          new_score_distribution[6] += excess_crscore;
          result_status[6] += excess_crscore / 100;
        }
        else
        {
          new_score_distribution[5] = 0;
        }
        result_status[5] = 1;
      }

      basic_dmg = await char_instance.calculate_basic_dmg(dmg_rate, result_status);
      if (depend_status[2] == 1) {
        exp_dmg = basic_dmg * (1 + result_status[5]*result_status[6])
                * (1 + result_status[7]) * correct_coeff[8] + calculate_elmreaction_constdmg(char_parameter[1], result_status, correct_coeff, reaction_check, reaction_count_list, reaction_bonus_list);
      } else {
        exp_dmg = basic_dmg * (1 + result_status[5] * result_status[6])
                * (1 + result_status[7]) * correct_coeff[8];
      }
      
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
    output_exp_dmg = temp_exp_dmg;
    dmg_error = my_exp_dmg - output_exp_dmg;
    abs_dmg_error = Math.abs(dmg_error);
    if (abs_dmg_error < 1 ) break;

    if (dmg_error < 0)
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
  console.log(ExpDmgList);
  output_exp_dmg = output_exp_dmg.toFixed(0);
  optimaize_af_score = af_score;
  af_score = save_af_score;
  temp_status = save_status.slice();
  old_score_distribution = save_score_distribute;


  hideLoadingSpinner();
  let result = "最適化聖遺物スコア (メインステータス考慮)： " + optimaize_af_score.toFixed(1) +"<br>" + "ダメージ期待値： " + output_exp_dmg;
  document.getElementById("result").innerHTML = result;

  let dlthpScore = document.getElementById("dlt_hp_score");
  let dltAfhp = document.getElementById("dlt_af_hp");
  let dltdeffScore = document.getElementById("dlt_deff_score");
  let dltAfdeff = document.getElementById("dlt_af_deff");
  let dltElmScore = document.getElementById("dlt_elm_score");
  let dltAfElm = document.getElementById("dlt_af_elm");
  let dltelmchargeScore = document.getElementById("dlt_elm_charge_score");
  let dltAfelmcharge = document.getElementById("dlt_af_elm_charge");
  let dltattckScore = document.getElementById("dlt_attck_score");
  let dltAfattck = document.getElementById("dlt_af_attck");
  let dltcrScore = document.getElementById("dlt_cr_score");
  let dltAfcr = document.getElementById("dlt_af_cr");
  let dltcdScore = document.getElementById("dlt_cd_score");
  let dltAfcd = document.getElementById("dlt_af_cd");
  dlthpScore.style.color = "black";
  dltAfhp.style.color = "black";
  dltdeffScore.style.color = "black";
  dltAfdeff.style.color = "black";
  dltElmScore.style.color = "black";
  dltAfElm.style.color = "black";
  dltelmchargeScore.style.color = "black";
  dltAfelmcharge.style.color = "black";
  dltattckScore.style.color = "black";
  dltAfattck.style.color = "black";
  dltcrScore.style.color = "black";
  dltAfcr.style.color = "black";
  dltcdScore.style.color = "black";
  dltAfcd.style.color = "black";

  if (depend_status[0] == 1)
  {
    let result_dlthp = (my_af_score_distribution[0] - old_score_distribution[0])
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
      ["my_result_hp", "appro_result_hp", "my_hp_score", "appro_hp_score", "dlt_hp_score", "count_hp_score", "my_af_hp", "appro_af_hp", "dlt_af_hp", "count_hp_score3"].forEach(id => {
        document.getElementById(id).innerHTML = "-";
    });
  }

  if (depend_status[1] == 1)
  {
    let result_dltdeff = (my_af_score_distribution[1] - old_score_distribution[1])
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
    ["my_result_deff", "appro_result_deff", "my_deff_score", "appro_deff_score", "dlt_deff_score", "count_deff_score", "my_af_deff", "appro_af_deff", "dlt_af_deff", "count_deff_score3"].forEach(id => {
      document.getElementById(id).innerHTML = "-";
  });
  
  }

  if (depend_status[2] == 1)
  {
    let result_dltelm = (my_af_score_distribution[2] - old_score_distribution[2])
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
      ["my_result_elm", "appro_result_elm", "my_elm_score", "appro_elm_score", "dlt_elm_score", "count_elm_score", "my_af_elm", "appro_af_elm", "dlt_af_elm", "count_elm_score3"].forEach(id => {
        document.getElementById(id).innerHTML = "-";
    });  
  }

  if (depend_status[3] == 1)
  {
    let result_dltelmcharge = (my_af_score_distribution[3] - old_score_distribution[3])
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
      ["my_result_elm_charge", "appro_result_elm_charge", "my_elm_charge_score", "appro_elm_charge_score", "dlt_elm_charge_score", "count_elm_charge_score", "my_af_elm_charge", "appro_af_elm_charge", "dlt_af_elm_charge", "count_elm_charge_score3"].forEach(id => {
        document.getElementById(id).innerHTML = "-";
    });  
  }

  if (depend_status[4] == 1)
  {
    let result_dltattck = (my_af_score_distribution[4] - old_score_distribution[4])
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
      ["my_result_attck", "appro_result_attck", "my_attck_score", "appro_attck_score", "dlt_attck_score", "count_attck_score", "my_af_attck", "appro_af_attck", "dlt_af_attck", "count_attck_score3"].forEach(id => {
        document.getElementById(id).innerHTML = "-";
    });  
  }

  if (depend_status[5] == 1)
  {
    let result_dltcr = (my_af_score_distribution[5] - old_score_distribution[5])
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
      ["my_result_cr", "appro_result_cr", "my_cr_score", "appro_cr_score", "dlt_cr_score", "count_cr_score", "my_af_cr", "appro_af_cr", "dlt_af_cr", "count_cr_score3"].forEach(id => {
        document.getElementById(id).innerHTML = "-";
    });
  }

  if (depend_status[6] == 1)
  {
    let result_dltcd = (my_af_score_distribution[6] - old_score_distribution[6])
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
      ["my_result_cd", "appro_result_cd", "my_cd_score", "appro_cd_score", "dlt_cd_score", "count_cd_score", "my_af_cd", "appro_af_cd", "dlt_af_cd", "count_cd_score3"].forEach(id => {
        document.getElementById(id).innerHTML = "-";
    });
  }
  document.getElementById("my_result_dmg_buff").innerHTML = (my_result_status[7]*100).toFixed(1) + "％";
  document.getElementById("appro_result_dmg_buff").innerHTML = (temp_status[7]*100).toFixed(1) + "％";
  document.getElementById("my_af_score").innerHTML = my_af_score.toFixed(1);
  document.getElementById("appro_af_score").innerHTML = af_score.toFixed(1);
  document.getElementById("dlt_af_score").innerHTML = (my_af_score-af_score).toFixed(1);
  document.getElementById("my_af_score3").innerHTML = my_af_score.toFixed(1);
  document.getElementById("appro_af_score3").innerHTML = af_score.toFixed(1);
  document.getElementById("dlt_af_score3").innerHTML = (my_af_score-af_score).toFixed(1);

  for (let i = 1; i <= 10; i++) {
    // 要素の ID を配列で管理
    const ids = ["clock" + i, "goblet" + i, "circlet" + i, "dmgrate" + i];

    // 全ての要素を "-" で初期化
    ids.forEach(id => document.getElementById(id).innerHTML = "-");

    // ExpDmgList 内のデータで上書き
    if (i <= ExpDmgList.length) {
        document.getElementById(ids[0]).innerHTML = main_status_name[ExpDmgList[i - 1][1][0]];
        document.getElementById(ids[1]).innerHTML = main_status_name[ExpDmgList[i - 1][1][1]];
        document.getElementById(ids[2]).innerHTML = main_status_name[ExpDmgList[i - 1][1][2]];
        document.getElementById(ids[3]).innerHTML = (ExpDmgList[i - 1][0] * 100 / ExpDmgList[0][0]).toFixed(1) + "％";
    }
  }
  
  console.log(n_count);
  create_radarchart(depend_status, my_af_score_distribution, save_score_distribute);
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
            if (dltScore > 0) {
              myData.push(dltScore);
            } else {
              myData.push(0);
            }
            TheoreticalData.push(100);
        }
    }
  
    let maxElement = Math.max(...myData);
    let maxborder = maxElement < 140 ? 140 : 200;
  
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
                    backgroundColor: "rgba(144,238,144,0.5)", // 薄い緑
                    borderColor: "rgba(144,238,144,1)", // 薄い緑
                    pointBackgroundColor: "rgba(144,238,144,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(144,238,144,1)",
                    hitRadius: 5,
                    data: myData
                },
                {
                    label: "理論値",
                    backgroundColor: "rgba(0,100,0,0.5)", // 濃い緑
                    borderColor: "rgba(0,100,0,1)", // 濃い緑
                    pointBackgroundColor: "rgba(0,100,0,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(0,100,0,1)",
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
            plugins: {
                legend: {
                    display: false // 凡例を非表示にする
                }
            }
        }
    });
  }
  
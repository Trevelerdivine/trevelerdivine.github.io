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

async function create_char_instance(base_status, parameter) {
  let char_instance;

  switch (selectedCharId) {
    case "71":
      char_instance = new Lyney(base_status, parameter);
      break;
    case "0":
      char_instance = new dehya(base_status, parameter);
      break;
    case "1":
      char_instance = new yoimiya(base_status, parameter);
      break;
    case "2":
      char_instance = new hutao(base_status, parameter);
      break;
    case "3":
      char_instance = new klee(base_status, parameter);
      break;
    case "4":
      char_instance = new diluc(base_status, parameter);
      break;
    case "76":
      char_instance = new gaming(base_status, parameter);
      break;
    case "6":
      char_instance = new yanfei(base_status, parameter);
      break;
    case "7":
      char_instance = new xinyan(base_status, parameter);
      break;
    case "8":
      char_instance = new bennett(base_status, parameter);
      break;
    case "9":
      char_instance = new xiangling(base_status, parameter);
      break;
    case "10":
      char_instance = new amber(base_status, parameter);
      break;
    case "80":
      char_instance = new mualani(base_status, parameter);
      break;
    case "74":
      char_instance = new Furina(base_status, parameter);
      break;
    case "72":
      char_instance = new Neuvillette(base_status, parameter);
      break;
    case "11":
      char_instance = new nirou(base_status, parameter);
      break;
    case "12":
      char_instance = new yelan(base_status, parameter);
      break;
    case "13":
      char_instance = new kamisatoayato(base_status, parameter);
      break;
    case "15":
      char_instance = new tartaglia(base_status, parameter);
      break;
    case "18":
      char_instance = new barbara(base_status, parameter);
      break;
    case "19":
      char_instance = new xingqiu(base_status, parameter);
      break;
    case "73":
      char_instance = new Wriothesley(base_status, parameter);
      break;
    case "21":
      char_instance = new kamisatoayaka(base_status, parameter);
      break;
    case "22":
      char_instance = new eula(base_status, parameter);
      break;
    case "23":
      char_instance = new ganyu(base_status, parameter);
      break;
    case "28":
      char_instance = new rosaria(base_status, parameter);
      break;
    case "30":
      char_instance = new chongyun(base_status, parameter);
      break;
    case "31":
      char_instance = new kaeya(base_status, parameter);
      break;
    case "79":
      char_instance = new clorinde(base_status, parameter);
      break;
    case "32":
      char_instance = new cyno(base_status, parameter);
      break;
    case "33":
      char_instance = new yaemiko(base_status, parameter);
      break;
    case "34":
      char_instance = new raiden(base_status, parameter);
      break;
    case "35":
      char_instance = new keqing(base_status, parameter);
      break;
    case "38":
      char_instance = new kujousara(base_status, parameter);
      break;
    case "39":
      char_instance = new fischl(base_status, parameter);
      break;
    case "40":
      char_instance = new beidou(base_status, parameter);
      break;
    case "41":
      char_instance = new razor(base_status, parameter);
      break;
    case "42":
      char_instance = new lisa(base_status, parameter);
      break;
    case "44":
      char_instance = new wanderer(base_status, parameter);
      break;
    case "46":
      char_instance = new xiao(base_status, parameter);
      break;
    case "49":
      char_instance = new faruzan(base_status, parameter);
      break;
    case "50":
      char_instance = new shikanoinheizou(base_status, parameter);
      break;
    case "55":
      char_instance = new alhaitham(base_status, parameter);
      break;
    case "56":
      char_instance = new nahida(base_status, parameter);
      break;
    case "57":
      char_instance = new tighnari(base_status, parameter);
      break;
    case "58":
      char_instance = new kirara(base_status, parameter);
      break;
    case "62":
      char_instance = new travelardendro(base_status, parameter);
      break;
    case "77":
      char_instance = new chiori(base_status, parameter);
      break;
    case "75":
      char_instance = new Navia(base_status, parameter);
      break;
    case "63":
      char_instance = new aratakiitto(base_status, parameter);
      break;
    case "64":
      char_instance = new albedo(base_status, parameter);
      break;
    case "65":
      char_instance = new zhongli(base_status, parameter);
      break;
    case "68":
      char_instance = new noelle(base_status, parameter);
      break;
    case "69":
      char_instance = new ningguang(base_status, parameter);
      break;
    case "70":
      char_instance = new travelergeo(base_status, parameter);
      break;
    default:
      // 未知のキャラクターIDに対する処理を追加することもできます
      break;
  }
  
  return char_instance;
}

async function create_weapon_instance(base_status) {
  let weapon_instance;
  switch (selectedWeaponId) {
    case "0":
      weapon_instance = new LightofFoliarIncision(base_status);
      break;
    case "1":
      weapon_instance = new KeyofKhajNisut(base_status);
      break;
    case "2":
      weapon_instance = new HaranGeppakuFutsu(base_status);
      break;
    case "3":
      weapon_instance = new MistsplitterReforged(base_status);
      break;
    case "4":
      weapon_instance = new FreedomSworn(base_status);
      break;
    case "5":
      weapon_instance = new PrimordialJadeCutter(base_status);
      break;
    case "6":
      weapon_instance = new SummitShaper(base_status);
      break;
    case "7":
      weapon_instance = new SkywardBlade(base_status);
      break;
    case "8":
      weapon_instance = new AquilaFavonia(base_status);
      break;
    case "9":
      weapon_instance = new TheDockhandsAssistant(base_status);
      break;
    case "10":
      weapon_instance = new WolfFang(base_status);
      break;
    case "11":
      weapon_instance = new FleuveCendreFerryman(base_status);
      break;
    case "12":
      weapon_instance = new FinaleoftheDeep(base_status);
      break;
    case "13":
      weapon_instance = new ToukabouShigure(base_status);
      break;
    case "14":
      weapon_instance = new XiphosMoonlight(base_status);
      break;
    case "15":
      weapon_instance = new SapwoodBlade(base_status);
      break;
    case "16":
      weapon_instance = new KagotsurubeIsshin(base_status);
      break;
    case "17":
      weapon_instance = new CinnabarSpindle(base_status);
      break;
    case "18":
      weapon_instance = new AmenomaKageuchi(base_status);
      break;
    case "19":
      weapon_instance = new TheAlleyFlash(base_status);
      break;
    case "20":
      weapon_instance = new FesteringDesire(base_status);
      break;
    case "21":
      weapon_instance = new TheBlackSword(base_status);
      break;
    case "22":
      weapon_instance = new BlackcliffLongsword(base_status);
      break;
    case "23":
      weapon_instance = new IronSting(base_status);
      break;
    case "24":
      weapon_instance = new PrototypeRancour(base_status);
      break;
    case "25":
      weapon_instance = new LionsRoar(base_status);
      break;
    case "26":
      weapon_instance = new RoyalLongsword(base_status);
      break;
    case "27":
      weapon_instance = new SacrificialSword(base_status);
      break;
    case "28":
      weapon_instance = new TheFlute(base_status);
      break;
    case "29":
      weapon_instance = new FavoniusSword(base_status);
      break;
    case "30":
      weapon_instance = new SkyriderSword(base_status);
      break;
    case "31":
      weapon_instance = new FilletBlade(base_status);
      break;
    case "32":
      weapon_instance = new TravelersHandySword(base_status);
      break;
    case "33":
      weapon_instance = new HarbingerofDawn(base_status);
      break;
    case "34":
      weapon_instance = new CoolSteel(base_status);
      break;
    case "156":
      weapon_instance = new Verdict(base_status);
      break;
    case "35":
      weapon_instance = new BeaconoftheReedSea(base_status);
      break;
    case "36":
      weapon_instance = new RedhornStonethresher(base_status);
      break;
    case "37":
      weapon_instance = new SongofBrokenPines(base_status);
      break;
    case "38":
      weapon_instance = new TheUnforged(base_status);
      break;
    case "39":
      weapon_instance = new WolfsGravestone(base_status);
      break;
    case "157":
      weapon_instance = new UltimateTyrantSuperDevilSword(base_status);
      break;
    case "40":
      weapon_instance = new SkywardPride(base_status);
      break;
    case "41":
      weapon_instance = new PortablePowerSaw(base_status);
      break;
    case "42":
      weapon_instance = new TalkingStick(base_status);
      break;
    case "43":
      weapon_instance = new TidalShadow(base_status);
      break;
    case "44":
      weapon_instance = new MailedFlower(base_status);
      break;
    case "45":
      weapon_instance = new MakhairaAquamarine(base_status);
      break;
    case "46":
      weapon_instance = new ForestRegalia(base_status);
      break;
    case "47":
      weapon_instance = new Akuoumaru(base_status);
      break;
    case "48":
      weapon_instance = new LuxuriousSeaLoad(base_status);
      break;
    case "49":
      weapon_instance = new KatsuragikiriNagamasa(base_status);
      break;
    case "50":
      weapon_instance = new LithicBlade(base_status);
      break;
    case "51":
      weapon_instance = new SnowTombedStarsilver(base_status);
      break;
    case "52":
      weapon_instance = new SerpentSpine(base_status);
      break;
    case "53":
      weapon_instance = new BlackcliffSlasher(base_status);
      break;
    case "54":
      weapon_instance = new Whiteblind(base_status);
      break;
    case "55":
      weapon_instance = new PrototypeArchaic(base_status);
      break;
    case "57":
      weapon_instance = new Rainslasher(base_status);
      break;
    case "58":
      weapon_instance = new SacrificialGreatsword(base_status);
      break;
    case "59":
      weapon_instance = new TheBell(base_status);
      break;
    case "60":
      weapon_instance = new FavoniusGreatsword(base_status);
      break;
    case "61":
      weapon_instance = new SkyriderGreatsword(base_status);
      break;
    case "62":
      weapon_instance = new DebateClub(base_status);
      break;
    case "63":
      weapon_instance = new WhiteIronGreatsword(base_status);
      break;
    case "64":
      weapon_instance = new BloodtaintedGreatsword(base_status);
      break;
    case "65":
      weapon_instance = new FerrousShadow(base_status);
      break;
    case "66":
      weapon_instance = new StaffoftheScarletSands(base_status);
      break;
    case "67":
      weapon_instance = new CalamityQueller(base_status);
      break;
    case "68":
      weapon_instance = new EngulfingLightning(base_status);
      break;
    case "69":
      weapon_instance = new StaffofHoma(base_status);
      break;
    case "70":
      weapon_instance = new VortexVanguisher(base_status);
      break;
    case "71":
      weapon_instance = new SkywardSpine(base_status);
      break;
    case "72":
      weapon_instance = new PrimordialJadeWingedSpear(base_status);
      break;
    case "73":
      weapon_instance = new BalladoftheFjords(base_status);
      break;
    case "74":
      weapon_instance = new RightfulReward(base_status);
      break;
    case "75":
      weapon_instance = new MissiveWindspear(base_status);
      break;
    case "76":
      weapon_instance = new Moonpiercer(base_status);
      break;
    case "77":
      weapon_instance = new WavebreakersFin(base_status);
      break;
    case "78":
      weapon_instance = new TheCatch(base_status);
      break;
    case "79":
      weapon_instance = new KitainCrossSpear(base_status);
      break;
    case "80":
      weapon_instance = new LithicSpear(base_status);
      break;
    case "81":
      weapon_instance = new DragonspineSpear(base_status);
      break;
    case "83":
      weapon_instance = new FavoniusLance(base_status);
      break;
    case "84":
      weapon_instance = new Deathmatch(base_status);
      break;
    case "85":
      weapon_instance = new BlackcliffPole(base_status);
      break;
    case "86":
      weapon_instance = new CrescentPike(base_status);
      break;
    case "87":
      weapon_instance = new PrototypeStarglitter(base_status);
      break;
    case "88":
      weapon_instance = new DragonsBane(base_status);
      break;
    case "89":
      weapon_instance = new BlackTassel(base_status);
      break;
    case "90":
      weapon_instance = new WhiteTassel(base_status);
      break;
    case "91":
      weapon_instance = new TheFirstGreatMagic(base_status);
      break;
    case "92":
      weapon_instance = new HuntersPath(base_status);
      break;
    case "93":
      weapon_instance = new AquaSimulacra(base_status);
      break;
    case "94":
      weapon_instance = new PolarStar(base_status);
      break;
    case "95":
      weapon_instance = new ThunderingPulse(base_status);
      break;
    case "96":
      weapon_instance = new ElegyfortheEnd(base_status);
      break;
    case "97":
      weapon_instance = new AmosBow(base_status);
      break;
    case "98":
      weapon_instance = new SkywardHarp(base_status);
      break;
    case "99":
      weapon_instance = new ScionoftheBlazingSun(base_status);
      break;
    case "100":
      weapon_instance = new SongofStillness(base_status);
      break;
    case "101":
      weapon_instance = new IbisPiercer(base_status);
      break;
    case "102":
      weapon_instance = new KingsSquire(base_status);
      break;
    case "103":
      weapon_instance = new EndoftheLine(base_status);
      break;
    case "104":
      weapon_instance = new FadingTwilight(base_status);
      break;
    case "105":
      weapon_instance = new MouunsMoon(base_status);
      break;
    case "106":
      weapon_instance = new Hamayumi(base_status);
      break;
    case "107":
      weapon_instance = new MitternachtsWaltz(base_status);
      break;
    case "108":
      weapon_instance = new WindblumeOde(base_status);
      break;
    case "109":
      weapon_instance = new AlleyHunter(base_status);
      break;
    case "110":
      weapon_instance = new TheViridescentHunt(base_status);
      break;
    case "111":
      weapon_instance = new BlackcliffWarbow(base_status);
      break;
    case "112":
      weapon_instance = new CompoundBow(base_status);
      break;
    case "113":
      weapon_instance = new PrototypeCrescent(base_status);
      break;
    case "114":
      weapon_instance = new Rust(base_status);
      break;
    case "116":
      weapon_instance = new SacrificialBow(base_status);
      break;
    case "117":
      weapon_instance = new TheStringless(base_status);
      break;
    case "118":
      weapon_instance = new FavoniusWarbow(base_status);
      break;
    case "119":
      weapon_instance = new Messenger(base_status);
      break;
    case "120":
      weapon_instance = new Slingshot(base_status);
      break;
    case "121":
      weapon_instance = new RecurveBow(base_status);
      break;
    case "122":
      weapon_instance = new SharpshootersOath(base_status);
      break;
    case "123":
      weapon_instance = new RavenBow(base_status);
      break;
    case "154":
      weapon_instance = new CashflowSupervision(base_status);
      break;
    case "124":
      weapon_instance = new TomeoftheEternalFlow(base_status);
      break;
    case "125":
      weapon_instance = new JadefallsSplendor(base_status);
      break;
    case "126":
      weapon_instance = new TulaytullahsRemembrance(base_status);
      break;
    case "127":
      weapon_instance = new AThousandFloatingDreams(base_status);
      break;
    case "128":
      weapon_instance = new KagurasVerity(base_status);
      break;
    case "129":
      weapon_instance = new EverlastingMoonglow(base_status);
      break;
    case "130":
      weapon_instance = new MemoryofDust(base_status);
      break;
    case "131":
      weapon_instance = new LostPrayertotheSacredWinds(base_status);
      break;
    case "132":
      weapon_instance = new SkywardAtlas(base_status);
      break;
    case "133":
      weapon_instance = new BalladOfTheBoundlessBlue(base_status);
      break;
    case "134":
      weapon_instance = new SacrificialJade(base_status);
      break;
    case "135":
      weapon_instance = new FlowingPurity(base_status);
      break;
    case "136":
      weapon_instance = new WanderingEvenstar(base_status);
      break;
    case "137":
      weapon_instance = new FruitofFulfillment(base_status);
      break;
    case "138":
      weapon_instance = new OathswornEye(base_status);
      break;
    case "139":
      weapon_instance = new HakushinRing(base_status);
      break;
    case "140":
      weapon_instance = new DodocoTales(base_status);
      break;
    case "141":
      weapon_instance = new WineandSong(base_status);
      break;
    case "142":
      weapon_instance = new Frostbearer(base_status);
      break;
    case "143":
      weapon_instance = new EyeofPerception(base_status);
      break;
    case "144":
      weapon_instance = new BlackcliffAgate(base_status);
      break;
    case "145":
      weapon_instance = new MappaMare(base_status);
      break;
    case "146":
      weapon_instance = new PrototypeAmber(base_status);
      break;
    case "147":
      weapon_instance = new SolarPearl(base_status);
      break;
    case "149":
      weapon_instance = new SacrificialFragments(base_status);
      break;
    case "150":
      weapon_instance = new TheWidsith(base_status);
      break;
    case "151":
      weapon_instance = new FavoniusCodex(base_status);
      break;
    case "152":
      weapon_instance = new ThrillingTalesofDragonSlayers(base_status);
      break;
    case "153":
      weapon_instance = new MagicGuide(base_status);
      break;
    case "155":
      weapon_instance = new SplendorOfTranquilWaters(base_status);
      break;
    case "158":
      weapon_instance = new UrakuMisugiri(base_status);
      break;
    case "159":
      weapon_instance = new Absolution(base_status);
      break;
    case "160":
      weapon_instance = new SurfsUp(base_status);
      break;
    case "161":
      weapon_instance = new FluteOfEzpitzal(base_status);
      break;
    case "162":
      weapon_instance = new EarthShaker(base_status);
      break;
    case "163":
      weapon_instance = new FootprintoftheRainbow(base_status);
      break;
    case "164":
      weapon_instance = new RingofYaxche(base_status);
      break;
    default:
      // 未知の武器IDに対する処理を追加することもできます
      break;
  }
  return weapon_instance;
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


async function calculateAndStoreResult(resultList) {
  // 降順にソート
  resultList.sort((a, b) => b[0] - a[0]);
  // 上位5つのみを取得
  const topFive = resultList.slice(0, 5);
  return topFive;
}

async function createAf(partsIndex, depend_index) {
    let fixBuffList = [7, 8, 9];
    let rateList = [0, 1, 2, 3, 4];
    let criticalList = [5, 6];
    let subStatusList = [];
    let mainBuffList = [];
    const subStatusBaseIndex = [0.583, 0.729, 2.331, 0.648, 0.583, 0.389, 0.777, 29.875, 1.945, 2.315];

    const random_number_float = Math.random();

    if (partsIndex === 0) {
        mainBuffList = [7, 160 * subStatusBaseIndex[7]];
    } else if (partsIndex === 1) {
        mainBuffList = [8, 160 * subStatusBaseIndex[8]];
    } else if (partsIndex === 2) {
        if (random_number_float < 0.26666666) {
            mainBuffList = [0, 80 * subStatusBaseIndex[0]];
        } else if (random_number_float < 0.53333333) {
            mainBuffList = [1, 80 * subStatusBaseIndex[1]];
        } else if (random_number_float < 0.8) {
            mainBuffList = [4, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.9) {
            mainBuffList = [2, 80 * subStatusBaseIndex[2]];
        } else {
            mainBuffList = [3, 80 * subStatusBaseIndex[3]];
        }
    } else if (partsIndex === 3) {
        if (random_number_float < 0.19166666) {
            mainBuffList = [0, 80 * subStatusBaseIndex[0]];
        } else if (random_number_float < 0.38333333) {
            mainBuffList = [1, 80 * subStatusBaseIndex[1]];
        } else if (random_number_float < 0.575) {
            mainBuffList = [4, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.6) {
            mainBuffList = [2, 80 * subStatusBaseIndex[2]];
        } else if (random_number_float < 0.65) {
            mainBuffList = [10, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.7) {
            mainBuffList = [11, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.75) {
            mainBuffList = [12, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.8) {
            mainBuffList = [13, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.85) {
            mainBuffList = [14, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.9) {
            mainBuffList = [15, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.95) {
            mainBuffList = [16, 80 * subStatusBaseIndex[4]];
        } else {
            mainBuffList = [17, 100 * subStatusBaseIndex[4]];
        }
    } else if (partsIndex === 4) {
        if (random_number_float < 0.22) {
            mainBuffList = [0, 80 * subStatusBaseIndex[0]];
        } else if (random_number_float < 0.44) {
            mainBuffList = [1, 80 * subStatusBaseIndex[1]];
        } else if (random_number_float < 0.66) {
            mainBuffList = [4, 80 * subStatusBaseIndex[4]];
        } else if (random_number_float < 0.7) {
            mainBuffList = [2, 80 * subStatusBaseIndex[2]];
        } else if (random_number_float < 0.8) {
            mainBuffList = [5, 80 * subStatusBaseIndex[5]];
        } else if (random_number_float < 0.9) {
            mainBuffList = [6, 80 * subStatusBaseIndex[6]];
        } else {
            mainBuffList = [18, 0];
        }
    }

    if (partsIndex > 1 && depend_index[mainBuffList[0]] == 0)
    {
        return 1;
    } 
    

    const value = mainBuffList[0];

    if (value < 10) {
        const lists = [fixBuffList, rateList, criticalList];
    
        for (const list of lists) {
            const index = list.indexOf(value);
            if (index !== -1) {
                list.splice(index, 1);
                break;
            }
        }
    }
    

    for (let i = 0; i < 4; i++) {
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

    const optionNum = Math.random() < 0.2 ? 5 : 4;

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


async function monte_carlo_calculate()
{
    const calculationMessage = document.getElementById("calculationMessage")
    calculationMessage.style.visibility = "visible";
    console.time('myTimer'); 
    const input_check = identify_condition();
    if (input_check ==1)
    {
        calculationMessage.style.visibility = "hidden";
        return;
    }

    const char_parameter = await import_char_parameter();

    const base_status = await calculate_base_status();
    const af_main_status_buff = await calculate_af_main_status_buff();
    const depend_status = await calculate_depend_status();
    const team_fix_buff = await calculate_team_fix_buff(base_status);
    const team_dynamic_buff = await calculate_team_dynamic_buff(base_status);
    const TryCount = 2000000;
    let my_result_status = await calculate_my_exp_dmg(base_status,af_main_status_buff,depend_status);
    let my_exp_dmg = my_result_status[8];
    let response = "";
    let MyAfStatusSave = await SetMyAfStatus();
    let MyAfStatus;
    let RandomAfIndex;
    let StrongestAf;
    let DependSubStatusIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    document.getElementById("response").innerHTML = response;
    if (my_exp_dmg < 0 || !Number.isFinite(my_exp_dmg))
    {
        calculationMessage.style.visibility = "hidden";
        response ="ダメージ期待値が異常値を示しています。再入力してください。"
        document.getElementById("response").innerHTML = response;
        return response;
    }
    
    if (af_score < 0 || af_score > 350 || !Number.isFinite(af_score))
    {
        calculationMessage.style.visibility = "hidden";
        response = "  聖遺物スコア: " + af_score + "<br>" + "聖遺物スコアが異常値を示しています。再入力してください。"
        document.getElementById("response").innerHTML = response;
        return response;
    }

    let base_parameter;
    let exp_dmg;
    let fixed_status = [0,0,0,0,0,0,0,0];
    let result_status = [0,0,0,0,0,0,0,0];
    let AfPartsNum = [0,0,0,0,0];

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
    let RequwireElmCharge = parseInt(document.getElementById("RequwireElmCharge").value * 10) / 1000;
    if (RequwireElmCharge > 1) {
      depend_status[3] = 1;
    }
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

    for (let j= 0; j < TryCount; j++)
    {
        RandomAfIndex = Math.floor(Math.random() * 5);
        MyAfStatus = MyAfStatusSave.slice();
        afInfo = await createAf(RandomAfIndex, DependSubStatusIndex);
        if (afInfo === 1)
        {
          continue
        }
        MyAfStatus[RandomAfIndex] = afInfo;
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
            if (result_status[3] < RequwireElmCharge)
            {
              continue;
            }
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
        if (exp_dmg > my_exp_dmg)
        {
            AfPartsNum[RandomAfIndex] += 1;
        }   
    }

    calculationMessage.style.visibility = "hidden";
    const ConsumeNum = parseInt(document.getElementById("UseItemNum").value);
    let SpendDays = AfPartsNum.map(num => num / TryCount)
    let ItemNumResult = [];
    let DaysNumResult = [];
    let RankClassList = [];
    let RankList = [];

    for (let a = 0; a < 5; a++)
    {
      const possib = 1 / SpendDays[a];
      if (possib > 100000 -1 )
      {
        ItemNumResult.push("測定不能！");
        DaysNumResult.push("測定不能！");
      }
      else
      {
        ItemNumResult.push(possib.toFixed() + "個");
        DaysNumResult.push((possib / ConsumeNum).toFixed() + "日");
      }

      let AfScore = 4 * Math.log(possib / 5) + 16
      if (AfScore > 50)
      {
        RankList.push("SS");
        RankClassList.push("rankSS");
      }
      else if (AfScore > 45)
      {
        RankList.push("S");
        RankClassList.push("rankS");
      }
      else if (AfScore > 40)
      {
        RankList.push("A");
        RankClassList.push("rankA");
      }
      else if (AfScore > 35)
      {
        RankList.push("B");
        RankClassList.push("rankB");
      }
      else
      {
        RankList.push("C");
        RankClassList.push("rankC");
      }
    }
    const SumPossib = 1 / (SpendDays[0] + SpendDays[1] + SpendDays[2] + SpendDays[3] + SpendDays[4]);
    if (SumPossib > 100000 -1 )
    {
      ItemNumResult.push("測定不能！");
      DaysNumResult.push("測定不能！");
    }
    else
    {
      ItemNumResult.push(SumPossib.toFixed() + "個");
      DaysNumResult.push((SumPossib / ConsumeNum).toFixed() + "日");
    }
    
    let AlbodyAfScore = 22 * Math.log(SumPossib / 5) + 105;

    if (AlbodyAfScore > 220)
    {
      RankList.push("SS");
      RankClassList.push("rankSS");
    }
    else if (AlbodyAfScore > 200)
    {
      RankList.push("S");
      RankClassList.push("rankS");
    }
    else if (AlbodyAfScore > 180)
    {
      RankList.push("A");
      RankClassList.push("rankA");
    }
    else if (AlbodyAfScore > 160)
    {
      RankList.push("B");
      RankClassList.push("rankB");
    }
    else
    {
      RankList.push("C");
      RankClassList.push("rankC");
    }

    document.getElementById("clock1").innerHTML = ItemNumResult[0];
    document.getElementById("clock2").innerHTML = ItemNumResult[1];
    document.getElementById("clock3").innerHTML = ItemNumResult[2];
    document.getElementById("clock4").innerHTML = ItemNumResult[3];
    document.getElementById("clock5").innerHTML = ItemNumResult[4];
    document.getElementById("clock6").innerHTML = ItemNumResult[5];
    document.getElementById("goblet1").innerHTML = DaysNumResult[0];
    document.getElementById("goblet2").innerHTML = DaysNumResult[1];
    document.getElementById("goblet3").innerHTML = DaysNumResult[2];
    document.getElementById("goblet4").innerHTML = DaysNumResult[3];
    document.getElementById("goblet5").innerHTML = DaysNumResult[4];
    document.getElementById("goblet6").innerHTML = DaysNumResult[5];
    circlet1.classList.remove("rankSS", "rankS", "rankA", "rankB", "rankC");
    document.getElementById("circlet1").classList.add(RankClassList[0]);
    circlet2.classList.remove("rankSS", "rankS", "rankA", "rankB", "rankC");
    document.getElementById("circlet2").classList.add(RankClassList[1]);
    circlet3.classList.remove("rankSS", "rankS", "rankA", "rankB", "rankC");
    document.getElementById("circlet3").classList.add(RankClassList[2]);
    circlet4.classList.remove("rankSS", "rankS", "rankA", "rankB", "rankC");
    document.getElementById("circlet4").classList.add(RankClassList[3]);
    circlet5.classList.remove("rankSS", "rankS", "rankA", "rankB", "rankC");
    document.getElementById("circlet5").classList.add(RankClassList[4]);
    circlet6.classList.remove("rankSS", "rankS", "rankA", "rankB", "rankC");
    document.getElementById("circlet6").classList.add(RankClassList[5]);
    document.getElementById("circlet1").innerHTML = RankList[0];
    document.getElementById("circlet2").innerHTML = RankList[1];
    document.getElementById("circlet3").innerHTML = RankList[2];
    document.getElementById("circlet4").innerHTML = RankList[3];
    document.getElementById("circlet5").innerHTML = RankList[4];
    document.getElementById("circlet6").innerHTML = RankList[5];
    
    console.timeEnd('myTimer'); // タイマーを終了し、経過時間をコンソールに表示
}

function DisplayCharacter()
{
  const calculationMessage = document.getElementById("calculationMessage")
  calculationMessage.style.visibility = "visible";
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
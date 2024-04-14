let base_status = [0,0,0,0,0,0,0,0];
let char_base_status = [0,0,0,0,0,0,0,0];
let weapon_base_status = [0,0,0,0,0,0,0,0];
let depend_status = [0,0,1,0,1,1,1];
let char_depend_status = [0,0,0,0,0,0,0];
let weapon_depend_status = [0,0,0,0,0,0,0];
let af_score = 0;
let attack_method = 0;
let attack_method_index = 0;
const attack_method_name = ["通常攻撃", "重撃", "落下攻撃", "元素スキル", "元素爆発"];
const element = ["炎元素", "水元素", "氷元素", "雷元素", "風元素", "草元素", "岩元素"]
const DisplayCharName = ["ディシア","宵宮","胡桃","クレー","ディルック","トーマ","煙緋","辛炎","ベネット","香菱",
                            "アンバー","ニィロウ","夜蘭","神里綾人","珊瑚宮心海","タルタリヤ","モナ","キャンディス","バーバラ","行秋",
                            "申鶴","神里綾華","エウルア","甘雨","七七","アーロイ","ミカ","レイラ","ロサリア","ディオナ",
                            "重雲","ガイア","セノ","八重神子","雷電将軍","刻晴","ドリー","久岐忍","九条裟羅","フィッシュル",
                            "北斗","レザー","リサ","雷旅人","放浪者","楓原万葉 ","魈","ウェンティ","ジン","ファルザン",
                            "鹿野院平蔵","早柚","スクロース","風旅人","白朮","アルハイゼン","ナヒーダ","ティナリ","綺良々","カーヴェ",
                            "ヨォーヨ","コレイ","草旅人","荒瀧一斗","アルベド","鍾離","雲菫","ゴロー","ノエル","凝光",
                            "岩旅人", "リネ", "ヌヴィレット", "リオセスリ", "フリーナ", "ナヴィア", "嘉明", "閑雲"
];
const DisplayWeaponName = [ "萃光の裁葉", "聖顕の鍵", "波乱月白経津", "霧切の廻光", "蒼古なる自由への誓い", "磐岩結緑", "斬山の刃", "天空の刃", "風鷹剣", "船渠剣",
                            "狼牙", "サーンドルの渡し守", "海淵のフィナーレ", "東花坊時雨", "サイフォスの月明かり", "原木刀", "籠釣瓶一心", "シナバースピンドル", "天目影打", "ダークアレイの閃光",
                            "腐植の剣", "黒剣", "黒岩の長剣", "鉄蜂の刺し", "斬岩·試作", "匣中龍吟", "旧貴族長剣", "祭礼の剣", "笛の剣", "西風剣",
                            "飛天御剣", "チ虎魚の刀", "旅道の剣", "黎明の神剣", "冷刃", "葦海の標", "赤角石塵滅砕", "松韻の響く頃", "無工の剣", "狼の末路",
                            "天空の傲", "携帯型チェーンソー", "話死合い棒", "タイダル・シャドー", "鉄彩の花", "マカイラの水色", "森林のレガリア", "惡王丸", "銜玉の海皇", "桂木斬長正",
                            "千岩古剣", "雪葬の星銀", "螭龍の剣", "黒岩の斬刀", "白影の剣", "古華·試作", "旧貴族大剣", "雨裁", "祭礼の大剣", "鐘の剣",
                            "西風大剣", "飛天大御剣", "理屈責め", "白鉄の大剣", "龍血を浴びた剣", "鉄影段平", "赤砂の杖", "息災", "草薙の稲光", "護摩の杖",
                            "破天の槍", "天空の脊", "和璞鳶", "フィヨルドの歌	", "正義の報酬", "風信の矛", "ムーンピアサー", "斬波のひれ長", "「漁獲」", "喜多院十文字槍",
                            "千岩長槍", "ドラゴンスピア", "旧貴族猟槍", "西風長槍", "死闘の槍", "黒岩の突槍", "流月の針", "星鎌·試作", "匣中滅龍", "黒纓槍",
                            "白纓槍", "始まりの大魔術", "狩人の道", "若水", "冬極の白星", "飛雷の鳴弦", "終焉を嘆く詩", "アモスの弓", "天空の翼", "烈日の後嗣",
                            "静寂の唄", "トキの嘴", "王の近侍", "竭沢", "落霞", "曚雲の月", "破魔の弓", "幽夜のワルツ", "風花の頌歌", "ダークアレイの狩人",
                            "蒼翠の狩猟弓", "黒岩の戦弓", "リングボウ", "澹月·試作", "弓蔵", "旧貴族長弓", "祭礼の弓", "絶弦", "西風猟弓", "文使い",
                            "弾弓", "リカーブボウ", "シャープシューターの誓い", "鴉羽の弓", "久遠流転の大典", "碧落の瓏", "トゥライトゥーラの記憶", "千夜に浮かぶ夢", "神楽の真意", "不滅の月華",
                            "浮世の錠", "四風原典", "天空の巻", "果てなき紺碧の唄", "古祠の瓏", "純水流華", "彷徨える星", "満悦の実", "誓いの明瞳", "白辰の輪",
                            "ドドコの物語", "ダークアレイの酒と詩", "冬忍びの実", "昭心", "黒岩の緋玉", "万国諸海の図譜", "金珀·試作", "匣中日月", "旧貴族秘法録", "祭礼の断片",
                            "流浪楽章", "西風秘典", "龍殺しの英傑譚", "魔導緒論", "凛流の監視者", "静水流転の輝き", "裁断", "スーパーアルティメット覇王魔剣"
];
const char_name = ["dehya","yoimiya","hutao","klee","diluc","thoma","yanfei","xinyan","bennett","xiangling",
                   "amber","nirou","yelan","kamisatoayato","sangonomiyakokomi","tartaglia","mona","candace","barbara","xingqiu",
                   "shenhe","kamisatoayaka","eula","ganyu","qiqi","aloy","mika","layla","rosaria","diona",
                   "chongyun","kaeya","cyno","yaemiko","raidenshougun","keqing","dori","kukishinobu","kujousara","fischl",
                   "beidou","razor","lisa","travelarelectro","wanderer","kazuhakaedehara","xiao","venti","jean","faruzan",
                   "shikanoinheizou","sayu","sucrose","traveraranemo","baizhu","alhaitham","nahida","tighnari","kirara","kaveh",
                   "yaoyao","collei","travelardendro","aratakiitto","albedo","zhongli","yunjin","gorou","noelle","ningguang","travelergeo",
                   "Lyney", "Neuvillette", "Wriothesley", "Furina", "Navia", "gaming", "Xianyun"
                  ];
const weapon_name = [ "LightofFoliarIncision", "KeyofKhajNisut", "HaranGeppakuFutsu", "MistsplitterReforged", "FreedomSworn", "PrimordialJadeCutter", "SummitShaper", "SkywardBlade", "AquilaFavonia", "TheDockhandsAssistant",
                      "WolfFang", "FleuveCendreFerryman", "FinaleoftheDeep", "ToukabouShigure", "XiphosMoonlight", "SapwoodBlade", "KagotsurubeIsshin", "CinnabarSpindle", "AmenomaKageuchi", "TheAlleyFlash",
                      "FesteringDesire", "TheBlackSword", "BlackcliffLongsword", "IronSting", "PrototypeRancour", "LionsRoar", "RoyalLongsword", "SacrificialSword", "TheFlute", "FavoniusSword",
                      "SkyriderSword", "FilletBlade", "TravelersHandySword", "HarbingerofDawn", "CoolSteel", "BeaconoftheReedSea", "RedhornStonethresher", "SongofBrokenPines", "TheUnforged", "WolfsGravestone",
                      "SkywardPride", "PortablePowerSaw", "TalkingStick", "TidalShadow", "MailedFlower", "MakhairaAquamarine", "ForestRegalia", "Akuoumaru", "LuxuriousSeaLoad", "KatsuragikiriNagamasa",
                      "LithicBlade", "SnowTombedStarsilver", "SerpentSpine", "BlackcliffSlasher", "Whiteblind", "PrototypeArchaic", "RoyalGreatsword", "Rainslasher", "SacrificialGreatsword", "TheBell",
                      "FavoniusGreatsword", "SkyriderGreatsword", "DebateClub", "WhiteIronGreatsword", "BloodtaintedGreatsword", "FerrousShadow", "StaffoftheScarletSands", "CalamityQueller", "EngulfingLightning", "StaffofHoma",
                      "VortexVanguisher", "SkywardSpine", "PrimordialJadeWingedSpear", "BalladoftheFjords", "RightfulReward", "MissiveWindspear", "Moonpiercer", "WavebreakersFin", "TheCatch", "KitainCrossSpear",
                      "LithicSpear", "DragonspineSpear", "RoyalSpear", "FavoniusLance", "Deathmatch", "BlackcliffPole", "CrescentPike", "PrototypeStarglitter", "DragonsBane", "BlackTassel",
                      "WhiteTassel", "TheFirstGreatMagic", "HuntersPath", "AquaSimulacra", "PolarStar", "ThunderingPulse", "ElegyfortheEnd", "AmosBow", "SkywardHarp", "ScionoftheBlazingSun",
                      "SongofStillness", "IbisPiercer", "KingsSquire", "EndoftheLine", "FadingTwilight", "MouunsMoon", "Hamayumi", "MitternachtsWaltz", "WindblumeOde", "AlleyHunter",
                      "TheViridescentHunt", "BlackcliffWarbow", "CompoundBow", "PrototypeCrescent", "Rust", "RoyalBow", "SacrificialBow", "TheStringless", "FavoniusWarbow", "Messenger",
                      "Slingshot", "RecurveBow", "SharpshootersOath", "RavenBow", "TomeoftheEternalFlow", "JadefallsSplendor", "TulaytullahsRemembrance", "AThousandFloatingDreams", "KagurasVerity", "EverlastingMoonglow",
                      "MemoryofDust", "LostPrayertotheSacredWinds", "SkywardAtlas", "BalladOfTheBoundlessBlue", "SacrificialJade", "FlowingPurity", "WanderingEvenstar", "FruitofFulfillment", "OathswornEye", "HakushinRing",
                      "DodocoTales", "WineandSong", "Frostbearer", "EyeofPerception", "BlackcliffAgate", "MappaMare", "PrototypeAmber", "SolarPearl", "RoyalGrimoire", "SacrificialFragments",
                      "TheWidsith", "FavoniusCodex", "ThrillingTalesofDragonSlayers", "MagicGuide", "CashflowSupervision", "SplendorOfTranquilWaters", "Verdict", "UltimateTyrantSuperDevilSword"
                    ]


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

async function calculate_char_base_status() 
{
  const char_level = document.getElementById("char_level").value;
  const response = await fetch("./data/character/char_data/" + char_name[selectedCharId] + ".json");
  const data = await response.json();
  const char_base_hp = data.ステータス.基礎HP[char_level];
  let char_base_attck = data.ステータス.基礎攻撃力[char_level];
  const char_base_deff = data.ステータス.基礎防御力[char_level];
  const char_base_elm = data.ステータス.基礎元素熟知[char_level];
  const char_base_elm_charge = 1 + data.ステータス.基礎元素チャージ効率[char_level];
  const char_base_cr = data.ステータス.基礎会心率[char_level];
  const char_base_cd = data.ステータス.基礎会心ダメージ[char_level];
  const dmg_buff_type = parseInt(data.ステータス.基礎ダメージバフ.元素);
  let char_base_dmg_buff = 0;
  if (dmg_buff_type == char_propaty[0])
  {
    char_base_dmg_buff = parseFloat(data.ステータス.基礎ダメージバフ.数値[char_level]);
  }

  if (selectedCharId == 62 || selectedCharId == 70)
  {
    const special_buff_check = document.getElementById("special_buff");
    if(special_buff_check.checked)
    {
      char_base_attck += 3;
    }
  }

  char_depend_status = data.ステータス.依存ステータス;
  char_base_status = [char_base_hp, char_base_deff, char_base_elm, char_base_elm_charge, char_base_attck, char_base_cr, char_base_cd, char_base_dmg_buff];
  return char_base_status;
}

async function calculate_weapon_base_status() 
{
  const weapon_level = document.getElementById("weapon_level").value;
  const response = await fetch("./data/weapon/weapon_data/" + weapon_name[selectedWeaponId] + ".json");
  const data = await response.json();
  const weapon_base_hp = data.ステータス.基礎HP[weapon_level];
  const weapon_base_attck = data.ステータス.基礎攻撃力[weapon_level];
  const weapon_base_deff = data.ステータス.基礎防御力[weapon_level];
  const weapon_base_elm = data.ステータス.基礎元素熟知[weapon_level];
  const weapon_base_elm_charge = data.ステータス.基礎元素チャージ効率[weapon_level];
  const weapon_base_cr = data.ステータス.基礎会心率[weapon_level];
  const weapon_base_cd = data.ステータス.基礎会心ダメージ[weapon_level];
  const dmg_buff_type = parseInt(data.ステータス.基礎ダメージバフ.元素);
  let weapon_base_dmg_buff = 0;
  if (dmg_buff_type == char_propaty[0])
  {
    weapon_base_dmg_buff = parseFloat(data.ステータス.基礎ダメージバフ.数値[weapon_level]);
  }
  weapon_depend_status = data.ステータス.依存ステータス;
  weapon_base_status = [weapon_base_hp, weapon_base_deff, weapon_base_elm, weapon_base_elm_charge, weapon_base_attck, weapon_base_cr, weapon_base_cd, weapon_base_dmg_buff];
  return weapon_base_status;
}

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

async function calculate_af_main_status_buff() 
{
  const clock_mainstatus = parseInt(document.getElementById("clock_mainstatus").value);
  const goblet_mainstatus = parseInt(document.getElementById("goblet_mainstatus").value);
  const circlet_mainstatus = parseInt(document.getElementById("circlet_mainstatus").value);
  const af_main_status = [0.466, 0.583, 187, 51.8, 0.466, 31.1, 62.2, 0.466, 0.583];
  let set_main_status = [0,0,0,0,0,0,0,0,0];
  let af_main_status_buff = [0,0,0,0,0,0,0,0,0];
  set_main_status[clock_mainstatus] = set_main_status[clock_mainstatus] + 1;
  set_main_status[goblet_mainstatus] = set_main_status[goblet_mainstatus] + 1;
  set_main_status[circlet_mainstatus] = set_main_status[circlet_mainstatus] + 1;
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
    af_score_distribution[7] = af_score_distribution[7] + af_score_distribution[n];
  }
  return af_score_distribution
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
  const char_response = await fetch("./data/character/char_data/" + char_name[selectedCharId] + ".json");
  const char_data = await char_response.json();
  if (attack_method != 0)
 {
  char_propaty[0] = char_data[attack_method_name[attack_method_index]]["元素"];
  const char_depend_status = char_data[attack_method_name[attack_method_index]].依存ステータス;;
  const weapon_response = await fetch("./data/weapon/weapon_data/" + weapon_name[selectedWeaponId] + ".json");
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
  fixed_status[0] = bs[0] * (1 + sd[0] * 3 / 400 + amsb[0]) + 4780;
  fixed_status[1] = bs[1] * (1 + sd[1] * 3 / 320 + amsb[1]);
  fixed_status[2] = bs[2] + sd[2] * 3 + amsb[2];
  fixed_status[3] = bs[3] + sd[3] / 120 + amsb[3]/100;
  fixed_status[4] = bs[4] * (1 + sd[4] * 3 / 400 + amsb[4]) + 311;
  fixed_status[5] = bs[5] + sd[5] / 200 + amsb[5] / 100;
  fixed_status[6] = bs[6] + sd[6] / 100 + amsb[6] / 100;
  fixed_status[7] = bs[7] + amsb[7];
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

  const char_level = document.getElementById("char_level").value;
  const char_response = await fetch("./data/character/char_data/" + char_name[selectedCharId] + ".json");
  const char_data = await char_response.json();
  const char_base_hpper = parseFloat(char_data["ステータス"]["基礎HP％"][char_level]);
  const char_base_attackper = parseFloat(char_data["ステータス"]["基礎攻撃力％"][char_level]);
  const char_base_deffper = parseFloat(char_data["ステータス"]["基礎防御力％"][char_level]);

  const weapon_level = document.getElementById("weapon_level").value;
  const weapon_response = await fetch("./data/weapon/weapon_data/" + weapon_name[selectedWeaponId] + ".json");
  const weapon_data = await weapon_response.json();
  const weapon_base_hpper = parseFloat(weapon_data["ステータス"]["基礎HP％"][weapon_level]);
  const weapon_base_attackper = parseFloat(weapon_data["ステータス"]["基礎攻撃力％"][weapon_level]);
  const weapon_base_deffper = parseFloat(weapon_data["ステータス"]["基礎防御力％"][weapon_level]);
  
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
  const af_hp = parseInt(document.getElementById("af_hp").value);//聖遺物HP上昇量
  const af_attck = parseInt(document.getElementById("af_attck").value);//聖遺物攻撃力上昇量
  const af_deff = parseInt(document.getElementById("af_deff").value);//聖遺物防御力上昇量
  const af_elm = parseInt(document.getElementById("af_elm").value);//聖遺物元素熟知上昇量
  const af_elm_charge= parseFloat(document.getElementById("af_elm_charge").value)/100;//聖遺物元素チャージ効率上昇量
  const af_cr= parseFloat(document.getElementById("af_cr").value)/100;//聖遺物会心率上昇量
  const af_cd = parseFloat(document.getElementById("af_cd").value)/100;//聖遺物会心ダメージ上昇量
  const af_buff = [af_hp, af_deff, af_elm, af_elm_charge, af_attck, af_cr, af_cd];
  const base_status = await calculate_base_status();
  const af_main_status_buff = await calculate_af_main_status_buff();
  const char_parameter = await import_char_parameter();
  let zetsuen_check = 0;
  let buff_status = [0,0,0,0,0,0,0,0];
  let team_fix_buff = await calculate_team_fix_buff(base_status);
  let team_dynamic_buff = await calculate_team_dynamic_buff(base_status);
  let fixed_status = base_status.slice();
  let result_status;
  let zetsuen_dmgbuff = 0;
  identify_condition();

  if (selectedImageIds[0] ==17 && selectedImageIds[1] == 17 && attack_method_index == 4)
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
    fixed_status[i] += af_buff[i] + team_fix_buff[i];
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
  await updateStatus(0, result_status, buff_status, af_buff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_hp(fixed_status, result_status) + weapon_instance.calculate_weapon_result_hp(fixed_status, result_status), "hp");
  await updateStatus(1, result_status, buff_status, af_buff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_deff(fixed_status, result_status) + weapon_instance.calculate_weapon_result_deff(fixed_status, result_status), "deff");
  await updateStatus(2, result_status, buff_status, af_buff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_elm(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm(fixed_status, result_status), "elm");
  await updateStatus(3, result_status, buff_status, af_buff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_elm_charge(fixed_status, result_status) + weapon_instance.calculate_weapon_result_elm_charge(fixed_status, result_status), "elm_charge");
  await updateStatus(4, result_status, buff_status, af_buff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_attck(fixed_status, result_status) + weapon_instance.calculate_weapon_result_attck(fixed_status, result_status), "attck");
  await updateStatus(5, result_status, buff_status, af_buff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_cr(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cr(fixed_status, result_status), "cr");
  await updateStatus(6, result_status, buff_status, af_buff, base_status, team_dynamic_buff, (fixed_status, result_status) => char_instance.calculate_char_result_cd(fixed_status, result_status) + weapon_instance.calculate_weapon_result_cd(fixed_status, result_status), "cd");
  
  if(zetsuen_check == 1)
  {
    zetsuen_dmgbuff = calc_zetsuen_buff(fixed_status[3]);
    console.log(zetsuen_dmgbuff);
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
  const talentlevel = document.getElementById("talent-level").value;
  const clock_type = document.getElementById("clock_mainstatus").value;
  const goblet_type = document.getElementById("goblet_mainstatus").value;
  const circlet_type = document.getElementById("circlet_mainstatus").value;
  let response = document.getElementById("response");
  let error_message;
  response.innerHTML = "";
  if (attack_method_type == 0) {
    error_message = "攻撃方法を設定してください";
    response.innerHTML = error_message;
    return 1;
  }
  if (isNaN(talentlevel)) {
    error_message = "天賦レベルを設定してください";
    response.innerHTML = error_message;
    return 1;
  }
  if (isNaN(clock_type)) {
    error_message = "聖遺物-時計のメインステータスを設定してください。";
    response.innerHTML = error_message;
    return 1;
  }
  if (isNaN(goblet_type)) {
    error_message = "聖遺物-杯のメインステータスを設定してください。";
    response.innerHTML = error_message;
    return 1;
  }
  if (isNaN(circlet_type)) {
    error_message = "聖遺物-冠のメインステータスを設定してください。";
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
  
  const levelSelect = document.getElementById("char_level");
  const levelIndex = levelSelect.value;

  // レベルデータの取得
  const levelDataResponse = await fetch("./data/element.json");
  const levelData = await levelDataResponse.json();
  const levelObject = levelData["レベル"];
  const charLevel = levelObject[levelIndex];

  // 敵の情報取得
  const enemyLevel = parseInt(document.getElementById("enemy-level").value);
  const enemyDeffDebuff = parseFloat(document.getElementById("deff-debuff").value) / 100;

  // 防御補正計算
  const deffCorrection = (charLevel + 100) / ((1 - charDebuff[2]) * (1 - charDebuff[1] - weaponDebuff[1] - enemyDeffDebuff) * (enemyLevel + 100) + charLevel + 100);

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
  const af_hp = parseInt(document.getElementById("af_hp").value);//聖遺物HP上昇量
  const af_attck = parseInt(document.getElementById("af_attck").value);//聖遺物攻撃力上昇量
  const af_deff = parseInt(document.getElementById("af_deff").value);//聖遺物防御力上昇量
  const af_elm = parseInt(document.getElementById("af_elm").value);//聖遺物元素熟知上昇量
  const af_elm_charge= parseFloat(document.getElementById("af_elm_charge").value)/100;//聖遺物元素チャージ効率上昇量
  const af_cr= parseFloat(document.getElementById("af_cr").value)/100;//聖遺物会心率上昇量
  const af_cd = parseFloat(document.getElementById("af_cd").value)/100;//聖遺物会心ダメージ上昇量
  const af_buff = [af_hp, af_deff, af_elm, af_elm_charge, af_attck, af_cr, af_cd];
  const char_parameter = await import_char_parameter();
  const reaction_count_list = create_reactioncount_list();
  const reaction_bonus_list = create_reactionbonus_list();
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
    fixed_status[i] = base_status[i] + af_buff[i] + team_fix_buff[i];
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
  console.log(correct_coeff);

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
  console.log(basic_dmg);
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
  const levelSelect = document.getElementById("char_level");
  const level_index = levelSelect.value;
  const talent_level = document.getElementById("talent-level");
  const talent_level_index = talent_level.value;
  const response = await fetch("./data/element.json");
  const levelData = await response.json();
  const levelObject = levelData["レベル"];
  const aggobject = levelData["反応固有値"]; 
  const selectedLevel = levelObject[level_index];
  const agg_fixed_value = aggobject[selectedLevel];
  const char_constellations = document.getElementById("char_constellations");
  const constellations = char_constellations.value;
  const parameter = [selectedLevel, agg_fixed_value, constellations, talent_level_index];
  return parameter;
}

async function DefineMainStatus(DependStatusList) {
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
  const ClockMainStatusIndex = parseInt(document.getElementById("clock_mainstatus").value);
  if (ClockMainStatusIndex == 3)
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
  let list = []; // 初期化
  resultList.forEach(pair => {
      const num = pair[0]; // 数値を取得
      for (let i = 0; i < list.length; i++) {
          if (num > list[i][0]) {
              list.splice(i, 0, pair);
              list = list.slice(0, 5); // 上位5つのみを残す
              break;
          }
      }
      if (list.length < 5) { // listが5未満の場合、末尾に追加
          list.push(pair);
      }
  });
  return list;
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
  let dlt_score;
  let critical_dmg;
  let temp_critical_dmg;
  let excess_crscore;
  let response = "";
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
  fixed_buff[0] = await (char_instance.calculate_char_fixed_hp(fixed_status) + weapon_instance.calculate_weapon_fixed_hp(fixed_status) + team_fix_buff[0]);
  fixed_buff[1] = await (char_instance.calculate_char_fixed_deff(fixed_status) + weapon_instance.calculate_weapon_fixed_deff(fixed_status)+ team_fix_buff[1]);
  fixed_buff[2] = await (char_instance.calculate_char_fixed_elm(fixed_status) + weapon_instance.calculate_weapon_fixed_elm(fixed_status) + team_fix_buff[2]);
  fixed_buff[3] = await (char_instance.calculate_char_fixed_elm_charge(fixed_status) + weapon_instance.calculate_weapon_fixed_elm_charge(fixed_status) + team_fix_buff[3]);
  fixed_buff[4] = await (char_instance.calculate_char_fixed_attck(fixed_status) + weapon_instance.calculate_weapon_fixed_attck(fixed_status) + team_fix_buff[4]);
  fixed_buff[5] = await (char_instance.calculate_char_fixed_cr(fixed_status) + weapon_instance.calculate_weapon_fixed_cr(fixed_status) + team_fix_buff[5]);
  fixed_buff[6] = await (char_instance.calculate_char_fixed_cd(fixed_status) + weapon_instance.calculate_weapon_fixed_cd(fixed_status) + team_fix_buff[6]);
  fixed_buff[7] = await (char_instance.calculate_char_fixed_dmg_buff(fixed_status) + weapon_instance.calculate_weapon_fixed_dmg_buff(fixed_status) + team_fix_buff[7]);

  while (n_count < 30)
  {
    let exp_dmg = 0;
    let temp_exp_dmg = 0;
    n_count = n_count + 1;
    for (let i = 0; i < 8000; i++)
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

    for (let k = 0; k < 5000; k++)
    {
      random_1 = Math.floor(depend_status_index.length * Math.random());
      random_2 = Math.floor(depend_status_index.length * Math.random());
      if (k < 1000)
      {
        dlt_score = 0.1;
      }
      else if (k < 4000)
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
  const MainStatusIndexList = await DefineMainStatus(depend_status);
  let ExpDmgList = [];
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
        for (let i = 0; i < 10000; i++)
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

        for (let k = 0; k < 5000; k++)
        {
          random_1 = Math.floor(depend_status_index.length * Math.random());
          random_2 = Math.floor(depend_status_index.length * Math.random());
          if (k < 1000)
          {
            dlt_score = 0.1;
          }
          else if (k < 4000)
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

  while (n_count < 20)
  {
    let exp_dmg = 0;
    let temp_exp_dmg = 0;
    n_count = n_count + 1;
    for (let i = 0; i < 10000; i++)
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

    for (let k = 0; k < 5000; k++)
    {
      random_1 = Math.floor(depend_status_index.length * Math.random());
      random_2 = Math.floor(depend_status_index.length * Math.random());
      if (k < 1000)
      {
        dlt_score = 0.1;
      }
      else if (k < 4000)
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
  old_score_distribution = save_score_distribute;


  calculationMessage.style.visibility = "hidden";
  let result = "最適化聖遺物スコア： " + optimaize_af_score.toFixed(1) +"<br>" + "ダメージ期待値： " + output_exp_dmg;
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

  for (let i = 1; i <= 5; i++) {
    const ClockId = "clock" + i;
    const GobletId = "goblet" + i;
    const CircletId = "circlet" + i;
    const DmgrateId = "dmgrate" + i;

    document.getElementById(ClockId).innerHTML = main_status_name[ExpDmgList[i-1][1][0]];
    document.getElementById(GobletId).innerHTML = main_status_name[ExpDmgList[i-1][1][1]];
    document.getElementById(CircletId).innerHTML = main_status_name[ExpDmgList[i-1][1][2]];
    document.getElementById(DmgrateId).innerHTML = (ExpDmgList[i-1][0] * 100/ExpDmgList[0][0]).toFixed(1) + "％";

}


  console.log(n_count);
  create_radarchart(depend_status, my_af_score_distribution, save_score_distribute);
  console.timeEnd('myTimer'); // タイマーを終了し、経過時間をコンソールに表示
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
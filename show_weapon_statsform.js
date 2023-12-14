async function show_weapon_statsform() {
  let weaponInfo = document.getElementById("weaponInfo");
  let hp_form = document.getElementById("hp_form");
  let attck_form = document.getElementById("attck_form");
  let deff_form = document.getElementById("deff_form");
  let elm_form = document.getElementById("elm_form");
  let elm_charge_form = document.getElementById("elm_charge_form");
  let cr_form = document.getElementById("cr_form");
  let cd_form = document.getElementById("cd_form");
  let team_hp_form = document.getElementById("team_hp_form");
  let team_hprate_form = document.getElementById("team_hprate_form");
  let team_attack_form = document.getElementById("team_attack_form");
  let team_attackrate_form = document.getElementById("team_attackrate_form");
  let team_deff_form = document.getElementById("team_deff_form");
  let team_deffrate_form = document.getElementById("team_deffrate_form");
  let team_elm_form = document.getElementById("team_elm_form");
  let team_elm_charge_form = document.getElementById("team_elm_charge_form");
  let team_cr_form = document.getElementById("team_cr_form");
  let team_cd_form = document.getElementById("team_cd_form")
  const weapon_rank = document.getElementById("weapon_rank").value;

  hp_form.style.display = "none"; // HPフォームを非表示
  attck_form.style.display = "none"; // 攻撃力フォームを非表示
  deff_form.style.display = "none"; // 防御力フォームを非表示
  elm_form.style.display = "none"; // 元素熟知を非表示
  elm_charge_form.style.display = "none"; // 元素チャージ効率フォームを非表示
  cr_form.style.display = "none"; // 会心率フォームを非表示
  cd_form.style.display = "none"; // 会心ダメージフォームを非表示
  team_hp_form.style.display = "none";
  team_hprate_form.style.display = "none";
  team_attack_form.style.display = "none";
  team_attackrate_form.style.display = "none";
  team_deff_form.style.display = "none";
  team_deffrate_form.style.display = "none";
  team_elm_form.style.display = "none";
  team_elm_charge_form.style.display = "none";
  team_cr_form.style.display = "none";
  team_cd_form.style.display = "none";
  weaponInfo.style.display = "block";

  weaponInfo.innerHTML = "";
  let buff_group;

  let treats;

  if (selectedWeaponId == "127") {
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
  
    const textNode1 = document.createTextNode("　同じ元素のキャラ数　　");
    const textNode2 = document.createTextNode("　異なる元素のキャラ数　");
    const traitContainer = document.createElement("div"); // テキストとチェックボックスを包むコンテナ要素
  
    traitContainer.classList.add("checkbox-container");
    traitContainer.appendChild(traitCheckbox);
    traitContainer.appendChild(traitLabel);
  
    const selectList1 = createSelectList("traitSelect1", 3); // 1つ目のプルダウンリストを生成
    const selectList2 = createSelectList("traitSelect2", 3); // 2つ目のプルダウンリストを生成
  
    weaponInfo.appendChild(traitContainer);
    weaponInfo.appendChild(textNode1);
    weaponInfo.appendChild(selectList1);
    weaponInfo.appendChild(document.createElement("br"));
    weaponInfo.appendChild(textNode2);
    weaponInfo.appendChild(selectList2);
  
    // プルダウンリストを生成する関数
    function createSelectList(id, optionCount) {
      const selectList = document.createElement("select");
      selectList.id = id;
  
      for (let i = 0; i <= optionCount; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = `${i}人`;
        selectList.appendChild(option);
      }
  
      return selectList;
    }
  }
  
  else if (selectedWeaponId == "155") {
    buff_group = [
      createweaponTextNode("湖光の朝夕"),
      document.createElement("br"),
      createweaponLabel("dmg_buff_count", "　元素スキルダメージバフ："),
      createweaponSelectList("dmg_buff_count", 0, 3, "", "層", 3),
      document.createElement("br"),
      createweaponLabel("HP_buff_count", "　HP%バフ："),
      createweaponSelectList("HP_buff_count", 0, 2, "", "層", 2),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }
  
  else if (selectedWeaponId == "68") {
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

  else if (selectedWeaponId == "1") {
    const traits = [
      {
        id: "KeyofKhajNisut_count",
        label: "聖顕の鍵：壮大な詩篇 "
      }
    ];
        const KeyofKhajNisut_effect = createweaponSelectList("KeyofKhajNisut_count", 0, 3, "", "層", 3);
        const traitLabel = document.createElement("label");
        traitLabel.htmlFor = traits[0].id;
        traitLabel.textContent = traits[0].label;

        weaponInfo.appendChild(traitLabel);
        weaponInfo.appendChild(KeyofKhajNisut_effect);
  }

  else if (selectedWeaponId == "2") {
    const traits = [
      {
        id: "HaranGeppakuFutsu_count",
        label: "波乱月白経津：波乱 "
      }
    ];
        const KeyofKhajNisut = createweaponSelectList("HaranGeppakuFutsu_count", 0, 2, "", "層", 2);
        const traitLabel = document.createElement("label");
        traitLabel.htmlFor = traits[0].id;
        traitLabel.textContent = traits[0].label;

        weaponInfo.appendChild(traitLabel);
        weaponInfo.appendChild(KeyofKhajNisut);
  }

  else if (selectedWeaponId == "3") {
    const traits = [
      {
        id: "Whiteblind_effect",
        label: "霧切の巴紋: "
      }
    ];
        const Whiteblind_effect = createweaponSelectList("Whiteblind_effect", 0, 3, "", "層", 3);
        const traitLabel = document.createElement("label");
        traitLabel.htmlFor = traits[0].id;
        traitLabel.textContent = traits[0].label;

        weaponInfo.appendChild(traitLabel);
        weaponInfo.appendChild(Whiteblind_effect);
  }

  else if (selectedWeaponId == "4") {
    buff_group = [
      createweaponCheckbox("FreedomSworn_buff_check", true),
      createweaponLabel("FreedomSworn_buff_check", "蒼古なる自由への誓い：千年の大楽章・抗争の歌"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "6") {
    buff_group = [
      createweaponCheckbox("SummitShaper_onfield", true),
      createweaponLabel("SummitShaper_onfield", "シールド状態"),
      document.createElement("br"),
      createweaponLabel("SummitShaper", "斬山の刃：攻撃力アップ "),
      createweaponSelectList("SummitShaper", 0, 5, "", "層", 5),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "9") {
    buff_group = [
      createweaponLabel("TheDockhandsAssistant", "船渠剣：消費強靭マーク "),
      createweaponSelectList("TheDockhandsAssistant", 0, 3, "", "枚", 3),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "10") {
    buff_group = [
      createweaponLabel("WolfFang_skillbuff", "狼牙：元素スキル会心率アップ "),
      createweaponSelectList("WolfFang_skillbuff", 0, 4, "", "層", 4),
      document.createElement("br"),
      createweaponLabel("WolfFang_burstbuff", "狼牙：元素爆発会心率アップ "),
      createweaponSelectList("WolfFang_burstbuff", 0, 4, "", "層", 4),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "11") {
    buff_group = [
      createweaponCheckbox("FleuveCendreFerryman_ecbuff", true),
      createweaponLabel("FleuveCendreFerryman_ecbuff", "サーンドルの渡し守：元素チャージ効率アップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "12") {
    buff_group = [
      createweaponCheckbox("FinaleoftheDeep_attack_buff", true),
      createweaponLabel("FinaleoftheDeep_attack_buff", "海淵のフィナーレ：攻撃力アップ "),
      document.createElement("br"),
      createweaponCheckbox("FinaleoftheDeep_effect", true),
      createweaponLabel("FinaleoftheDeep_effect", "海淵のフィナーレ：命の契約 "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "13") {
    buff_group = [
      createweaponCheckbox("ToukabouShigure_buff", true),
      createweaponLabel("ToukabouShigure_buff", "東花坊時雨：紙傘の邪気 "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "15") {
    buff_group = [
      createweaponCheckbox("SapwoodBlade_buff", true),
      createweaponLabel("SapwoodBlade_buff", "原木刀：唯識の葉 "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "16") {
    buff_group = [
      createweaponCheckbox("KagotsurubeIsshin_buff", true),
      createweaponLabel("KagotsurubeIsshin_buff", "籠釣瓶一心：攻撃力アップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "19") {
    buff_group = [
      createweaponCheckbox("TheAlleyFlash_buff", true),
      createweaponLabel("TheAlleyFlash_buff", "ダークアレイの閃光：与えるダメージアップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "22") {
    buff_group = [
      createweaponLabel("BlackcliffLongsword_buff", "黒岩の長剣：攻撃力アップ "),
      createweaponSelectList("BlackcliffLongsword_buff", 0, 3, "", "層", 3),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "23") {
    buff_group = [
      createweaponLabel("IronSting_buff", "鉄蜂の刺し：与えるダメージアップ "),
      createweaponSelectList("IronSting_buff", 0, 2, "", "重", 2),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "24") {
    buff_group = [
      createweaponLabel("PrototypeRancour_buff", "斬岩·試作：攻撃力＆防御力アップ "),
      createweaponSelectList("PrototypeRancour_buff", 0, 4, "", "重", 4),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "25") {
    buff_group = [
      createweaponCheckbox("LionsRoar_buff", true),
      createweaponLabel("LionsRoar_buff", "匣中龍吟：与えるダメージアップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "26") {
    buff_group = [
      createweaponLabel("RoyalLongsword_buff", "旧貴族長剣：会心率アップ "),
      createweaponSelectList("RoyalLongsword_buff", 0, 5, "", "重", 5),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "30") {
    buff_group = [
      createweaponCheckbox("SkyriderSword_buff", true),
      createweaponLabel("SkyriderSword_buff", "飛天御剣：攻撃力アップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "33") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "黎明の神剣：HP90以上: "
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

  else if (selectedWeaponId == "34") {
    buff_group = [
      createweaponCheckbox("CoolSteel_buff", true),
      createweaponLabel("CoolSteel_buff", "冷刃：与えるダメージアップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "35") {
    buff_group = [
      createweaponCheckbox("BeaconoftheReedSea_buff1", true),
      createweaponLabel("BeaconoftheReedSea_buff1", "葦海の標：元素スキル命中 "),
      document.createElement("br"),
      createweaponCheckbox("BeaconoftheReedSea_buff2", true),
      createweaponLabel("BeaconoftheReedSea_buff2", "葦海の標：ダメージ受ける "),
      document.createElement("br"),
      createweaponCheckbox("BeaconoftheReedSea_buff3", true),
      createweaponLabel("BeaconoftheReedSea_buff3", "葦海の標：シールド状態にない "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "37") {
    buff_group = [
      createweaponCheckbox("SongofBrokenPines_buff1", true),
      createweaponLabel("SongofBrokenPines_buff1", "葦海の標：攻撃力アップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "38") {
    buff_group = [
      createweaponCheckbox("TheUnforged_buff1", true),
      createweaponLabel("TheUnforged_buff1", "無工の剣：シールド状態"),
      document.createElement("br"),
      createweaponLabel("TheUnforged_buff2", "無工の剣：攻撃力アップ"),
      createweaponSelectList("TheUnforged_buff2", 0, 5, "", "層", 5),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "39") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "狼のような狩人: 30%以下の敵"
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
    weaponInfo.appendChild(document.createElement("br"));
  }

  else if (selectedWeaponId == "41") {
    buff_group = [
      createweaponLabel("PortablePowerSaw", "携帯型チェーンソー：消費強靭マーク "),
      createweaponSelectList("PortablePowerSaw", 0, 3, "", "枚", 3),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "42") {
    buff_group = [
      createweaponCheckbox("TalkingStick_buff1", true),
      createweaponLabel("TalkingStick_buff1", "話死合い棒：攻撃力アップ"),
      document.createElement("br"),
      createweaponCheckbox("TalkingStick_buff2", true),
      createweaponLabel("TalkingStick_buff2", "話死合い棒：元素ダメージアップ"),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "43") {
    buff_group = [
      createweaponCheckbox("TidalShadow_buff1", true),
      createweaponLabel("TidalShadow_buff1", "タイダル・シャドー：攻撃力アップ"),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "44") {
    buff_group = [
      createweaponCheckbox("MailedFlower_buff1", true),
      createweaponLabel("MailedFlower_buff1", "鉄彩の花：元素熟知＆攻撃力アップ"),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "46") {
    buff_group = [
      createweaponCheckbox("ForestRegalia_buff1", true),
      createweaponLabel("ForestRegalia_buff1", "森林のレガリア：元素熟知アップ"),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "47") {
    buff_group = [
      createweaponLabel("Akuoumaru_buff1", "惡王丸：チーム全員の元素エネルギー上限の合計 "),
      createWeaponInputWithUnit("text", "Akuoumaru_buff1", "280",""),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "50") {
    buff_group = [
      createweaponLabel("LithicBlade_buff1", "千岩古剣：璃月港出身キャラクター人数 "),
      createweaponSelectList("LithicBlade_buff1", 0, 4, "", "人", 4),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "52") {
    buff_group = [
      createweaponLabel("SerpentSpine_buff1", "螭龍の剣：与えるダメージアップ "),
      createweaponSelectList("SerpentSpine_buff1", 0, 5, "", "重", 5),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "53") {
    buff_group = [
      createweaponLabel("BlackcliffSlasher_buff1", "黒岩の斬刀：攻撃力アップ "),
      createweaponSelectList("BlackcliffSlasher_buff1", 0, 3, "", "重", 3),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "54") {
    const traits = [
      {
        id: "Whiteblind_effect",
        label: "注入の刃: "
      }
    ];
        const Whiteblind_effect = createweaponSelectList("Whiteblind_effect", 0, 4, "", "層", 4);
        const traitCheckbox = document.createElement("input");
        traitCheckbox.type = "checkbox";
        traitCheckbox.id = traits[0].id;
        traitCheckbox.value = traits[0].id;
        traitCheckbox.checked = true;

        const traitLabel = document.createElement("label");
        traitLabel.htmlFor = traits[0].id;
        traitLabel.textContent = traits[0].label;


        weaponInfo.appendChild(traitLabel);
        weaponInfo.appendChild(Whiteblind_effect);
  }

  else if (selectedWeaponId == "57") {
    buff_group = [
      createweaponCheckbox("Rainslasher_buff1", true),
      createweaponLabel("Rainslasher_buff1", "雨裁：与えるダメージアップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "59") {
    buff_group = [
      createweaponCheckbox("TheBell_buff1", true),
      createweaponLabel("TheBell_buff1", "鐘の剣：シールド状態 "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "61") {
    buff_group = [
      createweaponLabel("SkyriderGreatsword_buff1", "飛天大御剣：攻撃力アップ "),
      createweaponSelectList("SkyriderGreatsword_buff1", 0, 4, "", "重", 4),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "64") {
    buff_group = [
      createweaponCheckbox("BloodtaintedGreatsword_buff1", true),
      createweaponLabel("BloodtaintedGreatsword_buff1", "龍血を浴びた剣：与えるダメージアップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "65") {
    buff_group = [
      createweaponCheckbox("FerrousShadow_buff1", true),
      createweaponLabel("FerrousShadow_buff1", "鉄影段平：重撃ダメージアップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "66") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "赤砂の夢:"
      }
    ];
        const StaffoftheScarletSands_effect = createweaponSelectList("StaffoftheScarletSands_effect", 0, 3, "", "層", 3);
        const traitLabel = document.createElement("label");
        traitLabel.htmlFor = traits[0].id;
        traitLabel.textContent = traits[0].label;

        weaponInfo.appendChild(traitLabel);
        weaponInfo.appendChild(StaffoftheScarletSands_effect);
  }
  
  else if (selectedWeaponId == "67") {
    buff_group = [
      createweaponCheckbox("CalamityQueller_buff1", true),
      createweaponLabel("CalamityQueller_buff1", "息災：待機中"),
      document.createElement("br"),
      createweaponLabel("CalamityQueller_buff2", "息災：攻撃力アップ "),
      createweaponSelectList("CalamityQueller_buff2", 0, 6, "", "層", 6),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "69") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "護摩の杖：HP50%未満"
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

  else if (selectedWeaponId == "70") {
    buff_group = [
      createweaponCheckbox("VortexVanguisher_sheild", true),
      createweaponLabel("VortexVanguisher_sheild", "シールド状態"),
      document.createElement("br"),
      createweaponLabel("VortexVanguisher_count", "破天の槍：攻撃力アップ "),
      createweaponSelectList("VortexVanguisher_count", 0, 5, "", "層", 5),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "72") {
    buff_group = [
      createweaponLabel("PrimordialJadeWingedSpear_count", "和璞鳶：攻撃力アップ "),
      createweaponSelectList("PrimordialJadeWingedSpear_count", 0, 7, "", "層", 7),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "73") {
    buff_group = [
      createweaponCheckbox("BalladoftheFjords_effect", true),
      createweaponLabel("BalladoftheFjords_effect", "フィヨルドの歌：元素熟知アップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "75") {
    buff_group = [
      createweaponCheckbox("MissiveWindspear_effect", true),
      createweaponLabel("MissiveWindspear_effect", "風信の矛：攻撃力＆元素熟知アップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "76") {
    buff_group = [
      createweaponCheckbox("Moonpiercer_effect", true),
      createweaponLabel("Moonpiercer_effect", "ムーンピアサー：攻撃力アップ"),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "77") {
    buff_group = [
      createweaponLabel("Wavebreaker_buff1", "斬波のひれ長：チーム全員の元素エネルギー上限の合計 "),
      createWeaponInputWithUnit("text", "Wavebreaker_buff1", "280",""),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "80") {
    buff_group = [
      createweaponLabel("LithicSpear_effect", "千岩長槍：璃月出身キャラクター人数 "),
      createweaponSelectList("LithicSpear_effect", 0, 4, "", "人", 1),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "84") {
    buff_group = [
      createweaponCheckbox("LithicSpear_effect", true),
      createweaponLabel("LithicSpear_effect", "死闘の槍：付近の敵の数が二人以上 "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "85") {
    buff_group = [
      createweaponLabel("BlackcliffPole_effect", "黒岩の突槍：攻撃力アップ "),
      createweaponSelectList("BlackcliffPole_effect", 0, 3, "", "層", 3),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "85") {
    buff_group = [
      createweaponLabel("PrototypeStarglitter_effect", "星鎌·試作：通常攻撃＆重撃ダメージアップ "),
      createweaponSelectList("PrototypeStarglitter_effect", 0, 2, "", "重", 2),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "88") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "匣中滅龍：水元素または炎元素の影響を受けた敵"
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

  else if (selectedWeaponId == "89") {
    buff_group = [
      createweaponCheckbox("BlackTassel_effect", true),
      createweaponLabel("BlackTassel_effect", "黒纓槍：スライムタイプの敵 "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "90") {
    buff_group = [
      createweaponCheckbox("WhiteTassel_effect", true),
      createweaponLabel("WhiteTassel_effect", "白纓槍：通常攻撃ダメージアップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "91") {
    buff_group = [
      createweaponLabel("TheFirstGreatMagic_effect", "始まりの大魔術：チーム内、自身と同じ元素タイプの人数 "),
      createweaponSelectList("TheFirstGreatMagic_effect", 1, 4, "", "人", 2),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "93") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "若水：周囲に敵が存在"
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

  else if (selectedWeaponId == "94") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "冬極の白星：白夜極星　"
      }
    ];

    const traitLabel = document.createElement("label");
    traitLabel.htmlFor = traits[0].id;
    traitLabel.textContent = traits[0].label;

    const selectlist = createweaponSelectList("PolarStar_count", 0, 4, "", "層", 4);
    
    weaponInfo.appendChild(traitLabel);
    weaponInfo.appendChild(selectlist);
  }

  else if (selectedWeaponId == "95") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "飛雷の鳴弦：飛雷の巴紋　"
      }
    ];

    const traitLabel = document.createElement("label");
    traitLabel.htmlFor = traits[0].id;
    traitLabel.textContent = traits[0].label;

    const selectlist = createweaponSelectList("ThunderingPulse_count", 0, 3, "", "層", 3);
    
    weaponInfo.appendChild(traitLabel);
    weaponInfo.appendChild(selectlist);
  }

  else if (selectedWeaponId == "96") {
    buff_group = [
      createweaponCheckbox("ElegyfortheEnd_effect", true),
      createweaponLabel("ElegyfortheEnd_effect", "終焉を嘆く詩：攻撃力＆元素熟知アップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "99") {
    buff_group = [
      createweaponCheckbox("ScionoftheBlazingSun_effect", true),
      createweaponLabel("ScionoftheBlazingSun_effect", "烈日の後嗣：重撃ダメージアップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "100") {
    buff_group = [
      createweaponCheckbox("SongofStillness_effect", true),
      createweaponLabel("SongofStillness_effect", "静寂の唄：与えるダメージアップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "101") {
    buff_group = [
      createweaponLabel("IbisPiercer_count", "トキの嘴：元素熟知アップ "),
      createweaponSelectList("IbisPiercer_count", 0, 2, "", "層", 2),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "102") {
    buff_group = [
      createweaponCheckbox("KingsSquire_effect", true),
      createweaponLabel("KingsSquire_effect", "王の近侍：元素熟知アップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "104") {
    const FadingTwilight_buff_label = createweaponLabel("FadingTwilight_effect", "落霞：強化効果 ");
    const create_br = document.createElement("br");
    const options = [
      { text: '効果なし', value: '0' },
      { text: '夕暮', value: '1' },
      { text: '流霞', value: '2' },
      { text: '朝日', value: '3' }
    ];
  
    const dropdown = document.createElement("select");
    dropdown.id = "FadingTwilight_effect";
  
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.text = option.text;
      optionElement.value = option.value;
      if (option.text === '朝日') {
        optionElement.selected = true;
      }  
      dropdown.appendChild(optionElement);
    });

    weaponInfo.appendChild(FadingTwilight_buff_label);
    weaponInfo.appendChild(dropdown);
    weaponInfo.appendChild(create_br);
  }

  else if (selectedWeaponId == "105") {
    buff_group = [
      createweaponLabel("MouunsMoon_buff1", "曚雲の月：チーム全員の元素エネルギー上限の合計 "),
      createWeaponInputWithUnit("text", "MouunsMoon_buff1", "280",""),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "106") {
    buff_group = [
      createweaponCheckbox("Hamayumi_effect", true),
      createweaponLabel("Hamayumi_effect", "破魔の弓：元素エネルギーMAX "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "107") {
    buff_group = [
      createweaponCheckbox("MitternachtsWaltz_effect1", true),
      createweaponLabel("MitternachtsWaltz_effect1", "幽夜のワルツ：通常攻撃ダメージアップ "),
      document.createElement("br"),
      createweaponCheckbox("MitternachtsWaltz_effect2", true),
      createweaponLabel("MitternachtsWaltz_effect2", "幽夜のワルツ：元素スキルダメージアップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "108") {
    buff_group = [
      createweaponCheckbox("WindblumeOde_effect1", true),
      createweaponLabel("WindblumeOde_effect1", "風花の頌歌：攻撃力アップ "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "109") {
    buff_group = [
      createweaponLabel("AlleyHunter_count", "ダークアレイの狩人：与えるダメージアップ "),
      createweaponSelectList("AlleyHunter_count", 0, 10, "", "層", 10),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "111") {
    buff_group = [
      createweaponLabel("BlackcliffWarbow_count", "黒岩の戦弓：攻撃力アップ "),
      createweaponSelectList("BlackcliffWarbow_count", 0, 3, "", "層", 3),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "112") {
    buff_group = [
      createweaponLabel("CompoundBow_count", "リングボウ：攻撃力アップ "),
      createweaponSelectList("CompoundBow_count", 0, 4, "", "重", 4),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "113") {
    buff_group = [
      createweaponCheckbox("PrototypeCrescent_effect", true),
      createweaponLabel("PrototypeCrescent_effect", "澹月·試作：重撃が弱点に命中 "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }
  
  else if (selectedWeaponId == "120") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "弾弓：0.3秒以内に敵に命中"
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

  else if (selectedWeaponId == "122") {
    buff_group = [
      createweaponCheckbox("SharpshootersOath_effect", true),
      createweaponLabel("SharpshootersOath_effect", "シャープシューターの誓い：弱点に命中 "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "123") {
    buff_group = [
      createweaponCheckbox("RavenBow_effect", true),
      createweaponLabel("RavenBow_effect", "鴉羽の弓：水元素または炎元素の影響を受けた敵 "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "124") {
    buff_group = [
      createweaponLabel("TomeoftheEternalFlow_count", "久遠流転の大典：重撃ダメージアップ "),
      createweaponSelectList("TomeoftheEternalFlow_count", 0, 3, "", "重", 3),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "125") {
    buff_group = [
      createweaponCheckbox("JadefallsSplendor_effect", true),
      createweaponLabel("JadefallsSplendor_effect", "碧落の瓏：定土玉圭発動 "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "126") {
    buff_group = [
      createweaponLabel("", "トゥライトゥーラの記憶：ダメージアップ基礎値 [+4.8%/6%/7.2%/8.4%/9.6%]"),
      document.createElement("br"),
      createweaponLabel("TulaytullahsRemembrance_count", "　与えるダメージアップ "),
      createweaponSelectList("TulaytullahsRemembrance_count", 0, 10, "", "層", 10),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "128") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "神楽の真意：神楽舞　"
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
    
    const selectlist = createweaponSelectList("KagurasVerity_buff", 0, 3, "", "層", 3);

    weaponInfo.appendChild(traitCheckbox);
    weaponInfo.appendChild(traitLabel);
    weaponInfo.appendChild(selectlist);
  }

  else if (selectedWeaponId == "130") {
    buff_group = [
      createweaponCheckbox("MemoryofDust_onfield", true),
      createweaponLabel("MemoryofDust_onfield", "シールド状態"),
      document.createElement("br"),
      createweaponLabel("MemoryofDust", "浮世の錠：攻撃力アップ "),
      createweaponSelectList("MemoryofDust", 0, 5, "", "層", 5),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "131") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "四風原典：元素ダメージバフ　"
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
    
    const selectlist = createweaponSelectList("bursLostPrayertotheSacredWindst_buff", 0, 4, "", "重", 4);

    weaponInfo.appendChild(traitCheckbox);
    weaponInfo.appendChild(traitLabel);
    weaponInfo.appendChild(selectlist);
  }

  else if (selectedWeaponId == "133") {
    buff_group = [
      createweaponLabel("BalladOfTheBoundlessBlue_effect", "果てなき紺碧の唄：通常攻撃＆重撃ダメージアップ "),
      createweaponSelectList("BalladOfTheBoundlessBlue_effect", 0, 3, "", "重", 3),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "134") {
    buff_group = [
      createweaponCheckbox("SacrificialJade_effect", true),
      createweaponLabel("SacrificialJade_effect", "古祠の瓏：碧玉流転"),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "135") {
    buff_group = [
      createweaponCheckbox("FlowingPurity_buff", true),
      createweaponLabel("FlowingPurity_buff", "純水流華：全元素ダメージアップ "),
      document.createElement("br"),
      createweaponCheckbox("FlowingPurity_effect", true),
      createweaponLabel("FlowingPurity_effect", "純水流華：命の契約 "),
      document.createElement("br"),
    ];
  
    buff_group.forEach(element => {
      weaponInfo.appendChild(element);
    });
  }

  else if (selectedWeaponId == "150") {
    const traits = [
      {
        id: "traitCheckbox",
        label: "流浪楽章：バフの種類　"
      }
    ];

    const traitLabel = document.createElement("label");
    traitLabel.textContent = traits[0].label;
    
    const selectList = document.createElement("select");
    selectList.id = "TheWidsith_buff";
    const buff_kind = ["攻撃力%", "元素ダメージバフ", "元素熟知"]; 
  
    for (let j = 0; j <=2; j++) {
      const option = document.createElement("option");
      option.value = j;
      option.text = `${buff_kind[j]}`;
      
      if (j == 1) {
        option.selected = true;
      }
      selectList.appendChild(option);
    }
    weaponInfo.appendChild(traitLabel);
    weaponInfo.appendChild(selectList);
  }

  showFormElements();
}

function createweaponCheckbox(id, checked)
{
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.checked = checked;
  return checkbox;
}

// ラベルを生成するユーティリティ関数
function createweaponLabel(forId, labelText)
{
  const label = document.createElement("label");
  label.htmlFor = forId;
  label.textContent = labelText;
  return label;
}

// テキストノードを生成するユーティリティ関数
function createweaponTextNode(text)
{
  return document.createTextNode(text);
}

// セレクトリストを生成するユーティリティ関数
function createweaponSelectList(id, initial, optionsCount, head_unit, unit, select_index)
{
  const selectList = document.createElement("select");
  selectList.id = id;

  for (let j = initial; j <= optionsCount; j++)
  {
    const option = document.createElement("option");
    option.value = j;
    option.text = `${head_unit}${j}${unit}`;
    
    if (j == select_index)
    {
      option.selected = true;
    }
    selectList.appendChild(option);
  }
  return selectList;
}

function createanyweaponSelectList(id, initial, optionsCount, head_unit, unit, select_index, rate)
{
  const selectList = document.createElement("select");
  selectList.id = id;
  for (let j = initial; j <= optionsCount; j++)
  {
    const option = document.createElement("option");
    option.value = j * rate;
    option.text = `${head_unit}${j * rate}${unit}`;
    
    if (j == select_index)
    {
      option.selected = true;
    }
    selectList.appendChild(option);
  }
  return selectList;
}

function createWeaponInputWithUnit(type, id, value, unit)
{
  const inputContainer = document.createElement("span");
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.value = value;
  
  // input要素のwidthを50pxに設定
  input.style.width = '50px';

  // 単位を表示するための span 要素を作成
  const unitSpan = document.createElement("span");
  unitSpan.textContent = unit;

  // フォーム要素と単位要素を div 要素に追加
  inputContainer.appendChild(input);
  inputContainer.appendChild(unitSpan);

  // div 要素を返す
  return inputContainer;
}
async function show_char_statsform()
   {
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

    const char_constellations = document.getElementById("char_constellations").value;
    hp_form.style.display = "none";  // HPフォームを非表示
    attck_form.style.display = "none";  // 攻撃力フォームを非表示
    deff_form.style.display = "none";  // 防御力フォームを非表示
    elm_form.style.display = "none";  // 元素熟知を非表示
    elm_charge_form.style.display = "none";  // 元素チャージ効率フォームを非表示
    cr_form.style.display = "none";  // 会心率フォームを非表示
    cd_form.style.display = "none";  // 会心ダメージフォームを非表示
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
    
    const characterInfo = document.getElementById("characterInfo");
    const elemental_reaction = document.getElementById("element_action");
    const method_container = document.getElementById("attack_method");
    const char_talent = document.getElementById("char_talent");

    characterInfo.style.display = "block";

    characterInfo.innerHTML = "";
    elemental_reaction.innerHTML = "";
    method_container.innerHTML = "";
    char_talent.innerHTML = "";

    let traits;
    let options;

    if (selectedCharId == "56") {
      traits = [
        { id: "traitCheckbox", label: "第1重：心識蘊蔵の種" },
        { id: "traitCheckbox2", label: "第2重：防御力-30%" },
        { id: "traitCheckbox3", label: "第4重：蘊種印状態にある敵数：" },
        { id: "traitCheckbox4", label: "第6重：大辯円成の実 追撃" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃（1ループ）", value: "1" },
        { text: "重撃", value: "6" },
        { text: "スキル（滅浄三業）", value: "16" },
        { text: "滅浄三業·破業障(6凸)", disabled: char_constellations < 4, value: "17" }
      ];
    
      createchar_attackmethod(options);
    
      const elementsToAddToCharTalent = [
        createCheckbox("nahida_Q", true),
        createLabel("nahida_Q", "摩耶の宮殿"),
        createCheckbox("talent1", true),
        createLabel("talent1", "出場中"),
        document.createElement("br"),
        createTextNode("　元素爆発天賦レベル："),
        createSelectList("nahida_Q_level", 1, 13, "Lv.", "", 8),
        document.createElement("br"),
        createTextNode("　炎元素キャラ数："),
        createSelectList("nahida_Qpyro",0, 2, "", "人", 0),
        document.createElement("br"),
        createLabel("maxMasteryLabel", "チーム内最大熟知キャラ"),
        document.createElement("br"),
        createRadio("char_type", "nahida", true, "nahida-label", "ナヒーダ"),
        createLabel("nahida-label", "ナヒーダ"),
        document.createElement("br"),
        createRadio("char_type", "other", false, "other-label", "その他"),
        createLabel("other-label", "その他"),
        document.createElement("br"),
        createLabel("element-mastery-label", "　元素熟知："),
        createInputWithUnit("text", "element-mastery", "800",""),
        document.createElement("br")
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
    
      if (char_constellations > 1)
      {
        let traitCheckbox = createCheckbox(traits[1].id, true);
        let traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    
      if (char_constellations > 2)
      {
        traitCheckbox = createCheckbox(traits[2].id, true);
        traitLabel = createLabel(traits[2].id, traits[2].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        const four_conste_selectList = createSelectList("four_conste", 0, 3,"", "体", 0);
        const four_conste_option = document.createElement("option");
        four_conste_option.value = 4;
        four_conste_option.text = "4体以上";
        four_conste_selectList.appendChild(four_conste_option);
        characterInfo.appendChild(four_conste_selectList);
      }
    }

    else if (selectedCharId == "1") {
      traits = [
        { id: "traitCheckbox1", label: "1重　紅玉の琉金：宵宮の攻撃力+20%" },
        { id: "traitCheckbox2", label: "2重　万燈の火：炎元素ダメージ+25%" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常1ループ（熾焔の矢）", value: "1" },
      ];
    
      createchar_attackmethod(options);
      if (char_constellations > 0)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (char_constellations > 1)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }

      if (char_constellations > 3)
      {
        traitCheckbox = createCheckbox(traits[2].id, true);
        traitLabel = createLabel(traits[2].id, traits[2].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }

    else if (selectedCharId == "2") {
      traits = [
        { id: "traitCheckbox6", label: "６重　冥蝶の抱擁：会心率+100%" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常1ループ（冥蝶の舞状態）", value: "1" },
        { text: "重撃（冥蝶の舞状態）", value: "6" },
        { text: "元素爆発（安神秘法）", value: "21" }
      ];
    
      createchar_attackmethod(options);

      if (char_constellations > 3)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }

    else if (selectedCharId == "6") {
      traits = [
        { id: "traitCheckbox2", label: "第2重：HP50%未満の敵に重撃会心率+20%" },
        { id: "traitCheckbox6", label: "第6重：所持できる丹火の印の最大枚数+1" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃（1ループ）", value: "1" },
        { text: "重撃", value: "6" },
        { text: "スキル（丹書契約）", value: "16" },
        { text: "元素爆発（契約成立）", value: "21" }
      ];
    
      createchar_attackmethod(options);

      if (char_constellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }

      if (char_constellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }

    else if (selectedCharId == "9") {
      traits = [
        { id: "traitCheckbox2", label: "第1重：敵の炎元素耐性-15%" },
        { id: "traitCheckbox3", label: "第6重：炎元素ダメージ+15%。" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "スキル（グゥオパァー4ヒット）", value: "16" },
        { text: "元素爆発（旋火輪）", value: "21" }
      ];
    
      createchar_attackmethod(options);

      let talent2_box = createCheckbox("xiangling_talent2", true);
      let talent2_label = createLabel("xiangling_talent2", "激辛唐辛子：攻撃力+10%");
      char_talent.appendChild(talent2_box);
      char_talent.appendChild(talent2_label);
      if (char_constellations > 0)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }

      if (char_constellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }

    else if (selectedCharId == "12") {

      const elementsToAddToCharTalent = [
        createCheckbox("yelan_Q", false),
        createLabel("yelan_Q", "玲瓏一擲　"),
        createCheckbox("yelan_entrance", false),
        createLabel("yelan_entrance", "出場中"),
        document.createElement("br"),
        createLabel("yelan_talent2_buff", "　ダメージバフ："),
        createInputWithUnit("text", "yelan_talent2_buff", "25.5","(%)"),
        document.createElement("br")
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
      traits = [
        { id: "traitCheckbox4", label: "第4重：騙し取る者、移花接木 " },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "スキル（絡み合う命の糸）", value: "16" },
        { text: "元素爆発（玲瓏一擲）", value: "21" },
        { text: "打破の矢（6重）", value: "6" }
      ];
    
      createchar_attackmethod(options);

      let talent2_label = createLabel("yelan_talent1", "先後の決め手：チーム内元素タイプ ");
      const yelan_talent1_list = createSelectList("yelan_talent1", 1, 4, "", "種類", 4);
      char_talent.appendChild(talent2_label);
      char_talent.appendChild(yelan_talent1_list);

      if (char_constellations > 2)
      {
        traitLabel = createLabel(traits[0].id, traits[0].label);
        const yelan_selectlist = createSelectList("yelan_forth_buff", 1, 4, "", "体", 4);
    
        
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(yelan_selectlist);
        characterInfo.appendChild(document.createElement("br"));
      }
    }

    else if (selectedCharId == "22") {

      const elementsToAddToCharTalent = [
        createCheckbox("eula_E", true),
        createLabel("eula_E", "氷潮の渦 "),
        document.createElement("br"),
        createTextNode("　元素スキル天賦レベル："),
        createSelectList("eula_E_level", 1, 13, "Lv.", "", 8),
        document.createElement("br")
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
      traits = [
        { id: "traitCheckbox1", label: "第1重：潮の幻像 物理ダメージ+30% " },
        { id: "traitCheckbox4", label: "第4重：劣等感との戦い 光臨の剣のダメージ+25% " },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素爆発（光臨の剣）", value: "21" },
      ];
    
      createchar_attackmethod(options);

      if (char_constellations > 0)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }

      if (char_constellations > 2)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }

    else if (selectedCharId == "33") {
      traits = [
        { id: "traitCheckbox2", label: "第2重：最大階位を肆にアップ" },
        { id: "traitCheckbox3", label: "第4重：雷元素ダメージ+20%" },
        { id: "traitCheckbox4", label: "第6重：敵の防御力の60%無視" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃（1ループ）", value: "1" },
        { text: "重撃", value: "6" },
        { text: "スキル（殺生櫻３ヒット）", value: "16" },
        { text: "大密法・天狐顕現（元素爆発４ヒット）", value: "21" }
      ];
    
      createchar_attackmethod(options);
    

      if (char_constellations > 2)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }

      if (char_constellations > 3)
      {
        traitCheckbox = createCheckbox(traits[2].id, true);
        traitLabel = createLabel(traits[2].id, traits[2].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }

    else if (selectedCharId  == "34")
    {
      const elementsToAddToCharTalent = [
        createCheckbox("raiden_E", true),
        createLabel("raiden_E", "元素スキル：雷罰悪曜の眼"),
        document.createElement("br"),
        createTextNode("　元素スキル天賦レベル："),
        createSelectList("raiden_E_level", 1, 13, "Lv.", "", 10),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      const traits = [
        {
          id: "traitCheckbox2",
          label: "第2重：防御力60%無視"
        }
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常1ループ（爆発中）", value: "21" },
        { text: "重撃(爆発中)", value: "22" },
        { text: "夢想の一太刀", value: "23" },
      ];

      if (char_constellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      createchar_attackmethod(options)  
    }
    else if (selectedCharId  == "57")
    {
      const elementsToAddToCharTalent = [
        createCheckbox("tighnari_talent1", true),
        createLabel("tighnari_talent1", "固有天賦1：元素熟知+50"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
     
      const traits = [
        {
          id: "traitCheckbox2",
          label: "第2重：草元素ダメージ+20%"
        },
        {
          id: "traitCheckbox4",
          label: "第4重：元素熟知バフ"
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "重撃×3回（2段チャージ）", value: "6" },
        { text: "元素爆発(造成・蔓纏いの矢)", value: "21" },
      ];

      if (char_constellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (char_constellations > 2)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        const selectList = document.createElement("select");
        const elm_buff = [0, 60, 120]; 
        selectList.id = "four_conste_buff";
      
        for (let j = 0; j <= 2; j++) { // 条件を j <= optionsCount に変更
          const option = document.createElement("option");
          option.value = elm_buff[j];
          option.text = `${"+"}${elm_buff[j]}`;
          
          if (j == 2) {
            option.selected = true;
          }
          
          selectList.appendChild(option);
        }
        characterInfo.appendChild(selectList);
      }

      createchar_attackmethod(options)  
    }

    else if (selectedCharId  == "23")
    {
      const elementsToAddToCharTalent = [
        createCheckbox("ganyu_talent1", true),
        createLabel("ganyu_talent1", "固有天賦1：霜華の矢と霜華満開の会心率+20%"),
        document.createElement("br"),
        createCheckbox("ganyu_talent2", true),
        createLabel("ganyu_talent2", "固有天賦2：氷元素ダメージ+20%"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
     
      const traits = [
        {
          id: "traitCheckbox1",
          label: "第1重：敵の氷元素耐性-15%"
        },
        {
          id: "traitCheckbox4",
          label: "第4重：ダメージバフ"
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "重撃（2段チャージ）", value: "6" },
        { text: "元素爆発(降衆天華)", value: "21" },
      ];

      if (char_constellations > 0)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (char_constellations > 2)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        const selectList = document.createElement("select");
        const elm_buff = [0, 5, 10, 15, 20, 25]; 
        selectList.id = "four_conste_buff";
      
        for (let j = 0; j <= 5; j++) { // 条件を j <= optionsCount に変更
          const option = document.createElement("option");
          option.value = elm_buff[j];
          option.text = `${"+"}${elm_buff[j]}${"%"}`;
          
          if (j == 5) {
            option.selected = true;
          }
          
          selectList.appendChild(option);
        }
        characterInfo.appendChild(selectList);
      }

      createchar_attackmethod(options)  
    }

    else if (selectedCharId  == "63")
    {
      const elementsToAddToCharTalent = [
        createCheckbox("arataki_burst_effect", true),
        createLabel("arataki_burst_effect", "元素爆発：防御力を基準に攻撃力がアップ",),
        document.createElement("br"),
        createLabel("arataki_burst_level", "　元素爆発天賦レベル：",),
        createSelectList("arataki_burst_level", 1, 13, "Lv.", "", 8),
        document.createElement("br"),
        createCheckbox("arataki_talent2", true),
        createLabel("arataki_talent2", "固有天賦2：「荒瀧逆袈裟」のダメージが荒瀧一斗の防御力35%分アップ"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
     
      const traits = [
        {
          id: "traitCheckbox4",
          label: "第4重：防御力+20%、攻撃力+20%"
        },
        {
          id: "traitCheckbox6",
          label: "第6重：会心ダメージ+70%"
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "重撃(荒瀧逆袈裟連斬 & とどめ)", value: "6" },
        { text: "元素スキル(魔殺絶技・岩牛発破!)", value: "16" },
      ];

      if (char_constellations > 2)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (char_constellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
      }

      createchar_attackmethod(options)  
    }

    else if (selectedCharId  == "64")
    {
      const elementsToAddToCharTalent = [
        createCheckbox("albedo_talent1", true),
        createLabel("albedo_talent1", "固有天賦1：スキルダメージバフ+25％"),
        document.createElement("br"),
        createCheckbox("albedo_talent2", true),
        createLabel("albedo_talent2", "固有天賦2：元素熟知+125"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
     
      const traits = [
        {
          id: "traitCheckbox2",
          label: "第2重：生式・大地の潮の爆発ダメージと生滅の花のダメージが上昇する"
        },
        {
          id: "traitCheckbox6",
          label: "第6重：結晶反応で生成されたシールド状態にある時、与えるダメージ+17%"
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素スキル(創生術・擬似陽華)", value: "16" },
        { text: "元素爆発(誕生式・大地の潮)", value: "21" },
      ];

      if (char_constellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
        const second_conste_label = createLabel("albedosecond_const_label", "　生滅カウント：");
        const second_conste_list = createSelectList("albedo_second_const_buff", 0, 4, "", "重", 4);
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
        characterInfo.appendChild(second_conste_label);
        characterInfo.appendChild(second_conste_list);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (char_constellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
      }

      createchar_attackmethod(options)  
    }

    else if (selectedCharId  == "65")
    {
      const elementsToAddToCharTalent = [
        createCheckbox("zhongli_skill", true),
        createLabel("zhongli_skill", "玉璋シールド：敵の全耐性-20％"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素爆発(天星)", value: "21" },
      ];

      createchar_attackmethod(options)  
    }

    else if (selectedCharId  == "68")
    {
      const traits = [
        {
          id: "traitCheckbox6",
          label: "第6重：防御力50%相当の攻撃力をアップ"
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃１ループ(爆発中)", value: "1" },
      ];
      if (char_constellations > 3)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
  
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
      }

      createchar_attackmethod(options)  
    }

    showFormElements();
  }

function createchar_attackmethod(options)
{
  const selectElement = document.createElement("select");
  selectElement.id = "attack_method_id";

  // オプションを追加
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.text = option.text;
    optionElement.value = option.value;
    if (option.disabled) {
      optionElement.disabled = true;
    }
    if (option.selected) {
      optionElement.selected = true;
    }
    selectElement.appendChild(optionElement);
  });

  // 生成したセレクトボックスを指定された要素に追加
  const containerElement = document.getElementById("attack_method"); // ここにセレクトボックスを追加する要素を指定
  containerElement.appendChild(selectElement);
}

function showFormElements()
{
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
  let team_cd_form = document.getElementById("team_cd_form");
  const formElements = [
    { forms: [hp_form, team_hp_form, team_hprate_form], index: 0 },
    { forms: [attck_form, team_attack_form, team_attackrate_form], index: 4 },
    { forms: [deff_form, team_deff_form, team_deffrate_form], index: 1 },
    { forms: [elm_form, team_elm_form], index: 2 },
    { forms: [elm_charge_form, team_elm_charge_form], index: 3 },
    { forms: [cr_form, team_cr_form], index: 5 },
    { forms: [cd_form, team_cd_form], index: 6 }
  ];
  for (const element of formElements) {
    if (depend_status[element.index] == 1) {
      for (let i = 0; i < element.forms.length; i++) {
        element.forms[i].style.display = "table-row";
      }
    }
  }
}


async function elemental_reaction_add()
{
  let elm_form = document.getElementById("elm_form");
  let team_elm_form = document.getElementById("team_elm_form");
  elm_form.style.display = "none";
  team_elm_form.style.display = "none";
  await calculate_depend_status();
  showFormElements();
}

async function elementalcharge_reaction_add()
{
  let elmcharge_form = document.getElementById("elm_charge_form");
  let team_elmcharge_form = document.getElementById("team_elm_charge_form");
  elmcharge_form.style.display = "none";
  team_elmcharge_form.style.display = "none";
  await calculate_depend_status();
  showFormElements();
}

// チェックボックスを生成するユーティリティ関数
function createCheckbox(id, checked) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.checked = checked;
  return checkbox;
}

// ラベルを生成するユーティリティ関数
function createLabel(forId, labelText) {
  const label = document.createElement("label");
  label.htmlFor = forId;
  label.textContent = labelText;
  return label;
}

// テキストノードを生成するユーティリティ関数
function createTextNode(text) {
  return document.createTextNode(text);
}

// セレクトリストを生成するユーティリティ関数
function createSelectList(id, initial, optionsCount, head_unit, unit, select_index) {
  const selectList = document.createElement("select");
  selectList.id = id;

  for (let j = initial; j <= optionsCount; j++) { // 条件を j <= optionsCount に変更
    const option = document.createElement("option");
    option.value = j;
    option.text = `${head_unit}${j}${unit}`;
    
    if (j == select_index) {
      option.selected = true;
    }
    
    selectList.appendChild(option);
  }

  return selectList;
}

function createanySelectList(id, initial, optionsCount, head_unit, unit, select_index, rate) {
  const selectList = document.createElement("select");
  selectList.id = id;

  for (let j = initial; j <= optionsCount; j++) { // 条件を j <= optionsCount に変更
    const option = document.createElement("option");
    option.value = j * rate;
    option.text = `${head_unit}${j * rate}${unit}`;
    
    if (j == select_index) {
      option.selected = true;
    }
    
    selectList.appendChild(option);
  }

  return selectList;
}

function createRadio(name, value, checked, id, labelText) {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = name;
  radio.value = value;
  radio.checked = checked;
  radio.id = id;
  return radio;
}

function createInputWithUnit(type, id, value, unit) {
  // フォームをラップする div 要素を作成
  const inputContainer = document.createElement("span");

  // フォーム要素を作成
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.value = value;

  // 単位を表示するための span 要素を作成
  const unitSpan = document.createElement("span");
  unitSpan.textContent = unit;

  // フォーム要素と単位要素を div 要素に追加
  inputContainer.appendChild(input);
  inputContainer.appendChild(unitSpan);

  // div 要素を返す
  return inputContainer;
}

async function show_char_statsform()
  {
    const characterInfo = document.getElementById("characterInfo");
    const elemental_reaction = document.getElementById("element_action");
    const method_container = document.getElementById("attack_method");
    const char_talent = document.getElementById("char_talent");
    const temporary_char_talent = document.getElementById("temporary_char_talent");
    const attack_method_prop = document.getElementById("attack_method_prop");
    const select_reaction_method = document.getElementById("select_reaction_method");

    characterInfo.style.display = "block";

    characterInfo.innerHTML = "";
    elemental_reaction.innerHTML = "";
    method_container.innerHTML = "";
    char_talent.innerHTML = "";
    temporary_char_talent.innerHTML = "";
    attack_method_prop.innerHTML = "";
    select_reaction_method.innerHTML = "";

    let traits = [];
    let options = [];
    let traitCheckbox;
    let traitLabel;
    let elementsToAddToCharTalent = [];

    if (selectedCharId == "56")
    {
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
        { text: "滅浄三業·破業障(6重)", disabled: CharConstellations < 4, value: "17" }
      ];
  
      createchar_attackmethod(options);
  
      elementsToAddToCharTalent = [
        createCheckbox("nahida_Q", true),
        createLabel("nahida_Q", "摩耶の宮殿"),
        createCheckbox("talent1", true),
        createLabel("talent1", "出場中"),
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
    
      if (CharConstellations > 1)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    
      if (CharConstellations > 2)
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
    else if (selectedCharId == "71")
    {
      elementsToAddToCharTalent = [
        createCheckbox("Lyney_talent2_flag", true),
        createLabel("Lyney_talent2_flag", "炎元素付着あり"),
        document.createElement("br"),
        createLabel("pyro_char_count", "チーム内炎元素キャラクター数： "),
        createSelectList("pyro_char_count", 0, 3, "", "人", 3),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      traits = [
        { id: "traitCheckbox6", label: "2重　巧言令色の誘：会心ダメージ " },
        { id: "traitCheckbox4", label: "4重　熟知熟練の方策：敵の炎元素耐性-20% " },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "重撃", value: "6" },
        { text: "元素スキル（ビウィルダー・ライト）", value: "16" },
        { text: "元素爆発（大魔術・ミラクルパレード）", value: "21" }
      ];
      createchar_attackmethod(options);

      if (CharConstellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
        const Lyney_secondbuff_list = createanySelectList("Lyney_second_conste_buff", 0, 3, "+", "%", 3, 20);

        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(Lyney_secondbuff_list);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 2)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);

        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "0")
    {
      traits = [
        { id: "traitCheckbox6", label: "6重　黄金を裂く焔爪：会心ダメージ " },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素爆発（炎哮獅子咬）", value: "21" }
      ];
      createchar_attackmethod(options);

      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
        const dehya_sixthbuff_list = createanySelectList("dehya_sixth_conste_buff", 0, 4, "+", "%", 4, 15);

        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(dehya_sixthbuff_list);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "1")
      {
        elementsToAddToCharTalent = [
          createLabel("yoimiya_talent1", "袖火百景図：炎元素ダメージ "),
          createanySelectList("yoimiya_talent1", 0, 10, "+", "%", 10, 2),
          document.createElement("br"),
        ];
    
        elementsToAddToCharTalent.forEach(element => {
          char_talent.appendChild(element);
        });

        traits = [
          { id: "traitCheckbox1", label: "1重　紅玉の琉金：宵宮の攻撃力+20%" },
          { id: "traitCheckbox2", label: "2重　万燈の火：炎元素ダメージ+25%" },
        ];

        options = [
          { text: "攻撃方法", value: "0", disabled: true, selected: true },
          { text: "通常1ループ（熾焔の矢）", value: "1" },
        ];
    
        createchar_attackmethod(options);
        if (CharConstellations > 0)
        {
          traitCheckbox = createCheckbox(traits[0].id, true);
          traitLabel = createLabel(traits[0].id, traits[0].label);
      
          characterInfo.appendChild(traitCheckbox);
          characterInfo.appendChild(traitLabel);
          characterInfo.appendChild(document.createElement("br"));
        }
        if (CharConstellations > 1)
        {
          traitCheckbox = createCheckbox(traits[1].id, true);
          traitLabel = createLabel(traits[1].id, traits[1].label);
      
          characterInfo.appendChild(traitCheckbox);
          characterInfo.appendChild(traitLabel);
          characterInfo.appendChild(document.createElement("br"));
        }
    }
    else if (selectedCharId == "2")
    {
      elementsToAddToCharTalent = [
        createCheckbox("hutao_talent2", true),
        createLabel("hutao_talent2", "血のかまど：胡桃のHPが50%以下の時、炎元素ダメージ+33%"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

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

      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "3")
    {
      traits = [
        { id: "traitCheckbox2", label: "第2重：弾丸の破片 敵の防御力-23%" },
        { id: "traitCheckbox6", label: "第6重：炎元素ダメージ+10%" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃（1ループ）", value: "1" },
        { text: "重撃", value: "6" },
        { text: "スキル（ボンボン爆弾）", value: "16" },
        { text: "元素爆発（ドッカン花火）", value: "21" }
      ];
    
      createchar_attackmethod(options);

      if (CharConstellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }

      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "4")
    {
      elementsToAddToCharTalent = [
        createCheckbox("diluc_talent2", true),
        createLabel("diluc_talent2", "溶融の翼：黎明効果継続中に与える炎元素ダメージ+20%"),
        document.createElement("br"),
      ];

      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      traits = [
        { id: "traitCheckbox1", label: "第1重：HPが50%を超えている敵に対して、ダメージバフ+15％" },
        { id: "traitCheckbox2", label: "第2重：灼熱余燼 攻撃力 " },
        { id: "traitCheckbox4", label: "第4重：流火焼灼 逆焔の刃のダメージ+40％ " },
        { id: "traitCheckbox6", label: "第6重：闇を清算する炎の剣 通常攻撃ダメージ+30％ " },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃（炎元素付与状態1ループ）", value: "1" },
        { text: "スキル（逆焔の刃）", value: "16" },
        { text: "元素爆発（黎明）", value: "21" }
      ];
    
      createchar_attackmethod(options);

      if (CharConstellations > 0)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 1)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
        const diluc_talent1_list = createanySelectList("diluc_conste2", 0, 3, "+", "%", 3, 10)
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(diluc_talent1_list);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 2)
      {
        traitCheckbox = createCheckbox(traits[2].id, true);
        traitLabel = createLabel(traits[2].id, traits[2].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[3].id, true);
        traitLabel = createLabel(traits[3].id, traits[3].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "76")
    {
      traits = [
        { id: "traitCheckbox2", label: "第2重：攻撃力+20%" },
        { id: "traitCheckbox6", label: "第6重：瑞獣登楼の落下攻撃・踏雲献瑞の会心率+20%、会心ダメージ+40%" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃（1ループ）", value: "1" },
        { text: "重撃", value: "6" },
        { text: "スキル（瑞獣登楼）", value: "11" },
        { text: "元素爆発（燦炎金猊の舞）", value: "21" }
      ];
    
      createchar_attackmethod(options);

      if (CharConstellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "6")
    {
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

      if (CharConstellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "7")
    {
      elementsToAddToCharTalent = [
        createCheckbox("xinyan_talent2", true),
        createLabel("xinyan_talent2", "…これこそがロックだ！ 物理ダメージ+15%"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      traits = [
        { id: "traitCheckbox4", label: "4重　リズムの伝染：敵の物理耐性-15%" },
        { id: "traitCheckbox6", label: "6重　地獄のシェーク：防御力50%分の攻撃力を加算" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常1ループ", value: "1" },
        { text: "重撃", value: "6" },
        { text: "元素爆発(反逆の弾き 物理)", value: "21" },

      ];
    
      createchar_attackmethod(options);
      if (CharConstellations > 2)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "8")
    {
      elementsToAddToCharTalent = [
        createCheckbox("bennett_Q", true),
        createLabel("bennett_Q", "素晴らしい旅"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      traits = [
        { id: "traitCheckbox6", label: "第6重：炎元素ダメージ+15%。" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "スキル（0段チャージ）", value: "16" },
        { text: "スキル（1段チャージ）", value: "17" },
        { text: "スキル（2段チャージ）", value: "18" },
      ];
    
      createchar_attackmethod(options);

      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "9")
    {
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
      if (CharConstellations > 0)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "10")
    {
      traits = [
        { id: "talent2checkbox2", label: "固有天賦2：令制圧射撃 攻撃力+15% " },
        { id: "traitCheckbox6", label: "第6重：野火の如く 攻撃力+15%。" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "重撃", value: "6" },
      ];
    
      createchar_attackmethod(options);

      traitCheckbox = createCheckbox(traits[0].id, false);
      traitLabel = createLabel(traits[0].id, traits[0].label);
      
      characterInfo.appendChild(traitCheckbox);
      characterInfo.appendChild(traitLabel);
      characterInfo.appendChild(document.createElement("br"));

      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "80")
    {
      elementsToAddToCharTalent = [
        createTextNode("ウェーブチェイサーの心得："),
        createSelectList("mualani_talent2_buff", 0, 3, "", "重", 3),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "重撃", value: "6" },
        { text: "元素スキル（サメサメバイト）", value: "2" },
        { text: "元素爆発（爆瀑ロケット）", value: "21" }
      ];
      createchar_attackmethod(options);

      traits = [
        { id: "traitCheckbox4", label: "第4重：爆瀑ロケットの与えるダメージ+75%" },
      ];

      if (CharConstellations > 2)
        {
          traitCheckbox = createCheckbox(traits[0].id, true);
          traitLabel = createLabel(traits[0].id, traits[0].label);
      
          characterInfo.appendChild(traitCheckbox);
          characterInfo.appendChild(traitLabel);
          characterInfo.appendChild(document.createElement("br"));
        }
    }
    else if (selectedCharId == "82")
    {
      elementsToAddToCharTalent = [
        createCheckbox("sigwinne_effect", true),
        createLabel("sigwinne_effect", "固有天賦１：水元素ダメージ+8％"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素スキル（ぴょんぴょんハイドロセラピー）", value: "16" },
        { text: "元素爆発（過飽和まごころお注射）", value: "21" }
      ];
      createchar_attackmethod(options);

      traits = [
        { id: "traitCheckbox4", label: "第2重：水元素耐性-35%" },
      ];

      if (CharConstellations > 1)
        {
          traitCheckbox = createCheckbox(traits[0].id, true);
          traitLabel = createLabel(traits[0].id, traits[0].label);
      
          characterInfo.appendChild(traitCheckbox);
          characterInfo.appendChild(traitLabel);
          characterInfo.appendChild(document.createElement("br"));
        }
    }
    else if (selectedCharId == "74")
    {
      elementsToAddToCharTalent = [
        createCheckbox("furina_Qcheck", true),
        createLabel("furina_Qcheck", "もろびとこぞりて"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃1ループ（6重 水付与）", disabled: CharConstellations < 4, value: "1" },
        { text: "重撃（6重 水付与）", disabled: CharConstellations < 4, value: "6" },
        { text: "スキル（サロン・ソリティア）", value: "16" },
        { text: "元素爆発(万民のカルナバル)", value: "21" }
      ];
    
      createchar_attackmethod(options);

    }
    else if (selectedCharId == "72")
    {
      elementsToAddToCharTalent = [
        createLabel("Neuvillette_talent2", "固有天賦2：HP割合："),
        createSelectList("Neuvillette_talent2", 0, 100, "", "%", 100),
        document.createElement("br")
      ];
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "特殊重撃（衡平な裁量）", value: "6" },
        { text: "元素スキル（涙よ、私は必ずや償おう）", value: "16" },
        { text: "元素爆発（浮蓮のダンス・遠夢聆泉）", value: "21" },
      ];
    
      createchar_attackmethod(options);
    }
    else if (selectedCharId == "11")
    {
      elementsToAddToCharTalent = [
        createCheckbox("nirou_talent1", false),
        createLabel("nirou_talent1", "固有天賦1：元素熟知+100"),
        document.createElement("br")
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
      traits = [
        { id: "traitCheckbox2", label: "第2重：水元素耐性-35%" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常1ループ（剣舞のステップ＋水月）", value: "16" },
        { text: "元素爆発（浮蓮のダンス・遠夢聆泉）", value: "21" },
      ];
    
      createchar_attackmethod(options);

      if (CharConstellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "12")
    {
      elementsToAddToCharTalent = [
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

      if (CharConstellations > 2)
      {
        traitLabel = createLabel(traits[0].id, traits[0].label);
        const yelan_selectlist = createSelectList("yelan_forth_buff", 1, 4, "", "体", 4);
        
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(yelan_selectlist);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "13")
    {
      elementsToAddToCharTalent = [
        createCheckbox("kamisatoayato_Q", true),
        createLabel("kamisatoayato_Q", "神里流・水囿"),
        document.createElement("br")
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
      traits = [
        { id: "traitCheckbox1", label: "第1重：鏡花風姿 瞬水剣によるダメージ+40% " },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "瞬水剣3ヒット（通常攻撃）", value: "1" },
      ];
    
      createchar_attackmethod(options);

      if (CharConstellations > 0)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "15")
    {
      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃1ループ（近接モード）", value: "1" },
        { text: "重撃（近接モード）", value: "6" },
        { text: "元素スキル", value: "16" },
        { text: "元素爆発（近接モード）", value: "21" },
        { text: "元素爆発（遠隔モード）", value: "22" },
      ];
    
      createchar_attackmethod(options);
    }
    else if (selectedCharId == "18")
    {
      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃", value: "1" },
        { text: "重撃", value: "6" },
      ];
      createchar_attackmethod(options);
      traits = [
        { id: "traitCheckbox2", label: "第2重：水元素ダメージ+15% " },
      ];

      if (CharConstellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "19")
    {
      traits = [
        { id: "traitCheckbox2", label: "第2重：古華剣・画雨籠山  水元素耐性-15％" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素スキル（古華剣・画雨籠山）", value: "16" },
        { text: "元素爆発（古華剣・裁雨留虹）", value: "21" },
      ];
    
      createchar_attackmethod(options);

      if (CharConstellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "73")
    {
      elementsToAddToCharTalent = [
        createCheckbox("skill_flag", true),
        createLabel("skill_flag", "烈霜の懲戒：HP50%以上"),
        document.createElement("br"),
        createLabel("Wriothesley_talent2", "固有天賦2：抵罪の赦免 "),
        createSelectList("Wriothesley_talent2", 0, 5, "", "層", 5),
        document.createElement("br")
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      traits = [
        { id: "traitCheckbox4", label: "第4重：栄枯盛衰  敵の防御力-30%" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃1ループ", value: "1" },
        { text: "重撃", value: "6" },
        { text: "元素爆発（ガンメタル・ウルフバイト）", value: "21" },
      ];
    
      createchar_attackmethod(options);
    }
    else if (selectedCharId == "21")
    {
      traits = [
        { id: "traitCheckbox4", label: "第4重：栄枯盛衰  敵の防御力-30%" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃1ループ(氷元素)", value: "1" },
        { text: "重撃(氷元素)", value: "6" },
        { text: "元素スキル（神里流・氷華）", value: "16" },
        { text: "元素爆発（神里流・霜滅）", value: "21" },
      ];
    
      createchar_attackmethod(options);

      if (CharConstellations > 2)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "22")
    {
      elementsToAddToCharTalent = [
        createCheckbox("eula_E", true),
        createLabel("eula_E", "氷潮の渦 "),
        document.createElement("br"),
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

      if (CharConstellations > 0)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 2)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "23")
    {
      elementsToAddToCharTalent = [
        createCheckbox("ganyu_talent1", true),
        createLabel("ganyu_talent1", "固有天賦1：霜華の矢と霜華満開の会心率+20%"),
        document.createElement("br"),
        createCheckbox("ganyu_talent2", true),
        createLabel("ganyu_talent2", "固有天賦2：氷元素ダメージ+20%"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
     
      traits = [
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

      if (CharConstellations > 0)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 2)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        const selectList = document.createElement("select");
        const elm_buff = [0, 5, 10, 15, 20, 25]; 
        selectList.id = "four_conste_buff";
      
        for (let j = 0; j <= 5; j++)
        {
          const option = document.createElement("option");
          option.value = elm_buff[j];
          option.text = `${"+"}${elm_buff[j]}${"%"}`;

          if (j == 5)
          {
            option.selected = true;
          }
          selectList.appendChild(option);
        }
        characterInfo.appendChild(selectList);
      }
      createchar_attackmethod(options)  
    }
    else if (selectedCharId == "28")
    {
      traits = [
        { id: "rosaria_talent1", label: "固有天賦1：懺悔に耳を傾ける幻影 会心率+12%" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃1ループ(物理)", value: "1" },
        { text: "元素スキル（罪喰いの懺悔）", value: "16" },
        { text: "元素爆発（臨終の聖礼）", value: "21" },
      ];
    
      createchar_attackmethod(options);
      traitCheckbox = createCheckbox(traits[0].id, true);
      traitLabel = createLabel(traits[0].id, traits[0].label);
  
      characterInfo.appendChild(traitCheckbox);
      characterInfo.appendChild(traitLabel);
      characterInfo.appendChild(document.createElement("br"));
    }
    else if (selectedCharId == "30")
    {
      elementsToAddToCharTalent = [
        createCheckbox("chongyun_talent2", true),
        createLabel("chongyun_talent2", "固有天賦2：追氷剣訣 氷元素耐性-10%"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃1ループ(氷元素)", value: "1" },
        { text: "元素スキル（霜の襲撃）", value: "16" },
        { text: "元素爆発（凛冽なる輪舞）", value: "21" },
      ];
      createchar_attackmethod(options);
    }
    else if (selectedCharId == "31")
    {
      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素スキル（霜の襲撃）", value: "16" },
        { text: "元素爆発（凛冽なる輪舞）", value: "21" },
      ];
      createchar_attackmethod(options);
    }
    else if (selectedCharId == "79")
    {
      traits = [
        createLabel("ClorindeTalent1", "固有天賦1：夜を裂く紫焔　"),
        createanySelectList("ClorindeTalent1", 0, 3, "", "層", 3, 1),
        document.createElement("br"),
        createTextNode("固有天賦2：会心率　"),
        createanySelectList("ClorindeTalent2", 0, 2, "+", "%", 2, 10),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        char_talent.appendChild(element);
      });

      traits = [
        { id: "traitCheckbox4", label: "第4重：雷元素ダメージ+20%" },
        { id: "traitCheckbox6", label: "第6重：クロリンデの会心率+10%、会心ダメージ+70%" },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃（夜巡り）", value: "1" },
        { text: "元素爆発（消えゆく残光）", value: "21" }
      ];
    
      createchar_attackmethod(options);

      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "32")
    {
      traits = [
        { id: "traitCheckbox2", label: "第2重：令儀・拝謁返霊 雷元素ダメージ " },
      ];

      options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃1ループ（啓途誓使）", value: "1" },
        { text: "元素スキル（律淵渡魂 冥祭）", value: "16" },
      ];
    
      createchar_attackmethod(options);

      if (CharConstellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        const cyno_talent1_list = createanySelectList("cyno_conste2", 0, 5, "+", "%", 5, 10)
        
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(cyno_talent1_list);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "33")
    {
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
    

      if (CharConstellations > 2)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[2].id, true);
        traitLabel = createLabel(traits[2].id, traits[2].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "34")
    {
      elementsToAddToCharTalent = [
        createCheckbox("raiden_E", true),
        createLabel("raiden_E", "元素スキル：雷罰悪曜の眼"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      traits = [
        {
          id: "traitCheckbox2",
          label: "第2重：防御力60%無視"
        }
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素爆発（奥義・夢想真説）", value: "21" },
      ];

      if (CharConstellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      createchar_attackmethod(options)  
    }
    else if (selectedCharId == "35")
    {
      traits = [
        {
          id: "traitCheckbox4",
          label: "第4重：攻撃力+25%"
        },
        {
          id: "traitCheckbox6",
          label: "第6重：雷元素ダメージ "
        }
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常1ループ（雷付与）", value: "1" },
        { text: "重撃（雷付与）", value: "6" },
        { text: "元素爆発（天街巡遊）", value: "21" },
      ];

      if (CharConstellations > 2)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 3)
      {
        traitLabel = createLabel(traits[1].id, traits[1].label);
        const keqing_conste6_list = createanySelectList("keqing_conste6", 0, 4, "+", "%", 3, 4);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(keqing_conste6_list);
        characterInfo.appendChild(document.createElement("br"));
      }
      createchar_attackmethod(options)  
    }
    else if (selectedCharId == "38")
    {
      elementsToAddToCharTalent = [
        createCheckbox("kujousara", true),
        createLabel("kujousara", "元素スキル：烏天狗雷霆召呪"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      traits = [
        {
          id: "traitCheckbox6",
          label: "第6重：会心ダメージ+60% "
        }
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素爆発（煌煌千道鎮式）", value: "21" },
      ];
      createchar_attackmethod(options)  

      if (CharConstellations == 4)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "39")
    {
      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常1ループ（物理）", value: "1" },
        { text: "元素スキル（夜巡りの翼）", value: "16" },
      ];
      createchar_attackmethod(options)  
    }
    else if (selectedCharId == "40")
    {
      
      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素スキル（浪追い）", value: "16" },
        { text: "元素爆発（雷斫り）", value: "21" },
      ];
      createchar_attackmethod(options);

      traits = [
        {
          id: "traitCheckbox6",
          label: "第6重：雷元素耐性-15%"
        }
      ];

      if (CharConstellations == 4)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "41")
    {
      elementsToAddToCharTalent = [
        createCheckbox("beidou_talent2", true),
        createLabel("beidou_talent2", "固有天賦2：飢餓 元素チャージ効率+30％"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
      
      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃1ループ（物理）", value: "1" },
        { text: "元素スキル（1回押し）", value: "16" },
        { text: "元素スキル（長押し）", value: "17" },
        { text: "元素爆発（雷牙）", value: "21" },
      ];
      createchar_attackmethod(options);

      traits = [
        {
          id: "traitCheckbox1",
          label: "第1重：与えるダメージ+10％"
        },
        {
          id: "traitCheckbox2",
          label: "第2重：会心率+10％"
        },
        {
          id: "traitCheckbox4",
          label: "第4重：敵の防御力-15%"
        },
      ];

      if (CharConstellations > 0)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
        if (CharConstellations > 1)
        {
          traitCheckbox = createCheckbox(traits[1].id, true);
          traitLabel = createLabel(traits[1].id, traits[1].label);
          characterInfo.appendChild(traitCheckbox);
          characterInfo.appendChild(traitLabel);
          characterInfo.appendChild(document.createElement("br"));
          if (CharConstellations > 2)
          {
            traitCheckbox = createCheckbox(traits[2].id, true);
            traitLabel = createLabel(traits[2].id, traits[2].label);
            characterInfo.appendChild(traitCheckbox);
            characterInfo.appendChild(traitLabel);
            characterInfo.appendChild(document.createElement("br"));
          }
        }
      }
    }
    else if (selectedCharId == "42")
    {
      elementsToAddToCharTalent = [
        createCheckbox("lisa_talent2", true),
        createLabel("lisa_talent2", "固有天賦2：静電気フィールド 敵の防御力-15%"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃1ループ", value: "1" },
        { text: "重撃", value: "6" },
        { text: "元素スキル（蒼雷）", value: "16" },
        { text: "元素爆発（薔薇の雷光）", value: "21" },
      ];
      createchar_attackmethod(options);
    }
    else if (selectedCharId == "44")
    {
      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃（児姿優風 1ループ）", value: "1" },
        { text: "重撃（児姿優風）", value: "6" },
        { text: "元素爆発（狂言・式楽伍番）", value: "21" },
      ];
      createchar_attackmethod(options);
    }
    else if (selectedCharId == "46")
    {
      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃（児姿優風 1ループ）", value: "1" },
        { text: "重撃（児姿優風）", value: "6" },
        { text: "落下攻撃（低空）", value: "11" },
        { text: "落下攻撃（高空）", value: "12" },
        { text: "元素スキル（風輪両立）", value: "16" },
      ];
      createchar_attackmethod(options);

      elementsToAddToCharTalent = [
        createLabel("xiao_talent1", "固有天賦1 降魔・平妖大聖：与えるダメージ"),
        createanySelectList("xiao_talent1", 0, 5, "+", "%", 5, 5),
        document.createElement("br"),
      ];
  
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
    }
    else if (selectedCharId == "49")
    {
      elementsToAddToCharTalent = [
        createCheckbox("faruzan_burst1", true),
        createLabel("faruzan_burst1", "詭風の禍つ：敵の風元素耐性-30%"),
        document.createElement("br"),
        createCheckbox("faruzan_burst2", true),
        createLabel("faruzan_burst2", "祈風の恵み：風元素ダメージアップ"),
        document.createElement("br"),
        createCheckbox("faruzan_talent2", true),
        createLabel("faruzan_talent2", "固有天賦2 七窟遺智：基礎ダメージアップ"),
        document.createElement("br"),
        createTextNode("　発動回数："),
        createSelectList("faruzan_talent2_count",0, 10, "", "回", 1),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "重撃（フルチャージ）", value: "1" },
        { text: "元素スキル（非想風天）", value: "16" },
        { text: "元素爆発（搏風秘道）", value: "21" },
      ];
      createchar_attackmethod(options);
    }
    else if (selectedCharId == "50")
    {
      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素スキル（非想風天）", value: "16" },
        { text: "元素爆発（戮心拳 追撃無し）", value: "21" },
      ];
      createchar_attackmethod(options)  
    }
    else if (selectedCharId == "55")
    {   
      traits = [
        {
          id: "traitCheckbox2",
          label: "第2重：元素熟知 "
        },
        {
          id: "traitCheckbox4",
          label: "第4重：エルシデーション "
        },
        {
          id: "traitCheckbox6",
          label: "第6重：会心率+10%、会心ダメージ+70%"
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃1ループ", value: "1" },
        { text: "重撃（草元素）", value: "6" },
        { text: "元素スキル（共相・イデア模写）", value: "16" },
        { text: "元素爆発(殊境・顕象結縛)", value: "21" },
      ];
      createchar_attackmethod(options);

      if (CharConstellations > 1)
      {
        traitLabel = createLabel(traits[0].id, traits[0].label);
        const elmbuff_list = createanySelectList("alhaitham_second_buff", 0, 4, "+", "", 4, 50);

        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(elmbuff_list);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 2)
      {
        elementsToAddToCharTalent = [
          createLabel("alhaitham_fourth1", "　琢光鏡生成数 "),
          createSelectList("alhaitham_fourth1", 0, 3, "", "枚", 3),
          document.createElement("br"),
        ];
        traitLabel = createLabel(traits[1].id, traits[1].label);
        characterInfo.appendChild(traitLabel);
        elementsToAddToCharTalent.forEach(element => {
          characterInfo.appendChild(element);
        });
      }
      if (CharConstellations == 4)
      {
        traitCheckbox = createCheckbox(traits[2].id, true);
        traitLabel = createLabel(traits[2].id, traits[2].label);
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "57")
    {
      elementsToAddToCharTalent = [
        createCheckbox("tighnari_talent1", true),
        createLabel("tighnari_talent1", "固有天賦1：元素熟知+50"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
     
      traits = [
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
        { text: "重撃(2段チャージ)", value: "6" },
        { text: "元素爆発(造成・蔓纏いの矢)", value: "21" },
      ];

      if (CharConstellations > 1)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 2)
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
    else if (selectedCharId == "58")
    {     
      traits = [
        {
          id: "traitCheckbox6",
          label: "第6重：元素ダメージ+12%"
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素スキル(1回押し)", value: "16" },
        { text: "元素スキル(長押し)", value: "17" },
        { text: "元素爆発(秘法・サプライズ特別配送)", value: "21" },
      ];
      createchar_attackmethod(options);
      if (CharConstellations == 4)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "62")
    {     
      elementsToAddToCharTalent = [
        createLabel("travelardendro_talent1", "固有天賦1：元素熟知 "),
        createanySelectList("travelardendro_talent1", 0, 10, "+", "", 5, 6),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      traits = [
        {
          id: "traitCheckbox6",
          label: "第6重：元素ダメージ+12%"
        },
        {
          id: "special_buff",
          label: "活性化済み・缶詰知識：基礎攻撃力+3"
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素スキル（緑剣）", value: "16" },
        { text: "元素爆発（臥草若化）", value: "21" },
      ];
      createchar_attackmethod(options);

      traitCheckbox = createCheckbox(traits[1].id, true);
      traitLabel = createLabel(traits[1].id, traits[1].label);
      characterInfo.appendChild(traitCheckbox);
      characterInfo.appendChild(traitLabel);
      characterInfo.appendChild(document.createElement("br"));

      if (CharConstellations == 4)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
    }
    else if (selectedCharId == "77")
    {
      elementsToAddToCharTalent = [
        createCheckbox("chiori_talent2", true),
        createLabel("chiori_talent2", "固有天賦2：岩元素ダメージ+20%"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃1ループ(岩元素)", value: "1" },        
        { text: "元素スキル(羽袖一触)", value: "16" },
        { text: "元素爆発(二刀の型・比翼)", value: "21" },
      ];
      createchar_attackmethod(options)  
    }
    else if (selectedCharId == "75")
    {
      elementsToAddToCharTalent = [
        createLabel("navia_talent2", "固有天賦2：炎/雷/氷/水元素のキャラクター数"),
        createSelectList("navia_talent2", 0, 2, "", "人", 2),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
     
      traits = [
        {
          id: "traitCheckbox4",
          label: "第4重：敵の岩元素耐性-20%"
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃1ループ(岩元素)", value: "1" },        
        { text: "元素スキル(セレモニアル・クリスタルショット)", value: "16" },
        { text: "元素爆発(晴天を衝く霰弾のサルート)", value: "21" },
      ];

      if (CharConstellations > 2)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      createchar_attackmethod(options)  
    }
    else if (selectedCharId == "63")
    {
      elementsToAddToCharTalent = [
        createCheckbox("arataki_burst_effect", true),
        createLabel("arataki_burst_effect", "元素爆発：防御力を基準に攻撃力がアップ",),
        document.createElement("br"),
        createCheckbox("arataki_talent2", true),
        createLabel("arataki_talent2", "固有天賦2：「荒瀧逆袈裟」のダメージが荒瀧一斗の防御力35%分アップ"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
     
      traits = [
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

      if (CharConstellations > 2)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
      }
      createchar_attackmethod(options)  
    }
    else if (selectedCharId == "64")
    {
      elementsToAddToCharTalent = [
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
     
      traits = [
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

      if (CharConstellations > 1)
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
      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[1].id, true);
        traitLabel = createLabel(traits[1].id, traits[1].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
      }
      createchar_attackmethod(options)  
    }
    else if (selectedCharId == "65")
    {
      elementsToAddToCharTalent = [
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
    else if (selectedCharId == "81")
    {
      elementsToAddToCharTalent = [
        createCheckbox("Kachina_talent1", true),
        createLabel("Kachina_talent1", "固有天賦1：岩元素ダメージ+20％"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });
      
      traits = [
        {
          id: "traitCheckbox2",
          label: "第4重：スーパードリル領域にいる敵の数 "
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素スキル(いけ、ぐるぐるコマちゃん！)", value: "16" },
        { text: "元素爆発(さあ、本気出すよ！)", value: "21" },
      ];

      if (CharConstellations > 2)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
    
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        const four_conste_selectList = createSelectList("four_conste", 1, 3,"", "体", 1);
        const four_conste_option = document.createElement("option");
        four_conste_option.value = 4;
        four_conste_option.text = "4体以上";
        four_conste_selectList.appendChild(four_conste_option);
        characterInfo.appendChild(four_conste_selectList);
      }

      createchar_attackmethod(options)  
    }
    else if (selectedCharId == "68")
    {    
      elementsToAddToCharTalent.forEach(element => {
        char_talent.appendChild(element);
      });

      traits = [
        {
          id: "traitCheckbox6",
          label: "第6重：防御力50%相当の攻撃力をアップ"
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃１ループ(爆発中)", value: "1" },
      ];
      if (CharConstellations > 3)
      {
        traitCheckbox = createCheckbox(traits[0].id, true);
        traitLabel = createLabel(traits[0].id, traits[0].label);
  
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
      }
      createchar_attackmethod(options)  
    }
    else if (selectedCharId == "69")
    {
      traits = [
        {
          id: "talent2_buff",
          label: "固有天賦2 備えあれば憂いなし：岩元素ダメージ+12%"
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "通常攻撃", value: "1" },
        { text: "重撃", value: "6" },        
        { text: "元素スキル（璇璣屏）", value: "16" },
        { text: "元素爆発（天権崩玉）", value: "21" },
      ];

      traitCheckbox = createCheckbox(traits[0].id, true);
      traitLabel = createLabel(traits[0].id, traits[0].label);

      characterInfo.appendChild(traitCheckbox);
      characterInfo.appendChild(traitLabel);
      createchar_attackmethod(options)  
    }
    else if (selectedCharId  == "70")
    {
      traits = [
        {
          id: "traitCheckbox1",
          label: "第1重：会心率+10%"
        },
        {
          id: "special_buff",
          label: "活性化済み・缶詰知識：基礎攻撃力+3"
        },
      ];

      const options = [
        { text: "攻撃方法", value: "0", disabled: true, selected: true },
        { text: "元素スキル（星落としの剣）", value: "16" },
        { text: "元素爆発（岩潮幾重）", value: "21" },
      ];

      traitCheckbox = createCheckbox(traits[1].id, true);
      traitLabel = createLabel(traits[1].id, traits[1].label);
      characterInfo.appendChild(traitCheckbox);
      characterInfo.appendChild(traitLabel);
      characterInfo.appendChild(document.createElement("br"));

      if (CharConstellations > 0)
      {
        traitCheckbox = createCheckbox(traits[0].id, false);
        traitLabel = createLabel(traits[0].id, traits[0].label);
        characterInfo.appendChild(traitCheckbox);
        characterInfo.appendChild(traitLabel);
        characterInfo.appendChild(document.createElement("br"));
      }
      createchar_attackmethod(options)  
    }
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
    if (option.disabled)
    {
      optionElement.disabled = true;
    }
    if (option.selected)
    {
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

  const dependElementMap = {
    0: [1, 0, 0, 0, 0, 1, 0, 0],
    1: [0, 1, 0, 1, 0, 1, 0, 0],
    2: [0, 0, 1, 0, 0, 0, 0, 0],
    3: [1, 0, 0, 1, 0, 1, 0, 0],
    4: [0, 0, 0, 0, 1, 0, 0, 0],
    5: [0, 0, 0, 0, 0, 1, 0, 0],
    6: [0, 0, 0, 0, 0, 0, 1, 0],
    7: [0, 0, 0, 0, 0, 0, 0, 1],
  };
  
  let depend_element = dependElementMap[char_propaty[0]] || [0, 0, 0, 0, 0, 0, 0, 0];
  let pyro_resist_form = document.getElementById("enemy-pyroresist-form");
  let pyro_debuff_form = document.getElementById("pyrodebuff-form");
  let hydro_resist_form = document.getElementById("enemy-hydroresist-form");
  let hydro_debuff_form = document.getElementById("hydrodebuff-form");
  let cyro_resist_form = document.getElementById("enemy-cyroresist-form");
  let cyro_debuff_form = document.getElementById("cyrodebuff-form");
  let electro_resist_form = document.getElementById("enemy-electroresist-form");
  let electro_debuff_form = document.getElementById("electrodebuff-form");
  let anemo_resist_form = document.getElementById("enemy-anemoresist-form");
  let anemo_debuff_form = document.getElementById("anemodebuff-form");
  let dendro_resist_form = document.getElementById("enemy-dendroresist-form");
  let dendro_debuff_form = document.getElementById("dendrodebuff-form");
  let geo_resist_form = document.getElementById("enemy-georesist-form");
  let geo_debuff_form = document.getElementById("geodebuff-form");
  let phisics_resist_form = document.getElementById("enemy-phisicsresist-form");
  let phisics_debuff_form = document.getElementById("phisicsdebuff-form");

  pyro_resist_form.style.display = "none";
  pyro_debuff_form.style.display = "none";
  hydro_resist_form.style.display = "none";
  hydro_debuff_form.style.display = "none";
  cyro_resist_form.style.display = "none";
  cyro_debuff_form.style.display = "none";
  electro_resist_form.style.display = "none";
  electro_debuff_form.style.display = "none";
  anemo_resist_form.style.display = "none";
  anemo_debuff_form.style.display = "none";
  dendro_resist_form.style.display = "none";
  dendro_debuff_form.style.display = "none";
  geo_resist_form.style.display = "none";
  geo_debuff_form.style.display = "none";
  phisics_resist_form.style.display = "none";
  phisics_debuff_form .style.display = "none";

  const formElements = [
    { forms: [team_hp_form, team_hprate_form], index: 0 },
    { forms: [team_attack_form, team_attackrate_form], index: 4 },
    { forms: [team_deff_form, team_deffrate_form], index: 1 },
    { forms: [team_elm_form], index: 2 },
    { forms: [team_elm_charge_form], index: 3 },
    { forms: [team_cr_form], index: 5 },
    { forms: [team_cd_form], index: 6 }
  ];
  for (const element of formElements)
  {
    if (depend_status[element.index] == 1)
    {
      for (let i = 0; i < element.forms.length; i++)
      {
        element.forms[i].style.display = "table-row";
      }
    }
  }

  const resistformElements = [
    { forms: [pyro_resist_form, pyro_debuff_form ], index: 0 },
    { forms: [hydro_resist_form, hydro_debuff_form ], index: 1 },
    { forms: [cyro_resist_form, cyro_debuff_form ], index: 2 },
    { forms: [electro_resist_form, electro_debuff_form ], index: 3 },
    { forms: [anemo_resist_form, anemo_debuff_form], index: 4 },
    { forms: [dendro_resist_form, dendro_debuff_form], index: 5 },
    { forms: [geo_resist_form, geo_debuff_form], index: 6 },
    { forms: [phisics_resist_form, phisics_debuff_form], index: 7 }
  ];
  for (const element of resistformElements)
  {
    if (depend_element[element.index] == 1)
    {
      for (let i = 0; i < element.forms.length; i++)
      {
        element.forms[i].style.display = "table-row";
      }
    }
  }
}


async function elemental_reaction_add()
{
  let team_elm_form = document.getElementById("team_elm_form");
  team_elm_form.style.display = "none";
  await calculate_depend_status();
  showFormElements();
}

async function elementalcharge_reaction_add()
{
  let team_elmcharge_form = document.getElementById("team_elm_charge_form");
  team_elmcharge_form.style.display = "none";
  await calculate_depend_status();
  showFormElements();
}

// チェックボックスを生成するユーティリティ関数
function createCheckbox(id, checked)
{
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.checked = checked;
  return checkbox;
}

// ラベルを生成するユーティリティ関数
function createLabel(forId, labelText)
{
  const label = document.createElement("label");
  label.htmlFor = forId;
  label.textContent = labelText;
  return label;
}

// テキストノードを生成するユーティリティ関数
function createTextNode(text)
{
  return document.createTextNode(text);
}

// セレクトリストを生成するユーティリティ関数
function createSelectList(id, initial, optionsCount, head_unit, unit, select_index)
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

function createanySelectList(id, initial, optionsCount, head_unit, unit, select_index, rate)
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

function createRadio(name, value, checked, id, labelText)
{
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = name;
  radio.value = value;
  radio.checked = checked;
  radio.id = id;
  return radio;
}

function createInputWithUnit(type, id, value, unit)
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

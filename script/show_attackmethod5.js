async function show_attack_method()
{
  attack_method = document.getElementById("attack_method_id").value;     
  const select_reaction_method = document.getElementById("select_reaction_method");
  select_reaction_method.innerHTML = "";
  const elemental_reaction = document.getElementById("element_action");
  elemental_reaction.innerHTML = "";
  const attack_method_prop = document.getElementById("attack_method_prop");
  attack_method_prop.innerHTML = "";
  const temporary_char_talent = document.getElementById("temporary_char_talent");
  temporary_char_talent.innerHTML = "";
  await calculate_depend_status();

  let elements_const_dmg;

  const ReactionOffRadioButton = document.createElement("input");
  ReactionOffRadioButton.type = "radio";
  ReactionOffRadioButton.id = "reactionoff_flag";
  ReactionOffRadioButton.name = "reaction_flag";
  ReactionOffRadioButton.checked = true;
  ReactionOffRadioButton.value = "reactionoff_flag";
  
  const ReactionOffRadio_label = document.createElement("label");
  ReactionOffRadio_label.htmlFor = "reactionoff_flag";
  ReactionOffRadio_label.textContent = "反応なし ";
  
  elemental_reaction.appendChild(ReactionOffRadioButton);
  elemental_reaction.appendChild(ReactionOffRadio_label);

  const ReactionOnRadioButton = document.createElement("input");
  ReactionOnRadioButton.type = "radio";
  ReactionOnRadioButton.id = "reactionon_flag";
  ReactionOnRadioButton.name = "reaction_flag";
  ReactionOnRadioButton.checked = false;
  ReactionOnRadioButton.value = "reactionon_flag";
  
  const ReactionOnRadio_label = document.createElement("label");
  ReactionOnRadio_label.htmlFor = "reactionon_flag";
  ReactionOnRadio_label.textContent = "反応あり ";

  const radiobutton = document.createElement("input");
  radiobutton.type = "radio";
  radiobutton.id = "no-reaction";
  radiobutton.name = "elemental-reaction";
  radiobutton.checked = true;
  radiobutton.value = "no-reaction";
  
  const radio_label = document.createElement("label");
  radio_label.htmlFor = "no-reaction";
  radio_label.textContent = "反応なし ";
  
  select_reaction_method.appendChild(radiobutton);
  select_reaction_method.appendChild(radio_label);

  const characterInfo = document.getElementById("characterInfo");
  const Aggravate_text = createTextNode("　超激化回数：");
  const Spread_text = createTextNode("　草激化回数：");
  const vap_text = createTextNode("蒸発回数：");
  let traits;

  if (char_propaty[0] == 0)
  {
    elemental_reaction.appendChild(ReactionOnRadioButton);
    elemental_reaction.appendChild(ReactionOnRadio_label);
    elemental_reaction.appendChild(document.createElement("br"));

    const traitCheckbox1 = document.createElement("input");
    traitCheckbox1.type = "radio";
    traitCheckbox1.id = elm_reaction_obj[0].id;
    traitCheckbox1.name = "elemental-reaction";
    traitCheckbox1.value = elm_reaction_obj[0].id;

    const traitLabel1 = document.createElement("label");
    traitLabel1.htmlFor = elm_reaction_obj[0].id;
    traitLabel1.textContent = elm_reaction_obj[0].label;

    const traitCheckbox2 = document.createElement("input");
    traitCheckbox2.type = "radio";
    traitCheckbox2.id = elm_reaction_obj[2].id;
    traitCheckbox2.name = "elemental-reaction";
    traitCheckbox2.value = elm_reaction_obj[2].id;

    traitLabel2 = document.createElement("label");
    traitLabel2.htmlFor = elm_reaction_obj[2].id;
    traitLabel2.textContent = elm_reaction_obj[2].label;

    select_reaction_method.appendChild(traitCheckbox1);
    select_reaction_method.appendChild(traitLabel1);
    select_reaction_method.appendChild(traitCheckbox2);
    select_reaction_method.appendChild(traitLabel2);
    select_reaction_method.appendChild(document.createElement("br"));

    elements_const_dmg = [
      createLabel("Overloaded", "　過負荷回数："),
      createSelectList("Overloaded", 0, 50, "", "回", 0),
      document.createElement("br"),
      createLabel("Burgeon", "　烈開花回数："),
      createSelectList("Burgeon", 0, 50, "", "回", 0),
      document.createElement("br"),
    ];
  
    elements_const_dmg.forEach(element => {
      elemental_reaction.appendChild(element);
    });
  }

  if (char_propaty[0] == 1)
  {
    elemental_reaction.appendChild(ReactionOnRadioButton);
    elemental_reaction.appendChild(ReactionOnRadio_label);
    elemental_reaction.appendChild(document.createElement("br"));

    const traitCheckbox1 = document.createElement("input");
    traitCheckbox1.type = "radio";
    traitCheckbox1.name = "elemental-reaction";
    traitCheckbox1.id = elm_reaction_obj[1].id;
    traitCheckbox1.value = elm_reaction_obj[1].id;

    const traitLabel1 = document.createElement("label");
    traitLabel1.htmlFor = elm_reaction_obj[1].id;
    traitLabel1.textContent = elm_reaction_obj[1].label;

    select_reaction_method.appendChild(traitCheckbox1);
    select_reaction_method.appendChild(traitLabel1);
    select_reaction_method.appendChild(document.createElement("br"));

    if (selectedCharId != 11)
    {
      elements_const_dmg = [
        createLabel("Electro_Charged", "　感電回数："),
        createSelectList("Electro_Charged", 0, 50, "", "回", 0),
        document.createElement("br"),
        createLabel("Bloom", "　開花回数："),
        createSelectList("Bloom", 0, 50, "", "回", 0),
        document.createElement("br"),
        createLabel("NirouBloom", "　豊穣開花回数："),
        createSelectList("NirouBloom", 0, 50, "", "回", 0),
        document.createElement("br"),
        createLabel("Nirou_HP", "　ニィロウHP："),
        createInputWithUnit("text", "Nirou_HP", "50000",""),
        document.createElement("br")
      ];
    }
    else
    {
      elements_const_dmg = [
        createLabel("Electro_Charged", "　感電回数："),
        createSelectList("Electro_Charged", 0, 50, "", "回", 0),
        document.createElement("br"),
        createLabel("Bloom", "　開花回数："),
        createSelectList("Bloom", 0, 50, "", "回", 0),
        document.createElement("br"),
        createLabel("NirouBloom", "　豊穣開花回数："),
        createSelectList("NirouBloom", 0, 50, "", "回", 0),
        document.createElement("br"),
      ];
    }

    elements_const_dmg.forEach(element => {
      elemental_reaction.appendChild(element);
    });
  }

  else if (char_propaty[0] == 2)
  {
    elemental_reaction.appendChild(ReactionOnRadioButton);
    elemental_reaction.appendChild(ReactionOnRadio_label);
    elemental_reaction.appendChild(document.createElement("br"));

    const traitCheckbox1 = document.createElement("input");
    traitCheckbox1.type = "radio";
    traitCheckbox1.id = elm_reaction_obj[3].id;
    traitCheckbox1.name = "elemental-reaction";
    traitCheckbox1.value = elm_reaction_obj[3].id;

    const traitLabel1 = document.createElement("label");
    traitLabel1.htmlFor = elm_reaction_obj[3].id;
    traitLabel1.textContent = elm_reaction_obj[3].label;

    select_reaction_method.appendChild(traitCheckbox1);
    select_reaction_method.appendChild(traitLabel1);
    select_reaction_method.appendChild(document.createElement("br"));
  }

  else if (char_propaty[0] == 3)
  {
    elemental_reaction.appendChild(ReactionOnRadioButton);
    elemental_reaction.appendChild(ReactionOnRadio_label);
    elemental_reaction.appendChild(document.createElement("br"));

    elements_const_dmg = [
      createLabel("Overloaded", "　過負荷回数："),
      createSelectList("Overloaded", 0, 50, "", "回", 0),
      document.createElement("br"),
      createLabel("Electro_Charged", "　感電回数："),
      createSelectList("Electro_Charged", 0, 50, "", "回", 0),
      document.createElement("br"),
      createLabel("Hyperbloom", "　超開花回数："),
      createSelectList("Hyperbloom", 0, 50, "", "回", 0),
      document.createElement("br"),
    ];
  
    elements_const_dmg.forEach(element => {
      elemental_reaction.appendChild(element);
    });
  }

  else if (char_propaty[0] == 5)
  {
    elemental_reaction.appendChild(ReactionOnRadioButton);
    elemental_reaction.appendChild(ReactionOnRadio_label);
    elemental_reaction.appendChild(document.createElement("br"));
    elements_const_dmg = [
      createLabel("Bloom", "　開花回数："),
      createSelectList("Bloom", 0, 50, "", "回", 0),
      document.createElement("br"),
      createLabel("NirouBloom", "　豊穣開花回数："),
      createSelectList("NirouBloom", 0, 50, "", "回", 0),
      document.createElement("br"),
      createLabel("Nirou_HP", "　　ニィロウHP："),
      createInputWithUnit("text", "Nirou_HP", "50000",""),
      document.createElement("br")
    ];
    elements_const_dmg.forEach(element => {
      elemental_reaction.appendChild(element);
    });
  }

  let options = [];
  let elementsToAddToCharTalent = [];

  if (selectedCharId == "0")
  {
    if (attack_method == 21)
    {
      elementsToAddToCharTalent = [
        createLabel("dehya_1_count", "　熾鬣拳ヒット回数："),
        createSelectList("dehya_1_count", 0, 15, "", "回", 10),
        document.createElement("br"),
        createLabel("dehya_2_count", "　残火蹴ヒット回数："),
        createSelectList("dehya_2_count", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];

      const elementsReactionToAddToCharTalent = [
        createLabel("dehya_1_reactioncount", "　熾鬣拳ヒット回数："),
        createSelectList("dehya_1_reactioncount", 0, 15, "", "回", 4),
        document.createElement("br"),
        createLabel("dehya_2_reactioncount", "　残火蹴ヒット回数："),
        createSelectList("dehya_2_reactioncount", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      elementsReactionToAddToCharTalent.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
  }
  else if (selectedCharId == "71")
  {
    if (attack_method == 6)
    {
      if (CharConstellations < 4)
      {
        traits = [
          createLabel("Lyney_attack_count1", "　1段チャージ狙い撃ちヒット回数："),
          createSelectList("Lyney_attack_count1", 0, 10, "", "回", 0),
          document.createElement("br"),
          createLabel("Lyney_attack_count2", "　プロップアローヒット回数："),
          createSelectList("Lyney_attack_count2", 0, 10, "", "回", 1),
          document.createElement("br"),
          createLabel("", "　クラッカーバレット"),
          document.createElement("br"),
          createLabel("Lyney_attack_count3", "　　HP消費あり"),
          createSelectList("Lyney_attack_count3", 0, 10, "", "回", 1),
          document.createElement("br"),
          createLabel("Lyney_attack_count4", "　　HP消費なし"),
          createSelectList("Lyney_attack_count4", 0, 10, "", "回", 0),
          document.createElement("br"),
          createLabel("Lyney_attack_count5", "　霊息の棘ヒット回数："),
          createSelectList("Lyney_attack_count5", 0, 20, "", "回", 1),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          attack_method_prop.appendChild(element);
        });

        traits = [
          createLabel("Lyney_react_count1", "　1段チャージ狙い撃ち反応回数："),
          createSelectList("Lyney_react_count1", 0, 1, "", "回", 0),
          document.createElement("br"),
          createLabel("Lyney_react_count2", "　プロップアロー反応回数："),
          createSelectList("Lyney_react_count2", 0, 1, "", "回", 1),
          document.createElement("br"),
          createLabel("", "　クラッカーバレット"),
          document.createElement("br"),
          createLabel("Lyney_react_count3", "　　HP消費あり"),
          createSelectList("Lyney_react_count3", 0, 10, "", "回", 1),
          document.createElement("br"),
          createLabel("Lyney_react_count4", "　　HP消費なし"),
          createSelectList("Lyney_react_count4", 0, 10, "", "回", 0),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          select_reaction_method.appendChild(element);
        });
      }
    else
    {
      traits = [
        createLabel("Lyney_attack_count1", "　1段チャージ狙い撃ちヒット回数："),
        createSelectList("Lyney_attack_count1", 0, 10, "", "回", 0),
        document.createElement("br"),
        createLabel("Lyney_attack_count2", "　プロップアローヒット回数："),
        createSelectList("Lyney_attack_count2", 0, 10, "", "回", 1),
        document.createElement("br"),
        createLabel("", "　クラッカーバレットヒット回数"),
        document.createElement("br"),
        createLabel("Lyney_attack_count3", "　　HP消費あり"),
        createSelectList("Lyney_attack_count3", 0, 10, "", "回", 1),
        document.createElement("br"),
        createLabel("Lyney_attack_count4", "　　HP消費なし"),
        createSelectList("Lyney_attack_count4", 0, 10, "", "回", 0),
        document.createElement("br"),
        createLabel("Lyney_attack_count5", "　霊息の棘ヒット回数："),
        createSelectList("Lyney_attack_count5", 0, 20, "", "回", 1),
        document.createElement("br"),
        createLabel("", "　クラッカーバレット・重奏ヒット回数"),
        document.createElement("br"),
        createLabel("Lyney_attack_count6", "　　HP消費あり"),
        createSelectList("Lyney_attack_count6", 0, 10, "", "回", 1),
        document.createElement("br"),
        createLabel("Lyney_attack_count7", "　　HP消費なし"),
        createSelectList("Lyney_attack_count7", 0, 10, "", "回", 0),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("Lyney_react_count1", "　1段チャージ狙い撃ち反応回数："),
        createSelectList("Lyney_react_count1", 0, 10, "", "回", 0),
        document.createElement("br"),
        createLabel("Lyney_react_count2", "　プロップアロー反応回数："),
        createSelectList("Lyney_react_count2", 0, 10, "", "回", 1),
        document.createElement("br"),
        createLabel("", "　クラッカーバレット反応回数"),
        document.createElement("br"),
        createLabel("Lyney_react_count3", "　　HP消費あり"),
        createSelectList("Lyney_react_count3", 0, 10, "", "回", 1),
        document.createElement("br"),
        createLabel("Lyney_react_count4", "　　HP消費なし"),
        createSelectList("Lyney_react_count4", 0, 10, "", "回", 0),
        document.createElement("br"),
        createLabel("", "　クラッカーバレット・重奏反応回数"),
        document.createElement("br"),
        createLabel("Lyney_react_count5", "　　HP消費あり"),
        createSelectList("Lyney_react_count5", 0, 10, "", "回", 1),
        document.createElement("br"),
        createLabel("Lyney_react_count6", "　　HP消費なし"),
        createSelectList("Lyney_react_count6", 0, 10, "", "回", 0),

        document.createElement("br"),
      ];
      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
    }
    else if (attack_method == 16)
    {
      traits = [
        createLabel("Lyney_attack_count1", "　プロップ残数 "),
        createSelectList("Lyney_attack_count1", 0, 5, "", "層", 5),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      options = [
        { text: "スキルダメージ", value: "0", checked: true },
      ];
      createCheckboxList(options);
    }
    else if (attack_method == 21)
    {
      traits = [
        createLabel("Lyney_attack_count1", "スキルヒット回数 "),
        createSelectList("Lyney_attack_count1", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("Lyney_attack_count2", "クラッカー起爆ヒット回数 "),
        createSelectList("Lyney_attack_count2", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("Lyney_react_count1", "スキル反応回数 "),
        createSelectList("Lyney_react_count1", 0, 1, "", "回", 0),
        document.createElement("br"),
        createLabel("Lyney_react_count2", "クラッカー起爆反応回数 "),
        createSelectList("Lyney_react_count2", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
  }
  else if (selectedCharId == "1")
  {
    if (attack_method == 1 && CharConstellations < 4)
    {
      options = [
        { text: "１段目-１", value: "0", checked: true },
        { text: "１段目-２", value: "1" },
        { text: "２段目", value: "2" },
        { text: "３段目", value: "3", checked: true },
        { text: "４段目-１", value: "4"},
        { text: "４段目-２", value: "5"},
        { text: "５段目", value: "6", checked: true },
      ];
    } 
    createCheckboxList(options);
  }
  else if (selectedCharId == "2")
  {
    if (attack_method == 1)
    {
      options = [
        { text: "１段目", value: "0", checked: true },
        { text: "２段目", value: "1" },
        { text: "３段目", value: "2" },
        { text: "４段目", value: "3", checked: true },
        { text: "５段目-１", value: "4"},
        { text: "５段目-２", value: "5"},
        { text: "６段目", value: "6", checked: true },
      ];
    } 
    else if (attack_method == 6)
    {
      options = [
        { text: "重撃", value: "0", checked: true },
      ];
    }
    else if (attack_method == 21)
    {
      let hutao_Q_check = createCheckbox("hutao_Q_effect", true);
      let hutao_Q_label = createLabel("hutao_Q_effect", "胡桃のHP50%以下");
      char_talent.appendChild(hutao_Q_check);
      char_talent.appendChild(hutao_Q_label);
      
      options = [
        { text: "安神秘法", value: "0", checked: true },
      ];
    }
    createCheckboxList(options);
  }
  else if (selectedCharId == "3")
  {
    if (attack_method == 1)
    {
      options = [
        { text: "１段目", value: "0", checked: true },
        { text: "２段目", value: "1" },
        { text: "３段目", value: "2" },
      ];
    } 
    else if (attack_method == 6)
    {
      options = [
        { text: "重撃", value: "0", checked: true },
      ];
      const newCheckbox = createCheckbox("klee_talent1", true);
      const label = createLabel("klee_talent1", "こんこんプレゼント：与えるダメージ+50%");
      const lineBreak = document.createElement("br");
    
      // 新しいチェックボックスと関連する要素を追加
      temporary_char_talent.appendChild(newCheckbox);
      temporary_char_talent.appendChild(label);
      temporary_char_talent.appendChild(lineBreak);   
    }
    else if (attack_method == 16)
    {
      elementsToAddToCharTalent = [
        createLabel("klee_1_count", "　ボンボン爆弾ヒット回数："),
        createSelectList("klee_1_count", 0, 3, "", "回", 3),
        document.createElement("br"),
        createLabel("klee_2_count", "　ブービートラップヒット回数："),
        createSelectList("klee_2_count", 0, 8, "", "回", 8),
        document.createElement("br"),
      ];

      const elementsReactionToAddToCharTalent = [
        createLabel("klee_1_reactioncount", "　ボンボン爆弾ヒット回数："),
        createSelectList("klee_1_reactioncount", 0, 3, "", "回", 1),
        document.createElement("br"),
        createLabel("klee_2_reactioncount", "　ブービートラップヒット回数："),
        createSelectList("klee_2_reactioncount", 0, 8, "", "回", 3),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      elementsReactionToAddToCharTalent.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
    else if (attack_method == 21)
    {
      elementsToAddToCharTalent = [
        createLabel("element-mastery-label", "　ヒット回数："),
        createInputWithUnit("text", "klee_Q_attackcount", "18.95","回"),
        document.createElement("br")
      ];

      const elementsReactionToAddToCharTalent = [
        createLabel("element-mastery-label", "　ヒット回数："),
        createInputWithUnit("text", "klee_Q_reactioncount", "7","回"),
        document.createElement("br")
      ];
  
      elementsToAddToCharTalent.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      elementsReactionToAddToCharTalent.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
    createCheckboxList(options);
  }
  else if (selectedCharId == "4")
  {
    if (attack_method == 1)
    {
      options = [
        { text: "１段目", value: "0", checked: true },
        { text: "２段目", value: "1" },
        { text: "３段目", value: "2" },
        { text: "４段目", value: "3", checked: true },
      ];
      createCheckboxList(options);
    }
    else if (attack_method == 16)
    {
      options = [
        { text: "１段目", value: "0", checked: true },
        { text: "２段目", value: "1" },
        { text: "３段目", value: "2" }
      ];
      createCheckboxList(options);
    }
    else if (attack_method == 21)
    {          
      elementsToAddToCharTalent = [
        createLabel("diluc_1_count", "　斬撃ダメージヒット回数："),
        createSelectList("diluc_1_count", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("diluc_2_count", "　継続ダメージヒット回数："),
        createSelectList("diluc_2_count", 0, 10, "", "回", 8),
        document.createElement("br"),
        createLabel("diluc_3_count", "　爆発ダメージヒット回数："),
        createSelectList("diluc_3_count", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];

      const elementsReactionToAddToCharTalent = [
        createLabel("diluc_1_reactioncount", "　斬撃ダメージヒット回数："),
        createSelectList("diluc_1_reactioncount", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("diluc_2_reactioncount", "　継続ダメージヒット回数："),
        createSelectList("diluc_2_reactioncount", 0, 10, "", "回", 3),
        document.createElement("br"),
        createLabel("diluc_3_reactioncount", "　爆発ダメージヒット回数："),
        createSelectList("diluc_3_reactioncount", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      elementsReactionToAddToCharTalent.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
  }
  else if (selectedCharId == "76")
  {
    if (attack_method == 1)
    {
      options = [
        { text: "１段目", value: "0", checked: true },
        { text: "２段目", value: "1" },
        { text: "３段目", value: "2" },
        { text: "４段目", value: "3" },
      ];
    }
    else if (attack_method == 6)
    {
      elementsToAddToCharTalent = [
        createLabel("gaming_count1", "　連続重撃ヒット回数："),
        createSelectList("gaming_count1", 0, 20, "", "回", 10),
        document.createElement("br"),
        createLabel("gaming_count2", "　重撃フィニッシュヒット回数："),
        createSelectList("gaming_count2", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];

      elementsToAddToCharTalent.forEach(element => {
        attack_method_prop.appendChild(element);
      });
    }
    else if (attack_method == 11)
    {
      gaming_talent = [
        createCheckbox("gaming_talent2", true),
        createLabel("gaming_talent2", "固有天賦2：HP50%以上"),
        document.createElement("br"),
      ];
      gaming_talent.forEach(element => {
        temporary_char_talent.appendChild(element);
      });
      traits = [
        createLabel("gaming_attack_count", "　落下攻撃・踏雲献瑞ヒット回数："),
        createSelectList("gaming_attack_count", 0, 5, "", "回", 5),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("gaming_react_count", "　落下攻撃・踏雲献瑞反応回数："),
        createSelectList("gaming_react_count", 0, 5, "", "回", 5),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
    else if (attack_method == 21)
    {
      traits = [
        createLabel("gaming_attack_count", "　燦炎金猊の舞ヒット回数："),
        createSelectList("gaming_attack_count", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("gaming_react_count", "　燦炎金猊の舞反応回数："),
        createSelectList("gaming_react_count", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
  }
  else if (selectedCharId == "6")
  {
    const yanfei_text = createTextNode("　丹火の印：")
    const yanfei_textskill_selectlist = createSelectList("yanfei_mark", 0, 4, "", "枚", 3);
    attack_method_prop.appendChild(yanfei_text);
    attack_method_prop.appendChild(yanfei_textskill_selectlist);
    attack_method_prop.appendChild(document.createElement("br"));
    if (attack_method == 1)
    {
      options = [
        { text: "１段目", value: "0", checked: true },
        { text: "２段目", value: "1" },
        { text: "３段目", value: "2" },
      ];
    }
    else if (attack_method == 6)
    {
      elementsToAddToCharTalent = [
        createCheckbox("yanfei_Q", true),
        createLabel("yanfei_Q", "元素爆発：契約成立"),
        document.createElement("br"),
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        temporary_char_talent.appendChild(element);
      });
      options = [
        { text: "重撃", value: "0", checked: true },
      ];
    }
    else if (attack_method == 16)
    {
      options = [
        { text: "丹書契約", value: "0", checked: true },
      ];
    }
    else if (attack_method == 21)
    {
      options = [
        { text: "契約成立", value: "0", checked: true },
      ];
    }
    createCheckboxList(options);
  }
  else if (selectedCharId == "7")
  {
    if (attack_method == 6)
    {
      elementsToAddToCharTalent = [
        createLabel("xinyan1_count", "　連続重撃ヒット回数："),
        createSelectList("xinyan1_count", 0, 20, "", "回", 10),
        document.createElement("br"),
        createLabel("xinyan2_count", "　重撃フィニッシュヒット回数："),
        createSelectList("xinyan2_count", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];

      elementsToAddToCharTalent.forEach(element => {
        attack_method_prop.appendChild(element);
      });
    }
  }
  else if (selectedCharId == "8")
  {
    if (attack_method == 16)
    {
      options = [
        { text: "一回押しダメージ", value: "0", checked: true },
      ];
    }
    else if (attack_method == 17)
    {
      options = [
        { text: "一回押しダメージ", value: "0", checked: true },
        { text: "1段チャージダメージ", value: "1"},
      ];
      if (CharConstellations > 2)
      {
        options = [
          { text: "一回押しダメージ", value: "0", checked: true },
          { text: "1段チャージダメージ", value: "1"},
          { text: "消えない情熱ダメージ", value: "2", checked: true },
        ];
      }
    }
    if (attack_method == 18)
    {
      options = [
        { text: "一回押しダメージ", value: "0", checked: true },
        { text: "1段チャージダメージ", value: "1"},
        { text: "2段チャージダメージ", value: "2", checked: true},
      ];
    }
    createCheckboxList_br(options);
  }
  else if (selectedCharId == "9")
  {
    if (attack_method == 16)
    {
      const xianglingskillcount_text = createTextNode("　ヒット回数：")
      const xianglingcount_selectlist = createSelectList("xiangling_E_count", 1, 4, "", "回", 4);
      attack_method_prop.appendChild(xianglingskillcount_text);
      attack_method_prop.appendChild(xianglingcount_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
      
      const xianglingskill_text = createTextNode("　元素反応回数：")
      const xianglingskill_selectlist = createSelectList("xiangling_E", 0, 4, "", "回", 4);
      select_reaction_method.appendChild(xianglingskill_text); // チェックボックスを select_reaction_method に追加
      select_reaction_method.appendChild(xianglingskill_selectlist); 
    }
    else if (attack_method==21)
    {
      const xianglingburst_text = createTextNode("　ヒット回数：")
      const xianglingburst_selectlist = createSelectList("xiangling_Q_count", 1, 22, "", "回", 11);
      attack_method_prop.appendChild(xianglingburst_text);
      attack_method_prop.appendChild(xianglingburst_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
      const xianglinreaction_text = createTextNode("　元素反応回数：")
      const xianglingreaction_selectlist = createSelectList("xiangling_Q", 0, 22, "", "回", 11);
      select_reaction_method.appendChild(xianglinreaction_text); // チェックボックスを select_reaction_method に追加
      select_reaction_method.appendChild(xianglingreaction_selectlist); 
    }
  }
  else if (selectedCharId == "10")
  {
    if (attack_method == 6)
    {
      options = [
        { text: "１段目", value: "0", checked: true },
      ];
      if (CharConstellations > 0)
      {
        options = [
          { text: " 重撃フルチャージ", value: "0", checked: true },
          { text: "1重追撃", value: "1"},
        ];
      }
    }
    createCheckboxList_br(options);
  }
  else if (selectedCharId == "74")
  {
    if (CharConstellations == 0)
    {
      const furina_tention_text = createTextNode("テンション：");
      const furina_tention_list = createSelectList("furina_tention1", 0, 300, "", "ポイント", 300);
      temporary_char_talent.appendChild(furina_tention_text);
      temporary_char_talent.appendChild(furina_tention_list);
      temporary_char_talent.appendChild(document.createElement("br"));
    }
    else if (CharConstellations == 1)
    {
      const furina_tention_text = createTextNode("　テンション：");
      const furina_tention_list = createSelectList("furina_tention1", 0, 400, "", "ポイント", 400);
      temporary_char_talent.appendChild(furina_tention_text);
      temporary_char_talent.appendChild(furina_tention_list);
      temporary_char_talent.appendChild(document.createElement("br"));
    }
    else
    {
      const furina_tention_text = createTextNode("　テンション：");
      const furina_tention_list = createSelectList("furina_tention1", 0, 400, "", "ポイント", 400);
      temporary_char_talent.appendChild(furina_tention_text);
      temporary_char_talent.appendChild(furina_tention_list);
      temporary_char_talent.appendChild(document.createElement("br"));
      const furina_tention_text2 = createTextNode("　超過テンション：");
      const furina_tention_list2 = createSelectList("furina_tention2", 0, 400, "", "ポイント", 400);
      temporary_char_talent.appendChild(furina_tention_text2);
      temporary_char_talent.appendChild(furina_tention_list2);
      temporary_char_talent.appendChild(document.createElement("br"));
    }

    if (attack_method == 1)
    {      traits = [
      createLabel("", "　アルケー"),
      document.createElement("br"),
      createLabel("", "　　"),
    ];
    traits.forEach(element => {
      attack_method_prop.appendChild(element);
    });
    
      const ushia_radio = document.createElement("input");
      ushia_radio.type = "radio";
      ushia_radio.id = "furina_ushia_radio";
      ushia_radio.name = "furina_type_radio";
      ushia_radio.checked = true;
      
      const ushia_radio_label = document.createElement("label");
      ushia_radio_label.htmlFor = "furina_ushia_radio";
      ushia_radio_label.textContent = "ウーシア　";
      
      attack_method_prop.appendChild(ushia_radio);
      attack_method_prop.appendChild(ushia_radio_label);
    
      const puneuma_radio = document.createElement("input");
      puneuma_radio.type = "radio";
      puneuma_radio.id = "furina_puneuma_radio";
      puneuma_radio.name = "furina_type_radio";
      puneuma_radio.checked = false;
      
      const puneuma_radio_label = document.createElement("label");
      puneuma_radio_label.htmlFor = "furina_puneuma_radio";
      puneuma_radio_label.textContent = "プネウマ ";

      attack_method_prop.appendChild(puneuma_radio);
      attack_method_prop.appendChild(puneuma_radio_label);
      attack_method_prop.appendChild(document.createElement("br"),);

      options = [
        { text: "１段目", value: "0", checked: true },
        { text: "２段目", value: "1" },
        { text: "３段目", value: "2" },
        { text: "４段目", value: "3", checked: true },
      ];
      createCheckboxList_br(options);
    }
    else if (attack_method == 6)
    {
      traits = [
        createLabel("", "　アルケー"),
        document.createElement("br"),
        createLabel("", "　　"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      const ushia_radio = document.createElement("input");
      ushia_radio.type = "radio";
      ushia_radio.id = "furina_ushia_radio";
      ushia_radio.name = "furina_type_radio";
      ushia_radio.checked = true;
      
      const ushia_radio_label = document.createElement("label");
      ushia_radio_label.htmlFor = "furina_ushia_radio";
      ushia_radio_label.textContent = "ウーシア　";
      
      attack_method_prop.appendChild(ushia_radio);
      attack_method_prop.appendChild(ushia_radio_label);
    
      const puneuma_radio = document.createElement("input");
      puneuma_radio.type = "radio";
      puneuma_radio.id = "furina_puneuma_radio";
      puneuma_radio.name = "furina_type_radio";
      puneuma_radio.checked = false;
      
      const puneuma_radio_label = document.createElement("label");
      puneuma_radio_label.htmlFor = "furina_puneuma_radio";
      puneuma_radio_label.textContent = "プネウマ ";

      attack_method_prop.appendChild(puneuma_radio);
      attack_method_prop.appendChild(puneuma_radio_label);
      attack_method_prop.appendChild(document.createElement("br"),);

      options = [
        { text: "重撃", value: "0", checked: true },
      ];
      createCheckboxList_br(options);
    }
    else if (attack_method == 16)
    {
      traits = [
        createTextNode("HP50%以上のキャラクターの人数："),
        createSelectList("furina_skillbuff", 0, 4, "", "人", 4),
      ];
    
      traits.forEach(element => {
        temporary_char_talent.appendChild(element);
      });

      traits = [
        createLabel("furina_attack_count1", "　ウーシアの泡ヒット回数："),
        createSelectList("furina_attack_count1", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("furina_attack_count2", "　ジェントルマン・アッシャーヒット回数："),
        createSelectList("furina_attack_count2", 0, 8, "", "回", 8),
        document.createElement("br"),
        createLabel("furina_attack_count3", "　シュヴァルマラン婦人ヒット回数："),
        createSelectList("furina_attack_count3", 0, 17, "", "回", 17),
        document.createElement("br"),
        createLabel("furina_attack_count4", "　クラバレッタさんヒット回数："),
        createSelectList("furina_attack_count4", 0, 5, "", "回", 5),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("furina_react_count1", "　ウーシアの泡反応回数："),
        createSelectList("furina_react_count1", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("furina_react_count2", "　ジェントルマン・アッシャー反応回数："),
        createSelectList("furina_react_count2", 0, 8, "", "回", 4),
        document.createElement("br"),
        createLabel("furina_react_count3", "　シュヴァルマラン婦人反応回数："),
        createSelectList("furina_react_count3", 0, 17, "", "回", 6),
        document.createElement("br"),
        createLabel("furina_react_count4", "　クラバレッタさん反応回数："),
        createSelectList("furina_react_count4", 0, 5, "", "回", 5),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
    else if (attack_method==21)
    {
      options = [
        { text: "元素爆発ダメージ", value: "0", checked: true },
      ];
      createCheckboxList_br(options);
    }
  }
  else if (selectedCharId == "72")
  {
    if (attack_method == 6)
    {
      traits = [
        createLabel("Neuvillette_talent1_count", "　遺龍の栄光："),
        createSelectList("Neuvillette_talent1_count", 0, 3, "", "層", 3),
        document.createElement("br"),
        createLabel("Neuvillette_attack_count1", "　衡平な裁量ヒット回数："),
        createSelectList("Neuvillette_attack_count1", 1, 15, "", "回", 8),
        document.createElement("br"),
      ];

      if(CharConstellations == 4)
      {
        traits = [
          createLabel("Neuvillette_talent1_count", "　遺龍の栄光："),
          createSelectList("Neuvillette_talent1_count", 0, 3, "", "層", 3),
          document.createElement("br"),
          createLabel("Neuvillette_attack_count1", "　衡平な裁量ヒット回数："),
          createSelectList("Neuvillette_attack_count1", 1, 40, "", "回", 30),
          document.createElement("br"),
          createLabel("Neuvillette_attack_count2", "　洪水ヒット回数："),
          createSelectList("Neuvillette_attack_count2", 0, 20, "", "回", 12),
          document.createElement("br"),
        ];
      }

      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("Neuvillette_react_count1", "　衡平な裁量反応回数："),
        createSelectList("Neuvillette_react_count1", 0, 15, "", "回", 3),
        document.createElement("br"),
      ];

      if(CharConstellations == 4)
      {
        traits = [
          createLabel("Neuvillette_react_count1", "　衡平な裁量反応回数："),
          createSelectList("Neuvillette_react_count1", 0, 15, "", "回", 3),
          document.createElement("br"),
          createLabel("Neuvillette_react_count2", "　洪水反応回数："),
          createSelectList("Neuvillette_react_count2", 0, 20, "", "回", 4),
          document.createElement("br"),
        ];
      }

      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
    else if (attack_method == 16)
    {
      options = [
        { text: "元素スキルダメージ", value: "0", checked: true },
      ];
      createCheckboxList_br(options);
    }
    else if (attack_method == 21)
    {
      traits = [
        createLabel("Neuvillette_attack_count1", "　スキルヒット回数："),
        createSelectList("Neuvillette_attack_count1", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("Neuvillette_attack_count2", "　瀑ヒット回数："),
        createSelectList("Neuvillette_attack_count2", 0, 2, "", "回", 2),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("Neuvillette_react_count1", "　スキル反応回数："),
        createSelectList("Neuvillette_react_count1", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("Neuvillette_react_count2", "　瀑ヒット回数："),
        createSelectList("Neuvillette_react_count2", 0, 2, "", "回", 0),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
  }
  else if (selectedCharId == "11")
  {
    if (attack_method == 16)
    {
      options = [
        { text: "剣舞のステップ-1段", value: "0", checked: true },
        { text: "剣舞のステップ-2段", value: "1" },
        { text: "水月", value: "2" },
      ];
    }
    else if (attack_method==21)
    {
      options = [
        { text: "元素爆発ダメージ", value: "0", checked: true },
        { text: "久遠の惑溺", value: "1", checked: true },
      ];
    }
    createCheckboxList_br(options);
  }
  else if (selectedCharId == "12")
  {
    if (attack_method == 16)
    {
      options = [
        { text: "絡み合う命の糸", value: "0", checked: true },
      ];
      createCheckboxList(options)
    }
    else if (attack_method == 21)
    {
      if (CharConstellations < 2)
      {
        traits = [
          createLabel("yelan_burst_count", "　玲瓏一擲ヒット回数："),
          createSelectList("yelan_burst_count", 1, 45, "", "回", 30),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          attack_method_prop.appendChild(element);
        });
  
        traits = [
          createLabel("yelan_react_count", "　玲瓏一擲反応回数："),
          createSelectList("yelan_react_count", 0, 45, "", "回", 10),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          select_reaction_method.appendChild(element);
        });
      }
      else
      {
        traits = [
          createLabel("yelan_burst_count", "　玲瓏一擲ヒット回数："),
          createSelectList("yelan_burst_count", 1, 45, "", "回", 30),
          document.createElement("br"),
          createLabel("yelan_add_count", "　2重追撃ヒット回数："),
          createSelectList("yelan_add_count", 0, 8, "", "回", 5),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          attack_method_prop.appendChild(element);
        });
  
        traits = [
          createLabel("yelan_react_count", "　玲瓏一擲反応回数："),
          createSelectList("yelan_react_count", 0, 45, "", "回", 10),
          document.createElement("br"),
          createLabel("yelan_add_react_count", "　2重追撃反応回数："),
          createSelectList("yelan_add_react_count", 0, 8, "", "回", 5),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          select_reaction_method.appendChild(element);
        });
      }
    }
    else
    {
      traits = [
        createLabel("yelan_attack_count", "　特殊打破の矢ヒット回数："),
        createSelectList("yelan_attack_count", 1, 5, "", "回", 5),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("yelan_react_count", "　特殊打破の矢反応回数："),
        createSelectList("yelan_react_count", 0, 5, "", "回", 2),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
  }
  else if (selectedCharId == "13")
  {
    if (attack_method == 1)
    {
      if (CharConstellations < 4)
      {
        traits = [
          createLabel("ayato_attack1_count", "　瞬水剣1段ヒット回数："),
          createSelectList("ayato_attack1_count", 1, 8, "", "回", 5),
          document.createElement("br"),
          createLabel("ayato_attack2_count", "　瞬水剣2段ヒット回数："),
          createSelectList("ayato_attack2_count", 1, 8, "", "回", 5),
          document.createElement("br"),
          createLabel("ayato_attack3_count", "　瞬水剣3段ヒット回数："),
          createSelectList("ayato_attack3_count", 1, 8, "", "回", 5),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          attack_method_prop.appendChild(element);
        });
  
        traits = [
          createLabel("ayato_react1_count", "　瞬水剣1段反応回数："),
          createSelectList("ayato_react1_count", 1, 8, "", "回", 2),
          document.createElement("br"),
          createLabel("ayato_react2_count", "　瞬水剣2段反応回数："),
          createSelectList("ayato_react2_count", 1, 8, "", "回", 2),
          document.createElement("br"),
          createLabel("ayato_react3_count", "　瞬水剣3段反応回数："),
          createSelectList("ayato_react3_count", 1, 8, "", "回", 2),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          select_reaction_method.appendChild(element);
        });
      }
      else
      {
        traits = [
          createLabel("ayato_attack1_count", "　瞬水剣1段ヒット回数："),
          createSelectList("ayato_attack1_count", 1, 8, "", "回", 5),
          document.createElement("br"),
          createLabel("ayato_attack2_count", "　瞬水剣2段ヒット回数："),
          createSelectList("ayato_attack2_count", 1, 8, "", "回", 5),
          document.createElement("br"),
          createLabel("ayato_attack3_count", "　瞬水剣3段ヒット回数："),
          createSelectList("ayato_attack3_count", 1, 8, "", "回", 5),
          document.createElement("br"),
          createLabel("ayato_attack4_count", "　6重瞬水剣ヒット回数："),
          createSelectList("ayato_attack4_count", 0, 2, "", "回", 2),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          attack_method_prop.appendChild(element);
        });
  
        traits = [
          createLabel("ayato_react1_count", "　瞬水剣1段反応回数："),
          createSelectList("ayato_react1_count", 1, 8, "", "回", 2),
          document.createElement("br"),
          createLabel("ayato_react2_count", "　瞬水剣2段反応回数："),
          createSelectList("ayato_react2_count", 1, 8, "", "回", 2),
          document.createElement("br"),
          createLabel("ayato_react3_count", "　瞬水剣3段反応回数："),
          createSelectList("ayato_react3_count", 1, 8, "", "回", 2),
          document.createElement("br"),
          createLabel("ayato_react4_count", "　6重瞬水剣反応回数："),
          createSelectList("ayato_react4_count", 0, 2, "", "回", 1),
        ];
        traits.forEach(element => {
          select_reaction_method.appendChild(element);
        });
      }

      let rousen_count;
      if (CharConstellations > 1)
      {
        rousen_count = 5;
      }
      else
      {
        rousen_count = 4;
      }
      elementsToAddToCharTalent = [
        createTextNode("浪閃："),
        createSelectList("rousen_count", 0, rousen_count, "", "層", rousen_count),
        document.createElement("br")
      ];
    
      elementsToAddToCharTalent.forEach(element => {
        temporary_char_talent.appendChild(element);
      });
    }
  }
  else if (selectedCharId == "15")
  {
    if (attack_method == 1)
    {
      traits = [
        createLabel("tartaglia_attack_count1", "　断流・閃ヒット回数："),
        createSelectList("tartaglia_attack_count1", 0, 20, "", "回", 0),
        document.createElement("br"),
        createLabel("tartaglia_attack_count2", "　断流・破ヒット回数："),
        createSelectList("tartaglia_attack_count2", 0, 20, "", "回", 0),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });
        options = [
          { text: "１段目", value: "0", checked: true },
          { text: "２段目", value: "1" },
          { text: "３段目", value: "2" },
          { text: "４段目", value: "3", checked: true },
          { text: "５段目", value: "4"},
          { text: "６段目-１", value: "5" },
          { text: "６段目-２", value: "5", checked: true },
        ];
        createCheckboxList_br(options);
        traits = [
          createLabel("tartaglia_react_count1", "断流・閃反応回数："),
          createSelectList("tartaglia_react_count1", 0, 20, "", "回", 0),
          document.createElement("br"),
          createLabel("tartaglia_react_count2", "断流・破反応回数："),
          createSelectList("tartaglia_react_count2", 0, 20, "", "回", 0),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          select_reaction_method.appendChild(element);
        });
    }
    else if(attack_method == 6)
    {
      traits = [
        createLabel("tartaglia_attack_count1", "　重撃（近接モード）1ヒット目ヒット回数："),
        createSelectList("tartaglia_attack_count1", 0, 10, "", "回", 3),
        document.createElement("br"),
        createLabel("tartaglia_attack_count2", "　重撃（近接モード）2ヒット目ヒット回数："),
        createSelectList("tartaglia_attack_count2", 0, 10, "", "回", 3),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("tartaglia_react_count1", "　重撃（近接モード）1ヒット目反応回数："),
        createSelectList("tartaglia_react_count1", 0, 10, "", "回", 1),
        document.createElement("br"),
        createLabel("tartaglia_react_count2", "　重撃（近接モード）2ヒット目反応回数："),
        createSelectList("tartaglia_react_count2", 0, 10, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
    else if(attack_method == 16)
    {
      traits = [
        createLabel("tartaglia_attack_count1", "　状態切替時ダメージヒット回数："),
        createSelectList("tartaglia_attack_count1", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("tartaglia_attack_count2", "　断流・斬ヒット回数："),
        createSelectList("tartaglia_attack_count2", 0, 20, "", "回", 15),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("tartaglia_react_count1", "　状態切替時ダメージ反応回数："),
        createSelectList("tartaglia_react_count1", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("tartaglia_react_count2", "　断流・斬反応回数："),
        createSelectList("tartaglia_react_count2", 0, 20, "", "回", 5),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
    else if(attack_method == 21)
    {
      traits = [
        createLabel("tartaglia_attack_count1", "　元素爆発（遠隔モード）ヒット回数："),
        createSelectList("tartaglia_attack_count1", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("tartaglia_attack_count2", "　断流・爆ヒット回数："),
        createSelectList("tartaglia_attack_count2", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("tartaglia_react_count1", "　元素爆発（遠隔モード）反応回数："),
        createSelectList("tartaglia_react_count1", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("tartaglia_react_count2", "　断流・爆反応回数："),
        createSelectList("tartaglia_react_count2", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
    else if(attack_method == 22)
    {
      options = [
        { text: "元素爆発（遠隔モード）", value: "0", checked: true },
      ];
      createCheckboxList_br(options);
    }
  }
  else if (selectedCharId == "19")
  {
    if (attack_method == 16)
    {
      options = [
        { text: "1ヒット目", value: "0", checked: true },
        { text: "2ヒット目", value: "1"},
      ];
      createCheckboxList(options)
    }
    else if (attack_method == 21)
    {
      let xingqiu_hitcount = 30;
      let xingqiu_vapcount = 10;
      if (CharConstellations == 4)
      {
        xingqiu_hitcount = 40;
        xingqiu_vapcount = 13;
      }
      let xingqiu_count_text = createTextNode("　剣雨ヒット回数：")
      let xingqiu_attack_count = createSelectList("xingqiu_attack_count", 1, 50, "", "回", xingqiu_hitcount);
      attack_method_prop.appendChild(xingqiu_count_text);
      attack_method_prop.appendChild(xingqiu_attack_count);
      attack_method_prop.appendChild(document.createElement("br"));
      let xingqiu_selectlist = createSelectList("xingqiu_vap_count", 0, 50, "", "回", xingqiu_vapcount);
      select_reaction_method.appendChild(vap_text); // チェックボックスを select_reaction_method に追加
      select_reaction_method.appendChild(xingqiu_selectlist); // ラベルを select_reaction_method に追加
      select_reaction_method.appendChild(document.createElement("br"));
    }
  }
  else if (selectedCharId == "73")
  {
    let elementsToAddToCharTalent;
    if (attack_method == 1)
    {
      options = [
        { text: "１段目", value: "0", checked: true },
        { text: "２段目", value: "1" },
        { text: "３段目", value: "2" },
        { text: "４段目-１", value: "3", checked: true },
        { text: "４段目-２", value: "4"},
        { text: "５段目", value: "5"},
      ];
      createCheckboxList_br(options);
    }
    else if (attack_method == 6)
    {
      elementsToAddToCharTalent = [
        createCheckbox("Wriothesley_talent1", true),
        createLabel("Wriothesley_talent1", "　恩典の戒め"),
        document.createElement("br"),
      ];

      elementsToAddToCharTalent.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      options = [
        { text: "重撃", value: "0", checked: true },
      ];
      createCheckboxList_br(options);
    }
    else if (attack_method == 21)
    {
      elementsToAddToCharTalent = [
        createLabel("Wriothesley_attack_count1", "　スキルヒット回数："),
        createSelectList("Wriothesley_attack_count1", 0, 5, "", "回", 5),
        document.createElement("br"),
        createLabel("Wriothesley_attack_count2", "　迸発の刃ヒット回数："),
        createSelectList("Wriothesley_attack_count2", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
      elementsToAddToCharTalent.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      elementsToAddToCharTalent = [
        createLabel("Wriothesley_melt_count1", "　スキル溶解回数："),
        createSelectList("Wriothesley_melt_count1", 0, 5, "", "回", 2),
        document.createElement("br"),
        createLabel("Wriothesley_melt_count2", "　迸発の刃ヒット回数："),
        createSelectList("Wriothesley_melt_count2", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
      elementsToAddToCharTalent.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
  }
  else if (selectedCharId == "21")
  {
    let kamisatoayaka_talent;
    let elementsToAddToCharTalent;
    if (attack_method == 1)
    {
      kamisatoayaka_talent = [
        createCheckbox("kamisatoayaka_talent1", true),
        createLabel("kamisatoayaka_talent1", "固有天賦1：天つ罪・国つ罪の鎮詞 通常攻撃ダメージ+30%"),
        document.createElement("br"),
        createCheckbox("kamisatoayaka_talent2", true),
        createLabel("kamisatoayaka_talent2", "固有天賦2：寒空の宣命祝詞 氷元素ダメージ+18%"),
        document.createElement("br"),
      ];
      kamisatoayaka_talent.forEach(element => {
        temporary_char_talent.appendChild(element);
      });

      options = [
        { text: "１段目", value: "0", checked: true },
        { text: "２段目", value: "1" },
        { text: "３段目", value: "2" },
        { text: "４段目-１", value: "3", checked: true },
        { text: "４段目-２", value: "4"},
        { text: "４段目-３", value: "5"},
        { text: "５段目", value: "6", checked: true },
      ];
      createCheckboxList_br(options);
    }
    else if (attack_method == 6)
    {
      kamisatoayaka_talent = [
        createCheckbox("kamisatoayaka_talent1", true),
        createLabel("kamisatoayaka_talent1", "固有天賦1：天つ罪・国つ罪の鎮詞 重撃ダメージ+30%"),
        document.createElement("br"),
        createCheckbox("kamisatoayaka_talent2", true),
        createLabel("kamisatoayaka_talent2", "固有天賦2：寒空の宣命祝詞 氷元素ダメージ+18%"),
        document.createElement("br"),
      ];
      kamisatoayaka_talent.forEach(element => {
        temporary_char_talent.appendChild(element);
      });

      if (CharConstellations == 4)
      {
        elementsToAddToCharTalent = [
          createTextNode("　重撃1回 = 3ヒット"),
          document.createElement("br"),
          createLabel("kamisatoayaka_count", "　重撃ヒット回数："),
          createSelectList("kamisatoayaka_count", 0, 15, "", "回", 6),
          document.createElement("br"),
          createLabel("kamisatoayaka_sixth_count", "　6重強化重撃ヒット回数："),
          createSelectList("kamisatoayaka_sixth_count", 0, 3, "", "回", 3),
          document.createElement("br"),
        ];
        elementsToAddToCharTalent.forEach(element => {
          attack_method_prop.appendChild(element);
        });

        elementsToAddToCharTalent = [
          createLabel("kamisatoayaka_melt_count", "　重撃溶解回数："),
          createSelectList("kamisatoayaka_melt_count", 0, 15, "", "回", 2),
          document.createElement("br"),
          createLabel("kamisatoayaka_sixth_melt_count", "　6重強化重撃溶解回数："),
          createSelectList("kamisatoayaka_sixth_melt_count", 0, 3, "", "回", 1),
          document.createElement("br"),
        ];
        elementsToAddToCharTalent.forEach(element => {
          select_reaction_method.appendChild(element);
        });
      }
      else
      {
        elementsToAddToCharTalent = [
          createTextNode("　重撃1回 = 3ヒット"),
          document.createElement("br"),
          createLabel("kamisatoayaka_count", "　重撃ヒット回数："),
          createSelectList("kamisatoayaka_count", 0, 15, "", "回", 9),
          document.createElement("br"),
        ];
        elementsToAddToCharTalent.forEach(element => {
          attack_method_prop.appendChild(element);
        });

        elementsToAddToCharTalent = [
          createLabel("kamisatoayaka_melt_count", "　重撃溶解回数："),
          createSelectList("kamisatoayaka_melt_count", 0, 15, "", "回", 3),
          document.createElement("br"),
        ];
        elementsToAddToCharTalent.forEach(element => {
          select_reaction_method.appendChild(element);
        });
      }
    }
    else if (attack_method == 16)
    {
      kamisatoayaka_talent = [
        createCheckbox("kamisatoayaka_talent2", true),
        createLabel("kamisatoayaka_talent2", "固有天賦2：寒空の宣命祝詞 氷元素ダメージ+18%"),
        document.createElement("br"),
      ];
      kamisatoayaka_talent.forEach(element => {
        temporary_char_talent.appendChild(element);
      });
      elementsToAddToCharTalent = [
        createCheckbox("kamisatoayaka_skill_react", true),
        createLabel("kamisatoayaka_skill_react", "元素スキル"),
        document.createElement("br"),
      ];
      elementsToAddToCharTalent.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
    else if (attack_method == 21)
    {
      kamisatoayaka_talent = [
        createCheckbox("kamisatoayaka_talent2", true),
        createLabel("kamisatoayaka_talent2", "固有天賦2：寒空の宣命祝詞 氷元素ダメージ+18%"),
        document.createElement("br"),
      ];
      kamisatoayaka_talent.forEach(element => {
        temporary_char_talent.appendChild(element);
      });
      if (CharConstellations < 2)
      {
        elementsToAddToCharTalent = [
          createLabel("kamisatoayaka_attack_count1", "　斬撃ヒット回数："),
          createSelectList("kamisatoayaka_attack_count1", 0, 19, "", "回", 10),
          document.createElement("br"),
          createLabel("kamisatoayaka_attack_count3", "　咲きヒット回数："),
          createSelectList("kamisatoayaka_attack_count3", 0, 1, "", "回", 1),
          document.createElement("br"),
        ];
        elementsToAddToCharTalent.forEach(element => {
          attack_method_prop.appendChild(element);
        });

        elementsToAddToCharTalent = [
          createLabel("kamisatoayaka_melt_count1", "　斬撃溶解回数："),
          createSelectList("kamisatoayaka_melt_count1", 0, 19, "", "回", 4),
          document.createElement("br"),
          createLabel("kamisatoayaka_melt_count3", "　咲き溶解回数："),
          createSelectList("kamisatoayaka_melt_count3", 0, 1, "", "回", 1),
          document.createElement("br"),
        ];
        elementsToAddToCharTalent.forEach(element => {
          select_reaction_method.appendChild(element);
        });
      }
      else
      {
        elementsToAddToCharTalent = [
          createLabel("kamisatoayaka_attack_count1", "　斬撃ヒット回数："),
          createSelectList("kamisatoayaka_attack_count1", 0, 19, "", "回", 10),
          document.createElement("br"),
          createLabel("kamisatoayaka_attack_count2", "　斬撃(小)ヒット回数："),
          createSelectList("kamisatoayaka_attack_count2", 0, 38, "", "回", 20),
          document.createElement("br"),
          createLabel("kamisatoayaka_attack_count3", "　咲きヒット回数："),
          createSelectList("kamisatoayaka_attack_count3", 0, 1, "", "回", 1),
          document.createElement("br"),
          createLabel("kamisatoayaka_attack_count4", "　咲き(小)ヒット回数："),
          createSelectList("kamisatoayaka_attack_count4", 0, 2, "", "回", 2),
          document.createElement("br"),
        ];
        elementsToAddToCharTalent.forEach(element => {
          attack_method_prop.appendChild(element);
        });

        elementsToAddToCharTalent = [
          createLabel("kamisatoayaka_melt_count1", "　斬撃溶解回数："),
          createSelectList("kamisatoayaka_melt_count1", 0, 19, "", "回", 4),
          document.createElement("br"),
          createLabel("kamisatoayaka_melt_count2", "　斬撃(小)溶解回数："),
          createSelectList("kamisatoayaka_melt_count2", 0, 38, "", "回", 7),
          document.createElement("br"),
          createLabel("kamisatoayaka_melt_count3", "　咲き溶解回数："),
          createSelectList("kamisatoayaka_melt_count3", 0, 1, "", "回", 1),
          document.createElement("br"),
          createLabel("kamisatoayaka_melt_count4", "　咲き(小)溶解回数："),
          createSelectList("kamisatoayaka_melt_count4", 0, 2, "", "回", 2),
          document.createElement("br"),
        ];
        elementsToAddToCharTalent.forEach(element => {
          select_reaction_method.appendChild(element);
        });
      }
    }
  }
  else if (selectedCharId == "22")
  {
    const eulaburst_text = createTextNode("　エネルギー：")
    const eulaburst_selectlist = createSelectList("eula_enelgy", 0, 30, "", "重", 15);
    attack_method_prop.appendChild(eulaburst_text);
    attack_method_prop.appendChild(eulaburst_selectlist);
    attack_method_prop.appendChild(document.createElement("br"));
  }
  else if (selectedCharId == "23")
  {
    if (attack_method == 6)
    {
      traits = [
        createLabel("ganyu_attack1_count", "　霜華の矢ヒット回数："),
        createSelectList("ganyu_attack1_count", 0, 5, "", "回", 1),
        document.createElement("br"),
        createLabel("ganyu_attack2_count", "　霜華の矢・霜華満開ヒット回数："),
        createSelectList("ganyu_attack2_count", 0, 5, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("ganyu_react1_count", "　霜華の矢 反応回数："),
        createSelectList("ganyu_react1_count", 0, 5, "", "回", 1),
        document.createElement("br"),
        createLabel("ganyu_react2_count", "　霜華の矢・霜華満開 反応回数："),
        createSelectList("ganyu_react2_count", 0, 5, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
    else if (attack_method == 21)
    {
      const ganyuburst_text = createTextNode("　ヒット回数：")
      const ganyuburst_selectlist = createSelectList("ganyu_Q_count", 1, 50, "", "回", 15);
      attack_method_prop.appendChild(ganyuburst_text);
      attack_method_prop.appendChild(ganyuburst_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
      const ganyureaction_text = createTextNode("　元素反応回数：")
      const ganyureaction_selectlist = createSelectList("ganyu_Q", 0, 50, "", "回", 5);
      select_reaction_method.appendChild(ganyureaction_text); // チェックボックスを select_reaction_method に追加
      select_reaction_method.appendChild(ganyureaction_selectlist); 
      attack_method_prop.appendChild(document.createElement("br"));
    }
  }
  else if (selectedCharId == "28")
  {
    if (attack_method == 1)
    {
      let rosaria_talent;
      if (CharConstellations == 4)
      {
        rosaria_talent = [
          createCheckbox("rosaria_first_buff", true),
          createLabel("rosaria_first_buff", "第1重：罪の導き 通常攻撃のダメージ+10%"),
          document.createElement("br"),
          createCheckbox("rosaria_sixth_buff", true),
          createLabel("rosaria_sixth_buff", "第6重：代行裁判 敵の物理耐性-20%"),
        ];
        rosaria_talent.forEach(element => {
          temporary_char_talent.appendChild(element);
        });
      }
      else if (CharConstellations > 0)
      {
        rosaria_talent = [
          createCheckbox("rosaria_first_buff", true),
          createLabel("rosaria_first_buff", "第1重：罪の導き 通常攻撃のダメージ+10%"),
          document.createElement("br"),
        ];
        rosaria_talent.forEach(element => {
          characterInfo.appendChild(element);
        });
      }
    }
    else if (attack_method == 16)
    {
      options = [
        { text: "スキルダメージ1", value: "0", checked: true },
        { text: "スキルダメージ2", value: "1"},
      ];
      createCheckboxList_br(options);
    }
    else if (attack_method == 21)
    {
      options = [
        { text: "スキルダメージ1", value: "0", checked: true },
        { text: "スキルダメージ2", value: "1"},
      ];
      createCheckboxList_br(options);
      const rosariaburst_text = createTextNode("　継続攻撃ヒット回数：");
      let rosariaburst_selectlist;
      const rosariareaction_text = createTextNode("　継続攻撃反応回数：")
      let rosariareaction_selectlist;
      if (CharConstellations < 2)
      {
        rosariaburst_selectlist = createSelectList("rosaria_Q_count", 1, 4, "", "回", 4);
        rosariareaction_selectlist = createSelectList("rosaria_Qreact", 0, 4, "", "回", 4);
      }
      else
      {
        rosariaburst_selectlist = createSelectList("rosaria_Q_count", 1, 6, "", "回", 6);
        rosariareaction_selectlist = createSelectList("rosaria_Qreact", 0, 6, "", "回", 6);
      }
      attack_method_prop.appendChild(rosariaburst_text);
      attack_method_prop.appendChild(rosariaburst_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
      select_reaction_method.appendChild(rosariareaction_text); // チェックボックスを select_reaction_method に追加
      select_reaction_method.appendChild(rosariareaction_selectlist); 
    }
  }
  else if (selectedCharId == "30")
  {
    if (attack_method == 1)
    {
      options = [
        { text: "１段目", value: "0", checked: true },
        { text: "２段目", value: "1" },
        { text: "３段目", value: "2" },
        { text: "４段目", value: "3", checked: true},
      ];
      createCheckboxList_br(options);
    } 
    else if (attack_method == 16)
    {
      traits = [
        createLabel("chongyun_skill_count", "　巨大霊刃ヒット回数："),
        createSelectList("chongyun_skill_count", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("chongyun_talent_count", "　追氷剣訣ヒット回数："),
        createSelectList("chongyun_talent_count", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      traits = [
        createLabel("chongyun_skill_react", "　巨大霊刃反応回数："),
        createSelectList("chongyun_skill_react", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("chongyun_talent_react", "　追氷剣訣反応回数："),
        createSelectList("chongyun_talent_react", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        select_reaction_method.appendChild(element);
      });
    }
    else if (attack_method == 21)
    {
      if (CharConstellations == 4)
      {
        const chongyun_talent = [
          createCheckbox("chongyun_sixth_buff", true),
          createLabel("chongyun_sixth_buff", "第6重：四霊の捧げ 元素爆発ダメージ+15%"),
          document.createElement("br"),
        ];
        chongyun_talent.forEach(element => {
          temporary_char_talent.appendChild(element);
        });
      }

      const chongyunburst_text = createTextNode("　巨大霊刃ヒット回数：");
      let chongyunburst_selectlist;
      const chongyunreaction_text = createTextNode("　巨大霊刃反応回数：");
      let chongyunreaction_selectlist;
      if (CharConstellations < 4)
      {
        chongyunburst_selectlist = createSelectList("chongyun_Q_count", 1, 3, "", "回", 3);
        chongyunreaction_selectlist = createSelectList("chongyun_Qreact", 0, 3, "", "回", 1);
      }
      else
      {
        chongyunburst_selectlist = createSelectList("chongyun_Q_count", 1, 4, "", "回", 4);
        chongyunreaction_selectlist = createSelectList("chongyun_Qreact", 0, 4, "", "回", 1);
      }
      attack_method_prop.appendChild(chongyunburst_text);
      attack_method_prop.appendChild(chongyunburst_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
      select_reaction_method.appendChild(chongyunreaction_text); // チェックボックスを select_reaction_method に追加
      select_reaction_method.appendChild(chongyunreaction_selectlist); 
    }
  }
  else if (selectedCharId == "31")
  {
    if (attack_method == 1)
    {
      let kaeya_talent;
      if (CharConstellations > 0)
      {
        kaeya_talent = [
          createCheckbox("kaeya_first_buff", true),
          createLabel("kaeya_first_buff", "第1重：優れた血筋 通常攻撃の会心率+15%"),
          document.createElement("br"),
        ];
        kaeya_talent.forEach(element => {
          temporary_char_talent.appendChild(element);
        });
      }
    } 
    else if (attack_method == 16)
    {
      options = [
        { text: "霜の襲撃", value: "0", checked: true },
      ];
      createCheckboxList(options)
    }
    else if (attack_method == 21)
    {
      const kaeyaburst_text = createTextNode("　寒氷の柱ヒット回数：");
      let kaeyaburst_selectlist;
      const kaeyareaction_text = createTextNode("　寒氷の柱反応回数：");
      let kaeyareaction_selectlist;
      if (CharConstellations < 4)
      {
        kaeyaburst_selectlist = createSelectList("kaeya_Q_count", 1, 30, "", "回", 12);
        kaeyareaction_selectlist = createSelectList("kaeya_Qreact", 0, 30, "", "回", 6);
      }
      else
      {
        kaeyaburst_selectlist = createSelectList("kaeya_Q_count", 1, 30, "", "回", 16);
        kaeyareaction_selectlist = createSelectList("kaeya_Qreact", 0, 30, "", "回", 6);
      }
      attack_method_prop.appendChild(kaeyaburst_text);
      attack_method_prop.appendChild(kaeyaburst_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
      select_reaction_method.appendChild(kaeyareaction_text); // チェックボックスを select_reaction_method に追加
      select_reaction_method.appendChild(kaeyareaction_selectlist); 
    }
  }
  else if (selectedCharId == "32")
  {
    let cyno_selectlist;
    if (attack_method == 1)
    {
      cyno_agg_countlist = createSelectList("cyno_agg_count", 0, 10, "", "回", 2);
      elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
      elemental_reaction.appendChild(cyno_agg_countlist); // ラベルを select_reaction_method に追加
      elemental_reaction.appendChild(document.createElement("br"));
    }
    else if (attack_method == 16)
    {
      let cyno_E_text = createTextNode("　冥祭ヒット回数：")
      let cyno_E_count = createSelectList("cyno_E_count", 0, 15, "", "回", 0);
      let cyno_adE_text = createTextNode("　[裁定]冥祭ヒット回数：")
      let cyno_adE_count = createSelectList("cyno_adE_count", 0, 15, "", "回", 5);
      let cyno_talent1_text = createTextNode("　渡荒の雷ヒット回数：")
      let cyno_talent1_count = createSelectList("cyno_talent1_count", 0, 60, "", "回", 15);
      attack_method_prop.appendChild(cyno_E_text);
      attack_method_prop.appendChild(cyno_E_count);
      attack_method_prop.appendChild(document.createElement("br"));
      attack_method_prop.appendChild(cyno_adE_text);
      attack_method_prop.appendChild(cyno_adE_count);
      attack_method_prop.appendChild(document.createElement("br"));
      attack_method_prop.appendChild(cyno_talent1_text);
      attack_method_prop.appendChild(cyno_talent1_count);
      attack_method_prop.appendChild(document.createElement("br"));

      let cyno_agg_text = createTextNode("　冥祭＆渡荒の雷 超激化回数：")
      let cyno_agg_count = createSelectList("cyno_agg_count", 0, 30, "", "回", 0);
      let cyno_talent1_agg_text = createTextNode("　[裁定]冥祭 超激化回数：")
      let cyno_talent1_agg_count = createSelectList("cyno_talent1_agg_count", 0, 30, "", "回", 5);
      elemental_reaction.appendChild(cyno_agg_text); // チェックボックスを select_reaction_method に追加
      elemental_reaction.appendChild(cyno_agg_count); // ラベルを select_reaction_method に追加
      elemental_reaction.appendChild(document.createElement("br"));
      elemental_reaction.appendChild(cyno_talent1_agg_text); // チェックボックスを select_reaction_method に追加
      elemental_reaction.appendChild(cyno_talent1_agg_count); // ラベルを select_reaction_method に追加
      elemental_reaction.appendChild(document.createElement("br"));
    }
  }
  else if (selectedCharId == "33")
  {
    if (attack_method == 1)
    {
      yaemiko_agg_countlist = createSelectList("yaemiko_agg_count", 0, 30, "", "回", 1);
    }
    else if (attack_method == 6)
    {
      yaemiko_agg_countlist = createSelectList("yaemiko_agg_count", 0, 30, "", "回", 1);
      createCheckboxList(options);
    }
    else if (attack_method==16)
    {
      const yaeskill_text = createTextNode("　殺生櫻：");
      const yaeskill_selectlist = createSelectList("yaemiko_E", 1, 4, "階位", "", 3);
      attack_method_prop.appendChild(yaeskill_text);
      attack_method_prop.appendChild(yaeskill_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
      yaemiko_agg_countlist = createSelectList("yaemiko_agg_count", 0, 30, "", "回", 1);
    } 
    else if (attack_method==21)
    {
      yaemiko_agg_countlist = createSelectList("yaemiko_agg_count", 0, 30, "", "回", 4);
    }
    elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
    elemental_reaction.appendChild(yaemiko_agg_countlist); // ラベルを select_reaction_method に追加
    elemental_reaction.appendChild(document.createElement("br"));
  }
  else if (selectedCharId == "34")
  {
    const raidenskill_text = createTextNode("　願力の層数：");
    const raidenskill_selectlist = createSelectList("raiden_resolve", 0, 60, "", "層", 60);
    attack_method_prop.appendChild(raidenskill_text);
    attack_method_prop.appendChild(raidenskill_selectlist);
    attack_method_prop.appendChild(document.createElement("br"));
    if (attack_method == 21)
    {
      raiden_agg_countlist = createSelectList("raiden_agg_count", 0, 30, "", "回", 6);
      traits = [
        document.createElement("br"),
        createLabel("", "　元素爆発中ヒット回数"),
        document.createElement("br"),
        createLabel("raiden_attack_count1", "　　通常１段："),
        createSelectList("raiden_attack_count1", 0, 10, "", "回", 3),
        document.createElement("br"),
        createLabel("raiden_attack_count2", "　　通常２段："),
        createSelectList("raiden_attack_count2", 0, 10, "", "回", 3),
        document.createElement("br"),
        createLabel("raiden_attack_count3", "　　通常３段："),
        createSelectList("raiden_attack_count3", 0, 10, "", "回", 3),
        document.createElement("br"),
        createLabel("raiden_attack_count4", "　　通常４段："),
        createSelectList("raiden_attack_count4", 0, 10, "", "回", 3),
        document.createElement("br"),
        createLabel("raiden_attack_count5", "　　通常５段："),
        createSelectList("raiden_attack_count5", 0, 10, "", "回", 3),
        document.createElement("br"),
        createLabel("raiden_attack_count6", "　　重撃："),
        createSelectList("raiden_attack_count6", 0, 10, "", "回", 0),
        document.createElement("br"),
        createLabel("raiden_attack_count7", "　　夢想の一太刀："),
        createSelectList("raiden_attack_count7", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });
    }
    elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
    elemental_reaction.appendChild(raiden_agg_countlist); // ラベルを select_reaction_method に追加
    elemental_reaction.appendChild(document.createElement("br"));
  }
  else if (selectedCharId == "35")
  {
  let keqing_selectlist;
  const newCheckbox = createCheckbox("keqing_talent2", true);
  const label = createLabel("keqing_talent2", "玉衡の貴：会心率、元素チャージ効率+15%");
  const lineBreak = document.createElement("br");

  // 新しいチェックボックスと関連する要素を追加
  temporary_char_talent.appendChild(newCheckbox);
  temporary_char_talent.appendChild(label);
  temporary_char_talent.appendChild(lineBreak); 
  if (attack_method == 1)
  {
    keqing_agg_countlist = createSelectList("keqing_agg_count", 0, 30, "", "回", 2);
  }
  else if (attack_method == 6)
  {
    const keqing_count_text = createTextNode("　重撃回数：");
    const keqing_attack_count = createSelectList("keqing_attack_count", 0, 5, "", "回", 5);
    attack_method_prop.appendChild(keqing_count_text);
    attack_method_prop.appendChild(keqing_attack_count);
    attack_method_prop.appendChild(document.createElement("br"));
    keqing_agg_countlist = createSelectList("keqing_agg_count", 0, 30, "", "回", 5);
  }
  else if (attack_method == 21)
  {         
    keqing_agg_countlist = createSelectList("keqing_agg_count", 0, 30, "", "回", 3);
  }
  elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
  elemental_reaction.appendChild(keqing_agg_countlist); // ラベルを select_reaction_method に追加
  elemental_reaction.appendChild(document.createElement("br"));
  }
  else if (selectedCharId == "38")
  {
    let kujousara_selectlist;
    if (attack_method == 21)
    {
      let kujousara_count_text;
      let kujousara_attack_count;
      if (CharConstellations < 3)
      {
        kujousara_count_text = createTextNode("　天狗呪雷・雷礫ヒット回数：");
        kujousara_attack_count = createSelectList("kujousara_attack_count", 0, 20, "", "回", 4);
      }
      else
      {
        kujousara_count_text = createTextNode("　天狗呪雷・雷礫ヒット回数：");
        kujousara_attack_count = createSelectList("kujousara_attack_count", 0, 30, "", "回", 6);
      }
      attack_method_prop.appendChild(kujousara_count_text);
      attack_method_prop.appendChild(kujousara_attack_count);
      attack_method_prop.appendChild(document.createElement("br"));
      kujousara_agg_countlist = createSelectList("kujousara_agg_count", 0, 30, "", "回", 2);
    }
    elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
    elemental_reaction.appendChild(kujousara_agg_countlist); // ラベルを select_reaction_method に追加
    elemental_reaction.appendChild(document.createElement("br"));
  }
  else if (selectedCharId == "39")
  {
    if (attack_method == 16)
    {
      let fischl_count_text;
      let fischl_attack_count;
      let fischl_talent1_text;
      let fischl_talent1_count;
      if (CharConstellations != 4)
      {
        fischl_count_text = createTextNode("　元素スキルヒット回数：");
        fischl_attack_count = createSelectList("fischl_attack_count", 1, 10, "", "回", 10);
        fischl_talent2_text = createTextNode("　固有天賦2発動回数：");
        fischl_talent2_count = createSelectList("fischl_talent2_count", 0, 20, "", "回", 8);
        attack_method_prop.appendChild(fischl_count_text);
        attack_method_prop.appendChild(fischl_attack_count);
        attack_method_prop.appendChild(document.createElement("br"));
        attack_method_prop.appendChild(fischl_talent2_text);
        attack_method_prop.appendChild(fischl_talent2_count);
        attack_method_prop.appendChild(document.createElement("br"));
        let fischl_selectlist = createSelectList("fischl_agg_count", 0, 30, "", "回", 10);
        elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
        elemental_reaction.appendChild(fischl_selectlist); // ラベルを select_reaction_method に追加
        elemental_reaction.appendChild(document.createElement("br"));
      }
      else
      {
        fischl_count_text = createTextNode("　元素スキルヒット回数：");
        fischl_attack_count = createSelectList("fischl_attack_count", 1, 12, "", "回", 12);
        fischl_talent2_text = createTextNode("　固有天賦2発動回数：");
        fischl_talent2_count = createSelectList("fischl_talent2_count", 0, 24, "", "回", 8);
        fischl_conste6_text = createTextNode("　6重効果：追撃回数　");
        fischl_conste6_count = createSelectList("fischl_conste6_count", 0, 24, "", "回", 12);
        attack_method_prop.appendChild(fischl_count_text);
        attack_method_prop.appendChild(fischl_attack_count);
        attack_method_prop.appendChild(document.createElement("br"));
        attack_method_prop.appendChild(fischl_talent2_text);
        attack_method_prop.appendChild(fischl_talent2_count);
        attack_method_prop.appendChild(document.createElement("br"));
        attack_method_prop.appendChild(fischl_conste6_text);
        attack_method_prop.appendChild(fischl_conste6_count);
        attack_method_prop.appendChild(document.createElement("br"));
        let fischl_selectlist = createSelectList("fischl_agg_count", 0, 30, "", "回", 14);
        elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
        elemental_reaction.appendChild(fischl_selectlist); // ラベルを select_reaction_method に追加
        elemental_reaction.appendChild(document.createElement("br"));
      }
    }
  }
  else if (selectedCharId == "40")
  {
    let beidou_agg_count;
    if (attack_method == 16)
    {
      traits = [
        createLabel("beidou_skill_count", "　最大ダメージアップ回数："),
        createSelectList("beidou_skill_count", 0, 2, "", "層", 2),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      beidou_agg_count = createSelectList("beidou_agg_count", 0, 1, "", "回", 1);
    }
    else if (attack_method == 21)
    {
      traits = [
        createLabel("beidou_attack_count1", "　初撃ヒット回数："),
        createSelectList("beidou_attack_count1", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("beidou_attack_count2", "　稲妻ヒット回数："),
        createSelectList("beidou_attack_count2", 0, 15, "", "回", 10),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      beidou_agg_count = createSelectList("beidou_agg_count", 0, 15, "", "回", 4);
    }
    elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
    elemental_reaction.appendChild(beidou_agg_count); // ラベルを select_reaction_method に追加
    elemental_reaction.appendChild(document.createElement("br"));
  }
  else if (selectedCharId == "41")
  {
    let razor_agg_count;
    if (attack_method == 16)
    {
      traits = [
        createLabel("razor_skill_count", "　雷の印："),
        createSelectList("razor_skill_count", 0, 3, "", "層", 3),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        temporary_char_talent.appendChild(element);
      });

      razor_agg_count = createSelectList("razor_agg_count", 0, 1, "", "回", 1);
      elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
      elemental_reaction.appendChild(razor_agg_count); // ラベルを select_reaction_method に追加
      elemental_reaction.appendChild(document.createElement("br"));
    }
    else if (attack_method == 17)
    {
      traits = [
        createLabel("razor_skill_count", "　雷の印："),
        createSelectList("razor_skill_count", 0, 3, "", "層", 0),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        temporary_char_talent.appendChild(element);
      });

      razor_agg_count = createSelectList("razor_agg_count", 0, 1, "", "回", 1);
      elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
      elemental_reaction.appendChild(razor_agg_count); // ラベルを select_reaction_method に追加
      elemental_reaction.appendChild(document.createElement("br"));
    }
    else if (attack_method == 21)
    {
      traits = [
        createLabel("razor_skill_count", "雷の印："),
        createSelectList("razor_skill_count", 0, 3, "", "層", 0),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        temporary_char_talent.appendChild(element);
      });
      razor_agg_count = createSelectList("razor_agg_count", 0, 15, "", "回", 2);
      elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
      elemental_reaction.appendChild(razor_agg_count); // ラベルを select_reaction_method に追加
      elemental_reaction.appendChild(document.createElement("br"));
    }
  }
  else if (selectedCharId == "42")
  {
    let lisa_agg_count;
    if (attack_method == 1)
    {
      lisa_agg_count = createSelectList("lisa_agg_count", 0, 4, "", "回", 1);
    }
    else if (attack_method == 6)
    {
      lisa_agg_count = createSelectList("lisa_agg_count", 0, 1, "", "回", 1);
    }
    else if (attack_method == 16)
    {
      traits = [
        createLabel("lisa_skill_count", "　誘雷層数："),
        createSelectList("lisa_skill_count", 0, 3, "", "層", 3),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      lisa_agg_count = createSelectList("lisa_agg_count", 0, 1, "", "回", 1);
    }
    else if (attack_method == 21)
    {
      traits = [
        createLabel("lisa_attack_count", "　放電ヒット回数："),
        createSelectList("lisa_attack_count", 0, 29, "", "回", 29),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      lisa_agg_count = createSelectList("lisa_agg_count", 0, 29, "", "回", 10);
    }
    elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
    elemental_reaction.appendChild(lisa_agg_count); // ラベルを select_reaction_method に追加
    elemental_reaction.appendChild(document.createElement("br"));
  }
  else if (selectedCharId == "44")
  {
    let wanderer_talent;
    if (attack_method == 1)
    {
      wanderer_talent = [
        createLabel("wanderer_talent1", "固有天賦1 拾玉得花"),
        document.createElement("br"),
        createCheckbox("talent1_pyro", false),
        createLabel("talent1_pyro", "炎元素: 攻撃力+30%"),
        document.createElement("br"),
        createCheckbox("talent1_cyro", false),
        createLabel("talent1_cyro", "氷元素: 会心率+20%"),
        document.createElement("br")
      ];
    }
    else if (attack_method == 6)
    {
      wanderer_talent = [
        createLabel("wanderer_talent1", "固有天賦1 拾玉得花"),
        document.createElement("br"),
        createCheckbox("talent1_pyro", false),
        createLabel("talent1_pyro", "炎元素: 攻撃力+30%"),
        document.createElement("br"),
        createCheckbox("talent1_cyro", false),
        createLabel("talent1_cyro", "氷元素: 会心率+20%"),
        document.createElement("br")
      ];
    }
    else if (attack_method == 21)
    {
      if (CharConstellations > 1)
      {
        elementsToAddToCharTalent = [
          createLabel("wanderer", "2重：弐番・箙島廓白浪"),
          document.createElement("br"),
          createLabel("wanderer_dmgbuff", "　 与えるダメージ ＋"),
          createInputWithUnit("text", "wanderer_dmgbuff", "200","%"),
          document.createElement("br")
        ];
      
        elementsToAddToCharTalent.forEach(element => {
          temporary_char_talent.appendChild(element);
        });
      }
      wanderer_talent = [
        createLabel("wanderer_talent1", "固有天賦1 拾玉得花"),
        document.createElement("br"),
        createCheckbox("talent1_pyro", false),
        createLabel("talent1_pyro", "炎元素: 攻撃力+30%"),
        document.createElement("br"),
        createCheckbox("talent1_cyro", false),
        createLabel("talent1_cyro", "氷元素: 会心率+20%"),
        document.createElement("br")
      ];
    }
    wanderer_talent.forEach(element => {
      temporary_char_talent.appendChild(element);
    });
  }
  else if (selectedCharId == "46")
  {
    let xiao_talent;
    if (attack_method == 16)
    {
      xiao_talent = [
        createLabel("xiao_talent2_buff", "固有天賦2 壊劫・国土砕き：与えるダメージ"),
        createanySelectList("xiao_talent2_buff", 0, 3, "+", "%", 1, 15),
      ];
      xiao_talent.forEach(element => {
        temporary_char_talent.appendChild(element);
      });
    }
  }
  else if (selectedCharId == "49")
  {
    if (attack_method == 16)
    {
      let faruzan_count1_text;
      let faruzan_attack1_count;
      let faruzan_count2_text;
      let faruzan_attack2_count;

      faruzan_count1_text = createTextNode("　スキル初撃ヒット回数：")
      faruzan_attack1_count = createSelectList("faruzan_attack1_count", 0, 5, "", "回", 1);
      faruzan_count2_text = createTextNode("　風圧崩潰ヒット回数　：")
      faruzan_attack2_count = createSelectList("faruzan_attack2_count", 0, 10, "", "回", 2);
      attack_method_prop.appendChild(faruzan_count1_text);
      attack_method_prop.appendChild(faruzan_attack1_count);
      attack_method_prop.appendChild(document.createElement("br"));
      attack_method_prop.appendChild(faruzan_count2_text);
      attack_method_prop.appendChild(faruzan_attack2_count);
      attack_method_prop.appendChild(document.createElement("br"));
    }
  }
  else if (selectedCharId == "50")
  {
    if (attack_method == 16)
    {
      let shikanoinheizou_count1_text;
      let shikanoinheizou_attack_count;

      shikanoinheizou_count1_text = createTextNode("　変格層数：");
      shikanoinheizou_attack_count = createSelectList("shikanoinheizou_attack_count", 0, 4, "", "層", 4);
      attack_method_prop.appendChild(shikanoinheizou_count1_text);
      attack_method_prop.appendChild(shikanoinheizou_attack_count);
      attack_method_prop.appendChild(document.createElement("br"));
    }
  }
  else if (selectedCharId == "55")
  {      
    let alhaitham_agg_count;
    if (attack_method == 1)
    {
      alhaitham_agg_countlist = createSelectList("alhaitham_agg_count", 0, 50, "", "回", 2);
      elemental_reaction.appendChild(Spread_text); // チェックボックスを select_reaction_method に追加
      elemental_reaction.appendChild(alhaitham_agg_countlist); // ラベルを select_reaction_method に追加
      elemental_reaction.appendChild(document.createElement("br"));
    }
    else if (attack_method == 6)
    {
      alhaitham_agg_countlist = createSelectList("alhaitham_agg_count", 0, 50, "", "回", 1);
      elemental_reaction.appendChild(Spread_text); // チェックボックスを select_reaction_method に追加
      elemental_reaction.appendChild(alhaitham_agg_countlist); // ラベルを select_reaction_method に追加
      elemental_reaction.appendChild(document.createElement("br"));
    }
    else if (attack_method == 16)
    {
      traits = [
        createLabel("alhaitham_skill_count1", "　突進攻撃ヒット回数："),
        createSelectList("alhaitham_skill_count1", 0, 1, "", "回", 1),
        document.createElement("br"),
        createLabel("alhaitham_skill_count2", "　琢光鏡1枚光幕攻撃ヒット回数："),
        createSelectList("alhaitham_skill_count2", 0, 5, "", "回", 2),
        document.createElement("br"),
        createLabel("alhaitham_skill_count3", "　琢光鏡2枚光幕攻撃ヒット回数："),
        createSelectList("alhaitham_skill_count3", 0, 5, "", "回", 2),
        document.createElement("br"),
        createLabel("alhaitham_skill_count4", "　琢光鏡3枚光幕攻撃ヒット回数："),
        createSelectList("alhaitham_skill_count4", 0, 5, "", "回", 2),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      let alhaitham_agg_text = createTextNode("　突進攻撃 草激化回数：")
      let alhaitham_agg_count = createSelectList("alhaitham_agg_count", 0, 30, "", "回", 1);
      let alhaitham_talent1_agg_text = createTextNode("　光幕攻撃 草激化回数：")
      let alhaitham_talent1_agg_count = createSelectList("alhaitham_talent1_agg_count", 0, 30, "", "回", 4);
      elemental_reaction.appendChild(alhaitham_agg_text); // チェックボックスを select_reaction_method に追加
      elemental_reaction.appendChild(alhaitham_agg_count); // ラベルを select_reaction_method に追加
      elemental_reaction.appendChild(document.createElement("br"));
      elemental_reaction.appendChild(alhaitham_talent1_agg_text); // チェックボックスを select_reaction_method に追加
      elemental_reaction.appendChild(alhaitham_talent1_agg_count); // ラベルを select_reaction_method に追加
      elemental_reaction.appendChild(document.createElement("br"));
    }
    else if (attack_method == 21)
    {
      traits = [
        createLabel("alhaitham_skill_count1", "琢光鏡消費枚数："),
        createSelectList("alhaitham_skill_count1", 0, 3, "", "枚", 0),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      alhaitham_agg_countlist = createSelectList("alhaitham_agg_count", 0, 50, "", "回", 1);
      elemental_reaction.appendChild(Spread_text); // チェックボックスを select_reaction_method に追加
      elemental_reaction.appendChild(alhaitham_agg_countlist); // ラベルを select_reaction_method に追加
      elemental_reaction.appendChild(document.createElement("br"));
    }
  }
  else if (selectedCharId == "56")
  {      
    if (attack_method == 1)
    {
      nahida_agg_countlist = createSelectList("nahida_agg_count", 0, 50, "", "回", 2);
    }
    else if (attack_method == 6)
    {
      nahida_agg_countlist = createSelectList("nahida_agg_count", 0, 50, "", "回", 1);
    }
    else if (attack_method==16)
    {
      nahida_agg_countlist = createSelectList("nahida_agg_count", 0, 50, "", "回", 1);
    }
    else if (attack_method==17)
    {
      nahida_agg_countlist = createSelectList("nahida_agg_count", 0, 50, "", "回", 1);
    }
    elemental_reaction.appendChild(Spread_text); // チェックボックスを select_reaction_method に追加
    elemental_reaction.appendChild(nahida_agg_countlist); // ラベルを select_reaction_method に追加
    elemental_reaction.appendChild(document.createElement("br"));
  }
  else if (selectedCharId == "57")
  {
    let tighnari_agg_countlist;
    if (attack_method == 6)
    {
      if (CharConstellations < 4)
      {
        traits = [
          createLabel("tighnari_attack1_count", "　花筐の矢 ヒット回数："),
          createSelectList("tighnari_attack1_count", 0, 3, "", "回", 1),
          document.createElement("br"),
          createLabel("tighnari_attack2_count", "　蔵蘊の花矢 ヒット回数："),
          createSelectList("tighnari_attack2_count", 0, 12, "", "回", 4),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          attack_method_prop.appendChild(element);
        });

        traits = [
          createLabel("tighnari_agg_count", "　花筐の矢 草激化回数："),
          createSelectList("tighnari_agg_count", 0, 3, "", "回", 1),
          document.createElement("br"),
          createLabel("tighnari_talent1_agg_count", "　蔵蘊の花矢 草激化回数："),
          createSelectList("tighnari_talent1_agg_count", 0, 12, "", "回", 1),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          elemental_reaction.appendChild(element);
        });
      }
      else
      {
        traits = [
          createLabel("tighnari_attack1_count", "　花筐の矢 ヒット回数："),
          createSelectList("tighnari_attack1_count", 0, 3, "", "回", 1),
          document.createElement("br"),
          createLabel("tighnari_attack2_count", "　蔵蘊の花矢 ヒット回数："),
          createSelectList("tighnari_attack2_count", 0, 12, "", "回", 4),
          document.createElement("br"),
          createLabel("tighnari_attack3_count", "　6重蔵蘊の花矢 ヒット回数："),
          createSelectList("tighnari_attack3_count", 0, 3, "", "回", 1),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          attack_method_prop.appendChild(element);
        });

        traits = [
          createLabel("tighnari_agg_count", "　花筐の矢 草激化回数："),
          createSelectList("tighnari_agg_count", 0, 3, "", "回", 1),
          document.createElement("br"),
          createLabel("tighnari_talent1_agg_count", "　蔵蘊の花矢 草激化回数："),
          createSelectList("tighnari_talent1_agg_count", 0, 12, "", "回", 2),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          elemental_reaction.appendChild(element);
        });
        
      }
    }
    else if (attack_method == 21)
    {
      traits = [
        createLabel("tighnari_attack1_count", "　蔓纏いの矢 ヒット回数："),
        createSelectList("tighnari_attack1_count", 0, 6, "", "回", 6),
        document.createElement("br"),
        createLabel("tighnari_attack2_count", "　次級·蔓纏いの矢 ヒット回数："),
        createSelectList("tighnari_attack2_count", 0, 6, "", "回", 6),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });

      tighnari_agg_countlist = createSelectList("tighnari_agg_count", 0, 50, "", "回", 4);
      elemental_reaction.appendChild(Spread_text); // チェックボックスを select_reaction_method に追加
      elemental_reaction.appendChild(tighnari_agg_countlist); // ラベルを select_reaction_method に追加
      elemental_reaction.appendChild(document.createElement("br"));
    }
  }
  else if (selectedCharId == "58")
  {
    let kirara_agg_count;
    if (attack_method == 16)
    {
      kirara_agg_count = createSelectList("kirara_agg_count", 0, 50, "", "回", 2);
    }
    else if (attack_method == 17)
    {
      traits = [
        createLabel("kirara_skill_count", "　衝突回数："),
        createSelectList("kirara_skill_count", 0, 20, "", "回", 20),
        document.createElement("br"),
        createLabel("kirara_nyan_count", "　くるりん爪撃ヒット回数："),
        createSelectList("kirara_nyan_count", 0, 1, "", "回", 1),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      kirara_agg_count = createSelectList("kirara_agg_count", 0, 50, "", "回", 8);
    }
    else if (attack_method == 21)
    {
      if(CharConstellations < 3)
      {
        traits = [
          createLabel("kirara_skill_count", "　初撃ヒット回数："),
          createSelectList("kirara_skill_count", 0, 1, "", "回", 1),
          document.createElement("br"),
          createLabel("kirara_nyan_count", "　ニャルダモンヒット回数："),
          createSelectList("kirara_nyan_count", 0, 6, "", "回", 6),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          attack_method_prop.appendChild(element);
        });
        kirara_agg_count = createSelectList("kirara_agg_count", 0, 50, "", "回", 3);
      }
      else
      {
        traits = [
          createLabel("kirara_skill_count", "　初撃ヒット回数："),
          createSelectList("kirara_skill_count", 0, 1, "", "回", 1),
          document.createElement("br"),
          createLabel("kirara_nyan_count", "　ニャンダモンヒット回数："),
          createSelectList("kirara_nyan_count", 0, 6, "", "回", 6),
          document.createElement("br"),
          createLabel("kirara_mininyan_count", "　ミニニャンダモンヒット回数："),
          createSelectList("kirara_mininyan_count", 0, 3, "", "回", 3),
          document.createElement("br"),
        ];
        traits.forEach(element => {
          attack_method_prop.appendChild(element);
        });
        kirara_agg_count = createSelectList("kirara_agg_count", 0, 50, "", "回", 4);
      }
    }
    elemental_reaction.appendChild(Spread_text); // チェックボックスを select_reaction_method に追加
    elemental_reaction.appendChild(kirara_agg_count); // ラベルを select_reaction_method に追加
    elemental_reaction.appendChild(document.createElement("br"));
  }
  else if (selectedCharId == "62")
  {
    let travelardendro_agg_count;
    if (attack_method == 16)
    {
      travelardendro_agg_count = createSelectList("travelardendro_agg_count", 0, 50, "", "回", 1);
    }
    else if (attack_method == 21)
    {
      traits = [
        createLabel("travelardendro_skill_count", "　草蓮灯ヒット回数："),
        createSelectList("travelardendro_skill_count", 0, 20, "", "回", 17),
        document.createElement("br"),
        createLabel("travelardendro_pyro_count", "　猛爆発ヒット回数："),
        createSelectList("travelardendro_pyro_count", 0, 1, "", "回", 0),
        document.createElement("br"),
      ];
      traits.forEach(element => {
        attack_method_prop.appendChild(element);
      });
      travelardendro_agg_count = createSelectList("travelardendro_agg_count", 0, 50, "", "回", 5);
    }
    elemental_reaction.appendChild(Spread_text); // チェックボックスを select_reaction_method に追加
    elemental_reaction.appendChild(travelardendro_agg_count); // ラベルを select_reaction_method に追加
    elemental_reaction.appendChild(document.createElement("br"));
  }
  else if (selectedCharId == "77")
  {
    {
      if (attack_method == 16)
      {
        if(CharConstellations < 2)
        {
          elementsToAddToCharTalent = [
            createLabel("chiori_hitcount1", "　斬り上げ攻撃ヒット数："),
            createSelectList("chiori_hitcount1", 0, 1, "", "回", 1),
            document.createElement("br"),
            createLabel("chiori_hitcount2", "　たもと攻撃ヒット数："),
            createSelectList("chiori_hitcount2", 0, 20, "", "回", 10),
            document.createElement("br"),
            createLabel("chiori_hitcount3", "　たもと連携攻撃ヒット数："),
            createSelectList("chiori_hitcount3", 0, 2, "", "回", 2),
            document.createElement("br"),
          ];
        }
        else if (CharConstellations < 3)
        {
          elementsToAddToCharTalent = [
            createLabel("chiori_hitcount1", "　斬り上げ攻撃ヒット数："),
            createSelectList("chiori_hitcount1", 0, 1, "", "回", 1),
            document.createElement("br"),
            createLabel("chiori_hitcount2", "　たもと攻撃ヒット数："),
            createSelectList("chiori_hitcount2", 0, 20, "", "回", 10),
            document.createElement("br"),
            createLabel("chiori_hitcount3", "　たもと連携攻撃ヒット数："),
            createSelectList("chiori_hitcount3", 0, 2, "", "回", 2),
            document.createElement("br"),
            createLabel("chiori_hitcount4", "　きぬ攻撃ヒット数："),
            createSelectList("chiori_hitcount4", 0, 6, "", "回", 3),
            document.createElement("br"),
          ];
        }
        else
        {
          elementsToAddToCharTalent = [
            createLabel("chiori_hitcount1", "　斬り上げ攻撃ヒット数："),
            createSelectList("chiori_hitcount1", 0, 1, "", "回", 1),
            document.createElement("br"),
            createLabel("chiori_hitcount2", "　たもと攻撃ヒット数："),
            createSelectList("chiori_hitcount2", 0, 20, "", "回", 10),
            document.createElement("br"),
            createLabel("chiori_hitcount3", "　たもと連携攻撃ヒット数："),
            createSelectList("chiori_hitcount3", 0, 2, "", "回", 2),
            document.createElement("br"),
            createLabel("chiori_hitcount4", "　きぬ攻撃ヒット数："),
            createSelectList("chiori_hitcount4", 0, 12, "", "回", 6),
            document.createElement("br"),
          ];
        }
  
        elementsToAddToCharTalent.forEach(element => {
          attack_method_prop.appendChild(element);
        });
      }
    }
  }
  else if (selectedCharId == "75")
  {
    {
      let navia_talent;
      if (attack_method == 16)
      {
        elementsToAddToCharTalent = [
          createLabel("navia_hitcount", "　ロースラ晶弾ヒットカウント"),
          createSelectList("navia_hitcount", 1, 11, "", "回", 11),
          document.createElement("br"),
          createLabel("navia_buff_count", "　裂晶の欠片消費数"),
          createSelectList("navia_buff_count", 0, 6, "", "回", 6),
          document.createElement("br"),
        ];
  
        elementsToAddToCharTalent.forEach(element => {
          attack_method_prop.appendChild(element);
        });
      }
      else if (attack_method == 21)
      {
        elementsToAddToCharTalent = [
          createLabel("navia_hitcount1", "　初撃ヒット回数"),
          createSelectList("navia_hitcount1", 0, 1, "", "回", 1),
          document.createElement("br"),
          createLabel("navia_hitcount2", "　火力支援ヒット回数"),
          createSelectList("navia_hitcount2", 0, 17, "", "個", 17),
          document.createElement("br"),
        ];
  
        elementsToAddToCharTalent.forEach(element => {
          attack_method_prop.appendChild(element);
        });
      }
    }
  }
  else if (selectedCharId == "63")
  {
    if (attack_method == 6)
    {
      const arataki_text = createTextNode("　重撃ヒット回数(とどめを含む)：");
      const aratakicount_selectlist = createSelectList("arataki_count", 1, 10, "", "回", 3);
      attack_method_prop.appendChild(arataki_text);
      attack_method_prop.appendChild(aratakicount_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
    }
  }
  else if (selectedCharId == "64")
  {
    if (attack_method == 16)
    {
      const albedo_text = createTextNode("　スキル追撃ヒット回数：");
      const albedocount_selectlist = createSelectList("albedo_count", 1, 15, "", "回", 5);
      attack_method_prop.appendChild(albedo_text);
      attack_method_prop.appendChild(albedocount_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
    }
    else if (attack_method == 21)
    {
      const albedo_text = createTextNode("　生滅の花ヒット回数：");
      const albedocount_selectlist = createSelectList("albedo_count", 1, 7, "", "回", 3);
      attack_method_prop.appendChild(albedo_text);
      attack_method_prop.appendChild(albedocount_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
    }
  }
  else if (selectedCharId == "69")
  {
    if (attack_method == 1)
    {
      const ningguang_text = createTextNode("　通常攻撃ヒット回数：");
      const ningguangcount_selectlist = createSelectList("ningguang_count", 1, 10, "", "回", 3);
      attack_method_prop.appendChild(ningguang_text);
      attack_method_prop.appendChild(ningguangcount_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
    }
    else if (attack_method == 6)
    {
      const ningguang_text = createTextNode("　星璇枚数：");
      let ningguangcount_selectlist = createSelectList("ningguang_count", 0, 3, "", "枚", 3);
      if (CharConstellations == 4)
      {
        let ningguang_sixth_conste_buff = document.createElement("option");
        ningguang_sixth_conste_buff.value = 7;
        ningguang_sixth_conste_buff.text = `${""}${7}${"枚"}`;   
        ningguang_sixth_conste_buff.selected = true;  
        ningguangcount_selectlist.appendChild(ningguang_sixth_conste_buff);
      }
      attack_method_prop.appendChild(ningguang_text);
      attack_method_prop.appendChild(ningguangcount_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
    }
    else if (attack_method == 21)
    {
      const ningguang_text = createTextNode("　天権崩玉 宝石弾ヒット数：");
      const ningguangcount_selectlist = createSelectList("ningguang_count", 1, 12, "", "発", 10);
      attack_method_prop.appendChild(ningguang_text);
      attack_method_prop.appendChild(ningguangcount_selectlist);
      attack_method_prop.appendChild(document.createElement("br"));
    }
  }
  else if (selectedCharId == "70")
  {
    if (attack_method == 21)
    {
      travelergeo_burstcount_text = createTextNode("　岩潮幾重ヒット回数　：");
      travelergeo_burstcount = createSelectList("travelergeo_burstcount", 0, 4, "", "回", 4);
      attack_method_prop.appendChild(travelergeo_burstcount_text);
      attack_method_prop.appendChild(travelergeo_burstcount);
      attack_method_prop.appendChild(document.createElement("br"));
    }
  }

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
  calculate_table_status();
  showFormElements();
}

function createCheckboxList(options) {
    const select_reaction_method = document.getElementById("select_reaction_method"); // チェックボックスを追加する要素を指定
    let counter = 0; // チェックボックスの数をカウントする変数

    options.forEach((option) => {
        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.value = option.value;
        if (option.checked) {
            checkboxInput.checked = true;
        }
        checkboxInput.id = "checkbox_" + option.value; // チェックボックスに一意のIDを設定

        const checkboxLabel = document.createElement("label");
        checkboxLabel.textContent = option.text;
        checkboxLabel.htmlFor = checkboxInput.id;

        select_reaction_method.appendChild(checkboxInput); // チェックボックスを select_reaction_method に追加
        select_reaction_method.appendChild(checkboxLabel); // ラベルを select_reaction_method に追加

        counter++;

        if (counter % 4 === 0 && counter > 0) {
            const lineBreak = document.createElement("br");
            select_reaction_method.appendChild(lineBreak); // 4つ追加するごとに改行
        }
    });
}

function createCheckboxList_br(options)
{
    const select_reaction_method = document.getElementById("select_reaction_method"); // チェックボックスを追加する要素を指定
    options.forEach((option) => {
        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.value = option.value;
        if (option.checked) {
            checkboxInput.checked = true;
        }
        checkboxInput.id = "checkbox_" + option.value; // チェックボックスに一意のIDを設定

        const checkboxLabel = document.createElement("label");
        checkboxLabel.textContent = option.text;
        checkboxLabel.htmlFor = checkboxInput.id;

        select_reaction_method.appendChild(checkboxInput); // チェックボックスを select_reaction_method に追加
        select_reaction_method.appendChild(checkboxLabel); // ラベルを select_reaction_method に追加
        select_reaction_method.appendChild(document.createElement("br"));
    });
}
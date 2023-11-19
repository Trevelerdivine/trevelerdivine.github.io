async function show_attack_method()
{
  const select_reaction_method = document.getElementById("select_reaction_method");
  select_reaction_method.innerHTML = "";
  const elemental_reaction = document.getElementById("element_action");
  elemental_reaction.innerHTML = "";
  const attack_method_prop = document.getElementById("attack_method_prop");
  attack_method_prop.innerHTML = "";
  const tenporary_char_talent = document.getElementById("tenporary_char_talent");
  tenporary_char_talent.innerHTML = "";
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

  const char_constellations = document.getElementById("char_constellations").value;
  const Aggravate_text = createTextNode("　超激化回数：　");
  const Spread_text = createTextNode("　草激化回数：　");
  const vap_text = createTextNode("蒸発回数：");

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
    select_reaction_method.appendChild(document.createElement("br"));


    elements_const_dmg = [
      document.createElement("br"),
      createLabel("Overloaded", "　過負荷回数：　"),
      createSelectList("Overloaded", 0, 50, "", "回", 0),
      document.createElement("br"),
      createLabel("Burgeon", "　烈開花回数：　"),
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
    select_reaction_method.appendChild(document.createElement("br"));

    elements_const_dmg = [
    document.createElement("br"),
    createLabel("Electro_Charged", "　感電回数：　"),
    createSelectList("Electro_Charged", 0, 50, "", "回", 0),
    document.createElement("br"),
  ];

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
    select_reaction_method.appendChild(document.createElement("br"));

  }

  else if (char_propaty[0] == 3)
  {
    elemental_reaction.appendChild(ReactionOnRadioButton);
    elemental_reaction.appendChild(ReactionOnRadio_label);
    elemental_reaction.appendChild(document.createElement("br"));

    elements_const_dmg = [
      document.createElement("br"),
      createLabel("Overloaded", "　過負荷回数：　"),
      createSelectList("Overloaded", 0, 50, "", "回", 0),
      document.createElement("br"),
      createLabel("Electro_Charged", "　感電回数：　"),
      createSelectList("Electro_Charged", 0, 50, "", "回", 0),
      document.createElement("br"),
      createLabel("Hyperbloom", "　超開花回数：　"),
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
  }
  attack_method = document.getElementById("attack_method_id").value;     
  let options = [];
  let elementsToAddToCharTalent;

    switch (selectedCharId)
    {
      case "0":
              if (attack_method == 21)
              {
                elementsToAddToCharTalent = [
                  createLabel("dehya_1_count", "熾鬣拳ヒット回数："),
                  createSelectList("dehya_1_count", 0, 15, "", "回", 10),
                  document.createElement("br"),
                  createLabel("dehya_2_count", "残火蹴ヒット回数："),
                  createSelectList("dehya_2_count", 0, 1, "", "回", 1),
                  document.createElement("br"),
                ];
    
                const elementsReactionToAddToCharTalent = [
                  createLabel("dehya_1_reactioncount", "熾鬣拳ヒット回数："),
                  createSelectList("dehya_1_reactioncount", 0, 15, "", "回", 4),
                  document.createElement("br"),
                  createLabel("dehya_2_reactioncount", "残火蹴ヒット回数："),
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
        break
        case "1":
              if (attack_method == 1)
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
        break

        case "2":
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
              else if (attack_method == 6) {
                options = [
                  { text: "重撃", value: "0", checked: true },
                ];
              }else if (attack_method == 21) {
                let hutao_Q_check = createCheckbox("hutao_Q_effect", true);
                let hutao_Q_label = createLabel("hutao_Q_effect", "胡桃のHP50%以下");
                char_talent.appendChild(hutao_Q_check);
                char_talent.appendChild(hutao_Q_label);
                
                options = [
                  { text: "安神秘法", value: "0", checked: true },
                ];
            }
            createCheckboxList(options)
        break

        case "3":
          if (attack_method == 1)
          {
            options = [
              { text: "１段目", value: "0", checked: true },
              { text: "２段目", value: "1" },
              { text: "３段目", value: "2" },
            ];
          } 
          else if (attack_method == 6) {
            options = [
              { text: "重撃", value: "0", checked: true },
            ];
            const newCheckbox = createCheckbox("klee_talent1", true);
            const label = createLabel("klee_talent1", "こんこんプレゼント：与えるダメージ+50%");
            const lineBreak = document.createElement("br");
          
            // 新しいチェックボックスと関連する要素を追加
            tenporary_char_talent.appendChild(newCheckbox);
            tenporary_char_talent.appendChild(label);
            tenporary_char_talent.appendChild(lineBreak);   
          }else if (attack_method == 16) {
            elementsToAddToCharTalent = [
              createLabel("klee_1_count", "ボンボン爆弾ヒット回数："),
              createSelectList("klee_1_count", 0, 3, "", "回", 3),
              document.createElement("br"),
              createLabel("klee_2_count", "ブービートラップヒット回数："),
              createSelectList("klee_2_count", 0, 8, "", "回", 8),
              document.createElement("br"),
            ];

            const elementsReactionToAddToCharTalent = [
              createLabel("klee_1_reactioncount", "ボンボン爆弾ヒット回数："),
              createSelectList("klee_1_reactioncount", 0, 3, "", "回", 1),
              document.createElement("br"),
              createLabel("klee_2_reactioncount", "ブービートラップヒット回数："),
              createSelectList("klee_2_reactioncount", 0, 8, "", "回", 3),
              document.createElement("br"),
            ];
          
            elementsToAddToCharTalent.forEach(element => {
              attack_method_prop.appendChild(element);
            });
            elementsReactionToAddToCharTalent.forEach(element => {
              select_reaction_method.appendChild(element);
            });
        }else if (attack_method == 21) {
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
        createCheckboxList(options)
    break

        case "4":
              if (attack_method == 1)
              {
                options = [
                  { text: "１段目", value: "0", checked: true },
                  { text: "２段目", value: "1" },
                  { text: "３段目", value: "2" },
                  { text: "４段目", value: "3", checked: true },
                ];
                createCheckboxList(options);
              }else if (attack_method == 16) {
                options = [
                  { text: "１段目", value: "0", checked: true },
                  { text: "２段目", value: "1" },
                  { text: "３段目", value: "2" }
                ];
                createCheckboxList(options);
            }
            else if (attack_method == 21) {          
              elementsToAddToCharTalent = [
                createLabel("diluc_1_count", "斬撃ダメージヒット回数："),
                createSelectList("diluc_1_count", 0, 1, "", "回", 1),
                document.createElement("br"),
                createLabel("diluc_2_count", "継続ダメージヒット回数："),
                createSelectList("diluc_2_count", 0, 10, "", "回", 8),
                document.createElement("br"),
                createLabel("diluc_3_count", "爆発ダメージヒット回数："),
                createSelectList("diluc_3_count", 0, 1, "", "回", 1),
                document.createElement("br"),
              ];

              const elementsReactionToAddToCharTalent = [
                createLabel("diluc_1_reactioncount", "斬撃ダメージヒット回数："),
                createSelectList("diluc_1_reactioncount", 0, 1, "", "回", 1),
                document.createElement("br"),
                createLabel("diluc_2_reactioncount", "継続ダメージヒット回数："),
                createSelectList("diluc_2_reactioncount", 0, 10, "", "回", 3),
                document.createElement("br"),
                createLabel("diluc_3_reactioncount", "爆発ダメージヒット回数："),
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
        break

        case "6":
            if (attack_method == 1) {
              options = [
                { text: "１段目", value: "0", checked: true },
                { text: "２段目", value: "1" },
                { text: "３段目", value: "2" },
              ];
              }else if (attack_method == 6) {
                elementsToAddToCharTalent = [
                  createCheckbox("yanfei_Q", true),
                  createLabel("yanfei_Q", "元素爆発：契約成立"),
                  document.createElement("br"),
                  createTextNode("　元素爆発天賦レベル："),
                  createSelectList("yanfeiQ_level", 1, 13, "Lv.", "", 10),
                  document.createElement("br"),
                ];
              
                elementsToAddToCharTalent.forEach(element => {
                  tenporary_char_talent.appendChild(element);
                });
                const yanfei_text = createTextNode("　丹火の印：")
                const yanfei_textskill_selectlist = createSelectList("yanfei_mark", 0, 4, "", "枚", 3);
                attack_method_prop.appendChild(document.createElement("br"));
                attack_method_prop.appendChild(yanfei_text);
                attack_method_prop.appendChild(yanfei_textskill_selectlist);
                options = [
                  { text: "重撃", value: "0", checked: true },
                ];
              }else if (attack_method == 16) {
                options = [
                  { text: "丹書契約", value: "0", checked: true },
                ];
              }else if (attack_method == 21) {
                options = [
                  { text: "契約成立", value: "0", checked: true },
                ];
            }
            createCheckboxList(options)
        break

        case "7":
              if (attack_method == 6) {
                elementsToAddToCharTalent = [
                  createLabel("xinyan1_count", "連続重撃ヒット回数："),
                  createSelectList("xinyan1_count", 0, 20, "", "回", 10),
                  document.createElement("br"),
                  createLabel("xinyan2_count", "重撃フィニッシュヒット回数："),
                  createSelectList("xinyan2_count", 0, 1, "", "回", 1),
                  document.createElement("br"),
                ];

                elementsToAddToCharTalent.forEach(element => {
                  attack_method_prop.appendChild(element);
                });
              }
        break
      
        case "8":
          if (attack_method == 16) {
            options = [
              { text: "一回押しダメージ", value: "0", checked: true },
            ];
          }
          else if (attack_method == 17) {
            options = [
              { text: "一回押しダメージ", value: "0", checked: true },
              { text: "1段チャージダメージ", value: "1"},
            ];
            if (char_constellations > 2)
            {
              options = [
                { text: "一回押しダメージ", value: "0", checked: true },
                { text: "1段チャージダメージ", value: "1"},
                { text: "消えない情熱ダメージ", value: "2", checked: true },
              ];
            }
          }
          if (attack_method == 18) {
            options = [
              { text: "一回押しダメージ", value: "0", checked: true },
              { text: "1段チャージダメージ", value: "1"},
              { text: "2段チャージダメージ", value: "2", checked: true},
            ];
          }
            
            createCheckboxList_br(options);
      break

        case "9":
            if (attack_method == 16) {
              const xianglingskillcount_text = createTextNode("　ヒット回数：")
              const xianglingcount_selectlist = createSelectList("xiangling_E_count", 1, 4, "", "回", 4);
              attack_method_prop.appendChild(document.createElement("br"));
              attack_method_prop.appendChild(xianglingskillcount_text);
              attack_method_prop.appendChild(xianglingcount_selectlist);
              const xianglingskill_text = createTextNode("　元素反応回数：")
              const xianglingskill_selectlist = createSelectList("xiangling_E", 0, 4, "", "回", 4);
              select_reaction_method.appendChild(xianglingskill_text); // チェックボックスを select_reaction_method に追加
              select_reaction_method.appendChild(xianglingskill_selectlist); 
              }else if (attack_method==21) {
                const xianglingburst_text = createTextNode("　ヒット回数：")
                const xianglingburst_selectlist = createSelectList("xiangling_Q_count", 1, 22, "", "回", 11);
                attack_method_prop.appendChild(document.createElement("br"));
                attack_method_prop.appendChild(xianglingburst_text);
                attack_method_prop.appendChild(xianglingburst_selectlist);
                const xianglinreaction_text = createTextNode("　元素反応回数：")
                const xianglingreaction_selectlist = createSelectList("xiangling_Q", 0, 22, "", "回", 11);
                select_reaction_method.appendChild(xianglinreaction_text); // チェックボックスを select_reaction_method に追加
                select_reaction_method.appendChild(xianglingreaction_selectlist); 
            }
        break

        case "10":
            if (attack_method == 6) {
              options = [
                { text: "１段目", value: "0", checked: true },
              ];
              if (char_constellations > 0)
              {
                options = [
                  { text: " 重撃フルチャージ", value: "0", checked: true },
                  { text: "1重追撃", value: "1"},
                ];
              }
              }
              createCheckboxList_br(options);
        break

        case "11":
            if (attack_method == 16) {
              options = [
                { text: "剣舞のステップ-1段", value: "0", checked: true },
                { text: "剣舞のステップ-2段", value: "1" },
                { text: "水月", value: "2" },
              ];
              }else if (attack_method==21) {
                options = [
                  { text: "元素爆発ダメージ", value: "0", checked: true },
                  { text: "久遠の惑溺", value: "1", checked: true },
                ];
            }
            createCheckboxList_br(options);
        break

        case "12":
              if (attack_method == 16) {
              options = [
                { text: "絡み合う命の糸", value: "0", checked: true },
              ];
              createCheckboxList(options)
            }else if (attack_method == 21) {
              if (char_constellations < 2)
              {
              options = [
                { text: "玲瓏一擲1", value: "0", checked: true },
                { text: "玲瓏一擲2", value: "1"},
                { text: "玲瓏一擲3", value: "2"},
              ];
              }
              else
              {
                options = [
                  { text: "玲瓏一擲1", value: "0", checked: true },
                  { text: "玲瓏一擲2", value: "1"},
                  { text: "玲瓏一擲3", value: "2"},
                  { text: "追加追撃", value: "3", checked: true },
                ];
              }
              createCheckboxList_br(options);
          }
      break

      case "13":
            if (attack_method == 1) {
              if (char_constellations < 4)
              {
                options = [
                  { text: "瞬水剣1段", value: "0", checked: true },
                  { text: "瞬水剣2段", value: "1"},
                  { text: "瞬水剣3段", value: "2"},
                ];
              }
              else
              {
                options = [
                  { text: "瞬水剣1段", value: "0", checked: true },
                  { text: "瞬水剣2段", value: "1"},
                  { text: "瞬水剣3段", value: "2"},
                  { text: "6重瞬水剣1", value: "3", checked: true },
                  { text: "6重瞬水剣2", value: "4", checked: true },
                ];
              }
              createCheckboxList_br(options);

              let rousen_count;
              if (char_constellations > 1)
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
                tenporary_char_talent.appendChild(element);
              });
          }
      break

      case "19":
              if (attack_method == 16) {
                options = [
                  { text: "1ヒット目　", value: "0", checked: true },
                  { text: "2ヒット目", value: "1"},
                ];
              createCheckboxList(options)
            }else if (attack_method == 21) {

              let xingqiu_hitcount = 30;
              let xingqiu_vapcount = 10;
              if (char_constellations == 4)
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
      break

      case "22":
        const eulaburst_text = createTextNode("　エネルギー：")
        const eulaburst_selectlist = createSelectList("eula_enelgy", 0, 30, "", "重", 15);
        attack_method_prop.appendChild(eulaburst_text);
        attack_method_prop.appendChild(eulaburst_selectlist);
      break

    case "23":
            if (attack_method == 6) {
              options = [
                { text: "霜華の矢", value: "0", checked: true },
                { text: "霜華の矢・霜華満開", value: "1" , checked: true},
              ];
              createCheckboxList_br(options);
            } else if (attack_method == 21) {
              const ganyuburst_text = createTextNode("　ヒット回数：")
              const ganyuburst_selectlist = createSelectList("ganyu_Q_count", 1, 50, "", "回", 15);
              attack_method_prop.appendChild(document.createElement("br"));
              attack_method_prop.appendChild(ganyuburst_text);
              attack_method_prop.appendChild(ganyuburst_selectlist);
              const ganyureaction_text = createTextNode("　元素反応回数：")
              const ganyureaction_selectlist = createSelectList("ganyu_Q", 0, 50, "", "回", 5);
              select_reaction_method.appendChild(ganyureaction_text); // チェックボックスを select_reaction_method に追加
              select_reaction_method.appendChild(ganyureaction_selectlist); 
            }
        break

        case "32":
          let cyno_selectlist;
          if (attack_method == 1) {
            cyno_agg_countlist = createSelectList("cyno_agg_count", 0, 10, "", "回", 2);
          } else if (attack_method == 16) {
            let cyno_E_text = createTextNode("　律淵渡魂ヒット回数：")
            let cyno_E_count = createSelectList("cyno_E_count", 1, 15, "", "回", 5);
            let cyno_talent1_text = createTextNode("　渡荒の雷ヒット回数：")
            let cyno_talent1_count = createSelectList("cyno_talent1_count", 1, 60, "", "回", 15);
            attack_method_prop.appendChild(cyno_E_text);
            attack_method_prop.appendChild(cyno_E_count);
            attack_method_prop.appendChild(document.createElement("br"));
            attack_method_prop.appendChild(cyno_talent1_text);
            attack_method_prop.appendChild(cyno_talent1_count);
            attack_method_prop.appendChild(document.createElement("br"));

            cyno_agg_countlist = createSelectList("cyno_agg_count", 0, 30, "", "回", 10);
          }
            elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
            elemental_reaction.appendChild(cyno_agg_countlist); // ラベルを select_reaction_method に追加
            elemental_reaction.appendChild(document.createElement("br"));
      break

        case "33":
            if (attack_method == 1) {
              yaemiko_agg_countlist = createSelectList("yaemiko_agg_count", 0, 30, "", "回", 1);
            } else if (attack_method == 6) {
              yaemiko_agg_countlist = createSelectList("yaemiko_agg_count", 0, 30, "", "回", 1);
              createCheckboxList(options);
            } else if (attack_method==16) {
              const yaeskill_text = createTextNode("　殺生櫻：")
              const yaeskill_selectlist = createSelectList("yaemiko_E", 1, 4, "階位", "", 3);
              attack_method_prop.appendChild(document.createElement("br"));
              attack_method_prop.appendChild(yaeskill_text);
              attack_method_prop.appendChild(yaeskill_selectlist);
              yaemiko_agg_countlist = createSelectList("yaemiko_agg_count", 0, 30, "", "回", 1);
            } else if (attack_method==21) {
              yaemiko_agg_countlist = createSelectList("yaemiko_agg_count", 0, 30, "", "回", 4);
            }
            elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
            elemental_reaction.appendChild(yaemiko_agg_countlist); // ラベルを select_reaction_method に追加
            elemental_reaction.appendChild(document.createElement("br"));
        break

        case "34":
              const raidenskill_text = createTextNode("　願力の層数：")
              const raidenskill_selectlist = createSelectList("raiden_resolve", 0, 60, "", "層", 60);
              attack_method_prop.appendChild(raidenskill_text);
              attack_method_prop.appendChild(raidenskill_selectlist);
              attack_method_prop.appendChild(document.createElement("br"));
            if (attack_method == 21) {
              raiden_agg_countlist = createSelectList("raiden_agg_count", 0, 30, "", "回", 2);
            } else if (attack_method == 22) {
              raiden_agg_countlist = createSelectList("raiden_agg_count", 0, 30, "", "回", 1);
            } else if (attack_method == 23) {
              raiden_agg_countlist = createSelectList("raiden_agg_count", 0, 30, "", "回", 1);
            }
            elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
            elemental_reaction.appendChild(raiden_agg_countlist); // ラベルを select_reaction_method に追加
            elemental_reaction.appendChild(document.createElement("br"));
        break

        case "35":
            let keqing_selectlist;
            if (attack_method == 1) {
              keqing_agg_countlist = createSelectList("keqing_agg_count", 0, 30, "", "回", 2);
            } else if (attack_method == 6) {
              const keqing_count_text = createTextNode("　重撃回数：")
              const keqing_attack_count = createSelectList("keqing_attack_count", 0, 5, "", "回", 5);
              attack_method_prop.appendChild(keqing_count_text);
              attack_method_prop.appendChild(keqing_attack_count);
              keqing_agg_countlist = createSelectList("keqing_agg_count", 0, 30, "", "回", 5);
            } else if (attack_method == 21) {
                const newCheckbox = createCheckbox("keqing_talent2", true);
                const label = createLabel("keqing_talent2", "玉衡の貴：会心率、元素チャージ効率+15%");
                const lineBreak = document.createElement("br");
              
                // 新しいチェックボックスと関連する要素を追加
                tenporary_char_talent.appendChild(newCheckbox);
                tenporary_char_talent.appendChild(label);
                tenporary_char_talent.appendChild(lineBreak);          
                keqing_agg_countlist = createSelectList("keqing_agg_count", 0, 30, "", "回", 3);
            }
          elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
          elemental_reaction.appendChild(keqing_agg_countlist); // ラベルを select_reaction_method に追加
          elemental_reaction.appendChild(document.createElement("br"));
            break

            case "38":
            let kujousara_selectlist;

            if (attack_method == 21) {
              let kujousara_count_text;
              let kujousara_attack_count;

              if (char_constellations <3)
              {
                kujousara_count_text = createTextNode("　天狗呪雷・雷礫ヒット回数：")
                kujousara_attack_count = createSelectList("kujousara_attack_count", 0, 20, "", "回", 4);
              }
              else
              {
                kujousara_count_text = createTextNode("　天狗呪雷・雷礫ヒット回数：")
                kujousara_attack_count = createSelectList("kujousara_attack_count", 0, 30, "", "回", 6);
              }

              attack_method_prop.appendChild(kujousara_count_text);
              attack_method_prop.appendChild(kujousara_attack_count);

              kujousara_agg_countlist = createSelectList("kujousara_agg_count", 0, 30, "", "回", 2);
            }

      
            elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
            elemental_reaction.appendChild(kujousara_agg_countlist); // ラベルを select_reaction_method に追加
            elemental_reaction.appendChild(document.createElement("br"));
            break

            case "39":
               if (attack_method == 16) {
                let fischl_count_text;
                let fischl_attack_count;
                let fischl_talent1_text;
                let fischl_talent1_count;

                if (char_constellations != 4)
                {
                  fischl_count_text = createTextNode("　元素スキルヒット回数：")
                  fischl_attack_count = createSelectList("fischl_attack_count", 1, 10, "", "回", 10);
                  fischl_talent2_text = createTextNode("　固有天賦2発動回数：")
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
                  {
                    fischl_count_text = createTextNode("　元素スキルヒット回数：")
                    fischl_attack_count = createSelectList("fischl_attack_count", 1, 12, "", "回", 12);
                    fischl_talent2_text = createTextNode("　固有天賦2発動回数：")
                    fischl_talent2_count = createSelectList("fischl_talent2_count", 0, 24, "", "回", 8);
                    fischl_conste6_text = createTextNode("　6重効果：追撃回数　")
                    fischl_conste6_count = createSelectList("fischl_conste6_count", 0, 24, "", "回", 12);
                    attack_method_prop.appendChild(fischl_count_text);
                    attack_method_prop.appendChild(fischl_attack_count);
                    attack_method_prop.appendChild(document.createElement("br"));
                    attack_method_prop.appendChild(fischl_talent2_text);
                    attack_method_prop.appendChild(fischl_talent2_count);
                    attack_method_prop.appendChild(document.createElement("br"));
                    attack_method_prop.appendChild(fischl_conste6_text);
                    attack_method_prop.appendChild(fischl_conste6_count);
                    let fischl_selectlist = createSelectList("fischl_agg_count", 0, 30, "", "回", 14);
                    elemental_reaction.appendChild(Aggravate_text); // チェックボックスを select_reaction_method に追加
                    elemental_reaction.appendChild(fischl_selectlist); // ラベルを select_reaction_method に追加
                    elemental_reaction.appendChild(document.createElement("br"));
                  }
                }
              }
              break
              case "49":
               
              break
      case "56":        
        if (attack_method == 1) {
          nahida_agg_countlist = createSelectList("nahida_agg_count", 0, 50, "", "回", 2);
        } else if (attack_method == 6) {
          nahida_agg_countlist = createSelectList("nahida_agg_count", 0, 50, "", "回", 1);
        } else if (attack_method==16) {
          nahida_agg_countlist = createSelectList("nahida_agg_count", 0, 50, "", "回", 1);
        } else if (attack_method==17) {
          nahida_agg_countlist = createSelectList("nahida_agg_count", 0, 50, "", "回", 1);
        }
        elemental_reaction.appendChild(Spread_text); // チェックボックスを select_reaction_method に追加
        elemental_reaction.appendChild(nahida_agg_countlist); // ラベルを select_reaction_method に追加
        elemental_reaction.appendChild(document.createElement("br"));
      break

      case "57":        
        if (attack_method == 6)
        {
          if (char_constellations < 4)
          {
            tighnari_agg_countlist = createSelectList("tighnari_agg_count", 0, 50, "", "回", 2);
          }
          else
          {
            tighnari_agg_countlist = createSelectList("tighnari_agg_count", 0, 50, "", "回", 3);
          }
          createCheckboxList_br(options)
        } else if (attack_method == 21)
        {
          tighnari_agg_countlist = createSelectList("tighnari_agg_count", 0, 50, "", "回", 4);
        }
        elemental_reaction.appendChild(Spread_text); // チェックボックスを select_reaction_method に追加
        elemental_reaction.appendChild(tighnari_agg_countlist); // ラベルを select_reaction_method に追加
        elemental_reaction.appendChild(document.createElement("br"));
      break

        case "63":
            if (attack_method == 6) {
              const arataki_text = createTextNode("　重撃ヒット回数：")
              const aratakicount_selectlist = createSelectList("arataki_count", 0, 10, "", "回", 3);
              attack_method_prop.appendChild(document.createElement("br"));
              attack_method_prop.appendChild(arataki_text);
              attack_method_prop.appendChild(aratakicount_selectlist);
            }
        break

        case "64":
          if (attack_method == 16) {
            const albedo_text = createTextNode("　スキル追撃ヒット回数：")
            const albedocount_selectlist = createSelectList("albedo_count", 1, 15, "", "回", 5);
            attack_method_prop.appendChild(document.createElement("br"));
            attack_method_prop.appendChild(albedo_text);
            attack_method_prop.appendChild(albedocount_selectlist);
          }
          else if (attack_method == 21) {
            const albedo_text = createTextNode("　生滅の花ヒット回数：")
            const albedocount_selectlist = createSelectList("albedo_count", 1, 7, "", "回", 3);
            attack_method_prop.appendChild(document.createElement("br"));
            attack_method_prop.appendChild(albedo_text);
            attack_method_prop.appendChild(albedocount_selectlist);
          }
        break

        case "64":
        break
          
        case "68":
        break
    }
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

        if (counter % 4 === 0) {
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
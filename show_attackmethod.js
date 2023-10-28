async function show_attack_method()
{
  const select_reaction_method = document.getElementById("select_reaction_method");
  select_reaction_method.innerHTML = "";
  const elemental_reaction = document.getElementById("element_action");
  elemental_reaction.innerHTML = "";
  const attack_method_prop = document.getElementById("attack_method_prop");
  attack_method_prop.innerHTML = "";
  await calculate_depend_status();

  const radiobutton = document.createElement("input");
  radiobutton.type = "radio";
  radiobutton.id = "no-reaction";
  radiobutton.name = "elemental-reaction";
  radiobutton.checked = true;
  radiobutton.value = "no-reaction";
  
  const radio_label = document.createElement("label");
  radio_label.htmlFor = "no-reaction";
  radio_label.textContent = "反応なし";
  
  elemental_reaction.appendChild(radiobutton);
  elemental_reaction.appendChild(radio_label);

  const char_constellations = document.getElementById("char_constellations").value;
  const agg_text = createTextNode("激化回数：");

  if (char_propaty[0] == 0)
  {
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

    elemental_reaction.appendChild(traitCheckbox1);
    elemental_reaction.appendChild(traitLabel1);
    elemental_reaction.appendChild(traitCheckbox2);
    elemental_reaction.appendChild(traitLabel2);
  }

  if (char_propaty[0] == 1)
  {
    const traitCheckbox1 = document.createElement("input");
    traitCheckbox1.type = "radio";
    traitCheckbox1.name = "elemental-reaction";
    traitCheckbox1.id = elm_reaction_obj[1].id;
    traitCheckbox1.value = elm_reaction_obj[1].id;

    const traitLabel1 = document.createElement("label");
    traitLabel1.htmlFor = elm_reaction_obj[1].id;
    traitLabel1.textContent = elm_reaction_obj[1].label;

    elemental_reaction.appendChild(traitCheckbox1);
    elemental_reaction.appendChild(traitLabel1);
  }

  else if (char_propaty[0] == 2)
  {
    const traitCheckbox1 = document.createElement("input");
    traitCheckbox1.type = "radio";
    traitCheckbox1.id = elm_reaction_obj[3].id;
    traitCheckbox1.name = "elemental-reaction";
    traitCheckbox1.value = elm_reaction_obj[3].id;

    const traitLabel1 = document.createElement("label");
    traitLabel1.htmlFor = elm_reaction_obj[3].id;
    traitLabel1.textContent = elm_reaction_obj[3].label;

    elemental_reaction.appendChild(traitCheckbox1);
    elemental_reaction.appendChild(traitLabel1);
  }

  else if (char_propaty[0] == 3)
  {
    const traitCheckbox1 = document.createElement("input");
    traitCheckbox1.type = "radio";
    traitCheckbox1.name = "elemental-reaction";
    traitCheckbox1.id = elm_reaction_obj[5].id;
    traitCheckbox1.value = elm_reaction_obj[5].id;

    const traitLabel1 = document.createElement("label");
    traitLabel1.htmlFor = elm_reaction_obj[5].id;
    traitLabel1.textContent = elm_reaction_obj[5].label;

    elemental_reaction.appendChild(traitCheckbox1);
    elemental_reaction.appendChild(traitLabel1);
  }

  else if (char_propaty[0] == 5)
  {
    const traitCheckbox1 = document.createElement("input");
    traitCheckbox1.type = "radio";
    traitCheckbox1.id = elm_reaction_obj[4].id;
    traitCheckbox1.name = "elemental-reaction";
    traitCheckbox1.value = elm_reaction_obj[4].id;

    const traitLabel1 = document.createElement("label");
    traitLabel1.htmlFor = elm_reaction_obj[4].id;
    traitLabel1.textContent = elm_reaction_obj[4].label;

    elemental_reaction.appendChild(traitCheckbox1);
    elemental_reaction.appendChild(traitLabel1);
  }

  else if (char_propaty[0] == 7)
  {
    const traitCheckbox1 = document.createElement("input");
    traitCheckbox1.type = "radio";
    traitCheckbox1.id = elm_reaction_obj[6].id;
    traitCheckbox1.name = "elemental-reaction";
    traitCheckbox1.value = elm_reaction_obj[6].id;

    const traitLabel1 = document.createElement("label");
    traitLabel1.htmlFor = elm_reaction_obj[6].id;
    traitLabel1.textContent = elm_reaction_obj[6].label;

    elemental_reaction.appendChild(traitCheckbox1);
    elemental_reaction.appendChild(traitLabel1);
  }

  attack_method = document.getElementById("attack_method_id").value;     
  let options = [];
  let elementsToAddToCharTalent;

    switch (selectedCharId)
    {
        case "56":        
            if (attack_method == 1) {
              options = [
                { text: "１段目", value: "0", checked: true },
                { text: "２段目", value: "1" },
                { text: "３段目", value: "2" },
                { text: "４段目", value: "3", checked: true },
              ];
            } else if (attack_method == 6) {
              options = [
                { text: "重撃", value: "0", checked: true },
              ];
            } else if (attack_method==16) {
              options = [
                { text: "滅浄三業", value: "0", checked: true },
              ];
            } else if (attack_method==17) {
              options = [
                { text: "滅浄三業·破業障(6凸)", value: "0", checked: true },
              ];
            }
            createCheckboxList(options)
        break

        case "1":
              elementsToAddToCharTalent = [
                createLabel("yoimiyaE_level", "焔硝の庭火舞い"),
                document.createElement("br"),
                createLabel("yoimiyaE_level", "　元素スキル天賦レベル："),
                createSelectList("yoimiyaE_level", 1, 13, "Lv.", "", 10),
                document.createElement("br"),
                createLabel("yoimiya_talent1", "袖火百景図：炎元素ダメージ "),
                createanySelectList("yoimiya_talent1", 0, 10, "+", "%", 10, 2),
                document.createElement("br"),
              ];
            
              elementsToAddToCharTalent.forEach(element => {
                char_talent.appendChild(element);
              });
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
            createCheckboxList(options)
        break

        case "2":
              elementsToAddToCharTalent = [
                createLabel("hutao_E", "蝶導来世"),
                document.createElement("br"),
                createTextNode("　元素スキル天賦レベル："),
                createSelectList("hutaoE_level", 1, 13, "Lv.", "", 10),
                document.createElement("br"),
                createCheckbox("hutao_talent2", true),
                createLabel("hutao_talent2", "血のかまど：胡桃のHPが50%以下の時、炎元素ダメージ+33%"),
                document.createElement("br"),
              ];
            
              elementsToAddToCharTalent.forEach(element => {
                char_talent.appendChild(element);
              });
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
                  char_talent.appendChild(element);
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

      case "22":
        const eulaburst_text = createTextNode("　エネルギー：")
        const eulaburst_selectlist = createSelectList("eula_enelgy", 0, 30, "", "重", 15);
        attack_method_prop.appendChild(eulaburst_text);
        attack_method_prop.appendChild(eulaburst_selectlist);
      break

        case "57":        
        if (attack_method == 6)
        {
          if (char_constellations < 4)
          {
            options = [
              { text: "花筐の矢", value: "0", checked: true },
              { text: "蔵蘊の花矢1", value: "1", checked: true  },
              { text: "蔵蘊の花矢2", value: "2" },
              { text: "蔵蘊の花矢3", value: "3"},
              { text: "蔵蘊の花矢4", value: "4",},
            ];
          }
          else
          {
            options = [
              { text: "花筐の矢", value: "0", checked: true },
              { text: "蔵蘊の花矢1", value: "1", checked: true  },
              { text: "蔵蘊の花矢2", value: "2" },
              { text: "蔵蘊の花矢3", value: "3"},
              { text: "蔵蘊の花矢4", value: "4",},
              { text: "蔵蘊の花矢5", value: "5", checked: true },
            ];
          }
          createCheckboxList_br(options)
        } else if (attack_method == 21)
        {
          const tighnari_text1 = createTextNode("　蔓纏いの矢：")
          const tighnariburst1_selectlist = createSelectList("tighnariburst1", 0, 6, "", "回", 2);
          const tighnari_text2 = createTextNode("　次級・蔓纏いの矢：")
          const tighnariburst2_selectlist = createSelectList("tighnariburst2", 0, 6, "", "回", 2);
          select_reaction_method.appendChild(agg_text);
          select_reaction_method.appendChild(document.createElement("br"));
          select_reaction_method.appendChild(tighnari_text1);
          select_reaction_method.appendChild(tighnariburst1_selectlist);
          select_reaction_method.appendChild(document.createElement("br"));
          select_reaction_method.appendChild(tighnari_text2);
          select_reaction_method.appendChild(tighnariburst2_selectlist);
        }
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

        case "33":
            if (attack_method == 1) {
              options = [
                { text: "１段目", value: "0", checked: true },
                { text: "２段目", value: "1" },
                { text: "３段目", value: "2" },
              ];
              createCheckboxList(options);
            } else if (attack_method == 6) {
              options = [
                { text: "重撃", value: "0", checked: true },
              ];
              createCheckboxList(options);
            } else if (attack_method==16) {
              const yaeskill_text = createTextNode("　殺生櫻：")
              const yaeskill_selectlist = createSelectList("yaemiko_E", 1, 4, "階位", "", 3);
              attack_method_prop.appendChild(document.createElement("br"));
              attack_method_prop.appendChild(yaeskill_text);
              attack_method_prop.appendChild(yaeskill_selectlist);
              options = [
                { text: "殺生櫻１ヒット目", value: "0", checked: true },
                { text: "殺生櫻２ヒット目", value: "1" },
                { text: "殺生櫻３ヒット目", value: "2" },
              ];
              createCheckboxList_br(options);
            } else if (attack_method==21) {
              options = [
                { text: "元素爆発　初撃", value: "0", checked: true },
                { text: "天狐雷霆１ヒット目", value: "1", checked: true },
                { text: "天狐雷霆２ヒット目", value: "2", checked: true },
                { text: "天狐雷霆３ヒット目", value: "3", checked: true  },
              ];
              createCheckboxList_br(options)
            }
        break

        case "34":
              const raidenskill_text = createTextNode("　願力の層数：")
              const raidenskill_selectlist = createSelectList("raiden_resolve", 0, 60, "", "層", 60);
              attack_method_prop.appendChild(raidenskill_text);
              attack_method_prop.appendChild(raidenskill_selectlist);
            if (attack_method == 21) {
              options = [
                { text: "１段目", value: "0", checked: true },
                { text: "２段目", value: "1" },
                { text: "３段目", value: "2" },
                { text: "４段目", value: "3", checked: true},
                { text: "５段目", value: "4" },
              ];
              createCheckboxList(options);
            } else if (attack_method == 22) {
              options = [
                { text: "重撃", value: "0", checked: true },
              ];
              createCheckboxList(options);
            } else if (attack_method == 23) {
              options = [
                { text: "夢想の一太刀", value: "0", checked: true },
              ];
              createCheckboxList_br(options);
            }
        break

        case "35":
            let keqing_selectlist;
            if (attack_method == 1) {
              keqing_selectlist = createSelectList("keqing_agg_count", 0, 6, "", "回", 2);
            } else if (attack_method == 6) {
              const keqing_count_text = createTextNode("　重撃回数：")
              const keqing_attack_count = createSelectList("keqing_attack_count", 0, 5, "", "回", 5);
              attack_method_prop.appendChild(keqing_count_text);
              attack_method_prop.appendChild(keqing_attack_count);
              keqing_selectlist = createSelectList("keqing_agg_count", 0, 5, "", "回", 5);
            } else if (attack_method == 21) {
              elementsToAddToCharTalent = [
                createCheckbox("keqing_talent2", true),
                createLabel("keqing_talent2", "玉衡の貴：会心率、元素チャージ効率+15%"),
                document.createElement("br"),
              ];

              elementsToAddToCharTalent.forEach(element => {
                char_talent.appendChild(element);
              });
              keqing_selectlist = createSelectList("keqing_agg_count", 0, 10, "", "回", 3);
            }
            select_reaction_method.appendChild(agg_text); // チェックボックスを select_reaction_method に追加
            select_reaction_method.appendChild(keqing_selectlist); // ラベルを select_reaction_method に追加
            select_reaction_method.appendChild(document.createElement("br"));
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

              kujousara_selectlist = createSelectList("kujousara_agg_count", 0, 30, "", "回", 2);
            }

            select_reaction_method.appendChild(agg_text); // チェックボックスを select_reaction_method に追加
            select_reaction_method.appendChild(kujousara_selectlist); // ラベルを select_reaction_method に追加
            select_reaction_method.appendChild(document.createElement("br"));
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
                  select_reaction_method.appendChild(agg_text); // チェックボックスを select_reaction_method に追加
                  select_reaction_method.appendChild(fischl_selectlist); // ラベルを select_reaction_method に追加
                  select_reaction_method.appendChild(document.createElement("br"));
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
                    select_reaction_method.appendChild(agg_text); // チェックボックスを select_reaction_method に追加
                    select_reaction_method.appendChild(fischl_selectlist); // ラベルを select_reaction_method に追加
                    select_reaction_method.appendChild(document.createElement("br"));
                  }
                }
              }
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
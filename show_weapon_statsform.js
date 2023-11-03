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

      else if (selectedWeaponId == "3") {
        const traits = [
          {
            id: "traitCheckbox",
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

      else if (selectedWeaponId == "54") {
        const traits = [
          {
            id: "traitCheckbox",
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
              else if (selectedWeaponId == "93") {
                const traits = [
                  {
                    id: "traitCheckbox",
                    label: "若水：周囲に敵がいる"
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

function createweaponSelectList(id, initial, optionsCount, head_unit, unit, select_index) {
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
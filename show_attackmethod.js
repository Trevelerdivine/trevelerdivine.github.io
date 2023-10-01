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

  if (char_propaty[0] == 2)
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

  if (char_propaty[0] == 3)
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

  if (char_propaty[0] == 5)
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

  attack_method = document.getElementById("attack_method_id").value;     
  let options = [];

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

        case "9":
            if (attack_method == 16) {
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
                const xianglingreaction_selectlist = createSelectList("xiangling_Q", 1, 22, "", "回", 11);
                select_reaction_method.appendChild(xianglinreaction_text); // チェックボックスを select_reaction_method に追加
                select_reaction_method.appendChild(xianglingreaction_selectlist); 
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
    calculate_table_status();
    showFormElements();
}



function createCheckboxList(options)
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
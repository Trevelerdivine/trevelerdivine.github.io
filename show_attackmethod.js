async function show_attack_method()
{

  const select_reaction_method = document.getElementById("select_reaction_method");
  select_reaction_method.innerHTML = "";
  const elemental_reaction = document.getElementById("element_action");
  elemental_reaction.innerHTML = "";
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
    
    switch (selectedCharId)
    {
        case "56":
            const attack_method = document.getElementById("attack_method_id");
            const attack_index = attack_method.value;
            
            let options = [];
            
            if (attack_index == 1) {
              options = [
                { text: "１段目", value: "0", checked: true },
                { text: "２段目", value: "1" },
                { text: "３段目", value: "2" },
                { text: "４段目", value: "3", checked: true },
              ];
            } else if (attack_index == 6) {
              options = [
                { text: "重撃", value: "0", checked: true },
              ];
            } else if (attack_index==16) {
              options = [
                { text: "滅浄三業", value: "0", checked: true },
              ];
            } else if (attack_index==17) {
              options = [
                { text: "滅浄三業·破業障(6凸)", value: "0", checked: true },
              ];
            }
            createCheckboxList(options)
        break
    }
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
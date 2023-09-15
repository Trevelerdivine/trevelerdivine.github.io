async function show_artifact() {
    let traits;
    let traitCheckbox;
    let traitLabel;
    artifact_checkbox.innerHTML = "";
    for (let i = 0; i < 2; i++)
    {
        if (selectedImageIds[i] === "0") 
        {
            traits = [
                {
                id: "traitCheckbox1",
                label: "剣闘士のフィナーレ2"
                },
                {
                id: "traitCheckbox2",
                label: "剣闘士のフィナーレ4"
                }
            ];
            traitCheckbox = document.createElement("input");
            traitCheckbox.type = "checkbox";
            traitCheckbox.id = traits[0].id;
            traitCheckbox.value = traits[0].id;
            traitCheckbox.checked = true;

            traitLabel = document.createElement("label");
            traitLabel.htmlFor = traits[0].id;
            traitLabel.textContent = traits[0].label;

            if (i === 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                traitCheckbox.id = traits[1].id;
                traitCheckbox.value = traits[1].id;
                traitCheckbox.checked = true;

                traitLabel.htmlFor = traits[1].id;
                traitLabel.textContent = traits[1].label;
            }

            artifact_checkbox.appendChild(traitCheckbox);
            artifact_checkbox.appendChild(traitLabel);
        }
        
        if (selectedImageIds[i] === "1") 
        {
            traits = [
                {
                id: "traitCheckbox1",
                label: "大地を流浪する楽団2"
                },
                {
                id: "traitCheckbox2",
                label: "大地を流浪する楽団4"
                }
            ];
            traitCheckbox = document.createElement("input");
            traitCheckbox.type = "checkbox";
            traitCheckbox.id = traits[0].id;
            traitCheckbox.value = traits[0].id;
            traitCheckbox.checked = true;

            traitLabel = document.createElement("label");
            traitLabel.htmlFor = traits[0].id;
            traitLabel.textContent = traits[0].label;

            if (i === 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                traitCheckbox.id = traits[1].id;
                traitCheckbox.value = traits[1].id;
                traitCheckbox.checked = true;

                traitLabel.htmlFor = traits[1].id;
                traitLabel.textContent = traits[1].label;
            }

            artifact_checkbox.appendChild(traitCheckbox);
            artifact_checkbox.appendChild(traitLabel);
        }

        if (selectedImageIds[i] === "1") 
        {
            traits = [
                {
                id: "traitCheckbox1",
                label: "旧貴族のしつけ2"
                },
                {
                id: "traitCheckbox2",
                label: "旧貴族のしつけ4"
                }
            ];
            traitCheckbox = document.createElement("input");
            traitCheckbox.type = "checkbox";
            traitCheckbox.id = traits[0].id;
            traitCheckbox.value = traits[0].id;
            traitCheckbox.checked = true;

            traitLabel = document.createElement("label");
            traitLabel.htmlFor = traits[0].id;
            traitLabel.textContent = traits[0].label;

            if (i === 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                traitCheckbox.id = traits[1].id;
                traitCheckbox.value = traits[1].id;
                traitCheckbox.checked = true;

                traitLabel.htmlFor = traits[1].id;
                traitLabel.textContent = traits[1].label;
            }

            artifact_checkbox.appendChild(traitCheckbox);
            artifact_checkbox.appendChild(traitLabel);
        }
    }
  }
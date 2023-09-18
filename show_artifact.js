async function show_artifact() 
{
    let traits;
    let traitCheckbox;
    let traitLabel;
    artifact_checkbox.innerHTML = "";
    for (let i = 0; i < 2; i++)
    {
        if (selectedImageIds[i] == "0") 
        {
            traits = [
                {
                id: "af0_2",
                label: "剣闘士のフィナーレ2"
                },
                {
                id: "af0_4",
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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
        
        if (selectedImageIds[i] == "1") 
        {
            traits = [
                {
                id: "af1_2",
                label: "大地を流浪する楽団2"
                },
                {
                id: "af1_4",
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "2") 
        {
            traits = [
                {
                id: "af2_2",
                label: "旧貴族のしつけ2"
                },
                {
                id: "af2_4",
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "3") 
        {
            traits = [
                {
                id: "af3_2",
                label: "血染めの騎士道2"
                },
                {
                id: "af3_4",
                label: "血染めの騎士道4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "4") 
        {
            traits = [
                {
                id: "af4_2",
                label: "愛される少女2"
                },
                {
                id: "af4_4",
                label: "愛される少女4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "5") 
        {
            traits = [
                {
                id: "af5_2",
                label: "翠緑の影2"
                },
                {
                id: "af5_4",
                label: "翠緑の影4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "6") 
        {
            traits = [
                {
                id: "af6_2",
                label: "悠久の磐岩2"
                },
                {
                id: "af6_4",
                label: "悠久の磐岩4"
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

            artifact_checkbox.appendChild(traitCheckbox);
            artifact_checkbox.appendChild(traitLabel);

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                traitCheckbox.id = traits[1].id;
                traitCheckbox.value = traits[1].id;
                traitCheckbox.checked = true;

                traitLabel.htmlFor = traits[1].id;
                traitLabel.textContent = traits[1].label;

                const af6_4text = document.createTextNode("　該当元素：");
                const selectList = document.createElement("select");
                let option;
                selectList.id = "af6_4select";
            
                for (let j = 0; j < 4; j++) {
                  option = document.createElement("option");
                  option.value = j;
                  option.text = element[j];
                  selectList.appendChild(option);
                }

                artifact_checkbox.appendChild(traitCheckbox);
                artifact_checkbox.appendChild(traitLabel);
                artifact_checkbox.appendChild(af6_4text);
                artifact_checkbox.appendChild(selectList);
            }
        }

        if (selectedImageIds[i] == "7") 
        {
            traits = [
                {
                id: "af7_2",
                label: "逆飛びの流星2"
                },
                {
                id: "af7_4",
                label: "逆飛びの流星4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "8") 
        {
            traits = [
                {
                id: "af8_2",
                label: "雷を鎮める尊者2"
                },
                {
                id: "af8_4",
                label: "雷を鎮める尊者4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "9") 
        {
            traits = [
                {
                id: "af9_2",
                label: "雷のような怒り2"
                },
                {
                id: "af9_4",
                label: "雷のような怒り4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "10") 
        {
            traits = [
                {
                id: "af10_2",
                label: "烈火を渡る賢者2"
                },
                {
                id: "af10_4",
                label: "烈火を渡る賢者4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "11") 
        {
            traits = [
                {
                id: "af11_2",
                label: "燃え盛る炎の魔女2"
                },
                {
                id: "af11_4",
                label: "燃え盛る炎の魔女4"
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

            artifact_checkbox.appendChild(traitCheckbox);
            artifact_checkbox.appendChild(traitLabel);

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                traitCheckbox.id = traits[1].id;
                traitCheckbox.value = traits[1].id;
                traitCheckbox.checked = true;

                traitLabel.htmlFor = traits[1].id;
                traitLabel.textContent = traits[1].label;

                const af11_4text = document.createTextNode("　該当元素：");
                const selectList = document.createElement("select");
                let option;
                selectList.id = "af11_4select";
            
                for (let j = 0; j < 4; j++) {
                  option = document.createElement("option");
                  option.value = j;
                  option.text = `${i}重`;
                  selectList.appendChild(option);
                }

                artifact_checkbox.appendChild(traitCheckbox);
                artifact_checkbox.appendChild(traitLabel);
                artifact_checkbox.appendChild(af6_4text);
                artifact_checkbox.appendChild(selectList);
            }

        }

        if (selectedImageIds[i] == "12") 
        {
            traits = [
                {
                id: "af12_2",
                label: "氷風を彷徨う勇士2"
                },
                {
                id: "af12_4",
                label: "氷風を彷徨う勇士2"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "13") 
        {
            traits = [
                {
                id: "af13_2",
                label: "沈淪の心2"
                },
                {
                id: "af13_4",
                label: "沈淪の心4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "14") 
        {
            traits = [
                {
                id: "af14_2",
                label: "千岩牢固2"
                },
                {
                id: "af14_4",
                label: "千岩牢固4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "15") 
        {
            traits = [
                {
                id: "af15_2",
                label: "蒼白の炎2"
                },
                {
                id: "af15_4",
                label: "蒼白の炎4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "16") 
        {
            traits = [
                {
                id: "af16_2",
                label: "追憶のしめ縄2"
                },
                {
                id: "af16_4",
                label: "追憶のしめ縄4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "17") 
        {
            traits = [
                {
                id: "af17_2",
                label: "絶縁の旗印2"
                },
                {
                id: "af17_4",
                label: "絶縁の旗印4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "18") 
        {
            traits = [
                {
                id: "af18_2",
                label: "華館夢醒形骸記2"
                },
                {
                id: "af18_4",
                label: "華館夢醒形骸記4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "19") 
        {
            traits = [
                {
                id: "af19_2",
                label: "来歆の余響2"
                },
                {
                id: "af19_4",
                label: "来歆の余響4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "20") 
        {
            traits = [
                {
                id: "af20_2",
                label: "金メッキの夢2"
                },
                {
                id: "af20_4",
                label: "金メッキの夢4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "21") 
        {
            traits = [
                {
                id: "af21_2",
                label: "深林の記憶2"
                },
                {
                id: "af21_4",
                label: "深林の記憶4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "22") 
        {
            traits = [
                {
                id: "af22_2",
                label: "砂上の楼閣の史話2"
                },
                {
                id: "af22_4",
                label: "砂上の楼閣の史話4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "23") 
        {
            traits = [
                {
                id: "af23_2",
                label: "楽園の絶花2"
                },
                {
                id: "af23_4",
                label: "楽園の絶花4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "24") 
        {
            traits = [
                {
                id: "af24_2",
                label: "水仙の夢2"
                },
                {
                id: "af24_4",
                label: "水仙の夢4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (selectedImageIds[i] == "25") 
        {
            traits = [
                {
                id: "af25_2",
                label: "花海甘露の光2"
                },
                {
                id: "af25_4",
                label: "花海甘露の光4"
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

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
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

        if (i === 0)
        {
            artifact_checkbox.appendChild(document.createElement("br"));
        }
    }
  }
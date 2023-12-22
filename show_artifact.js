async function show_artifact() 
{
    let traits;
    let traitCheckbox;
    let traitLabel;
    let buff_group;
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
        
        else if (selectedImageIds[i] == "1") 
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

        else if (selectedImageIds[i] == "2") 
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
        else if (selectedImageIds[i] == "3") 
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

        else if (selectedImageIds[i] == "4") 
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

        else if (selectedImageIds[i] == "5") 
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

        else if (selectedImageIds[i] == "6") 
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

        else if (selectedImageIds[i] == "7") 
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

        else if (selectedImageIds[i] == "8") 
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

        else if (selectedImageIds[i] == "9") 
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

        else if (selectedImageIds[i] == "10") 
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

        else if (selectedImageIds[i] == "11") 
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

                const af11_4text = document.createTextNode("　炎ダメージバフ：");
                const selectList = document.createElement("select");
                let option;
                let pyro_buff;
                selectList.id = "af11_4select";
            
                for (let j = 0; j < 4; j++) {
                    option = document.createElement("option");
                    option.value = j;
                    pyro_buff = 7.5 * j;
                    option.text = `+${pyro_buff}%`;
                    selectList.appendChild(option);
                }

                artifact_checkbox.appendChild(traitCheckbox);
                artifact_checkbox.appendChild(traitLabel);
                artifact_checkbox.appendChild(af11_4text);
                artifact_checkbox.appendChild(selectList);
            }

        }

        else if (selectedImageIds[i] == "12") 
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

            artifact_checkbox.appendChild(traitCheckbox);
            artifact_checkbox.appendChild(traitLabel);

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                traitCheckbox.id = traits[1].id;
                traitCheckbox.value = traits[1].id;
                traitCheckbox.checked = true;

                traitLabel.htmlFor = traits[1].id;
                traitLabel.textContent = traits[1].label;

                const af12_4text = document.createTextNode("　会心率：");
                const selectList = document.createElement("select");
                let option;
                let cr_buff;
                selectList.id = "af12_4select";
            
                for (let j = 0; j < 3; j++) {
                  option = document.createElement("option");
                  option.value = j;
                  cr_buff = 20 * j;
                  option.text = `+${cr_buff}%`;
                  selectList.appendChild(option);
                }

                artifact_checkbox.appendChild(traitCheckbox);
                artifact_checkbox.appendChild(traitLabel);
                artifact_checkbox.appendChild(af12_4text);
                artifact_checkbox.appendChild(selectList);
            }

        }
        else if (selectedImageIds[i] == "13") 
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
        else if (selectedImageIds[i] == "14") 
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

        else if (selectedImageIds[i] == "15") 
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

            artifact_checkbox.appendChild(traitCheckbox);
            artifact_checkbox.appendChild(traitLabel);

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                traitCheckbox.id = traits[1].id;
                traitCheckbox.value = traits[1].id;
                traitCheckbox.checked = true;

                traitLabel.htmlFor = traits[1].id;
                traitLabel.textContent = traits[1].label;

                const af15_4text = document.createTextNode("　セット効果：");
                const selectList = document.createElement("select");
                let option;
                selectList.id = "af15_4select";
            
                for (let j = 0; j < 3; j++) 
                {
                  option = document.createElement("option");
                  option.value = j;
                  option.text = `${j}重`;
                  selectList.appendChild(option);
                }

                artifact_checkbox.appendChild(traitCheckbox);
                artifact_checkbox.appendChild(traitLabel);
                artifact_checkbox.appendChild(af15_4text);
                artifact_checkbox.appendChild(selectList);
            }

        }

        else if (selectedImageIds[i] == "16") 
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

        else if (selectedImageIds[i] == "17") 
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

        else if (selectedImageIds[i] == "18") 
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

            artifact_checkbox.appendChild(traitCheckbox);
            artifact_checkbox.appendChild(traitLabel);

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                traitCheckbox.id = traits[1].id;
                traitCheckbox.value = traits[1].id;
                traitCheckbox.checked = true;

                traitLabel.htmlFor = traits[1].id;
                traitLabel.textContent = traits[1].label;

                const af18_4text = document.createTextNode("　セット効果：");
                const selectList = document.createElement("select");
                let option;
                selectList.id = "af18_4select";
            
                for (let j = 0; j < 5; j++) 
                {
                  option = document.createElement("option");
                  option.value = j;
                  option.text = `${j}層`;
                  selectList.appendChild(option);
                  if (j == 4) {
                    option.selected = true;
                  }
                }

                artifact_checkbox.appendChild(traitCheckbox);
                artifact_checkbox.appendChild(traitLabel);
                artifact_checkbox.appendChild(af18_4text);
                artifact_checkbox.appendChild(selectList);
            }
        }

        else if (selectedImageIds[i] == "19") 
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

        else if (selectedImageIds[i] == "20") 
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

            artifact_checkbox.appendChild(traitCheckbox);
            artifact_checkbox.appendChild(traitLabel);

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                traitCheckbox.id = traits[1].id;
                traitCheckbox.value = traits[1].id;
                traitCheckbox.checked = true;

                traitLabel.htmlFor = traits[1].id;
                traitLabel.textContent = traits[1].label;

                const af20_4_1text = document.createTextNode("　同じ元素のキャラ数　　");
                const af20_4_2text = document.createTextNode("　異なる元素のキャラ数　");
            
                const selectList1 = createSelectList("traitSelect1", 3); // 1つ目のプルダウンリストを生成
                const selectList2 = createSelectList("traitSelect2", 3); // 2つ目のプルダウンリストを生成
                selectList1.id = "af20_4_1select";
                selectList2.id = "af20_4_2select",
                artifact_checkbox.appendChild(traitCheckbox);
                artifact_checkbox.appendChild(traitLabel);
                artifact_checkbox.appendChild(document.createElement("br"));
                artifact_checkbox.appendChild(af20_4_1text);
                artifact_checkbox.appendChild(selectList1);
                artifact_checkbox.appendChild(document.createElement("br"));
                artifact_checkbox.appendChild(af20_4_2text);
                artifact_checkbox.appendChild(selectList2);
            
                // プルダウンリストを生成する関数
                function createSelectList(id, optionCount) 
                {
                    const selectList = document.createElement("select");
                    selectList.id = id;
                
                    for (let i = 0; i <= optionCount; i++) 
                    {
                        const option = document.createElement("option");
                        option.value = i;
                        option.text = `${i}人`;
                        selectList.appendChild(option);
                    }
                
                    return selectList;
                }
            }
        }

        else if (selectedImageIds[i] == "21") 
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

        else if (selectedImageIds[i] == "22") 
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

        else if (selectedImageIds[i] == "23") 
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

        else if (selectedImageIds[i] == "24") 
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

            artifact_checkbox.appendChild(traitCheckbox);
            artifact_checkbox.appendChild(traitLabel);

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                traitCheckbox.id = traits[1].id;
                traitCheckbox.value = traits[1].id;
                traitCheckbox.checked = true;

                traitLabel.htmlFor = traits[1].id;
                traitLabel.textContent = traits[1].label;

                const af24_4text = document.createTextNode("　セット効果：");
                const selectList = document.createElement("select");
                let option;
                selectList.id = "af24_4select";
            
                for (let j = 0; j < 4; j++) 
                {
                  option = document.createElement("option");
                  option.value = j;
                  option.text = `${j}層`;
                  selectList.appendChild(option);
                }

                artifact_checkbox.appendChild(traitCheckbox);
                artifact_checkbox.appendChild(traitLabel);
                artifact_checkbox.appendChild(af24_4text);
                artifact_checkbox.appendChild(selectList);
            }
        }

        else if (selectedImageIds[i] == "25") 
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

            artifact_checkbox.appendChild(traitCheckbox);
            artifact_checkbox.appendChild(traitLabel);

            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                traitCheckbox.id = traits[1].id;
                traitCheckbox.value = traits[1].id;
                traitCheckbox.checked = true;

                traitLabel.htmlFor = traits[1].id;
                traitLabel.textContent = traits[1].label;

                const af25_4text = document.createTextNode("　ダメージバフ：");
                const selectList = document.createElement("select");
                let option;
                let dmg_buff;
                selectList.id = "af25_4select";
            
                for (let j = 0; j < 6; j++) {
                  option = document.createElement("option");
                  option.value = j;
                  dmg_buff = 10 + 8 * j;
                  option.text = `+${dmg_buff}%`;
                  selectList.appendChild(option);
                }

                artifact_checkbox.appendChild(traitCheckbox);
                artifact_checkbox.appendChild(traitLabel);
                artifact_checkbox.appendChild(af25_4text);
                artifact_checkbox.appendChild(selectList);
            }
        }
        else if (selectedImageIds[i] == "26") 
        {
            buff_group = [
                createAfCheckbox("af26_2", true),
                createAfLabel("af26_2", "辰砂往生録2"),
              ];
            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                buff_group = [
                    createAfCheckbox("af26_4", true),
                    createAfLabel("af26_4", "辰砂往生録4 潜光 "),
                    createAfSelectList("af26_4select", 0, 4, "", "重", 4),
                    document.createElement("br"),
                    ];
            }
            buff_group.forEach(element => {
                artifact_checkbox.appendChild(element);
              });
        }

        else if (selectedImageIds[i] == "27") 
        {
            buff_group = [
                createAfCheckbox("af27_2", true),
                createAfLabel("af27_2", "黄金の劇団2"),
              ];
            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                buff_group = [
                    createAfCheckbox("af27_4", true),
                    createAfLabel("af27_4", "黄金の劇団4"),
                    document.createElement("br"),
                    createAfLabel("", "　"),
                    createAfCheckbox("af27_4_effect", true),
                    createAfLabel("af27_4_effect", "待機中"),
                    ];
            }
            buff_group.forEach(element => {
                artifact_checkbox.appendChild(element);
              });
        }
        else if (selectedImageIds[i] == "28") 
        {
            buff_group = [
                createAfCheckbox("af28_2", true),
                createAfLabel("af28_2", "ファントムハンター2"),
              ];
            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                buff_group = [
                    createAfCheckbox("af28_4", true),
                    createAfLabel("af28_4", "ファントムハンター4 セット効果"),
                    createAfSelectList("af28_4select", 0, 3, "", "層", 3),
                    ];
            }
            buff_group.forEach(element => {
                artifact_checkbox.appendChild(element);
              });
        }

        else if (selectedImageIds[i] == "29") 
        {
            buff_group = [
                createAfCheckbox("af29_2", true),
                createAfLabel("af29_2", "残響の森でささやかれる夜話2"),
              ];
            if (i == 1 && selectedImageIds[0] == selectedImageIds[1])
            {
                buff_group = [
                    createAfCheckbox("af29_4", true),
                    createAfLabel("af29_4", "残響の森でささやかれる夜話4 セット効果"),
                    createAfSelectList("select", 0, 3, "", "層", 3),
                    document.createElement("br"),
                    createAfLabel("", "　"),
                    createAfCheckbox("af29_4_effect", true),
                    createAfLabel("af29_4_effect", "結晶シールド状態"),
                    ];
            }
            buff_group.forEach(element => {
                artifact_checkbox.appendChild(element);
              });
        }

        if (i === 0)
        {
            artifact_checkbox.appendChild(document.createElement("br"));
        }
    }
  }

  function createAfCheckbox(id, checked)
  {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;
    checkbox.checked = checked;
    return checkbox;
  }
  
  // ラベルを生成するユーティリティ関数
  function createAfLabel(forId, labelText)
  {
    const label = document.createElement("label");
    label.htmlFor = forId;
    label.textContent = labelText;
    return label;
  }
  
  // テキストノードを生成するユーティリティ関数
  function createAfTextNode(text)
  {
    return document.createTextNode(text);
  }
  
  // セレクトリストを生成するユーティリティ関数
  function createAfSelectList(id, initial, optionsCount, head_unit, unit, select_index)
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
  
  function createanyAfSelectList(id, initial, optionsCount, head_unit, unit, select_index, rate)
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
  
  function createAfInputWithUnit(type, id, value, unit)
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
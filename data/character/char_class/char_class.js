class nahida {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.dmg_rateCache = null;
    this.parameter = parameter;
    this.constValue = null;
    this.aggcount = 0;
    this.skill_buff = 0;
    this.talent1effect = -1;
    this.dmg_rateCache = null;
    this.mytalent1 = 0;
    this.q_pyrobuff = 0;
    this.calculateConstValue();
    this.calculateCheckboxStates();
  }

  async dmg_rate_data() {
    // チェックボックスとチェックされた数を取得
    const checkboxContainer = document.getElementById("select_reaction_method");
    const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
    const trueCount = Array.from(checkboxes).filter((checkbox) => checkbox.checked).length;
    const nahida_Q = document.getElementById("nahida_Q");
    const talent1 = document.getElementById("talent1");
  
    if (nahida_Q.checked && talent1.checked) {
      this.mytalent1 = 1;
      const other_label = document.getElementById("other-label");
      if (other_label.checked) {
        const elm = parseInt(document.getElementById("element-mastery").value) || 0;
        const elm_buff = Math.max(Math.min(elm / 4, 250), 0);
        this.talent1effect = elm_buff;
      }
    }
  
    // Spreadチェックボックスの状態を取得
    const agg = document.getElementById("Spread");
    const agg_reaction = agg.checked ? 1 : 0;
  
    // チェックボックスの数とSpreadの状態からaggcountを計算
    this.aggcount = trueCount * agg_reaction;
    console.log(this.aggcount);
  
    // JSONデータを取得
    const response = await fetch("./data/character/char_data/nahida.json");
    const data = await response.json();
  
    // 攻撃方法に応じてダメージ率を計算
    const attack_method = document.getElementById("attack_method_id").value;
    console.log(attack_method);
  
    if (nahida_Q.checked) {
      let q_pyro = document.getElementById("nahida_Qpyro").value - 1;
      const char_constellations = document.getElementById("char_constellations").value;
  
      if (char_constellations > 0) {
        q_pyro = Math.min((q_pyro + 1), 1);
      }
  
      if (q_pyro > -1) {
        this.q_pyrobuff = parseFloat(data["元素爆発"]["詳細"][q_pyro]["数値"][10]);
      }
    }
    console.log(this.q_pyrobuff);
    let dmg_rate;
    let dmg_attck_rate = 0;
  
    if (attack_method == 1) {
      for (let i = 0; i < 4; i++) {
        dmg_attck_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 6) {
      dmg_attck_rate += data["重撃"]["数値"]["攻撃力"][this.parameter[3]];
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 16) {
      const dmg_attck_rate = data["元素スキル"]["数値"]["攻撃力"][this.parameter[3]];
      const dmg_elm_rate = data["元素スキル"]["数値"]["元素熟知"][this.parameter[3]];
      this.skill_buff = 1;
      dmg_rate = [0, 0, dmg_elm_rate, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 17) {
      this.skill_buff = 1;
      dmg_rate = [0, 0, 400, 0, 200, 0, 0];
    }
  
    // 計算結果をキャッシュして返す
    this.dmg_rateCache = dmg_rate;
    return dmg_rate;
  }
  
  
  calculate_char_fixed_hp() {
    return 0;
  }

  calculate_char_result_hp() {
    return 0;
  }

  calculate_char_fixed_attck() {
    return 0;
  }

  calculate_char_result_attck() {
    return 0;
  }

  calculate_char_fixed_deff() {
    return 0;
  }

  calculate_char_result_deff() {
    return 0;
  }

  calculate_char_fixed_elm() {
    return 0;
  }

  calculate_char_result_elm() {

    if (this.talent1effect > -1) {
      return this.talent1effect;
    }
    if(this.mytalent1 == 0)
    {
      return 0;
    }
    let talent1elm_buff = Math.min(this.fixed_status_array[2]/4, 250)
    return talent1elm_buff;
  }

  calculate_char_fixed_elm_charge() {
    return 0;
  }

  calculate_char_result_elm_charge() {
    return 0;
  }

  calculate_char_fixed_cr() {
    return 0;
  }

  calculate_char_result_cr() {
    return Math.min(Math.max(0, this.result_status_array[2] - 200), 800) * 0.0003 * this.skill_buff;
  }

  calculate_char_fixed_cd() {
    return 0;
  }

  calculate_char_result_cd() {
    return 0;
  }

  calculate_char_fixed_dmg_buff() {
    return this.q_pyrobuff;
  }

  calculate_char_result_dmg_buff() {
    return Math.min(Math.max(0, this.result_status_array[2] - 200), 800) * 0.001 * this.skill_buff;
  }

  calculate_basic_dmg(dmg_rate) {
    const resultStatusArray = this.result_status_array;
    const attckRate = resultStatusArray[4] * dmg_rate[4] / 100;
    const elmRate = resultStatusArray[2] * dmg_rate[2] / 100;
    let basicDmg = (attckRate + elmRate + this.aggcount * 1.25 * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200))) * 1.1 / 0.9;
    if (this.parameter[2] > 1 && this.checkboxStates[1]===true) {
      basicDmg = basicDmg * this.constValue;
    }
    return basicDmg;
  }

  calculateConstValue() {
    if (this.constValue ) {
      return this.constValue;
    }
    this.constValue = (290 + this.parameter[0]) / (190 * 0.7 + 100 + this.parameter[0]);
  }

  update_status(fixed_status_array, result_status_array) {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  calculateCheckboxStates() {
    const checkboxStates = [];
    const characterInfo = document.getElementById("characterInfo");
    const checkboxes = characterInfo.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
      checkboxStates.push(checkbox.checked);
    });

    while (checkboxStates.length < 4) {
      checkboxStates.push(false);
    }

    this.checkboxStates = checkboxStates;
  }
}


  class raiden {
    constructor(base_status_array, fixed_status_array, result_status_array) 
    {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }

    async dmg_rate_data() {
      const response = await fetch("./data/character/char_data/raidenshougun.json");
      const data = await response.json();
      const dmg_attck_rate = data.元素爆発.数値[10];
      const dmg_rate = [0,0,0,0,dmg_attck_rate,0,0]; 
      return dmg_rate;
    }
  
    calculate_char_fixed_hp() {
      return  0;
    }
  
    calculate_char_result_hp() {
      return 0;
    }
  
    calculate_char_fixed_attck() {
      return 0;
    }
  
    calculate_char_result_attck() {
      return 0;
    }
  
    calculate_char_fixed_deff() {
      return 0;
    }
  
    calculate_char_result_deff() {
      return 0;
    }
  
    calculate_char_fixed_elm() {
      return 0;
    }
  
    calculate_char_result_elm() {
      return 0;
    }
  
    calculate_char_fixed_elm_charge() {
      return 0.2;
    }
  
    calculate_char_result_elm_charge() {
      return 0;
    }
  
    calculate_char_fixed_cr() {
      return 0;
    }
  
    calculate_char_result_cr() {
      return 0;
    }
  
    calculate_char_fixed_cd() {
      return 0;
    }
  
    calculate_char_result_cd() {
      return 0;
    }
  
    calculate_char_fixed_dmg_buff() {
      return 0;
    }
  
    calculate_char_result_dmg_buff() {
      return 0.4*(this.result_status_array[3]-1) + 0.27 + Math.min(0.75,(this.result_status_array[3])/4);
    }

    calculate_basic_dmg(dmg_rate) {
      return this.result_status_array[4] * dmg_rate[4]/100;
    }

    update_status(fixed_status_array, result_status_array){
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  }
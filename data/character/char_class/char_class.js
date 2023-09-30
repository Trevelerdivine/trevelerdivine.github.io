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
    this.four_conste_buff = 0;
    this.char_constellations = 0;
  }

  async dmg_rate_data() {
    // チェックボックスとチェックされた数を取得
    const checkboxContainer = document.getElementById("select_reaction_method");
    const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
    const trueCount = Array.from(checkboxes).filter((checkbox) => checkbox.checked).length;
    this.char_constellations = document.getElementById("char_constellations").value;
    // Nahida Q および Talent1 チェック
    const nahida_Q = document.getElementById("nahida_Q");
    const talent1 = document.getElementById("talent1");
    if (nahida_Q.checked && talent1.checked) {
      this.mytalent1 = 1;
      
      // "other_label" チェック
      const otherLabel = document.getElementById("other-label");
      if (otherLabel.checked) {
        const elm = parseInt(document.getElementById("element-mastery").value) || 0;
        const elm_buff = Math.max(Math.min(elm / 4, 250), 0);
        this.talent1effect = elm_buff;
      }
    }
  
    // Spread チェックボックスの状態を取得
    const agg = document.getElementById("Spread");
    let agg_reaction = 0; // デフォルト値
    
    if (agg) { // 要素が存在する場合
      agg_reaction = agg.checked ? 1 : 0;
    }
    
  
    // チェックボックスの数と Spread の状態から aggcount を計算
    this.aggcount = trueCount * agg_reaction;
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/nahida.json");
    const data = await response.json();
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attck_rate = 0;
  
    if (this.char_constellations > 2)
    {
      const four_conste_index = document.getElementById("four_conste").value;
      const four_conste_check = document.getElementById("traitCheckbox3");
      if (four_conste_check.checked && four_conste_index > 0)
      {
        this.four_conste_buff = 100 + 20 * (four_conste_index - 1);
      }
    }

    if (attack_method == 1) {
      for (let i = 0; i < 4; i++) {
        dmg_attck_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 6) {
      dmg_attck_rate += data["重撃"]["数値"]["攻撃力"][this.parameter[3]];
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 16) {
      if (nahida_Q.checked) {
        let q_pyro = document.getElementById("nahida_Qpyro").value - 1;
        if (this.char_constellations > 0) {
          q_pyro = Math.min((q_pyro + 1), 1);
        }
  
        if (q_pyro > -1) {
          const nahida_Q_level = document.getElementById("nahida_Q_level").value;
          this.q_pyrobuff = parseFloat(data["元素爆発"]["詳細"][q_pyro]["数値"][nahida_Q_level]) / 100;
        }
      }
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
    return this.four_conste_buff;
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
    let basicDmg = (attckRate + elmRate + this.aggcount * 1.25 * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
    return basicDmg;
  }

  update_status(fixed_status_array, result_status_array)
  {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    if (this.char_constellations >1)
    {
      const two_conste_check = document.getElementById("traitCheckbox2");
      if(two_conste_check.checked)
      {
        char_debuff = [0,0.3,0];
      }
    }
    return char_debuff;
  }
}

////////////////////

class yaemiko {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.parameter = parameter;
    this.aggcount = 0;
    this.skill_buff = 0;
    this.talent2effect = 0;
    this.four_conste_buff = 0;
    this.char_constellations = 0;
  }

  async dmg_rate_data() {
    // チェックボックスとチェックされた数を取得
    const checkboxContainer = document.getElementById("select_reaction_method");
    const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
    const trueCount = Array.from(checkboxes).filter((checkbox) => checkbox.checked).length;
    this.char_constellations = document.getElementById("char_constellations").value;
    // Spread チェックボックスの状態を取得
    const agg = document.getElementById("Spread");
    let agg_reaction = 0; // デフォルト値
    
    if (agg) { // 要素が存在する場合
      agg_reaction = agg.checked ? 1 : 0;
    }
    // チェックボックスの数と Spread の状態から aggcount を計算
    this.aggcount = trueCount * agg_reaction;
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/nahida.json");
    const data = await response.json();

    const four_conste_check = document.getElementById("traitCheckbox3");
    if (this.char_constellations > 2 && four_conste_check.checked);
    {
      this.four_conste_buff = 0.2
    } 
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attck_rate = 0;
  
    if (attack_method == 1) {
      for (let i = 0; i < 3; i++) {
        dmg_attck_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 6) {
      dmg_attck_rate += data["重撃"]["数値"][this.parameter[3]];
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 16) {
      this.talent2effect == 1;
      const dmg_rate = data["元素スキル"]["詳細"][2]["数値"][this.parameter[3]];
      dmg_rate = [0, 0, dmg_elm_rate, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 21) {
      const first_dmg_rate = data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]];
      const second_dmg_rate = data["元素スキル"]["詳細"][1]["数値"][this.parameter[3]];
      const Q_dmg_rate = [first_dmg_rate, second_dmg_rate];
      dmg_rate = [0, 0, 0, 0, Q_dmg_rate, 0, 0];
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

   return 0;
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
    return 0;
  }

  calculate_char_fixed_cd() {
    return 0;
  }

  calculate_char_result_cd() {
    return 0;
  }

  calculate_char_fixed_dmg_buff() {
    return this.four_conste_buff;
  }

  calculate_char_result_dmg_buff() {
    let talent2skill_buff = this.result_status_array[2] * 0.15 * this.talent2effect / 100;
    return talent2skill_buff;
  }

  calculate_basic_dmg(dmg_rate) {
    const resultStatusArray = this.result_status_array;
    let basicDmg
    if (this.attack_method !==21)
    {
      const attckRate = resultStatusArray[4] * dmg_rate[4] / 100;
      basicDmg = (attckRate + elmRate + this.aggcount * 1.15 * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
    }
    else
    {
      const attckRate = resultStatusArray[4] * (dmg_rate[4][0] + dmg_rate[4][1] * 3) / 100;
      basicDmg = (attckRate + elmRate + this.aggcount * 1.15 * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
    }
    return basicDmg;
  }

  update_status(fixed_status_array, result_status_array)
  {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    if (this.char_constellations >3)
    {
      const two_conste_check = document.getElementById("traitCheckbox2");
      if(two_conste_check.checked)
      {
        char_debuff = [0,0,0.6];
      }
    }
    return char_debuff;
  }
}

////////////////////

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
  
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
      dmg_attck_rate = parseFloat(data["重撃"]["数値"]["攻撃力"][this.parameter[3]]);
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
      const dmg_attck_rate = parseFloat(data["元素スキル"]["数値"]["攻撃力"][this.parameter[3]]);
      const dmg_elm_rate = parseFloat(data["元素スキル"]["数値"]["元素熟知"][this.parameter[3]]);
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
    if (attack_method_index == 3)
    {
      return Math.min(Math.max(0, this.result_status_array[2] - 200), 800) * 0.0003 * this.skill_buff;
    }
  else
  {
    return 0;
  }
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
    if (attack_method_index == 3)
    {
      return Math.min(Math.max(0, this.result_status_array[2] - 200), 800) * 0.001 * this.skill_buff;
    }
    else
    {
      return 0;
    }
  }

  calculate_basic_dmg(dmg_rate) {
    if (depend_status[2] == 1)
    {
      const resultStatusArray = this.result_status_array;
      const attckRate = resultStatusArray[4] * dmg_rate[4] / 100;
      const elmRate = resultStatusArray[2] * dmg_rate[2] / 100;
      let basicDmg = (attckRate + elmRate + this.aggcount * 1.25 * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
      return basicDmg;
    }
    else
    {
      const resultStatusArray = this.result_status_array;
      const attckRate = resultStatusArray[4] * dmg_rate[4] / 100;
      return attckRate;
    }
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
    const agg = document.getElementById("Aggravate");
    let agg_reaction = 0; // デフォルト値
    
    if (agg) { // 要素が存在する場合
      agg_reaction = agg.checked ? 1 : 0;
    }
    // チェックボックスの数と Spread の状態から aggcount を計算
    this.aggcount = trueCount * agg_reaction;
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/yaemiko.json");
    const data = await response.json();

    if (this.char_constellations > 2 )
    {
      const four_conste_check = document.getElementById("traitCheckbox3");
      if (four_conste_check.checked)
      {
        this.four_conste_buff = 0.2;
      }
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
      dmg_attck_rate = parseFloat(data["重撃"]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 16) {
      this.talent2effect = 1;
      const yae_skill_rank = document.getElementById("yaemiko_E").value - 1;
      dmg_attck_rate = parseFloat(data["元素スキル"]["詳細"][yae_skill_rank]["数値"][this.parameter[3]])*3;
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 21) {
      const first_dmg_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
      const second_dmg_rate = parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
      const Q_dmg_rate = [first_dmg_rate, second_dmg_rate];
      dmg_rate = [0, 0, 0, 0, Q_dmg_rate, 0, 0];
    }
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
    if (this.talent2effect == 1)
    {
      let talent2skill_buff = this.result_status_array[2] * 0.15 / 100;
      return talent2skill_buff;
    }
    else
    {
      return 0;
    }
  }

  calculate_basic_dmg(dmg_rate) {
    const resultStatusArray = this.result_status_array;
    let basicDmg;
    let attckRate;
    if (depend_status[2] == 1)
    {
      if (attack_method !=21)
      {
        attckRate = resultStatusArray[4] * dmg_rate[4] / 100;
        basicDmg = (attckRate + this.aggcount * 1.15 * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
      }
      else
      {
        attckRate = resultStatusArray[4] * (dmg_rate[4][0] + dmg_rate[4][1] * 3) / 100;
        basicDmg = (attckRate + this.aggcount * 1.15 * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
      }
      return basicDmg;
    }
    else
    {
      if (attack_method != 21)
      {
        attckRate = resultStatusArray[4] * dmg_rate[4] / 100;
       
      }
      else
      {
        attckRate = resultStatusArray[4] * (dmg_rate[4][0] + dmg_rate[4][1] * 3) / 100;
      }
    }
    return attckRate;
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
      const six_conste_check = document.getElementById("traitCheckbox4");
      if(six_conste_check.checked && attack_method == 16)
      {
        char_debuff = [0,0,0.6];
      }
    }
    return char_debuff;
  }
}

////////////////////

class xiangling {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.parameter = parameter;
    this.talent1effect = 0;
    this.first_conste_buff = 0;
    this.six_conste_buff = 0;
    this.char_constellations = 0;
    this.reaction_coeff = 0;
    this.reaction_count = 0;
    this.attack_count = 0;
    this.talent2 = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    const Vaporize_pyro = document.getElementById("Vaporize_pyro");
    if (Vaporize_pyro.checked) {
      this.reaction_coeff = 1.5;
    }
    const Melt_pyro = document.getElementById("Melt-pyro");
    if (Melt_pyro.checked) {
      this.reaction_coeff = 2;
    }
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/xiangling.json");
    const data = await response.json();

    if (this.char_constellations > 0)
    {
      const first_conste_check = document.getElementById("traitCheckbox2");
      if (first_conste_check.checked)
      {
        this.first_conste_buff = 0.15;
      }
    } 

    if (this.char_constellations > 3 && attack_method == 16)
    {
      const six_conste_check = document.getElementById("traitCheckbox3");
      if (six_conste_check.checked)
      {
        this.six_conste_buff = 0.15;
      }
    } 

    let talent2_box = document.getElementById("xiangling_talent2");
    if (talent2_box.checked) 
    {
      this.talent2 = 0.1 * this.base_status_array[4];
    }
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;

    if (attack_method == 16) {
      this.attack_count = document.getElementById("xiangling_E_count").value;
      this.reaction_count = document.getElementById("xiangling_E").value;
      dmg_attack_rate = parseFloat(data["元素スキル"]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 21) {
      this.attack_count = document.getElementById("xiangling_Q_count").value;
      this.reaction_count = document.getElementById("xiangling_Q").value;
      dmg_attack_rate = parseFloat(data["元素爆発"]["詳細"][3]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }
    return dmg_rate;
  }
  
  calculate_char_fixed_hp() {
    return 0;
  }

  calculate_char_result_hp() {
    return 0;
  }

  calculate_char_fixed_attck() {
    return this.talent2 ;
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
      return this.six_conste_buff;
  }

  calculate_char_result_dmg_buff() {
      return 0;
  }

  calculate_basic_dmg(dmg_rate) {
    const resultStatusArray = this.result_status_array;
    let basicDmg;
    let attckRate;
    if (depend_status[2] == 1)
    {
        attckRate = resultStatusArray[4] * dmg_rate[4] / 100;
        basicDmg = attckRate * this.reaction_count * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400))
                  + attckRate * (this.attack_count - this.reaction_count);
      return basicDmg;
    }
    else
    {
        attckRate = resultStatusArray[4] * dmg_rate[4] * this.attack_count / 100;
    }
    return attckRate;
  }

  update_status(fixed_status_array, result_status_array)
  {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  calculate_char_debuff() {
    let char_debuff = [this.first_conste_buff,0,0];
    return char_debuff;
  }
}

////////////////////

  class raiden {
    constructor(base_status_array, fixed_status_array, result_status_array,parameter) 
    {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
      this.parameter = parameter;
      this.char_constellations = 0;
      this.aggcount = 0;
      this.skill_buff = 0;
    }

    async dmg_rate_data() {
      this.char_constellations = document.getElementById("char_constellations").value;

      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      const trueCount = Array.from(checkboxes).filter((checkbox) => checkbox.checked).length;
      // Spread チェックボックスの状態を取得
      const agg = document.getElementById("Aggravate");
      let agg_reaction = 0; // デフォルト値
      
      if (agg) { // 要素が存在する場合
        agg_reaction = agg.checked ? 1 : 0;
      }
      // チェックボックスの数と Spread の状態から aggcount を計算
      this.aggcount = trueCount * agg_reaction;
    
      // JSON データを取得
      const response = await fetch("./data/character/char_data/raidenshougun.json");
      const data = await response.json();
      // 攻撃方法に応じてダメージ率を計算
      const resolve = parseInt(document.getElementById("raiden_resolve").value);
      const raidenn_E_level = document.getElementById("raiden_E_level").value;
      const raiden_E_check = document.getElementById("raiden_E");
      let skill_effect = 0;
      if (raiden_E_check.checked)
      {
        skill_effect = 1;
        this.skill_buff = parseFloat(data["元素スキル"]["詳細"][2]["数値"][raidenn_E_level]) * 0.9;
      }
      let dmg_rate;
      let dmg_attack_rate = 0;
      let burst_bonus;
      
      if (attack_method == 21) {
        for (let i = 0; i < 5; i++) {
          dmg_attack_rate = parseFloat(data["爆発中通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
        }
        burst_bonus = parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
        dmg_attack_rate += burst_bonus * resolve * skill_effect;
        dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
      } else if (attack_method == 22) {
        dmg_attack_rate = parseFloat(data["爆発中重撃"]["詳細"]["数値"][this.parameter[3]]);
        burst_bonus = parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
        dmg_attack_rate += burst_bonus * resolve * skill_effect;
        dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
      } else if (attack_method == 23) {
        dmg_attack_rate = parseFloat(data["元素爆発"]["数値"][this.parameter[3]]);
        burst_bonus = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
        dmg_attack_rate += burst_bonus * resolve * skill_effect;
        dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
      }
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
      return this.skill_buff;
    }
  
    calculate_char_result_dmg_buff() {
      const resultStatusArray = this.result_status_array;
      const talent2_buff = (resultStatusArray[3] - 1) * 0.4;
      return talent2_buff;
    }

    calculate_basic_dmg(dmg_rate) {
      if (depend_status[2] == 1)
      {
        const resultStatusArray = this.result_status_array;
        const attckRate = resultStatusArray[4] * dmg_rate[4] / 100;
        let basicDmg = (attckRate + this.aggcount * 1.15 * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
        return basicDmg;
      }
      else
      {
        const resultStatusArray = this.result_status_array;
        const attckRate = resultStatusArray[4] * dmg_rate[4] / 100;
        return attckRate;
      }
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
          char_debuff = [0,0,0.6];
        }
      }
      return char_debuff;
    }
  }
  //////////////////////////////

  class tighnari {
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
        dmg_attck_rate = parseFloat(data["重撃"]["数値"]["攻撃力"][this.parameter[3]]);
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
        const dmg_attck_rate = parseFloat(data["元素スキル"]["数値"]["攻撃力"][this.parameter[3]]);
        const dmg_elm_rate = parseFloat(data["元素スキル"]["数値"]["元素熟知"][this.parameter[3]]);
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
      if (attack_method_index == 3)
      {
        return Math.min(Math.max(0, this.result_status_array[2] - 200), 800) * 0.0003 * this.skill_buff;
      }
    else
    {
      return 0;
    }
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
      if (attack_method_index == 3)
      {
        return Math.min(Math.max(0, this.result_status_array[2] - 200), 800) * 0.001 * this.skill_buff;
      }
      else
      {
        return 0;
      }
    }
  
    calculate_basic_dmg(dmg_rate) {
      if (depend_status[2] == 1)
      {
        const resultStatusArray = this.result_status_array;
        const attckRate = resultStatusArray[4] * dmg_rate[4] / 100;
        const elmRate = resultStatusArray[2] * dmg_rate[2] / 100;
        let basicDmg = (attckRate + elmRate + this.aggcount * 1.25 * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
        return basicDmg;
      }
      else
      {
        const resultStatusArray = this.result_status_array;
        const attckRate = resultStatusArray[4] * dmg_rate[4] / 100;
        return attckRate;
      }
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
  
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

class yoimiya {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.parameter = parameter;
    this.talent1effect = 0;
    this.first_conste_buff = 0;
    this.second_conste_buff = 0;
    this.sixth_conste_buff = 0;
    this.char_constellations = 0;
    this.reaction_coeff = 0;
    this.talent2_buff = 0;
    this.skill_buff = 0;
    this.trueCount = 0;
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
    const response = await fetch("./data/character/char_data/yoimiya.json");
    const data = await response.json();

    const yoimiyaE_level = parseInt(document.getElementById("yoimiyaE_level").value);
    this.skill_buff = parseFloat(data["元素スキル"]["詳細"][0]["数値"][yoimiyaE_level]);

    this.talent1_buff = parseFloat(document.getElementById("yoimiya_talent1").value) / 100;


    if (this.char_constellations > 0)
    {
      const first_conste_check = document.getElementById("traitCheckbox1");
      if (first_conste_check.checked)
      {
        this.first_conste_buff = 0.2;
      }
    }

    if (this.char_constellations > 1)
    {
      const second_conste_check = document.getElementById("traitCheckbox2");
      if (second_conste_check.checked)
      {
        this.second_conste_buff = 0.25;
      }
    }
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;
    if (attack_method == 1) {
      if (this.char_constellations < 4)
      {
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = []
      let elm_nonreact = [];
      // 各チェックボックスの状態を調べて配列に追加
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);
        if (checkbox.checked) {
          this.trueCount++; // チェックボックスがチェックされている場合、trueCountを増やす
        }
      });
        console.log(elm_react);
        console.log(elm_nonreact);
        console.log(this.trueCount);
        let elm_react_dmgrate = 0;
        let elm_nonreact_dmgrate = 0;
        for (let i = 0; i < 7; i++) {
          elm_react_dmgrate += elm_react[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
          elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
        }
        dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
      }
      else
      {
          for (let i = 0; i < 7; i++) {
            dmg_attack_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
          }
          dmg_attack_rate = dmg_attack_rate * 1.3
          dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
      }
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
    return this.base_status_array[4] * this.first_conste_buff;
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
      return this.second_conste_buff + this.talent1_buff;
  }

  calculate_char_result_dmg_buff() {
      return 0;
  }

  calculate_basic_dmg(dmg_rate) {
    const resultStatusArray = this.result_status_array;
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      if (attack_method == 1)
      {
        if (this.char_constellations < 4)
        {
          attckRate = resultStatusArray[4] * dmg_rate[4][0] * this.skill_buff;
          basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400))
                    + resultStatusArray[4] * dmg_rate[4][1] * this.skill_buff;
          return basicDmg;
        }
        else
        {
          basicDmg = (resultStatusArray[4] * dmg_rate[4] * this.skill_buff / 3) * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400))
                    + resultStatusArray[4] * dmg_rate[4] * this.skill_buff * 2 / 3;
          return basicDmg;
        }
      }
      else
      {
        attckRate = resultStatusArray[4] * dmg_rate[4];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400));
        return basicDmg;
      }
    }
    else
    {
      if (attack_method == 1)
      {
        if( this.char_constellations < 4)
        {
          attckRate = resultStatusArray[4] * (dmg_rate[4][0] + dmg_rate[4][1]) * this.skill_buff;
          basicDmg = attckRate;
          return basicDmg;
        }
        else
        {
          attckRate = resultStatusArray[4] * dmg_rate[4] * this.skill_buff;
          basicDmg = attckRate;
          return basicDmg;
        }
      }
      else
      {
        attckRate = resultStatusArray[4] * dmg_rate[4];
        basicDmg = attckRate;
        return basicDmg;
      }
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
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class hutao {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.parameter = parameter;
    this.talent1effect = 0;
    this.sixth_conste_buff = 0;
    this.char_constellations = 0;
    this.reaction_coeff = 0;
    this.talent2_buff = 0;
    this.skill_buff = 0;
    this.trueCount = 0;
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
    const response = await fetch("./data/character/char_data/hutao.json");
    const data = await response.json();

    const hutaoE_level = parseInt(document.getElementById("hutaoE_level").value);
    this.skill_buff = parseFloat(data["元素スキル"]["詳細"][0]["数値"][hutaoE_level]);

    const talent2_check = document.getElementById("hutao_talent2");
    if (talent2_check.checked)
    {
      this.talent2_buff = 0.33;
    }

    if (this.char_constellations > 3)
    {
      const sixth_conste_check = document.getElementById("traitCheckbox6");
      if (sixth_conste_check.checked)
      {
        this.sixth_conste_buff = 1;
      }
    }
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;

    if (attack_method == 1) {
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = []
      let elm_nonreact = [];
      // 各チェックボックスの状態を調べて配列に追加
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);

        if (checkbox.checked) {
          this.trueCount++; // チェックボックスがチェックされている場合、trueCountを増やす
        }
      });
        console.log(elm_react);
        console.log(elm_nonreact);
        console.log(this.trueCount);
        let elm_react_dmgrate = 0;
        let elm_nonreact_dmgrate = 0;
        for (let i = 0; i < 7; i++) {
          elm_react_dmgrate += elm_react[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
          elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
        }
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    } else if (attack_method == 6) {
      dmg_attack_rate = parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 21) {
      const hutao_hp_check = document.getElementById("hutao_Q_effect");
      const hutao_hp_flag = 0;
      if (hutao_hp_check.cheked)
      {
        hutao_hp_flag = 1
      }
      dmg_attack_rate = parseFloat(data["元素爆発"]["詳細"][hutao_hp_flag]["数値"][this.parameter[3]]);
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
    return Math.min(4 * this.base_status_array[4], this.skill_buff * this.result_status_array[0]);
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
    return this.sixth_conste_buff;
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
      return this.talent2_buff;
  }

  calculate_char_result_dmg_buff() {
      return 0;
  }

  calculate_basic_dmg(dmg_rate) {
    const resultStatusArray = this.result_status_array;
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      if (attack_method == 1)
      {
        attckRate = resultStatusArray[4] * dmg_rate[4][0];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400))
                  + resultStatusArray[4] * dmg_rate[4][1];
        return basicDmg;
      }
      else
      {
        attckRate = resultStatusArray[4] * dmg_rate[4];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400));
        return basicDmg;
      }
    }
    else
    {
      if (attack_method == 1)
      {
        attckRate = resultStatusArray[4] * (dmg_rate[4][0] + dmg_rate[4][1]);
        basicDmg = attckRate;
        return basicDmg;
      }
      else
      {
        attckRate = resultStatusArray[4] * dmg_rate[4];
        basicDmg = attckRate;
        return basicDmg;
      }
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
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class yanfei {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.parameter = parameter;
    this.talent1effect = 0;
    this.second_conste_buff = 0;
    this.char_constellations = 0;
    this.reaction_coeff = 0;
    this.talent1_buff = 0;
    this.burst_buff = 0;
    this.trueCount = 0;
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
    const response = await fetch("./data/character/char_data/yanfei.json");
    const data = await response.json();

    if (this.char_constellations > 1)
    {
      const second_conste_check = document.getElementById("traitCheckbox2");
      if (second_conste_check.checked)
      {
        this.second_conste_buff = 0.2;
      }
    }
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;

    if (attack_method == 1) {   
    const checkboxContainer = document.getElementById("select_reaction_method");
    const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
    let elm_react = []
    let elm_nonreact = [];
    // 各チェックボックスの状態を調べて配列に追加
    checkboxes.forEach(checkbox => {
      elm_react.push(checkbox.checked ? 1 : 0);
      elm_nonreact.push(checkbox.checked ? 0 : 1);

      if (checkbox.checked) {
        this.trueCount++; // チェックボックスがチェックされている場合、trueCountを増やす
      }
    });
      let elm_react_dmgrate = 0;
      let elm_nonreact_dmgrate = 0;
      for (let i = 0; i < 3; i++) {
        elm_react_dmgrate += elm_react[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
        elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }

      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    } else if (attack_method == 6) {
      const burst_check = document.getElementById("yanfei_Q");
      if (burst_check.checked)
      {
        const burstlevel = parseInt(document.getElementById("yanfeiQ_level").value);
        this.burst_buff = parseFloat(data["元素爆発"]["詳細"][1]["数値"][burstlevel]);
      }
      const buff_count = parseInt(document.getElementById("yanfei_mark").value);

      this.talent1_buff = 0.05 * buff_count;
      dmg_attack_rate = parseFloat(data["重撃"]["詳細"][buff_count]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 16) {
      dmg_attack_rate = parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 21) {
      dmg_attack_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
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
    return this.second_conste_buff;
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
      return this.talent1_buff + this.burst_buff;
  }

  calculate_char_result_dmg_buff() {
      return 0;
  }

  calculate_basic_dmg(dmg_rate) {
    const resultStatusArray = this.result_status_array;
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      if (attack_method == 1)
      {
        attckRate = resultStatusArray[4] * dmg_rate[4][0];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400))
                  + resultStatusArray[4] * dmg_rate[4][1];
        return basicDmg;
      }
      else if (attack_method == 6)
      {
        attckRate = resultStatusArray[4] * dmg_rate[4] + resultStatusArray[5] * 0.8 * resultStatusArray[4];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400));
        return basicDmg;
      }
      else 
      {
        attckRate = resultStatusArray[4] * dmg_rate[4];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400));
        return basicDmg;
      }
    }
    else
    {
      if (attack_method == 1)
      {
        attckRate = resultStatusArray[4] * (dmg_rate[4][0] + dmg_rate[4][1])
        basicDmg = attckRate;
        return basicDmg;
      }
      else if (attack_method == 6)
      {
        attckRate = resultStatusArray[4] * dmg_rate[4] + resultStatusArray[5] * 0.8 * resultStatusArray[4];
        basicDmg = attckRate;
        return basicDmg;
      }
      else 
      {
        attckRate = resultStatusArray[4] * dmg_rate[4];
        basicDmg = attckRate;
        return basicDmg;
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
    return char_debuff;
  }
}

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
    if (this.reaction_coeff > 0)
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

class nirou {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) 
  {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.talent1_buff = 0;
    this.first_conste_buff = 0;
    this.second_conste_buff = 0;
    this.fourth_conste_buff = 0;
    this.sixth_conste_buff = 0;
    this.trueCount = 0;
    this.reaction_coeff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    const Vaporize_hydro = document.getElementById("Vaporize-hydro");
    this.reaction_coeff = Vaporize_hydro.checked ? 2 : 0;

    const nirou_talent1_check = document.getElementById("nirou_talent1");
    if (nirou_talent1_check.checked)
    {
      this.talent1_buff = 100;
    }

    if (this.char_constellations > 0 && attack_method == 16)
    {
      this.first_conste_buff = 0.5;
    }
  
    if (this.char_constellations > 1)
    {
      const second_conste_check = document.getElementById("traitCheckbox2");
      if (second_conste_check.checked)
      {
        this.second_conste_buff = 0.35;
      }
    }

    if (this.char_constellations > 2 && attack_method == 21)
    {
      this.fourth_conste_buff = 0.5;
    }

    if (this.char_constellations > 3)
    {
      this.sixth_conste_buff = 1;
    }

    const response = await fetch("./data/character/char_data/nirou.json");
    const data = await response.json();
  
    let dmg_attack_rate = 0;
    let dmg_rate;
    let elm_react_dmgrate = 0;
    let elm_nonreact_dmgrate = 0;
  
  
    if (attack_method == 16) {
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = [];
      let elm_nonreact = [];
      this.trueCount = 0;
  
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);
        if (checkbox.checked) {
          this.trueCount++;
        }
      });

        for (let i = 0; i < 3; i++) {
          elm_react_dmgrate += elm_react[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
          elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
        }

        const suigetus_check = parseInt(document.getElementById("checkbox_2").value);
        let suigetsu_elmreact_dmgrate = 0
        let suigetsu_elmnonreact_dmgrate = 0
        if(suigetus_check.checked)
        {
          elm_react_dmgrate -= parseFloat(data["通常攻撃"]["詳細"][2]["数値"][this.parameter[3]])
          suigetsu_elmreact_dmgrate = parseFloat(data["通常攻撃"]["詳細"][2]["数値"][this.parameter[3]])
        }
        else
        {
          elm_nonreact_dmgrate -= parseFloat(data["通常攻撃"]["詳細"][2]["数値"][this.parameter[3]]);
          suigetsu_elmnonreact_dmgrate = parseFloat(data["通常攻撃"]["詳細"][2]["数値"][this.parameter[3]]);
        }

        dmg_rate = [[elm_react_dmgrate, elm_nonreact_dmgrate, suigetsu_elmreact_dmgrate, suigetsu_elmnonreact_dmgrate], 0, 0, 0, 0, 0, 0];
        console.log(dmg_rate);
      }

      else if (attack_method == 21)
      {
        const checkboxContainer = document.getElementById("select_reaction_method");
        const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
        let elm_react = [];
        let elm_nonreact = [];
        this.trueCount = 0;
    
        checkboxes.forEach(checkbox => {
          elm_react.push(checkbox.checked ? 1 : 0);
          elm_nonreact.push(checkbox.checked ? 0 : 1);
          if (checkbox.checked) {
            this.trueCount++;
          }
        });
  
          for (let i = 0; i < 2; i++) {
            elm_react_dmgrate += elm_react[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
            elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
          }
          dmg_rate = [[elm_react_dmgrate, elm_nonreact_dmgrate], 0, 0, 0, 0, 0, 0];
          console.log(dmg_rate);
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
    return this.talent1_buff;
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
    return Math.min(0.3,this.sixth_conste_buff * (this.result_status_array[0] / 1000) * 0.006);
  }

  calculate_char_fixed_cd() {
    return 0;
  }

  calculate_char_result_cd() {
    return  Math.min(0.6,this.sixth_conste_buff * (this.result_status_array[0] / 1000) * 0.012);
  }

  calculate_char_fixed_dmg_buff() {
    return this.fourth_conste_buff;
  }

  calculate_char_result_dmg_buff() {
    return 0;
  }

  calculate_basic_dmg(dmg_rate) {
    const resultStatusArray = this.result_status_array;
    let basicDmg;
    let attckRate;

      if (attack_method == 16)
      {
        attckRate = resultStatusArray[0] * (dmg_rate[0][0] + dmg_rate[0][2] * (resultStatusArray[7] + this.first_conste_buff) / resultStatusArray[7]);
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400))
                + resultStatusArray[0] * (dmg_rate[0][1] + dmg_rate[0][3] * (resultStatusArray[7] + this.first_conste_buff) / resultStatusArray[7]);
      }
      else
      {
        attckRate = resultStatusArray[0] * dmg_rate[0][0];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400))
                  + resultStatusArray[0] * dmg_rate[0][1];
      }
      return basicDmg;
  }

  update_status(fixed_status_array, result_status_array)
  {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  calculate_char_debuff() {
    let char_debuff = [this.second_conste_buff,0,0];
    return char_debuff;
  }
}

class yelan {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.parameter = parameter;
    this.talent1effect = 0;
    this.second_conste_buff = 0;
    this.char_constellations = 0;
    this.reaction_coeff = 0;
    this.talent1_buff = 0;
    this.talent2_buff = 0;
    this.burst_buff = 0;
    this.trueCount = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    const Vaporize_hydro = document.getElementById("Vaporize-hydro");
    if (Vaporize_hydro.checked) {
      this.reaction_coeff = 2;
    }

    const talent1_count = parseInt(document.getElementById("yelan_talent1").value);
    if (talent1_count != 4)
    {
      this.talent1_buff = 0.06 * talent1_count;
    }
    else
    {
      this.talent1_buff = 0.3;
    }

    const yelan_entrance = document.getElementById("yelan_Q");
    const burst_flag = document.getElementById("yelan_entrance");
    if (yelan_entrance.checked && burst_flag.checked)
    {
      this.talent2_buff = parseFloat(document.getElementById("yelan_talent2_buff").value)/100 || 0;
    }
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/yelan.json");
    const data = await response.json();
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;

    if (attack_method == 21) {   
    const checkboxContainer = document.getElementById("select_reaction_method");
    const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
    let elm_react = []
    let elm_nonreact = [];
    // 各チェックボックスの状態を調べて配列に追加
    checkboxes.forEach(checkbox => {
      elm_react.push(checkbox.checked ? 1 : 0);
      elm_nonreact.push(checkbox.checked ? 0 : 1);

      if (checkbox.checked) {
        this.trueCount++; // チェックボックスがチェックされている場合、trueCountを増やす
      }
    });
      let elm_react_dmgrate = 0;
      let elm_nonreact_dmgrate = 0;
      for (let i = 0; i < 3; i++) {
        elm_react_dmgrate += elm_react[i] * parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
        elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
      }
      if (this.char_constellations > 1)
      {
        elm_react_dmgrate += elm_react[3] * 0.07;
        elm_nonreact_dmgrate += elm_nonreact[3] * 0.07;
      }

      dmg_rate = [[elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0, 0, 0, 0, 0];
    } else if (attack_method == 16) {
      dmg_attack_rate = parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [dmg_attack_rate, 0, 0, 0, 0, 0, 0];
    } else if (attack_method == 6) {
      dmg_attack_rate = parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]) * 1.56;
      dmg_rate = [dmg_attack_rate, 0, 0, 0, 0, 0, 0];
    }
  
    return dmg_rate;
  }
  
  calculate_char_fixed_hp() {
    return this.base_status_array[0] * this.talent1_buff;
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
      return this.talent2_buff;
  }

  calculate_char_result_dmg_buff() {
      return 0;
  }

  calculate_basic_dmg(dmg_rate) {
    const resultStatusArray = this.result_status_array;
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      if (attack_method == 21)
      {
        attckRate = resultStatusArray[0] * dmg_rate[0][0];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400))
                  + resultStatusArray[0] * dmg_rate[0][1];
        return basicDmg;
      }
      else 
      {
        attckRate = resultStatusArray[0] * dmg_rate[0];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400));
        return basicDmg;
      }
    }
    else
    {
      if (attack_method == 21)
      {
        attckRate = resultStatusArray[0] * (dmg_rate[0][0] + dmg_rate[0][1])
        basicDmg = attckRate;
        return basicDmg;
      }
      else 
      {
        attckRate = resultStatusArray[0] * dmg_rate[0];
        basicDmg = attckRate;
        return basicDmg;
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
    return char_debuff;
  }
}

class kamisatoayato {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) 
  {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.first_conste_buff = 0;
    this.second_conste_buff = 0;
    this.trueCount = 0;
    this.reaction_coeff = 0;
    this.attack_count = 3;
    this.buff_effect_count = 3;
    this.skill_buff = 0;
    this.burst_buff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    const Vaporize_hydro = document.getElementById("Vaporize-hydro");
    this.reaction_coeff = Vaporize_hydro.checked ? 2 : 0;
  
    if (this.char_constellations > 0) {
      const first_conste_check = document.getElementById("traitCheckbox1");
      this.first_conste_buff = first_conste_check.checked ? 0.4 : 0;
    }
  
    const rousen_count = parseInt(document.getElementById("rousen_count").value);
    this.second_conste_buff = rousen_count > 2 && this.char_constellations > 1 ? 0.5 : 0;
  
    const response = await fetch("./data/character/char_data/kamisatoayato.json");
    const data = await response.json();
  
    let dmg_attack_rate = 0;
    let dmg_rate;
    let elm_react_dmgrate = 0;
    let elm_nonreact_dmgrate = 0;
    this.rousen_buff = parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
    this.skill_buff = this.rousen_buff * rousen_count;
  
    const buff_check = document.getElementById("kamisatoayato_Q");
    if (buff_check.checked)
    {
      const ayato_burst_level = parseInt(document.getElementById("kamisatoayato_Q_level").value);
      this.burst_buff = parseFloat(data["元素爆発"]["詳細"][1]["数値"][ayato_burst_level]);
    }
  
    if (attack_method == 1) {
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = [];
      let elm_nonreact = [];
      this.trueCount = 0;
  
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);
        if (checkbox.checked) {
          this.trueCount++;
        }
      });

        for (let i = 0; i < 3; i++) {
          elm_react_dmgrate += elm_react[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
          elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
        }

        if (this.char_constellations == 4)
        {
          const syunsui1_check = document.getElementById("checkbox_3");
          const syunsui2_check = document.getElementById("checkbox_4");
    
          if (syunsui1_check.checked) {
            this.buff_effect_count -= 1;
          }
          if (syunsui2_check.checked) {
            this.buff_effect_count -= 1;
          }
          for (let i = 3; i < 5; i++) {
            elm_react_dmgrate += elm_react[i] * 4.5;
            elm_nonreact_dmgrate += elm_nonreact[i] * 4.5;
          }
        }
        dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate, elm_nonreact_dmgrate], 0, 0];
        console.log(dmg_rate);
      }
    return dmg_rate;
  }

  calculate_char_fixed_hp() {
    return this.base_status_array[0] * this.second_conste_buff;
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
    return this.first_conste_buff + this.burst_buff;
  }

  calculate_char_result_dmg_buff() {
    return 0;
  }

  calculate_basic_dmg(dmg_rate) {
    const resultStatusArray = this.result_status_array;
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      attckRate = resultStatusArray[4] * dmg_rate[4][0] + resultStatusArray[0] * this.skill_buff * this.buff_effect_count;
      basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400))
                + resultStatusArray[4] * dmg_rate[4][1] + resultStatusArray[0] * this.skill_buff * (3 - this.buff_effect_count);
      return basicDmg;
    }
    else
    {
      attckRate = resultStatusArray[4] * (dmg_rate[4][0] + dmg_rate[4][1]) + resultStatusArray[0] * this.skill_buff * 3;
      basicDmg = attckRate;
      return basicDmg;
    }
  }

  update_status(fixed_status_array, result_status_array)
  {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class xingqiu {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) 
  {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.second_conste_buff = 0;
    this.forth_conste_buff = 1;
    this.trueCount = 0;
    this.reaction_coeff = 0;
    this.skill_buff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    const Vaporize_hydro = document.getElementById("Vaporize-hydro");
    if (Vaporize_hydro.checked) {
      this.reaction_coeff = 2;
    }

    // JSON データを取得
    const response = await fetch("./data/character/char_data/xingqiu.json");
    const data = await response.json();
    // 攻撃方法に応じてダメージ率を計算
    let dmg_attack_rate = 0;
    let dmg_rate;
    let elm_react_dmgrate = 0;
    let elm_nonreact_dmgrate = 0;

    if (this.char_constellations > 1)
    {
      const second_conste_check = document.getElementById("traitCheckbox2");
      if (second_conste_check.checked)
      {
        this.second_conste_buff = 0.15;
      }
    }
    
    if (attack_method == 16) {
      if (this.char_constellations > 2)
      {
        this.forth_conste_buff = 1.5;
      }
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = []
      let elm_nonreact = [];
      // 各チェックボックスの状態を調べて配列に追加
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);
        if (checkbox.checked) {
          this.trueCount++; // チェックボックスがチェックされている場合、trueCountを増やす
        }
      });
        console.log(elm_react);
        console.log(elm_nonreact);
        console.log(this.trueCount);
        for (let i = 0; i < 2; i++) {
          elm_react_dmgrate += elm_react[i] * parseFloat(data["元素スキル"]["詳細"][i]["数値"][this.parameter[3]]);
          elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["元素スキル"]["詳細"][i]["数値"][this.parameter[3]]);
        }
        dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
      } 
      else if (attack_method == 21) {
        const attack_count = parseInt(document.getElementById("xingqiu_attack_count").value);
        const Vaporize_count = parseInt(document.getElementById("xingqiu_vap_count").value);
        elm_react_dmgrate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * Vaporize_count;
        elm_nonreact_dmgrate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * (attack_count- Vaporize_count);
        dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
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
    return 0.2;
  }

  calculate_char_result_dmg_buff() {
    return 0;
  }

  calculate_basic_dmg(dmg_rate) {
    const resultStatusArray = this.result_status_array;
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
        attckRate = resultStatusArray[4] * dmg_rate[4][0];
        basicDmg = (attckRate * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400))
                  + resultStatusArray[4] * dmg_rate[4][1]) * this.forth_conste_buff;
        return basicDmg;
    }
    else
    {
        attckRate = resultStatusArray[4] * (dmg_rate[4][0] + dmg_rate[4][1]) * this.forth_conste_buff;
        basicDmg = attckRate;
        return basicDmg;
    }
  }

  update_status(fixed_status_array, result_status_array)
  {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  calculate_char_debuff() {
    let char_debuff = [this.second_conste_buff,0,0];
    return char_debuff;
  }
}

class eula {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.parameter = parameter;
    this.first_conste_buff = 0;
    this.forth_conste_buff = 1;
    this.char_constellations = 0;
    this.trueCount = 0;
    this.debuff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    // JSON データを取得
    const response = await fetch("./data/character/char_data/eula.json");
    const data = await response.json();

    const eula_E_level = parseInt(document.getElementById("eula_E_level").value);
    const eulaE_check = document.getElementById("eula_E");
    if (eulaE_check.checked)
    {
      this.debuff = parseFloat(data["元素スキル"]["詳細"][3]["数値"][eula_E_level]);
    }


    if (this.char_constellations > 0)
    {
      const first_conste_check = document.getElementById("traitCheckbox1");
      if (first_conste_check.checked)
      {
        this.first_conste_buff = 0.3;
      }
    } 
    if (this.char_constellations > 2)
    {
      const forth_conste_check = document.getElementById("traitCheckbox4");
      if (forth_conste_check.checked)
      {
        this.forth_conste_buff = 1.25;
      }
    } 

  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;

    if (attack_method == 21) {   
    const eula_energy = parseInt(document.getElementById("eula_enelgy").value);
    const burst_rate = parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
    const burst_energyrate = parseFloat(data["元素爆発"]["詳細"][2]["数値"][this.parameter[3]]);
    dmg_attack_rate = burst_rate + eula_energy * burst_energyrate;
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
      return this.first_conste_buff;
  }

  calculate_char_result_dmg_buff() {
      return 0;
  }

  calculate_basic_dmg(dmg_rate) {
    const resultStatusArray = this.result_status_array;
    let basicDmg;
    let attckRate;
    if (attack_method == 21)
    {
      attckRate = resultStatusArray[4] * dmg_rate[4] * this.forth_conste_buff;
      basicDmg = attckRate;
      return basicDmg;
    }
  }

  update_status(fixed_status_array, result_status_array)
  {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  calculate_char_debuff() {
    let char_debuff = [this.debuff,0,0];
    return char_debuff;
  }
}

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

  class keqing {
    constructor(base_status_array, fixed_status_array, result_status_array,parameter) 
    {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
      this.parameter = parameter;
      this.char_constellations = 0;
      this.forth_conste_buff = 0;
      this.sixth_conste_buff = 0;
      this.aggcount = 0;
      this.talent2_buff = 0;
      this.reaction_coeff = 0;
      this.skill_buff = 0;
    }

    async dmg_rate_data() {
      this.char_constellations = document.getElementById("char_constellations").value;

      const Aggravate = document.getElementById("Aggravate");
      if (Aggravate.checked) {
        this.reaction_coeff = 1.15;
        this.aggcount = parseInt(document.getElementById("keqing_agg_count").value);
      }

      if (this.char_constellations > 2)
      {
        const forth_conste_check = document.getElementById("traitCheckbox4");
        if (forth_conste_check.checked)
        {
          this.forth_conste_buff = 0.25;
        }
      } 
      if (this.char_constellations > 3)
      {
        this.sixth_conste_buff = parseInt(document.getElementById("keqing_conste6").value) / 100;
      } 

      // JSON データを取得
      const response = await fetch("./data/character/char_data/keqing.json");
      const data = await response.json();
      // 攻撃方法に応じてダメージ率を計算
      let dmg_attack_rate = 0;
      let dmg_rate;
      
      if (attack_method == 1) {
        for (let i = 0; i < 5; i++) {
          dmg_attack_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
        }
        dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
      } else if (attack_method == 6) {
        const attack_count = parseInt(document.getElementById("keqing_attack_count").value);
        dmg_attack_rate = parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count;
        dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
      } else if (attack_method == 21) {
        const keqing_talent2_check = document.getElementById("keqing_talent2");
        if (keqing_talent2_check.checked)
        {
          this.talent2_buff = 0.15;
        }
        dmg_attack_rate += parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
        dmg_attack_rate += parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]) * 8;
        dmg_attack_rate += parseFloat(data["元素爆発"]["詳細"][2]["数値"][this.parameter[3]]);
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
      return this.forth_conste_buff * this.base_status_array[4];
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
      return this.talent2_buff;
    }
  
    calculate_char_result_elm_charge() {
      return 0;
    }
  
    calculate_char_fixed_cr() {
      return this.talent2_buff;
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
      return this.sixth_conste_buff;
    }
  
    calculate_char_result_dmg_buff() {
      return 0;
    }

    calculate_basic_dmg(dmg_rate) {
      if (this.reaction_coeff > 0)
      {
        const resultStatusArray = this.result_status_array;
        const attckRate = resultStatusArray[4] * dmg_rate[4];
        let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
        return basicDmg;
      }
      else
      {
        const resultStatusArray = this.result_status_array;
        const attckRate = resultStatusArray[4] * dmg_rate[4];
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
      return char_debuff;
    }
  }
  
class fischl {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) 
  {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.forth_conste_buff = 0;
    this.sixth_conste_buff = 0;
    this.aggcount = 0;
    this.talent2_buff = 0;
    this.reaction_coeff = 0;
    this.skill_buff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    // JSON データを取得
    const response = await fetch("./data/character/char_data/fischl.json");
    const data = await response.json();
    // 攻撃方法に応じてダメージ率を計算
    let dmg_attack_rate = 0;
    let dmg_rate;
    
    if (attack_method == 1) {
      for (let i = 0; i < 5; i++) {
        dmg_attack_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 16) {
      const Aggravate = document.getElementById("Aggravate");
      if (Aggravate.checked) {
        this.reaction_coeff = 1.15;
        this.aggcount = parseInt(document.getElementById("fischl_agg_count").value);
      }
      const attack_count = parseInt(document.getElementById("fischl_attack_count").value);
      const fischl_talent2_count = parseInt(document.getElementById("fischl_talent2_count").value);
      dmg_attack_rate += parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count;
      dmg_attack_rate += parseFloat(data["元素スキル"]["詳細"][1]["数値"][this.parameter[3]]) + 0.8 * fischl_talent2_count;
      if (this.char_constellations > 1)
      {
        dmg_attack_rate += 2;
      }
      if (this.char_constellations == 4)
      {
        const fischl_sixth_effect_count = parseInt(document.getElementById("fischl_conste6_count").value);
        dmg_attack_rate += 0.3 * fischl_sixth_effect_count
      }
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
    return 0;
  }

  calculate_char_result_dmg_buff() {
    return 0;
  }

  calculate_basic_dmg(dmg_rate) {
    if (this.reaction_coeff > 0)
    {
      const resultStatusArray = this.result_status_array;
      const attckRate = resultStatusArray[4] * dmg_rate[4];
      let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
      return basicDmg;
    }
    else
    {
      const resultStatusArray = this.result_status_array;
      const attckRate = resultStatusArray[4] * dmg_rate[4];
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
    return char_debuff;
  }
}

class kujousara {
  constructor(base_status_array, fixed_status_array, result_status_array,parameter) 
  {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.sixth_conste_buff = 0;
    this.aggcount = 0;
    this.reaction_coeff = 0;
    this.skill_buff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    // JSON データを取得
    const response = await fetch("./data/character/char_data/kujousara.json");
    const data = await response.json();
    // 攻撃方法に応じてダメージ率を計算

    const kujou_skill_check = document.getElementById("kujousara");
    if (kujou_skill_check.checked)
    {
      const kujou_skill_level = parseInt(document.getElementById("kujousara_E_level").value);
      this.skill_buff = parseFloat(data["元素スキル"]["詳細"][1]["数値"][kujou_skill_level]) * this.base_status_array[4];
    }

    if (this.char_constellations == 4)
    {
      const sixth_conste_check = document.getElementById("traitCheckbox6");
      if (sixth_conste_check.checked)
      {
       this.sixth_conste_buff = 0.6;
      }
    }

    let dmg_attack_rate = 0;
    let dmg_rate;
    
    if (attack_method == 21) {
      const Aggravate = document.getElementById("Aggravate");
      if (Aggravate.checked) {
        this.reaction_coeff = 1.15;
        this.aggcount = parseInt(document.getElementById("kujousara_agg_count").value);
      }
      const attack_count = parseInt(document.getElementById("kujousara_attack_count").value);
      dmg_attack_rate += parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_attack_rate += parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]) * attack_count;
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
    return this.skill_buff;
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
    return this.sixth_conste_buff;
  }

  calculate_char_fixed_dmg_buff() {
    return 0;
  }

  calculate_char_result_dmg_buff() {
    return 0;
  }

  calculate_basic_dmg(dmg_rate) {
    if (this.reaction_coeff > 0)
    {
      const resultStatusArray = this.result_status_array;
      const attckRate = resultStatusArray[4] * dmg_rate[4];
      let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
      return basicDmg;
    }
    else
    {
      const resultStatusArray = this.result_status_array;
      const attckRate = resultStatusArray[4] * dmg_rate[4];
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
    return char_debuff;
  }
}

  class tighnari {
    constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
      this.dmg_rateCache = null;
      this.parameter = parameter;
      this.constValue = null;
      this.aggcount1 = 0;
      this.aggcount2= 0
      this.talent1_buff = 0;
      this.first_conste_buff = 0;
      this.second_conste_buff = 0;
      this.fourth_conste_buff = 0;
      this.sixth_conste_buff = 0;
      this.char_constellations = 0;
      this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    }
    
    async dmg_rate_data() {
      this.char_constellations = document.getElementById("char_constellations").value;
      
      // チェックボックスとチェックされた数を取得
      let agg_reaction = 0; // デフォルト値
      const agg = document.getElementById("Spread");
        if (agg) { // 要素が存在する場合
          agg_reaction = agg.checked ? 1 : 0;
        }
      if (agg_reaction == 1)
      {
        if (attack_method == 6)
        {
          const checkboxContainer = document.getElementById("select_reaction_method");
          const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
          const trueCount = Array.from(checkboxes).filter((checkbox) => checkbox.checked).length;
          const first_attack = document.getElementById("checkbox_0");
          // Spread チェックボックスの状態を取得
          if (first_attack.checked)
          {
            this.aggcount1 = 0;
            this.aggcount2 = trueCount * agg_reaction;
          }
          else
          {
            this.aggcount1 = 1 * agg_reaction;
            this.aggcount2 = (trueCount - 1) * agg_reaction;
          }
      
        }
        else
        {
          this.aggcount1 = agg_reaction * document.getElementById("tighnariburst1").value;
          this.aggcount2 = agg_reaction * document.getElementById("tighnariburst2").value;
        }
      }

      const talent1_check = document.getElementById("tighnari_talent1");
      if (talent1_check.checked)
      {
        this.talent1_buff = 50;
      }
    
      if (this.char_constellations > 0 && attack_method == 6)
      {
        this.first_conste_buff = 0.15;
      }

      if (this.char_constellations > 1)
      {
        const second_conste_check =  document.getElementById("traitCheckbox2");
        if (second_conste_check.checked)
        {
          this.second_conste_buff = 0.2;
        }
      }

      if (this.char_constellations > 2)
      {
        const fourth_conste_check =  document.getElementById("traitCheckbox4");
        if (fourth_conste_check.checked)
        {
          this.fourth_conste_buff = parseInt(document.getElementById("four_conste_buff").value);
        }
      }

      if (this.char_constellations > 3 && attack_method == 6)
      {
        this.sixth_conste_buff = 1.5;
      }
      
      // JSON データを取得
      const response = await fetch("./data/character/char_data/tighnari.json");
      const data = await response.json();
    
      // 攻撃方法に応じてダメージ率を計算
      let dmg_rate;
      let dmg_attck_rate = 0;
    
      if (attack_method == 6) {
        const dmg_rate1 = parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]);
        const dmg_rate2 = parseFloat(data["重撃"]["詳細"][1]["数値"][this.parameter[3]]);
        dmg_attck_rate = [dmg_rate1, dmg_rate2];
        dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
      } else if (attack_method == 21) {
        const dmg_rate1 = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
        const dmg_rate2 = parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
        dmg_attck_rate = [dmg_rate1, dmg_rate2];
        dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
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
      return this.fourth_conste_buff + this.talent1_buff;
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
      return this.first_conste_buff;
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
      return this.second_conste_buff;
    }
  
    calculate_char_result_dmg_buff() {
      return Math.min(this.result_status_array[2] * 0.0006, 0.6);
    }
  
    calculate_basic_dmg(dmg_rate) {
      if (attack_method == 6)
      {
        if (selectedWeaponId ==92)
        {
          const resultStatusArray = this.result_status_array;
          const attckRate = resultStatusArray[4] * (dmg_rate[4][0] * 3 + dmg_rate[4][1] * 12) / 100 + this.sixth_conste_buff + 12 * (1.6 + (this.weapon_rank -1) * 0.4) * resultStatusArray[2];
          let basicDmg = (attckRate + (this.aggcount1 + this.aggcount2)* 3 * 1.25 * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
          return basicDmg;
        }
        else
        {
        const resultStatusArray = this.result_status_array;
        const attckRate = resultStatusArray[4] * (dmg_rate[4][0] * 3 + dmg_rate[4][1] * 12) / 100 + this.sixth_conste_buff;
        let basicDmg = (attckRate + (this.aggcount1 + this.aggcount2)* 3 * 1.25 * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
        return basicDmg;
        }
      }
      else if (attack_method == 21)
      {
        const resultStatusArray = this.result_status_array;
        const attckRate = resultStatusArray[4] * (dmg_rate[4][0] * 6 + dmg_rate[4][1] * 6) / 100;
        let basicDmg = (attckRate + (this.aggcount1 + this.aggcount2) * 1.25 * (this.parameter[1]) * (1 + 5 * resultStatusArray[2] / (resultStatusArray[2] + 1200)));
        return basicDmg;
      }
    }
  
    update_status(fixed_status_array, result_status_array)
    {
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  
    calculate_char_debuff() {
      let char_debuff = [0,0,0];
      return char_debuff;
    }
  }
  
  class ganyu {
    constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
      this.dmg_rateCache = null;
      this.parameter = parameter;
      this.talent1_buff = 0;
      this.talent2_buff = 0;
      this.reaction_coeff = 0;
      this.fourth_conste_buff = 0;
      this.char_constellations = 0;
      this.Melt_react = [];
      this.Melt_nonreact = [];
      this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
      this.Q_melt_count = 0;
      this.Q_nonmelt_count = 0;
    }
    
    async dmg_rate_data() {
      this.char_constellations = document.getElementById("char_constellations").value;
      
      const Melt_cyro = document.getElementById("Melt-cyro");
      if (Melt_cyro.checked) {
        this.reaction_coeff = 1.5;
      }
      const talent1_check = document.getElementById("ganyu_talent1");
      if (talent1_check.checked && attack_method == 6)
      {
        this.talent1_buff = 0.2;
      }

      const talent2_check = document.getElementById("ganyu_talent2");
      if (talent2_check.checked && attack_method ==6)
      {
        this.talent2_buff = 0.2;
      }

      if (this.char_constellations > 2)
      {
        const fourth_conste_check =  document.getElementById("traitCheckbox4");
        if (fourth_conste_check.checked)
        {
          this.fourth_conste_buff = parseInt(document.getElementById("four_conste_buff").value) / 100;
        }
      }
      
      // JSON データを取得
      const response = await fetch("./data/character/char_data/ganyu.json");
      const data = await response.json();
    
      // 攻撃方法に応じてダメージ率を計算
      let dmg_rate;
      let dmg_attck_rate = 0;
    
      if (attack_method == 6) {
        const checkboxContainer = document.getElementById("select_reaction_method");
        const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');

        // チェックボックスの状態を格納するための配列を初期化

        // 各チェックボックスの状態を調べて配列に追加
        checkboxes.forEach(checkbox => {
          this.Melt_react.push(checkbox.checked ? 1 : 0);
          this.Melt_nonreact.push(checkbox.checked ? 0 : 1);
        });
        const dmg_rate1 = parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]);
        const dmg_rate2 = parseFloat(data["重撃"]["詳細"][1]["数値"][this.parameter[3]]);
        dmg_attck_rate = [dmg_rate1, dmg_rate2];
        dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
      } else if (attack_method == 21) {
        dmg_attck_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
        this.Q_melt_count = parseInt(document.getElementById("ganyu_Q").value)
        this.Q_nonmelt_count = parseInt(document.getElementById("ganyu_Q_count").value)
        dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
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
      return this.talent1_buff;
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
      return  this.talent2_buff + this.fourth_conste_buff;
    }
  
    calculate_char_result_dmg_buff() {
      return 0;
    }
  
    calculate_basic_dmg(dmg_rate) {
      let attckRate;
      let resultStatusArray = this.result_status_array;
      let basicDmg;
      if (attack_method == 6)
      {
        if (this.reaction_coeff == 1.5)
        {
          let Melt_attack_rate = this.Melt_react[0] * dmg_rate[4][0]  + this.Melt_react[1] * dmg_rate[4][1];
          let NonMelt_attack_rate = this.Melt_nonreact[0] * dmg_rate[4][0]  + this.Melt_nonreact[1] * dmg_rate[4][1];
          basicDmg = Melt_attack_rate * resultStatusArray[4] * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400))
                    + NonMelt_attack_rate * resultStatusArray[4];
          return basicDmg;
        }
        else
        {
          attckRate = dmg_rate[4][0] + dmg_rate[4][1];
          basicDmg = attckRate * resultStatusArray[4];
          return basicDmg;
        }
      }
      else if (attack_method == 21)
      {
        if (this.reaction_coeff == 1.5)
        {
          let Melt_attack_rate = this.Q_melt_count * dmg_rate[4];
          let NonMelt_attack_rate = (this.Q_nonmelt_count - this.Q_melt_count) * dmg_rate[4];
          basicDmg = Melt_attack_rate * resultStatusArray[4] * this.reaction_coeff * (1 + 2.78 * resultStatusArray[2] / (resultStatusArray[2] + 1400))
                    + NonMelt_attack_rate * resultStatusArray[4];
          return basicDmg;
        }
        else
        {
          attckRate = dmg_rate[4] * this.Q_nonmelt_count;
          basicDmg = attckRate * resultStatusArray[4];
          return basicDmg;
        }
      }
    }
  
    update_status(fixed_status_array, result_status_array)
    {
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  
    calculate_char_debuff() {
      let char_debuff = [0,0,0];
      if (this.char_constellations > 0)
      {
        const first_conste_check =  document.getElementById("traitCheckbox1");
        if (first_conste_check.checked)
        {
          char_debuff = [0.15,0,0];
        }
      }
      return char_debuff;
    }
  }

  class aratakiitto {
    constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
      this.dmg_rateCache = null;
      this.parameter = parameter;
      this.talent2_buff = 0;
      this.fourth_conste_buff = 0;
      this.sixth_conste_buff = 0;
      this.char_constellations = 0;
      this.attack_count;
      this.burst_talent_level;
      this.burst_buff_rate = 0;
      this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    }
    
    async dmg_rate_data() {
      this.char_constellations = document.getElementById("char_constellations").value;
      

      const talent2_check = document.getElementById("arataki_talent2");
      if (talent2_check.checked)
      {
        this.talent2_buff = 0.35;
      }

      if (this.char_constellations > 2)
      {
        const fourth_conste_check =  document.getElementById("traitCheckbox4");
        if (fourth_conste_check.checked)
        {
          this.fourth_conste_buff = 0.2;
        }
      }

      if (this.char_constellations > 3)
      {
        const sixth_conste_check =  document.getElementById("traitCheckbox6");
        if (sixth_conste_check.checked)
        {
          this.sixth_conste_buff = 0.7;
        }
      }
      
      // JSON データを取得
      const response = await fetch("./data/character/char_data/aratakiitto.json");
      const data = await response.json();
    
      const burst_check = document.getElementById("arataki_burst_effect");
      if (burst_check.checked)
      {
        this.burst_flag = 1;
        let burst_talent_level  = parseInt(document.getElementById("arataki_burst_level").value);
        this.burst_buff_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][burst_talent_level]);
        
      }
      // 攻撃方法に応じてダメージ率を計算
      let dmg_rate;
      let dmg_attck_rate = 0;
    
      if (attack_method == 6) {
        this.attack_count = parseInt(document.getElementById("arataki_count").value);
        const dmg_rate1 = parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]);
        const dmg_rate2 = parseFloat(data["重撃"]["詳細"][1]["数値"][this.parameter[3]]);
        dmg_attck_rate = [dmg_rate1, dmg_rate2];
        dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
        console.log(dmg_rate);
      } else if (attack_method == 16) {
        dmg_attck_rate = parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
        dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
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
      return this.base_status_array[4] * this.fourth_conste_buff;
    }
  
    calculate_char_result_attck() {
      return this.burst_buff_rate * this.fixed_status_array[1];
    }
  
    calculate_char_fixed_deff() {
      return this.base_status_array[1] * this.fourth_conste_buff;
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
      return this.sixth_conste_buff;
    }
  
    calculate_char_result_cd() {
      return 0;
    }
  
    calculate_char_fixed_dmg_buff() {
      return 0;
    }
  
    calculate_char_result_dmg_buff() {
      return 0;
    }
  
    calculate_basic_dmg(dmg_rate) {
      let attckRate;
      let resultStatusArray = this.result_status_array;
      let basicDmg;
      if (attack_method == 6)
      {
        attckRate = dmg_rate[4][0] * (this.attack_count - 1) + dmg_rate[4][1];
        basicDmg = attckRate * resultStatusArray[4] + this.talent2_buff * resultStatusArray[1] * this.attack_count + calculate_weapon_basedmg(this.attack_count, resultStatusArray, this.weapon_rank);
        return basicDmg;
      }
      else if (attack_method == 16)
      {
        basicDmg = dmg_rate[4] * resultStatusArray[4];
        return basicDmg;
      }
    }
  
    update_status(fixed_status_array, result_status_array)
    {
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  
    calculate_char_debuff() {
      let char_debuff = [0,0,0];
      return char_debuff;
    }
  }

  class albedo {
    constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
      this.dmg_rateCache = null;
      this.parameter = parameter;
      this.talent1_buff = 0;
      this.talent2_buff = 0;
      this.second_conste_buff = 0;
      this.sixth_conste_buff = 0;
      this.char_constellations = 0;
      this.attack_count;
      this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    }
    
    async dmg_rate_data() {
      this.char_constellations = document.getElementById("char_constellations").value;

      const talent2_check = document.getElementById("albedo_talent2");
      if (talent2_check.checked)
      {
        this.talent2_buff = 125;
      }

      if (this.char_constellations > 1)
      {
        const second_conste_check =  document.getElementById("traitCheckbox2");
        if (second_conste_check.checked)
        {
          const effect_count = parseInt(document.getElementById("albedo_second_const_buff").value);
          this.second_conste_buff = 0.3 * effect_count;
        }
      }

      if (this.char_constellations > 3)
      {
        const sixth_conste_check =  document.getElementById("traitCheckbox6");
        if (sixth_conste_check.checked)
        {
          this.sixth_conste_buff = 0.17;
        }
      }
      
      // JSON データを取得
      const response = await fetch("./data/character/char_data/albedo.json");
      const data = await response.json();
    
      // 攻撃方法に応じてダメージ率を計算
      let dmg_rate;
      let dmg_attck_rate = 0;
      let dmg_deff_rate = 0;
      if (attack_method == 16) {
        const talent1_check = document.getElementById("albedo_talent1");
        if (talent1_check.checked)
        {
          this.talent1_buff = 0.25;
        }
        this.attack_count = parseInt(document.getElementById("albedo_count").value);
        const dmg_rate1 = parseFloat(data["元素スキル"]["詳細"][1]["数値"][this.parameter[3]]);
        dmg_rate = [0, dmg_rate1, 0, 0, 0, 0, 0];
      } else if (attack_method == 21) {
        this.attack_count = parseInt(document.getElementById("albedo_count").value);
        dmg_attck_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
        dmg_deff_rate = parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
        dmg_rate = [0, dmg_deff_rate, 0, 0, dmg_attck_rate, 0, 0];
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
      return this.talent2_buff;
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
      return this.talent1_buff + this.sixth_conste_buff;
    }
  
    calculate_char_result_dmg_buff() {
      return 0;
    }
  
    calculate_basic_dmg(dmg_rate) {
      let attckRate;
      let resultStatusArray = this.result_status_array;
      let basicDmg;
      if (attack_method == 16)
      {
        attckRate = dmg_rate[1] * this.attack_count;
        basicDmg = attckRate * resultStatusArray[1] + calculate_weapon_basedmg(this.attack_count, resultStatusArray, this.weapon_rank);
        return basicDmg;
      }
      else if (attack_method == 21)
      {
        basicDmg = (dmg_rate[1] * this.attack_count + this.second_conste_buff * (this.attack_count + 1)) * resultStatusArray[1] + dmg_rate[4] * resultStatusArray[4];
        return basicDmg;
      }
    }
  
    update_status(fixed_status_array, result_status_array)
    {
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  
    calculate_char_debuff() {
      let char_debuff = [0,0,0];
      return char_debuff;
    }
  }

  class noelle {
    constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
      this.dmg_rateCache = null;
      this.parameter = parameter;
      this.sixth_conste_buff = 0;
      this.char_constellations = 0;
      this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    }
    
    async dmg_rate_data() {
      this.char_constellations = document.getElementById("char_constellations").value;
      
      // JSON データを取得
      const response = await fetch("./data/character/char_data/noelle.json");
      const data = await response.json();
    
      // 攻撃方法に応じてダメージ率を計算
      let dmg_rate;
      let dmg_attck_rate = 0;
      if (attack_method == 1) {
        this.sixth_conste_buff = parseFloat(data["元素爆発"]["詳細"][2]["数値"][this.parameter[3]]);
        if (this.char_constellations > 3)
        {
          const sixth_conste_check =  document.getElementById("traitCheckbox6");
          if (sixth_conste_check.checked)
          {
            this.sixth_conste_buff += 0.5;
          }
        }
        for (let i = 0; i < 4; i++) {
          dmg_attck_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
        }
        dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
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
      return this.sixth_conste_buff * this.result_status_array[1];
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
      return 0;
    }
  
    calculate_char_result_dmg_buff() {
      return 0;
    }
  
    calculate_basic_dmg(dmg_rate) {
      let resultStatusArray = this.result_status_array;
      let basicDmg;
      if (attack_method == 1)
      {
        basicDmg = dmg_rate[4] * resultStatusArray[4] + calculate_weapon_basedmg(4, resultStatusArray, this.weapon_rank);
        return basicDmg;
      }
    }
  
    update_status(fixed_status_array, result_status_array)
    {
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  
    calculate_char_debuff() {
      let char_debuff = [0,0,0];
      return char_debuff;
    }
  }

  class zhongli {
    constructor(base_status_array, fixed_status_array, result_status_array,parameter) {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
      this.dmg_rateCache = null;
      this.parameter = parameter;
      this.sixth_conste_buff = 0;
      this.char_constellations = 0;
      this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    }
    
    async dmg_rate_data() {
      this.char_constellations = document.getElementById("char_constellations").value;
      
      // JSON データを取得
      const response = await fetch("./data/character/char_data/zhongli.json");
      const data = await response.json();
    
      // 攻撃方法に応じてダメージ率を計算
      let dmg_rate;
      let dmg_attck_rate = 0;
      if (attack_method == 21) {
        dmg_attck_rate += parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
        dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
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
      return 0;
    }
  
    calculate_char_result_dmg_buff() {
      return 0;
    }
  
    calculate_basic_dmg(dmg_rate) {
      let resultStatusArray = this.result_status_array;
      let basicDmg;
      if (attack_method == 21)
      {
        basicDmg = dmg_rate[4] * resultStatusArray[4] + resultStatusArray[0] * 0.33;
        return basicDmg;
      }
    }
  
    update_status(fixed_status_array, result_status_array)
    {
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  
    calculate_char_debuff() {
      let char_debuff = [0,0,0];
      let skill_effect = document.getElementById("zhongli_skill");
      if (skill_effect.checked)
      {
        char_debuff = [0.2, 0, 0]
      }
      return char_debuff;
    }
  }


  function calculate_weapon_basedmg (attack_count, status_array, weapon_rank)
  {
    let base_dmg = 0;
    if (selectedWeaponId == 17 && attack_method >= 16 && attack_method <= 20)
    {
      base_dmg = status_array[1] * (weapon_rank + 3) * 0.1 * attack_count;
      return base_dmg;
    }
    else if (selectedWeaponId == 36 && attack_method >= 1 && attack_method <= 10)
    {
      base_dmg = status_array[1] * (weapon_rank + 3) * 0.1 * attack_count;
      return base_dmg;
    }
    return base_dmg;
  }
class dehya {
  constructor(base_status_array, parameter){
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.talent1effect = 0;
    this.first_conste_buff = 0;
    this.sixth_conste_buff = [0,0];
    this.char_constellations = 0;
    this.reaction_coeff = 0;
    this.talent2_buff = 0;
    this.skill_buff = 0;
    this.trueCount = 0;
  }

  async dmg_rate_data(){
    this.char_constellations = document.getElementById("char_constellations").value;
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_pyro = document.getElementById("Vaporize_pyro");
    if (Vaporize_pyro.checked && reaction_flag.checked)
    {
      this.reaction_coeff = 1.5;
    }
    const Melt_pyro = document.getElementById("Melt-pyro");
    if (Melt_pyro.checked && reaction_flag.checked)
    {
      this.reaction_coeff = 2;
    }
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/dehya.json");
    const data = await response.json();

    if (this.char_constellations > 0)
    {
      this.first_conste_buff = 0.2;
    }

    if (this.char_constellations > 3)
    {
      this.sixth_conste_buff[0] = 0.1;
      this.sixth_conste_buff[1] = parseFloat(document.getElementById("dehya_sixth_conste_buff").value);
    }
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;
    if (attack_method == 21)
    {
      const attack_count1 = parseInt(document.getElementById("dehya_1_count").value);
      const reaction_count1 = parseInt(document.getElementById("dehya_1_reactioncount").value);
      const attack_count2 = parseInt(document.getElementById("dehya_2_count").value);
      const reaction_count2 = parseInt(document.getElementById("dehya_2_reactioncount").value);

      const attack_rate1 = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
      const attack_rate2 = parseFloat(data["元素爆発"]["詳細"][2]["数値"][this.parameter[3]]);
      let hp_rate1 = parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
      let hp_rate2 = parseFloat(data["元素爆発"]["詳細"][3]["数値"][this.parameter[3]]);

      if (this.char_constellations > 0)
      {
        hp_rate1 += 0.06;
        hp_rate2 += 0.06;
      }

      let attack_react_dmgrate = reaction_count1 * attack_rate1 + reaction_count2 * attack_rate2;
      let attack_nonreact_dmgrate = (attack_count1 - reaction_count1) * attack_rate1 + (attack_count2 - reaction_count2) * attack_rate2;
      let Hp_react_dmgrate = reaction_count1 * hp_rate1 + reaction_count2 * hp_rate2;
      let Hp_nonreact_dmgrate = (attack_count1 - reaction_count1) * hp_rate1 + (attack_count2 - reaction_count2) * hp_rate2;

      dmg_rate = [[Hp_react_dmgrate, Hp_nonreact_dmgrate], 0, 0, 0, [attack_react_dmgrate, attack_nonreact_dmgrate], 0, 0];
    }
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return this.base_status_array[0] * this.first_conste_buff;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.sixth_conste_buff[0];
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return this.sixth_conste_buff[1];
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status){
    let basicDmg;
    let attckRate;
      if (this.reaction_coeff > 0)
      {
        attckRate = status[0] * dmg_rate[0][0] + status[4] * dmg_rate[4][0];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                  + status[0] * dmg_rate[0][1] + status[4] * dmg_rate[4][1];
      }
      else
      {
        basicDmg =  (dmg_rate[0][0] + dmg_rate[0][1]) * status[0] + (dmg_rate[4][0] + dmg_rate[4][1]) * status[4];
      }
      return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class yoimiya {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
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
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_pyro = document.getElementById("Vaporize_pyro");
    if (Vaporize_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 1.5;
    }
    const Melt_pyro = document.getElementById("Melt-pyro");
    if (Melt_pyro.checked && reaction_flag.checked) {
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
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return this.base_status_array[4] * this.first_conste_buff;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
      return this.second_conste_buff + this.talent1_buff;
  }

  calculate_char_result_dmg_buff(status) {
      return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      if (attack_method == 1)
      {
        if (this.char_constellations < 4)
        {
          attckRate = status[4] * dmg_rate[4][0] * this.skill_buff;
          basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                    + status[4] * dmg_rate[4][1] * this.skill_buff;
          return basicDmg;
        }
        else
        {
          basicDmg = (status[4] * dmg_rate[4] * this.skill_buff / 3) * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                    + status[4] * dmg_rate[4] * this.skill_buff * 2 / 3;
          return basicDmg;
        }
      }
      else
      {
        attckRate = status[4] * dmg_rate[4];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400));
        return basicDmg;
      }
    }
    else
    {
      if (attack_method == 1)
      {
        if( this.char_constellations < 4)
        {
          attckRate = status[4] * (dmg_rate[4][0] + dmg_rate[4][1]) * this.skill_buff;
          basicDmg = attckRate;
          return basicDmg;
        }
        else
        {
          attckRate = status[4] * dmg_rate[4] * this.skill_buff;
          basicDmg = attckRate;
          return basicDmg;
        }
      }
      else
      {
        attckRate = status[4] * dmg_rate[4];
        basicDmg = attckRate;
        return basicDmg;
      }
        attckRate = status[4] * dmg_rate[4] * this.attack_count / 100;
    }
    return attckRate;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class hutao {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
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
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_pyro = document.getElementById("Vaporize_pyro");
    if (Vaporize_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 1.5;
    }
    const Melt_pyro = document.getElementById("Melt-pyro");
    if (Melt_pyro.checked && reaction_flag.checked) {
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
      });
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
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return Math.min(4 * this.base_status_array[4], this.skill_buff * status[0]);
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.sixth_conste_buff;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
      return this.talent2_buff;
  }

  calculate_char_result_dmg_buff(status) {
      return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      if (attack_method == 1)
      {
        attckRate = status[4] * dmg_rate[4][0];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                  + status[4] * dmg_rate[4][1];
      }
      else
      {
        attckRate = status[4] * dmg_rate[4];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400));
      }
    }
    else
    {
      if (attack_method == 1)
      {
        attckRate = status[4] * (dmg_rate[4][0] + dmg_rate[4][1]);
        basicDmg = attckRate;
      }
      else
      {
        attckRate = status[4] * dmg_rate[4];
        basicDmg = attckRate;
      }
    }
    return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class klee {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.talent1effect = 0;
    this.second_conste_buff = 0;
    this.sixth_conste_buff = 0;
    this.char_constellations = 0;
    this.reaction_coeff = 0;
    this.talent1_buff = 0;
    this.trueCount = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_pyro = document.getElementById("Vaporize_pyro");
    if (Vaporize_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 1.5;
    }
    const Melt_pyro = document.getElementById("Melt-pyro");
    if (Melt_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 2;
    }
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/klee.json");
    const data = await response.json();

    if (this.char_constellations > 1)
    {
      const second_conste_check = document.getElementById("traitCheckbox2");
      if (second_conste_check.checked)
      {
        this.second_conste_buff = 0.23;
      }
    }

    if (this.char_constellations > 3)
    {
      const sixth_conste_check = document.getElementById("traitCheckbox6");
      if (sixth_conste_check.checked)
      {
        this.sixth_conste_buff = 0.1;
      }
    }
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;
    let elm_react_dmgrate = 0;
    let elm_nonreact_dmgrate = 0;

    if (attack_method == 1) {
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = []
      let elm_nonreact = [];
      // 各チェックボックスの状態を調べて配列に追加
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);

      });
        for (let i = 0; i < 3; i++) {
          elm_react_dmgrate += elm_react[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
          elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
        }
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    } else if (attack_method == 6) {
      const talent1_check = document.getElementById("klee_talent1");
      if (talent1_check.checked)
      {
        this.talent1_buff = 0.5;
      }
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = []
      let elm_nonreact = [];
      // 各チェックボックスの状態を調べて配列に追加
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);

      });
        for (let i = 0; i < 1; i++) {
          elm_react_dmgrate += elm_react[i] * parseFloat(data["重撃"]["詳細"][i]["数値"][this.parameter[3]]);
          elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["重撃"]["詳細"][i]["数値"][this.parameter[3]]);
        }
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    } else if (attack_method == 16) {
      const attack_count1 = parseInt(document.getElementById("klee_1_count").value);
      const reaction_count1 = parseInt(document.getElementById("klee_1_reactioncount").value);
      const attack_count2 = parseInt(document.getElementById("klee_2_count").value);
      const reaction_count2 = parseInt(document.getElementById("klee_2_reactioncount").value);

      const attack_rate1 = parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
      const attack_rate2 = parseFloat(data["元素スキル"]["詳細"][1]["数値"][this.parameter[3]]);

      elm_react_dmgrate = reaction_count1 * attack_rate1 + reaction_count2 * attack_rate2;
      elm_nonreact_dmgrate = (attack_count1 - reaction_count1) * attack_rate1 + (attack_count2 - reaction_count2) * attack_rate2;

      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    } else if (attack_method == 21) {

      const attack_count = parseFloat(document.getElementById("klee_Q_attackcount").value);
      const reaction_count = parseFloat(document.getElementById("klee_Q_reactioncount").value);

      const attack_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);

      elm_react_dmgrate = reaction_count * attack_rate;
      elm_nonreact_dmgrate = (attack_count - reaction_count) * attack_rate;

      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    }
  
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
      return this.sixth_conste_buff + this.talent1_buff;
  }

  calculate_char_result_dmg_buff(status) {
      return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
        attckRate = status[4] * dmg_rate[4][0];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                  + status[4] * dmg_rate[4][1];
        return basicDmg;
      
    }
    else
    {
      attckRate = status[4] * (dmg_rate[4][0] + dmg_rate[4][1]);
      basicDmg = attckRate;
      return basicDmg;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0, this.second_conste_buff, 0];
    return char_debuff;
  }
}

class diluc {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.first_conste_buff = 0;
    this.second_conste_buff = 0;
    this.fourth_conste_buff = 0;
    this.sixth_conste_buff = 0;
    this.char_constellations = 0;
    this.reaction_coeff = 0;
    this.talent2_buff = 0;
    this.trueCount = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_pyro = document.getElementById("Vaporize_pyro");
    if (Vaporize_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 1.5;
    }
    const Melt_pyro = document.getElementById("Melt-pyro");
    if (Melt_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 2;
    }
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/diluc.json");
    const data = await response.json();

    const diluc_talent2_check = document.getElementById("diluc_talent2");
    if (diluc_talent2_check.checked)
    {
      this.talent2_buff = 0.2;
    }

    if (this.char_constellations > 0)
    {
      const first_conste_check = document.getElementById("traitCheckbox1");
      if (first_conste_check.checked)
      {
        this.first_conste_buff = 0.15;
      }
    }

    if (this.char_constellations > 1)
    {
      const second_conste_check = document.getElementById("traitCheckbox2");
      if (second_conste_check.checked)
      {
        this.second_conste_buff = parseFloat(document.getElementById("diluc_conste2").value) / 100;
      }
    }

    if (this.char_constellations > 2 && attack_method == 16)
    {
      const fourth_conste_check = document.getElementById("traitCheckbox4");
      if (fourth_conste_check.checked)
      {
        this.fourth_conste_buff = 0.4;
      }
    }
    if (this.char_constellations > 3 && attack_method == 1)
    {
      const sixth_conste_check = document.getElementById("traitCheckbox6");
      if (sixth_conste_check.checked)
      {
        this.fourth_conste_buff = 0.3;
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
      });
        let elm_react_dmgrate = 0;
        let elm_nonreact_dmgrate = 0;
        for (let i = 0; i < 4; i++) {
          elm_react_dmgrate += elm_react[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
          elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
        }
        dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    }
    else if (attack_method == 16) {
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = []
      let elm_nonreact = [];
      // 各チェックボックスの状態を調べて配列に追加
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);
      });
        let elm_react_dmgrate = 0;
        let elm_nonreact_dmgrate = 0;
        if (this.char_constellations < 3)
        {
          for (let i = 0; i < 3; i++) {
            elm_react_dmgrate += elm_react[i] * parseFloat(data["元素スキル"]["詳細"][i]["数値"][this.parameter[3]]);
            elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["元素スキル"]["詳細"][i]["数値"][this.parameter[3]]);
          }
          dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
        }
        else
        {
          const first_react_dmgrate =  elm_react[0] * parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
          const first_nonreact_dmgrate = elm_nonreact[0] * parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
          for (let i = 1; i < 3; i++) {
            elm_react_dmgrate += elm_react[i] * parseFloat(data["元素スキル"]["詳細"][i]["数値"][this.parameter[3]]);
            elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["元素スキル"]["詳細"][i]["数値"][this.parameter[3]]);
          }
          dmg_rate = [0, 0, 0, 0, [first_react_dmgrate, first_nonreact_dmgrate, elm_react_dmgrate, elm_nonreact_dmgrate], 0, 0];
        }
    }
    else if (attack_method == 21) {
        let diluc_1_count = parseInt(document.getElementById("diluc_1_count").value);
        let diluc_2_count = parseInt(document.getElementById("diluc_2_count").value);
        let diluc_3_count = parseInt(document.getElementById("diluc_3_count").value);
        let diluc_1_reactioncount = parseInt(document.getElementById("diluc_1_reactioncount").value);
        let diluc_2_reactioncount = parseInt(document.getElementById("diluc_2_reactioncount").value);
        let diluc_3_reactioncount = parseInt(document.getElementById("diluc_3_reactioncount").value);
        let elm_react_dmgrate = 0;
        let elm_nonreact_dmgrate = 0;
        let diluc_1_dmgrate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
        let diluc_2_dmgrate = parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
        let diluc_3_dmgrate = parseFloat(data["元素爆発"]["詳細"][2]["数値"][this.parameter[3]]);
        elm_react_dmgrate = diluc_1_dmgrate * diluc_1_reactioncount + diluc_2_dmgrate * diluc_2_reactioncount + diluc_3_dmgrate * diluc_3_count;
        elm_nonreact_dmgrate = diluc_1_dmgrate * (diluc_1_count - diluc_1_reactioncount) + diluc_2_dmgrate * (diluc_2_count - diluc_2_reactioncount) + diluc_3_dmgrate * (diluc_3_count - diluc_3_reactioncount);

        dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    }
  
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return this.second_conste_buff * this.base_status_array[4];
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.talent2_buff + this.first_conste_buff + this.sixth_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      if (attack_method != 16)
      {
        attckRate = status[4] * dmg_rate[4][0];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                  + status[4] * dmg_rate[4][1];
      }
      else
      {
        if (this.fourth_conste_buff > 0)
        {
          attckRate = status[4] * (dmg_rate[4][0] + dmg_rate[4][2] * (status[7] + 0.4) / status[7]);
          basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                    + status[4] * (dmg_rate[4][1] + dmg_rate[4][3] * (status[7] + 0.4) / status[7]);
        }
        else
        {
          attckRate = status[4] * dmg_rate[4][0];
          basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                    + status[4] * dmg_rate[4][1];
        }
      }
    }
    else
    {
      if (attack_method != 16)
      {
        attckRate = status[4] * (dmg_rate[4][0] + dmg_rate[4][1]);
        basicDmg = attckRate;
      }
      else
      {
        if (this.fourth_conste_buff > 0)
        {
          attckRate = status[4] * (dmg_rate[4][0] + dmg_rate[4][1] + (dmg_rate[4][2] + dmg_rate[4][3]) * (status[7] + 0.4) / status[7]);
          basicDmg = attckRate;
        }
        else
        {
          attckRate = status[4] * (dmg_rate[4][0] + dmg_rate[4][1]);
          basicDmg = attckRate;
        }
      }
    }
    return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class yanfei {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
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
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_pyro = document.getElementById("Vaporize_pyro");
    if (Vaporize_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 1.5;
    }
    const Melt_pyro = document.getElementById("Melt-pyro");
    if (Melt_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 2;
    }
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/yanfei.json");
    const data = await response.json();

    if (this.char_constellations > 1)
    {
      const second_conste_check = document.getElementById("traitCheckbox2");
      if (second_conste_check.checked && attack_method == 6)
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
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.second_conste_buff;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
      return this.talent1_buff + this.burst_buff;
  }

  calculate_char_result_dmg_buff(status) {
      return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      if (attack_method == 1)
      {
        attckRate = status[4] * dmg_rate[4][0];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                  + status[4] * dmg_rate[4][1];
      }
      else if (attack_method == 6)
      {
        attckRate = status[4] * dmg_rate[4] + status[5] * 0.8 * status[4];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400));
      }
      else 
      {
        attckRate = status[4] * dmg_rate[4];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400));
      }
    }
    else
    {
      if (attack_method == 1)
      {
        attckRate = status[4] * (dmg_rate[4][0] + dmg_rate[4][1])
        basicDmg = attckRate;
      }
      else if (attack_method == 6)
      {
        attckRate = status[4] * dmg_rate[4] + status[5] * 0.8 * status[4];
        basicDmg = attckRate;
      }
      else 
      {
        attckRate = status[4] * dmg_rate[4];
        basicDmg = attckRate;
      }
    }
    return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class xinyan {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.talent1effect = 0;
    this.char_constellations = 0;
    this.second_conste_buff = 0;
    this.fourth_conste_buff = 0;
    this.sixth_conste_buff = 0;
    this.talent2_buff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/xinyan.json");
    const data = await response.json();

    const talent2_check = document.getElementById("xinyan_talent2");
    if (talent2_check.checked)
    {
      this.talent2_buff = 0.15;
    }

    if (this.char_constellations > 1 && attack_method == 21)
    {
      this.second_conste_buff = 1;
    }

    if (this.char_constellations > 2)
    {
      const fourth_conste_check = document.getElementById("traitCheckbox4");
      if (fourth_conste_check.checked)
      {
        this.fourth_conste_buff = 0.15;
      }
    }

    if (this.char_constellations > 3 && attack_method == 6)
    {
      const sixth_conste_check = document.getElementById("traitCheckbox6");
      if (sixth_conste_check.checked)
      {
        this.sixth_conste_buff = 0.5;
      }
    }
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;

    if (attack_method == 1) {   
      for (let i = 0; i < 4; i++) {
        dmg_attack_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 6) {
      const attack_count1 = parseInt(document.getElementById("xinyan1_count").value);
      const attack_count2 = parseInt(document.getElementById("xinyan2_count").value);

      dmg_attack_rate = parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count1 + parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count2;
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 21) {
      dmg_attack_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }
  
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    let attack_buff = 0;
    if (this.char_constellations == 4)
    {
      attack_buff = status[1] * this.sixth_conste_buff
    }
    return attack_buff;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.second_conste_buff;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
      return this.talent2_buff;
  }

  calculate_char_result_dmg_buff(status) {
      return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    attckRate = status[4] * dmg_rate[4];
    basicDmg = attckRate;
    return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [this.fourth_conste_buff,0,0];
    return char_debuff;
  }
}

class bennett {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.talent1effect = 0;
    this.first_conste_buff = 0;
    this.sixth_conste_buff = 0;
    this.char_constellations = 0;
    this.reaction_coeff = 0;
    this.bennett_Q_buff = 0
    this.trueCount = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_pyro = document.getElementById("Vaporize_pyro");
    if (Vaporize_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 1.5;
    }
    const Melt_pyro = document.getElementById("Melt-pyro");
    if (Melt_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 2;
    }

    // JSON データを取得
    const response = await fetch("./data/character/char_data/bennett.json");
    const data = await response.json();

    const bennett_Q_check = document.getElementById("bennett_Q");
    if (bennett_Q_check.checked)
    {
      const bennett_Q_level = parseInt(document.getElementById("bennett_Q_level").value);
      this.bennett_Q_buff = parseFloat(data["元素爆発"]["詳細"][1]["数値"][bennett_Q_level]);
    }

    if (this.char_constellations > 0)
    {
      this.first_conste_buff = 0.2;
    }

    if (this.char_constellations > 3)
    {
      const sixth_conste_check = document.getElementById("traitCheckbox6");
      if (sixth_conste_check.checked)
      {
        this.sixth_conste_buff = 0.15;
      }
    }
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;
    let initial_index;
    let final_index;

    if (attack_method == 16) {
      initial_index = 0;
      final_index = 1;
    }
    else if (attack_method == 17) {
      initial_index = 1;
      final_index = 2;
      if (this.char_constellations > 2)
      {
        initial_index = 1;
        final_index = 3;
      }
    }
    else if (attack_method == 18) {
      initial_index = 4;
      final_index = 3;
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
    
      let elm_react_dmgrate = 0;
      let elm_nonreact_dmgrate = 0;
      for (let i = 0; i < final_index; i++) {
        elm_react_dmgrate += elm_react[i] * parseFloat(data["元素スキル"]["詳細"][i + initial_index]["数値"][this.parameter[3]]);
        elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["元素スキル"]["詳細"][i + initial_index]["数値"][this.parameter[3]]);
      }
    dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    console.log(dmg_rate);
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return (this.first_conste_buff + this.bennett_Q_buff) * this.base_status_array[4];
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
      return this.sixth_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
      return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      attckRate = status[4] * dmg_rate[4][0];
      basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                + status[4] * dmg_rate[4][1];
      return basicDmg;
    }
    else
    {
      attckRate = status[4] * (dmg_rate[4][0] + dmg_rate[4][1]);
      basicDmg = attckRate;
      return basicDmg;
    }
    return attckRate;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class xiangling {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
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
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_pyro = document.getElementById("Vaporize_pyro");
    if (Vaporize_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 1.5;
    }
    const Melt_pyro = document.getElementById("Melt-pyro");
    if (Melt_pyro.checked && reaction_flag.checked) {
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
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return this.talent2 ;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
      return this.six_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
      return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
        attckRate = status[4] * dmg_rate[4];
        basicDmg = attckRate * this.reaction_count * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                  + attckRate * (this.attack_count - this.reaction_count);
    }
    else
    {
      basicDmg = status[4] * dmg_rate[4] * this.attack_count;
    }
    return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [this.first_conste_buff,0,0];
    return char_debuff;
  }
}

class amber {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.talent2_buff = 0;
    this.sixth_conste_buff = 0;
    this.char_constellations = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_pyro = document.getElementById("Vaporize_pyro");
    if (Vaporize_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 1.5;
    }
    const Melt_pyro = document.getElementById("Melt-pyro");
    if (Melt_pyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 2;
    }
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/amber.json");
    const data = await response.json();

    if (this.char_constellations > 3)
    {
      const sixth_conste_buff_conste_check = document.getElementById("traitCheckbox6");
      if (sixth_conste_buff_conste_check.checked)
      {
        this.sixth_conste_buff = 0.15;
      }
    } 

    let talent2_box = document.getElementById("talent2checkbox2");
    if (talent2_box.checked) 
    {
      this.talent2_buff = 0.15;
    }
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;

    if (attack_method == 6) {
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
        let attack_count = 1;
        if(this.char_constellations > 0)
        {
          attack_count = 2
        }
        for (let i = 0; i < attack_count; i++) {
          elm_react_dmgrate += elm_react[i] * parseFloat(data["重撃"]["詳細"][i]["数値"][this.parameter[3]]);
          elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["重撃"]["詳細"][i]["数値"][this.parameter[3]]);
        }
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    }
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return (this.talent2_buff + this.sixth_conste_buff) * this.base_status_array[4];
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
      return 0;
  }

  calculate_char_result_dmg_buff(status) {
      return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      attckRate = status[4] * dmg_rate[4][0];
      basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                + status[4] * dmg_rate[4][1];
    }
    else
    {
      basicDmg = status[4] * (dmg_rate[4][0] + dmg_rate[4][1]);
    }
    return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class nirou {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
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
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_hydro = document.getElementById("Vaporize-hydro");
    if (Vaporize_hydro.checked && reaction_flag.checked)
    {
      this.reaction_coeff = 2;
    }
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

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return this.talent1_buff;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return Math.min(0.3,this.sixth_conste_buff * (status[0] / 1000) * 0.006);
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return  Math.min(0.6,this.sixth_conste_buff * (status[0] / 1000) * 0.012);
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.fourth_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      if (attack_method == 16)
      {
        attckRate = status[0] * (dmg_rate[0][0] + dmg_rate[0][2] * (status[7] + this.first_conste_buff) / status[7]);
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                + status[0] * (dmg_rate[0][1] + dmg_rate[0][3] * (status[7] + this.first_conste_buff) / status[7]);
      }
      else
      {
        attckRate = status[0] * dmg_rate[0][0];
        basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                  + status[0] * dmg_rate[0][1];
      }
    }
    else
    {
      if (attack_method == 16)
      {
        basicDmg = status[0] * (dmg_rate[0][0] + dmg_rate[0][1] + dmg_rate[0][2] + dmg_rate[0][3] * (status[7] + this.first_conste_buff) / status[7]);
      }
      else
      {
        basicDmg = status[0] * (dmg_rate[0][0] + dmg_rate[0][1]);
      }
    }
    return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [this.second_conste_buff,0,0];
    return char_debuff;
  }
}

class yelan {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
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
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_hydro = document.getElementById("Vaporize-hydro");
    if (Vaporize_hydro.checked && reaction_flag.checked)
    {
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
    let elm_react_dmgrate = 0;
    let elm_nonreact_dmgrate = 0;

    if (attack_method == 21) {   
      const attack_count = parseInt(document.getElementById("yelan_burst_count").value);
      const react_count = parseInt(document.getElementById("yelan_react_count").value);
      
        elm_react_dmgrate += react_count * parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
        elm_nonreact_dmgrate += (attack_count - react_count) * parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);

      if (this.char_constellations > 1)
      {
        const attack_count2 = parseInt(document.getElementById("yelan_add_count").value);
        const react_count2 = parseInt(document.getElementById("yelan_add_react_count").value);
        elm_react_dmgrate += react_count2 * 0.14;
        elm_nonreact_dmgrate += (attack_count2 - react_count2) * 0.14;
      }
      dmg_rate = [[elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0, 0, 0, 0, 0];
    } else if (attack_method == 16) {
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = []
      let elm_nonreact = [];
      // 各チェックボックスの状態を調べて配列に追加
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);
      });
      for (let i = 0; i < 1; i++) {
        elm_react_dmgrate += elm_react[i] * parseFloat(data["元素スキル"]["詳細"][i]["数値"][this.parameter[3]]);
        elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["元素スキル"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [[elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0, 0, 0, 0, 0];
    } else if (attack_method == 6) {
      const attack_count = parseInt(document.getElementById("yelan_attack_count").value);
      const react_count = parseInt(document.getElementById("yelan_react_count").value);

      elm_react_dmgrate += react_count * parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]) * 1.56;
      elm_nonreact_dmgrate += (attack_count - react_count) * parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]) * 1.56;
      dmg_rate = [[elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0, 0, 0, 0, 0];
    }
  
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return this.base_status_array[0] * this.talent1_buff;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
      return this.talent2_buff;
  }

  calculate_char_result_dmg_buff(status) {
      return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      attckRate = status[0] * dmg_rate[0][0];
      basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                + status[0] * dmg_rate[0][1];
    }
    else
    {
      attckRate = status[0] * (dmg_rate[0][0] + dmg_rate[0][1])
      basicDmg = attckRate;
    }
    return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class kamisatoayato {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
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
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_hydro = document.getElementById("Vaporize-hydro");
    if (Vaporize_hydro.checked && reaction_flag.checked)
    {
      this.reaction_coeff = 2;
    }
  
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
  
      let attack_count1 = parseInt(document.getElementById("ayato_attack1_count").value);
      let attack_count2 = parseInt(document.getElementById("ayato_attack2_count").value);
      let attack_count3 = parseInt(document.getElementById("ayato_attack3_count").value);

      let react_count1 = parseInt(document.getElementById("ayato_react1_count").value);
      let react_count2 = parseInt(document.getElementById("ayato_react2_count").value);
      let react_count3 = parseInt(document.getElementById("ayato_react3_count").value);

      elm_react_dmgrate += react_count1 * parseFloat(data["通常攻撃"]["詳細"][0]["数値"][this.parameter[3]])
                        +  react_count2 * parseFloat(data["通常攻撃"]["詳細"][1]["数値"][this.parameter[3]])
                        +  react_count3 * parseFloat(data["通常攻撃"]["詳細"][2]["数値"][this.parameter[3]]);
      elm_nonreact_dmgrate += (attack_count1 - react_count1) * parseFloat(data["通常攻撃"]["詳細"][0]["数値"][this.parameter[3]])
                           +  (attack_count2 - react_count2) * parseFloat(data["通常攻撃"]["詳細"][1]["数値"][this.parameter[3]])
                           +  (attack_count3 - react_count3) * parseFloat(data["通常攻撃"]["詳細"][2]["数値"][this.parameter[3]]);

      if (this.char_constellations == 4)
      {
        let attack_count4 = parseInt(document.getElementById("ayato_attack4_count").value);
        let react_count4 = parseInt(document.getElementById("ayato_react4_count").value);

        elm_react_dmgrate += 4.5 * react_count4;
        elm_nonreact_dmgrate += 4.5 * (attack_count4 - react_count4);

      }
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate, elm_nonreact_dmgrate], 0, 0];
      console.log(dmg_rate);
      }
    return dmg_rate;
  }

  calculate_char_fixed_hp(status) {
    return this.base_status_array[0] * this.second_conste_buff;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.first_conste_buff + this.burst_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      attckRate = status[4] * dmg_rate[4][0] + status[0] * this.skill_buff * this.buff_effect_count;
      basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                + status[4] * dmg_rate[4][1] + status[0] * this.skill_buff * (3 - this.buff_effect_count);
      return basicDmg;
    }
    else
    {
      attckRate = status[4] * (dmg_rate[4][0] + dmg_rate[4][1]) + status[0] * this.skill_buff * 3;
      basicDmg = attckRate;
      return basicDmg;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class xingqiu {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
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
    const reaction_flag = document.getElementById("reactionon_flag");
    const Vaporize_hydro = document.getElementById("Vaporize-hydro");
    if (Vaporize_hydro.checked && reaction_flag.checked)
    {
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

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return 0.2;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
        attckRate = status[4] * dmg_rate[4][0];
        basicDmg = (attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                  + status[4] * dmg_rate[4][1]) * this.forth_conste_buff;
        return basicDmg;
    }
    else
    {
        attckRate = status[4] * (dmg_rate[4][0] + dmg_rate[4][1]) * this.forth_conste_buff;
        basicDmg = attckRate;
        return basicDmg;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [this.second_conste_buff,0,0];
    return char_debuff;
  }
}

class kamisatoayaka {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.talent1effect = 0;
    this.fourth_conste_buff = 0;
    this.char_constellations = 0;
    this.reaction_coeff = 0;
    this.talent1_buff = 0;
    this.talent2_buff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    const Melt_cyro = document.getElementById("Melt-cyro");
    const reaction_flag = document.getElementById("reactionon_flag");
    if (Melt_cyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 1.5;
    }
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/kamisatoayaka.json");
    const data = await response.json();

    if (attack_method == 1 || attack_method == 6)
    {
      const talent1_check = document.getElementById("kamisatoayaka_talent1");
      if (talent1_check.checked)
      {
        this.talent1_buff = 0.3;
      }
    }

    const talent2_check = document.getElementById("kamisatoayaka_talent2");
    if (talent2_check.checked)
    {
      this.talent2_buff = 0.18;
    }

    if (this.char_constellations > 2)
    {
      const fourth_conste_check = document.getElementById("traitCheckbox4");
      if (fourth_conste_check.checked)
      {
        this.fourth_conste_buff = 0.3;
      }
    }
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;
    let elm_react_dmgrate = 0;
    let elm_nonreact_dmgrate = 0;

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
        for (let i = 0; i < 7; i++) {
          elm_react_dmgrate += elm_react[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
          elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
        }
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    } else if (attack_method == 6) {
      const attack_count = parseInt(document.getElementById("kamisatoayaka_count").value);
      const react_count = parseInt(document.getElementById("kamisatoayaka_melt_count").value);

      elm_react_dmgrate += parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]) * react_count
      elm_nonreact_dmgrate += parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]) * (attack_count - react_count)
      
      if (this.char_constellations == 4)
      {
        const sixth_attack_count = parseInt(document.getElementById("kamisatoayaka_sixth_count").value);
        const sixth_react_count = parseInt(document.getElementById("kamisatoayaka_sixth_melt_count").value);

      elm_react_dmgrate += (parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]) + 2.98) * sixth_react_count
      elm_nonreact_dmgrate += (parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]) + 2.98) * (sixth_attack_count - sixth_react_count)
      }
      
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    }else if (attack_method == 16) {
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = []
      let elm_nonreact = [];
      // 各チェックボックスの状態を調べて配列に追加
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);
      });
        elm_react_dmgrate += elm_react[0] * parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
        elm_nonreact_dmgrate += elm_nonreact[0] * parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    } else if (attack_method == 21) {
      const attack_count1 = parseInt(document.getElementById("kamisatoayaka_attack_count1").value);
      const attack_count3 = parseInt(document.getElementById("kamisatoayaka_attack_count3").value);
      const react_count1 = parseInt(document.getElementById("kamisatoayaka_melt_count1").value);
      const react_count3 = parseInt(document.getElementById("kamisatoayaka_melt_count3").value);

      elm_react_dmgrate += parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * react_count1
                         + parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]) * react_count3;
      elm_nonreact_dmgrate += parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * (attack_count1 - react_count1)
                            + parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]) * (attack_count3 - react_count3);
      if(this.char_constellations > 1)
      {
        const attack_count2 = parseInt(document.getElementById("kamisatoayaka_attack_count2").value);
        const attack_count4 = parseInt(document.getElementById("kamisatoayaka_attack_count4").value);
        const react_count2 = parseInt(document.getElementById("kamisatoayaka_melt_count2").value);
        const react_count4 = parseInt(document.getElementById("kamisatoayaka_melt_count4").value);
        elm_react_dmgrate += (parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * react_count2
                           + parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]) * react_count4) * 0.2;
        elm_nonreact_dmgrate += (parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * (attack_count2 - react_count2)
                              + parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]) * (attack_count4 - react_count4)) * 0.2;
      }
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    }
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
      return this.talent1_buff + this.talent2_buff;
  }

  calculate_char_result_dmg_buff(status) {
      return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
      attckRate = status[4] * dmg_rate[4][0];
      basicDmg = attckRate * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                + status[4] * dmg_rate[4][1];
    }
    else
    {
      basicDmg =  status[4] * (dmg_rate[4][0] + dmg_rate[4][1]);
    }
    return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [0,this.fourth_conste_buff,0];
    return char_debuff;
  }
}

class eula {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
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
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
      return this.first_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
      return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (attack_method == 21)
    {
      attckRate = status[4] * dmg_rate[4] * this.forth_conste_buff;
      basicDmg = attckRate;
      return basicDmg;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [this.debuff,0,0];
    return char_debuff;
  }
}

class ganyu {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
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
    const reaction_flag = document.getElementById("reactionon_flag");
    if (Melt_cyro.checked && reaction_flag.checked) {
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
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.talent1_buff;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return  this.talent2_buff + this.fourth_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let attckRate;
    let basicDmg;
    if (attack_method == 6)
    {
      if (this.reaction_coeff > 0)
      {
        let Melt_attack_rate = this.Melt_react[0] * dmg_rate[4][0]  + this.Melt_react[1] * dmg_rate[4][1];
        let NonMelt_attack_rate = this.Melt_nonreact[0] * dmg_rate[4][0]  + this.Melt_nonreact[1] * dmg_rate[4][1];
        basicDmg = Melt_attack_rate * status[4] * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                  + NonMelt_attack_rate * status[4];
        return basicDmg;
      }
      else
      {
        attckRate = dmg_rate[4][0] + dmg_rate[4][1];
        basicDmg = attckRate * status[4];
        return basicDmg;
      }
    }
    else if (attack_method == 21)
    {
      if (this.reaction_coeff > 0)
      {
        let Melt_attack_rate = this.Q_melt_count * dmg_rate[4];
        let NonMelt_attack_rate = (this.Q_nonmelt_count - this.Q_melt_count) * dmg_rate[4];
        basicDmg = Melt_attack_rate * status[4] * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                  + NonMelt_attack_rate * status[4];
        return basicDmg;
      }
      else
      {
        attckRate = dmg_rate[4] * this.Q_nonmelt_count;
        basicDmg = attckRate * status[4];
        return basicDmg;
      }
    }
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

class rosaria {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.dmg_rateCache = null;
    this.parameter = parameter;
    this.talent1_buff = 0;
    this.reaction_coeff = 0;
    this.first_conste_buff = 0;
    this.sixth_conste_buff = 0;
    this.char_constellations = 0;
  }
  
  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    if (char_propaty[0] != 7)
    {
      const Melt_cyro = document.getElementById("Melt-cyro");
      const reaction_flag = document.getElementById("reactionon_flag");
      if (Melt_cyro.checked && reaction_flag.checked) {
        this.reaction_coeff = 1.5;
      }
    }

    const talent1_check = document.getElementById("rosaria_talent1");
    if (talent1_check.checked)
    {
      this.talent1_buff = 0.12;
    }
    
    // JSON データを取得
    const response = await fetch("./data/character/char_data/rosaria.json");
    const data = await response.json();
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;
    let elm_react_dmgrate = 0;
    let elm_nonreact_dmgrate = 0;

    if (attack_method == 1) {
      if (this.char_constellations > 0)
      {
        const first_conste_check =  document.getElementById("rosaria_first_buff");
        if (first_conste_check.checked)
        {
          this.first_conste_buff = 0.1;
        }
      }

      if (this.char_constellations == 4)
      {
        const sixth_conste_check =  document.getElementById("rosaria_sixth_buff");
        if (sixth_conste_check.checked)
        {
          this.sixth_conste_buff = 0.2;
        }
      }

      for (let i = 0; i < 7; i++) {
        dmg_attack_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }else if (attack_method == 16) {
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = []
      let elm_nonreact = [];
      // 各チェックボックスの状態を調べて配列に追加
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);
      });
      for (let i = 0; i < 2; i++) {
        elm_react_dmgrate += elm_react[i] * parseFloat(data["元素スキル"]["詳細"][i]["数値"][this.parameter[3]]);
        elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["元素スキル"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    } else if (attack_method == 21) {
      const attack_count = parseInt(document.getElementById("rosaria_Q_count").value);
      const react_count = parseInt(document.getElementById("rosaria_Qreact").value);
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');

      let elm_react = []
      let elm_nonreact = [];
      // 各チェックボックスの状態を調べて配列に追加
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);
      });
      for (let i = 0; i < 2; i++) {
        elm_react_dmgrate += elm_react[i] * parseFloat(data["元素爆発"]["詳細"][i]["数値"][this.parameter[3]]);
        elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["元素爆発"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      elm_react_dmgrate += parseFloat(data["元素爆発"]["詳細"][2]["数値"][this.parameter[3]]) * react_count;
      elm_nonreact_dmgrate += parseFloat(data["元素爆発"]["詳細"][2]["数値"][this.parameter[3]]) * (attack_count - react_count)
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    }
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.talent1_buff;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return  this.first_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let attckRate;
    let basicDmg;
    if (this.reaction_coeff > 0)
    {
        basicDmg = dmg_rate[4][0] * status[4] * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                  + dmg_rate[4][1] * status[4];
        return basicDmg;
    }
    else
    {
      if (attack_method != 1)
      {
        attckRate = dmg_rate[4][0] + dmg_rate[4][1];
        basicDmg = attckRate * status[4];
        return basicDmg;
      }
      else
      {
        basicDmg = dmg_rate[4] * status[4];
        return basicDmg;
      }
    }
  }

  calculate_char_debuff() {
    let char_debuff = [this.sixth_conste_buff,0,0];
    return char_debuff;
  }
}

class chongyun {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.dmg_rateCache = null;
    this.parameter = parameter;
    this.reaction_coeff = 0;
    this.talent2_buff = 0;
    this.sixth_conste_buff = 0;
    this.char_constellations = 0;
  }
  
  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    const Melt_cyro = document.getElementById("Melt-cyro");
    const reaction_flag = document.getElementById("reactionon_flag");
    if (Melt_cyro.checked && reaction_flag.checked) {
      this.reaction_coeff = 1.5;
    }

    const talent2_check = document.getElementById("chongyun_talent2");
    if (talent2_check.checked)
    {
      this.talent2_buff = 0.1
    }


    // JSON データを取得
    const response = await fetch("./data/character/char_data/chongyun.json");
    const data = await response.json();
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;
    let elm_react_dmgrate = 0;
    let elm_nonreact_dmgrate = 0;

    if (attack_method == 1) {
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = []
      let elm_nonreact = [];
      // 各チェックボックスの状態を調べて配列に追加
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);
      });
      for (let i = 0; i < 4; i++) {
        elm_react_dmgrate += elm_react[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
        elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    }else if (attack_method == 16) {
      const attack_count = parseInt(document.getElementById("chongyun_skill_count").value) + parseInt(document.getElementById("chongyun_talent_count").value);
      const react_count = parseInt(document.getElementById("chongyun_skill_react").value) + parseInt(document.getElementById("chongyun_talent_react").value);

      elm_react_dmgrate += parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]) * react_count;
      elm_nonreact_dmgrate += parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]) * (attack_count - react_count);
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    } else if (attack_method == 21) {
      if (this.char_constellations == 4)
      {
        const sixth_conste_check =  document.getElementById("chongyun_sixth_buff");
        if (sixth_conste_check.checked)
        {
          this.sixth_conste_buff = 0.15;
        }
      }

      const attack_count = parseInt(document.getElementById("chongyun_Q_count").value);
      const react_count = parseInt(document.getElementById("chongyun_Qreact").value);

      elm_react_dmgrate += parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * react_count;
      elm_nonreact_dmgrate += parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * (attack_count - react_count)
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    }
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return  this.sixth_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let attckRate;
    let basicDmg;
    if (this.reaction_coeff > 0)
    {
      basicDmg = dmg_rate[4][0] * status[4] * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
               + dmg_rate[4][1] * status[4];
    }
    else
    {
      basicDmg = (dmg_rate[4][0] + dmg_rate[4][1]) * status[4];
    }
    return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [this.talent2_buff,0,0];
    return char_debuff;
  }
}

class kaeya {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.dmg_rateCache = null;
    this.parameter = parameter;
    this.reaction_coeff = 0;
    this.first_conste_buff = 0;
    this.char_constellations = 0;
  }
  
  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    if (char_propaty[0] != 7)
    {
      const Melt_cyro = document.getElementById("Melt-cyro");
      const reaction_flag = document.getElementById("reactionon_flag");
      if (Melt_cyro.checked && reaction_flag.checked) {
        this.reaction_coeff = 1.5;
      }
    }
    
    // JSON データを取得
    const response = await fetch("./data/character/char_data/kaeya.json");
    const data = await response.json();
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attack_rate = 0;
    let elm_react_dmgrate = 0;
    let elm_nonreact_dmgrate = 0;

    if (attack_method == 1) {
      if (this.char_constellations > 0)
      {
        const first_conste_check =  document.getElementById("kaeya_first_buff");
        if (first_conste_check.checked)
        {
          this.first_conste_buff = 0.15;
        }
      }

      for (let i = 0; i < 5; i++) {
        dmg_attack_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }else if (attack_method == 16) {
      const checkboxContainer = document.getElementById("select_reaction_method");
      const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
      let elm_react = []
      let elm_nonreact = [];
      // 各チェックボックスの状態を調べて配列に追加
      checkboxes.forEach(checkbox => {
        elm_react.push(checkbox.checked ? 1 : 0);
        elm_nonreact.push(checkbox.checked ? 0 : 1);
      });
      for (let i = 0; i < 1; i++) {
        elm_react_dmgrate += elm_react[i] * parseFloat(data["元素スキル"]["詳細"][i]["数値"][this.parameter[3]]);
        elm_nonreact_dmgrate += elm_nonreact[i] * parseFloat(data["元素スキル"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    } else if (attack_method == 21) {
      const attack_count = parseInt(document.getElementById("kaeya_Q_count").value);
      const react_count = parseInt(document.getElementById("kaeya_Qreact").value);

      elm_react_dmgrate += parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * react_count;
      elm_nonreact_dmgrate += parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * (attack_count - react_count)
      dmg_rate = [0, 0, 0, 0, [elm_react_dmgrate,elm_nonreact_dmgrate], 0, 0];
    }
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.first_conste_buff;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return  0;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let attckRate;
    let basicDmg;
    if (this.reaction_coeff > 0)
    {
        basicDmg = dmg_rate[4][0] * status[4] * this.reaction_coeff * (1 + 2.78 * status[2] / (status[2] + 1400))
                  + dmg_rate[4][1] * status[4];
        return basicDmg;
    }
    else
    {
      if (attack_method != 1)
      {
        attckRate = dmg_rate[4][0] + dmg_rate[4][1];
        basicDmg = attckRate * status[4];
        return basicDmg;
      }
      else
      {
        basicDmg = dmg_rate[4] * status[4];
        return basicDmg;
      }
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class cyno {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.second_conste_buff = 0;
    this.reaction_coeff = 0;
    this.aggcount = 0;
    this.base_dmg_buff = 0;
    this.skill_buff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    // チェックボックスとチェックされた数を取得
    const reaction_check = document.getElementById("reactionon_flag");
    if (reaction_check.checked)
    {
      this.aggcount = parseInt(document.getElementById("cyno_agg_count").value);
      this.reaction_coeff = 1.15
    }

    if (attack_method == 1)
    {
      this.base_dmg_buff = 6 * 1.5
    }
    else
    {
      this.base_dmg_buff = parseInt(document.getElementById("cyno_talent1_count").value) *2.5;
    }
  
    if (this.char_constellations > 1)
    {
      const second_conste_check = document.getElementById("traitCheckbox2");
      if (second_conste_check.checked)
      {
        this.second_conste_buff = parseInt(document.getElementById("cyno_conste2").value) / 100;
      }
    }

    // JSON データを取得
    const response = await fetch("./data/character/char_data/cyno.json");
    const data = await response.json();
    // 攻撃方法に応じてダメージ率を計算

    let dmg_rate;
    let dmg_attack_rate = 0;
    let burst_bonus;
    
    if (attack_method == 1) {
      for (let i = 0; i < 6; i++) {
        dmg_attack_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 16) {
      const cyno_E_count = parseInt(document.getElementById("cyno_E_count").value);
      const cyno_talent1_count = parseInt(document.getElementById("cyno_talent1_count").value);
      dmg_attack_rate = parseFloat(data["元素スキル"]["詳細"][1]["数値"][this.parameter[3]]) * cyno_E_count + cyno_talent1_count;
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }
  return dmg_rate;
}

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 100;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.second_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {;
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (this.reaction_coeff > 0)
    {

      const attckRate = status[4] * dmg_rate[4] + this.base_dmg_buff * status[2];
      let basicDmg = (attckRate + this.aggcount * 1.15 * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
      return basicDmg;
    }
    else
    {

      const attckRate = status[4] * dmg_rate[4] + this.base_dmg_buff * status[2];
      return attckRate;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class yaemiko {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.aggcount = 0;
    this.reaction_coeff = 0;
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

    const reaction_check = document.getElementById("reactionon_flag");
    if (reaction_check.checked)
    {
      this.aggcount = parseInt(document.getElementById("yaemiko_agg_count").value);
      this.reaction_coeff = 1.15
    }
  
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
      const Q_dmg_rate = first_dmg_rate + second_dmg_rate * 3;
      dmg_rate = [0, 0, 0, 0, Q_dmg_rate, 0, 0];
    }
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
      return this.four_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    if (this.talent2effect == 1)
    {
      let talent2skill_buff = status[2] * 0.15 / 100;
      return talent2skill_buff;
    }
    else
    {
      return 0;
    }
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    let attckRate;
    if (this.reaction_coeff > 0)
    {
        attckRate = status[4] * dmg_rate[4];
        basicDmg = (attckRate + this.aggcount * 1.15 * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
        return basicDmg;
    }
    else
    {
      if (attack_method != 21)
      {
        attckRate = status[4] * dmg_rate[4];
      }
    }
    return attckRate;
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

class raiden {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.aggcount = 0;
    this.reaction_coeff = 0;
    this.skill_buff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    const reaction_check = document.getElementById("reactionon_flag");
    if (reaction_check.checked)
    {
      this.aggcount = parseInt(document.getElementById("raiden_agg_count").value);
      this.reaction_coeff = 1.15
    }
  
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
        dmg_attack_rate += parseFloat(data["爆発中通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
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

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.skill_buff;
  }

  calculate_char_result_dmg_buff(status) {
    const talent2_buff = (status[3] - 1) * 0.4;
    return talent2_buff;
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (this.reaction_coeff > 0)
    {

      const attckRate = status[4] * dmg_rate[4];
      let basicDmg = (attckRate + this.aggcount * 1.15 * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
      return basicDmg;
    }
    else
    {

      const attckRate = status[4] * dmg_rate[4];
      return attckRate;
    }
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
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
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

    const reaction_check = document.getElementById("reactionon_flag");
    if (reaction_check.checked)
    {
      this.aggcount = parseInt(document.getElementById("keqing_agg_count").value);
      this.reaction_coeff = 1.15
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

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return this.forth_conste_buff * this.base_status_array[4];
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return this.talent2_buff;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.talent2_buff;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.sixth_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (this.reaction_coeff > 0)
    {

      const attckRate = status[4] * dmg_rate[4];
      let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
      return basicDmg;
    }
    else
    {

      const attckRate = status[4] * dmg_rate[4];
      return attckRate;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class fischl {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
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
      const reaction_check = document.getElementById("reactionon_flag");
      if (reaction_check.checked)
      {
        this.aggcount = parseInt(document.getElementById("fischl_agg_count").value);
        this.reaction_coeff = 1.15
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

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (this.reaction_coeff > 0)
    {

      const attckRate = status[4] * dmg_rate[4];
      let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
      return basicDmg;
    }
    else
    {

      const attckRate = status[4] * dmg_rate[4];
      return attckRate;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class beidou {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.sixth_conste_buff = 0;
    this.aggcount = 0;
    this.talent2_buff = 0;
    this.reaction_coeff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    const reaction_check = document.getElementById("reactionon_flag");
    if (reaction_check.checked)
    {
      this.aggcount = parseInt(document.getElementById("beidou_agg_count").value);
      this.reaction_coeff = 1.15
    }

    const talent2_check = document.getElementById("beidou_talent2");
    if (talent2_check.checked)
    {
      this.talent2_buff = 0.15;
    }

    if (this.char_constellations == 4)
    {
      const sixth_conste_check = document.getElementById("traitCheckbox6");
      if (sixth_conste_check.checked)
      {
        this.sixth_conste_buff = 0.15;
      }
    } 

    // JSON データを取得
    const response = await fetch("./data/character/char_data/beidou.json");
    const data = await response.json();
    // 攻撃方法に応じてダメージ率を計算
    let dmg_attack_rate = 0;
    let dmg_rate;
    
    if (attack_method == 16) {
      const buff_count = parseInt(document.getElementById("beidou_skill_count").value);
      dmg_attack_rate += parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]])
                      +  parseFloat(data["元素スキル"]["詳細"][1]["数値"][this.parameter[3]]) * buff_count;
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 21) {
      const attack_count1 = parseInt(document.getElementById("beidou_attack_count1").value);
      const attack_count2 = parseInt(document.getElementById("beidou_attack_count2").value);
      dmg_attack_rate += parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count1
                      +  parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]) * attack_count2;
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }
    
  return dmg_rate;
}

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.talent2_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (this.reaction_coeff > 0)
    {
      const attckRate = status[4] * dmg_rate[4];
      let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
      return basicDmg;
    }
    else
    {
      const attckRate = status[4] * dmg_rate[4];
      return attckRate;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [this.sixth_conste_buff,0,0];
    return char_debuff;
  }
}

class razor {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.first_conste_buff = 0;
    this.second_conste_buff = 0;
    this.fourth_conste_buff = 0;
    this.aggcount = 0;
    this.skill_buff = 0
    this.talent2_buff = 0;
    this.reaction_coeff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    const talent2_check = document.getElementById("beidou_talent2");
    if (talent2_check.checked)
    {
      this.talent2_buff = 0.3;
    }

    if (this.char_constellations > 0)
    {
      const first_conste_check = document.getElementById("traitCheckbox1");
      if (first_conste_check.checked)
      {
        this.first_conste_buff = 0.10;
      }
      if (this.char_constellations > 1)
      {
        const second_conste_check = document.getElementById("traitCheckbox2");
        if (second_conste_check.checked)
        {
          this.second_conste_buff = 0.10;
        }
        if (this.char_constellations > 2)
        {
          const fourth_conste_check = document.getElementById("traitCheckbox4");
          if (fourth_conste_check.checked)
          {
            this.fourth_conste_buff = 0.15;
          }
        } 
      } 
    } 

    // JSON データを取得
    const response = await fetch("./data/character/char_data/razor.json");
    const data = await response.json();
    // 攻撃方法に応じてダメージ率を計算
    let dmg_attack_rate = 0;
    let dmg_rate;
    
    if (attack_method == 1) {
      for (let i = 0; i < 4; i++) {
        dmg_attack_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 16) {
      const reaction_check = document.getElementById("reactionon_flag");
      if (reaction_check.checked)
      {
        this.aggcount = parseInt(document.getElementById("razor_agg_count").value);
        this.reaction_coeff = 1.15
      }

      dmg_attack_rate += parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 17) {
      const reaction_check = document.getElementById("reactionon_flag");
      if (reaction_check.checked)
      {
        this.aggcount = parseInt(document.getElementById("razor_agg_count").value);
        this.reaction_coeff = 1.15
      }

      dmg_attack_rate += parseFloat(data["元素スキル"]["詳細"][1]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 21) {
      this.skill_buff = parseInt(document.getElementById("razor_skill_count").value) * 0.1;
      const reaction_check = document.getElementById("reactionon_flag");
      if (reaction_check.checked)
      {
        this.aggcount = parseInt(document.getElementById("razor_agg_count").value);
        this.reaction_coeff = 1.15
      }

      const attack_burst_rate = parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
      for (let i = 0; i < 4; i++) {
        dmg_attack_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_attack_rate = (dmg_attack_rate + parseFloat(data["通常攻撃"]["詳細"][0]["数値"][this.parameter[3]])) * attack_burst_rate;
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }
    
  return dmg_rate;
}

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return this.talent2_buff + this.skill_buff;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.second_conste_buff;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.first_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (this.reaction_coeff > 0)
    {
      const attckRate = status[4] * dmg_rate[4];
      let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
      return basicDmg;
    }
    else
    {
      const attckRate = status[4] * dmg_rate[4];
      return attckRate;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,this.fourth_conste_buff,0];
    return char_debuff;
  }
}

class lisa {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.aggcount = 0;
    this.talent2_buff = 0;
    this.reaction_coeff = 0;
    this.skill_buff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    const reaction_check = document.getElementById("reactionon_flag");
    if (reaction_check.checked)
    {
      this.aggcount = parseInt(document.getElementById("lisa_agg_count").value);
      this.reaction_coeff = 1.15
    }

    const talent2_check = document.getElementById("lisa_talent2");
    if (talent2_check.checked)
    {
      this.talent2_buff = 0.15;
    }

    // JSON データを取得
    const response = await fetch("./data/character/char_data/lisa.json");
    const data = await response.json();
    // 攻撃方法に応じてダメージ率を計算
    let dmg_attack_rate = 0;
    let dmg_rate;
    
    if (attack_method == 1) {
      for (let i = 0; i < 4; i++) {
        dmg_attack_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 6) {
      dmg_attack_rate += parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 16) {
      const buff_count = parseInt(document.getElementById("lisa_skill_count").value) + 1;
      dmg_attack_rate += parseFloat(data["元素スキル"]["詳細"][buff_count]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 21) {
      const attack_count = parseInt(document.getElementById("lisa_attack_count").value);
      dmg_attack_rate += parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count;
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }
    
  return dmg_rate;
}

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (this.reaction_coeff > 0)
    {

      const attckRate = status[4] * dmg_rate[4];
      let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
      return basicDmg;
    }
    else
    {
      const attckRate = status[4] * dmg_rate[4];
      return attckRate;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [this.talent2_buff,0,0];
    return char_debuff;
  }
}

class wanderer {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.second_conste_buff = 0;
    this.sixth_conste_buff = 1;
    this.talent1_pyro = 0;
    this.talent1_cyro = 0;
    this.talent2_buff = 0;
    this.burst_buff = 0;
    this.attack_count = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    // JSON データを取得
    const response = await fetch("./data/character/char_data/wanderer.json");
    const data = await response.json();

    const talent1_pyro_check =  document.getElementById("talent1_pyro")
    if (talent1_pyro_check.checked)
    {
      this.talent1_pyro = 0.3;
    } 

    const talent1_cyro_check =  document.getElementById("talent1_cyro")
    if (talent1_cyro_check.checked)
    {
      this.talent1_cyro = 0.2;
    } 
    
    // 攻撃方法に応じてダメージ率を計算
    let dmg_attack_rate = 0;
    let dmg_rate;
    if (attack_method == 1) {
      for (let i = 0; i < 3; i++) {
        dmg_attack_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      const xiao_burst_level = parseInt(document.getElementById("wandererE_level").value);
      const xiao_burst_buff = parseFloat(data["元素スキル"]["詳細"][1]["数値"][xiao_burst_level]);

      if (this.char_constellations > 3)
      {
        this.sixth_conste_buff = 1.4;
      } 

      dmg_attack_rate *= xiao_burst_buff * this.sixth_conste_buff;
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 6) {
      dmg_attack_rate = parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]);
      const xiao_burst_level = parseInt(document.getElementById("wandererE_level").value);
      const xiao_burst_buff = parseFloat(data["元素スキル"]["詳細"][2]["数値"][xiao_burst_level]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 21) {
      dmg_attack_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * 5;
      if (this.char_constellations > 1)
      {
        this.second_conste_buff = parseFloat(document.getElementById("wanderer_dmgbuff").value)/ 100;
        if (this.second_conste_buff > 2)
        {
          this.second_conste_buff = 2;
        }
        else if (this.second_conste_buff < 0)
        {
          this.second_conste_buff = 0;
        } 
      }
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }
    
  return dmg_rate;
}

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return this.talent1_pyro * this.base_status_array[4];
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.talent1_cyro;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.second_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    const attckRate = status[4] * dmg_rate[4];
    return attckRate;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class xiao {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.talent1_buff = 0;
    this.talent2_buff = 0;
    this.burst_buff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    // JSON データを取得
    const response = await fetch("./data/character/char_data/xiao.json");
    const data = await response.json();

    this.talent1_buff = parseInt(document.getElementById("xiao_talent1").value) / 100;

    const xiao_burst_level = parseInt(document.getElementById("xiao_Q_level").value);
    this.burst_buff = parseFloat(data["元素爆発"]["詳細"][0]["数値"][xiao_burst_level]);
    
    // 攻撃方法に応じてダメージ率を計算
    let dmg_attack_rate = 0;
    let dmg_rate;
    if (attack_method == 1) {
      for (let i = 0; i < 6; i++) {
        dmg_attack_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 6) {
      dmg_attack_rate = parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 11) {
      dmg_attack_rate = parseFloat(data["落下攻撃"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 12) {
      dmg_attack_rate = parseFloat(data["落下攻撃"]["詳細"][1]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 16) {
      this.talent2_buff = parseInt(document.getElementById("xiao_talent2_buff").value) / 100;
      dmg_attack_rate = parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }
  return dmg_rate;
}

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.talent1_buff + this.talent2_buff + this.burst_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    const attckRate = status[4] * dmg_rate[4];
    return attckRate;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class faruzan {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.sixth_conste_buff = 0;
    this.burst1_buff = 0;
    this.burst2_buff = 0;
    this.talent2_buff = 0;
    this.burst_buff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    // JSON データを取得
    const response = await fetch("./data/character/char_data/faruzan.json");
    const data = await response.json();

    if (this.char_constellations > 3)
    {
      this.sixth_conste_buff = 0.4;
    } 

    const burst1_check = document.getElementById("faruzan_burst1");
    if (burst1_check.checked) 
    {
      this.burst1_buff = 0.3;
    }

    const burst2_check = document.getElementById("faruzan_burst2");
    if (burst1_check.checked) 
    {
      const burst_level = parseInt(document.getElementById("faruzan_Q_level").value);
      this.burst2_buff = parseFloat(data["元素爆発"]["詳細"][1]["数値"][burst_level]);

      const talent2_check = document.getElementById("faruzan_talent2");
      if (talent2_check.checked)
      {
        const talent2_count = parseInt(document.getElementById("faruzan_talent2_count").value)
        this.talent2_buff = 0.32 * talent2_count;
      }
    }
    
    // 攻撃方法に応じてダメージ率を計算
    let dmg_attack_rate = 0;
    let dmg_rate;
    if (attack_method == 6) {
      dmg_attack_rate = parseFloat(data["重撃"]["詳細"][1]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 16) {
      const attack_count1 = parseInt(document.getElementById("faruzan_attack1_count").value);
      const attack_count2 = parseInt(document.getElementById("faruzan_attack2_count").value);
      dmg_attack_rate += parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count1;
      dmg_attack_rate += parseFloat(data["元素スキル"]["詳細"][1]["数値"][this.parameter[3]]) * attack_count2;
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 21) {
      dmg_attack_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }
    
  return dmg_rate;
}

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return this.sixth_conste_buff;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.burst2_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    const attckRate = status[4] * (dmg_rate[4] + this.talent2_buff);
    return attckRate;
  }

  calculate_char_debuff() {
    let char_debuff = [this.burst1_buff,0,0];
    return char_debuff;
  }
}

class shikanoinheizou {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
    this.parameter = parameter;
    this.char_constellations = 0;
    this.sixth_conste_crbuff = 0;
    this.sixth_conste_cdbuff = 0;
  }

  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;

    // JSON データを取得
    const response = await fetch("./data/character/char_data/shikanoinheizou.json");
    const data = await response.json();
    
    // 攻撃方法に応じてダメージ率を計算
    let dmg_attack_rate = 0;
    let dmg_rate;
    if (attack_method == 16) {
      const attack_effect = parseInt(document.getElementById("shikanoinheizou_attack_count").value);
      dmg_attack_rate += parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]])
                      +  parseFloat(data["元素スキル"]["詳細"][1]["数値"][this.parameter[3]]) * attack_effect;
      if (attack_effect == 4) 
      {
        dmg_attack_rate += parseFloat(data["元素スキル"]["詳細"][2]["数値"][this.parameter[3]])
      }

      if (this.char_constellations == 4)
      {
        this.sixth_conste_crbuff = 0.04 * attack_effect;
        if (attack_effect == 4) 
        {
          this.sixth_conste_cdbuff = 0.32;
        }
      }
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    } else if (attack_method == 21) {
      dmg_attack_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }
    
  return dmg_rate;
}

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.sixth_conste_crbuff;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return this.sixth_conste_cdbuff;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    const attckRate = status[4] * dmg_rate[4];
    return attckRate;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class kujousara {
  constructor(base_status_array, parameter) 
  {
    this.base_status_array = base_status_array;
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

    const reaction_check = document.getElementById("reactionon_flag");
    if (reaction_check.checked)
    {
      this.aggcount = parseInt(document.getElementById("kujousara_agg_count").value);
      this.reaction_coeff = 1.15
    }

    let dmg_attack_rate = 0;
    let dmg_rate;
    
    if (attack_method == 21) {
      const attack_count = parseInt(document.getElementById("kujousara_attack_count").value);
      dmg_attack_rate += parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_attack_rate += parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]) * attack_count;
      dmg_rate = [0, 0, 0, 0, dmg_attack_rate, 0, 0];
    }
    
  return dmg_rate;
}

  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return this.skill_buff;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return this.sixth_conste_buff;
  }

  calculate_char_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (this.reaction_coeff > 0)
    {

      const attckRate = status[4] * dmg_rate[4];
      let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
      return basicDmg;
    }
    else
    {

      const attckRate = status[4] * dmg_rate[4];
      return attckRate;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class nahida {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.dmg_rateCache = null;
    this.parameter = parameter;
    this.aggcount = 0;
    this.reaction_coeff = 0;
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

    const reaction_check = document.getElementById("reactionon_flag");
    if (reaction_check.checked)
    {
      this.aggcount = parseInt(document.getElementById("nahida_agg_count").value);
      this.reaction_coeff = 1.25
    }    
  
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
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return this.four_conste_buff;
  }

  calculate_char_result_elm(status) {

    if (this.talent1effect > -1) {
      return this.talent1effect;
    }
    if(this.mytalent1 == 0)
    {
      return 0;
    }
    let talent1elm_buff = Math.min(status[2]/4, 250)
    return talent1elm_buff;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    if (attack_method_index == 3)
    {
      return Math.min(Math.max(0, status[2] - 200), 800) * 0.0003 * this.skill_buff;
    }
  else
  {
    return 0;
  }
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.q_pyrobuff;
  }

  calculate_char_result_dmg_buff(status) {
    if (attack_method_index == 3)
    {
      return Math.min(Math.max(0, status[2] - 200), 800) * 0.001 * this.skill_buff;
    }
    else
    {
      return 0;
    }
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (this.reaction_coeff > 0)
    {
      if (attack_method == 16 || attack_method == 17)
      { 
        const attckRate = status[4] * dmg_rate[4] / 100;
        const elmRate = status[2] * dmg_rate[2] / 100;
        let basicDmg = (attckRate + elmRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
        return basicDmg;
      }
      else
      {
        const attckRate = status[4] * dmg_rate[4] / 100;
        let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
        return basicDmg;
      }
    }
    else
    {
      if (attack_method == 16 || attack_method == 17)
      {
        const attckRate = status[4] * dmg_rate[4] / 100;
        const elmRate = status[2] * dmg_rate[2] / 100;
        let basicDmg = attckRate + elmRate;
        return basicDmg;
      }
      else
      {
        const attckRate = status[4] * dmg_rate[4] / 100;
        let basicDmg = attckRate;
        return basicDmg;
      }
    }
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

class alhaitham {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.dmg_rateCache = null;
    this.parameter = parameter;
    this.aggcount = 0;
    this.reaction_coeff = 0;
    this.talent2_buff_flag = 0;
    this.talent2_buff = 0;
    this.second_conste_buff = 0;
    this.four_conste_buff = 0;
    this.sixth_conste_buff = 0;
    this.char_constellations = 0;
  }

  async dmg_rate_data() {
    // チェックボックスとチェックされた数を取得

    const reaction_check = document.getElementById("reactionon_flag");
    if (reaction_check.checked)
    {
      this.aggcount = parseInt(document.getElementById("nahida_agg_count").value);
      this.reaction_coeff = 1.25
    }    
  
    // JSON データを取得
    const response = await fetch("./data/character/char_data/nahida.json");
    const data = await response.json();
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attck_rate = 0;
  
    if (this.char_constellations > 1)
    {
      const second_conste_check = document.getElementById("traitCheckbox2");
      if (second_conste_check.checked)
      {
        this.second_conste_buff = parseInt(document.getElementById("alhaitham_second_buff").value);
      }
    }
    if (this.char_constellations > 2)
    {
      this.fourth_conste_buff = parseInt(document.getElementById("alhaitham_fourth1").value) * 0.1;
    }
    if (this.char_constellations == 4)
    {
      const sixth_conste_check = document.getElementById("traitCheckbox6");
      if (sixth_conste_check.checked)
      {
        this.sixth_conste_buff = 0.1;
      }
    }

    if (attack_method == 1) {
      for (let i = 0; i < 6; i++) {
        dmg_attck_rate += parseFloat(data["通常攻撃"]["詳細"][i]["数値"][this.parameter[3]]);
      }
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 6) {
      dmg_attck_rate = parseFloat(data["重撃"]["詳細"][0]["数値"]["攻撃力"][this.parameter[3]]) * 2;
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 16) {
      this.talent2_buff_flag = 1;
      const attack_count1 = parseInt(document.getElementById("alhaitham_skill_count1").value);
      const attack_count2 = parseInt(document.getElementById("alhaitham_skill_count2").value)
                          + parseInt(document.getElementById("alhaitham_skill_count3").value) * 2
                          + parseInt(document.getElementById("alhaitham_skill_count4").value) * 3;

      const dmg_attck_rate = parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count1
                           + parseFloat(data["元素スキル"]["詳細"][1]["数値"][this.parameter[3]]) * attack_count2;
      const dmg_elm_rate = parseFloat(data["元素スキル"]["詳細"][2]["数値"][this.parameter[3]]) * attack_count1
                         + parseFloat(data["元素スキル"]["詳細"][3]["数値"][this.parameter[3]]) * attack_count2;
      dmg_rate = [0, 0, dmg_elm_rate, 0, dmg_attck_rate, 0, 0];
    }
    else if (attack_method == 21) {
      this.talent2_buff_flag = 1;
    }
  
    // 計算結果をキャッシュして返す
    this.dmg_rateCache = dmg_rate;
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return this.second_conste_buff;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.sixth_conste_buff;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return this.sixth_conste_buff * 7;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.fourth_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    if (this.talent2_buff_flag > 0)
    {
      this.talent2_buff = Math.min(1,status[2] * 0.001);
    }
    return this.talent2_buff
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (this.reaction_coeff > 0)
    {
      if (attack_method == 16 || attack_method == 21)
      { 
        const total_rate = status[2] * dmg_rate[2] + status[4] * dmg_rate[4];
        let basicDmg = (total_rate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
        return basicDmg;
      }
      else
      {
        const attckRate = status[4] * dmg_rate[4];
        let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
        return basicDmg;
      }
    }
    else
    {
      if (attack_method == 16 || attack_method == 17)
      {
        const attckRate = status[4] * dmg_rate[4] / 100;
        const elmRate = status[2] * dmg_rate[2] / 100;
        let basicDmg = attckRate + elmRate;
        return basicDmg;
      }
      else
      {
        const attckRate = status[4] * dmg_rate[4] / 100;
        let basicDmg = attckRate;
        return basicDmg;
      }
    }
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


class tighnari {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.dmg_rateCache = null;
    this.parameter = parameter;
    this.talent1_buff = 0;
    this.aggcount = 0;
    this.reaction_coeff = 0;
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
    const reaction_check = document.getElementById("reactionon_flag");
    if (reaction_check.checked)
    {
      this.aggcount = parseInt(document.getElementById("tighnari_agg_count").value);
      this.reaction_coeff = 1.25
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
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return this.fourth_conste_buff + this.talent1_buff;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.first_conste_buff;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.second_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return Math.min(status[2] * 0.0006, 0.6);
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (attack_method == 6)
    {
      if (selectedWeaponId ==92)
      {
  
        const attckRate = status[4] * (dmg_rate[4][0] * 3 + dmg_rate[4][1] * 12) / 100 + this.sixth_conste_buff + 12 * (1.6 + (this.weapon_rank -1) * 0.4) * status[2];
        let basicDmg = (attckRate + this.aggcount * 3 * 1.25 * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
        return basicDmg;
      }
      else
      {

      const attckRate = status[4] * (dmg_rate[4][0] * 3 + dmg_rate[4][1] * 12) / 100 + this.sixth_conste_buff;
      let basicDmg = (attckRate + this.aggcount * 3 * 1.25 * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
      return basicDmg;
      }
    }
    else if (attack_method == 21)
    {

      const attckRate = status[4] * (dmg_rate[4][0] * 6 + dmg_rate[4][1] * 6) / 100;
      let basicDmg = (attckRate + this.aggcount * 1.25 * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
      return basicDmg;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class kirara {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.dmg_rateCache = null;
    this.parameter = parameter;
    this.talent2_buff = 0;
    this.aggcount = 0;
    this.reaction_coeff = 0;
    this.first_conste_buff = 0;
    this.second_conste_buff = 0;
    this.fourth_conste_buff = 0;
    this.sixth_conste_buff = 0;
    this.char_constellations = 0;
    this.nyan_dmgrate = 0;
  }
  
  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    
    // チェックボックスとチェックされた数を取得
    const reaction_check = document.getElementById("reactionon_flag");
    if (reaction_check.checked)
    {
      this.aggcount = parseInt(document.getElementById("kirara_agg_count").value);
      this.reaction_coeff = 1.25
    }

    if (this.char_constellations > 0 && attack_method == 21)
    {
      this.first_conste_buff = 1;
    }

    if (this.char_constellations ==4)
    {
      const sixth_conste_check =  document.getElementById("traitCheckbox6");
      if (sixth_conste_check.checked)
      {
        this.sixth_conste_buff = 0.12;
      }
    }
    
    // JSON データを取得
    const response = await fetch("./data/character/char_data/kirara.json");
    const data = await response.json();
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attck_rate = 0;
  
    if (attack_method == 16) {
      this.talent2_buff = 0.004;
      dmg_attck_rate = parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 17) {
      this.talent2_buff = 0.004;
      const attack_count1 = parseInt(document.getElementById("kirara_skill_count").value);
      const attack_count2 = parseInt(document.getElementById("kirara_nyan_count").value);
      dmg_attck_rate = parseFloat(data["元素スキル"]["詳細"][1]["数値"][this.parameter[3]]) * attack_count1
                     + parseFloat(data["元素スキル"]["詳細"][2]["数値"][this.parameter[3]]) * attack_count2;
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 21) {
      this.talent2_buff = 0.003;
      const attack_count1 = parseInt(document.getElementById("kirara_skill_count").value);
      const attack_count2 = parseInt(document.getElementById("kirara_nyan_count").value);
      dmg_attck_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count1
                     + parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]) * attack_count2;
      this.nyan_dmgrate = parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]);
      if (this.char_constellations > 2)
      {
        const attack_count3 = parseInt(document.getElementById("kirara_mininyan_count").value);
        dmg_attck_rate += 2 * attack_count3;
      }
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    }
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.sixth_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return this.talent2_buff * Math.floor(status[0]/1000);
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (this.reaction_coeff > 0)
    {
      if (attack_method != 21)
      {
        const attckRate = status[4] * dmg_rate[4];
        let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
        return basicDmg;
      }
      else
      {
        const attckRate = status[4] * (dmg_rate[4] + this.first_conste_buff * this.nyan_dmgrate * Math.min(4,Math.floor(status[0]/8000)));
        let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
        return basicDmg;
      }
    }
    else
    {
      if (attack_method != 21)
      {
        const attckRate = status[4] * dmg_rate[4];
        return attckRate;
      }
      else
      {
        {
          const attckRate = status[4] * dmg_rate[4] + this.first_conste_buff * this.nyan_dmgrate * Math.min(4,Math.floor(status[0]/8000));;
          return attckRate;
        }
      }
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class travelardendro {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.dmg_rateCache = null;
    this.parameter = parameter;
    this.talent1_buff = 0;
    this.talent2_buff = 0;
    this.aggcount = 0;
    this.reaction_coeff = 0;
    this.sixth_conste_buff = 0;
    this.char_constellations = 0;
  }
  
  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    
    // チェックボックスとチェックされた数を取得
    const reaction_check = document.getElementById("reactionon_flag");
    if (reaction_check.checked)
    {
      this.aggcount = parseInt(document.getElementById("travelardendro_agg_count").value);
      this.reaction_coeff = 1.25;
    }

    this.talent1_buff = parseInt(document.getElementById("travelardendro_talent1").value);

    if (this.char_constellations ==4)
    {
      const sixth_conste_check =  document.getElementById("traitCheckbox6");
      if (sixth_conste_check.checked)
      {
        this.sixth_conste_buff = 0.12;
      }
    }
    
    // JSON データを取得
    const response = await fetch("./data/character/char_data/travelardendro.json");
    const data = await response.json();
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attck_rate = 0;
  
    if (attack_method == 16) {
      this.talent2_buff = 0.0015;
      dmg_attck_rate = parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } else if (attack_method == 21) {
      this.talent2_buff = 0.001;
      const attack_count1 = parseInt(document.getElementById("travelardendro_skill_count").value);
      const attack_count2 = parseInt(document.getElementById("travelardendro_pyro_count").value);
      dmg_attck_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count1
                     + parseFloat(data["元素爆発"]["詳細"][1]["数値"][this.parameter[3]]) * attack_count2;
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    }
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return this.talent1_buff;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.sixth_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return this.talent2_buff * status[2];
  }

  calculate_basic_dmg(dmg_rate, status) {
    if (this.reaction_coeff > 0)
    {
      const attckRate = status[4] * dmg_rate[4];
      let basicDmg = (attckRate + this.aggcount * this.reaction_coeff * (this.parameter[1]) * (1 + 5 * status[2] / (status[2] + 1200)));
      return basicDmg;
    }
    else
    {
      const attckRate = status[4] * dmg_rate[4];
      return attckRate;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class aratakiitto {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
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
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return this.base_status_array[4] * this.fourth_conste_buff;
  }

  calculate_char_result_attck(status) {
    return this.burst_buff_rate * status[1];
  }

  calculate_char_fixed_deff(status) {
    return this.base_status_array[1] * this.fourth_conste_buff;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return this.sixth_conste_buff;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let attckRate;
    let basicDmg;
    if (attack_method == 6)
    {
      attckRate = dmg_rate[4][0] * (this.attack_count - 1) + dmg_rate[4][1];
      basicDmg = attckRate * status[4] + this.talent2_buff * status[1] * this.attack_count + calculate_weapon_basedmg(this.attack_count, status, this.weapon_rank);
      return basicDmg;
    }
    else if (attack_method == 16)
    {
      basicDmg = dmg_rate[4] * status[4];
      return basicDmg;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class albedo {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
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
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return this.talent2_buff;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.talent1_buff + this.sixth_conste_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let attckRate;
    let basicDmg;
    if (attack_method == 16)
    {
      attckRate = dmg_rate[1] * this.attack_count;
      basicDmg = attckRate * status[1] + calculate_weapon_basedmg(this.attack_count, status, this.weapon_rank);
      return basicDmg;
    }
    else if (attack_method == 21)
    {
      basicDmg = (dmg_rate[1] * this.attack_count + this.second_conste_buff * (this.attack_count + 1)) * status[1] + dmg_rate[4] * status[4];
      return basicDmg;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class noelle {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
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
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return this.sixth_conste_buff * status[1];
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    if (attack_method == 1)
    {
      basicDmg = dmg_rate[4] * status[4] + calculate_weapon_basedmg(4, status, this.weapon_rank);
      return basicDmg;
    }
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class zhongli {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
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
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    if (attack_method == 21)
    {
      basicDmg = dmg_rate[4] * status[4] + status[0] * 0.33;
      return basicDmg;
    }
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

class ningguang {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.dmg_rateCache = null;
    this.parameter = parameter;
    this.talent2_buff = 0;
    this.char_constellations = 0;
  }
  
  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    
      const talent2_check =  document.getElementById("talent2_buff");
      if (talent2_check.checked)
      {
        this.talent2_buff = 0.12;
      }

    // JSON データを取得
    const response = await fetch("./data/character/char_data/ningguang.json");
    const data = await response.json();
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attck_rate = 0;
    if (attack_method == 1) {
      const attack_count = parseInt(document.getElementById("ningguang_count").value);
      dmg_attck_rate = parseFloat(data["通常攻撃"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count;
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } 
    else if (attack_method == 6) {
      const attack_count = parseInt(document.getElementById("ningguang_count").value);
      dmg_attck_rate = parseFloat(data["重撃"]["詳細"][0]["数値"][this.parameter[3]]) 
                     + parseFloat(data["重撃"]["詳細"][1]["数値"][this.parameter[3]])* attack_count;
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } 
    else if (attack_method == 16) {
      dmg_attck_rate = parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } 
    else if (attack_method == 21) {
      const attack_count = parseInt(document.getElementById("ningguang_count").value);
      dmg_attck_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count;
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } 
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return 0;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return this.talent2_buff;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    basicDmg = dmg_rate[4] * status[4];
    return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
    return char_debuff;
  }
}

class travelergeo {
  constructor(base_status_array, parameter) {
    this.base_status_array = base_status_array;
    this.dmg_rateCache = null;
    this.parameter = parameter;
    this.first_conste_buff = 0;
    this.char_constellations = 0;
  }
  
  async dmg_rate_data() {
    this.char_constellations = document.getElementById("char_constellations").value;
    
    if (this.char_constellations > 0)
    {
      const first_conste_check =  document.getElementById("traitCheckbox1");
      if (first_conste_check.checked)
      {
        this.first_conste_buff = 0.1;
      }
    }

    // JSON データを取得
    const response = await fetch("./data/character/char_data/travelergeo.json");
    const data = await response.json();
  
    // 攻撃方法に応じてダメージ率を計算
    let dmg_rate;
    let dmg_attck_rate = 0;
    if (attack_method == 16) {
      dmg_attck_rate = parseFloat(data["元素スキル"]["詳細"][0]["数値"][this.parameter[3]]);
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } 
    else if (attack_method == 21) {
      const attack_count = parseInt(document.getElementById("travelergeo_burstcount").value);
      dmg_attck_rate = parseFloat(data["元素爆発"]["詳細"][0]["数値"][this.parameter[3]]) * attack_count;
      dmg_rate = [0, 0, 0, 0, dmg_attck_rate, 0, 0];
    } 
    return dmg_rate;
  }
  
  calculate_char_fixed_hp(status) {
    return 0;
  }

  calculate_char_result_hp(status) {
    return 0;
  }

  calculate_char_fixed_attck(status) {
    return 0;
  }

  calculate_char_result_attck(status) {
    return 0;
  }

  calculate_char_fixed_deff(status) {
    return 0;
  }

  calculate_char_result_deff(status) {
    return 0;
  }

  calculate_char_fixed_elm(status) {
    return 0;
  }

  calculate_char_result_elm(status) {
    return 0;
  }

  calculate_char_fixed_elm_charge(status) {
    return 0;
  }

  calculate_char_result_elm_charge(status) {
    return 0;
  }

  calculate_char_fixed_cr(status) {
    return this.first_conste_buff;
  }

  calculate_char_result_cr(status) {
    return 0;
  }

  calculate_char_fixed_cd(status) {
    return 0;
  }

  calculate_char_result_cd(status) {
    return 0;
  }

  calculate_char_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_char_result_dmg_buff(status) {
    return 0;
  }

  calculate_basic_dmg(dmg_rate, status) {
    let basicDmg;
    basicDmg = dmg_rate[4] * status[4];
    return basicDmg;
  }

  calculate_char_debuff() {
    let char_debuff = [0,0,0];
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
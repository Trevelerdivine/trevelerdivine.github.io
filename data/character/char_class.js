class nahida {
  constructor(base_status_array, fixed_status_array, result_status_array) {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.dmg_rateCache = null;
    this.constellations = 0;
    this.level = 0;
    this.constValue = 0;
    this.checkboxStates;
    this.updateSelectValues();
    this.calculateConstValue();
    this.calculateCheckboxStates();
  }

  async dmg_rate_data() {
    if (this.dmg_rateCache) {
      return this.dmg_rateCache;
    }

    const response = await fetch("./data/character/nahida.json");
    const data = await response.json();
    const dmg_attck_rate = data.元素スキル.数値.攻撃力[10];
    const dmg_elm_rate = data.元素スキル.数値.元素熟知[10];
    const dmg_rate = [0, 0, dmg_elm_rate, 0, dmg_attck_rate, 0, 0];
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
    const status2 = this.result_status_array[2];
    return Math.min(Math.max(0, status2 - 200), 800) * 0.0003;
  }

  calculate_char_fixed_cd() {
    return 0;
  }

  calculate_char_result_cd() {
    return 0;
  }

  calculate_char_fixed_dmg_buff() {
    return 0.15;
  }

  calculate_char_result_dmg_buff() {
    const status2 = this.result_status_array[2];
    return Math.min(Math.max(0, status2 - 200), 800) * 0.001;
  }

  calculate_basic_dmg(dmg_rate) {
    const [status4, status2] = this.result_status_array;
    const attckRate = status4 * dmg_rate[4] / 100;
    const elmRate = status2 * dmg_rate[2] / 100;
    let basicDmg = (attckRate + elmRate + 1807.5 * (1 + 5 * status2 / (status2 + 1200))) * 1.1 / 0.9;
    if (this.constellations > 1 && this.checkboxStates[1]===true) {
      basicDmg *= this.constValue;
    }
    return basicDmg;
  }

  calculateConstValue() {
    const level = this.level;
    this.constValue = (290 + level) / (190 * 0.7 + 100 + level);
  }

  update_status(fixed_status_array, result_status_array) {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  updateSelectValues() {
    const char_constellations = document.getElementById("char_constellations").value;
    const char_level = parseInt(document.getElementById("char_level").value);
    this.constellations = char_constellations;
    this.level = char_level;
  }

  calculateCheckboxStates() {
    const checkboxStates = Array.from(document.querySelectorAll('#characterInfo input[type="checkbox"]')).map(checkbox => checkbox.checked);
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
      const response = await fetch("./data/character/raiden.json");
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

    update_status(fixed_status_array, result_status_array) {
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  }
class nahida {
    constructor(base_status_array, fixed_status_array, result_status_array) 
    {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }

    async dmg_rate_data() {
      const response = await fetch("./data/character/nahida.json");
      const data = await response.json();
      const dmg_attck_rate = data.元素スキル.数値.攻撃力[10];
      const dmg_elm_rate = data.元素スキル.数値.元素熟知[10];
      const dmg_rate = [0,dmg_attck_rate,0,dmg_elm_rate,0,0,0]; 
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
      return 0.2;
    }
  
    calculate_char_fixed_cr() {
      return  0;
    }
  
    calculate_char_result_cr() {
      return Math.min(Math.max(0,(this.result_status_array[3]-200)),800)*0.0003;
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
      return 0.15 + Math.min(Math.max(0,(this.result_status_array[3]-200)),800)*0.001;
    }

    calculate_basic_dmg(dmg_rate) {
      return (this.result_status_array[1]*dmg_rate[1]/100 + 
        this.result_status_array[3]*dmg_rate[3]/100+ 1807.5*(1 + 5 * this.result_status_array[3]/(this.result_status_array[3] + 1200)));
    }

    update_status(fixed_status_array, result_status_array) {
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
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
      const dmg_rate = [0,dmg_attck_rate,0,0,0,0,0]; 
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
      return 0.004*(this.result_status_array[4]-1) + 0.47 + Math.min(0.75,(this.result_status_array[4])/4);
    }
  
    calculate_char_result_dmg_buff() {
      return 0.004*(this.result_status_array[4]-1) + 0.47 + Math.min(0.75,(this.result_status_array[4])/4);
    }

    calculate_basic_dmg(dmg_rate) {
      return this.result_status_array[1] * dmg_rate[1]/100;
    }

    update_status(fixed_status_array, result_status_array) {
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  }
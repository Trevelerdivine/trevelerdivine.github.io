class nahida {
    constructor(base_status_array, fixed_status_array,) 
    {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
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

    calculate_basic_dmg() {
      return this.basic_dmg_array [1]* this.result_status_array[1] + this.basic_dmg_array [3]* this.result_status_array[3]
    }
  }
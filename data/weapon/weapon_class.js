class AThousandFloatingDreams {
    constructor(base_status_array, fixed_status_array, result_status_array) 
    {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  
    calculate_weapon_fixed_hp() {
      return 0;
    }
  
    calculate_weapon_result_hp() {
      return 0;
    }
  
    calculate_weapon_fixed_attck() {
      return 0;
    }
  
    calculate_weapon_result_attck() {
      return 0;
    }
  
    calculate_weapon_fixed_deff() {
      return 0;
    }
  
    calculate_weapon_result_deff() {
      return 0;
    }
  
    calculate_weapon_fixed_elm() {
      return 32;
    }
  
    calculate_weapon_result_elm() {
  
      return 32;
    }
  
    calculate_weapon_fixed_elm_charge() {
      return 0;
    }
  
    calculate_weapon_result_elm_charge() {
      return 0;
    }
  
    calculate_weapon_fixed_cr() {
      return 0;
    }
  
    calculate_weapon_result_cr() {
      return 0;
    }
  
    calculate_weapon_fixed_cd() {
      return 0;
    }
  
    calculate_weapon_result_cd() {
      return 0;
    }
  
    calculate_weapon_fixed_dmg_buff() {
      return 0.2;
    }
  
    calculate_weapon_result_dmg_buff() {
      return 0.2;
    }
  
    update_status(fixed_status_array, result_status_array) {
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  
  }

  ////////////////////

  class SacrificialFragments {
    constructor(base_status_array, fixed_status_array, result_status_array) 
    {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  
    calculate_weapon_fixed_hp() {
      return 0;
    }
  
    calculate_weapon_result_hp() {
      return 0;
    }
  
    calculate_weapon_fixed_attck() {
      return 0;
    }
  
    calculate_weapon_result_attck() {
      return 0;
    }
  
    calculate_weapon_fixed_deff() {
      return 0;
    }
  
    calculate_weapon_result_deff() {
      return 0;
    }
  
    calculate_weapon_fixed_elm() {
      return 0;
    }
  
    calculate_weapon_result_elm() {
  
      return 0;
    }
  
    calculate_weapon_fixed_elm_charge() {
      return 0;
    }
  
    calculate_weapon_result_elm_charge() {
      return 0;
    }
  
    calculate_weapon_fixed_cr() {
      return 0;
    }
  
    calculate_weapon_result_cr() {
      return 0;
    }
  
    calculate_weapon_fixed_cd() {
      return 0;
    }
  
    calculate_weapon_result_cd() {
      return 0;
    }
  
    calculate_weapon_fixed_dmg_buff() {
      return 0;
    }
  
    calculate_weapon_result_dmg_buff() {
      return 0;
    }
  
    update_status(fixed_status_array, result_status_array) {
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  
  }

  //////////////////

  class EngulfingLightning {
    constructor(base_status_array, fixed_status_array, result_status_array) 
    {
      this.base_status_array = base_status_array;
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  
    calculate_weapon_fixed_hp() {
      return 0;
    }
  
    calculate_weapon_result_hp() {
      return 0;
    }
  
    calculate_weapon_fixed_attck() {
      return 0;
    }
  
    calculate_weapon_result_attck() {
      return Math.min(this.result_status_array[4]- 1, 0.8/0.28)*0.28*this.base_status_array[1];
    }
  
    calculate_weapon_fixed_deff() {
      return 0;
    }
  
    calculate_weapon_result_deff() {
      return 0;
    }
  
    calculate_weapon_fixed_elm() {
      return 0;
    }
  
    calculate_weapon_result_elm() {
  
      return 0;
    }
  
    calculate_weapon_fixed_elm_charge() {
      return 0.3;
    }
  
    calculate_weapon_result_elm_charge() {
      return 0.3;
    }
  
    calculate_weapon_fixed_cr() {
      return 0;
    }
  
    calculate_weapon_result_cr() {
      return 0;
    }
  
    calculate_weapon_fixed_cd() {
      return 0;
    }
  
    calculate_weapon_result_cd() {
      return 0;
    }
  
    calculate_weapon_fixed_dmg_buff() {
      return 0;
    }
  
    calculate_weapon_result_dmg_buff() {
      return 0;
    }
  
    update_status(fixed_status_array, result_status_array) {
      this.fixed_status_array = fixed_status_array;
      this.result_status_array = result_status_array;
    }
  
  }

/////////////////

class EngulfingLightning {
  constructor(base_status_array, fixed_status_array, result_status_array) 
  {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  calculate_weapon_fixed_hp() {
    return 0;
  }

  calculate_weapon_result_hp() {
    return 0;
  }

  calculate_weapon_fixed_attck() {
    return 0;
  }

  calculate_weapon_result_attck() {
    return 0;
  }

  calculate_weapon_fixed_deff() {
    return 0;
  }

  calculate_weapon_result_deff() {
    return 0;
  }

  calculate_weapon_fixed_elm() {
    return 0;
  }

  calculate_weapon_result_elm() {

    return 0;
  }

  calculate_weapon_fixed_elm_charge() {
    return 0;
  }

  calculate_weapon_result_elm_charge() {
    return 0;
  }

  calculate_weapon_fixed_cr() {
    return 0.12;
  }

  calculate_weapon_result_cr() {
    return 0.12;
  }

  calculate_weapon_fixed_cd() {
    return 0;
  }

  calculate_weapon_result_cd() {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff() {
    return 0.32;
  }

  calculate_weapon_result_dmg_buff() {
    return 0.32;
  }

  update_status(fixed_status_array, result_status_array) {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

}


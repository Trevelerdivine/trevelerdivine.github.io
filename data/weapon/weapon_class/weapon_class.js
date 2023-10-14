class AThousandFloatingDreams {
  constructor(base_status_array, fixed_status_array, result_status_array) {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.select1 = 0; // select1の初期値を0に設定
    this.select2 = 0; // select2の初期値を0に設定
    this.weapon_rank = 1;
    this.updateSelectValues(); // 初期値を取得するためにupdateSelectValuesを呼び出す
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
    return (32 + 8 * (this.weapon_rank - 1)) * this.select1; // キャッシュしたselect1の値を使用する
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
    return (0.1 + 0.04 * (this.weapon_rank - 1))* this.select2; // キャッシュしたselect2の値を使用する
  }

  calculate_weapon_result_dmg_buff() {
    return 0;
  }

  update_status(fixed_status_array, result_status_array) {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  updateSelectValues() {
    const selectList1 = document.getElementById("traitSelect1");
    const selectList2 = document.getElementById("traitSelect2");
    const weapon_rank = document.getElementById("weapon_rank");
    this.select1 = selectList1.value;
    this.select2 = selectList2.value;
    this.weapon_rank = weapon_rank.value;
  }
  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
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

    calculate_weapon_debuff() {
      const weapon_debuff = [0,0];
      return weapon_debuff
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
      return Math.min(this.result_status_array[3]- 1, 0.8/0.28)*0.28*this.base_status_array[1];
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

    calculate_weapon_debuff() {
      const weapon_debuff = [0,0];
      return weapon_debuff
    }
  
  }

/////////////////

class TheCatch {
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
    return 0;
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
    return 0;
  }

  update_status(fixed_status_array, result_status_array) {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }

}

///////////////

class StaffofHoma {
  constructor(base_status_array, fixed_status_array, result_status_array) {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.weapon_rank = document.getElementById("weapon_rank").value;
  }

  calculate_weapon_fixed_hp() {

    return this.base_status_array[0] * (0.2 + (this.weapon_rank - 1) * 0.05);
  }

  calculate_weapon_result_hp() {
    return 0;
  }

  calculate_weapon_fixed_attck() {
    return 0;
  }

  calculate_weapon_result_attck() {
    const weapon_effect_box = document.getElementById("traitCheckbox");
    let weapon_buff = 0.008 + 0.002 * (this.weapon_rank - 1);
    if (weapon_effect_box.checked)
    {
      weapon_buff += 0.01 + 0.002 * (this.weapon_rank -1);
    }
    return this.result_status_array[0] * weapon_buff;
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

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

//////////////////////////

class HuntersPath {
  constructor(base_status_array, fixed_status_array, result_status_array) {
    this.base_status_array = base_status_array;
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
    this.weapon_rank = document.getElementById("weapon_rank").value;
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
    return 0.12 + (this.weapon_rank - 1) * 0.03;
  }

  calculate_weapon_result_dmg_buff() {
    return 0;
  }

  update_status(fixed_status_array, result_status_array) {
    this.fixed_status_array = fixed_status_array;
    this.result_status_array = result_status_array;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}
class AThousandFloatingDreams {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.select1 = 0; // select1の初期値を0に設定
    this.select2 = 0; // select2の初期値を0に設定
    this.weapon_rank = 1;
    this.updateSelectValues(); // 初期値を取得するためにupdateSelectValuesを呼び出す
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(ststus) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(ststus) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(ststus) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return (32 + 8 * (this.weapon_rank - 1)) * this.select1; // キャッシュしたselect1の値を使用する
  }

  calculate_weapon_result_elm(ststus) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(ststus) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(ststus) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(ststus) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return (0.1 + 0.04 * (this.weapon_rank - 1))* this.select2; // キャッシュしたselect2の値を使用する
  }

  calculate_weapon_result_dmg_buff(ststus) {
    return 0;
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

class SacrificialFragments {
  constructor(base_status_array) 
  {
    this.base_status_array = base_status_array;
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }

}

class EngulfingLightning {
  constructor(base_status_array) 
  {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);

  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return Math.min(status[3]- 1, 0.8/0.28)*0.07 * (this.weapon_rank + 3)*this.base_status_array[1];
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {

    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0.05 * (this.weapon_rank + 5);
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }

}

class TheCatch {
  constructor(base_status_array) 
  {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
  
    return 0.015 * (this.weapon_rank + 3);
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    if (attack_method_index == 4)
    {
      dmg_buff = 0.04 * (this.weapon_rank + 3)
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }

}

class StaffofHoma {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {

    return this.base_status_array[0] * (0.2 + (this.weapon_rank - 1) * 0.05);
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    const weapon_effect_box = document.getElementById("traitCheckbox");
    let weapon_buff = 0.008 + 0.002 * (this.weapon_rank - 1);
    if (weapon_effect_box.checked)
    {
      weapon_buff += 0.01 + 0.002 * (this.weapon_rank -1);
    }
    return status[0] * weapon_buff;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class HuntersPath {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0.12 + (this.weapon_rank - 1) * 0.03;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SkywardHarp {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0.2 + (this.weapon_rank - 1) * 0.05;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class RedhornStonethresher {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return this.base_status_array[1] * (this.weapon_rank + 3) * 0.07;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class Whiteblind {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.buff_count = parseInt(document.getElementById("Whiteblind_effect").value);
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    const weaponeffectCheckbox = document.getElementById("traitCheckbox");
    this.weapon_effect = weaponeffectCheckbox.checked ? 1 : 0;
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return this.base_status_array[4] * (this.weapon_rank + 3) * 0.015 * this.weapon_effect;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return this.base_status_array[1] * (this.weapon_rank + 3) * 0.015 * this.weapon_effect;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class CinnabarSpindle {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class LostPrayertotheSacredWinds {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.weapon_count = parseInt(document.getElementById("bursLostPrayertotheSacredWindst_buff").value);
    const weaponeffectCheckbox = document.getElementById("traitCheckbox");
    this.weapon_effect = weaponeffectCheckbox.checked ? 1 : 0;
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return (this.weapon_rank + 3) * 0.02 * this.weapon_count * this.weapon_effect;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TheWidsith {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.weapon_buffkind = parseInt(document.getElementById("TheWidsith_buff").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0
    if (this.weapon_buffkind == 0)
    {
      attack_buff = (this.weapon_rank + 3) * 0.15 * this.base_status_array[4];
    }
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    let elm_buff = 0
    if (this.weapon_buffkind == 2)
    {
      elm_buff = (this.weapon_rank + 3) * 60;
    }
    return elm_buff;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0
    if (this.weapon_buffkind == 1)
    {
      dmg_buff = (this.weapon_rank + 3) * 0.12;
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class DragonsBane {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let weapon_dmg_buff = 0;
    let weapon_effect_check = document.getElementById("traitCheckbox");
    if (weapon_effect_check.checked)
    {
      weapon_dmg_buff = (this.weapon_rank + 4) * 0.04;
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class Rust {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let weapon_dmg_buff = 0;
    if (attack_method_index == 0)
    {
      weapon_dmg_buff = (this.weapon_rank + 3) * 0.1;
    }
    else if (attack_method_index == 1)
    {
      weapon_dmg_buff = -0.1;
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class Slingshot {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let weapon_dmg_buff = 0;
    const weapon_effect_check = document.getElementById("traitCheckbox")
    if (weapon_effect_check.checked && (attack_method_index == 0 || attack_method_index == 1))
    {
      weapon_dmg_buff = (this.weapon_rank + 5) * 0.06;
    }
    else if (!weapon_effect_check.checked && (attack_method_index == 0 || attack_method_index == 1))
    {
      weapon_dmg_buff = -0.1;
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class ThunderingPulse {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.weapon_effect = parseInt(document.getElementById("ThunderingPulse_count").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return (this.weapon_rank + 3) * 0.05 * this.base_status_array[4];
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let weapon_dmg_buff = 0;
    const buff_mag = [0, 0.03, 0.06, 0.1]
    if (attack_method_index == 0)
    {
      weapon_dmg_buff = (this.weapon_rank + 3) * buff_mag[this.weapon_effect];
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class FavoniusWarbow {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class WolfsGravestone {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.weapon_effect = 0;
    const weapon_effect_check = document.getElementById("traitCheckbox");
    if(weapon_effect_check.checked)
    {
      this.weapon_effect = 1;
    }
  
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return (0.05 + 0.1 * this.weapon_effect) * (this.weapon_rank + 3) * this.base_status_array[4];
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class MistsplitterReforged {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.weapon_effectcount = parseInt(document.getElementById("Whiteblind_effect").value);
    this.elmental_flag = 0;
    if (char_propaty[0] != 7)
    {
      this.elmental_flag = 1;
    }
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let weapon_fix_dmgbuff = 0;
    if (this.weapon_effectcount != 3)
    {
      weapon_fix_dmgbuff =  this.elmental_flag * (0.03 + 0.02 * this.weapon_effectcount) * (this.weapon_rank + 3);
    }
    else
    {
      weapon_fix_dmgbuff =  this.elmental_flag * (0.1) * (this.weapon_rank + 3);
    }

    return weapon_fix_dmgbuff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class PrimordialJadeCutter {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return (this.weapon_rank + 3) * 0.05 * this.base_status_array[0];
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return (this.weapon_rank + 3) * 0.003 * status[0];
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class PolarStar {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let weapon_attack_buff;
    const weapon_buff_count = parseInt(document.getElementById("PolarStar_count").value);
    if (weapon_buff_count == 4)
    {
      weapon_attack_buff = (this.weapon_rank + 3) * 0.12 * this.base_status_array[4];
    }
    else
    {
      weapon_attack_buff = (this.weapon_rank + 3) * 0.025 * weapon_buff_count * this.base_status_array[4];
    }
    return weapon_attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let weapon_dmg_buff = 0;
    if(attack_method_index == 3 || attack_method_index ==4)
    {
      weapon_dmg_buff = (this.weapon_rank + 3) * 0.03
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class AquaSimulacra {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return (this.weapon_rank + 3) * 0.04 * this.base_status_array[0];
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let weapon_dmg_buff = 0;
    let weapon_buff_check = document.getElementById("traitCheckbox");
    if(weapon_buff_check.checked)
    {
      weapon_dmg_buff = (this.weapon_rank + 3) * 0.05
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TheStringless {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let weapon_dmg_buff = 0;
    if(char_propaty[0] != 7 && (attack_method_index == 3 || attack_method_index == 4))
    {
      weapon_dmg_buff = (this.weapon_rank + 3) * 0.06
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SacrificialSword {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class StaffoftheScarletSands {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.weapon_buff_count = parseInt(document.getElementById("StaffoftheScarletSands_effect").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return (0.13 + 0.07 * this.weapon_buff_count) * (this.weapon_rank + 3) * fixstatus[2];
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class KagurasVerity {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.weapon_buff_count = parseInt(document.getElementById("KagurasVerity_buff").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let weapon_dmg_buff = 0;
    weapon_dmg_buff = (this.weapon_rank + 3) * 0.03 * this.weapon_buff_count;
    if (this.weapon_buff_count == 3)
    {
      weapon_dmg_buff += (this.weapon_rank + 3) * 0.03
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class HarbingerofDawn {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.weapon_effect = 0;
    const prop_checkbox = document.getElementById("traitCheckbox");
    if (prop_checkbox.checked)
    {
      this.weapon_effect = 1;
    }
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return (this.weapon_rank + 3) * 0.035 * this.weapon_effect;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class FavoniusSword {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class PrototypeAmber {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SplendorOfTranquilWaters {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.dmg_buff_count = parseInt(document.getElementById("dmg_buff_count").value);
    this.hpbuff_count = parseInt(document.getElementById("HP_buff_count").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0.035 * (this.weapon_rank + 3) * this.hpbuff_count * this.base_status_array[0];
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    if (attack_method_index == 3)
    {
      dmg_buff = 0.02 * (this.weapon_rank + 3) * this.dmg_buff_count;
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class KeyofKhajNisut {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.buff_count = parseInt(document.getElementById("KeyofKhajNisut_count").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0.05 * (this.weapon_rank + 3) * this.base_status_array[0];
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    let elm_buff = 0.0003 * (this.weapon_rank + 3) * this.buff_count * status[0];
    if (this.buff_count == 3)
    {
      elm_buff += 0.0005 * (this.weapon_rank + 3) * status[0];
    }
    return elm_buff;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class HaranGeppakuFutsu {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    const buff_count = parseInt(document.getElementById("HaranGeppakuFutsu_count").value);
    this.dmg_buff = 0;
    if (char_propaty[0] != 7)
    {
      this.dmg_buff += 0.03 * (this.weapon_rank + 3);
    }
    if (attack_method_index == 0)
    {
      this.dmg_buff += 0.05 * buff_count * (this.weapon_rank + 3);
    }
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return this.dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class FreedomSworn {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.attack_buff = 0;
    this.dmg_buff = 0.025 * (this.weapon_rank + 3);
    const buff_check = document.getElementById("FreedomSworn_buff_check");
    if (buff_check.checked)
    {
      this.attack_buff = 0.05 * (this.weapon_rank + 3);
      if (attack_method_index == 0 || attack_method_index == 1 || attack_method_index == 2)
      this.dmg_buff += 0.04 * (this.weapon_rank + 3);
    }
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return this.base_status_array[4] * this.attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return this.dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SummitShaper {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    const buff_count = parseInt(document.getElementById("SummitShaper").value);
    this.attack_buff = 0.01 * (this.weapon_rank + 3) * buff_count;
    const buff_check = document.getElementById("SummitShaper_onfield");
    if (buff_check.checked)
    {
      this.attack_buff *= 2;
    }
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return this.base_status_array[4] * this.attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SkywardBlade {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0.01 * (this.weapon_rank + 3);
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class AquilaFavonia {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.attack_buff = 0.05 * (this.weapon_rank + 3);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return this.base_status_array[4] * this.attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TheDockhandsAssistant {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    const buff_count = parseInt(document.getElementById("TheDockhandsAssistant").value);
    this.elm_buff = 10 * buff_count * (this.weapon_rank + 3);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return this.elm_buff;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class WolfFang {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    const skill_buff_count = parseInt(document.getElementById("WolfFang_skillbuff").value);
    const burst_buff_count = parseInt(document.getElementById("WolfFang_burstbuff").value);
    let cr_buff = 0;
    if (attack_method_index == 3)
    {
      cr_buff = 0.005 * (this.weapon_rank + 3) * skill_buff_count
    }
    if (attack_method_index == 4)
    {
      cr_buff = 0.005 * (this.weapon_rank + 3) * burst_buff_count
    }
    return cr_buff;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    if (attack_method_index == 3 || attack_method_index == 4)
    {
      dmg_buff = 0.04 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class FleuveCendreFerryman {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    let elm_charge_buff = 0;
    const elm_charge_buff_check = document.getElementById("FleuveCendreFerryman_ecbuff");
    if (elm_charge_buff_check.checked)
    {
      elm_charge_buff = 0.04 * (this.weapon_rank + 3);
    }
    return elm_charge_buff;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    let cr_buff = 0;
    if (attack_method_index == 3)
    {
      cr_buff = 0.02 * (this.weapon_rank + 3);
    }
    return cr_buff;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class FinaleoftheDeep {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.effect_flag = 0;
    const effect_check = document.getElementById("FinaleoftheDeep_effect");
    if (effect_check.checked)
    {
      this.effect_flag = 1;
    }
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    const buff_check = document.getElementById("FinaleoftheDeep_attack_buff");
    if (buff_check.checked)
    {
      attack_buff = 0.03 * (this.weapon_rank + 3) * this.base_status_array[4];
    }

    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return Math.min(37.5 * (this.weapon_rank + 3), this.effect_flag * status[0] * 0.25 * 0.006 * (this.weapon_rank + 3));
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class ToukabouShigure {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const effect_check = document.getElementById("ToukabouShigure_buff");
    if (effect_check.checked)
    {
      dmg_buff = 0.04 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class XiphosMoonlight {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return fixstatus[2] * 0.00009 * (this.weapon_rank + 3);
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SapwoodBlade {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    let elm_buff = 0;
    const buff_check = document .getElementById("SapwoodBlade_buff");
    if (buff_check.checked)
    {
      elm_buff = 15 * (this.weapon_rank + 3);
    }
    return elm_buff;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class KagotsurubeIsshin {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    const buff_check = document.getElementById("KagotsurubeIsshin_buff");
    if (buff_check.checked)
    {
      attack_buff = 0.15 * this.base_status_array[4]
    }
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class AmenomaKageuchi {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TheAlleyFlash {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_check = document.getElementById("TheAlleyFlash_buff");
    if (buff_check.checked)
    {
      dmg_buff = 0.03 * (this.weapon_rank + 3)
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class FesteringDesire {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    let cr_buff = 0
    if (attack_method_index == 3)
    {
      cr_buff = 0.015 * (this.weapon_rank + 3);
    }
    return cr_buff;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    if (attack_method_index == 3)
    {
      dmg_buff = 0.04 * (this.weapon_rank + 3)
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TheBlackSword {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    if (attack_method_index == 0 || attack_method_index == 1)
    {
      dmg_buff = 0.05 * (this.weapon_rank + 3)
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class BlackcliffLongsword {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    const buff_count = parseInt(document.getElementById("BlackcliffLongsword_buff").value);
    const attack_buff = 0.03 * buff_count * (this.weapon_rank + 3) * this.base_status_array[4];
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class IronSting {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_count = parseInt(document.getElementById("IronSting_buff").value);
    dmg_buff = buff_count * 0.015 * (this.weapon_rank + 3);
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class PrototypeRancour {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.buff_count = parseInt(document.getElementById("PrototypeRancour_buff").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0.01 * (this.weapon_rank + 3) * this.buff_count * this.base_status_array[4];
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0.01 * (this.weapon_rank + 3) * this.buff_count * this.base_status_array[1];
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class LionsRoar {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const effect_check = document.getElementById("LionsRoar_buff");
    if (effect_check.checked)
    {
      dmg_buff = 0.04 * (this.weapon_rank + 4)
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class RoyalLongsword {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    let cr_buff = 0;
    const buff_count = parseInt(document.getElementById("RoyalLongsword_buff").value);
    cr_buff = 0.02 * (this.weapon_rank + 3) * buff_count;
    return cr_buff;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TheFlute {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SkyriderSword {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    const buff_check = document.getElementById("SkyriderSword_buff");
    if (buff_check.checked)
    {
      attack_buff = 0.03 * (this.weapon_rank + 3) * this.base_status_array[4]
    }
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class FilletBlade {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TravelersHandySword {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class CoolSteel {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_check = document.getElementById("CoolSteel_buff");
    if(buff_check.checked)
    {
      dmg_buff = 0.03 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class BeaconoftheReedSea {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    let buff_count = 0;
    const hp_buff_check3 = document.getElementById("BeaconoftheReedSea_buff3");
    if (hp_buff_check3.checked)
    {
      buff_count +=1
    }
    let hp_buff = 0.08 * buff_count * (this.weapon_rank + 3) * this.base_status_array[0];
    return hp_buff;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let buff_count = 0;
    const attack_buff_check1 = document.getElementById("BeaconoftheReedSea_buff1");
    const attack_buff_check2 = document.getElementById("BeaconoftheReedSea_buff2");
    if (attack_buff_check1.checked)
    {
      buff_count +=1
    }
    if (attack_buff_check2.checked)
    {
      buff_count +=1
    }
    let attack_buff = 0.05 * buff_count * (this.weapon_rank + 3) * this.base_status_array[4];
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SongofBrokenPines {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0.04 * (this.weapon_rank + 3) * this.base_status_array[4];
    const attack_buff_check1 = document.getElementById("SongofBrokenPines_buff1");
    if (attack_buff_check1.checked)
    {
      attack_buff += 0.05 * (this.weapon_rank + 3) * this.base_status_array[4];
    }
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TheUnforged {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    let effect_count = 1;
    const buff_effect_count = parseInt(document.getElementById("TheUnforged_buff2").value);
    const buff_effect_check = document.getElementById("TheUnforged_buff1");
    if (buff_effect_check.checked)
    {
      effect_count = 2;
    }
    attack_buff = 0.01 * (this.weapon_rank + 3) * buff_effect_count * effect_count * this.base_status_array[4];
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SkywardPride {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0.02 * (this.weapon_rank + 3);
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class PortablePowerSaw {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    const buff_count = parseInt(document.getElementById("PortablePowerSaw").value);
    let elm_buff = 10 * buff_count * (this.weapon_rank + 3);
    return elm_buff;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TalkingStick {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    const attack_buff_check = document.getElementById("TalkingStick_buff1");
    if (attack_buff_check.checked)
    {
      attack_buff = 0.04 * (this.weapon_rank + 3) * this.base_status_array[4];
    }
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const dmg_buff_check = document.getElementById("TalkingStick_buff2");
    if (dmg_buff_check.checked && char_propaty[0] != 7)
    {
      dmg_buff = 0.03 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TidalShadow {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    const attack_buff_check = document.getElementById("TidalShadow_buff1");
    if (attack_buff_check.checked)
    {
      attack_buff = 0.06 * (this.weapon_rank + 3) * this.base_status_array[4];
    }
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class MailedFlower {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.buff_flag = 0;
    const buff_check = document.getElementById("MailedFlower_buff1");
    if (buff_check.checked)
    {
      this.buff_flag = 1;
    }
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = this.buff_flag * 0.03 * (this.weapon_rank + 3) * this.base_status_array[4];
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    let elm_buff = this.buff_flag * 12 * (this.weapon_rank + 3);
    return elm_buff;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class MakhairaAquamarine {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0.06 * (this.weapon_rank + 3) * fixstatus[2];
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class ForestRegalia {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    let elm_buff = 0;
    const buff_check = document.getElementById("ForestRegalia_buff1");
    if (buff_check.checked)
    {
      elm_buff = 15 * (this.weapon_rank + 3);
    }
    return elm_buff;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class Akuoumaru {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    const total_burst_point = Math.max(0,parseInt(document.getElementById("Akuoumaru_buff1").value));
    let dmg_buff = 0
    if (attack_method_index == 4)
    {
      dmg_buff = Math.min(0.1 * (this.weapon_rank + 3), 0.0003 * total_burst_point * (this.weapon_rank + 3));
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class LuxuriousSeaLoad {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    if (attack_method_index == 4)
    {
      dmg_buff = 0.03 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class KatsuragikiriNagamasa {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    if (attack_method_index == 3)
    {
      dmg_buff = 0.015 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class LithicBlade {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.buff_count = parseInt(document.getElementById("LithicBlade_buff1").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0.01 * this.buff_count * (this.weapon_rank + 6) * this.base_status_array[4];
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0.01 * this.buff_count * (this.weapon_rank + 2);
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SnowTombedStarsilver {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SerpentSpine {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.buff_count = parseInt(document.getElementById("SerpentSpine_buff1").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0.01 * (this.weapon_rank + 5) * this.buff_count;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class BlackcliffSlasher {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    let buff_count = parseInt(document.getElementById("BlackcliffSlasher_buff1").value);
    attack_buff = 0.03 * (this.weapon_rank + 3) * buff_count * this.base_status_array[4];
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class PrototypeArchaic {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class Rainslasher {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_check = document.getElementById("Rainslasher_buff1");
    if (buff_check.checked)
    {
      dmg_buff = 0.04 * (this.weapon_rank + 4);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SacrificialGreatsword {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TheBell {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_check = document.getElementById("TheBell_buff1");
    if (buff_check.checked)
    {
      dmg_buff = 0.03 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class FavoniusGreatsword {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SkyriderGreatsword {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    const buff_count = parseInt(document.getElementById("SkyriderGreatsword_buff1").value);
    let attack_buff = 0.01 * (this.weapon_rank + 5) * buff_count * this.base_status_array[4]
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class DebateClub {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class WhiteIronGreatsword {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class BloodtaintedGreatsword {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_check = document.getElementById("BloodtaintedGreatsword_buff1");
    if (buff_check.checked)
    {
      dmg_buff = 0.03 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class FerrousShadow {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_check = document.getElementById("FerrousShadow_buff1");
    if (buff_check.checked && attack_method_index == 1)
    {
      dmg_buff = 0.05 * (this.weapon_rank + 5);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class CalamityQueller {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    let buff_effect = 1;
    const effect_check = document.getElementById("CalamityQueller_buff1");
    const buff_count = parseInt(document.getElementById("CalamityQueller_buff2").value);
    if (effect_check.checked)
    {
      buff_effect = 2;
    }
    attack_buff = 0.008 * buff_count * buff_effect * (this.weapon_rank + 3) * this.base_status_array[4];
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    if (attack_method_index != 7)
    {
      dmg_buff = 0.03 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class VortexVanguisher {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    let buff_effect = 1;
    const effect_check = document.getElementById("VortexVanguisher_sheild");
    const buff_count = parseInt(document.getElementById("VortexVanguisher_count").value);
    if (effect_check.checked)
    {
      buff_effect = 2;
    }
    attack_buff = 0.01 * buff_count * buff_effect * (this.weapon_rank + 3) * this.base_status_array[4];
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SkywardSpine {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0.02 * (this.weapon_rank + 3);
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class PrimordialJadeWingedSpear {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.buff_count = parseInt(document.getElementById("PrimordialJadeWingedSpear_count").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    const attack_buff = (0.025 + 0.007 * this.weapon_rank) * this.buff_count * this.base_status_array[4];
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    if (this.buff_count == 7)
    {
      dmg_buff = 0.03 * (this.weapon_rank + 3)
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class BalladoftheFjords {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    let elm_buff = 0;
    const buff_check = document.getElementById("BalladoftheFjords_effect");
    if (buff_check.checked)
    {
      elm_buff = 30 * (this.weapon_rank + 3);
    }
    return elm_buff;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class RightfulReward {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class MissiveWindspear {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.buff_flag = 0;
    const buff_check = document.getElementById("MissiveWindspear_effect");
    if (buff_check.checked)
    {
      this.buff_flag = 1;
    }
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0.03 * this.buff_flag * (this.weapon_rank + 3) * this.base_status_array[4];
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 12 * this.buff_flag * (this.weapon_rank + 3);
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class Moonpiercer {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    const buff_check = document.getElementById("Moonpiercer_effect");
    if (buff_check.checked)
    {
      attack_buff = 0.04 * (this.weapon_rank + 3) * this.base_status_array[4];
    }
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class WavebreakersFin {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    const total_burst_point = Math.max(0,parseInt(document.getElementById("Wavebreaker_buff1").value));
    let dmg_buff = 0
    if (attack_method_index == 4)
    {
      dmg_buff = Math.min(0.1 * (this.weapon_rank + 3), 0.0003 * total_burst_point * (this.weapon_rank + 3));
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class KitainCrossSpear {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0
    if (attack_method_index == 3)
    {
      dmg_buff = 0.015 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class LithicSpear {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.buff_count = parseInt(document.getElementById("LithicSpear_effect").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0.01 * this.buff_count * (this.weapon_rank + 6) * this.base_status_array[4];
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0.01 * this.buff_count * (this.weapon_rank + 2);
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class DragonspineSpear {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class FavoniusLance {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class Deathmatch {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    const buff_check = document.getElementById("LithicSpear_effect");
    if (buff_check.checked)
    {
      attack_buff = 0.04 * (this.weapon_rank + 3) * this.base_status_array[4];
    }
    else
    {
      attack_buff = 0.06 * (this.weapon_rank + 3) * this.base_status_array[4];
    }
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    let deff_buff = 0;
    const buff_check = document.getElementById("LithicSpear_effect");
    if (buff_check.checked)
    {
      deff_buff = 0.04 * (this.weapon_rank + 3) * this.base_status_array[4];
    }
    else
    {
      deff_buff = 0;
    }
    return deff_buff;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class BlackcliffPole {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    const buff_count = parseInt(document.getElementById("BlackcliffPole_effect").value);
    attack_buff = 0.03 * (this.weapon_rank + 3) * buff_count * this.base_status_array[4];
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class CrescentPike {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class PrototypeStarglitter {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class BlackTassel {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_check = document.getElementById("BlackTassel_effect");
    if (buff_check.checked)
    {
      dmg_buff = 0.1 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class WhiteTassel {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    if (attack_method_index == 0)
    {
      dmg_buff = 0.06 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TheFirstGreatMagic {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    const buff_count = parseInt(document.getElementById("TheFirstGreatMagic_effect").value);
    if (buff_count < 3)
    {
      attack_buff = 0.04 * (this.weapon_rank + 3) * buff_count * this.base_status_array[4];
    }
    else
    {
      attack_buff = 0.04 * (this.weapon_rank + 3) * 3 * this.base_status_array[4];
    }
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    if (attack_method_index == 1)
    {
      dmg_buff = 0.04 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class ElegyfortheEnd {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    const buff_check = document.getElementById("ElegyfortheEnd_effect");
    if (buff_check.checked)
    {
      attack_buff = 0.05 * (this.weapon_rank + 3) * this.base_status_array[4];
    }
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    let elm_buff = 15 * (this.weapon_rank + 3);
    const buff_check = document.getElementById("ElegyfortheEnd_effect");
    if (buff_check.checked)
    {
      elm_buff += 25 * (this.weapon_rank + 3);
    }
    return elm_buff;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class ScionoftheBlazingSun {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_check = document.getElementById("ScionoftheBlazingSun_effect");
    if (buff_check.checked && attack_method_index == 1)
    {
      dmg_buff = 0.07 * (this.weapon_rank + 3)
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SongofStillness {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_check = document.getElementById("SongofStillness_effect");
    if (buff_check.checked)
    {
      dmg_buff = 0.04 * (this.weapon_rank + 3)
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class IbisPiercer {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    let elm_buff = 0;
    const buff_count = parseInt(document.getElementById("IbisPiercer_count").value);
    elm_buff = 10 * (this.weapon_rank + 3) * buff_count;
    return elm_buff;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class KingsSquire {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    let elm_buff = 0;
    const buff_check = document.getElementById("KingsSquire_effect");
    if (buff_check.checked)
    {
      elm_buff = 20 * (this.weapon_rank + 2);
    }
    return elm_buff;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class EndoftheLine {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class FadingTwilight {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    const buff_count = parseInt(document.getElementById("FadingTwilight_effect").value);
    let dmg_buff = (0.005 + 0.01 * buff_count) * (this.weapon_rank + 3);
    if (buff_count == 0)
    {
      dmg_buff = 0;
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class MouunsMoon {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    const total_burst_point = Math.max(0,parseInt(document.getElementById("MouunsMoon_buff1").value));
    let dmg_buff = 0
    if (attack_method_index == 4)
    {
      dmg_buff = Math.min(0.1 * (this.weapon_rank + 3), 0.0003 * total_burst_point * (this.weapon_rank + 3));
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class Hamayumi {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let buff_count = 1;
    const buff_check = document.getElementById("Hamayumi_effect");
    let dmg_buff = 0;
    if (buff_check.checked)
    {
      buff_count = 2;
    }
    if (attack_method_index == 0)
    {
      dmg_buff = 0.04 * (this.weapon_rank + 3) * buff_count;
    }
    if (attack_method_index == 1)
    {
      dmg_buff = 0.03 * (this.weapon_rank + 3) * buff_count;
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class MitternachtsWaltz {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    const buff_check1 = document.getElementById("MitternachtsWaltz_effect1");
    const buff_check2 = document.getElementById("MitternachtsWaltz_effect2");
    let dmg_buff = 0;
    if (buff_check1.checked && attack_method_index == 0)
    {
      dmg_buff = 0.05 * (this.weapon_rank + 3);
    }
    if (buff_check2.checked && attack_method_index == 3)
    {
      dmg_buff = 0.05 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class WindblumeOde {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    const buff_check = document.getElementById("WindblumeOde_effect1");
    if (buff_check.checked)
    {
      attack_buff = 0.04 * (this.weapon_rank + 3) * this.base_status_array[4]
    }
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class AlleyHunter {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let buff_count = parseInt(document.getElementById("AlleyHunter_count").value);
    let dmg_buff = 0.005 * (this.weapon_rank + 3) * buff_count
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TheViridescentHunt {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class BlackcliffWarbow {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    const buff_count = parseInt(document.getElementById("BlackcliffWarbow_count").value);
    let attack_buff = 0.03 * buff_count * (this.weapon_rank + 3) * this.base_status_array[4];
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class CompoundBow {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    const buff_count = parseInt(document.getElementById("CompoundBow_count").value);
    let attack_buff = 0.01 * buff_count * (this.weapon_rank + 3) * this.base_status_array[4];
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class PrototypeCrescent {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    const buff_check = document.getElementById("PrototypeCrescent_effect");
    if (buff_check.checked)
    {
      attack_buff = 0.09 * (this.weapon_rank + 3) * this.base_status_array[4];
    }
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SacrificialBow {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class Messenger {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class RecurveBow {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class SharpshootersOath {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_check = document.getElementById("SharpshootersOath_effect");
    if (buff_check.checked)
    {
      dmg_buff = 0.06 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class RavenBow {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_check = document.getElementById("RavenBow_effect");
    if (buff_check.checked)
    {
      dmg_buff = 0.03 * (this.weapon_rank + 3);
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TomeoftheEternalFlow {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
    this.buff_count = parseInt(document.getElementById("TomeoftheEternalFlow_count").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    const hp_buff = 0.04 * (this.weapon_rank + 3) * this.base_status_array[0];
    return hp_buff;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_count = parseInt(document.getElementById("TomeoftheEternalFlow_count").value);
    if (attack_method_index == 1)
    {
      dmg_buff = (0.02 + 0.04 * (this.weapon_rank + 2)) * buff_count;
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class JadefallsSplendor {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_check = document.getElementById("JadefallsSplendor_effect");
    let buff_count = status[0] / 1000;
    if (buff_check.checked && attack_method_index != 7)
    {
      dmg_buff = Math.min((0.04 * (this.weapon_rank * 2 + 1)), (this.weapon_rank * 0.002 + 0.001) * buff_count);
    }
    return dmg_buff;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class TulaytullahsRemembrance {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_count = parseInt(document.getElementById("TulaytullahsRemembrance_count").value);
    if (attack_method_index ==0)
    {
      dmg_buff = 0.012 * (this.weapon_rank + 3) * buff_count;
    }
    return dmg_buff;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class MemoryofDust {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    let attack_buff = 0;
    let buff_effect = 1;
    const sheild_check = document.getElementById("MemoryofDust_onfield");
    const buff_count = parseInt(document.getElementById("MemoryofDust").value);
    if (sheild_check.checked)
    {
      buff_effect = 2;
    }
    attack_buff = buff_effect * 0.01 * (this.weapon_rank + 3) * buff_count * this.base_status_array[4];
    return attack_buff;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}

class BalladOfTheBoundlessBlue {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.weapon_rank = parseInt(document.getElementById("weapon_rank").value);
  }

  calculate_weapon_fixed_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_hp(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_attck(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_deff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cr(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_result_cd(fixstatus,status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(fixstatus,status) {
    let dmg_buff = 0;
    const buff_count = parseInt(document.getElementById("BalladOfTheBoundlessBlue_effect").value);
    if (attack_method_index == 0)
    {
      dmg_buff = 0.02 * (this.weapon_rank + 3) * buff_count;
    }
    if (attack_method_index == 1)
    {
      dmg_buff = 0.015 * (this.weapon_rank + 3) * buff_count;
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(fixstatus,status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}
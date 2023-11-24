class AThousandFloatingDreams {
  constructor(base_status_array) {
    this.base_status_array = base_status_array;
    this.select1 = 0; // select1の初期値を0に設定
    this.select2 = 0; // select2の初期値を0に設定
    this.weapon_rank = 1;
    this.updateSelectValues(); // 初期値を取得するためにupdateSelectValuesを呼び出す
  }

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(ststus) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(ststus) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(ststus) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return (32 + 8 * (this.weapon_rank - 1)) * this.select1; // キャッシュしたselect1の値を使用する
  }

  calculate_weapon_result_elm(ststus) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(ststus) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(ststus) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(ststus) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {

    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(status) {
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
  }

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return Math.min(status[3]- 1, 0.8/0.28)*0.28*this.base_status_array[1];
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {

    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0.3;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(status) {
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
  }

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {

    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0.12;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0.32;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {

    return this.base_status_array[0] * (0.2 + (this.weapon_rank - 1) * 0.05);
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    const weapon_effect_box = document.getElementById("traitCheckbox");
    let weapon_buff = 0.008 + 0.002 * (this.weapon_rank - 1);
    if (weapon_effect_box.checked)
    {
      weapon_buff += 0.01 + 0.002 * (this.weapon_rank -1);
    }
    return status[0] * weapon_buff;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0.12 + (this.weapon_rank - 1) * 0.03;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0.2 + (this.weapon_rank - 1) * 0.05;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return this.base_status_array[1] * (this.weapon_rank + 3) * 0.07;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return this.base_status_array[4] * (this.weapon_rank + 3) * 0.015 * this.weapon_effect;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return this.base_status_array[1] * (this.weapon_rank + 3) * 0.015 * this.weapon_effect;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return (this.weapon_rank + 3) * 0.02 * this.weapon_count * this.weapon_effect;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    let attack_buff = 0
    if (this.weapon_buffkind == 0)
    {
      attack_buff = (this.weapon_rank + 3) * 0.15 * this.base_status_array[4];
    }
    return attack_buff;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    let elm_buff = 0
    if (this.weapon_buffkind == 2)
    {
      elm_buff = (this.weapon_rank + 3) * 60;
    }
    return elm_buff;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    let dmg_buff = 0
    if (this.weapon_buffkind == 1)
    {
      dmg_buff = (this.weapon_rank + 3) * 0.12;
    }
    return dmg_buff;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    let weapon_dmg_buff = 0;
    let weapon_effect_check = document.getElementById("traitCheckbox");
    if (weapon_effect_check.checked)
    {
      weapon_dmg_buff = (this.weapon_rank + 4) * 0.04;
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
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

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
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

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return (this.weapon_rank + 3) * 0.05 * this.base_status_array[4];
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    let weapon_dmg_buff = 0;
    const buff_mag = [0, 0.03, 0.06, 0.1]
    if (attack_method_index == 0)
    {
      weapon_dmg_buff = (this.weapon_rank + 3) * buff_mag[this.weapon_effect];
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return (0.05 + 0.1 * this.weapon_effect) * (this.weapon_rank + 3) * this.base_status_array[4];
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(status) {
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
  }

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    let weapon_fix_dmgbuff = 0;
    if (this.weapon_effectcount != 3)
    {
      weapon_fix_dmgbuff =  (0.03 + 0.02 * this.weapon_effectcount) * (this.weapon_rank + 3);
    }
    else
    {
      weapon_fix_dmgbuff =  (0.1) * (this.weapon_rank + 3);
    }

    return weapon_fix_dmgbuff;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return (this.weapon_rank + 3) * 0.05 * this.base_status_array[0];
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return (this.weapon_rank + 3) * 0.003 * status[0];
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
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

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    let weapon_dmg_buff = 0;
    if(attack_method_index == 3 || attack_method_index ==4)
    {
      weapon_dmg_buff = (this.weapon_rank + 3) * 0.03
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return (this.weapon_rank + 3) * 0.04 * this.base_status_array[0];
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    let weapon_dmg_buff = 0;
    let weapon_buff_check = document.getElementById(traitCheckbox);
    if(weapon_buff_check.checked)
    {
      weapon_dmg_buff = (this.weapon_rank + 3) * 0.05
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    let weapon_dmg_buff = 0;
    if(char_propaty[0] != 7 && (attack_method_index == 3 || attack_method_index == 4))
    {
      weapon_dmg_buff = (this.weapon_rank + 3) * 0.06
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return (0.13 + 0.07 * this.weapon_buff_count) * (this.weapon_rank + 3) * status[2];
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    let weapon_dmg_buff = 0;
    if(char_propaty[0] != 7 && (attack_method_index == 3 || attack_method_index == 4))
    {
      weapon_dmg_buff = (this.weapon_rank + 3) * 0.06
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return 0;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    let weapon_dmg_buff = 0;
    weapon_dmg_buff = (this.weapon_rank + 3) * 0.03 * this.weapon_buff_count;
    if (this.weapon_buff_count == 3)
    {
      weapon_dmg_buff += (this.weapon_rank + 3) * 0.03
    }
    return weapon_dmg_buff;
  }

  calculate_weapon_result_dmg_buff(status) {
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

  calculate_weapon_fixed_hp(status) {
    return 0;
  }

  calculate_weapon_result_hp(status) {
    return 0;
  }

  calculate_weapon_fixed_attck(status) {
    return 0;
  }

  calculate_weapon_result_attck(status) {
    return 0;
  }

  calculate_weapon_fixed_deff(status) {
    return 0;
  }

  calculate_weapon_result_deff(status) {
    return 0;
  }

  calculate_weapon_fixed_elm(status) {
    return 0;
  }

  calculate_weapon_result_elm(status) {
    return 0;
  }

  calculate_weapon_fixed_elm_charge(status) {
    return 0;
  }

  calculate_weapon_result_elm_charge(status) {
    return 0;
  }

  calculate_weapon_fixed_cr(status) {
    return (this.weapon_rank + 3) * 0.0035 * this.weapon_effect;
  }

  calculate_weapon_result_cr(status) {
    return 0;
  }

  calculate_weapon_fixed_cd(status) {
    return 0;
  }

  calculate_weapon_result_cd(status) {
    return 0;
  }

  calculate_weapon_fixed_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_result_dmg_buff(status) {
    return 0;
  }

  calculate_weapon_debuff() {
    const weapon_debuff = [0,0];
    return weapon_debuff
  }
}
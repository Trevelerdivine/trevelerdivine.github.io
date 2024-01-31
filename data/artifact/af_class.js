
function af0_2()
{
    let checkbox = document.getElementById("af0_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0.18, 0, 0, 0]; 
    }
    return status_buff
}

function af0_4()
{
    let checkbox = document.getElementById("af0_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && (char_propaty [1] == 0 ||char_propaty[1] == 1 || char_propaty[1] == 2) && attack_method >= 1 && attack_method <= 5)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.35]; 
    }
    return status_buff
}

function af1_2()
{
    let checkbox = document.getElementById("af1_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 80, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af1_4()
{
    let checkbox = document.getElementById("af1_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && (char_propaty [1] == 3 || char_propaty[1] == 4) && attack_method >= 6 && attack_method <= 10)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.35]; 
    }
    return status_buff
}

function af2_2()
{
    let checkbox = document.getElementById("af2_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && attack_method >= 21 && attack_method <= 25)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.2]; 
    }
    return status_buff
}

function af2_4()
{
    let checkbox = document.getElementById("af2_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0.2, 0, 0, 0]; 
    }
    return status_buff
}

function af3_2()
{
    let checkbox = document.getElementById("af3_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && char_propaty [0] == 7)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.25]; 
    }
    return status_buff
}

function af3_4()
{
    let checkbox = document.getElementById("af3_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && attack_method >= 6 && attack_method <= 10)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.5]; 
    }
    return status_buff
}

function af4_2()
{
    let checkbox = document.getElementById("af4_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af4_4()
{
    let checkbox = document.getElementById("af4_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af5_2()
{
    let checkbox = document.getElementById("af5_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && char_propaty[0] == 4)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.15]; 
    }
    return status_buff
}

function af5_4()
{
    let checkbox = document.getElementById("af5_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af6_2()
{
    let checkbox = document.getElementById("af6_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && char_propaty[0] == 6)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.15]; 
    }
    return status_buff
}

function af6_4()
{
    let checkbox = document.getElementById("af6_4");
    const af6_4select = document.getElementById("af6_4select");
    const selectElement = af6_4select.value;
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && char_propaty[0] == selectElement)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.35]; 
    }
    return status_buff
}

function af7_2()
{
    let checkbox = document.getElementById("af7_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af7_4()
{
    let checkbox = document.getElementById("af7_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && (attack_method >= 1 && attack_method <= 10))
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.4]; 
    }
    return status_buff
}

function af8_2()
{
    let checkbox = document.getElementById("af8_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af8_4()
{
    let checkbox = document.getElementById("af8_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.35]; 
    }
    return status_buff
}

function af9_2()
{
    let checkbox = document.getElementById("af9_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.15]; 
    }
    return status_buff
}

function af9_4()
{
    let checkbox = document.getElementById("af9_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af10_2()
{
    let checkbox = document.getElementById("af10_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af10_4()
{
    let checkbox = document.getElementById("af10_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.35]; 
    }
    return status_buff
}

function af11_2()
{
    let checkbox = document.getElementById("af11_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && char_propaty[0] == 0)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.15]; 
    }
    return status_buff
}

function af11_4()
{
    let checkbox = document.getElementById("af11_4");
    const af11_4select = document.getElementById("af11_4select");
    const buff_count = af11_4select.value;
    let af11_4buff;
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && char_propaty[0] == 0)
    {
        af11_4buff = buff_count * 0.075;
        status_buff = [0, 0, 0, 0, 0, 0, 0, af11_4buff]; 
    }
    return status_buff
}

function af12_2()
{
    let checkbox = document.getElementById("af12_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && char_propaty[0] == 2)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.15]; 
    }
    return status_buff
}

function af12_4()
{
    let checkbox = document.getElementById("af12_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0];
    const af12_4select = document.getElementById("af12_4select");
    const buff_count = af12_4select.value;
    let af12_4buff;
    if (checkbox.checked)
    {
        af12_4buff = buff_count * 0.2;
        status_buff = [0, 0, 0, 0, 0, af12_4buff, 0, 0]; 
    }
    return status_buff
}

function af13_2()
{
    let checkbox = document.getElementById("af13_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && char_propaty[0] == 1)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.15]; 
    }
    return status_buff
}

function af13_4()
{
    let checkbox = document.getElementById("af13_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && (attack_method >= 1 && attack_method <= 10))
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.3]; 
    }
    return status_buff
}

function af14_2()
{
    let checkbox = document.getElementById("af14_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0.2, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af14_4()
{
    let checkbox = document.getElementById("af14_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0.2, 0, 0, 0]; 
    }
    return status_buff
}

function af15_2()
{
    let checkbox = document.getElementById("af15_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && char_propaty[0] == 7)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.25]; 
    }
    return status_buff
}

function af15_4()
{
    let checkbox = document.getElementById("af15_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    const af15_4select = document.getElementById("af15_4select");
    const buff_count = af15_4select.value;
    let af15_4_attackbuff = 0;
    let af15_4dmgbuff = 0;
    if (checkbox.checked)
    {
        af15_4_attackbuff = 0.09 * buff_count;
        if (buff_count == 2 && char_propaty[0] == 7)
        {
            af15_4dmgbuff = 0.25
        }
        status_buff = [0, 0, 0, 0, af15_4_attackbuff, 0, 0, af15_4dmgbuff]; 
    }
    return status_buff
}

function af16_2()
{
    let checkbox = document.getElementById("af16_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0.18, 0, 0, 0]; 
    }
    return status_buff
}

function af16_4()
{
    let checkbox = document.getElementById("af16_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && (attack_method >= 1 && attack_method <= 15))
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.5]; 
    }
    return status_buff
}

function af17_2()
{
    let checkbox = document.getElementById("af17_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0.2, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af17_4()
{
    let checkbox = document.getElementById("af17_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af18_2()
{
    let checkbox = document.getElementById("af18_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0.3, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af18_4()
{
    let checkbox = document.getElementById("af18_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    const af18_4select = document.getElementById("af18_4select");
    const buff_count = af18_4select.value;
    let af18_4deffbuff = 0;
    let af18_4dmgbuff = 0;
    if (checkbox.checked)
    {
        af18_4deffbuff = 0.06 * buff_count;
        if (char_propaty[0] == 6)
        {
            af18_4dmgbuff = af18_4deffbuff
        }
        status_buff = [0, af18_4deffbuff, 0, 0, 0, 0, 0, af18_4dmgbuff]; 
    }
    return status_buff
}

function af19_2()
{
    let checkbox = document.getElementById("af19_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0.18, 0, 0, 0]; 
    }
    return status_buff
}

function af19_4()
{
    let checkbox = document.getElementById("af19_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    const buff_count = parseInt(document.getElementById("af19_4select").value);
    let af19_4dmgbuff = 0.08;
    if (checkbox.checked)
    {
        af19_4dmgbuff += 0.1 * buff_count;
        status_buff = [0, 0, 0, 0, af19_4dmgbuff, 0, 0, 0]; 
    }
    return status_buff
}

function af20_2()
{
    let checkbox = document.getElementById("af20_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0.18, 0, 0, 0]; 
    }
    return status_buff
}

function af20_4()
{
    let checkbox = document.getElementById("af20_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af21_2()
{
    let checkbox = document.getElementById("af21_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 80, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af21_4()
{
    let checkbox = document.getElementById("af21_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    const af21_4_1select = document.getElementById("af21_4_1select");
    const atkbuff_count = af21_4_1select.value;
    const af21_4_2select = document.getElementById("af21_4_2select");
    const elmbuff_count = af21_4_2select.value;
    let af21_4atkbuff;
    let af21_4elmbuff;
    if (checkbox.checked)
    {
        af21_4atkbuff = 0.14 * atkbuff_count;
        af21_4elmbuff = 50 * elmbuff_count;
        status_buff = [0, 0, af21_4elmbuff, 0, af21_4atkbuff, 0, 0, 0]; 
    }
    return status_buff
}

function af22_2()
{
    let checkbox = document.getElementById("af22_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && char_propaty[0] == 5)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.15]; 
    }
    return status_buff
}

function af22_4()
{
    let checkbox = document.getElementById("af22_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af23_2()
{
    let checkbox = document.getElementById("af23_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && char_propaty[0] == 4)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.15]; 
    }
    return status_buff
}

function af23_4()
{
    let checkbox = document.getElementById("af23_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && (attack_method >= 1 && attack_method <= 15))
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.4]; 
    }
    return status_buff
}

function af24_2()
{
    let checkbox = document.getElementById("af24_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 80, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af24_4()
{
    let checkbox = document.getElementById("af24_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af25_2()
{
    let checkbox = document.getElementById("af25_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && char_propaty[0] == 1)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.15]; 
    }
    return status_buff
}

function af25_4()
{
    let checkbox = document.getElementById("af25_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    const af25_4select = document.getElementById("af25_4select");
    const buff_count = parseInt(af25_4select.value);
    let af25_4atkbuff = 0;
    let af25_4dmgbuff = 0;
    if (checkbox.checked)
    {
        if (buff_count > 0)
        {
            af25_4atkbuff = 0.07 + 0.09 * (buff_count - 1);
            if(char_propaty[0] == 1)
            { 
                af25_4dmgbuff = buff_count * (buff_count + 7) / 200;          
            }
        }
        status_buff = [0, 0, 0, 0, af25_4atkbuff, 0, 0, af25_4dmgbuff]; 
    }
    return status_buff
}

function af26_2()
{
    let checkbox = document.getElementById("af26_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0.2, 0, 0, 0, 0, 0, 0, 0]; 
    }
    return status_buff
}

function af26_4()
{
    let checkbox = document.getElementById("af26_4");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    const af26_4select = document.getElementById("af26_4select");
    const buff_count = af25_4select.value;
    let af26_4dmgbuff = 0;
    if (checkbox.checked && attack_method >= 16 && attack_method <= 25)
    {
        af26_4dmgbuff = 0.1 + 0.08 * buff_count;
        status_buff = [0, 0, 0, 0, 0, 0, 0, af26_4dmgbuff]; 
    }
    return status_buff
}

function af27_2()
{
    let checkbox = document.getElementById("af27_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && attack_method >= 16 && attack_method <= 20)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.2]; 
    }
    return status_buff
}

function af27_4()
{
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    const buff_check1 = document.getElementById("af27_4");
    const buff_check2 = document.getElementById("af27_4_effect");
    if (buff_check1.checked && attack_method >= 16 && attack_method <= 20)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.25]; 
        if (buff_check2.checked && attack_method >= 16 && attack_method <= 20)
        {
            status_buff = [0, 0, 0, 0, 0, 0, 0, 0.5]; 
        }
    }
    return status_buff;
}

function af28_2()
{
    let checkbox = document.getElementById("af28_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked && attack_method >= 1 && attack_method <= 10)
    {
        status_buff = [0, 0, 0, 0, 0, 0, 0, 0.15]; 
    }
    return status_buff;
}

function af28_4()
{
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    const buff_check1 = document.getElementById("af28_4");
    if (buff_check1.checked)
    {
        const cr_buff = parseInt(document.getElementById("af28_4select").value) * 0.12;
        status_buff = [0, 0, 0, 0, 0, cr_buff, 0, 0]; 
    }
    return status_buff
}

function af29_2()
{
    let checkbox = document.getElementById("af29_2");
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    if (checkbox.checked)
    {
        status_buff = [0, 0, 0, 0, 0.18, 0, 0, 0]; 
    }
    return status_buff;
}

function af29_4()
{
    let status_buff = [0, 0, 0, 0, 0, 0, 0, 0]; 
    const buff_check1 = document.getElementById("af29_4");
    const buff_check2 = document.getElementById("af29_4_effect");
    let geo_dmg_buff = 0
    if (buff_check1.checked && char_propaty[0] == 6)
    {
        geo_dmg_buff = 0.2;
        if (buff_check2.checked)
        {
            geo_dmg_buff += 0.3
        }
    }
    status_buff = [0, 0, 0, 0, 0, 0, 0, geo_dmg_buff]; 
    return status_buff
}


const set_effect2 = [af0_2, af1_2, af2_2, af3_2, af4_2, af5_2, af6_2, af7_2, af8_2, af9_2, af10_2,
    af11_2, af12_2, af13_2, af14_2, af15_2, af16_2, af17_2, af18_2, af19_2, af20_2,
    af21_2, af22_2, af23_2, af24_2, af25_2, af26_2, af27_2, af28_2, af29_2 
    ];
  
const set_effect4 = [ af0_4, af1_4, af2_4, af3_4, af4_4, af5_4, af6_4, af7_4, af8_4, af9_4, af10_4,
    af11_4, af12_4, af13_4, af14_4, af15_4, af16_4, af17_4, af18_4, af19_4, af20_4,
    af21_4, af22_4, af23_4, af24_4, af25_4, af26_4, af27_4, af28_4, af29_4 
    ];
class af0_2
{
   set_buff()
   {
        let af0_2_checkbox = document.getElementById("af0_2");
        let status_buff = [0, 0, 0, 0, 0, 0, 0]; 
        if (af0_2_checkbox.checked)
        {
            status_buff = [0, 0, 0, 0.18, 0, 0, 0]; 
        }
        return status_buff
   }
}

class af0_4
{
   set_buff()
   {
        let af0_4_checkbox = document.getElementById("af0_4");
        let status_buff = [0, 0, 0, 0, 0, 0, 0]; 
        if (af0_4_checkbox.checked)
        {
            status_buff = [0, 0, 0, 0, 0, 0, 0.35]; 
        }
        return status_buff
   }
}

class af1_2
{
   set_buff()
   {
        let af1_2_checkbox = document.getElementById("af1_2");
        let status_buff = [0, 0, 0, 0, 0, 0, 0]; 
        if (af1_2_checkbox.checked)
        {
            status_buff = [0, 0, 80, 0, 0, 0, 0]; 
        }
        return status_buff
   }
}

class af1_4
{
   set_buff()
   {
        let af1_4_checkbox = document.getElementById("af1_4");
        let status_buff = [0, 0, 0, 0, 0, 0, 0]; 
        if (af1_4_checkbox.checked)
        {
            status_buff = [0, 0, 0, 0, 0, 0, 0.35]; 
        }
        return status_buff
   }
}



const set_effect2 = [af0_2, af1_2, af2_2, af3_2, af4_2, af5_2, af6_2, af7_2, af8_2, af9_2, af10_2,
    af11_2, af12_2, af13_2, af14_2, af15_2, af16_2, af17_2, af18_2, af19_2, af20_2,
    af21_2, af22_2, af23_2, af24_2, af25_2
   ];
  
  const set_effect4 = [ af0_4, af1_4, af2_4, af3_4, af4_4, af5_4, af6_4, af7_4, af8_4, af9_4, af10_4,
     af11_4, af12_4, af13_4, af14_4, af15_4, af16_4, af17_4, af18_4, af19_4, af20_4,
     af21_4, af22_4, af23_4, af24_4, af25_4
   ];
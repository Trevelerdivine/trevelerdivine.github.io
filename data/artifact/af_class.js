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

const set_effect2 = [af0_2, af1_2
                    ];

const set_effect4 = [ af0_4, af1_4
                    ];
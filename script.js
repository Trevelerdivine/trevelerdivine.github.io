<script>
      function calculateDamage ()
      {
        const attck_prof = parseInt(document.getElementById("attck_prof").value);//プロフィール攻撃力
        const base_attck = parseInt(document.getElementById("base_attck").value);//基礎攻撃力
        const attck_sub = parseInt(document.getElementById("attck_sub").value);//サブステ攻撃力実数値
        const elm_sub = parseInt(document.getElementById("elm_sub").value);//サブステ元素熟知
        const cr_prof= parseFloat(document.getElementById("cr_prof").value);//プロフィール会心率
        const cd_prof = parseFloat(document.getElementById("cd_prof").value);//プロフィール会心ダメージ
	      const dlt_attck_r = 0.0001;//微小攻撃力％幅
	      const elm_const = 115 + 265 + 187 * 2;//元素熟知最低値
        const base_cr = 5 / 100;//基礎会心率
        const base_cd = 112.2 / 100;//基礎会心ダメージ
        let n = 0;//while１個目ループ回数
        let m = 0;//while２個目ループ回数
        let elm;//元素熟知
        let attck_r = (attck_prof - attck_sub - 311) / base_attck - 1;//メインステを含む聖遺物攻撃力％
        const score = (cr_prof - base_cr * 100) * 2 + (cd_prof - base_cd * 100) + attck_r * 400 / 3 + elm_sub / 3;//聖遺物スコアattckr_afの値を後で修正

        //頭文字af,聖遺物
        let af_attck_r = 0;//聖遺物攻撃力％
        let af_elm =  score * 3 - (af_attck_r + dlt_attck_r * m) * 400;//聖遺物元素熟知
       
        let attck;//攻撃力
        let result;

        //tlnt_,天賦補正
        let tlnt_cr;
        let tlnt_cd;
        let tlnt_dmg_buff;

        //agg_,激化
        let agg_dmg_bons;//激化ダメージボーナス
        let agg_exp_dmg;//激化ダメージ期待値

        //頭文字temp,一時保存のデータ
        let temp_agg_exp_dmg = 0;//激化ダメージ期待値の初期値
				let temp_cr;
				let temp_cd;
				let temp_attck;
				let temp_elm;
				let temp_tlnt_dmg_buff

				//頭文字f_,最終的に出力するデータ
				let f_cr;
				let f_cd;
				let f_attck;
				let f_elm;
				let f_dmg_buff
				let f_agg_exp_dmg = 0;//激化ダメージ期待値の初期値
				

				while (dlt_attck_r * m * 400 / 3 < score)
				{
					while (af_elm >= 0)
					{
      			// スコア配分元素熟知
       			elm = elm_const + af_elm;
						n = n + 1;//test

        		// 天賦バフ
        		tlnt_cr = base_cr  + (elm - 200) * 0.0003;
        		tlnt_dmg_buff = (elm - 200) * 0.001 + 0.15;
        		tlnt_cd = base_cd;
        		if (elm > 1000)
       			{
        			tlnt_cr = base_cr + 0.24;
        			tlnt_dmg_buff =0.8 + 0.15;
        		}
				
        		//聖遺物の会心系の配分
        		if (tlnt_cr * 2 < tlnt_cd)
        		{
							tlnt_cr = tlnt_cr+dlt_attck_r * m * 2 / 3;
        			if(tlnt_cr * 2 > tlnt_cd)
        			{
		 						tlnt_cr = (tlnt_cr * 2 + tlnt_cd) / 4;
		 						tlnt_cd = tlnt_cr * 2;
							}
						}
						else
						{
							tlnt_cd = tlnt_cd + dlt_attck_r * m * 4 / 3;
							if (tlnt_cr*2 < tlnt_cd)
							{
								tlnt_cr = (tlnt_cr * 2 + tlnt_cd) / 4;
								tlnt_cd = tlnt_cr * 2;
							}
						}

						//激化ボーナスの計算
						agg_dmg_bons = 1.25 * 1446 * (1 + 5 * elm / (elm + 1200));//激化ダメージボーナス

						//攻撃力の計算
						attck = base_attck * (af_attck_r + 1) + attck_sub + 311;

						//激化ダメージ期待値の計算
						agg_exp_dmg = (attck * 1.858 + elm * 3.715 + agg_dmg_bons) * (1 + (tlnt_cr * tlnt_cd)) * (tlnt_dmg_buff + 1) * 0.55;

						if (temp_agg_exp_dmg < agg_exp_dmg)
						{
							temp_agg_exp_dmg = agg_exp_dmg;
							temp_cr = tlnt_cr;
							temp_cd = tlnt_cd;
							temp_attck = attck;
							temp_elm = elm;
							temp_tlnt_dmg_buff = tlnt_dmg_buff
						}

						af_attck_r = af_attck_r + dlt_attck_r;
						af_elm =  score * 3 - (af_attck_r + dlt_attck_r * m) * 400;//聖遺物元素熟知

					}

					if (f_agg_exp_dmg < temp_agg_exp_dmg)
					{
						f_agg_exp_dmg = temp_agg_exp_dmg;
						f_cr = temp_cr;
						f_cd = temp_cd;
						f_attck = temp_attck;
						f_elm = temp_elm;
						f_dmg_buff = temp_tlnt_dmg_buff
					}
					m = m+1;
					temp_agg_exp_dmg = 0;
					af_attck_r = 0;
					af_elm =  score * 3 - (af_attck_r + dlt_attck_r * m) * 400;//聖遺物元素熟知
				}
				result = "ループ回数: " + n.toFixed(2) +"  聖遺物スコア: " + score.toFixed(1) +"  攻撃力: " + f_attck.toFixed(0)+"  元素熟知: " + f_elm.toFixed(0) +"  会心率: " + f_cr.toFixed(3) + "  会心ダメージ：" + f_cd.toFixed(3) + "激化ダメージ期待値: "+f_agg_exp_dmg.toFixed(0) + "ダメージバフ: "+f_dmg_buff.toFixed(3);

        document.getElementById("result").innerHTML = result;
      }
    </script>
async function create_char_instance(base_status, parameter) {
    let char_instance;
  
    switch (selectedCharId) {
      case "71":
        char_instance = new Lyney(base_status, parameter);
        break;
      case "0":
        char_instance = new dehya(base_status, parameter);
        break;
      case "1":
        char_instance = new yoimiya(base_status, parameter);
        break;
      case "2":
        char_instance = new hutao(base_status, parameter);
        break;
      case "3":
        char_instance = new klee(base_status, parameter);
        break;
      case "4":
        char_instance = new diluc(base_status, parameter);
        break;
      case "76":
        char_instance = new gaming(base_status, parameter);
        break;
      case "6":
        char_instance = new yanfei(base_status, parameter);
        break;
      case "7":
        char_instance = new xinyan(base_status, parameter);
        break;
      case "8":
        char_instance = new bennett(base_status, parameter);
        break;
      case "9":
        char_instance = new xiangling(base_status, parameter);
        break;
      case "10":
        char_instance = new amber(base_status, parameter);
        break;
      case "80":
        char_instance = new mualani(base_status, parameter);
        break;
      case "82":
        char_instance = new sigewinne(base_status, parameter);
        break;
      case "74":
        char_instance = new Furina(base_status, parameter);
        break;
      case "72":
        char_instance = new Neuvillette(base_status, parameter);
        break;
      case "11":
        char_instance = new nirou(base_status, parameter);
        break;
      case "12":
        char_instance = new yelan(base_status, parameter);
        break;
      case "13":
        char_instance = new kamisatoayato(base_status, parameter);
        break;
      case "15":
        char_instance = new tartaglia(base_status, parameter);
        break;
      case "18":
        char_instance = new barbara(base_status, parameter);
        break;
      case "19":
        char_instance = new xingqiu(base_status, parameter);
        break;
      case "73":
        char_instance = new Wriothesley(base_status, parameter);
        break;
      case "21":
        char_instance = new kamisatoayaka(base_status, parameter);
        break;
      case "22":
        char_instance = new eula(base_status, parameter);
        break;
      case "23":
        char_instance = new ganyu(base_status, parameter);
        break;
      case "28":
        char_instance = new rosaria(base_status, parameter);
        break;
      case "30":
        char_instance = new chongyun(base_status, parameter);
        break;
      case "31":
        char_instance = new kaeya(base_status, parameter);
        break;
      case "79":
        char_instance = new clorinde(base_status, parameter);
        break;
      case "32":
        char_instance = new cyno(base_status, parameter);
        break;
      case "33":
        char_instance = new yaemiko(base_status, parameter);
        break;
      case "34":
        char_instance = new raiden(base_status, parameter);
        break;
      case "35":
        char_instance = new keqing(base_status, parameter);
        break;
      case "83":
        char_instance = new sethos(base_status, parameter);
        break;
      case "38":
        char_instance = new kujousara(base_status, parameter);
        break;
      case "39":
        char_instance = new fischl(base_status, parameter);
        break;
      case "40":
        char_instance = new beidou(base_status, parameter);
        break;
      case "41":
        char_instance = new razor(base_status, parameter);
        break;
      case "42":
        char_instance = new lisa(base_status, parameter);
        break;
      case "44":
        char_instance = new wanderer(base_status, parameter);
        break;
      case "46":
        char_instance = new xiao(base_status, parameter);
        break;
      case "49":
        char_instance = new faruzan(base_status, parameter);
        break;
      case "50":
        char_instance = new shikanoinheizou(base_status, parameter);
        break;
      case "84":
        char_instance = new kinich(base_status, parameter);
        break;
      case "55":
        char_instance = new alhaitham(base_status, parameter);
        break;
      case "56":
        char_instance = new nahida(base_status, parameter);
        break;
      case "57":
        char_instance = new tighnari(base_status, parameter);
        break;
      case "58":
        char_instance = new kirara(base_status, parameter);
        break;
      case "62":
        char_instance = new travelardendro(base_status, parameter);
        break;
      case "77":
      char_instance = new chiori(base_status, parameter);
        break;
      case "75":
        char_instance = new Navia(base_status, parameter);
        break;
      case "63":
        char_instance = new aratakiitto(base_status, parameter);
        break;
      case "64":
        char_instance = new albedo(base_status, parameter);
        break;
      case "65":
        char_instance = new zhongli(base_status, parameter);
        break;
      case "81":
        char_instance = new kachina(base_status, parameter);
        break;
      case "68":
        char_instance = new noelle(base_status, parameter);
        break;
      case "69":
        char_instance = new ningguang(base_status, parameter);
        break;
      case "70":
        char_instance = new travelergeo(base_status, parameter);
        break;
      default:
        // 未知のキャラクターIDに対する処理を追加することもできます
        break;
    }
    
    return char_instance;
  }
  
  async function create_weapon_instance(base_status) {
    let weapon_instance;
    switch (selectedWeaponId) {
      case "0":
        weapon_instance = new LightofFoliarIncision(base_status);
        break;
      case "1":
        weapon_instance = new KeyofKhajNisut(base_status);
        break;
      case "2":
        weapon_instance = new HaranGeppakuFutsu(base_status);
        break;
      case "3":
        weapon_instance = new MistsplitterReforged(base_status);
        break;
      case "4":
        weapon_instance = new FreedomSworn(base_status);
        break;
      case "5":
        weapon_instance = new PrimordialJadeCutter(base_status);
        break;
      case "6":
        weapon_instance = new SummitShaper(base_status);
        break;
      case "7":
        weapon_instance = new SkywardBlade(base_status);
        break;
      case "8":
        weapon_instance = new AquilaFavonia(base_status);
        break;
      case "9":
        weapon_instance = new TheDockhandsAssistant(base_status);
        break;
      case "10":
        weapon_instance = new WolfFang(base_status);
        break;
      case "11":
        weapon_instance = new FleuveCendreFerryman(base_status);
        break;
      case "12":
        weapon_instance = new FinaleoftheDeep(base_status);
        break;
      case "13":
        weapon_instance = new ToukabouShigure(base_status);
        break;
      case "14":
        weapon_instance = new XiphosMoonlight(base_status);
        break;
      case "15":
        weapon_instance = new SapwoodBlade(base_status);
        break;
      case "16":
        weapon_instance = new KagotsurubeIsshin(base_status);
        break;
      case "17":
        weapon_instance = new CinnabarSpindle(base_status);
        break;
      case "18":
        weapon_instance = new AmenomaKageuchi(base_status);
        break;
      case "19":
        weapon_instance = new TheAlleyFlash(base_status);
        break;
      case "20":
        weapon_instance = new FesteringDesire(base_status);
        break;
      case "21":
        weapon_instance = new TheBlackSword(base_status);
        break;
      case "22":
        weapon_instance = new BlackcliffLongsword(base_status);
        break;
      case "23":
        weapon_instance = new IronSting(base_status);
        break;
      case "24":
        weapon_instance = new PrototypeRancour(base_status);
        break;
      case "25":
        weapon_instance = new LionsRoar(base_status);
        break;
      case "26":
        weapon_instance = new RoyalLongsword(base_status);
        break;
      case "27":
        weapon_instance = new SacrificialSword(base_status);
        break;
      case "28":
        weapon_instance = new TheFlute(base_status);
        break;
      case "29":
        weapon_instance = new FavoniusSword(base_status);
        break;
      case "30":
        weapon_instance = new SkyriderSword(base_status);
        break;
      case "31":
        weapon_instance = new FilletBlade(base_status);
        break;
      case "32":
        weapon_instance = new TravelersHandySword(base_status);
        break;
      case "33":
        weapon_instance = new HarbingerofDawn(base_status);
        break;
      case "34":
        weapon_instance = new CoolSteel(base_status);
        break;
      case "156":
        weapon_instance = new Verdict(base_status);
        break;
      case "35":
        weapon_instance = new BeaconoftheReedSea(base_status);
        break;
      case "36":
        weapon_instance = new RedhornStonethresher(base_status);
        break;
      case "37":
        weapon_instance = new SongofBrokenPines(base_status);
        break;
      case "38":
        weapon_instance = new TheUnforged(base_status);
        break;
      case "39":
        weapon_instance = new WolfsGravestone(base_status);
        break;
      case "157":
        weapon_instance = new UltimateTyrantSuperDevilSword(base_status);
        break;
      case "40":
        weapon_instance = new SkywardPride(base_status);
        break;
      case "41":
        weapon_instance = new PortablePowerSaw(base_status);
        break;
      case "42":
        weapon_instance = new TalkingStick(base_status);
        break;
      case "43":
        weapon_instance = new TidalShadow(base_status);
        break;
      case "44":
        weapon_instance = new MailedFlower(base_status);
        break;
      case "45":
        weapon_instance = new MakhairaAquamarine(base_status);
        break;
      case "46":
        weapon_instance = new ForestRegalia(base_status);
        break;
      case "47":
        weapon_instance = new Akuoumaru(base_status);
        break;
      case "48":
        weapon_instance = new LuxuriousSeaLoad(base_status);
        break;
      case "49":
        weapon_instance = new KatsuragikiriNagamasa(base_status);
        break;
      case "50":
        weapon_instance = new LithicBlade(base_status);
        break;
      case "51":
        weapon_instance = new SnowTombedStarsilver(base_status);
        break;
      case "52":
        weapon_instance = new SerpentSpine(base_status);
        break;
      case "53":
        weapon_instance = new BlackcliffSlasher(base_status);
        break;
      case "54":
        weapon_instance = new Whiteblind(base_status);
        break;
      case "55":
        weapon_instance = new PrototypeArchaic(base_status);
        break;
      case "57":
        weapon_instance = new Rainslasher(base_status);
        break;
      case "58":
        weapon_instance = new SacrificialGreatsword(base_status);
        break;
      case "59":
        weapon_instance = new TheBell(base_status);
        break;
      case "60":
        weapon_instance = new FavoniusGreatsword(base_status);
        break;
      case "61":
        weapon_instance = new SkyriderGreatsword(base_status);
        break;
      case "62":
        weapon_instance = new DebateClub(base_status);
        break;
      case "63":
        weapon_instance = new WhiteIronGreatsword(base_status);
        break;
      case "64":
        weapon_instance = new BloodtaintedGreatsword(base_status);
        break;
      case "65":
        weapon_instance = new FerrousShadow(base_status);
        break;
      case "66":
        weapon_instance = new StaffoftheScarletSands(base_status);
        break;
      case "67":
        weapon_instance = new CalamityQueller(base_status);
        break;
      case "68":
        weapon_instance = new EngulfingLightning(base_status);
        break;
      case "69":
        weapon_instance = new StaffofHoma(base_status);
        break;
      case "70":
        weapon_instance = new VortexVanguisher(base_status);
        break;
      case "71":
        weapon_instance = new SkywardSpine(base_status);
        break;
      case "72":
        weapon_instance = new PrimordialJadeWingedSpear(base_status);
        break;
      case "73":
        weapon_instance = new BalladoftheFjords(base_status);
        break;
      case "74":
        weapon_instance = new RightfulReward(base_status);
        break;
      case "75":
        weapon_instance = new MissiveWindspear(base_status);
        break;
      case "76":
        weapon_instance = new Moonpiercer(base_status);
        break;
      case "77":
        weapon_instance = new WavebreakersFin(base_status);
        break;
      case "78":
        weapon_instance = new TheCatch(base_status);
        break;
      case "79":
        weapon_instance = new KitainCrossSpear(base_status);
        break;
      case "80":
        weapon_instance = new LithicSpear(base_status);
        break;
      case "81":
        weapon_instance = new DragonspineSpear(base_status);
        break;
      case "83":
        weapon_instance = new FavoniusLance(base_status);
        break;
      case "84":
        weapon_instance = new Deathmatch(base_status);
        break;
      case "85":
        weapon_instance = new BlackcliffPole(base_status);
        break;
      case "86":
        weapon_instance = new CrescentPike(base_status);
        break;
      case "87":
        weapon_instance = new PrototypeStarglitter(base_status);
        break;
      case "88":
        weapon_instance = new DragonsBane(base_status);
        break;
      case "89":
        weapon_instance = new BlackTassel(base_status);
        break;
      case "90":
        weapon_instance = new WhiteTassel(base_status);
        break;
      case "91":
        weapon_instance = new TheFirstGreatMagic(base_status);
        break;
      case "92":
        weapon_instance = new HuntersPath(base_status);
        break;
      case "93":
        weapon_instance = new AquaSimulacra(base_status);
        break;
      case "94":
        weapon_instance = new PolarStar(base_status);
        break;
      case "95":
        weapon_instance = new ThunderingPulse(base_status);
        break;
      case "96":
        weapon_instance = new ElegyfortheEnd(base_status);
        break;
      case "97":
        weapon_instance = new AmosBow(base_status);
        break;
      case "98":
        weapon_instance = new SkywardHarp(base_status);
        break;
      case "99":
        weapon_instance = new ScionoftheBlazingSun(base_status);
        break;
      case "100":
        weapon_instance = new SongofStillness(base_status);
        break;
      case "101":
        weapon_instance = new IbisPiercer(base_status);
        break;
      case "102":
        weapon_instance = new KingsSquire(base_status);
        break;
      case "103":
        weapon_instance = new EndoftheLine(base_status);
        break;
      case "104":
        weapon_instance = new FadingTwilight(base_status);
        break;
      case "105":
        weapon_instance = new MouunsMoon(base_status);
        break;
      case "106":
        weapon_instance = new Hamayumi(base_status);
        break;
      case "107":
        weapon_instance = new MitternachtsWaltz(base_status);
        break;
      case "108":
        weapon_instance = new WindblumeOde(base_status);
        break;
      case "109":
        weapon_instance = new AlleyHunter(base_status);
        break;
      case "110":
        weapon_instance = new TheViridescentHunt(base_status);
        break;
      case "111":
        weapon_instance = new BlackcliffWarbow(base_status);
        break;
      case "112":
        weapon_instance = new CompoundBow(base_status);
        break;
      case "113":
        weapon_instance = new PrototypeCrescent(base_status);
        break;
      case "114":
        weapon_instance = new Rust(base_status);
        break;
      case "116":
        weapon_instance = new SacrificialBow(base_status);
        break;
      case "117":
        weapon_instance = new TheStringless(base_status);
        break;
      case "118":
        weapon_instance = new FavoniusWarbow(base_status);
        break;
      case "119":
        weapon_instance = new Messenger(base_status);
        break;
      case "120":
        weapon_instance = new Slingshot(base_status);
        break;
      case "121":
        weapon_instance = new RecurveBow(base_status);
        break;
      case "122":
        weapon_instance = new SharpshootersOath(base_status);
        break;
      case "123":
        weapon_instance = new RavenBow(base_status);
        break;
      case "154":
        weapon_instance = new CashflowSupervision(base_status);
        break;
      case "124":
        weapon_instance = new TomeoftheEternalFlow(base_status);
        break;
      case "125":
        weapon_instance = new JadefallsSplendor(base_status);
        break;
      case "126":
        weapon_instance = new TulaytullahsRemembrance(base_status);
        break;
      case "127":
        weapon_instance = new AThousandFloatingDreams(base_status);
        break;
      case "128":
        weapon_instance = new KagurasVerity(base_status);
        break;
      case "129":
        weapon_instance = new EverlastingMoonglow(base_status);
        break;
      case "130":
      weapon_instance = new MemoryofDust(base_status);
      break;
      case "131":
        weapon_instance = new LostPrayertotheSacredWinds(base_status);
        break;
      case "132":
        weapon_instance = new SkywardAtlas(base_status);
        break;
      case "133":
        weapon_instance = new BalladOfTheBoundlessBlue(base_status);
        break;
      case "134":
        weapon_instance = new SacrificialJade(base_status);
        break;
      case "135":
        weapon_instance = new FlowingPurity(base_status);
        break;
      case "136":
        weapon_instance = new WanderingEvenstar(base_status);
        break;
      case "137":
        weapon_instance = new FruitofFulfillment(base_status);
        break;
      case "138":
        weapon_instance = new OathswornEye(base_status);
        break;
      case "139":
        weapon_instance = new HakushinRing(base_status);
        break;
      case "140":
        weapon_instance = new DodocoTales(base_status);
        break;
      case "141":
        weapon_instance = new WineandSong(base_status);
        break;
      case "142":
        weapon_instance = new Frostbearer(base_status);
        break;
      case "143":
        weapon_instance = new EyeofPerception(base_status);
        break;
      case "144":
        weapon_instance = new BlackcliffAgate(base_status);
        break;
      case "145":
        weapon_instance = new MappaMare(base_status);
        break;
      case "146":
        weapon_instance = new PrototypeAmber(base_status);
        break;
      case "147":
        weapon_instance = new SolarPearl(base_status);
        break;
      case "149":
        weapon_instance = new SacrificialFragments(base_status);
        break;
      case "150":
        weapon_instance = new TheWidsith(base_status);
        break;
      case "151":
        weapon_instance = new FavoniusCodex(base_status);
        break;
      case "152":
        weapon_instance = new ThrillingTalesofDragonSlayers(base_status);
        break;
      case "153":
        weapon_instance = new MagicGuide(base_status);
        break;
      case "155":
        weapon_instance = new SplendorOfTranquilWaters(base_status);
        break;
      case "158":
        weapon_instance = new UrakuMisugiri(base_status);
        break;
      case "159":
        weapon_instance = new Absolution(base_status);
        break;
      case "160":
        weapon_instance = new SurfsUp(base_status);
        break;
      case "161":
        weapon_instance = new FluteOfEzpitzal(base_status);
        break;
      case "162":
        weapon_instance = new EarthShaker(base_status);
        break;
      case "163":
        weapon_instance = new FootprintoftheRainbow(base_status);
        break;
      case "164":
        weapon_instance = new RingofYaxche(base_status);
        break;
      case "165":
        weapon_instance = new ChainBreaker(base_status);
        break;
      case "166":
        weapon_instance = new SilvershowerHeartstrings(base_status);
        break;
      case "167":
        weapon_instance = new FangoftheMountainKing(base_status);
        break;
      default:
        // 未知の武器IDに対する処理を追加することもできます
        break;
    }
    return weapon_instance;
  }
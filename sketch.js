// this is changeable:
let x_width = 1215;
let x_height = 717;
//


let voronoi_diagram;
let img_to_display;
let colors_list = [];
let champion_list = [];
let champion_img_list = [];
// apostrophes and periods in champion variable names are replaced with _
function preload() {
  Aatrox_image = loadImage("images/champion-splashes/Aatrox_OriginalSkin.jpg");
  Ahri_image = loadImage("images/champion-splashes/Ahri_OriginalSkin.jpg");
  Akali_image = loadImage("images/champion-splashes/Akali_OriginalSkin.jpg");
  Akshan_image = loadImage("images/champion-splashes/Akshan_OriginalSkin.jpg");
  Alistar_image = loadImage("images/champion-splashes/Alistar_OriginalSkin.jpg");
  Amumu_image = loadImage("images/champion-splashes/Amumu_OriginalSkin.jpg");
  Anivia_image = loadImage("images/champion-splashes/Anivia_OriginalSkin.jpg");
  Annie_image = loadImage("images/champion-splashes/Annie_OriginalSkin.jpg");
  Aphelios_image = loadImage("images/champion-splashes/Aphelios_OriginalSkin.jpg");
  Ashe_image = loadImage("images/champion-splashes/Ashe_OriginalSkin.jpg");
  Aurelion_Sol_image = loadImage("images/champion-splashes/Aurelion_Sol_OriginalSkin.jpg");
  Azir_image = loadImage("images/champion-splashes/Azir_OriginalSkin.jpg");
  Bard_image = loadImage("images/champion-splashes/Bard_OriginalSkin.jpg");
  Bel_Veth_image = loadImage("images/champion-splashes/Bel'Veth_OriginalSkin.jpg");
  Blitzcrank_image = loadImage("images/champion-splashes/Blitzcrank_OriginalSkin.jpg");
  Brand_image = loadImage("images/champion-splashes/Brand_OriginalSkin.jpg");
  Braum_image = loadImage("images/champion-splashes/Braum_OriginalSkin.jpg");
  Caitlyn_image = loadImage("images/champion-splashes/Caitlyn_OriginalSkin.jpg");
  Camille_image = loadImage("images/champion-splashes/Camille_OriginalSkin.jpg");
  Cassiopeia_image = loadImage("images/champion-splashes/Cassiopeia_OriginalSkin.jpg");
  Cho_Gath_image = loadImage("images/champion-splashes/Cho'Gath_OriginalSkin.jpg");
  Corki_image = loadImage("images/champion-splashes/Corki_OriginalSkin.jpg");
  Darius_image = loadImage("images/champion-splashes/Darius_OriginalSkin.jpg");
  Diana_image = loadImage("images/champion-splashes/Diana_OriginalSkin.jpg");
  Dr__Mundo_image = loadImage("images/champion-splashes/Dr._Mundo_OriginalSkin.jpg");
  Draven_image = loadImage("images/champion-splashes/Draven_OriginalSkin.jpg");
  Ekko_image = loadImage("images/champion-splashes/Ekko_OriginalSkin.jpg");
  Elise_image = loadImage("images/champion-splashes/Elise_OriginalSkin.jpg");
  Evelynn_image = loadImage("images/champion-splashes/Evelynn_OriginalSkin.jpg");
  Ezreal_image = loadImage("images/champion-splashes/Ezreal_OriginalSkin.jpg");
  Fiddlesticks_image = loadImage("images/champion-splashes/Fiddlesticks_OriginalSkin.jpg");
  Fiora_image = loadImage("images/champion-splashes/Fiora_OriginalSkin.jpg");
  Fizz_image = loadImage("images/champion-splashes/Fizz_OriginalSkin.jpg");
  Galio_image = loadImage("images/champion-splashes/Galio_OriginalSkin.jpg");
  Gangplank_image = loadImage("images/champion-splashes/Gangplank_OriginalSkin.jpg");
  Garen_image = loadImage("images/champion-splashes/Garen_OriginalSkin.jpg");
  Gnar_image = loadImage("images/champion-splashes/Gnar_OriginalSkin.jpg");
  Gragas_image = loadImage("images/champion-splashes/Gragas_OriginalSkin.jpg");
  Graves_image = loadImage("images/champion-splashes/Graves_OriginalSkin.jpg");
  Gwen_image = loadImage("images/champion-splashes/Gwen_OriginalSkin.jpg");
  Hecarim_image = loadImage("images/champion-splashes/Hecarim_OriginalSkin.jpg");
  Heimerdinger_image = loadImage("images/champion-splashes/Heimerdinger_OriginalSkin.jpg");
  Illaoi_image = loadImage("images/champion-splashes/Illaoi_OriginalSkin.jpg");
  Irelia_image = loadImage("images/champion-splashes/Irelia_OriginalSkin.jpg");
  Ivern_image = loadImage("images/champion-splashes/Ivern_OriginalSkin.jpg");
  Janna_image = loadImage("images/champion-splashes/Janna_OriginalSkin.jpg");
  Jarvan_IV_image = loadImage("images/champion-splashes/Jarvan_IV_OriginalSkin.jpg");
  Jax_image = loadImage("images/champion-splashes/Jax_OriginalSkin.jpg");
  Jayce_image = loadImage("images/champion-splashes/Jayce_OriginalSkin.jpg");
  Jhin_image = loadImage("images/champion-splashes/Jhin_OriginalSkin.jpg");
  Jinx_image = loadImage("images/champion-splashes/Jinx_OriginalSkin.jpg");
  K_Sante_image = loadImage("images/champion-splashes/K'Sante_OriginalSkin.jpg");
  Kai_Sa_image = loadImage("images/champion-splashes/Kai'Sa_OriginalSkin.jpg");
  Kalista_image = loadImage("images/champion-splashes/Kalista_OriginalSkin.jpg");
  Karma_image = loadImage("images/champion-splashes/Karma_OriginalSkin.jpg");
  Karthus_image = loadImage("images/champion-splashes/Karthus_OriginalSkin.jpg");
  Kassadin_image = loadImage("images/champion-splashes/Kassadin_OriginalSkin.jpg");
  Katarina_image = loadImage("images/champion-splashes/Katarina_OriginalSkin.jpg");
  Kayle_image = loadImage("images/champion-splashes/Kayle_OriginalSkin.jpg");
  Kayn_image = loadImage("images/champion-splashes/Kayn_OriginalSkin.jpg");
  Kennen_image = loadImage("images/champion-splashes/Kennen_OriginalSkin.jpg");
  Kha_Zix_image = loadImage("images/champion-splashes/Kha'Zix_OriginalSkin.jpg");
  Kindred_image = loadImage("images/champion-splashes/Kindred_OriginalSkin.jpg");
  Kled_image = loadImage("images/champion-splashes/Kled_OriginalSkin.jpg");
  Kog_Maw_image = loadImage("images/champion-splashes/Kog'Maw_OriginalSkin.jpg");
  LeBlanc_image = loadImage("images/champion-splashes/LeBlanc_OriginalSkin.jpg");
  Lee_Sin_image = loadImage("images/champion-splashes/Lee_Sin_OriginalSkin.jpg");
  Leona_image = loadImage("images/champion-splashes/Leona_OriginalSkin.jpg");
  Lillia_image = loadImage("images/champion-splashes/Lillia_OriginalSkin.jpg");
  Lissandra_image = loadImage("images/champion-splashes/Lissandra_OriginalSkin.jpg");
  Lucian_image = loadImage("images/champion-splashes/Lucian_OriginalSkin.jpg");
  Lulu_image = loadImage("images/champion-splashes/Lulu_OriginalSkin.jpg");
  Lux_image = loadImage("images/champion-splashes/Lux_OriginalSkin.jpg");
  Malphite_image = loadImage("images/champion-splashes/Malphite_OriginalSkin.jpg");
  Malzahar_image = loadImage("images/champion-splashes/Malzahar_OriginalSkin.jpg");
  Maokai_image = loadImage("images/champion-splashes/Maokai_OriginalSkin.jpg");
  Master_Yi_image = loadImage("images/champion-splashes/Master_Yi_OriginalSkin.jpg");
  Milio_image = loadImage("images/champion-splashes/Milio_OriginalSkin.jpg");
  Miss_Fortune_image = loadImage("images/champion-splashes/Miss_Fortune_OriginalSkin.jpg");
  Mordekaiser_image = loadImage("images/champion-splashes/Mordekaiser_OriginalSkin.jpg");
  Morgana_image = loadImage("images/champion-splashes/Morgana_OriginalSkin.jpg");
  Nami_image = loadImage("images/champion-splashes/Nami_OriginalSkin.jpg");
  Nasus_image = loadImage("images/champion-splashes/Nasus_OriginalSkin.jpg");
  Nautilus_image = loadImage("images/champion-splashes/Nautilus_OriginalSkin.jpg");
  Neeko_image = loadImage("images/champion-splashes/Neeko_OriginalSkin.jpg");
  Nidalee_image = loadImage("images/champion-splashes/Nidalee_OriginalSkin.jpg");
  Nilah_image = loadImage("images/champion-splashes/Nilah_OriginalSkin.jpg");
  Nocturne_image = loadImage("images/champion-splashes/Nocturne_OriginalSkin.jpg");
  Nunu_image = loadImage("images/champion-splashes/Nunu_OriginalSkin.jpg");
  Olaf_image = loadImage("images/champion-splashes/Olaf_OriginalSkin.jpg");
  Orianna_image = loadImage("images/champion-splashes/Orianna_OriginalSkin.jpg");
  Ornn_image = loadImage("images/champion-splashes/Ornn_OriginalSkin.jpg");
  Pantheon_image = loadImage("images/champion-splashes/Pantheon_OriginalSkin.jpg");
  Poppy_image = loadImage("images/champion-splashes/Poppy_OriginalSkin.jpg");
  Pyke_image = loadImage("images/champion-splashes/Pyke_OriginalSkin.jpg");
  Qiyana_image = loadImage("images/champion-splashes/Qiyana_OriginalSkin.jpg");
  Quinn_image = loadImage("images/champion-splashes/Quinn_OriginalSkin.jpg");
  Rakan_image = loadImage("images/champion-splashes/Rakan_OriginalSkin.jpg");
  Rammus_image = loadImage("images/champion-splashes/Rammus_OriginalSkin.jpg");
  Rek_Sai_image = loadImage("images/champion-splashes/Rek'Sai_OriginalSkin.jpg");
  Rell_image = loadImage("images/champion-splashes/Rell_OriginalSkin.jpg");
  Renata_Glasc_image = loadImage("images/champion-splashes/Renata_Glasc_OriginalSkin.jpg");
  Renekton_image = loadImage("images/champion-splashes/Renekton_OriginalSkin.jpg");
  Rengar_image = loadImage("images/champion-splashes/Rengar_OriginalSkin.jpg");
  Riven_image = loadImage("images/champion-splashes/Riven_OriginalSkin.jpg");
  Rumble_image = loadImage("images/champion-splashes/Rumble_OriginalSkin.jpg");
  Ryze_image = loadImage("images/champion-splashes/Ryze_OriginalSkin.jpg");
  Samira_image = loadImage("images/champion-splashes/Samira_OriginalSkin.jpg");
  Sejuani_image = loadImage("images/champion-splashes/Sejuani_OriginalSkin.jpg");
  Senna_image = loadImage("images/champion-splashes/Senna_OriginalSkin.jpg");
  Seraphine_image = loadImage("images/champion-splashes/Seraphine_OriginalSkin.jpg");
  Sett_image = loadImage("images/champion-splashes/Sett_OriginalSkin.jpg");
  Shaco_image = loadImage("images/champion-splashes/Shaco_OriginalSkin.jpg");
  Shen_image = loadImage("images/champion-splashes/Shen_OriginalSkin.jpg");
  Shyvana_image = loadImage("images/champion-splashes/Shyvana_OriginalSkin.jpg");
  Singed_image = loadImage("images/champion-splashes/Singed_OriginalSkin.jpg");
  Sion_image = loadImage("images/champion-splashes/Sion_OriginalSkin.jpg");
  Sivir_image = loadImage("images/champion-splashes/Sivir_OriginalSkin.jpg");
  Skarner_image = loadImage("images/champion-splashes/Skarner_OriginalSkin.jpg");
  Sona_image = loadImage("images/champion-splashes/Sona_OriginalSkin.jpg");
  Soraka_image = loadImage("images/champion-splashes/Soraka_OriginalSkin.jpg");
  Swain_image = loadImage("images/champion-splashes/Swain_OriginalSkin.jpg");
  Sylas_image = loadImage("images/champion-splashes/Sylas_OriginalSkin.jpg");
  Syndra_image = loadImage("images/champion-splashes/Syndra_OriginalSkin.jpg");
  Tahm_Kench_image = loadImage("images/champion-splashes/Tahm_Kench_OriginalSkin.jpg");
  Taliyah_image = loadImage("images/champion-splashes/Taliyah_OriginalSkin.jpg");
  Talon_image = loadImage("images/champion-splashes/Talon_OriginalSkin.jpg");
  Taric_image = loadImage("images/champion-splashes/Taric_OriginalSkin.jpg");
  Teemo_image = loadImage("images/champion-splashes/Teemo_OriginalSkin.jpg");
  Thresh_image = loadImage("images/champion-splashes/Thresh_OriginalSkin.jpg");
  Tristana_image = loadImage("images/champion-splashes/Tristana_OriginalSkin.jpg");
  Trundle_image = loadImage("images/champion-splashes/Trundle_OriginalSkin.jpg");
  Tryndamere_image = loadImage("images/champion-splashes/Tryndamere_OriginalSkin.jpg");
  Twisted_Fate_image = loadImage("images/champion-splashes/Twisted_Fate_OriginalSkin.jpg");
  Twitch_image = loadImage("images/champion-splashes/Twitch_OriginalSkin.jpg");
  Udyr_image = loadImage("images/champion-splashes/Udyr_OriginalSkin.jpg");
  Urgot_image = loadImage("images/champion-splashes/Urgot_OriginalSkin.jpg");
  Varus_image = loadImage("images/champion-splashes/Varus_OriginalSkin.jpg");
  Vayne_image = loadImage("images/champion-splashes/Vayne_OriginalSkin.jpg");
  Veigar_image = loadImage("images/champion-splashes/Veigar_OriginalSkin.jpg");
  Vel_Koz_image = loadImage("images/champion-splashes/Vel'Koz_OriginalSkin.jpg");
  Vex_image = loadImage("images/champion-splashes/Vex_OriginalSkin.jpg");
  Viego_image = loadImage("images/champion-splashes/Viego_OriginalSkin.jpg");
  Viktor_image = loadImage("images/champion-splashes/Viktor_OriginalSkin.jpg");
  Vi_image = loadImage("images/champion-splashes/Vi_OriginalSkin.jpg");
  Vladimir_image = loadImage("images/champion-splashes/Vladimir_OriginalSkin.jpg");
  Volibear_image = loadImage("images/champion-splashes/Volibear_OriginalSkin.jpg");
  Warwick_image = loadImage("images/champion-splashes/Warwick_OriginalSkin.jpg");
  Wukong_image = loadImage("images/champion-splashes/Wukong_OriginalSkin.jpg");
  Xayah_image = loadImage("images/champion-splashes/Xayah_OriginalSkin.jpg");
  Xerath_image = loadImage("images/champion-splashes/Xerath_OriginalSkin.jpg");
  Xin_Zhao_image = loadImage("images/champion-splashes/Xin_Zhao_OriginalSkin.jpg");
  Yasuo_image = loadImage("images/champion-splashes/Yasuo_OriginalSkin.jpg");
  Yone_image = loadImage("images/champion-splashes/Yone_OriginalSkin.jpg");
  Yorick_image = loadImage("images/champion-splashes/Yorick_OriginalSkin.jpg");
  Yuumi_image = loadImage("images/champion-splashes/Yuumi_OriginalSkin.jpg");
  Zac_image = loadImage("images/champion-splashes/Zac_OriginalSkin.jpg");
  Zed_image = loadImage("images/champion-splashes/Zed_OriginalSkin.jpg");
  Zeri_image = loadImage("images/champion-splashes/Zeri_OriginalSkin.jpg");
  Ziggs_image = loadImage("images/champion-splashes/Ziggs_OriginalSkin.jpg");
  Zilean_image = loadImage("images/champion-splashes/Zilean_OriginalSkin.jpg");
  Zoe_image = loadImage("images/champion-splashes/Zoe_OriginalSkin.jpg");
  Zyra_image = loadImage("images/champion-splashes/Zyra_OriginalSkin.jpg");
  
  voronoi_diagram = loadImage("images/voronoi-maps/voronoi_diagram_smaller_size.png");
}





function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20, 20, 20);
  frameRate(30);
  // len 163:
  champion_img_list = [Aatrox_image,Ahri_image,Akali_image,Akshan_image,Alistar_image,Amumu_image,Anivia_image,Annie_image,Aphelios_image,Ashe_image,Aurelion_Sol_image,Azir_image,Bard_image,Bel_Veth_image,Blitzcrank_image,Brand_image,Braum_image,Caitlyn_image,Camille_image,Cassiopeia_image,Cho_Gath_image,Corki_image,Darius_image,Diana_image,Dr__Mundo_image,Draven_image,Ekko_image,Elise_image,Evelynn_image,Ezreal_image,Fiddlesticks_image,Fiora_image,Fizz_image,Galio_image,Gangplank_image,Garen_image,Gnar_image,Gragas_image,Graves_image,Gwen_image,Hecarim_image,Heimerdinger_image,Illaoi_image,Irelia_image,Ivern_image,Janna_image,Jarvan_IV_image,Jax_image,Jayce_image,Jhin_image,Jinx_image,K_Sante_image,Kai_Sa_image,Kalista_image,Karma_image,Karthus_image,Kassadin_image,Katarina_image,Kayle_image,Kayn_image,Kennen_image,Kha_Zix_image,Kindred_image,Kled_image,Kog_Maw_image,LeBlanc_image,Lee_Sin_image,Leona_image,Lillia_image,Lissandra_image,Lucian_image,Lulu_image,Lux_image,Malphite_image,Malzahar_image,Maokai_image,Master_Yi_image,Milio_image,Miss_Fortune_image,Mordekaiser_image,Morgana_image,Nami_image,Nasus_image,Nautilus_image,Neeko_image,Nidalee_image,Nilah_image,Nocturne_image,Nunu_image,Olaf_image,Orianna_image,Ornn_image,Pantheon_image,Poppy_image,Pyke_image,Qiyana_image,Quinn_image,Rakan_image,Rammus_image,Rek_Sai_image,Rell_image,Renata_Glasc_image,Renekton_image,Rengar_image,Riven_image,Rumble_image,Ryze_image,Samira_image,Sejuani_image,Senna_image,Seraphine_image,Sett_image,Shaco_image,Shen_image,Shyvana_image,Singed_image,Sion_image,Sivir_image,Skarner_image,Sona_image,Soraka_image,Swain_image,Sylas_image,Syndra_image,Tahm_Kench_image,Taliyah_image,Talon_image,Taric_image,Teemo_image,Thresh_image,Tristana_image,Trundle_image,Tryndamere_image,Twisted_Fate_image,Twitch_image,Udyr_image,Urgot_image,Varus_image,Vayne_image,Veigar_image,Vel_Koz_image,Vex_image,Viego_image,Viktor_image,Vi_image,Vladimir_image,Volibear_image,Warwick_image,Wukong_image,Xayah_image,Xerath_image,Xin_Zhao_image,Yasuo_image,Yone_image,Yorick_image,Yuumi_image,Zac_image,Zed_image,Zeri_image,Ziggs_image,Zilean_image,Zoe_image,Zyra_image]
  for(let i=0; i < champion_img_list.length; i++) {
    append(colors_list, [i, 0, (255 - i)]);
  }
}

function draw() {
  img_found = false;
  image(voronoi_diagram, (windowWidth/2) - (x_width/2), (windowHeight/2) - (x_height/2), x_width, x_height);
  // voronoi_diagram.resize(1215, 717);
  color_on_hover = voronoi_diagram.get(mouseX - ((windowWidth/2) - (x_width/2)), mouseY - ((windowHeight/2) - (x_height/2)));
  // i = 0;
  // while (!img_found) {
  //   if (colors_list[i][0] == color_on_hover[0]) {
  //     img_to_display = champion_img_list[i];
  //     image(img_to_display, (windowWidth/2) - (x_width/2), (windowHeight/2) - (x_height/2), x_width, x_height);
  //     img_found = true;
  //   }
  //   else {
  //     i = i + 1;
  //     img_found = false;
  //   }  
  // }
  
  for (let i = 0; i < colors_list.length; i++) {
    if (colors_list[i][0] == color_on_hover[0]) {
      img_to_display = champion_img_list[i];
      image(img_to_display, (windowWidth/2) - (x_width/2), (windowHeight/2) - (x_height/2), x_width, x_height);
      break; // stops the `for` loop
    }
  }
}
<?php
include 'config/connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $theme = $_POST['theme'];
  $message = $_POST['message'];
  $btn = $_POST['btn'];

  if ($name !='' && $email !='' && $theme !='' && $message !='') {
    $sql = "INSERT INTO contact (name,email,theme,message) VALUES ('$name','$email','$theme','$message')";
    $count = mysqli_query($connection,$sql);
  }
}

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/conf.php';
require_once __DIR__ . '/funcs.php';

if(isset($_POST['btn'])) {
  $body = "<h1>Письмо с сайта</h1>\n
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa doloribus eius illo in ipsam nisi, nulla odio quam quibusdam, repellat reprehenderit sapiente sit suscipit temporibus tenetur unde vel voluptate.";

  var_dump(send_mail($mail_settings_prod, ['my.resume.final@gmail.com'], 'Письмо с сайта', $body));
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Resume</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet icon" href="img/icon.png">
</head>
<body>
  <div class="cursor"><div class="min_curs"></div></div>
  <div class="settings"><h4><i class="fa-solid fa-gear"></i></h4></div>
    <div class="set_pat">
      <div class="container-fluid">
      <div class="row">
      <h3 class="col-12 x_mek">X</h3>
      <div class="col-12"><h6>Անսահմանափակ գույներ</h6></div>
      <div class="col-3" id="img_mek"><img src="img/1.png" alt="" class="img-fluid"></div>
      <div class="col-3" id="img_erku"><img src="img/2.png" alt="" class="img-fluid"></div>
      <div class="col-3" id="img_ereq"><img src="img/3.png" alt="" class="img-fluid"></div>
      <div class="col-3" id="img_chors"><img src="img/4.png" alt="" class="img-fluid"></div>
      <div class="col-3" id="img_hing"><img src="img/5.png" alt="" class="img-fluid"></div>
      <div class="col-3" id="img_vec"><img src="img/6.png" alt="" class="img-fluid"></div>
      <div class="col-3" id="img_yot"><img src="img/7.png" alt="" class="img-fluid"></div>
      <div class="col-3" id="img_ut"><img src="img/4.png" alt="" class="img-fluid" style="opacity: .5;"></div>
      <div class="col-12"><h6>Լույսի ռեժիմ</h6></div>
      <div class="col-12"><div class="light"><span class="back"><i class="fas fa-sun open"></i></span></div>
      <div class="dark"><span class="back"><i class="fas fa-moon open"></i></span></div>
      <div class="col-12"><h6>Կախարդական կուրսոր</h6></div>
      <div class="set">
      <div class="cell"><div class="cursor_img"><div class="min_curs_img"></div></div></div>
      <div class="default"><h5><i class="fa-solid fa-arrow-pointer"></i></h5></div>
      </div>
    </div>
    <div class="col-12"><a href="#" class="back" id="guyn_mek"><h6><i class="fa fa-shopping-cart" aria-hidden="true"></i> ԳՆԵԼ</h6></a></div>
        </div>
      </div>
    </div>
    <div class="container-fluid" id="cont_mek">
      <div class="row">
        <div class="col-12"><div class="orange">.</div></div>
        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ej_mek">
          <div class="mec_mek">
            <div class="pat_mek">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 person_mek">
                    <div class="my_photo_bg">
                      <img src="img/my_photo.png" alt="" class="img-fluid">
                    </div>
                  </div>
                  <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12 person_mek_text">
                    <div class="mec_text_mek">
                      <div class="get">Ճանաչիր ինձ</div>
                      <div class="name"><h1>Գարիկ Մարգարյան</h1></div>
                        <div class="underline">
                          <div class="ket"><h1>|</h1></div>
                          <div class="ket"><h1>|</h1></div>
                        </div>
                        <div class="name_slide">
                          <div class="slide_mec">
                            <h2 class="slide_text">ՎԵԲ ԾՐԱԳՐԱՎՈՐՈՂ</h2>
                            <h2 class="slide_text">ՎԵԲ ԾՐԱԳՐԱՎՈՐՈՂ</h2>
                            <h2 class="slide_text">ՎԵԲ ԾՐԱԳՐԱՎՈՐՈՂ</h2>
                          </div>
                        </div>
                        <div class="soc_media">
                          <div class="telegram">
                            <h2><i class="fa-brands fa-telegram"></i></h2>
                          </div>
                        <div class="facebook">
                          <h2><i class="fa-brands fa-facebook-square"></i></h2>
                        </div>
                        <div class="viber">
                          <h2><i class="fa-brands fa-viber"></i></h2>
                        </div>
                        <div class="whatsapp">
                          <h2><i class="fa-brands fa-whatsapp"></i></h2>
                        </div>
                        <div class="insta">
                          <h2><i class="fab fa-instagram-square" aria-hidden="true"></i></h2>
                        </div>
                      </div>
                        <div class="text">
                          Ես Full Stack Վեբ Ծրագրավորող եմ, ապրում եմ Հայաստանում։ Ստեղծում եմ կայքեր, որոնք համապատասխանում են ժամանակակից կայքերի ֆունկցիոնալին և դիզայնի վերջին միտումներին։
                      </div>
                      <div class="btn_mec">
                        <div class="btn_mek">
                          <div>Աշխատանքի առաջարկ</div>
                        </div>
                        <div class="btn_erku">
                          <div>Իմ մասին</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12 for_poa pad">
          <div class="koxi_mec">
            <div class="home">
              <h2><i class="fa fa-home-user" aria-hidden="true"></i></h2>
              <div class="home_text"><div>Գլխավոր էջ</div></div>
            </div>
            <div class="user">
              <h2><i class="fa fa-user" aria-hidden="true"></i></h2>
              <div class="about_text"><div>Իմ մասին</div></div>
            </div>
            <div class="portfolio">
              <h2><i class="fa-solid fa-briefcase"></i></h2>
              <div class="portfolio_text"><div>Պորտֆոլիո</div></div>
            </div>
            <div class="blog">
              <h2><i class="fa-solid fa-blog"></i></h2>
              <div class="blog_text"><div>Բլոգ</div></div>
            </div>
            <div class="phone">
              <h2><i class="fa fa-phone" aria-hidden="true"></i></h2>
              <div class="contact_text"><div>Կապ</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid" id="cont_erku">
      <div class="row">
        <div class="col-12 ej_erku">
          <div class="mec_erku">
            <div class="pat_erku">
              <div class="col-12">
                <div class="my_intro"><h6>Իմ ներածությունը</h6></div>
                <div class="about"><h1>Իմ <span>մասին</span></h1></div>
                <div class="underline">
                  <div class="ket"><h1>|</h1></div>
                  <div class="ket"><h1>|</h1></div>
                </div>
              </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 pers_img_erku">
                      <div class="my_photo_bg">
                        <img src="img/my_photo.png" alt="" class="img-fluid">
                      </div>
                    </div>
                    <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 pers_text_erku">
                      <div class="text_name">
                        <h2><h4>Ով եմ <span>ես ?</span></h4></h2>
                        <h2>Ես Գարիկ Մարգարյանն եմ, <span>Full Stack</span> Վեբ <span>Ծրագրավորող</span> եմ</h2>
                        <p>
                          Ես Full Stack Վեբ Ծրագրավորող եմ։ Ապրում եմ Հայաստանում։ Ստեղծում եմ կայքեր, որոնք համապատասխանում են ժամանակակից կայքերի ֆունկցիոնալին և դիզայնի վերջին միտումներին։
                           Ես օգնում եմ տեսլականն ու գաղափարը վերածել իմաստալից և օգտակար ապրանքների: 
                           Արտադրանքի էվոլյուցիայի նկատմամբ սուր աչք ունենալն օգնում է ինձ առաջնահերթություն տալ առաջադրանքներին, արագ կրկնել և ավելի արագ մատուցել:
                        </p>
                        <h3>Անձնական <span>տվյալներ</span></h3>
                        <div class="col-9 erku">
                          <p class="dem">Անուն : <a>Գարիկ</a></p>
                          <p>Էլ. փոստ : <span>mgarik48@gmail.com</span></p>
                        </div>
                        <div class="col-9 erku">
                          <p class="dem">Ազգանուն : <a>Մարգարյան</a></p>
                          <p>Հեռախոս : <span>+374 77-52-55-37</span></p>
                        </div>
                        <div class="col-9 erku">
                          <p class="dem">Հասցե : <a>Ք․ Աբովյան</a></p>
                          <p>Telegram : <span>+374 77-52-55-37</span></p>
                        </div>
                        <div class="col-9 erku">
                          <p>Viber : <span>+374 77-52-55-37</span></p>
                          <p>WhatsApp : <span>+374 77-52-55-37</span></p>
                        </div>
                        <div class="col-9 erku">
                          <p>Instagram : <a href="https://www.instagram.com/_garik_margaryan_/?igshid=YmMyMTA2M2Y%3D" target="_blank"><span>Իմ ինստագրամը</span></a></p>
                          <p>Facebook : <a href="https://www.facebook.com/garik.margaryan.77920" target="_blank"><span>Իմ Ֆեյսբուքը</span></a></p>
                        </div>
                        <div class="col-9 erku">
                          <p class="dem">Որտեղից : <a>Ք․ Աբովյան</a></p>
                          <p>Լեզուներ : <a>Հայերեն, Ռուսերեն</a></p>
                        </div>
                        <div class="col-8 erku">
                          <p class="dem">Տարիք : <a>16 Տարեկան</a></a></p>
                          <p>Օֆլայն աշխատանք : <a>Այո</a></p>
                          <p>Օնլայն աշխատանք : <a>Այո</a></p>
                        </div>
                        <h6 class="down_btn_text"><a href="download_resume/resume.txt"class="down_btn all" download="">Ներբեռնել CV <i class="fa fa-download" aria-hidden="true"></i></a></h6>
                        <div class="soc_media">
                          <div class="border"></div>
                          <div class="telegram">
                            <h2><i class="fa-brands fa-telegram"></i></h2>
                          </div>
                        <div class="facebook">
                          <h2><i class="fa-brands fa-facebook-square"></i></h2>
                        </div>
                        <div class="viber">
                          <h2><i class="fa-brands fa-viber"></i></h2>
                        </div>
                        <div class="whatsapp">
                          <h2><i class="fa-brands fa-whatsapp"></i></h2>
                        </div>
                        <div class="insta">
                          <h2><i class="fab fa-instagram-square" aria-hidden="true"></i></h2>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div class="col-12">
                <div class="check_name">
                  <h6>Ստուգեք Իմ ռեզյումեն</h6>
                  <h1 class="res">Իմ <span>Ռեզյումեն</span></h1>
                  <div class="underline">
                    <div class="ket"><h1>|</h1></div>
                    <div class="ket"><h1>|</h1></div>
                  </div>
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="dzax_mec">
                            <div class="name"><h3>Կրթություն</h3></div>
                            <div class="card card_vra">
                              <div class="container">
                                <div class="card-body">
                                  <div class="icon"><h1>..</h1></div>
                                  <h4 class="card-title">Վեբ Ծրագրավորման Դիպլոմ</h4>
                                  <p class="card-text">AbovAcademy / 2020 - 2021 թթ</p>
                                  <h6 class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
      
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="dzax_mec">
                            <div class="name"><h3>Փորձ</h3></div>
                            <div class="card card_vra">
                              <div class="container">
                                <div class="card-body">
                                  <div class="icon"><h1>..</h1></div>
                                  <h4 class="card-title">Կրտսեր Վեբ Ծրագրավորող</h4>
                                  <p class="card-text">EasyCoding / 2022 թթ</p>
                                  <h6 class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</h6>
                                </div>
                              </div>
                            </div>
                            <div class="card card_vra">
                              <div class="container">
                                <div class="card-body">
                                  <div class="icon"><h1>..</h1></div>
                                  <h4 class="card-title">Կրտսեր Վեբ Ծրագրավորող</h4>
                                  <p class="card-text">AbovAcademy / 2021 - 2022 թթ</p>
                                  <h6 class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</h6>
                                </div>
                              </div>
                            </div>
                            <div class="card card_vra">
                              <div class="container">
                                <div class="card-body">
                                  <div class="icon"><h1>..</h1></div>
                                  <h4 class="card-title">Կրտսեր Վեբ Ծրագրավորող</h4>
                                  <p class="card-text">Sahakyan ADS / 2021 - 2022 թթ</p>
                                  <h6 class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-12">
                <div class="my_levl">
                  <div class="name">
                    <h6>Իմ գիտելիքների մակարդակը որոշ լեզուներում</h6>
                  <h1 class="my">Իմ <span>Հմտությունները</span></h1>
                  <div class="underline">
                    <div class="ket"><h1>|</h1></div>
                    <div class="ket"><h1>|</h1></div>
                  </div>
                  </div>
                  <div class="name coding_levl mt-5"><h2>Ծրագրավորման <span>Լեզուներ</span></h2></div>
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="dzax_levl">
                            <div class="mec">
                              <div class="mek">
                                HTML
                                <div class="p_mek"><div class="gic_guyn"></div><div class="tokos"><h6><span>100%</span></h6></div></div>
                              </div>
                              <div class="erku">
                                CSS
                                <div class="p_mek"><div class="gic_guyn2"></div><div class="tokos"><h6><span>90%</span></h6></div></div>
                              </div>
                              <div class="ereq">
                                BOOTSTRAP
                                <div class="p_mek"><div class="gic_guyn3"></div><div class="tokos"><h6><span>100%</span></h6></div></div>
                              </div>
                              <div class="chors">
                                JavaScript
                                <div class="p_mek"><div class="gic_guyn4"></div><div class="tokos"><h6><span>90%</span></h6></div></div>
                              </div>
                              <div class="hing">
                                JQuery
                                <div class="p_mek"><div class="gic_guyn5"></div><div class="tokos"><h6><span>90%</span></h6></div></div>
                              </div>
                            </div>
                          </div>
                        </div>
      
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="aj_levl">
                            <div class="mec">
                              <div class="mek">
                                React . Js
                                <div class="p_mek"><div class="gic_guyn6"></div><div class="tokos"><h6><span>85%</span></h6></div></div>
                              </div>
                              <div class="erku">
                                PHP
                                <div class="p_mek"><div class="gic_guyn7"></div><div class="tokos"><h6><span>60%</span></h6></div></div>
                              </div>
                              <div class="ereq">
                                MySQL
                                <div class="p_mek"><div class="gic_guyn8"></div><div class="tokos"><h6><span>60%</span></h6></div></div>
                              </div>
                              <div class="chors">
                                Laravel
                                <div class="p_mek"><div class="gic_guyn9"></div><div class="tokos"><h6><span>80%</span></h6></div></div>
                              </div>
                              <div class="hing">
                                SCSS
                                <div class="p_mek"><div class="gic_guyn10"></div><div class="tokos"><h6><span>100%</span></h6></div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="service">
                <div class="name"><h6>Ծառայություններ, որոնք ես առաջարկում եմ իմ հաճախորդներին</h6></div>
                <h1 class="name_my">Իմ <span>Ծառայությունները</span></h1>
                <div class="underline">
                  <div class="ket"><h1>|</h1></div>
                  <div class="ket"><h1>|</h1></div>
                </div>
                <div class="col-10 lorem_text">
                  <h6>
                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown book.
                  </h6>
                </div>

                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card">
                          <div class="card-body fox">
                            <h1><i class="fas fa-code"></i></h1>
                            <h4 class="card-title">Վեբ Ծրագրավորում</h4>
                            <h6 class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card">
                          <div class="card-body fox">
                            <h1><i class="fas fa-radiation"></i></h1>
                            <h4 class="card-title">Անիմացիա</h4>
                            <h6 class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card">
                          <div class="card-body fox">
                            <h1><i class="fas fa-arrows-alt"></i></h1>
                            <h4 class="card-title">Պատասխանատու</h4>
                            <h6 class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="card">
                          <div class="card-body fox">
                            <h1><i class="fas fa-dharmachakra"></i></h1>
                            <h4 class="card-title">Կառավարում</h4>
                            <h6 class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                      <div class="what_name"><h6>Ինչ են ասում իմ հաճախորդները</h6></div>
                      <div class="test_name"><h1>Իմ <span>վկայությունը</span></h1></div>
                      <div class="underline">
                        <div class="ket"><h1>|</h1></div>
                        <div class="ket"><h1>|</h1></div>
                      </div>

                      <div class="for_car_slide">
                        <div class="container-fluid">
                          <div class="row">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card_erku">
                            <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                            <div class="min_img"><img src="img/car1.jpg" class="img-fluid" alt=""></div>
                            <div class="card-body">
                              <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                            </div>
                            <div class="astx">
                              <h6>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              </h6>
                            </div>
                          </div>
                        </div>
  
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card_erku">
                            <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                            <div class="min_img"><img src="img/car2.jpg" class="img-fluid" alt=""></div>
                            <div class="card-body">
                              <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                            </div>
                            <div class="astx">
                              <h6>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              </h6>
                            </div>
                          </div>
                        </div>
  
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 meki">
                          <div class="card_erku">
                            <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                            <div class="min_img"><img src="img/car3.jpg" class="img-fluid" alt=""></div>
                            <div class="card-body">
                              <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                            </div>
                            <div class="astx">
                              <h6>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                        </div>
                      </div>

                      <div class="for_car_min_mek">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="card_erku">
                            <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                            <div class="min_img"><img src="img/car3.jpg" class="img-fluid" alt=""></div>
                            <div class="card-body">
                              <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                            </div>
                            <div class="astx">
                              <h6>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="card_erku">
                            <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                            <div class="min_img"><img src="img/car4.jpg" class="img-fluid" alt=""></div>
                            <div class="card-body">
                              <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                            </div>
                            <div class="astx">
                              <h6>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              </h6>
                            </div>
                          </div>
                        </div>
                          </div>
                        </div>
                      </div>

                      <div class="for_car_min_erku">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="card_erku">
                            <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                            <div class="min_img"><img src="img/car3.jpg" class="img-fluid" alt=""></div>
                            <div class="card-body">
                              <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                            </div>
                            <div class="astx">
                              <h6>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div class="card_erku">
                            <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                            <div class="min_img"><img src="img/car1.jpg" class="img-fluid" alt=""></div>
                            <div class="card-body">
                              <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                            </div>
                            <div class="astx">
                              <h6>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              <i class="fas fa fa-star"></i>
                              </h6>
                            </div>
                          </div>
                        </div>
                          </div>
                        </div>
                      </div>

                      <div class="for_car_btn">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                              <div class="card_erku">
                                <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                                <div class="min_img"><img src="img/car4.jpg" class="img-fluid" alt=""></div>
                                <div class="card-body">
                                  <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                                </div>
                                <div class="astx">
                                  <h6>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  </h6>
                                </div>
                              </div>
                            </div>

                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                              <div class="card_erku">
                                <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                                <div class="min_img"><img src="img/car3.jpg" class="img-fluid" alt=""></div>
                                <div class="card-body">
                                  <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                                </div>
                                <div class="astx">
                                  <h6>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                              <div class="card_erku">
                                <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                                <div class="min_img"><img src="img/car1.jpg" class="img-fluid" alt=""></div>
                                <div class="card-body">
                                  <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                                </div>
                                <div class="astx">
                                  <h6>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="for_car_ereq">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                              <div class="card_erku">
                                <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                                <div class="min_img"><img src="img/car3.jpg" class="img-fluid" alt=""></div>
                                <div class="card-body">
                                  <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                                </div>
                                <div class="astx">
                                  <h6>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  </h6>
                                </div>
                              </div>
                            </div>

                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                              <div class="card_erku">
                                <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                                <div class="min_img"><img src="img/car4.jpg" class="img-fluid" alt=""></div>
                                <div class="card-body">
                                  <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                                </div>
                                <div class="astx">
                                  <h6>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                              <div class="card_erku">
                                <div class="chakert"><h1><i class="fas fa-quote-left"></i></h1></div>
                                <div class="min_img"><img src="img/car1.jpg" class="img-fluid" alt=""></div>
                                <div class="card-body">
                                  <h6 class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur,optio dolores aliquid </h6>
                                </div>
                                <div class="astx">
                                  <h6>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  <i class="fas fa fa-star"></i>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="container-fluid">
                        <div class="row">
                      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 btn_poxel_erku"><h6><span><i class="fa-solid fa-circle" id="erku"></i></span></h6></div>
                      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-1 col-sm-1 col-1 btn_poxel_mek"><h6><span><i class="fa-regular fa-circle" id="mek"></i></span></h6></div>
                      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-2 col-sm-2 col-2 btn_poxel_ereq"><h6><span><i class="fa-regular fa-circle" id="ereq"></i></span></h6></div>
                        </div>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" id="cont_ereq">
          <div class="row">
            <div class="col-12 ej_ereq">
              <div class="mec_ereq">
                <div class="pat_ereq">
                  <div class="col-12">
                    <h6 class="name">Իմ լավագույն ստեղծագործություններից մի քանիսը</h6>
                    <h1 class="my_portfolio">Իմ <span>Պորտֆոլիոն</span></h1>
                    <div class="underline">
                      <div class="ket"><h1>|</h1></div>
                      <div class="ket"><h1>|</h1></div>
                    </div>
                  </div>
                  <div class="col-12">
                      <div class="container-fluid">
                        <div class="row ereq">
                          <div class="for_mek offset-xxl-2 offset-xl-2 offset-lg-1 offset-md-1 offset-sm-1 offset-1 kn_mek"><h6>Բոլորը</h6></div>
                          <div class="for_erku arajin erk"><h6>Վեբ Ծրագրավորում</h6></div>
                          <div class="for_erku ere"><h6>Lorem 1</h6></div>
                          <div class="for_erku chor"><h6>Lorem 2</h6></div>
                          <div class="for_erku kn_hing"><h6>Lorem 3</h6></div>
                        </div>
                      </div>
                  </div>
                  <div class="col-12">
                    <div class="container-fluid">
                      <div class="row for_klo">
                        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" id="araj">
                          <div class="mek">
                              <div class="rt-container">
                              <div class="col-rt-12">
                              <div class="Scriptcontent">
                              <img id="myImg" src="img/item-1.jpg" alt="Trolltunga, Norway" class="img-fluid myImg">
                              <span id="myModal" class="modal">
                              <img class="modal-content" id="img01">
                              </span>
                              </div>
                              </div>
                              </div>
                            <span class="text_mec_mek">
                              <a class="text"><h4>Վեբ Ծրագրավորում</h4></a>
                            <a class="btn_pro" id="btn1"><h6>Նախագիծ</h6></a>
                            </span>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="mek">
                            <div class="rt-container">
                              <div class="col-rt-12">
                              <div class="Scriptcontent">
                              <img id="myImg2" src="img/item-2.jpg" alt="Trolltunga, Norway" class="img-fluid myImg">
                              <span id="myModal" class="modal">
                              <img class="modal-content" id="img01">
                              </span>
                              </div>
                              </div>
                              </div>
                              <span class="text_mec_mek">
                                <a class="text"><h4>Վեբ Ծրագրավորում</h4></a>
                              <a class="btn_pro" id="btn2"><h6>Նախագիծ</h6></a>
                              </span>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="mek">
                            <div class="rt-container">
                              <div class="col-rt-12">
                              <div class="Scriptcontent">
                              <img id="myImg3" src="img/item-3.jpg" alt="Trolltunga, Norway" class="img-fluid myImg">
                              <span id="myModal" class="modal">
                              <img class="modal-content" id="img01">
                              </span>
                              </div>
                              </div>
                              </div>
                              <span class="text_mec_mek">
                                <a class="text"><h4>Վեբ Ծրագրավորում</h4></a>
                              <a class="btn_pro" id="btn3"><h6>Նախագիծ</h6></a>
                              </span>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="mek">
                            <div class="rt-container">
                              <div class="col-rt-12">
                              <div class="Scriptcontent">
                              <img id="myImg4" src="img/item-4.jpg" alt="Trolltunga, Norway" class="img-fluid myImg">
                              <span id="myModal" class="modal">
                              <img class="modal-content" id="img01">
                              </span>
                              </div>
                              </div>
                              </div>
                              <span class="text_mec_mek">
                                <a class="text"><h4>Վեբ Ծրագրավորում</h4></a>
                              <a class="btn_pro" id="btn4"><h6>Նախագիծ</h6></a>
                              </span>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 tak">
                          <div class="mek">
                            <div class="rt-container">
                              <div class="col-rt-12">
                              <div class="Scriptcontent">
                              <img id="myImg5" src="img/item-5.jpg" alt="Trolltunga, Norway" class="img-fluid myImg">
                              <span id="myModal" class="modal">
                              <img class="modal-content" id="img01">
                              </span>
                              </div>
                              </div>
                              </div>
                              <span class="text_mec_mek">
                                <a class="text"><h4>Վեբ Ծրագրավորում</h4></a>
                              <a class="btn_pro" id="btn5"><h6>Նախագիծ</h6></a>
                              </span>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 tak">
                          <div class="mek">
                            <div class="rt-container">
                              <div class="col-rt-12">
                              <div class="Scriptcontent">
                              <img id="myImg6" src="img/item-6.jpg" alt="Trolltunga, Norway" class="img-fluid myImg">
                              <span id="myModal" class="modal">
                              <img class="modal-content" id="img01">
                              </span>
                              </div>
                              </div>
                              </div>
                              <span class="text_mec_mek">
                                <a class="text"><h4>Վեբ Ծրագրավորում</h4></a>
                              <a class="btn_pro" id="btn6"><h6>Նախագիծ</h6></a>
                              </span>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 tak">
                          <div class="mek">
                            <div class="rt-container">
                              <div class="col-rt-12">
                              <div class="Scriptcontent">
                              <img id="myImg7" src="img/item-7.jpg" alt="Trolltunga, Norway" class="img-fluid myImg">
                              <span id="myModal" class="modal">
                              <img class="modal-content" id="img01">
                              </span>
                              </div>
                              </div>
                              </div>
                              <span class="text_mec_mek">
                                <a class="text"><h4>Վեբ Ծրագրավորում</h4></a>
                              <a class="btn_pro" id="btn7"><h6>Նախագիծ</h6></a>
                              </span>
                          </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 tak verjin_img">
                          <div class="mek">
                            <div class="rt-container">
                              <div class="col-rt-12">
                              <div class="Scriptcontent">
                              <img id="myImg8" src="img/item-8.jpg" alt="Trolltunga, Norway" class="img-fluid myImg">
                              <span id="myModal" class="modal">
                              <img class="modal-content" id="img01">
                              </span>
                              </div>
                              </div>
                              </div>
                            <span class="text_mec_mek">
                              <a class="text"><h4>Վեբ Ծրագրավորում</h4></a>
                            <a class="btn_pro" id="btn8"><h6>Նախագիծ</h6></a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" id="cont_chors">
          <div class="row">
            <div class="col-12 ej_chors">
              <div class="mec_chors">
                <div class="pat_chors">
                  <div class="col-12">
                    <h6 class="name">Ստուգեք իմ վերջին բլոգի գրառումները</h6>
                    <h1 class="my_portfolio">Իմ <span>Բլոգը</span></h1>
                    <div class="underline">
                      <div class="ket"><h1>|</h1></div>
                      <div class="ket"><h1>|</h1></div>
                    </div>
                  </div>
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card">
                            <div class="for_img"><img src="img/character1.jpg" class="img-fluid" alt="..."></div>
                            <div class="card-body">
                              <div class="top"><span><h6>10 դեկտեմբերի, 2021 թ</h6></span></div>
                              <h5 class="demi">Վեբ Ծրագրավորում. Ինչպես հասնել հաջողության</h5>
                              <h5 class="het"><span>Վեբ Ծրագրավորում. Ինչպես հասնել հաջողության</span></h5>
                              <h6 class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card">
                            <img src="img/character2.jpg" class="img-fluid" alt="...">
                            <div class="card-body">
                              <div class="top"><span><h6>10 դեկտեմբերի, 2021 թ</h6></span></div>
                              <h5 class="demi">Վեբ Ծրագրավորում. Ինչպես հասնել հաջողության</h5>
                              <h5 class="het"><span>Վեբ Ծրագրավորում. Ինչպես հասնել հաջողության</span></h5>
                              <h6 class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card">
                            <img src="img/character3.jpg" class="img-fluid" alt="...">
                            <div class="card-body">
                              <div class="top"><span><h6>10 դեկտեմբերի, 2021 թ</h6></span></div>
                              <h5 class="demi">Վեբ Ծրագրավորում. Ինչպես հասնել հաջողության</h5>
                              <h5 class="het"><span>Վեբ Ծրագրավորում. Ինչպես հասնել հաջողության</span></h5>
                              <h6 class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</h6>
                            </div>
                          </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card">
                            <div class="for_img"><img src="img/character4.jpg" class="img-fluid" alt="..."></div>
                            <div class="card-body">
                              <div class="top"><span><h6>10 դեկտեմբերի, 2021 թ</h6></span></div>
                              <h5 class="demi">Վեբ Ծրագրավորում. Ինչպես հասնել հաջողության</h5>
                              <h5 class="het"><span>Վեբ Ծրագրավորում. Ինչպես հասնել հաջողության</span></h5>
                              <h6 class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card">
                            <img src="img/character5.jpg" class="img-fluid" alt="...">
                            <div class="card-body">
                              <div class="top"><span><h6>10 դեկտեմբերի, 2021 թ</h6></span></div>
                              <h5 class="demi">Վեբ Ծրագրավորում. Ինչպես հասնել հաջողության</h5>
                              <h5 class="het"><span>Վեբ Ծրագրավորում. Ինչպես հասնել հաջողության</span></h5>
                              <h6 class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card">
                            <img src="img/character6.jpg" class="img-fluid" alt="...">
                            <div class="card-body">
                              <div class="top"><span><h6>10 դեկտեմբերի, 2021 թ</h6></span></div>
                              <h5 class="demi">Վեբ Ծրագրավորում. Ինչպես հասնել հաջողության</h5>
                              <h5 class="het"><span>Վեբ Ծրագրավորում. Ինչպես հասնել հաջողության</span></h5>
                              <h6 class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" id="cont_hing">
          <div class="row">
            <div class="col-12">
              <div class="mec_hing">
                <div class="pat_hing">
                  <div class="col-12 ej_hing">
                    <h6 class="name">Կապվեք ինձ հետ</h6>
                    <h1 class="my_portfolio">Իմ <span>կոնտակտը</span></h1>
                    <div class="underline">
                      <div class="ket"><h1>|</h1></div>
                      <div class="ket"><h1>|</h1></div>
                    </div>
                  </div>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                        <div class="anun"><h3>Կապվեք ինձ հետ</h3></div>
                        <div class="koxer">
                          <div class="container-fluid"><div class="row">
                          <form action="" method="post" class="text-center contact_form">
                            <div class="container-fluid">
                              <div class="row">
                                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                  <input type="text" placeholder="Անուն" required name="name" id="name"></div>

                                   <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <input type="email" placeholder="Էլ․ Հասցե" required name="email" id="email"></div>

                          <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <input type="text" placeholder="Թեմա" required name="theme" id="theme"></div>

                          <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <textarea name="message" rows="5" placeholder="Հաղորդագրություն" id="message"></textarea></div>
                            
                          <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style="margin-bottom: 0;"><div class="sxm_mec"><span>
                            <button type="submit" name="btn" id="btn"><h6 class="for_erku back">Ուղարկել</h6></button></span></div></div>
                              </div>
                            </div>
                          </form>
                          </div></div>
                      </div>
                      </div>
                      <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                        <div class="anun"><h3>Կոնտակտային տվյալներ</h3></div>
                        <div class="min_text"><h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nemo harum cumque quas dolorem distinctio.</h6></div>
                        <div class="icon_mek">
                          <div class="container-fluid">
                          <div class="row"><div class="col-2"><span><h2><i class="fas fa-user-alt"></i></h2></span></div><div class="col-10"><div class="min_name"><h6>Անուն</h6></div><span><h6>Գարիկ Մարգարյան</h6></span></div></div>
                        </div></div>
                        <div class="icon_mek">
                          <div class="container-fluid">
                          <div class="row"><div class="col-2"><span><h2><i class="fas fa-map-pin"></i></h2></span></div><div class="col-10"><div class="min_name"><h6>Գտնվելու վայրը</h6></div><span><h6>Ք․ Աբովյան</h6></span></div></div>
                        </div></div>
                        <div class="icon_mek">
                          <div class="container-fluid">
                          <div class="row"><div class="col-2"><span><h2><i class="fas fa-phone-alt" style="transform: rotateZ(90deg);"></i></h2></span></div><div class="col-10"><div class="min_name"><h6>Զանգիր Ինձ</h6></div><span><h6>+374 77-52-55-37</h6></span></div></div>
                        </div></div>
                        <div class="icon_mek">
                          <div class="container-fluid">
                          <div class="row"><div class="col-2"><span><h2><i class="fas fa-envelope"></i></h2></span></div><div class="col-10"><div class="min_name"><h6>Էլ․ Հասցե</h6></div><span><h6>mgarik48@gmail.com</h6></span></div></div>
                        </div></div>
                        
                        <div class="soc_media">
                          <div class="border"></div>
                          <div class="telegram">
                            <h2><i class="fa-brands fa-telegram"></i></h2>
                          </div>
                        <div class="facebook">
                          <h2><i class="fa-brands fa-facebook-square"></i></h2>
                        </div>
                        <div class="viber">
                          <h2><i class="fa-brands fa-viber"></i></h2>
                        </div>
                        <div class="whatsapp">
                          <h2><i class="fa-brands fa-whatsapp"></i></h2>
                        </div>
                        <div class="insta">
                          <h2><i class="fab fa-instagram-square" aria-hidden="true"></i></h2>
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
                <div class="container-fluid cartez">
                  <div class="row">
                    <div class="col-12">
                      <div class="mapouter"><div class="gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Abovyan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/">divi discount</a><br><style>.mapouter{position:relative;text-align:right;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;}</style></div></div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-12"><div class="end_name"><h6>Հեղինակային իրավունք© 2022<i class="fa fa-heart" aria-hidden="true"></i> Բոլոր իրավունքները պաշտպանված են</h6></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>















  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="js/main.js"></script>
  <script src="https://smtpjs.com/v3/smtp.js"></script>
</body>
</html>
import React from "react";
import "./ForumLocation.css";
import susha from '../../assets/Home/susha.png'

const ForumLocation = () => {
  return (
    <>
      <div className="information-section location-sec">
        <div style={{ flex: "1" }}></div>
        <div className="container-xl px-0">
          <div className="info-content loc-h3">
            <h3 className="text-center" data-aos="fade-down" data-aos-duration="700">Forum məkanı</h3>
            <span className="info-red-circle"></span>
            <div className="info-content-div" data-aos="zoom-in" data-aos-duration="700"></div>
          </div>
          <div className="loc-p" data-aos="zoom-in" data-aos-duration="700">
            <p>
              Təməli 1752-ci ildə Qarabağ xanı Pənahəli xan tərəfindən qoyulan
              Şuşa şəhəri zəngin inkişaf yolu keçmiş, Azərbaycanın və bütün
              Cənubi Qafqazın mədəni və ictimai-siyasi həyatında müstəsna rol
              oynamışdır.
            </p>
            <br />

            <p>
              Bənzərsiz tarixi görkəmini və formalaşdırdığı özünəməxsus mühiti
              həmişə qoruyub saxlayan bu şəhər yetirdiyi böyük şəxsiyyətləri ilə
              Azərbaycanın tarixi-mədəni, ictimai-siyasi həyatının mühüm
              mərkəzlərindən biri olmuşdur. XIX əsrin sonu və XX əsrin
              əvvəllərində Şuşa Qafqazın musiqi və mədəniyyət mərkəzinə
              çevrilmiş, “Kiçik Paris”, “Qafqazın sənət məbədi”, “Azərbaycan
              musiqisinin beşiyi” və “Zaqafqaziyanın konservatoriyası”
              adlandırılmışdır.
            </p>
            <br />

            <p>
              Ötən əsrin 70-ci illərində Ümummilli Lider Heydər Əliyevin
              təşəbbüsü ilə Şuşa şəhərinin inkişafını sürətləndirən bir çox
              qərarlar qəbul edilmişdir. Həmin vaxtdan Şuşada quruculuq işləri
              geniş vüsət almış, mədəniyyət xadimlərimizin xatirəsinin
              əbədiləşdirilməsi istiqamətində mühüm addımlar atılmışdır.
            </p>
            <br />
            <p>
              Şuşanın təbiətinə nəzər salsaq qeyd edə bilərik ki, onun ərazisi
              zəngin flora və faunaya malikdir. Valehedici təbiəti olan Şuşanın
              ən yüksək zirvəsi Böyük Kirs dağıdır (2725 m). Burada yüksək
              dağlıq sahələr subalp və alp çəmənlikləri ilə örtülüdür. Şəhərin
              yaxınlığında yerləşən, tarixən cıdır yarışlarının keçirildiyi
              Cıdır düzü şəhərin yeganə və böyük hamar ərazisidir. Daşaltı
              kəndində karst mağaraları, “Şahnəzər” mağarası və şəhərin
              yaxınlığında yerləşən Daşaltı kanyonu Şuşanın geoloji təbiət
              hadisələrindəndir.
            </p>
            <br />

            <p>
              {" "}
              Azərbaycan Respublikası Prezidentinin Sərəncamı ilə Şuşa şəhəri
              Azərbaycanın mədəniyyət paytaxtı elan olunmuş, son illərdə Şuşa
              şəhəri bir çox beynəlxalq tədbir və festivallara ev sahibliyi
              etmişdir.
            </p>
          </div>
        </div>
        <div className="info-left-div-2" data-aos="zoom-in" data-aos-duration="700"></div>
      </div>
      <div className="container mb-4">
        <div className="explore-cont" data-aos="fade-down" data-aos-duration="700">
          <a target="_blank" rel="noreferrer"  href="https://www.virtualkarabakh.az/az/project2-item/39/249/susa-virtual-seyahet.html" className="explore-susha">Şuşanı kəşf et</a>
        </div>
      </div>
      <img style={{width: '100%'}} src={susha} alt="" />
    </>
  );
};

export default ForumLocation;

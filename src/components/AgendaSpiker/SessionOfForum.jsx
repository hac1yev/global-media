import React, { useState } from 'react';
import './SessionOfForum.css';
import session1_card1 from '../../assets/AgendaSpiker/sesson1-card1.png';
import session1_card2 from '../../assets/AgendaSpiker/sesson1-card2.jpeg';
import session1_card3 from '../../assets/AgendaSpiker/sesson1-card3.jpg';
import session1_card4 from '../../assets/AgendaSpiker/sesson1-card4.png';
import session1_card5 from '../../assets/AgendaSpiker/sesson1-card5.png';
import session1_card6 from '../../assets/AgendaSpiker/sesson1-card6.jpg';
import { useSelector } from 'react-redux';

const dummy_session = [
  {
    id: 's1',
    img: session1_card1,
    title: 'Aleksandru Giboi',
    description: 'Secretary General, Alliance of European News Agencies',
  },
  {
    id: 's2',
    img: session1_card2,
    title: 'Damjan Krnjevic Miskovic',
    description: 'Director for Policy Research, Analysis, and Publications, ADA University',
  },
  {
    id: 's3',
    img: session1_card3,
    title: 'Evgenia Doitcheva Droumeva',
    description: 'Deputy Director General, “BTA” New Agency',
  },
  {
    id: 's4',
    img: session1_card4,
    title: 'Matz Muhy Abdulhamid Obada',
    description: 'Centre for Strategic Studies of Republic of Iraq',
  },
  {
    id: 's5',
    img: session1_card5,
    title: 'Mohammad Talal Abdulkarim',
    description: ' Manager of Training Department, Aljazeera Media Institute',
  },
  {
    id: 's6',
    img: session1_card6,
    title: 'Yusuf Özhan',
    description: 'Deputy Director General, Editor-in-Chief, Anadolu Agency',
  },
];

const SessionOfForum = () => {
  const lang = useSelector(state => state.langReducer.lang);
  const [isEtrafli,setIsEtrafli] = useState(false);

  const handleEtrafli = () => {
    setIsEtrafli(true);
  };

  return (
    <div className='container session-container mb-4'>
      <div className="tab-content session-content" id="pills-tabContent">
        <ul class="nav nav-pills session-nav-pills mb-3 col-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Sessiya 1</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Sessiya 2</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Sessiya 3</button>
          </li>
        </ul>
        <div className="tab-pane fade row justify-content-end show active session1-tab" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className='session-ətraflı-content col-md-9'>
            <h2 className='text-start col-md-10' data-aos="fade-down" data-aos-duration="700">
              Medianın gələcəyi: Rəqəmsal dövrdə jurnalistika və kommunikasiyada yeni alətlər və medianın rolu
            </h2>
            <p className={ isEtrafli ? 'session-overflow-p session-etrafli-p' : 'session-overflow-p' }>
              Rəqəmsal kommunikasiya və informasiya texnologiyalarının inkişafı ilə ənənəvi medianın yeni media 
              növlərinə qarşı rəqabətdə xəbər mənbəyi kimi aktual qalma zərurəti ənənəvi informasiya sənayesinin 
              rəqəmsal transformasiyasını labüdləşdirir. Eyni zamanda, qlobal informasiya mühitində dezinformasiyanın 
              və yanlış məlumatların sürətli və geniş yayılması, müxtəlif tərəflərlə düzgün kommunikasiya siyasətinin 
              qurulması, xüsusən də media subyektlərinin fəaliyyətinin effektivliyinin artırılması dövrün ən aktual 
              məsələsinə çevrilmişdir. Xüsusilə qlobal miqyasda əhəmiyyətli məsələlərə dair həssas mövzuların müəyyən 
              edilməsi və bu istiqamətdə mövcud ehtiyaclar əsasında məlumatların effektiv və çevik şəkildə yayılması 
              bir çox məqamda həlledici təsirə malikdir. Media sahəsində baş verən dəyişikliklər xəbərin hədəf kütləyə 
              daha uğurlu çatdırılması üçün yeni jurnalistika növlərinin daha çox istifadəsinə, yeni trendlərin 
              müxtəlif istiqamətlərdə geniş tətbiqinə zərurət yaradır. Müasir dövrdə həm insanların ictimai şüurunda 
              informasiyanın tutduğu yeri, həm də informasiya-kommunikasiya texnologiyalarının cəmiyyətin həyatında 
              olan əhəmiyyətli rolunu nəzərə alaraq, bu gün “media” özündə tamamilə yeni məna ehtiva edir, mediada 
              alətlər, istehsalçı və istehlakçılar, həmçinin, müxtəlif proseslərdə medianın rolu davamlı dəyişir.
              <br /><br />
              Forum iştirakçıları tərəfindən bu sessiyada dövlətin effektiv və səmərəli kommunikativ əlaqələrinin 
              inkişafı, media vasitəsilə çoxtərəfli əlaqələrin qurulması ilə bağlı müzakirələr aparılacaq, ənənəvi 
              medianın bugünkü rolu və gələcəyi, yeni tendensiyalar fonunda jurnalistikada yaranan çətinliklər və 
              aktuallaşan yeni istiqamətlər, eləcə də bu sahədə rəqəmsal alətlərin tətbiqinin yaratdığı nəticələr 
              müzakirə ediləcəkdir.
              <br /><br />
              <p style={{ fontWeight: 900 }}>
                Sessiya çərçivəsində keçiriləcək panel müzakirənin mövzusu:
              </p>
              <p>
              - Medianın gələcəyi: Ənənəvi media üçün növbəti addımlar; Rəqəmsal transformasiya diqqət mərkəzində
              </p>
            </p>
            <div className='session-button'>
              {!isEtrafli && <button onClick={handleEtrafli}>{!lang ? 'Ətraflı' : 'More'}</button>}
            </div>
          </div>
          <div className='session-cards-wrapper row'>
            <div className='col-lg-4 col-md-6 d-flex justify-content-center ps-0'>
              <h2 className='session-cards-title'>
                {!lang ? 'Spikerlər' : 'Speakers'}
              </h2>
            </div>
            <div className='col-lg-'>
            </div>
            <div className='col-lg-'>
            </div>
            {dummy_session.map((item) => (
              <div className="col-lg-4 col-md-6 mt-3 ps-0" data-aos="zoom-in" data-aos-duration="700">
                <div className='session-card card'>
                    <img className='card-img-top' src={item.img} alt={item.title} />
                    <div class="card-body">
                      <h3 class="card-title">{item.title}</h3>
                      <p class="card-text">{item.description}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tab-pane fade row justify-content-end session2-tab" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <div className='session-ətraflı-content col-md-9'>
            <h2 className='text-start col-md-10' data-aos="fade-down" data-aos-duration="700">
              Mediada investisiya və istehlak tendensiyaları
            </h2>
            <p className={ isEtrafli ? 'session-overflow-p session-etrafli-p' : 'session-overflow-p' }>
              Yeni media mühitində informasiyanın ötürülməsində vasitəçilik fəaliyyəti ənənəvi media subyektlərinin 
              fəaliyyətindən fərqlənir. Müasir dövrdə audiovizual və çap mediasının ənənəvi media subyektləri kimi 
              xəbərlərin əsas istehsalçısı olaraq qalmasına baxmayaraq, onlayn media xəbər istehsalına ayrılan kiçik 
              investisiyalar ilə ənənəvi xəbər sənayesi və media biznes modellərinə meydan oxuyur. Bu vəziyyət mediada 
              transformasiyanın sürətləndirilməsini şərtləndirir. Rəqəmsal media vasitələrinin intensiv inkişafı çap 
              mediasının tirajı, çapı, eləcə də digər media növlərinin xərc və gəlir strukturuna, ənənəvi mediada reklam 
              bazarı və digər məsələlərə ciddi təsir göstərmişdir. Yeni media mühitində qeyri-xətti media istehlakı, 
              yüksək interaktivlik, mobil qurğulardan istifadə, həmçinin kütləvi məzmunun yaradılmasında sərbəstlik ilə 
              xarakterizə olunan auditoriya formalaşmışdır. Müasir dövrdə mediadan istifadə ilə bağlı əsaslı qərar qəbul 
              etmək, mediadan və yeni texnologiyalardan istifadənin etik nəticələrini başa düşmək və ya məlumatları 
              təhlil etmək bacarıqlarına malik media istehlakçılarının olması həm ictimaiyyətin düzgün məlumatlanmasında, 
              həm də sağlam media mühitinin formalaşmasında xüsusi rol oynayır. 
              <br /><br />
              Forumun sessiyasında iştirakçılar media 
              məhsullarının istehsalı və istehlakı ilə bağlı dəyişən trendlər, mediada investisiya məsələləri, media 
              savadlılığının peşəkar medianın inkişafında rolu, yeni mediada dəyər zəncirinin yaradılması və biznes 
              modellərinin inkişafı ilə bağlı fikir mübadiləsi aparacaqlar.
              <br /> <br />
              <p style={{ fontWeight: 900 }}>
                Sessiya çərçivəsində keçiriləcək panel müzakirənin mövzusu:
              </p>
              <p>
                - Müasir informasiya mühitində media menecmenti və dayanıqlı media biznes modellərinin yaradılması <br />
                - Yeni mediada istehlak tendensiyaları və media savadlılığı (dezinformasiya və   feyk nyusla mübarizə üsulları)
              </p>
            </p>
            <div className='session-button'>
              {!isEtrafli && <button onClick={handleEtrafli}>{!lang ? 'Ətraflı' : 'More'}</button>}
            </div>
          </div>
          <div className='session-cards-wrapper row'>
            <div className='col-lg-4 col-md-6 d-flex justify-content-center'>
              <h2 className='session-cards-title'>
                {!lang ? 'Spikerlər' : 'Speakers'}
              </h2>
            </div>
            <div className='col-lg-'>
            </div>
            <div className='col-lg-'>
            </div>
            {dummy_session.map((item) => (
              <div className="col-lg-4 col-md-6 mt-3" data-aos="zoom-in" data-aos-duration="700">
                <div className='session-card card'>
                    <img className='card-img-top' src={item.img} alt={item.title} />
                    <div class="card-body">
                      <h3 class="card-title">{item.title}</h3>
                      <p class="card-text">{item.description}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tab-pane fade row justify-content-end session3-tab" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
          <div className='session-ətraflı-content col-md-9'>
              <h2 className='text-start col-md-10' data-aos="fade-down" data-aos-duration="700">
                Təhlükəsizlik məsələləri
              </h2>
            <p className={ isEtrafli ? 'session-overflow-p session-etrafli-p' : 'session-overflow-p' }>
              Böhran vəziyyətlərində, habelə gözlənilməyən və ya proqnozlaşdırılması mürəkkəb olan fors-major hadisələr 
              zamanı ictimaiyyəti məlumatlandırma mexanizmlərinin mövcudluğu, həmçinin bu məsələdə vacib rol oynayan 
              jurnalistlərin təhlükəsizliyinin təmin edilməsi son dövrlərin əsas məsələlərindəndir. Jurnalistlər qaynar 
              nöqtələrdə, münaqişə zonalarında etibarlı məlumat toplamaq və yaymaqla mühüm missiyanı yerinə yetirirlər. 
              Jurnalistikada önəmli ixtisas istiqamətlərindən biri olan “münaqişə jurnalistikası” ciddi insan hüquqları 
              pozuntuları, hərbi cinayətlər və digər məsələləri beynəlxalq ictimaiyyətin diqqətinə çatdırmağa xidmət 
              edir. Bu baxımdan, beynəlxalq humanitar hüququn implementasiyası və onun pozulmasının qarşısının alınması 
              məqsədilə müxtəlif səviyyələrdə məlumatlandırma mexanizmlərinin və peşəkar jurnalistikanın inkişafı, 
              media nümayəndələrinin təhlükəsizliyinin qorunması və zəruri avadanlıqlarla təmin edilmələri ciddi 
              zərurətdir. 
              <br /> <br />
              Forumda bu sessiya üzrə iştirakçılar böhran vəziyyətlərinin kommunikasiya mexanizmlərinin 
              təkmilləşdirilməsi, peşəkar “münaqişə jurnalistikası”nın inkişafı və jurnalistlərin təhlükəsizliyinin 
              qorunması məsələləri də diqqət mərkəzində olacaqdır.
              <br /><br />
              <p style={{ fontWeight: 900 }}>
                Sessiya çərçivəsində keçiriləcək panel müzakirənin mövzusu:
              </p>
              <p>
              - Jurnalistlərin təhlükəsizliyi
              </p>
            </p>
            <div className='session-button'>
              {!isEtrafli && <button onClick={handleEtrafli}>{!lang ? 'Ətraflı' : 'More'}</button>}
            </div>
          </div>
          <div className='session-cards-wrapper row'>
            <div className='col-lg-4 col-md-6 d-flex justify-content-center'>
              <h2 className='session-cards-title'>
                {!lang ? 'Spikerlər' : 'Speakers'}
              </h2>
            </div>
            <div className='col-lg-'>
            </div>
            <div className='col-lg-'>
            </div>
            {dummy_session.map((item) => (
              <div className="col-lg-4 col-md-6 mt-3" data-aos="zoom-in" data-aos-duration="700">
                <div className='session-card card'>
                    <img className='card-img-top' src={item.img} alt={item.title} />
                    <div class="card-body">
                      <h3 class="card-title">{item.title}</h3>
                      <p class="card-text">{item.description}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionOfForum;
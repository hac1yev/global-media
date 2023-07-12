import React from "react";
import './PrivacyPolicy.css';
import { useSelector } from "react-redux";

const PrivacyPolicy = () => {
  const lang = useSelector((state) => state.langReducer.lang);

  return (
    <div className="privacy-policy">
      <div className="container">
        <h2 className="col-12 text-center mb-5 mt-4">
          {!lang ? "Məxfilik Siyasəti" : "Privacy Policy"}
        </h2>
        <div className="mt-4">
          <h4>Ümumi Müddəalar</h4>
          <p>
            <span>1.1</span>
            Xidmətdən istifadəni tənzimləyən "Qaydalar və Şərtlər" və Sizinlə
            Şirkət arasında qüvvədə olan müqavilədir. Bu "Qaydalar və Şərtlər"
            Xidmətdən istifadə ilə bağlı bütün istifadəçilərin hüquq və
            öhdəliklərini müəyyən edir.
          </p>
          <p>
            <span>1.2</span>
            Xidmətə çıxışınız və ondan istifadəniz bu "Qaydalar və Şərtlər"
            qəbul etməyiniz və onlara əməl etməyinizlə şərtlənir. Bu "Qaydalar
            və Şərtlər" Xidmətə daxil olan və ya istifadə edən bütün
            ziyarətçilərə, istifadəçilərə və başqalarına şamil edilir.
          </p>
          <p>
            <span>1.3</span>
            Siz 18 yaşdan yuxarı olduğunuzu bildirirsiniz. Şirkət 18 yaşından
            kiçik şəxslərin Xidmətdən istifadəsinə icazə vermir.
          </p>
          <p>
            <span>1.4</span>
            Sizin Xidmətə çıxışınız və ondan istifadəniz həmçinin Şirkətin
            Məxfilik Siyasəti-ni qəbul etməyinizdən və ona əməl etməyinizdən
            asılıdır. Məxfilik Siyasəti-miz Vebsaytdan istifadə etdiyiniz zaman
            şəxsi məlumatlarınızın toplanması, istifadəsi və açıqlanması ilə
            bağlı siyasətlərimizi və prosedurlarımızı təsvir edir və Sizə
            məxfilik hüquqlarınız və qanunun Sizi necə qoruduğu barədə məlumat
            verir. Zəhmət olmasa, Xidmətimizdən istifadə etməzdən əvvəl Məxfilik
            Siyasəti-mizi diqqətlə oxuyun.
          </p>
          <p>
            <span>1.5</span>
            Veb-saytda əks olunan məlumatlar Sizin istifadəniz üçündür. Biz
            Veb-saytda etibarlı və müasir informasiya yerləşdirməyə cəhd
            göstəririk, lakin bu Veb-saytda yerləşdirilən və ya təklif olunan
            məlumat və materialların düzgünlüyü, vaxtında yerləşdirilməsi,
            bütövlüyü və (və ya) uyğunluğu barədə zəmanət və ya təminat
            vermirik. Siz bu məlumat və materiallarda xətalar və (və ya) səhvlər
            ola biləcəyini və bizim hər hansı belə xəta və (və ya) səhvlərə görə
            qanunvericilik çərçivəsində müəyyənləşdirilmiş həddə məsuliyyətdən
            azad olduğumuzu qəbul edirsiniz.
          </p>
        </div>
        <div className="mt-4">
          <h4>Digər Vebsaytlara Linklər</h4>
          <p>
            <span>2.1</span>
            Xidmətimizdə Şirkətə məxsus olmayan və ya nəzarəti altında olmayan
            üçüncü tərəf veb saytlarına və ya xidmətlərinə keçidlər ola bilər.
          </p>
          <p>
            <span>2.2</span>
            Şirkətin hər hansı üçüncü tərəfin veb saytları və ya xidmətlərinin
            məzmunu, məxfilik siyasəti və ya praktikaları üzərində heç bir
            nəzarəti yoxdur və heç bir məsuliyyət daşımır. Bundan əlavə, siz
            razılaşırsınız ki, Şirkət birbaşa və ya dolayısı ilə hər hansı belə
            məzmunun, malların və ya xidmətlərin istifadəsi və ya bunlara etibar
            edilməsi nəticəsində dəyən və ya səbəb olduğu iddia edilən hər hansı
            zərər və ya itkiyə görə məsuliyyət daşımır.
          </p>
          <p>
            <span>2.3</span>
            Ziyarət etdiyiniz hər hansı üçüncü tərəf veb saytlarının və ya
            xidmətlərinin şərtlərini və məxfilik siyasətini oxumağınızı şiddətlə
            tövsiyə edirik.
          </p>
        </div>
        <div className="mt-4">
          <h4>Gizlilik Siyasəti</h4>
          <p>
            <span>3.1</span>
            Avtomatik olaraq toplanan kukilər və İP ünvanları haqqında
            məlumatlar istisna olmaqla, siz könüllü olaraq və bilərəkdən bizə
            göndərməyincə, saytımızda istifadəçilər haqqında şəxsi məlumatları
            toplamırıq. Siz bizə kim olduğunuzu bildirmədən və ya şəxsən özünüz
            haqqında məlumat vermədən Saytımıza daxil ola bilərsiniz. Bununla
            belə, şəxsi məlumatların təqdim edilməsinə açıq şəkildə razılıq
            verirsinizsə, məsələn, müxtəlif marketinq kampaniyalarında iştirak
            etmək üçün formanı (əgər saytda forma yerləşdirilibsə) doldurmaqla
            və ya poçt siyahısına əlavə olunmağı tələb etməklə və ya şirkətin
            məhsulları haqqında məlumat üçün sorğu göndərsəniz, Əlaqə üçün
            koordinatlar yaratdıqda, Sizinlə əlaqə saxlamaq üçün təqdim
            etdiyiniz şəxsi məlumatlardan istifadə edə bilərik.
          </p>
        </div>
        <div className="mt-4">
          <h4>Bu Qaydalar və Şərtlərə Dəyişikliklər</h4>
          <p>
            <span>4.1</span>
            Biz öz mülahizəmizə əsasən, bu Şərtləri istənilən vaxt dəyişdirmək
            hüququna sahibik. Hər hansı yeni şərtlərin qüvvəyə minməsindən ən
            azı 10 gün əvvəl xəbərdarlıq etmək üçün səy göstərəcəyik. 
            <br /> <br />
            Həmin düzəlişlər qüvvəyə mindikdən sonra Xidmətimizə daxil olmağa və
            ya ondan istifadə etməyə davam etməklə, siz yeni şərtlərlə daxil
            olmağa razılaşırsınız. Əgər siz yeni şərtlərlə tam və ya qismən razı
            deyilsinizsə, zəhmət olmasa, vebsaytdan və Xidmətdən istifadəni
            dayandırın.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

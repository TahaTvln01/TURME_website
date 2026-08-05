# BİL/YAP 495 — Yazım Rehberi ve Değerlendirme Kriterleri

> Bu rehber, 495 dersinde sistem üzerinde teslim edeceğiniz tüm aşamaların (grup oluşturma, konu açıklama, proje önerisi, spesifikasyon, analiz, yüksek seviye tasarım, PKE-Plan, proje web sitesi) hangi içerikle, hangi uzunlukta ve hangi kalite ölçütleriyle hazırlanacağını açıklar. Şablonların (`*.docx`) içindeki boş başlıklar yalnızca iskelet sağlar — asıl beklenti bu belgede yazılıdır.
>
> **Tüm güncel tarihler ve aşama açıklamaları için sisteme bakınız:** <https://proje.semihyumusak.com.tr/teslimat/>

---

## 1. Genel Kurallar

### Takvim (2026 Yaz dönemi — toplam 100 puan)

| Tarih | Aşama | Tip | Puan |
|---|---|---|---:|
| 22 May (Cum) | Grup Oluşturma | sistem | 5 |
| 07 Haz (Pzr) | Konu Açıklama (Proje Onayı) | sistem | 5 |
| 21 Haz (Pzr) | Project Proposal | PDF | 15 |
| 28 Haz (Pzr) | Project Specifications Report | PDF | 10 |
| 12 Tem (Pzr) | Analysis Report | PDF | 20 |
| 31 Tem (Cum) | PKE-Plan (Proje Kısıt ve Etkiler) | PDF | 5 |
| 06 Ağu (Prş) | High-Level Design Report | PDF | 30 |
| 06 Ağu (Prş) | Proje Web Sitesi | URL kaydı | 10 |

Tüm aşamalar **23:59 TSİ**'de kapanır.

### Geç Teslim Politikası

- Son tarih geçtikten sonra **2 gün** geç teslim penceresi açıktır.
- **1. gün** (0-24 saat geç): **-%20 kesinti**
- **2. gün** (24-48 saat geç): **-%40 kesinti**
- 48 saat sonra sistem yüklemeyi tamamen kapatır; istisna yalnızca danışman onayıyla mümkündür.
- Kesinti otomatik olarak hesaplanır; teslim sayfasında görünür.

### Format

- **Yazı tipi:** Times New Roman 11pt veya Calibri 11pt (gövde), başlıklar 13-14pt.
- **Kenar boşlukları:** Her yönden 2.5 cm.
- **Satır aralığı:** 1.15 - 1.5.
- **Sayfa numarası:** Tüm sayfalarda alt-orta veya alt-sağ.
- **Kapak sayfası:** Proje adı, takım üyeleri (öğrenci no), danışman, ders kodu, tarih. *(Şablonlarda TOBB ETÜ kapak sayfası hazır gelir.)*
- **İçindekiler:** 2+ sayfa olan tüm raporlarda zorunlu.
- **Sayfa sayısı:** Her aşamada verilen sayfa aralıkları **yalnızca öneri/referanstır, katı bir sınır değildir.** Kapak, şekiller, tablolar ve kaynakça bu sayıma dahil değildir. Beklenti, ne eksik-yüzeysel ne de gereksiz bilgiyle şişirilmiş, dengeli ve açıklayıcı bir rapordur; dengeyi içeriğin gereğine göre siz belirlersiniz.
- **Yazım denetimi (!):** Türkçe veya İngilizce — seçtiğiniz dilde tutarlı olun.

### Teslim Biçimi

- **Sisteme yalnızca PDF** yüklenir (≤ 10 MB). DOCX/ZIP kabul edilmez.
- Web Sitesi aşamasında **dosya yüklenmez** — sitenin **URL'i** sisteme kaydedilir (HTTPS zorunlu).
- Grup Oluşturma ve Konu Açıklama aşamaları **sistem-içi durum**'a dayanır; dosya yüklenmez.
- Yüklemeyi **yalnızca grup lideri** yapar; üyeler indirebilir/görür.
- DOCX kaynak dosyalarınızı proje web sitenize koymanız önerilir (portföy için).

### Dil

Tüm 495 dokümanları **tek dilde** olmalı — Türkçe veya İngilizce — seçim takım kararı. Karma dil (örn. başlıklar İng, gövde TR) **kabul edilmez**.

### Akademik Bütünlük

- Doğrudan alıntı: tırnak içinde + kaynak gösterimi.
- Parafraz: kendi cümleleriniz + kaynak gösterimi.
- Şekiller, tablolar, kod parçaları: kaynak veya "kendi çalışmamız" notu.
- **İntihal politikası:** Üniversite yönetmeliği uygulanır; tespit edilen intihal raporun **0 puan** alınmasına yol açar.

### Yapay Zekâ (LLM) Kullanım Politikası

LLM tabanlı araçlar (ChatGPT, Claude, Copilot vb.) **şu koşullarla** kullanılabilir:

1. **Açıklama:** Raporun "Tools & Methodology" veya "Acknowledgements" bölümünde hangi aracın hangi amaçla kullanıldığını yazın (örn. "Bölüm 3'ün ilk taslağı ChatGPT-4 ile üretildi, ekip tarafından düzenlendi").
2. **Sorumluluk:** Üretilen tüm içerikten ekip sorumludur — hatalı bilgi, halüsinasyon, yanlış kaynak puan kırar.
3. **Yasak:** Tüm raporu yalnızca LLM ile üretmek; analizi/tasarımı düşünmeden çıktı almak; başkasının LLM çıktısını kopyalamak.

### Atıf Stili

IEEE veya ACM atıf stilini seçin (tüm raporlarda tutarlı olun). Her şekil/tablo/dış kaynak için kaynakça girişi olmalı. Sadece URL yazmak yetersiz — yazar, başlık, yıl, erişim tarihi.

---

## 2. Grup Oluşturma — 5 puan

**Teslim:** 22 Mayıs 23:59 · **Biçim:** Sistem-içi (dosya yok)

### 🎯 Amaç

Bitirme projesi grubunun resmen kurulması ve koordinatör tarafından ön onaylanması.

### 📋 Beklenenler

- Grup lideri sistemde grubu açmış olmalı (4-5 kişilik takım).
- Takım üyeleri "Açık Gruplar" sayfasından katılma isteği gönderir; lider kabul eder.
- Üye sayısı tamamlanınca lider "Üye Alımını Kapat" işlemini yapar.
- Koordinatör (`/admin-onay/`) grup ön onayını verir.

### ⭐ Rubric (5 puan)

| Kriter | Puan |
|---|---:|
| Grup zamanında oluşturuldu, lider tanımlı | 2 |
| Üye sayısı 4-5 (eksik üye yok) | 2 |
| Koordinatör ön onayı alındı | 1 |

### ⚠️ Yaygın Hatalar

- 3 kişiyle kalmak ve eksik üyeyi bulamamak — "Açık Gruplar" sayfasında ilan açın.
- Lider belirlenmeden gruba katılma istekleri açıkta kalmak.

---

## 3. Konu Açıklama (Proje Onayı) — 5 puan

**Teslim:** 7 Haziran 23:59 · **Biçim:** Sistem-içi (dosya yok)

### 🎯 Amaç

Çalışılacak proje konusunun ve kısa açıklamasının sistem üzerinde danışman onayından geçmesi.

### 📋 Beklenenler

- Grup lideri "Grubum → Düzenle" sayfasından **proje konu başlığı** ve **1 paragraf açıklama** (~150-250 kelime) girer.
- "Onaya Gönder" butonuyla danışmana iletir; grup `pending_instructor` durumuna geçer.
- Danışman onaylar veya geri bildirim ile değişiklik ister; lider revize edip yeniden gönderir.

### ⭐ Rubric (5 puan)

| Kriter | Puan |
|---|---:|
| Son tarihte konu + açıklama girilmiş | 2 |
| Onaya gönderilmiş ve danışman onayı alınmış | 2 |
| Açıklama net ve özenli (kopyala-yapıştır değil) | 1 |

### ⚠️ Yaygın Hatalar

- Konu girilmiş ama "Onaya Gönder" tıklanmamış.
- Açıklama tek satır "yapay zekâ projesi" — boş paragraflar puan kırar.
- Onaylanan konunun 21 Haziran Project Proposal'da değiştirilmesi — onaylı konu üzerine kapsamlı plan kurulur.

---

## 4. Project Proposal — 15 puan

**Teslim:** 21 Haziran (Pazar) 23:59 · **Şablon:** `Project_Proposal_v1.docx`

### 🎯 Amaç

Onaylanmış konu üzerine kurulan **kapsamlı proje teklifi**. Bu doküman, dönem boyunca yapacağınız işin sözleşmesidir; danışmanınızla birlikte üzerinde mutabık kalacaksınız.

### 📋 İçerik (öneri ~6-10 sayfa; katı sınır değil, kapak/şekil/tablo/atıf hariç)

1. **Problem Tanımı ve Motivasyon** — Çözmek istediğiniz problem nedir, neden önemli/güncel, hedef kullanıcı/etki alanı kimdir, mevcut eksiklikler nelerdir. (~1 sayfa)
2. **Önceki Çalışmalar / Literatür** — En az 4-6 akademik veya ticari karşılaştırma; sizin yaklaşımınızın farkı.
3. **Çözüm Yaklaşımı ve Yöntem** — Ana fikir, algoritma/model/mimari paradigma, kullanılacak yöntem-teknolojiler ve seçim gerekçesi. (~1 sayfa)
4. **Mimari Taslağı** — Yüksek seviye mimari diyagram (komponentler, veri akışı, dış servisler). Modüller arası sorumluluk.
5. **Hedef Kullanıcı, Kapsam ve Başarı Kriterleri** — Birincil/ikincil kullanıcı, in-scope / out-of-scope, **ölçülebilir** başarı kriterleri (3-5 madde).
6. **Çalışma Planı ve İş Bölümü** — Faz/iterasyon takvimi (Gantt veya tablo), her üye için sorumluluk dağılımı.
7. **Riskler ve Önlemler** — Olasılık × Etki tablosu, B planı.
8. **Beklenen Çıktılar** — Çalışan sistem/prototip, raporlar, sunum, demo, açık kaynak depo.
9. **Kaynaklar** — APA veya IEEE formatı.

### ⭐ Rubric (15 puan)

| Kriter | Puan |
|---|---:|
| Problem & motivasyon: net, hedef kullanıcı belli | 2 |
| Literatür / önceki çalışmalar: 4+ atıf, karşılaştırma | 2 |
| Çözüm yaklaşımı & yöntem seçimi gerekçeli | 2 |
| Mimari taslağı (diyagram dahil) | 2 |
| Kapsam (in/out) + ölçülebilir başarı kriteri (3-5) | 2 |
| Çalışma planı + iş bölümü | 1 |
| Riskler + önlemler | 1 |
| Beklenen çıktılar somut | 1 |
| Yazım, kaynakça (APA/IEEE), format | 2 |

### ✅ Kontrol Listesi

- [ ] Konu danışman tarafından onaylandı (7 Haziran aşaması tamam)
- [ ] Problem ve hedef kullanıcı net
- [ ] 4+ atıf, karşılaştırma tablosu/paragrafı
- [ ] Mimari diyagram var
- [ ] Out-of-scope listesi var
- [ ] Başarı kriterleri ölçülebilir (sayı, oran, süre)
- [ ] Üyelerin sorumlulukları belirgin
- [ ] Risk olasılık × etki tablosu
- [ ] Kaynakça APA veya IEEE formatında, 4-6+ referans

### ⚠️ Yaygın Hatalar

- "Yapacağız" demek ama nasıl yapılacağını yazmamak.
- Atıfları sadece site linki olarak bırakmak — APA/IEEE formatı şart.
- Başarı kriteri olarak "iyi çalışmalı" — sayı verin (doğruluk %, gecikme, kullanıcı sayısı).
- Mimari diyagramı atlayıp sadece metin anlatımıyla geçmek.
- Çalışma planını "tüm dönem boyunca" deyip sonra fazlara bölmemek.

---

## 5. Project Specifications Report — 10 puan

**Teslim:** 28 Haziran (Pazar) 23:59 · **Şablon:** `Project_Specifications_Report_v1.docx`

### 🎯 Amaç

Projenin "ne olduğunu" tanımlamak: kapsam, kısıtlar, etik-profesyonel sorumluluklar, ilk gereksinim listesi. Henüz analiz değil — "yapacağız" planı.

### 📋 İçerik (öneri ~5-8 sayfa; katı sınır değil, kapak/şekil/tablo/atıf hariç)

1. **Introduction** — Amaç, hedef kullanıcı, başarı kriteri.
2. **Description** — Sistem ne yapacak, ana fonksiyonlar (3-7 madde), out-of-scope listesi.
3. **Constraints** — En az 4 kategoriyi detaylı işleyin: Ekonomik · Çevresel · Sosyal/Kültürel · Hukuki · Etik · Sağlık/Güvenlik · Sürdürülebilirlik. Detayları PKE-Plan'a yazacaksınız; burada özet.
4. **Professional and Ethical Issues** — ACM/IEEE Code of Ethics kapsamında **projeye özel** sorumluluklar. KVKK/GDPR (veri toplanıyorsa). Üçüncü taraf lisanslar.
5. **Requirements** — İlk gereksinim listesi (R1, R2…), hem fonksiyonel hem non-fonksiyonel; non-fonksiyoneller ölçülebilir (örn. p95 < 200 ms).
6. **References** — IEEE veya ACM stilinde.

### ⭐ Rubric (10 puan)

| Kriter | Puan |
|---|---:|
| Introduction net, hedef kullanıcı tanımlı | 1 |
| Description: kapsam ve out-of-scope açık | 2 |
| Constraints: en az 4 kategori, ilgisize "uygulanmıyor: ..." | 2 |
| Professional/Ethical: projeye özel | 2 |
| Requirements: 8+ fonksiyonel + 3+ non-fonksiyonel, numaralı | 2 |
| References + format + dil | 1 |

### ✅ Kontrol Listesi

- [ ] Hedef kullanıcı net
- [ ] Out-of-scope listesi var
- [ ] En az 4 constraint kategorisi işlendi
- [ ] Etik bölüm projeye özel (genel kalıp değil)
- [ ] KVKK/GDPR ele alındı (veri kişiselse)
- [ ] Gereksinimler numaralı
- [ ] Non-fonksiyonel gereksinim somut sayılarla
- [ ] Kaynakça IEEE/ACM
- [ ] Tek dilde tutarlı

### ⚠️ Yaygın Hatalar

- 8 kategoriyi zorla "vardır" demek — ilgisize "uygulanmıyor: çünkü..." yazın.
- Etik bölümü her projede aynı kopya.
- Belirsiz gereksinim: "sistem güzel olmalı" — ölçülebilir olmalı.
- Performans için sayı vermemek (örn. ≤ 200ms p95).
- Constraints'i çok uzatmak — detaylı versiyon **PKE-Plan**'da işlenir.

---

## 6. Analysis Report — 20 puan

**Teslim:** 12 Temmuz (Pazar) 23:59 · **Şablon:** `Analysis_Report_v1.docx`

### 🎯 Amaç

Geliştirilecek sistemin **modelini** kurmak — geliştirici ile kullanıcı arasındaki kontrat. Tasarım değil, **anlamlandırma**.

### 📋 İçerik (öneri ~15-25 sayfa; katı sınır değil, kapak/şekil/tablo/atıf hariç)

1. **Introduction** — Raporun amacı ve kapsam.
2. **Current system** (varsa) — Var olan sistemin kısa analizi.
3. **Proposed system**
   - **Overview** — Yüksek seviye sistem görünümü, 1 paragraf.
   - **Functional Requirements** — Spesifikasyon'daki R1, R2... listesini **detaylandırılmış** olarak. Her gereksinim için: ID, başlık, açıklama, öncelik, kabul kriteri.
   - **Nonfunctional Requirements** — Performans, güvenlik, kullanılabilirlik, ölçeklenebilirlik, sürdürülebilirlik. Her biri **ölçülebilir**.
   - **Pseudo requirements** — Teknoloji/platform kısıtları (örn. "Django kullanılacak").
4. **System models** (raporun çekirdeği)
   - **Scenarios** — En az 3 mutlu yol + 1 hata yolu. Her senaryo: aktör, ön koşul, adımlar, sonuç.
   - **Use Case Model** — UML use-case diyagramı + her use case için açıklama (actor, precondition, main flow, alternative flow, postcondition).
   - **Object and Class Model** — UML class diagram — **domain modeli** (DB şeması değil).
   - **Dynamic Models** — En az 2 sequence/activity diyagramı.
   - **UI mockup'ları** — Figma/Balsamiq/elle, en az 5 ekran.
5. **Glossary** — Domain terimleri.
6. **References**

### ⭐ Rubric (20 puan)

| Kriter | Puan |
|---|---:|
| Functional Requirements: detaylı, kabul kriterli | 3 |
| Nonfunctional: 5+, ölçülebilir | 2 |
| Scenarios: 3+ mutlu + 1+ hata | 2 |
| Use Case diyagramı + 5+ use case açıklaması | 3 |
| Class Model: domain, ilişki çoklukları işaretli | 3 |
| Dynamic: 2+ sequence/activity diyagramı | 3 |
| UI Mockups: 5+ ekran, akış | 2 |
| Glossary, References, format, dil | 2 |

### ✅ Kontrol Listesi

- [ ] Gereksinimler ID'li ve kabul kriterli
- [ ] Non-fonksiyonel: somut sayılar
- [ ] 3+ senaryo + 1 hata senaryosu
- [ ] Use case diyagramı + açıklamalar
- [ ] Class diagram'da çokluklar (1, 0..*, 1..*)
- [ ] 2+ sequence/activity diagram
- [ ] UI mockup'ları akış gösteriyor
- [ ] Glossary domain terimlerini kapsıyor

### ⚠️ Yaygın Hatalar

- Class diagram'ı DB şeması olarak çizmek — bu **domain modeli**.
- Sequence diagram yerine düz akış şeması — UML notasyonu kullanın.
- "Performans iyi olmalı" — sayı verin.
- Use case'lerde actor'ı atlamak.
- UI mockup'ı son ürünü değil **mantığı** gösterir.

### Referans

Bruegge & Dutoit, *Object-Oriented Software Engineering*, 2nd Ed.

---

## 7. PKE-Plan (Proje Kısıt ve Etkiler — Plan Sürümü) — 5 puan

**Teslim:** 31 Temmuz (Cuma) 23:59 · **Şablon:** `Proje_Kisit_ve_Etkiler_PKE-Plan_v2.docx`

> Spesifikasyon Raporu'nun "Constraints" bölümünün **detaylı versiyonudur**.

### 📋 İçerik

1. **Kullanılan Standartlar** — Projeye uygulanabilir standartlar ve özel madde/alt maddeler; her standart için kısa uygulanabilirlik notu ve planlanan kanıt kaynağı (test, inceleme, analiz).
2. **Proje Kısıtları** — Bu projeye özel en kritik 3-4 somut kısıt. Kategoriler: ekonomik/finansal, çevresel, toplumsal/kültürel, üretilebilirlik, sağlık, hukuksal, etik, zaman, teknolojik, güvenlik, sürdürülebilirlik. Her kısıt için: tanım, etki alanı, doğrulama/kanıtlama yöntemi.
3. **Beklenen Etkiler** — Ekonomik, sosyal, çevresel, hukuki, sağlık, güvenlik temalarında ileriye dönük, en fazla 1 sayfalık etki beyanı.

### ⭐ Rubric (5 puan)

| Kriter | Puan |
|---|---:|
| Standartlar: en az 2, uygulanabilirlik + kanıt kaynağı | 1 |
| Kısıtlar: 3-4 somut, projeye özel, doğrulama yöntemi | 2 |
| Beklenen etkiler: 6 tema, ileriye dönük | 1 |
| Format, dil, hizalama | 1 |

### Bilinmesi gerekenler

- PKE-Plan: BİL495 sonunda teslim edilir (planlanan kısıt + etki beyanı).
- PKE-Rapor: BİL496 sonunda teslim edilir (gerçekleşen sonuçlar — ayrı doküman).

---

## 8. High-Level Design Report — 30 puan

**Teslim:** 6 Ağustos (Perşembe) 23:59 · **Şablon:** `High-Level_Design_Report_v1.docx` · **Ders sunumu:** `High_Level_Design-Low_Level_Design.pdf`

### 🎯 Amaç

Analiz modelini **sistem tasarım modeline** dönüştürmek. "Ne yapılacak" → "Hangi mimari ile yapılacak". Henüz kod yok; alt sistemler, veri akışı, platform seçimi.

### 📋 İçerik (öneri ~20-30 sayfa; katı sınır değil, kapak/şekil/tablo/atıf hariç)

1. **Introduction**
   - **Purpose of the system** — 1 paragraf.
   - **Design goals** — En az 5; çatışan hedeflerde tercih gerekçeli.
   - **Definitions / Acronyms / Abbreviations**
2. **Current software architecture** (varsa)
3. **Proposed software architecture**
   - **Overview** — Mimari kararın yüksek seviye açıklaması.
   - **Subsystem decomposition** — UML component diagram + her alt sistemin sorumluluğu.
   - **Hardware / software mapping** — UML deployment diagram.
   - **Persistent data management** — DB seçimi (gerekçeli), kavramsal şema, backup/replication.
   - **Access control and security** — Auth/AuthZ, şifreleme, KVKK uyumluluğu.
   - **Global software control** — Senkron/asenkron, hata kurtarma stratejisi.
   - **Boundary conditions** — Cold start, kapatma, hata durumları.
4. **Subsystem services** — Her alt sistemin sunduğu servisler.
5. **Glossary**
6. **References**

### ⭐ Rubric (30 puan)

| Kriter | Puan |
|---|---:|
| Design goals: 5+, çatışmalar tartışıldı | 4 |
| Subsystem decomposition + UML component | 5 |
| Hardware/software mapping + UML deployment | 4 |
| Persistent data: DB seçimi gerekçeli, şema | 4 |
| Access control & security: somut, KVKK | 4 |
| Global control: senkron/asenkron stratejisi | 3 |
| Boundary conditions işlendi | 2 |
| Subsystem services tablosu/diyagramı | 2 |
| Yazım, format, References, dil | 2 |

### ✅ Kontrol Listesi

- [ ] Design goals 5+, çatışmalar tartışıldı
- [ ] Component diagram var
- [ ] Deployment diagram var
- [ ] DB seçimi gerekçeli
- [ ] Auth/AuthZ yaklaşımı belirli
- [ ] KVKK/GDPR'a değinildi
- [ ] Hata kurtarma stratejisi (retry, circuit breaker, fallback)
- [ ] Backup stratejisi
- [ ] Subsystem services tablosu

### ⚠️ Yaygın Hatalar

- Design goals'u sadece sıralayıp tercih yapmamak.
- "Postgres kullanıyoruz çünkü iyi" — gerekçe nerede? (ACID, complex queries, join'ler)
- Security bölümünün boş geçmesi — KVKK zorunlu.
- Deployment diagram yerine sadece liste.
- "Microservices" deyip aslında modular monolith yapmak.

---

## 9. Proje Web Sitesi — 10 puan

**Teslim:** 6 Ağustos (Perşembe) 23:59 · **Biçim:** Sisteme yalnızca URL kaydedilir (dosya yüklenmez).

### 🎯 Amaç

Projenin kamuya açık vitrini. Mezuniyetten sonra portföyünüzde yer alır; tüm raporlarınızı buradan erişilebilir kılar.

### 📋 İçerik (önerilen)

1. **Proje adı + 1 cümlelik özet** (landing)
2. **Takım sayfası** — fotoğraflar, kısa bio, LinkedIn linkleri
3. **Proje açıklaması** — problem, çözüm, demo videosu
4. **Raporlar** — tüm raporların PDF + DOCX bağlantıları
5. **GitHub linki** (kod açıksa)
6. **Danışman bilgisi**
7. **İletişim** — takım e-postası

### 📤 Teslim biçimi

Sisteme **URL** kaydedilir. URL kamuya açık, HTTPS olmalı ve dönem sonunda çalışır durumda bulunmalıdır.

### ⭐ Rubric (10 puan)

| Kriter | Puan |
|---|---:|
| Site canlı ve erişilebilir | 2 |
| Tüm raporlar (PDF+DOCX) bağlantılı | 2 |
| Takım üyeleri tanıtımı | 1 |
| Proje açıklaması net, görsel destekli | 2 |
| Görsel tasarım: mobil uyumlu, tutarlı | 2 |
| Yazım denetimi, dil tutarlılığı | 1 |

### ✅ Kontrol Listesi

- [ ] Sisteme URL kaydedildi
- [ ] HTTPS çalışıyor
- [ ] Tüm raporlar indirilebilir (Drive izin sorunu yok)
- [ ] Mobilde kırılmıyor
- [ ] Takım üyeleri listelendi
- [ ] Demo video / görsel var
- [ ] Yazım denetimi yapıldı

### ⚠️ Yaygın Hatalar

- Site GitHub Pages'te ama README'den ibaret — bu site değil.
- Raporlar Drive'da "erişim isteme" çıkıyor — açık link verin.
- Çıplak Bootstrap default'u.
- TR/İng karışık.

### 📎 Önerilen araçlar

- GitHub Pages + Jekyll (ücretsiz)
- Vercel / Netlify (statik, ücretsiz)
- Notion (public page)
- Kendi domain'iniz yoksa `<takim-adi>.github.io` kabul edilir.

---

## 10. Sıkça Sorulan Sorular

**S: 495'te kod yazacak mıyız?**
H: Hayır. 495 analiz + tasarım dersi. Kod 496'da. Yine de proof-of-concept için küçük denemeler yapabilirsiniz, raporda referans verirsiniz.

**S: Şablonu birebir kullanmak zorunda mıyım?**
H: Hayır, kendi düzeninizi kullanabilirsiniz — ancak rubric'teki tüm bölümler bulunmalı. TOBB ETÜ kapaklı `_v1` şablonları en kolay yoldur.

**S: Takımım 4 kişi, beşinciyi bulmamız şart mı?**
H: Hayır. 4 kişi yeterli; 5 kişiye kadar genişletilebilir.

**S: Aynı raporu hem TR hem İng yazabilir miyiz?**
H: İki ayrı sürüm olarak evet, ama puanlama tek sürüm üzerinden yapılır — siz hangisini değerlendirilmek istediğinizi yükleyin.

**S: PDF + DOCX ikisi de mi yüklenmeli?**
H: Sisteme yalnızca **PDF** yüklenir. DOCX kaynak dosyasını proje web sitenizde paylaşmanız önerilir.

**S: Geç teslim cezası nedir?**
H: 0-24 saat geç: **-%20**. 24-48 saat geç: **-%40**. 48 saatten sonra sistem kapanır; istisna yalnızca danışman onayıyla. Kesinti otomatik uygulanır ve teslim sayfasında görünür.
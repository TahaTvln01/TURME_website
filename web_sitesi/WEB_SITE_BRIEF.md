# Claude Code Brief — BİL/YAP 495 Proje Web Sitesi

> Kullanım: Bu dosyayı repo kökünde `WEB_SITE_BRIEF.md` olarak kaydet, sonra Claude Code sohbetine
> şunu yaz: **"WEB_SITE_BRIEF.md dosyasını oku ve içindeki briefe göre siteyi kur. Önce plan sun, onayımı bekle."**
> Alternatif olarak aşağıdaki metnin tamamını doğrudan sohbete yapıştırabilirsin.

---

## 0. Rolün ve görevin

Sen deneyimli bir front-end geliştirici ve tasarımcısın. TOBB ETÜ Bilgisayar / Yapay Zekâ Mühendisliği
bitirme projesi (BİL/YAP 495) için **statik bir tanıtım web sitesi** kuracaksın. Site, dersin
değerlendirme rubriğine göre puanlanacak; bu yüzden rubrik maddeleri sabit gereksinimdir, tasarım
tercihi değildir.

**Çalışma sırası (buna uy):**
1. Önce repoyu incele, sonra kısa bir **plan** sun: dosya yapısı, bölümler, tasarım token'ları
   (renk paleti hex'leriyle, tipografi, layout konsepti, "signature" öğe). Plan onaylanmadan kod yazma.
2. Onay sonrası kodu yaz. Her bölümü bitirdiğinde kısaca ne yaptığını özetle.
3. Sonda bir **öz-denetim** yap: aşağıdaki "Kabul Kriterleri" listesini tek tek işaretle.

**Asla yapma:** Elinde olmayan bilgiyi uydurma (metrik, tarih, isim, sonuç, ödül). Eksik bilgi varsa
`<!-- TODO: ... -->` yorumu bırak ve bana rapor et; boş yere içerik üretme.

---

## 1. Teknoloji kısıtları (tartışmaya kapalı)

Amaç: build adımı olmayan, GitHub Pages'e itince direkt çalışan, kırılgan olmayan bir site.

- **Saf HTML + CSS + vanilla JavaScript.** Framework yok, npm yok, bundler yok, derleme yok.
- **Bootstrap / Tailwind CDN kullanma.** (Rubrikte "çıplak Bootstrap default'u" açıkça eleştiriliyor.)
  Tüm stiller elle yazılmış tek bir `style.css` içinde, CSS custom properties (değişkenler) ile.
- **Barındırma:** GitHub Pages, repo kökünden. Repo: <https://github.com/TahaTvln01/TURME_website>
  → yayın adresi `https://tahatvln01.github.io/TURME_website/` olacak. Site bu alt yolda
  yayınlanacağı için **tüm bağlantılar ve varlık yolları göreli (relative) olmalı** — `/assets/...`
  gibi kök-mutlak yol kullanma, `assets/...` kullan. Bu en sık yapılan hata; dikkat et.
- Repo köküne boş bir **`.nojekyll`** dosyası koy.
- JavaScript **opsiyonel bir katman** olsun: JS kapalıyken de tüm içerik okunabilir kalsın
  (mobil menü ve scroll animasyonları dışında hiçbir şey JS'e bağlı olmasın).
- Dış bağımlılık sadece **Google Fonts** olabilir. Font seçerken **Türkçe karakter desteği (latin-ext
  subset: ı, İ, ğ, ş, ç, ö, ü) zorunlu** — seçtiğin fontta bunu doğrula.
- Analytics, çerez banner'ı, form backend'i yok. İletişim = `mailto:` linki.

---

## 2. Dosya yapısı

```
/
├─ index.html
├─ 404.html
├─ .nojekyll
├─ README.md
├─ assets/
│  ├─ css/style.css
│  ├─ js/main.js
│  ├─ img/            (takım fotoğrafları, mimari diyagram, UI mockup'lar, favicon, og-image)
│  └─ docs/           (raporların PDF ve DOCX dosyaları — repoda barındırılacak)
```

Tek sayfa (single page) + akıcı kaydırmalı (smooth scroll) bölüm navigasyonu. Ayrı sayfalara bölme;
tek sayfa hem bakımı hem de puanlanması daha kolay. Sticky bir üst menü olsun, aktif bölümü
vurgulasın (IntersectionObserver).

### Repoda hâlihazırda bulunan varlıklar

Bunlar mevcut, aynı adlarla kullan; yeni isim uydurma:

- `assets/img/mimari.png` — sistem mimarisi diyagramı. Geniş ve detaylı; tıklanınca büyüyen
  (lightbox veya `<a>` ile yeni sekmede açılan) bir görsel olarak koy, küçük halde okunmuyor.
- `assets/img/E1_2_3.png` — E1 (KVKK rıza), E2 (video yükleme), E3 (referans seçim) ekranları **tek
  görselde yan yana**.
- `assets/img/E4_5_6.png` — E4 (analiz ilerleme), E5 (sonuç + koçluk raporu), E6 (senkronize
  karşılaştırma) ekranları **tek görselde yan yana**.
- `assets/img/E7.png` — E7 (hata ekranı), tek ekran.
- `assets/img/team/placeholder.png` — takım fotoğrafı yer tutucusu. Gerçek fotoğraflar henüz yok;
  5 üye için de bunu kullan, ama `assets/img/team/<isim>.jpg` şeklinde kolayca değiştirilebilecek
  biçimde kurgula ve README'de nasıl değiştirileceğini yaz.
- `docs/BIL_YAP_495_Yazim_Rehberi.md` — dersin yazım rehberi ve değerlendirme rubriği. **Kod yazmadan
  önce bunu oku**; "Proje Web Sitesi" bölümü bu sitenin nasıl puanlanacağını anlatıyor.

**Önemli:** UI mockup'ları 7 ayrı dosya değil, 3 tabaka halinde. "Arayüz" bölümünü buna göre kur:
7 kartlık bir grid değil, 3 tabakayı akış sırasıyla (rıza → yükleme → seçim, ilerleme → sonuç →
karşılaştırma, hata yolu) gösteren, her birinin altında hangi ekranları içerdiğini anlatan kısa
başlıklı bir düzen. Mobilde tabakalar okunamayacak kadar küçüleceği için tıklayınca büyüsünler.

Henüz olmayan ve senin üreteceğin görseller: `favicon.svg`, `assets/img/og.png`.

---

## 3. Proje içeriği (siteye bunları yaz — uydurma yok)

**Proje adı:** Yapay Zekâ Destekli Biyomekanik Teknik Vuruş ve Atış Analizi

**Tek cümlelik özet (hero):** Beyzbol vuruş ve atış mekaniğini tek kameralı sıradan bir videodan
analiz eden, hareketi profesyonel referansla karşılaştırıp kişiselleştirilmiş koçluk geri bildirimi
üreten açık bir sistem.

**Ders / kurum:** TOBB Ekonomi ve Teknoloji Üniversitesi · Bilgisayar / Yapay Zekâ Mühendisliği ·
BİL 495 — YAP 495 · 2026 Yaz Dönemi

**Takım üyeleri (bu sırayla, öğrenci numaralarıyla):**
- Rıdvan Umut Ünal — 221101008
- Yusuf Mirza Çoban — 221101003
- Emirhan Gül — 221101073
- Utku Karatepe — 221101071
- Taha Denizbek Tavlan — 221101062

Her üye için: fotoğraf (yoksa baş harflerden oluşan tek renkli avatar placeholder), tek satırlık
rol/sorumluluk etiketi, GitHub ve LinkedIn ikonu (linkler `<!-- TODO -->` olarak bırakılıp bana sorulacak).

**Danışman:** Henüz atanmamış. Bölümde "Danışman: —" yazan bir alan bırak, `<!-- TODO -->` düş.

### Problem
Beyzbolda vuruş ve atış mekaniği performansı doğrudan belirler; hatalı mekanik hem performansı düşürür
hem de ciddi omuz ve dirsek sakatlıklarına yol açar. Bugün detaylı biyomekanik analiz ya stadyumlara
kurulan çok kameralı, çok maliyetli sistemlerle ya da antrenörün çıplak gözle yaptığı öznel
değerlendirmeyle yapılıyor. Amatör sporcunun ikisine de erişimi yok.

### Çözüm
Kullanıcı telefonuyla çektiği tek kameralı (monoküler) 2B RGB videoyu yüklüyor. Sistem sporcuyu izole
ediyor, hareketi biyomekanik fazlara ayırıyor, eklem açılarını kare kare çıkarıyor, seçilen profesyonel
referansla zaman ekseninde hizalıyor ve tolerans dışı sapmaları buluyor. Sayısal sapmalar, RAG destekli
bir dil modeli aracılığıyla sporcunun doğrudan uygulayabileceği koçluk cümlelerine dönüşüyor.

### Analiz hattı (5 adım — sitede görsel bir akış olarak göster)
1. **Oyuncu izolasyonu** — YOLOv8 ile ana sporcu tespit edilip kırpılır, arka plandaki kişiler elenir.
2. **Faz segmentasyonu** — Hareket biyomekanik fazlara bölünür (windup, early/late cocking,
   acceleration, follow-through); her fazın başlangıç ve bitiş karesi belirlenir.
3. **İskelet ve açı çıkarımı** — RTMPose / YOLO-Pose ile omuz, dirsek, bilek, kalça, diz koordinatları
   ve bunlardan eklem açıları hesaplanır.
4. **Hizalama ve delta** — Kullanıcı ile profesyonel referans DTW (Dinamik Zaman Bükülmesi) ile
   hizalanır, kare bazında açısal sapmalar (delta) çıkarılır.
5. **Koçluk raporu** — Deltalar RAG destekli LLM'e verilir; ham açı farkı yerine uygulanabilir,
   yapıcı bir dille tavsiye üretilir.

### Ölçülebilir hedefler (bunları birer "metrik kartı" olarak göster)
- Eklem açısı doğruluğu: elle etiketlenmiş referansa göre Ortalama Mutlak Hata **≤ 15°**
- Faz geçiş anını doğru karede yakalama: **≥ %80** isabet
- 10 sn / 60 FPS videonun sunucuda işlenmesi: **≤ 60 sn**
- Koçluk raporunun üretilip kullanıcıya dönmesi: **< 10 sn**

### Kapsam dışı (dürüstlük puanı getirir, mutlaka koy)
- Canlı yayın üzerinden gerçek zamanlı çoklu oyuncu analizi
- LIDAR / derinlik kamerası / IMU ile donanımsal 3B veri
- Topun yörüngesi, çıkış hızı, dönüş sayısı gibi top odaklı metrikler
- Beyzbol dışındaki spor dalları

### Teknoloji yığını (etiket/rozet listesi olarak)
React · FastAPI (Python) · OpenCV / FFmpeg · YOLOv8 · RTMPose · DTW · OpenAI API / Ollama (RAG) ·
PostgreSQL / MongoDB · MinIO (S3 uyumlu nesne deposu)

### Veri gizliliği (ayrı, küçük ama görünür bir blok)
KVKK ve GDPR uyumu gözetiliyor. Video yüklenmeden önce açık rıza alınıyor; ham video, iskelet koordinat
matrisine dönüştürüldükten sonra **"sıfır bekletme" politikası** gereği siliniyor, yalnızca
isimsizleştirilmiş sayısal veri saklanıyor. Sistem medikal bir tanı veya tedavi aracı değildir.

### Raporlar (indirme bölümü)
Her satır: rapor adı · kısa açıklama · teslim tarihi · **PDF** ve **DOCX** butonları.
- Project Proposal — Proje önerisi ve dönem planı — 21.06.2026
- Project Specifications Report — Kapsam, kısıtlar, etik ve gereksinimler — 28.06.2026
- Analysis Report — Sistem modeli: senaryolar, use-case, sınıf ve dinamik modeller, UI — 12.07.2026
- PKE-Plan — Proje kısıt ve etkiler (plan sürümü) — 31.07.2026
- High-Level Design Report — Yüksek seviye tasarım — 06.08.2026

**Barındırma:** Rapor dosyaları (PDF ve DOCX) Google Drive'da, halka açık tek bir klasörde tutuluyor:

```
https://drive.google.com/drive/folders/1d0Go8Qqz0nBQnV1hYyGn1H5v5gHLidqs?usp=sharing
```

Bunu şöyle kullan:

- `assets/js/main.js` içinde bir `RAPORLAR` dizisi tanımla. Her kayıt: `ad`, `aciklama`, `tarih`,
  `pdfUrl`, `docxUrl`. Şimdilik **hem `pdfUrl` hem `docxUrl` alanlarına yukarıdaki klasör linkini yaz**
  ve dizinin üstüne şu yorumu koy: `// Dosya bazlı Drive linkleri hazır olduğunda bu alanları değiştir.`
  Başka link uydurma.
- Bölümün en üstüne büyük ve belirgin bir birincil buton koy: **"Tüm raporları Drive'da aç"** —
  aynı klasör linkine gider.
- Rapor satırlarındaki PDF/DOCX butonları da aynı klasöre gider; `target="_blank" rel="noopener"`.
- Bölümün altına küçük bir not: dosyalar Google Drive üzerinde barındırılıyor, bağlantıya sahip
  herkes erişebilir.
- Liste JS ile render edilecekse, JS kapalıyken de görünmesi için HTML'de `<noscript>` fallback
  listesi bırak (en azından klasör linki).
- `assets/docs/` klasörünü yine oluştur ve README'de yedek planı yaz: Drive'da izin sorunu çıkarsa
  PDF'ler bu klasöre kopyalanıp göreli linke geçilecek.
- Henüz yazılmamış raporlar (PKE-Plan, High-Level Design) için satır yine görünsün ama butonu
  `aria-disabled` + "yakında" etiketiyle pasif göster.

### Diğer bağlantılar
- Web sitesi deposu: <https://github.com/TahaTvln01/TURME_website>
- Proje kod deposu: `<!-- TODO: analiz sisteminin kod reposu ayrıysa linki -->`
- Demo videosu: `<!-- TODO: YouTube/Vimeo embed veya kısa GIF -->` (yer tutucu bir 16:9 alan hazırla)
- İletişim: takım e-postası `<!-- TODO -->` — `mailto:` linkiyle

---

## 4. Sayfa iskeleti

1. **Hero** — Proje adı, tek cümlelik özet, kurum/ders satırı, iki buton: "Raporlar" ve "GitHub".
2. **Problem** — Kısa, iddialı, iki paragrafı geçmeyen anlatım.
3. **Nasıl çalışır** — 5 adımlık analiz hattı, görsel akış olarak.
4. **Ölçülebilir hedefler** — 4 metrik kartı.
5. **Sistem mimarisi** — Mimari diyagram görseli (`assets/img/mimari.png`, ben vereceğim) + kısa açıklama.
6. **Arayüz** — UI mockup görselleri (E1–E7 ekranları, ben vereceğim), yatay kaydırılabilir veya grid.
7. **Kapsam** — "Kapsam içi" / "Kapsam dışı" iki sütun.
8. **Teknoloji** — Rozet listesi + veri gizliliği bloğu.
9. **Takım** — 5 kart, fotoğraf/avatar + rol + sosyal linkler. Danışman alanı burada.
10. **Raporlar** — İndirme tablosu/listesi.
11. **Footer** — TOBB ETÜ, ders kodu, dönem, iletişim, telif satırı.

---

## 5. Tasarım yönergesi

Bu bir "AI ürettiği belli olan şablon site" olmamalı. Tasarımı **konudan** türet: biyomekanik, kare kare
hareket, faz zaman çizelgesi, iskelet eklem noktaları, açı ölçümü, sapma.

**İki aşamalı çalış:**

**A) Önce token planı çıkar ve bana sun:**
- **Renk:** 4–6 adet isimlendirilmiş hex. Başlangıç noktası olarak rapor kapağındaki kurumsal
  lacivert (~`#1B2A5B`) ve altın/haki (~`#B99B62`) tonlarını kullan; bunları koruyup üstüne bir
  "sapma/uyarı" vurgu rengi kur.
- **Tipografi:** En az iki rol — karakterli bir başlık fontu (ölçülü kullanılacak) ve rahat okunan bir
  gövde fontu. Sayısal veriler (açı değerleri, kare numaraları, metrikler) için **monospace** bir
  utility font kullan; bu proje için doğal bir seçim çünkü site zaten ölçüm dilinde konuşuyor.
  Hepsi Türkçe karakterleri desteklemeli.
- **Layout:** Tek sütun, geniş nefes alanı, bölümler arası net ayrım. Bölüm başlıklarında "eyebrow"
  etiketleri sadece gerçekten bilgi taşıyorsa kullan.
- **Signature (imza öğe):** Sitenin akılda kalacak tek öğesi. Öneri: **faz şeridi** — yükleniş →
  hızlanma → vuruş → takip fazlarını temsil eden, ince, yatay bir zaman çizelgesi motifi; bölüm
  ayırıcısı ve/veya sticky menüde okuma ilerlemesi göstergesi olarak yeniden kullanılır. Daha iyi bir
  fikrin varsa gerekçesiyle öner.

**Yapısal referans:** <https://lordofthestringss.github.io/LordOfTheStrings/> — aynı dersten geçen
dönem yüksek not almış bir proje sitesi. Buradan alınacak olan **bölüm sırası ve bilgi yoğunluğu**
(hero → ne yaptık → özellik kartları → teknoloji yığını → kapanış CTA → footer); tasarım dili değil.
Renk, tipografi ve düzeni taklit etme, o site İngilizce ve bizimki Türkçe.

**B) Planı eleştir, sonra kodla.** Şu üç "varsayılan yapay zekâ görünümü"nden kaçın: (1) krem arka
plan + yüksek kontrastlı serif + terracotta vurgu, (2) siyaha yakın arka plan + tek parlak asit yeşili
vurgu, (3) hairline çizgili, sıfır köşe yuvarlaklıklı gazete düzeni. Cesaretini **tek bir yere** harca;
gerisi sakin ve disiplinli kalsın.

**Kalite tabanı (pazarlık yok):**
- 360 px genişliğe kadar mobilde kırılmıyor; tablet ve masaüstü kırılma noktaları düzgün.
- Klavye ile gezilebiliyor, focus halkaları görünür, `prefers-reduced-motion` destekleniyor.
- Görsellerde anlamlı `alt` metni, doğru `width`/`height`, `loading="lazy"`.
- Metin/arka plan kontrastı WCAG AA.
- Animasyon varsa az ve amaçlı; scroll'da her şeyin sırayla belirmesi ucuz durur.
- CSS seçici özgüllüklerine dikkat et; bölüm padding'lerinin birbirini ezmesi klasik hata.

---

## 6. Dil ve metin

- **Site tamamen Türkçe.** Karışık dil doğrudan puan kırıyor. İstisna: özel adlar ve teknik terimler
  (React, FastAPI, YOLOv8, DTW, RAG, KVKK). "Project Proposal" gibi rapor başlıkları orijinal adıyla
  kalabilir ama yanında Türkçe açıklaması olsun.
- Buton ve etiketler eylemi söylesin: "Raporu indir (PDF)", "Gönder" değil.
- Yazım denetimi yap: Türkçe karakterler, büyük/küçük harf tutarlılığı (cümle düzeni), tek tip
  noktalama. Bitirdiğinde tüm metinleri bir kez daha tarayıp yazım hatası raporu ver.
- HTML `lang="tr"`.

---

## 7. Meta / teknik detaylar

- `<title>`, `<meta name="description">`, Open Graph ve Twitter card etiketleri (og-image için
  `assets/img/og.png` yer tutucusu).
- Favicon (SVG + fallback PNG). Basit, konudan türeyen bir işaret üret.
- `404.html` — aynı tasarım dilinde, ana sayfaya dönüş linkiyle.
- `README.md` — projenin ne olduğu, siteyi lokalde açma (`python -m http.server`), GitHub Pages'i
  açma adımları, dosya/klasör açıklaması, rapor ekleme talimatı.
- Toplam sayfa ağırlığını makul tut; görselleri optimize etmemi gerekiyorsa söyle.

---

## 8. Kabul kriterleri (bitirince tek tek işaretle)

Dersin rubriği birebir bunlar üzerinden puanlıyor:

- [ ] Site canlı ve HTTPS üzerinden erişilebilir (GitHub Pages)
- [ ] Raporlar bölümü Drive klasörüne bağlı; linkler tek yerde (`RAPORLAR` dizisi) toplanmış
- [ ] Drive linki gizli sekmede / oturum açmadan açılıyor, "erişim isteyin" ekranı çıkmıyor
- [ ] 5 takım üyesi tanıtılmış (fotoğraf/avatar + rol + link)
- [ ] Proje açıklaması net ve görsel destekli (mimari diyagram + UI mockup + demo alanı)
- [ ] 360 px'e kadar mobilde kırılmıyor; tasarım dili tutarlı
- [ ] Site baştan sona tek dilde (Türkçe), yazım denetimi yapılmış
- [ ] Tüm yollar göreli; alt dizinde yayınlandığında hiçbir link/görsel kırılmıyor
- [ ] `.nojekyll` mevcut, JS kapalıyken içerik okunabiliyor
- [ ] Kırık veya "yakında" olmayan yanlış link yok; eksikler TODO olarak raporlanmış

Bittiğinde bana şunu ver: (a) TODO listesi — benden ne bekliyorsun, (b) GitHub Pages'i açmak için
tıklamam gereken ayarlar, (c) mobil ve masaüstü için kısa bir öz-eleştiri.
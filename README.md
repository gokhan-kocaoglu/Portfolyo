# MyPortfolyo – Kişisel Geliştirici Portfolyo Projesi

## İçerik
- [Genel Bakış](#genel-bakış)

- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)

- [Özellikler](#özellikler)

- [Kurulum](#kurulum)

- [Yapı ve Mimarisi](#yapı-ve-mimarisi)

- [Testler](#testler)

## Genel Bakış

MyPortfolyo, modern web geliştirme trendlerine uygun olarak geliştirilmiş, kişisel portfolyo ve özgeçmiş sitenizdir. Tamamen React, Vite, Redux, TailwindCSS ve modern React ekosisteminin güncel araçları ile geliştirilmiştir.

Proje; çoklu dil desteği, karanlık & aydınlık tema seçeneği, responsive tasarım, animasyonlar, dinamik veri yönetimi ve gelişmiş test altyapısı gibi ileri seviye özellikler barındırır.


## Kullanılan Teknolojiler

React (Vite ile ultra hızlı dev ortamı)

Redux (veri yönetimi için)

Redux Thunk (asenkron işlemler için)

TailwindCSS (utility-first modern CSS framework)

Framer Motion (animasyonlar için)

React Toastify (bildirimler için)

React Lottie (yükleme animasyonları için)

React-Redux (bağlantı için)

Jest & React Testing Library / Vitest (birim ve entegrasyon testleri için)

Axios (API işlemleri için)

LocalStorage (tema & dil kalıcılığı için)

Custom Hooks ve Context API (state ve veri yönetiminde modern React pratikleri)

## Özellikler

🌐 Çoklu Dil Desteği: Türkçe ve İngilizce.

🌙 Karanlık & Aydınlık Tema: Kullanıcı tercihine göre otomatik ve buton ile anında değişim.

📱 Tamamen Responsive: Tüm cihazlarda sorunsuz ve modern görünüm.

🗂️ Bileşen Bazlı Yapı: Her ana bölüm kendi component olarak ayrılmıştır.

🧑‍💻 Dinamik Veri Yönetimi: Veriler merkezi Redux store ile yönetilir, API’den çekilir.

⚡ Hızlı Performans: Vite sayesinde hızlı build ve development ortamı.

✨ Animasyonlar: Framer Motion ile giriş/çıkış ve scroll animasyonları.

🔔 Bildirimler: React Toastify ile şık ve özelleştirilebilir bildirimler.

🦾 Yükleme Animasyonu: Lottie ile modern ve etkileşimli loading ekranı.

💾 Kalıcılık: Tema ve dil seçimleri localStorage ile korunur.

🧪 Test Edilebilirlik: RTL ve Vitest ile komponent, store ve etkileşim testleri yazılmıştır.

## Kurulum

### Projeyi klonlayın

git clone https://github.com/gokhan-kocaoglu/Portfolyo.git

cd myportfolyo

### Bağımlılıkları yükleyin

npm install

### Geliştirme ortamında başlatın

npm run dev

### Testleri çalıştırın

npm run test

## Yapı ve Mimarisi

src/

components/: Her bir sayfa bölümü ve atomik componentler (örn: HeroSection, SkillsSection, FooterSection, ResponsiveShape vs.)

context/: React Context API ile tema, dil, highlight vb. yönetimi.

hooks/: Custom hook’lar (örn: useResponsivePosition, useSectionData)

store/: Redux store, reducer ve aksiyonlar.

data/: Statik veya mock veriler (çoklu dil desteği ile).

assets/: Görseller, ikonlar, svg’ler.

test/: RTL/Vitest testleri.

App.jsx: Tüm uygulamanın ana konteyneri.

main.jsx: Giriş noktası.

## Testler

Vitest + React Testing Library ile tüm ana componentlerin yüklenme, render ve etkileşim testleri yazılmıştır.

Axios ve Redux thunk ile yapılan API çağrıları mock’lanabilir.

Ana akışlar, tema ve dil geçişi, section render’ları, kullanıcı etkileşimleri (örn: dark mode toggle, sosyal ikon tıklama) test edilmiştir.

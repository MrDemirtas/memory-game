# Memory Game

Bu proje, React ve Vite kullanılarak geliştirilmiş bir hafıza oyunudur. Oyuncular eşleşen sayı çiftlerini bulmaya çalışırlar ve oyun süresince harcanan zaman ile hamle sayısı takip edilir.

## 🎮 Özellikler

- Dinamik sayı kartları
- Hamle sayısı takibi
- Kronometre ile süre takibi
- Oyun sonu bildirimi
- Modern ve responsive tasarım

## 🛠️ Kullanılan Teknolojiler

- **React** (v18.3.1) - Kullanıcı arayüzü geliştirme
- **Vite** (v6.0.3) - Hızlı geliştirme ortamı ve build aracı
- **ESLint** (v9.17.0) - Kod kalitesi ve standartları

## 📁 Proje Yapısı

```
memory-game/
├── src/
│   ├── components/
│   │   ├── footer.jsx    # Oyun durumu ve istatistikleri
│   │   ├── header.jsx    # Oyun başlığı
│   │   └── numbers.jsx   # Sayı kartları ve oyun mantığı
│   ├── App.css          # Ana stil dosyası
│   ├── App.jsx          # Ana uygulama bileşeni
│   ├── main.jsx         # Uygulama giriş noktası
│   ├── nums.js          # Oyun verisi
│   └── reset.css        # CSS reset
├── eslint.config.js     # ESLint yapılandırması
├── index.html          # HTML şablonu
├── package.json        # Proje bağımlılıkları
└── vite.config.js      # Vite yapılandırması
```

## 🎯 Oyun Mantığı

1. Oyun başladığında sayılar rastgele karıştırılır
2. Oyuncu iki kart seçer
3. Seçilen kartlar eşleşirse görünür kalır
4. Eşleşmezse kartlar tekrar kapanır
5. Tüm eşleşmeler bulunduğunda oyun biter

## 🚀 Kurulum

1. Projeyi klonlayın:

```bash
git clone https://github.com/MrDemirtas/memory-game.git
cd memory-game
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

## 🔧 Kullanılabilir Komutlar

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Projeyi production için derler
- `npm run lint` - ESLint ile kod kontrolü yapar
- `npm run preview` - Production build'i önizleme

## 🎨 Bileşen Yapısı

- **App.jsx**: Ana uygulama bileşeni, oyun durumunu ve zamanlayıcıyı yönetir
- **Numbers.jsx**: Sayı kartlarının görüntülenmesi ve oyun mantığını içerir
- **Footer.jsx**: Oyun istatistiklerini (süre, hamle) gösterir
- **Header.jsx**: Oyun başlığını gösterir

## 🔄 State Yönetimi

- Oyun durumu (`gameOver`)
- Hamle sayısı (`moves`)
- Süre (`time`)
- Seçili kartlar (`selectedNumbers`)
- Kart durumları (`numberData`)

## 🌟 Öne Çıkan Özellikler

- Temiz ve modüler kod yapısı
- Performans odaklı geliştirme
- Modern React pratikleri
- ESLint ile kod kalitesi kontrolü

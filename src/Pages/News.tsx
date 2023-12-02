import '@fortawesome/fontawesome-free/css/all.css';
import './News.css';

export function News() {
    return (
<body>
    <h1 className="judul-berita">Movie News</h1>
    <div className="wrap">

        <div className="News">  
            <div className="boxberita">
                <img className="gambarberita" src="https://akcdn.detik.net.id/visual/2022/01/28/ryu-jun-yeol_169.png?w=650&q=90" alt="artiskorea"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129104949-220-1030409/ryu-jun-yeol-diincar-bintangi-film-baru-sutradara-train-to-busan'>
                Ryu Jun-yeol Diincar Bintangi Film Baru Sutradara Train to Busan</a>
            </div>
            <div className="boxberita">
                <img className="gambarberita" src="https://akcdn.detik.net.id/visual/2023/11/29/napoleon-2023_169.png?w=280&q=90" alt="kaisarprancis"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129184325-220-1030701/sinopsis-napoleon-kisah-cinta-pilu-sang-kaisar-prancis'>
                Sinopsis Napoleon, Kisah Cinta Pilu Sang Kaisar Prancis</a>
            </div>

            <div className="boxberita">
                <img className="gambarberita" src="https://akcdn.detik.net.id/visual/2023/11/30/film-panggonan-wingit-2023-1_169.png?w=650&q=90" alt="orangdesa"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231130150114-220-1031114/sinopsis-panggonan-wingit-hantu-hotel-tua-teror-luna-maya'>
                Sinopsis Panggonan Wingit, Hantu Hotel Tua Teror Luna Maya</a>
            </div>

            <div className="boxberita">
                <img className="gambarberita" src="https://akcdn.detik.net.id/visual/2022/01/20/serial-the-boys-1_169.png?w=280&q=90" alt="kaptentheboys"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129075600-220-1030342/serial-the-boys-siapkan-spin-off-berlatar-di-meksiko'>
                Serial The Boys Siapkan Spin-Off Berlatar di Meksiko</a>
            </div>
        </div>

        <div className="News2">
            <div className="boxberita">
                <img className="gambarberita" src="https://m.media-amazon.com/images/M/MV5BZDY5ODFhZjctZGIxNi00YzBmLThmYzItNDdmZTFmNWUwZWQ1XkEyXkFqcGdeQW1yb3NzZXI@._V1_QL75_UY281_CR8,0,500,281_.jpg" alt="kaptentheboys"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129075600-220-1030342/serial-the-boys-siapkan-spin-off-berlatar-di-meksiko'>
                Spiderman Into The Spiderverse Mendapatkan Pujian Best Movie</a>
            </div>
            <div className="boxberita">
                <img className="gambarberita" src="data:image/jpeg;base64,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" alt="kaptentheboys"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129075600-220-1030342/serial-the-boys-siapkan-spin-off-berlatar-di-meksiko'>
                Dapatkan Diskon Pembelian Ticket Pada Hari Ini!</a>
            </div>
            <div className="boxberita">
                <img className="gambarberita" src="https://i0.wp.com/midwestfilmjournal.com/wp-content/uploads/2023/05/The-Little-Mermaid-Featured.png?fit=1200%2C670&ssl=1&w=640" alt="kaptentheboys"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129075600-220-1030342/serial-the-boys-siapkan-spin-off-berlatar-di-meksiko'>
                Film The Little Mermaid Mendapatkan Kritikan yang Besar!</a>
            </div>
            <div className="boxberita">
                <img className="gambarberita" src="https://m.media-amazon.com/images/M/MV5BODUxNzE5MDI1NV5BMl5BanBnXkFtZTgwNTAwNzE2MzI@._V1_QL75_UX500_CR0,46,500,281_.jpg" alt="kaptentheboys"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129075600-220-1030342/serial-the-boys-siapkan-spin-off-berlatar-di-meksiko'>
                The Rock Dikonfirmasikan Bermain di film Jumanji 2</a>
            </div>
        </div>

        <div className="News3">
            <div className="boxberita">
                <img className="gambarberita" src="https://cosmicbook.news/wp-content/uploads/2018/12/avengers-endgame-thor-logo-art-1024x538.jpg" alt="kaptentheboys"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129075600-220-1030342/serial-the-boys-siapkan-spin-off-berlatar-di-meksiko'>
                Avengers Dikabarkan Mulai Memasuki Phase 6</a>
            </div>
            <div className="boxberita">
                <img className="gambarberita" src="https://sm.ign.com/ign_nordic/review/t/the-hunger/the-hunger-games-the-ballad-of-songbirds-and-snakes-review_kzyk.jpg" alt="kaptentheboys"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129075600-220-1030342/serial-the-boys-siapkan-spin-off-berlatar-di-meksiko'>
                Film yang Ditunggu-Tunggu Sebentar Lagi Akan Hadir!</a>
            </div>
            <div className="boxberita">
                <img className="gambarberita" src="https://yt3.googleusercontent.com/ugAmG9LeliJJoiyacIecdiq_ZgRNdmjCIohaN5x3QEOmWB9dNUsKuCU8ngLs3JUauHZ4-boVkA=s900-c-k-c0x00ffffff-no-rj" alt="kaptentheboys"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129075600-220-1030342/serial-the-boys-siapkan-spin-off-berlatar-di-meksiko'>
                Marvel Tahun Depan Hanya Akan Merilis Satu Film Saja!</a>
            </div>
            <div className="boxberita">
                <img className="gambarberita" src="https://www.viv.co.id/uploads/large/7860518efcca672436caa0194fb4b94f.png" alt="kaptentheboys"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129075600-220-1030342/serial-the-boys-siapkan-spin-off-berlatar-di-meksiko'>
                Dafter Pemenang Indonesia Movie Actors</a>
            </div>
        </div>
    </div>
</body>
    )
}
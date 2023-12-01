import '@fortawesome/fontawesome-free/css/all.css';
import './News.css';

export function News() {
    return (
<body>
    <h1 className="judul-berita">Movie News</h1>
        <div className="News">
            
            <div className="boxberita">
                <img className="gambarberita" src="https://akcdn.detik.net.id/visual/2022/01/28/ryu-jun-yeol_169.png?w=650&q=90" alt="artiskorea"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129104949-220-1030409/ryu-jun-yeol-diincar-bintangi-film-baru-sutradara-train-to-busan'>
                Ryu Jun-yeol diincar bintangi film baru sutradara Train to Busan</a>
            </div>
                
            <div className="boxberita">
                <img className="gambarberita" src="https://akcdn.detik.net.id/visual/2023/11/29/napoleon-2023_169.png?w=280&q=90" alt="kaisarprancis"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129184325-220-1030701/sinopsis-napoleon-kisah-cinta-pilu-sang-kaisar-prancis'>
                Sinopsis Napoleon, kisah cinta pilu Sang Kaisar Prancis</a>
            </div>

            <div className="boxberita">
                <img className="gambarberita" src="https://akcdn.detik.net.id/visual/2023/11/30/film-panggonan-wingit-2023-1_169.png?w=650&q=90" alt="orangdesa"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231130150114-220-1031114/sinopsis-panggonan-wingit-hantu-hotel-tua-teror-luna-maya'>
                Sinopsis Panggonan Wingit, Hantu Hotel Tua Teror Luna Maya</a>
            </div>

            <div className="boxberita">
                <img className="gambarberita" src="https://akcdn.detik.net.id/visual/2022/01/20/serial-the-boys-1_169.png?w=280&q=90" alt="kaptentheboys"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129075600-220-1030342/serial-the-boys-siapkan-spin-off-berlatar-di-meksiko'>
                Serial The Boys siapkan spin-off berlatar di Meksiko</a>
            </div>
        </div>

        <div className="trailer">
            <div className="boxtrailer">
                <video className="videotrailer" controls>
                    <iframe src="https://www.youtube.com/watch?v=4HT4KELhn1c" title ="YTVideo" allow="autoplay; encrypted-media"></iframe>
                </video>
                <p className="hedlineberita">Napoleon teaser</p>
            </div>
            
            <div className="boxtrailer">
            <video className="videotrailer" controls>
                    <iframe src="https://www.youtube.com/watch?v=-sm6TqfB70Q&pp=ygUYcGFuZ2dvbmFuIHdpbmdpdCB0cmFpbGVy" title ="YTVideo" allow="autoplay; encrypted-media"></iframe>
                </video>
                <p className="hedlineberita">Panggonan Wingit teaser</p>
            </div>
            
            <div className="boxtrailer">
            <video className="videotrailer" controls>
                    <iframe src="https://www.youtube.com/watch?v=Z7w00AiMZZw" title ="YTVideo" allow="autoplay; encrypted-media"></iframe>
                </video>
                <p className="hedlineberita">The Spin Boys Season 4 teaser</p>
            </div>

        </div>
</body>
    )
}
/* eslint-disable jsx-a11y/anchor-has-content */
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
                <img className="gambarberita" src="https://akcdn.detik.net.id/visual/2023/11/28/172-days-7_169.png?w=280&q=90" alt="orangdesa"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129145239-220-1030562/172-days-cetak-11-juta-penonton-dalam-6-hari-tayang'>
                    172 Days cetak 1,1 juta penonton dalam 6 hari tayang</a>
            </div>

            <div className="boxberita">
                <img className="gambarberita" src="https://akcdn.detik.net.id/visual/2022/01/20/serial-the-boys-1_169.png?w=280&q=90" alt="kaptentheboys"></img>
                <a className="hedlineberita" href='https://www.cnnindonesia.com/hiburan/20231129075600-220-1030342/serial-the-boys-siapkan-spin-off-berlatar-di-meksiko'>
                    Serial The Boys siapkan spin-off berlatar di Meksiko</a>
            </div>
        </div>
</body>
    )
}
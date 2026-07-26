import Hero from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Hero
        title="Membangun Web dari Nol Memang Membingungkan."
        subTitle="Saya Mdbahrulilmi, seorang Fullstack Developer yang mengubah ide rumit menjadi aplikasi web yang bersih, cepat, dan siap pakai. Jangan biarkan kendala teknis menghentikan visi Anda." 
        buttonTitle="Lihat Cara Saya Membantu →"
      />
      <Footer />
    </>
  );
}

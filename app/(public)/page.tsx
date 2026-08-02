import Hero from "../../components/hero";
import Workflow from "./workflow";

export default function Home() {
  return (
    <>
      <Hero
        title="Jangan Biarkan Solusi Teknis Menghambat Bisnis Anda."
        subTitle="Halo, saya Muhamma Bahrul Ilmi! Saya mengubah konsep dan kebutuhan bisnis Anda menjadi aplikasi web berkinerja tinggi, aman, dan siap tumbuh bersama produk Anda."
        buttonTitle="Lihat Cara Saya Bekerja"
        buttonLink="#workflow"
      />
      <Workflow />
    </>
  );
}

import { Fragment } from "react";
import Navbar from "../components/Navbar";
import myFoto from "../assets/myfoto.jpg"

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="w-full bg-slate-900">
        <div className="min-h-screen container mx-auto px-8 flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="col-span-1 flex justify-center items-center">
              <img src={myFoto} alt={"foto-saya"} title={"foto-saya"} className={"w-[25rem] h-[25rem] object-cover"}/>
            </div>
            <div className="col-span-1 flex justify-center flex-col">
              <h1 className={"text-4xl mb-2 font-bold text-slate-200"}>
                Tentang Saya
              </h1>
              <p className={"text-slate-400 font-medium text-justify"}>
                Saya adalah alumni mahasiswa SMKN 1 Dlanggu yang lulus pada
                tahun ini, pada tanggal 5 Mei 2023, pada tahun 2023 ini berumur
                18 tahun, saya adalah seorang Fullstack developer, pernah magang
                di Lab Akselerasi didaerah Kabupaten Gondang di bidang coding /
                programming, disana saya mempelajari banyak hal seperti
                mempelajari dasar dasar tentang pemrograman, saya juga menjadi
                Fullstack Developer karena menjadi murid magang disana selama 6
                bulan dari Bulan Juni 2022 - Desember 2022, dan sampai sekarang
                masih saya lanjutkan untuk mempelajari hal baru, dan pernah juga
                diajarkan untuk mendesain dari aplikasi Figma
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

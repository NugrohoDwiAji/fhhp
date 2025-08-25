import CardBerkas from "@/components/cards/CardBerkas";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Berkas = {
  id: string;
  title: string;
  filepath: string;
  uploadat: string;
};

type IdentitasType = {
  id: string;
  name: string;
  value: string;
};

export default function Unduhan() {
  const [berkas, setberkas] = useState<Berkas[]>([]);
  const [identitas, setIdentitas] = useState<IdentitasType[] | null>([]);

  const handleGetIdentitas = async () => {
    try {
      const result = await axios.get("/api/identitas");
      setIdentitas(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetIdentitas();
  }, []);

  const handleBerkas = async () => {
    try {
      const response = await axios.get("/api/berkas");
      setberkas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleBerkas();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative h-80 md:h-96 lg:h-[43rem]">
        <img
          src="/img/banner-fhhp.png"
          alt=""
          className="w-full bg-cover h-full"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-10 -mt-9 md:-mt-20 lg:-mt-36">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-shadow-lg/20">
            Berkas Unduhan
          </h1>
          <h2 className="text-white mt-3 text-shadow-lg">
            Berkas Penting{" "}
            {identitas?.find((item) => item.name === "Nama Fakultas")?.value}{" "}
            Universitas Bumigora
          </h2>
        </div>
      </div>

      <div className="text-red-700 text-shadow-lg text-center mt-10 ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">Berkas</h1>
      </div>
      {/* Main */}
      <main className="flex flex-col items-center min-h-64">
        <div className="flex gap-5 flex-wrap justify-start lg:p-10 p-5">
          {berkas.map((item) => (
            <CardBerkas key={item.id} title={item.title} link={item.filepath} />
          ))}
        </div>
      </main>
    </div>
  );
}

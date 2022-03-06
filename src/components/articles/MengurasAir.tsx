import Header from "../Header";
import NavigationBar from "../NavigationBar";

const MengurasAir = () => {
  return (
    <>
      <Header />
      <div className="top h-full pb-12">
        <div className="rounded-[30px] bg-white mx-8 my-5 p-7 display-four">
          <h1 className="text-lg font-semibold m-2">MENGURAS AIR KOLAM</h1>
          <p>
            Air yang bening adalah dambaan setiap pemilik kolam Kol Seringkali terjadi pada pemelihara Koi, karena tak
            sabar ingin melihat air kolam menjadi bening maka yang paling mudah dilakukan adalah dengan menguras air
            lama dan menggantinya dengan air baru. Namun demikian hal Ini adalah kesalahan fatal. Mengapa demikian?
            Sebab air baru yang dimasukkan ke dalam kolam tentu memiliki komposisi zat yang sangat berbeda dengan
            kondisi air kolam yang ada. Suhu air. PH, KH, GH, juga kadar oksigen yang terlarut dan zat-zat lainnya yang
            terkandung di dalam air baru, bisa jadi sangat jauh berbeda kondisinya dengan air lama. Pada kasus tertentu
            dimana terjadi perbedaan kualitas air yang ekstrim dapat menyebabkan kematian masal pada Kol akibat menguras
            total air kolam. Ikan Koi sangat rentan terhadap perubahan kondisi air yang mendadak. Oleh sebab itu, jika
            ingin mengganti air kolam, lakukan secara bertahap yaitu maksimal 25% saja. Pasti anda bertanya lagi, kalau
            hanya diganti 25% saja, bagaimana air kolam bisa menjadi bening? Kembali lagi pada kondisi air yang bening,
            bukanlah ukuran untuk memelihara Koi agar dapat hidup sehat. Maksudnya, jika anda ingin mendapatkan air yang
            bening, maka buatlah sistem filtrasi yang memadai. Jadi, pastikan bahwa air kolam yang bening sebagai hasil
            proses filtrasi yang baik dan benar. Dengan adanya air yang bening, maka selain kolam tampak indah dipandang
            juga Koi merasa nyaman tinggal disana
          </p>
        </div>
      </div>
      <NavigationBar />
    </>
  );
};

export default MengurasAir;

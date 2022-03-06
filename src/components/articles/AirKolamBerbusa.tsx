import Header from "../Header";
import NavigationBar from "../NavigationBar";

const AirKolamBerbusa = () => {
  return (
    <>
      <Header />
      <div className="top h-full pb-12">
        <div className="rounded-[30px] bg-white mx-8 my-5 p-7 display-four">
          <h3 className="text-lg font-semibold m-2">AIR KOLAM BERBUSA</h3>

          <p>
            Kolam Koi berbusa selain mengganggu pemandangan, juga membuat koi merasa tidak nyaman. Bisa saja terjadi
            secara tiba-tiba air kolam terdapat banyak busa seperti busa sabun Atau pada kolam yang baru selesai
            dibangun, biasanya terdapat busa berwarna putih di permukaan an Mungkin karena adanya sisa-sisa bahan
            bangunan atau reaksi air terhadap cat yang digunakan untuk melapisi dinding kolam. Namun demikian, jika
            kolam anda sudah cukup lama beroperasi, lalu tiba-tiba timbul busa, maka kemungkinan yang terjadi adalah
            sebagai berikut:{" "}
          </p>

          <h3 className="text-lg font-semibold m-2">1. Keberadaan Air Terjun atau Air Mancur</h3>

          <p>
            Jika kolam anda dilengkapi dengan air terjun (water fall) atau air mancur (fountain), maka hal ini dapat
            menyebabkan timbulnya banyak busa. Sebab semakin tinggi jarak jatuhnya air dari pancuran ke permukaan air
            kolam. maka air seperti dikocok-kocok. Oleh sebab itu tidak disarankan membuat air mancur untuk kolam koi
            dan jika memang ingin membuat air terjun maka kondisikan agar jarak jatuhnya air tidak terlalu tinggi.
          </p>

          <h3 className="text-lg font-semibold m-2">2. Pompa Udara (Air Blower)</h3>

          <p>
            Untuk menambah kadar oksigen pada air kolam biasanya digunakan aerator berupa pompa udara (air pump atau air
            blower). Namun demikian jika intensitas aerasi berlebihan, juga dapat mengakibatkan timbulnya banyak busa
            pada permukaan air kolam.
          </p>

          <h3 className="text-lg font-semibold m-2">3. Pemijahan Koi (Koi Spawning)</h3>

          <p>
            Kemungkinan lainnya adalah ada Koi betina yang baru saja mengalami proses pemijahan (perkawinan). Busa yang
            timbul pada permukaan air kolam adalah karena adanya sperma yang dikeluarkan oleh Koi jantan untuk membuahi
            telur. Untuk memastikannya, coba amati dari jarak dekat pada dinding kolam. terutama pada bagian yang
            tersentuh permukaan air. Biasanya terdapat butiran telur berwarna bening yang menempel disana. Telur Koi
            yang tidak menempel di dinding kolam akan dimakan oleh Koi-Koli lainnya.
          </p>

          <h3 className="text-lg font-semibold m-2">4. TDS atau DOC yang meningkat</h3>

          <p>
            TDS (Total Dissolved Solid) atau DOC (Dissolved Organic Compounds). keduanya adalah sebagai parameter untuk
            mengetahui kualitas air kolam (water quality). TDS adalah untuk mengukur kadar KH, GH, kotoran ikan, sisa
            makanan dan berbagai kandungan zat kimia yang terlarut dalam air kolam. juga dengan DOC. Semakin rendah
            tingkat TDS, maka semakin baik bagi kesehatan Koi terutama untuk mempercepat pertumbuhannya. TDS yang
            meningkat biasanya terjadi akibat pemberian pakan yang berlebihan (overfeeding) atau air kolam sudah terlalu
            lama tidak dites dengan air baru. Pakan Koi yang berkualitas rendah juga bisa membuat menjadi cepat berbusa.
          </p>

          <h3 className="text-lg font-semibold m-2">5. Kadar Amonia tinggi</h3>

          <p>
            Amonia adalah zat yang paling berbahaya bagi kehidupan Koi kadarnya melebihi ambang batas normal. Ammonia
            berasal dan kotoran ka yang dikeluarkan melalui insang dan anus. Tingginya kadar amonia b saja sebagai
            akibat sistem filter yang kurang memadai.
          </p>

          <h3 className="text-lg font-semibold m-2">6. Algae Bloom</h3>

          <p>
            Alga adalah tumbuhan bersel satu yang hanya dapat dilihat dengan mikroskop Keberadaan Alga di kolam Koi
            selain menimbulkan gangguan air hijau juga terkadang membuat air kolam berbusa, yaitu keka Algae sedang
            bermekaran yang dikenal dengan istilah Algae Bloom. Untuk mengurangi jumlah Alga yang tumbuh di kolam adalah
            dengan cara menambahkan penutup kolam atau menanam pohon yang rindang di sekitar kolam dengan tujuan untuk
            mengurangi intensitas cahaya matahari yang langsung masuk ke kolam. Cara lainnya adalah dengan memasang
            lampu UV pada ruang filter, nam demikian hal ini tidak disarankan sebab sinar lampu UV juga dapat merusak
            bakteri nitrifikasi yang dibutuhkan dalam proses filtrasi biologi.
          </p>
        </div>
      </div>
      <NavigationBar />
    </>
  );
};

export default AirKolamBerbusa;

import Header from "../Header";
import NavigationBar from "../NavigationBar";

const OverFeeding = () => {
  return (
    <>
      <Header />
      <div className="top h-full pb-12">
        <div className="rounded-[30px] bg-white mx-8 my-5 p-7 display-four">
          <h1 className="text-lg font-semibold m-2">OVER FEEDING</h1>

          <p>
            Melihat ikan Koi yang sedang makan dengan lahap adalah sebuah pemandangan yang sangat menyenangkan. Apalagi
            Koi-Koi anda demikian jinak hingga berebut pakan langsung dari tangan anda (hand feeding) Karena asyik
            menikmati pemandangan Koi yang sedang berebut pakan. Seringkali tak disadari bahwa pakan yang diberikan
            sudah berlebihan (over feeding). Hal ini sesungguhnya merupakan suatu kekeliruan yang seringkali dilakukan
            oleh pemelihara Koi.
          </p>

          <p>
            Pemberian pakan yang terlalu banyak, tidak mempengaruhi apapun pada pertumbuhan Koi Justru sebaliknya, malah
            akan membuat kolam. tercemar oleh kotoran Koi sendiri dan menambah beban kinerja sistem filter kolam. Untuk
            diketahui bahwa Koi setiap hari hanya efektif menyerap makanan sebanyak 2-3 % dan berat tubuhnya sendiri.
          </p>

          <p>
            Jadi, jika anda memberi pakan Koi dalam jumlah banyak secara sekaligus dengan harapan agar Koi anda cepat
            tumbuh besar, maka hal ini adalah pandangan yang keliru. Pakan yang berlebihan akan terbuang percuma Kor
            yang sehat memang terlihat sangat bernafsu untuk melahap makanan yang diberikan. Meskipun perut Koi sudah
            penuh berisi makanan, namun yang mampu diserap hanyalah 2-3 % dan berat tubuhnya, selebihnya akan terbuang
            dan menjadi kotoran.
          </p>

          <p>
            Jika anda ingin mempercepat pertumbuhan Koi, bukan dengan cara memben banyak makan, tapi dengan memberinya
            makanan yang mengandung protein tinggi. Jadi yang diutamakan bukanlah kuantitas tapi kualitas pakan. Lebih
            baik memberi pakan sedikit-demi sedikit tetapi sering dilakukan, daripada dalam jumlah banyak secara
            sekaligus.
          </p>
        </div>
      </div>
      <NavigationBar />
    </>
  );
};

export default OverFeeding;

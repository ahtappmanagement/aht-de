import Image from "next/image";
import saffron from "images/saffron.jpg";
import Head from "next/head";
function Saffron() {
  return (
    <>
      <Head>
        <title>AHTFoods | saffron</title>
      </Head>
      <section id="about" class="about">
      <div class="container">
        <div class="section-title">
          <span>Saffron</span>
          <h2>Saffron</h2>
        </div>
        <div class="row content my-4">
          <div class="col-md-5">
            <Image class="img-fluid" src={saffron} alt="saffron"/>
          </div>
          <div class="col-md-7 text-justify">

            <p>The spice originates from a flower called crocus sativus—commonly known as the "saffron crocus." Our saffron is provided in two different ways bulk and consumer pack (private label), and also we cover all different part of saffron flower. It can be used in different dishes and different kind of foods recipes. Saffron has a good effects in human health like: it boosts energy, protects heart health, improves bone strength, and also improves nerve function.</p>

          </div>
        </div>
       <div class="row">
         &nbsp;
       </div>


      </div>
    </section>
    </>
  );
}

export default Saffron;

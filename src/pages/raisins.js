import Image from "next/image";
import raisins from "images/raisins.jpg";
import Head from "next/head";
function Raisins() {
  return (
    <>
      <Head>
        <title> AHTFoods| raisins</title>ّ
      </Head>
      <main id="main">
        <section id="about" class="about">
          <div class="container">
            <div class="section-title">
              <span>Raisins</span>
              <h2>Raisins</h2>
            </div>
            <div class="row content my-4">
              <div class="col-md-5">
            <Image class="img-fluid" src={raisins} alt="raisins" />
              </div>
              <div class="col-md-7 text-justify">
                <p>
                  Raisins or dried grape can be produced in many region all
                  around the world, raisins are good source of dietary fiber,
                  and it has different varieties like sultana, Golden Raisins,
                  and etc. Our raisins are selected from the best and high
                  quality raw materials with high standards.
                </p>
              </div>
            </div>
            <div class="row">&nbsp;</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Raisins;

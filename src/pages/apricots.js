import Image from "next/image";
import apricots from "images/apricots.jpg";
import Head from "next/head";
function FreezeDried() {
  return (
    <>
      <Head>
        <title>AHTFoods | freeze dried</title>
      </Head>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <span>Dried Apricots</span>
            <h2>Dried Apricots</h2>
          </div>
          <div class="row content my-4">
            <div class="col-md-5">
              <Image class="img-fluid" src={apricots} alt="apricots" />
            </div>
            <div class="col-md-7 text-justify">
              <p>
                Apricots are small, golden orange fruits, with a skin like
                peach. Dried Apricots have pleasant sweet taste and it is
                because of their big size. They are moist and chewy. Apricots
                contain a good amount of VITAMIN C, A and copper. also apricots
                contain plenty of antioxidants, and Apricots are a good source
                of dietary fiber. This overall fiber content should be helpful
                for most people in supporting digestive health.
              </p>
            </div>
          </div>
          <div class="row">&nbsp;</div>
        </div>
      </section>
    </>
  );
}

export default FreezeDried;

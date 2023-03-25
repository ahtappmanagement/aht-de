import Image from "next/image";
import figs from "images/figs.jpg";
import Head from "next/head";
function Figs() {
  return (
    <>
      <Head>
        <title>AHTFoods |Figs</title>
      </Head>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <span>Figs</span>
            <h2>Figs</h2>
          </div>
          <div class="row content my-4">
            <div class="col-md-5">
              <Image class="img-fluid" src={figs} alt="figs" />
            </div>
            <div class="col-md-7 text-justify">
              <p>
                Figs have a unique, sweet taste, soft and chewy texture and are
                littered with slightly crunchy, edible seeds. figs are delicate
                and perishable, so are often dried to preserve. This produces a
                sweet and nutritious dried fruit that can be enjoyed all year
                round. There are multiple different varieties of dried fig, all
                of which vary widely in color and texture. Their unique feature
                is a little bud-like opening called an ostiole at the top that
                helps the fruit develop. Their natural sweetness meant that,
                before the days of refined sugars, they were often used as a
                sweetener.{" "}
              </p>
            </div>
          </div>
          <div class="row">&nbsp;</div>
        </div>
      </section>
    </>
  );
}

export default Figs;

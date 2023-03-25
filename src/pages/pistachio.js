import Image from "next/image";
import pistachio from "images/pistachio.jpg";
import Head from "next/head";
function Pistachio() {
  return (
    <>
      <Head>
        <title>AHTFoods | pistachio</title>
      </Head>
      <main id="main">
        <section id="about" class="about">
          <div class="container">
            <div class="section-title">
              <span>Pistachio</span>
              <h2>Pistachio</h2>
            </div>
            <div class="row content my-4">
              <div class="col-md-5">
                <Image class="img-fluid" src={pistachio} alt="pistachios" />
              </div>
              <div class="col-md-7 text-justify">
                <p>
                  Pistachios are naturally dense food, but not only in energy it
                  is also a great source for vitamins specially B vitamins like:
                  vitamin B6 and thiamin and also vitamin K and E, except
                  vitamins it has a large amount of minerals for example
                  calcium. Pistachios have a different varieties and they can be
                  sorted from size or shape (and also salted or flavored), and
                  they are collected from the best materials, and the important
                  thing is our pistachios are aflatoxin free.
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

export default Pistachio;

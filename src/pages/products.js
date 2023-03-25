import products from "../../images/index";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
function Products() {
  const {
    dates,
    pistachio,
    raisins,
    saffron,
    apple,
    figs,
    apricots
  } = products;
  return (
    <>
      <Head>
        <title>AHTFoods | produces</title>
      </Head>

      <section id="team" class="team">
      <div class="container">

        <div class="section-title">
          <span>Our Products</span>
          <h2>Our Products</h2>
        </div>

        <div class="row">

          <div class="col-lg-3">
            <div class="member d-flex align-items-start my-4">
              <div><a href="/pistachio"><Image src={pistachio} class="img-fluid" alt="pistachio"/></a></div>
            </div>
          </div>

          <div class="col-lg-3 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start my-4">
              <div> <a href="/dates"><Image src={dates} class="img-fluid" alt="dates"/></a></div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="member d-flex align-items-start my-4">
              <div ><a href="/raisins"><Image src={raisins} class="img-fluid" alt="raisins"/></a></div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="member d-flex align-items-start my-4">
              <div><a href="/figs"><Image src={figs} class="img-fluid" alt="figs"/></a></div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="member d-flex align-items-start my-4">
              <div><a href="/driedApples"><Image src={apple} class="img-fluid" alt="driedApples"/></a></div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="member d-flex align-items-start my-4">
              <div> <a href="/saffron"><Image src={saffron} class="img-fluid" alt="saffron"/></a></div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="member d-flex align-items-start my-4">
              <div><a href="/apricots"><Image src={apricots} class="img-fluid" alt="apricots"/></a></div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  );
}

export default Products;

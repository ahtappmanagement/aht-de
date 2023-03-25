import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Products from "./products";
import a from "../../images/a.jpg";
import slides from "../../images/slides";
// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const {dates, raisins, pistachio, sultana} = slides
  return (
    <>
      <Head>
        <title>AHTFoods</title>
      </Head>

      <section id="hero">
    <div class="hero-container">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          {/* <!-- Slide 2 --> */}
          <div class="carousel-item active">
            <div class="carousel-background"><Image src={pistachio} alt="pistachio"/></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animated fadeInDown">Pistachios</h2>
                <p class="animated fadeInUp">Diamond of NUTS<br/>
                  pistachios & pistachio Kernel<br/>
                  Aflatoxin guaranteed.</p>
                <a href="/pistachio" class="btn-get-started scrollto animated fadeInUp">Read More</a>
              </div>
            </div>
          </div>

          {/* <!-- Slide 3 --> */}
          <div class="carousel-item">
            <div class="carousel-background"><Image src={dates} alt="dates"/></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animated fadeInDown">Dates</h2>
                <p class="animated fadeInUp">Unpitted/pitted Dates in different types
                  Natural sweetener</p>
                <a href="/dates" class="btn-get-started scrollto animated fadeInUp">Read More</a>
              </div>
            </div>
          </div>

          {/* <!-- Slide 5 --> */}
          <div class="carousel-item">
            <div class="carousel-background"><Image src={raisins} alt="raisins"/></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animated fadeInDown">Raisins</h2>
                <p class="animated fadeInUp">Natural Candy</p>
                <a href="/raisins" class="btn-get-started scrollto animated fadeInUp">Read More</a>
              </div>
            </div>
          </div>
          {/* <!-- Slide 6 --> */}
          <div class="carousel-item">
            <div class="carousel-background"><Image src={sultana} alt="sultana"/></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animated fadeInDown">Sultana Raisins</h2>
                <p class="animated fadeInUp">Natural Candy</p>
                <a href="/raisins" class="btn-get-started scrollto animated fadeInUp">Read More</a>
              </div>
            </div>
          </div>

        </div>

        <a class="carousel-control-prev" href="/#heroCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon ri-arrow-left-line" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="/#heroCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon ri-arrow-right-line" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

      </div>
    </div>
  </section>

  <main id="main">

{/* About Section */}
<section id="about" class="about">
  <div class="container">
    <div class="section-title">
      <span>About Us</span>
      <h2>About Us</h2>
    </div>
    <div class="row content">
      <div class="col-md-5">
        <Image class="img-fluid" src={a} alt="about"/>
      </div>
      <div class="col-md-7 text-justify">

        <p>
          <b>AHTFoods </b> is the Key well known Trader of Dried Fruits & Nuts in the world. We select our materials from selected BRC and IFS approved manufacturers all around the world with highest Quality. at <b>AHTFoods </b> we recognize and accept our trading responsibilities for ensuring the continued safety of products which are supplied by the best quality approved suppliers.
        </p>
        <p>
          <b>AHTFoods  </b>is creating real value that can be sustained over the long term and to form lasting relationships which enable all our customer’s requirements to be met.
          By all of the activities regarding <b>SUPPLIER EVALUATION </b>, We ensure that the highest standards of food sorting & packaging and hygiene rules are maintained by our services.

        </p>
      </div>
    </div>
    


  </div>
</section>
{/* <!-- End About Section --> */}
<section  class="team">
  <div class="container">
    <div class="section-title">
      <span>Our VISION & MISSION</span>
      <h2>Our VISION & MISSION</h2>
    </div>

    <div class="row">
      <p>This is our vision to provide the best quality approved natural products for all of the world. And this is our mission to corporate with suppliers which are in compliance with EU regulations and loyal to their obligations.
        We are the KEY well known trader of Dried Fruits and Nuts such as Pistachios, Raisins,Dried Apricots,Dried Apples, Figs, Dates and Dates Product.
      </p>
    </div>
  </div>
</section>

      <Products/>
      </main>
    </>
  )
}
export default Home;


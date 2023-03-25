import Image from "next/image";
import dates from "images/dates.jpg";
import Head from "next/head";
function Dates() {
  return (
    <>
      <Head>
        <title>AHTFoods | dates</title>
      </Head>
      <section id="about" class="about">
      <div class="container">
        <div class="section-title">
          <span>Dates</span>
          <h2>Dates</h2>
        </div>
        <div class="row content my-4">
          <div class="col-md-5">
            <Image class="img-fluid" src={dates} alt="dates"/>
          </div>
          <div class="col-md-7 text-justify">

            <p>Dates are calorie dense high value type of fruit, and one of the most important things about Dates is: this special fruit contain a great level of Iron and it can cure Iron deficiency, and also Dates can increase strength and vitality in anemia. We have provided a large variety of Dates with the best quality in bulk and consumer pack (private label).</p>

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

export default Dates;

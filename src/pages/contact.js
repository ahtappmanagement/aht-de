import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>AHTFoods | const</title>
      </Head>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <span>Contact Us</span>
            <h2>Contact Us</h2>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h2 class="my-4">About AHTFoods </h2>
              <p class="text-justify">
                <b>AHTFoods </b> is the Key well known Trader of Dried Fruits &
                Nuts in the world. We select our materials from selected BRC and
                IFS approved manufacturers all around the world with highest
                Quality. at <b>AHTFoods </b> we recognize and accept our trading
                responsibilities for ensuring the continued safety of products
                which are supplied by the best quality approved suppliers.
              </p>
              <p class="text-justify">
                <b> AHTFoods </b> is creating real value that can be sustained
                over the long term and to form lasting relationships which
                enable all our customer’s requirements to be met. By all of the
                activities regarding <b>SUPPLIER EVALUATION</b>, We ensure that
                the highest standards of food sorting & packaging and hygiene
                rules are maintained by our services.
              </p>
            </div>
            <div class="col-md-6">
              <h4 class="address my-4"> Address :</h4>
              <p>Alsterkrugchaussee. 286 Hamburg 22297</p>
              <h4 class="address"> Phone :</h4>
              <p>
                0049 17627875486
                <br />
                00971 505548664{" "}
              </p>
              <h4 class="address"> Email :</h4>
              <p>
                <a
                  href="/cdn-cgi/l/email-protection"
                  class="__cf_email__"
                  data-cfemail="751c1b131a35141d01131a1a11065b1110"
                >
                  [email&#160;protected]
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

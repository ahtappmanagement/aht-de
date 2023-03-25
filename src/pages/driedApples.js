import Image from "next/image";
import apple from "images/apple.jpg";
function DriedFruits() {
  return (
    <>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <span>Dried Apples</span>
            <h2>Dried Apples</h2>
          </div>
          <div class="row content my-4">
            <div class="col-md-5">
              <Image class="img-fluid" src={apple} alt="driedApple" />
            </div>
            <div class="col-md-7 text-justify">
              <div>
                AHT Trading provides the best dried apples which are produced
                and supplied by the BRC, IFS and HACCP approved suppliers and
                producers. Fresh high quality apples are picked from the best
                qualified farms. Then will be sorted, processed, dried and
                packed by evaluated manufacturers.
                <p>
                  This delicious product is provided in 2 types: Ring and
                  chopped.
                </p>
                Quality is an excellent source of vitamins, fiber and minerals
                specially potassium and iron. All kind of microbiological,
                chemical, physical items are tested on this product and
                inspected, verified and approved by Third party auditors,
                Quality experts and ISO17025 Accredited laboratory.
              </div>
            </div>
          </div>
          <div class="row">&nbsp;</div>
        </div>
      </section>
    </>
  );
}

export default DriedFruits;

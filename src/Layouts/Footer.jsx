const Footer = () => {
  return (
    <footer className="ReactFooter">
      <div id="footer-parts-box">
        <div className="footer-parts">
          <h2 className="title">درباره ما</h2>
          <span>
            <h4>تلفن :</h4>
            <a href="tel:+8134245651">08134245651</a>
          </span>
          <span>
            <h4>فکس : </h4>
            {/* <a href="tel:+8134245651">08134245651</a> */}
            <p>08134245653</p>
          </span>
          <span>
            <h4>تلفن :</h4>
            <a href="mailto:sina.ertebat@gmail.com">sina.ertebat@gmail.com</a>
          </span>
          <span className="last-footer-span">
            {/* <h4>آدرس  </h4> */}
            <p id="address-footer">
              همدان، بلوار علویان، کوچه قصابان، ساختمان سینا ارتباط کد پستی 
              6518667199
            </p>
          </span>
        </div>
        <div className="footer-parts">
          <h2 className="title">خدمات ما</h2>
          <span>
            <h4>
              فروش و خدمات پس از فروش یوپی اس های تکفاز و سه فاز( از 500VA تا
              5000KVA )
            </h4>
          </span>
          <span>
            <h4>
              ارائه انواع باطری های خشک Ni-Ca و Sealed Lead Acid برای UPS و
              سیستمهای الکتریکی
            </h4>
          </span>
          <span>
            <h4>مشاوره سیستم های امنیتی و حفاظت هوشمند</h4>
          </span>
          <span>
            <h4>
              مشاوره، طراحی، نصب و راه اندازی سیستم های مخابراتی Wireless
              مایکرویو برای انتقال دیتا، خطوط تلفن، فکس، تصویر، اینترنت و غیره
              بین نقاط مختلف داخل یا خارج از شهر
            </h4>
          </span>
          <span className="last-footer-span">
            <h4>و ...</h4>
          </span>
        </div>
        <div className="footer-parts">
          <h2 className="title">ارتباط با ما</h2>
          <span>
            <h3>
              <a href="https://t.me/SinaErtebatCompany">Telegram</a>
            </h3>
          </span>
          <h3>
            <a href="https://instagram.com/sinaertebat?igshid=mlwgfh4wrclh">
              Instagram
            </a>
          </h3>
        </div>
      </div>
      <p>تمامی حقوق برای شرکت سینا ارتباط محفوظ است</p>
      <p>طراحی و به روز رسانی توسط مهندسی الکترونیک سینا ارتباط</p>
    </footer>
  );
};
export default Footer;

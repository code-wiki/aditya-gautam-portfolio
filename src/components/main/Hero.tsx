import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

export default function Hero() {
  return (
    <div className="container h-100 c-main">
      <div className="row">
        <div className="col-md-4">
          <Link className="navbar-brand d-flex align-items-end" href="#">
            <Image
              src={"/coder-3.png"}
              className={"img-cartoon"}
              alt="image displaying cartoon"
              width={100}
              height={100}
              loading={"eager"}
            />
          </Link>
        </div>
        <div className="col-md-5 about-me">
          <div className="text-regular">
            <span className="text-bold">Hi, I am Aditya Gautam.</span>
            <br />
            an experienced and accomplished entrepreneur and speaker
            specializing in building technology startups. With a proven track
            record of success, I have co-founded multiple startups that
            delivered approximately seven times returns to investors. <br />
            This success is a testament to my exceptional strategic thinking,
            business acumen, and deep understanding of the market. <br />
            Additionally, I have worked with prestigious organizations such as
            Hewlett Packard R&D and the Tezos India Foundation, demonstrating my
            diverse range of skills and extensive experience that I can leverage
            to deliver outstanding results.
          </div>
          <div className="social-links-container d-flex w-100 ">
            <a
              href={"https://www.linkedin.com/in/me-adi"}
              className="social-link mr-10 pr-4 d-flex align-items-center"
              aria-label="linkedin link"
            >
              {" "}
              LinkedIn&nbsp;
              <BiLinkExternal />
            </a>
            <a
              href={"https://www.linkedin.com/in/me-adi"}
              className="social-link mr-10 pr-4 d-flex align-items-center"
              aria-label="Twitter link"
            >
              {" "}
              Twitter&nbsp;
              <BiLinkExternal />
            </a>
            <a
              href={"https://www.linkedin.com/in/me-adi"}
              className="social-link mr-10 pr-4 d-flex align-items-center"
              aria-label="Blog link"
            >
              {" "}
              Blog&nbsp;
              <BiLinkExternal />
            </a>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

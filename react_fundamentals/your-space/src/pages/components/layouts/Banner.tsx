import logo from "../../../../public/your-space.png";
import {styles} from "@/pages/components/layouts";
import Image from "next/image";

const Banner = ({slogan}) => {
    return (
        <header>
            <div className="row border-bottom-only mb-2">
                <Image className={styles.logo}  src={logo} alt="logo"/>
                <span className="col-10 text-center pt-5 fs-3-rem ls-2-px">  {slogan}</span>
            </div>
        </header>
    );
};

export default Banner;
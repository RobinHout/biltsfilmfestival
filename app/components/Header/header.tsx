import Link from "next/link";
import Image from "next/image";
import Logo from "../Img/LogoBFF.png";

const Header = () => {
    return (
        <>
            <header>
                <Link className="logo" href="/">
                    <Image
                        src={Logo}
                        alt="Logo van het Bilts Filmfestival"
                        priority
                    ></Image>
                </Link>
            </header>
        </>
    );
};

export default Header;

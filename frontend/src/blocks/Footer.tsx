import NavList from "@/components/NavList";
import { footerContactInfo, navLinks, navbarInfo } from "@/constants";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-bh-neutrals-100">
            <div className="bh-container py-20 grid gap-8 relative">
                {/* links and social */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* brand */}
                    <div className="flex flex-col items-start gap-2">
                        <Link
                            href="/"
                            className="flex items-center gap-2 w-fit -mt-1.5">
                            <h3 className="bh-text-h3 text-bh-primary">
                                {navbarInfo.brandTextFirst}
                            </h3>
                            <h3 className="bh-text-h3">
                                {navbarInfo.brandTextLast}
                            </h3>
                        </Link>
                        <p className="bh-text-small">
                            Find the art of riding. Explore the visual showcasing of bikes.
                        </p>
                    </div>
                    {/* routing */}
                    <div className="flex flex-col items-start gap-2">
                        <h5 className="text-bh-text-h5">Quick Links:</h5>
                        <div className="flex flex-col gap-2 items-start">
                            {
                                navLinks.map((link) => (
                                    <NavList
                                        targetId={link.targetId}
                                        customStyle="text-bh-neutrals-600 hover:text-bh-primary transition">{link.title}</NavList>
                                ))
                            }
                        </div>
                    </div>
                    {/* social */}
                    <div className="flex flex-col items-start gap-2">
                        <h5 className="text-bh-text-h5">Social:</h5>
                        <div className="flex flex-col gap-2 items-start">
                            <p className="text-bh-neutrals-600 hover:text-bh-primary transition cursor-pointer flex items-center gap-2">
                                <i className="ri-facebook-circle-fill"></i>
                                <span>Facebook</span>
                            </p>
                            <p className="text-bh-neutrals-600 hover:text-bh-primary transition cursor-pointer flex items-center gap-2">
                                <i className="ri-instagram-fill"></i>
                                <span>Instagram</span>
                            </p>
                            <p className="text-bh-neutrals-600 hover:text-bh-primary transition cursor-pointer flex items-center gap-2">
                                <i className="ri-linkedin-box-fill"></i>
                                <span>Linkedin</span>
                            </p>
                            <p className="text-bh-neutrals-600 hover:text-bh-primary transition cursor-pointer flex items-center gap-2">
                                <i className="ri-skype-fill"></i>
                                <span>Skype</span>
                            </p>
                            <p className="text-bh-neutrals-600 hover:text-bh-primary transition cursor-pointer flex items-center gap-2">
                                <i className="ri-discord-fill"></i>
                                <span>Discord</span>
                            </p>
                        </div>
                    </div>
                    {/* contacts */}
                    <div className="flex flex-col items-start gap-2">
                        <h5 className="text-bh-text-h5">Contacts:</h5>
                        <div className="flex flex-col gap-2 items-start">
                            {
                                footerContactInfo.map((info) => (
                                    <p key={info}
                                        className="text-bh-neutrals-600 hover:text-bh-primary transition cursor-pointer">
                                        {info}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    {/* gradient */}
                    <div className="bh-gradient w-40 md:w-48 h-40 md:h-48 rounded-full blur-[8rem] opacity-70 absolute right-0 bottom-0" />
                </div>
                {/* copyright */}
                <div className="text-center bh-text-small mt-8">
                    <p>All right reserved @bikehub</p>
                    <p>Copyright & Ⓒ2023</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
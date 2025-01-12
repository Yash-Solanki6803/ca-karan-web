import Addressbar from "./Addressbar/Addressbar";
import ContactForm from "./ContactForm/ContactForm";
import Socialbar from "./Socialbar/Socialbar";

function Footer() {
  return (
    <footer className="flex section-padding pb-4 pt-10  bg-cyan-950 text-gray-800 flex-col relative items-center gap-6">
      <div className="dw-full flex h-[50vh] gap-10 border-b border-gray-300">
        {/* Contact form */}
        <ContactForm />
        {/* Address bar */}
        <Addressbar />
        {/* Social bar */}
        <Socialbar />
      </div>
      <p className="text-white">&copy; 2025 CA Firm. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

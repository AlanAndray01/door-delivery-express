import { Bike, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932zm-1.293 19.49h2.039L6.482 3.24H4.298l13.31 17.403z"/>
  </svg>
);

const Footer = () => (
  <footer className="bg-foreground text-background py-14">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-xl mb-4">
            <Bike size={24} />
            Door To Door
          </div>
          <p className="text-sm opacity-60 leading-relaxed">
            Fast, reliable door-to-door delivery service across Pakistan. Your trust is our priority.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, XIcon].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 hover:text-white transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm text-background/60">
            {["Services", "How It Works", "Why Us", "Cities", "FAQ", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="block hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <div className="space-y-2 text-sm text-background/60">
            {["Parcel Delivery", "Gift Delivery", "Document Delivery", "Express Delivery", "Pickup & Drop", "City-to-City"].map((s) => (
              <p key={s} className="hover:text-white transition-colors cursor-pointer">{s}</p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact Info</h4>
          <div className="space-y-3 text-sm text-background/60">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Phone size={14} /> +92 300 1234567</div>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Mail size={14} /> info@doortodoor.pk</div>
            <div className="flex items-start gap-2 hover:text-white transition-colors cursor-pointer"><MapPin size={14} className="mt-0.5 shrink-0" /> Lahore, Pakistan</div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm opacity-40">
        © {new Date().getFullYear()} Door To Door. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

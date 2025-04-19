const Footer = () => {
    return (
      <footer className="w-full px-10 py-16 text-sm font-normal relative pt-[500px]">
        <div className="w-full flex justify-around flex-wrap gap-10">
  
          {/* Socials */}
          <div className="flex gap-10">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <span className="text-emerald-600 font-bold">Linkedin</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <span className="text-emerald-600 font-bold">Instagram</span>
            </a>
          </div>
  
          {/* Red Dot */}
          <div className="flex justify-center items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
  
          {/* Contact Info */}
          <div className="text-right">
            <p className="font-bold">hello@shimlamirch.com</p>
            <p className="text-emerald-600">India and worldwide</p>
          </div>
        </div>
  
        {/* Divider */}
        <hr className="my-10 border-t border-gray-700" />
  
        {/* Lower Footer */}
        <div className="flex justify-around flex-wrap gap-6">
          <div>
            <p>All Rights Reserved</p>
            <p>©2025, Rounak Bakshi</p>
          </div>
  
          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <button className="px-5 py-2 border font-bold rounded-full bg-red-600 text-black transition-all">
              PRIVACY STATEMENT ↓
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-5 py-2 border rounded-full cursor-pointer bg-black text-red-600 font-bold transition-all"
            >
              BACK TO TOP
            </button>
          </div>
        </div>
  
        {/* Registration & Logo */}
        <div className="flex justify-between items-end mt-16 text-xs">
          <p className="w-1/2 text-gray-300">
            Shimlamirch is registered with the Indian Business Registry under registration number IND001234.
          </p>
          <h1 className="text-xl font-semibold"><span className="text-red-600">Shimlamirch</span></h1>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
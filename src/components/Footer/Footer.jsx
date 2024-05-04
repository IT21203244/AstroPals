import logo from '../../assets/logo-white.png'
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-12">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img
            src={logo}
            alt="Astro Pals Logo"
            className="h-28"
          />
          <p className='text-sm text-justify mt-5 mr-4' style={{ width: "650px" }}>Explore new frontiers, both in outer space and within ourselves, by creating innovative solutionsthat improve human life. 
          We aim to spark curiosity and wonder worldwide through our explorations and discoveries.</p>
        </div>
        <ul className="flex space-x-8">
          <li className="text-sm">Contact Astro Pals</li>
          <li className="text-sm">Privacy</li>
          <li className="text-sm">Image Policy</li>
          <li className="text-sm">Freedom of Information Act</li>
          <li className="text-sm">LK.gov</li>
        </ul>
      </div>
      <hr className="border-white border-t-1 mt-8 mb-8" />
      <p className="text-sm bg-gray-900 text-white py-4 text-center">© 2024 Astro Pals. All rights reserved.</p>
      <p className='text-sm font-extralight text-white pt-4 text-center'>Editor: Janithya Dias</p>
    </footer>
  );
};

export default Footer;

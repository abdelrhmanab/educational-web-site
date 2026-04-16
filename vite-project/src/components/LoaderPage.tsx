import Logo from "../assets/loader.jpeg"



const LoaderPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      
      <div className="relative w-32 h-32">
        {/* اللودر */}
        <div className="w-full h-full border-4 border-blue-500 border-l-slate-200 rounded-full animate-spin"></div>

        {/* الصورة في المنتصف */}
        <img
          src={Logo} // حط هنا مسار الصورة
          alt="logo"
          className="absolute inset-0 m-auto w-22 h-22 object-contain"
        />
      </div>

    </div>
  );
};

export default LoaderPage;
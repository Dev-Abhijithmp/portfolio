import "./index.css";
function Home(params) {
  return (
    <div className="h-max ">
      <div className="h-56 my-11"></div>

      <div className="flex">
        <img
          // src={require("./abhijith.png")}
          alt="profile"
          srcset={require("./abhijith.png")}
          className="w-96 h-max mx-7"
        />
        
        <div>
            <div className="text-8xl font-serif"> <p className="text-black">Hi,I'M</p><p className="text-blue-900">ABHIJITH M P</p></div>
            
        <p>i'm professional flutter developer</p>
        </div>
       
    
       
      </div>
    </div>
  );
}
export default Home;

import "./index.css";
export default function Contactus() {
  return (
    <div className="grid m-20">
      <div className="place-self-center inline-flex flex-col space-y-1.5 items-start justify-start px-14 pt-8 pb-16 bg-grey-200 shadow  rounded-xl">
        <div>
          <p className="text-xs">FIRST NAME</p>
          <input
            type="text"
            className="w-full h-10 bg-white shadow-inner rounded-lg"
          />
        </div>
        <div>
          <p className="text-xs">LAST NAME</p>
          <input type="text" className="w-full h-10 bg-white shadow-inner rounded-lg" />
        </div>
        <div>
          <p className="text-xs">EMAIL </p>
          <input type="email" className="w-full h-10 bg-gray-50 shadow-inner rounded-lg shadow-white" />
        </div>
        <div>
          <p className="text-xs ">MESSAGE</p>
          <input type="text" className="w-full h-20 bg-white shadow-inner rounded-lg" maxLength={200} max/>
        </div>

        <button className="opacity-90 w-full h-12 bg-green-500 rounded-lg">
          Send Messege
        </button>
      </div>
    </div>
  );
}

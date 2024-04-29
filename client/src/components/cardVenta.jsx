import { useState } from "react";
import { RiShoppingCartLine, RiCoinsLine } from "react-icons/ri";
import Select from "react-select";
import { useAuthStore } from "../store/auth";

function CardVenta() {
  const promo = 100;
  const yakimechi = 90;
  const okonomiyaki = 90;
  const ramen = 180;
  const { profile } = useAuthStore();
  const [cuenta, setCuenta] = useState(0);
  const [ventaDia, setVentaDia] = useState(0);
  const addPromo = () => {
    setCuenta(promo + cuenta);
  };
  const addYaki = () => {
    setCuenta(yakimechi + cuenta);
  };
  const addOkono = () => {
    setCuenta(okonomiyaki + cuenta);
  };
  const addRamen = () => {
    setCuenta(ramen + cuenta);
  };
  return (
    <div>
      <p>{profile}</p>
      <div className="bg-orange-400 flex items-center">
        <button
          onClick={() => {
            setVentaDia(cuenta + ventaDia);
            setCuenta(0);
          }}
        >
          <RiShoppingCartLine className="h-8" />
        </button>

        <p className="pl-4">{cuenta}</p>
        <RiCoinsLine className="ml-[1200px]" />
        {ventaDia}
      </div>
      <div>
        <Select />
      </div>
      <div className="flex justify-center items-center h-screen gap-8 ">
        <div className="container bg-white border w-[300px] rounded-lg ">
          <img src="./public/sushi.jpg" alt="" className="w-full h-[250px]" />
          <h3 className="text-center text-[23px] text-slate-700">Sushi</h3>
          <p className="text-center pb-3 text-slate-700">$ 100.00</p>
          <button
            onClick={addPromo}
            className="bg-orange-600 text-slate-800 border rounded p-2 text-center mb-4 hover:bg-orange-400 ml-28"
          >
            Agregar
          </button>
        </div>
        <div className="container bg-white border w-[300px] rounded-lg ">
          <img
            src="./public/yakimechi.jpg"
            alt=""
            className="w-full h-[250px]"
          />
          <h3 className="text-center text-[23px] text-slate-700">Yakimechi</h3>
          <p className="text-center pb-3 text-slate-700">$ 90.00</p>
          <button
            onClick={addYaki}
            className="bg-orange-600 text-slate-800 border rounded p-2 text-center mb-4 hover:bg-orange-400 ml-28"
          >
            Agregar
          </button>
        </div>
        <div className="container bg-white border w-[300px] rounded-lg ">
          <img
            src="./public/okonomiyaky.jpg"
            alt=""
            className="w-full h-[250px]"
          />
          <h3 className="text-center text-[23px] text-slate-700">
            Okonomiyaky
          </h3>
          <p className="text-center pb-3 text-slate-700">$ 90.00</p>
          <button
            onClick={addOkono}
            className="bg-orange-600 text-slate-800 border rounded p-2 text-center mb-4 hover:bg-orange-400 ml-28"
          >
            Agregar
          </button>
        </div>
        <div className="container bg-white border w-[300px] rounded-lg ">
          <img src="./public/ramen.jpg" alt="" className="w-full h-[250px]" />
          <h3 className="text-center text-[23px] text-slate-700">Ramen</h3>
          <p className="text-center pb-3 text-slate-700">$180.00</p>
          <button
            onClick={addRamen}
            className="bg-orange-600 text-slate-800 border rounded p-2 text-center mb-4 hover:bg-orange-400 ml-28"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardVenta;

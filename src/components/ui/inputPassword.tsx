import { useState } from "react";

export const InputPassword = ({ label, nama, error, register }: any) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register(nama)}
          placeholder={label}
          className="border rounded px-3 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-2 text-xs text-blue-600"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
interface InputTextProps {
  label: string;
  nama: string;
  error?: string;
  register: any;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  nama,
  error,
  register,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>

      <input
        type="text"
        {...register(nama)}
        placeholder={label}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
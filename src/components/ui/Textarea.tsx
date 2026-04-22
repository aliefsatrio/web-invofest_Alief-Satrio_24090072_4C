export const Textarea = ({ label, nama, register, error }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>

      <textarea
        {...register(nama)}
        placeholder={label}
        className="border rounded px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/inputText";
import { InputPassword } from "../components/ui/inputPassword";
import { Select } from "../components/ui/Select";
import { Textarea } from "../components/ui/Textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";

type FormData = {
  nama: string;
  email: string;
  password: string;
  password_confirm: string;
  event: string;
  bio: string;
};

const schema = z
  .object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(8, "Minimal 8 karakter"),
    password_confirm: z.string(),
    event: z.string().min(1, "Pilih event"),
    bio: z.string().min(1, "Bio harus diisi"),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "Password tidak sama",
    path: ["password_confirm"],
  });

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nama: "",
      email: "",
      password: "",
      password_confirm: "",
      event: "",
      bio: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log("DATA SUBMIT:", data); // biar lebih jelas
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <InputText
        label="Nama Lengkap"
        nama="nama"
        register={register}
        error={errors.nama?.message}
      />

      <InputText
        label="Email"
        nama="email"
        register={register}
        error={errors.email?.message}
      />

      <InputPassword
        label="Password"
        nama="password"
        register={register}
        error={errors.password?.message}
      />

      <InputPassword
        label="Konfirmasi Password"
        nama="password_confirm"
        register={register}
        error={errors.password_confirm?.message}
      />

      <Select
        label="Kategori Event"
        nama="event"
        register={register}
        error={errors.event?.message}
        options={[
          { label: "Invofest", value: "invofest" },
          { label: "Workshop AI", value: "ai" },
        ]}
      />

      <Textarea
        label="Bio Singkat"
        nama="bio"
        register={register}
        error={errors.bio?.message}
      />

      <Button title="Register" type="submit" isLoading={isSubmitting} />
    </form>
  );
}
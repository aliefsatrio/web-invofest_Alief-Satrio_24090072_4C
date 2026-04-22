// import { useForm } from "react-hook-form";
// import { InputText } from "../components/ui/inputText";
// import { InputPassword } from "../components/ui/inputPassword";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import Button from "../components/ui/Button";

// type FormData = {
//   email: string;
//   password: string;
// };

// const schema = z.object({
//   email: z.string().email("Email tidak valid"),
//   password: z.string().min(8, "Password minimal 8 karakter"),
// });

// export default function LoginForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<FormData>({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = async (data: FormData) => {
//     await new Promise((res) => setTimeout(res, 1000));
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
//       <InputText
//         label="Email"
//         nama="email"
//         register={register}
//         error={errors.email?.message}
//       />

//       <InputPassword
//         label="Password"
//         nama="password"
//         register={register}
//         error={errors.password?.message}
//       />

//       <Button title="Login" type="submit" isLoading={isSubmitting} />
//     </form>
//   );
// }
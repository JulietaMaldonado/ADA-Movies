import { serviceUser } from "../../../services/users";
import { useForm } from "react-hook-form";
import { SignUpUsuario } from "../../../type";
import { data } from "jquery";

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<SignUpUsuario>();

  const onSubmit = (data: SignUpUsuario) => {
    serviceUser.add(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">NOMBRE</label>
      <input type="text" {...register("name")} />

      <label htmlFor="">APELLIDO</label>
      <input type="text" {...register("lastname")} />

      <label htmlFor="">EMAIL</label>
      <input type="email" id="" {...register("email")} />

      <label htmlFor="">CONTRASEÑA</label>
      <input type="password" id="" {...register("password")} />

      <label htmlFor="">FECHA DE NACIMIENTO</label>
      <input type="date" id="" {...register("birthdate")} />

      <button className="button-signup">CREAR CUENTA</button>
    </form>
  );
};

export { SignUpForm };

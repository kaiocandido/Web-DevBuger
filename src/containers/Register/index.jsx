import { InputContainer, Link, RightContainer, Title, Form, MainDiv, Header } from "./styles"
import Logo from "../../assets/logo-burguer.png"
import { Button } from "../../components/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"

export function Register() {
    const navigate = useNavigate()
    const schema = yup.object({
        name: yup.string().required("Digite o seu nome "),
        email: yup.string().email("Digite um E-mail Válido").required("Digite um email"),
        password: yup.string().min(6, "A senha deve ter no minimo 6 caracteres").required("Digite Uma Senha"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    }).required()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        try {
            const { status } = await api.post("/users", {
                name: data.name,
                email: data.email,
                password: data.password,
            },

                {
                    validateStatus: () => true,
                },
            )
            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate("/login")
                }, 2000);
                toast.success("Conta criada com sucesso")
            } else if (status === 400 || status === 409) {
                toast.error("Email já cadastrado, faça o login para continuar")
            } else {
                throw new Error("Erro inesperado")
            }
        } catch (error) {
            toast.error("Falha no sistema! tente novamente!")
        }
    }

    return (
        <RightContainer>
            <MainDiv>
                <Header>
                    <img src={Logo} alt="Logo-DevBurguer" />
                </Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h1>LOGIN</h1>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} placeholder="Email" />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} placeholder="Senha" />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Confirmar senha</label>
                        <input type="password" {...register("confirmPassword")} placeholder="Confirmar Senha"/>
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                    <p>Já possui conta? <Link to={"/login"}>Clique aqui.</Link></p>
                </Form>

            </MainDiv>
        </RightContainer>
    )
}
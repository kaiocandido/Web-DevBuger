import Logo from "../../assets/logo-burguer.png"
import { Button } from "../../components/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api"
import { toast } from 'react-toastify'
import { InputContainer, Link, RightContainer, Title, Form, MainDiv, Header } from "./styles"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/UserContext"

export function Login() {
    const navigate = useNavigate()
    const { putUserData } = useUser()

    const schema = yup.object({
        email: yup.string().email("Digite um E-mail Válido").required("Digite um email"),
        password: yup.string().min(6, "A senha deve ter no minimo 6 caracteres").required("Digite Uma Senha"),
    }).required()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        const { data: userData } = await toast.promise(
            api.post("/session", {
                email: data.email,
                password: data.password,
            }),
            {
                pending: "Verificando Seus Dados",
                success: {
                    render() {
                        setTimeout(() => {
                            navigate("/")
                        }, 2000);
                        return "Seja Bem-Vindo(a)"
                    }
                },
                error: "Email ou Senha incorretos",
            }
        )
        putUserData(userData)
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
                    <Button type="submit">Entrar</Button>
                    <p>Não possui conta? <Link to={"/cadastro"}>Clique aqui.</Link></p>
                </Form>
            </MainDiv>
        </RightContainer>
    )
}
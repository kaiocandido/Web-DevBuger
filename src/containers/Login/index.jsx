import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from "./styles"
import Logo from "../../assets/logo-burguer.png"
import { Button } from "../../components/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api"
import { toast } from 'react-toastify'
import { Link } from "./styles"
import { useNavigate } from "react-router-dom"

export function Login() {
    const navigate = useNavigate()
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
        const { data: { token } } = await toast.promise(
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
        localStorage.setItem("token", token)
    }

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo-DevBurguer" />
            </LeftContainer>
            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>New Burguer!</span><br />
                    Acesse com seu <span>Login e senha.</span></Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email :</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha :</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <Link to={"/cadastro"}>Clique aqui.</Link></p>
            </RightContainer>
        </Container>
    )
}
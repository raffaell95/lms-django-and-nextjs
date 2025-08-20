import {z} from 'zod'

export const loginSchema = z.object({
    email: z.email({message: 'Email inválido.'}).nonempty({message: 'O email é obrigatório.'}),
    password: z.string().nonempty({message: 'A senha é obrigatória.'}).min(6, 
        {message: 'A senha deve ter pelo menos 6 caracteres.'})
})

export type SignInForm = z.infer<typeof loginSchema>

export const registerSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
     email: z.email({message: 'Email inválido.'}).nonempty({message: 'O email é obrigatório.'}),
    password: z.string().nonempty({message: 'A senha é obrigatória.'}).min(6, 
        {message: 'A senha deve ter pelo menos 6 caracteres.'}),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Senhas nao coincidem",
    path: ["confirmPassword"]
})

export type SignUpForm = z.infer<typeof registerSchema> 
// validationSchema.js
import * as z from 'zod';

const adminSchema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    sobrenome: z.string().min(1, "Sobrenome é obrigatório"),
    genero: z.enum(["Masculino", "Feminino"], "Gênero é obrigatório"),
    numBi: z.string().min(1, "O número do BI é obrigatório").min(14, "O BI deve ter 14 caracteres ").max(14,"O só BI deve ter 14 caracteres"),
    dataNascimento: z.string().refine(val => !isNaN(Date.parse(val)), "Data de nascimento inválida"),
    email: z.string().email("Email inválido"),
    telefone: z.string().min(1, "Telefone é obrigatório"),
    tipo: z.enum(["Admin", "SuperAdmin"], {
        required_error: "Tipo de Admin é obrigatório",
        invalid_type_error: "Tipo de Admin deve ser Admin ou Super Admin"
    }),
    password: z.string().min(1, "Senha é obrigatória"),
});

const estacaoSchema = z.object({
    urlEstacao: z.string().min(3, 'A URL da estação deve ter no mínimo 3 caracteres'),
});

const estacaoInfoSchema = z.object({
    docas: z.string().min(1, 'O campo docas é obrigatório'),
    premio: z.string().min(1, 'O campo prêmio é obrigatório'),
    foto: z.string().url('A foto deve ser uma URL válida'),
});

export default {adminSchema, estacaoSchema, estacaoInfoSchema};
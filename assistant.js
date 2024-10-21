/**
 * @author Jefferson Alves Reis (jefaokpta) < jefaokpta@hotmail.com >
 * Date: 10/21/24
 */

import {phi3} from "./llmModel.js";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const llm = phi3


const messages = [
    new SystemMessage("Vc trabalha em uma empresa que oferece telefonia VOIP.\n" +
        "Vc recebe e analisa transcrições de ligacoes recebidas pela empresa.\n" +
        "Seu objetivo é definir se na conversa o cliente está interessado em comprar algum produto."),
    new HumanMessage("Alô, bom dia E aí, Camila Bom dia, Camila, tudo bom? Oi, bom dia, com quem eu falo? Você fala com o Giancarlo, da Piu Camila, eu queria falar com o responsável pelo RH, por gentileza Certo, ela tá em reunião? Você consegue mandar um e-mail pra ela? Claro, consigo sim, qual que seria? É gabriela Uhum, um L só? Isso Tá Arroba Uhum VipSolutions Tá .com.br .com.br Perfeito, então, Camila, só me tira uma dúvida Você saberia me dizer se vocês da Vip estão com alguma vaga em aberto atualmente? Estão com algum processo de recrutamento em aberto? Olha, no momento nós não temos nenhuma Mas Sempre surge, tá? Tá, perfeito, então, obrigado, viu? Imagina, tchau Tchau, tchau"),
];

const completion = await llm.invoke(messages);
console.log(completion);
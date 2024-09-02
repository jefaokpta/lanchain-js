import { Ollama } from "@langchain/ollama";
import { PromptTemplate } from "@langchain/core/prompts";

const llm = new Ollama({
    model: "phi3:medium",
    temperature: 0,
    maxRetries: 2,
    baseUrl: "http://192.168.15.212:11434",
});

const inputText = "qual a composicao da agua?";

// const completion = await llm.invoke(inputText);
// console.log(completion);



const prompt = PromptTemplate.fromTemplate(
    "Como se diz {input} em {output_language}:\n"
);

const chain = prompt.pipe(llm);
const translate = await chain.invoke({
    output_language: "English",
    input: "Onde fica a a terceira avenida?",
});

console.log(translate);

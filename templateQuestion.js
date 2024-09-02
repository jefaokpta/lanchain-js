import {PromptTemplate} from "@langchain/core/prompts";
import {phi3} from "./llmModel.js";

const llm = phi3;

const prompt = PromptTemplate.fromTemplate(
    "Como se diz {input} em {output_language}:\n"
);

const chain = prompt.pipe(llm);
const translate = await chain.invoke({
    output_language: "English",
    input: "Onde fica a a terceira avenida?",
});

console.log(translate);
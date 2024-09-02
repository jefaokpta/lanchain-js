import {phi3} from "./llmModel.js";

const llm = phi3

const inputText = "qual a composicao da agua?";

const completion = await llm.invoke(inputText);
console.log(completion);


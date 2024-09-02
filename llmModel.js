import {Ollama} from "@langchain/ollama";


export const phi3 = new Ollama({
    model: "phi3:medium",
    temperature: 0,
    maxRetries: 2,
    baseUrl: "http://192.168.15.212:11434",
});
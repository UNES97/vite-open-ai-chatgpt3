export const arrayOptions = [
    {
        name: "Q&A",
        id: "q&a",
        description: "Answer questions based on existing knowledge",
        options: {
            model: "gpt-3.5-turbo-0613",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
    {
        name: "Grammer Correction",
        id: "grammerCorrection",
        description: "Corrects sentences into standard English.",
        options: {
            model: "gpt-3.5-turbo-0613",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
    {
        name: "Summarize for a 2nd grader",
        id: "summary",
        description: "Translates difficult text into simpler concepts.",
        options: {
            model: "gpt-3.5-turbo-0613",
            temperature: 0.7,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
    {
        name: "English to Other languages",
        id: "translate",
        description: "Translates English text into French, Spanish and Japanese.",
        options: {
            model: "gpt-3.5-turbo-0613",
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
    {
        name: "Movie to Emoji",
        id: "movieToEmoji",
        description: "Convert movie titles into emoji.",
        options: {
            model: "gpt-3.5-turbo-0613",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
    {
        name: "Explain code",
        id: "explainCode",
        description: "Explain a complicated piece of code.",
        options: {
            model: "gpt-3.5-turbo-0613",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
    {
        name: "JavaScript to Python",
        id: "jstopy",
        description: "Convert simple JavaScript expressions into Python.",
        options: {
            model: "gpt-3.5-turbo-0613",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
];
'use server';
import { StoryCharacterData } from '@/core/character.interface';
import OpenAI from 'openai';
import { v4 as uuidv4 } from 'uuid';

type StoryResponse = {
  id: string;
  setup: string;
  outcome: string;
  choices: string[];
  isFinale?: boolean;
};

export const generatePath = async (
  setup: string,
  premise: string,
  lastOutcome: string,
  context: string,
  selectedCharacter: StoryCharacterData,
  nextIsFinale: boolean,
  isFinale: boolean
): Promise<StoryResponse> => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORG_ID,
    project: process.env.OPENAI_PROJECT_ID,
  });

  console.log(process.env.OPENAI_API_KEY);
  console.log(process.env.OPENAI_ORG_ID);
  console.log(process.env.OPENAI_PROJECT_ID);

  const prompt = getPrompt(
    selectedCharacter,
    context,
    premise,
    lastOutcome,
    setup,
    isFinale,
    nextIsFinale
  );

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_completion_tokens: isFinale ? 1000 : 500,
      temperature: 0.7,
    });
    const aiResponse = parseJsonString(
      response.choices[0].message.content || '{}'
    );
    return {
      id: uuidv4(),
      setup: setup,
      outcome: aiResponse.outcome,
      choices: aiResponse.choices,
      isFinale: isFinale,
    };
  } catch (error) {
    console.error('Error generating story path:', error);
    throw new Error('Failed to generate story path.');
  }
};

const parseJsonString = (jsonString: string) => {
  console.log('JSON String:', jsonString);
  const jsonStart = jsonString.indexOf('{');
  const jsonEnd = jsonString.lastIndexOf('}') + 1;
  const jsonContent = jsonString.slice(jsonStart, jsonEnd);
  return JSON.parse(jsonContent);
};

const getPrompt = (
  selectedCharacter: StoryCharacterData,
  context: string,
  premise: string,
  lastOutcome: string,
  setup: string,
  isFinale: boolean,
  nextIsFinale: boolean
): string => {
  return `
You are an AI storyteller crafting a **concise, immersive fairy-tale adventure** with engaging choices.

## Character
- Name: ${selectedCharacter.full_name}
- Backstory: ${selectedCharacter.backstory}

## Setting
${context}

## Story So Far
- **Premise**: ${premise}
- **Last Event**: ${lastOutcome}

## Current Progress
- **Last Player Choice**: ${setup}

${
  isFinale
    ? '**This is the final chapter. Conclude the story with a satisfying and meaningful ending.**'
    : `**Next Steps**:
1. Continue the story logically based on the last choice.
2. Incorporate a **storytelling version** of the last choice into the new outcome.
3. Provide **2 compelling choices** that fit naturally into the story. 
   ${nextIsFinale ? '**Ensure all choices lead towards an ending.**' : ''}
`
}

### Response Format (JSON)
\`\`\`json
{
  "outcome": "...",
  ${isFinale ? '' : '"choices": ["...", "..."]'}
}
\`\`\`
`.trim();
};

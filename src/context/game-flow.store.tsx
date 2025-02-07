import { StoryBranch } from "@/core/branch.interface";
import { StoryCharacterData } from "@/core/character.interface";
import { StoryPremise } from "@/core/initial-setting.interface";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type GameFlowActions = {
  setAvailableChoices: (choices: string[]) => void;
  selectPremise: (premise: StoryPremise) => void;
  setSelectedSetup: (setup: string) => void;
  /**
   * Sets the available story characters.
   * @param characters The available story characters.
   */
  setAvailableStoryCharacters: (characters: StoryCharacterData[]) => void;

  /**
   * Fetches the next setup in the story tree.
   */
  fetchNextStoryBranch: () => void;

  /**
   * Finishes the current storyline.
   */
  finishStoryline: () => void;

  /**
   * Starts the game.
   */
  startStory: (characterId: string) => void;

  /**
   * Resets the game.
   */
  resetGame: () => void;

  /**
   * Sets the current depth of the story tree.
   */
  addStoryBranch: (branch: StoryBranch) => void;

  /**
   * Sets the current depth of the story tree.
   */
  setCurrentDepth: (depth: number) => void;
};

/**
 * Represents the state of the game flow.
 */
type GameFlowState = {
  /**
   * The currently selected setup.
   */
  selectedSetup: string | null;

  /**
   * The available choices for the current setup.
   * The player will choose one to continue the story.
   */
  availableChoices: string[];

  /**
   * The current depth of the story tree.
   */
  currentDepth: number;
};

/**
 * Represents the state of the game flow.
 */
type GameState = {
  /**
   * Indicates whether the game is loading.
   */
  loading: boolean;
  /**
   * Indicates whether the game has started.
   */
  gameStarted: boolean;

  /**
   * The available story characters to choose from.
   */
  availableStoryCharacters: StoryCharacterData[];

  /**
   * The currently selected character.
   */
  selectedCharacter: StoryCharacterData | null;
  /**
   * The available premises for the current character.
   * These are the starting points of the story.
   * The player will choose one to begin the game.
   * Each premise contains a setup and choices.
   */
  availablePremises: StoryPremise[];

  /**
   * The currently selected premise.
   */
  selectedPremise: StoryPremise | null;

  /**
   * Setups that have been visited, reflecting the current story tree.
   */
  storyTree: StoryBranch[];

  /**
   * The maximum depth of the story tree.
   */
  maxDepth: number;

  /**
   * Indicates whether the game is over.
   */
  gameIsOver: boolean;

  /**
   * The finale of the story.
   */
  finale: string | null;
};

export const useGameFlowStore = create<
  GameState & GameFlowActions & GameFlowState
>()(
  devtools((set) => ({
    gameStarted: false,
    availableStoryCharacters: [],
    selectedCharacter: null,
    availablePremises: [],
    selectedPremise: null,
    selectedSetup: null,
    availableChoices: [],
    currentDepth: 0,
    storyTree: [],
    finale: null,
    maxDepth: 8,
    loading: false,
    gameIsOver: false,
    startStory: (characterId) => {
      set((state) => {
        const character = state.availableStoryCharacters.find(
          (c) => c.id === characterId
        );
        if (!character) {
          return {};
        }

        return {
          selectedCharacter: character,
          availablePremises: character.premises,
          gameStarted: true,
        };
      });
    },
    resetGame: () => {
      set(() => ({
        gameStarted: false,
        selectedCharacter: null,
        availablePremises: [],
        selectedPremise: null,
        selectedSetup: null,
        availableChoices: [],
        currentDepth: 0,
        storyTree: [],
        finale: null,
        maxDepth: 8,
        gameIsOver: false,
      }));
    },
    setAvailableStoryCharacters: (availableStoryCharacters) => {
      set(() => ({
        availableStoryCharacters,
      }));
    },
    setAvailableChoices: (choices) => {
      set(() => {
        return {
          availableChoices: [...choices],
        };
      });
    },
    selectPremise: (premise) => {
      set(() => {
        return {
          selectedPremise: premise,
          availableChoices: premise.choices,
        };
      });
    },
    fetchNextStoryBranch: () => {
      //Fetch the next setup in the story tree
      set((state) => {
        ///fetch the outcome and choices for the next setup
        const response = {
          id: "1",
          choices: ["Go left", "Go right"],
          setup: "You are in a forest.",
          outcome: "You find a treasure chest.",
        };
        const storyBranch: StoryBranch = {
          id: response.id,
          setup: response.setup,
          choices: [...state.availableChoices],
          outcome: "You find a treasure chest.",
          lastBranchId:
            state.storyTree[state.storyTree.length - 1]?.id || "guid-start",
          depth: state.currentDepth,
        };

        return {
          storyTree: [...state.storyTree, storyBranch],
          currentDepth: state.currentDepth + 1,
          selectedSetup: null,
          availableChoices: storyBranch.choices,
        };
      });
    },
    addStoryBranch: (branch) => {
      set((state) => {
        console.log("addStoryBranch", branch);
        return {
          storyTree: [...state.storyTree, branch],
        };
      });
    },
    finishStoryline: () => {
      set(() => {
        return {
          gameIsOver: true,
          finale: "You have reached the end of the story.",
        };
      });
    },
    setCurrentDepth: (currentDepth) => {
      set(() => {
        return {
          currentDepth,
        };
      });
    },
    setSelectedSetup: (selectedSetup) => {
      set(() => {
        return {
          selectedSetup,
        };
      });
    },
  }))
);

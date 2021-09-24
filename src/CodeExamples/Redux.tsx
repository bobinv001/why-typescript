import React from "react";
import { useSelector } from "react-redux";

const createAction =
  <T extends Action>(type: T["type"]) =>
  (payload: T["payload"]) => ({ type, payload });

export interface NotesState {
  notes: string[];
  lastUpdated?: {
    totalNotes: number;
    date: Date;
  };
}

const initialState = {
  notes: [],
};

export type Action =
  | { type: "ADD_NOTE"; payload: { note: string } }
  | {
      type: "SET_LAST_UPDATED";
      payload: { lastUpdated: NotesState["lastUpdated"] };
    };

// try renaming symbol - easier to refactor
const addNoteAction = createAction("ADD_NOTE");
// I get autocomplete of action type
// @ts-expect-error
const setLastUpdated = createAction();

export const notesReducer = (
  state: NotesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_NOTE": {
      // TS will autocomplete my payload
      // @ts-expect-error
      return { ...state, notes: [...state.notes, action.payload.foo] };
    }
    case "SET_LAST_UPDATED": {
      // TS will tell me if I use something is not available
      // @ts-expect-error

      return { ...state, lastUpdated: { ...action.payload.iDontExist } };
    }
    default:
      return state;
  }
};

function App() {
  // I have the type from the state
  const notes = useSelector((state: NotesState) => state.notes);
  // I can be absent or present, my existance is not mysterious anymore
  const lastUpdated = useSelector((state: NotesState) => state.lastUpdated);

  React.useEffect(() => {
    // hover over me, I have the return type of the function, easier to see the final action payload
    // @ts-expect-error

    addNoteAction("I am a new note");
    // TS will yell at me if I don't pass the right types
    // @ts-expect-error

    setLastUpdated({ date: "" });
  }, []);

  return (
    <>
      {/* TS asks me to use optional chaining ?., not a guess work anymore */}
      {/* @ts-expect-error */}
      Last Updated: {lastUpdated.totalNotes}
      Notes:
      {notes.map((note) => (
        <div>{note}</div>
      ))}
    </>
  );
}

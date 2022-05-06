import { init, Models, RematchDispatch, RematchRootState } from "@rematch/core"
import persistPlugin from '@rematch/persist';
import storage from "redux-persist/lib/storage";
import immerPlugin from "@rematch/immer";

// import_model

const persistConfig = {
    key: 'core-persistor',
    storage,
}

export const store = init<RootModel>({ 
    models: { 
        // use_model
    }, 
    plugins: [persistPlugin(persistConfig), immerPlugin()],
});

export interface RootModel extends Models<RootModel> {
    // type_model
};

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
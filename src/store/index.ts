import { init, Models, RematchDispatch, RematchRootState } from "@rematch/core"
import persistPlugin from '@rematch/persist';
import storage from "redux-persist/lib/storage";
import immerPlugin from "@rematch/immer";

// import_model
import { user } from "./user.store";

const persistConfig = {
    key: 'core-persistor',
    storage,
}

export const store = init<RootModel>({ 
    models: { 
        // use_model
        user,
    }, 
    plugins: [persistPlugin(persistConfig), immerPlugin()],
});

export interface RootModel extends Models<RootModel> {
    // type_model
    user: typeof user,
};

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
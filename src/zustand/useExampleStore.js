import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

const useExampleStore = create()(
    devtools(
        persist(
            (set) => ({
                isLogin: false,
                setLogin: (trigger) => set(state => ({ isLogin: trigger }), false, 'SET_IS_LOGIN'),
            }),
            {
                name: 'login-storage',
                storage: createJSONStorage(() => sessionStorage)
            }
        )
    )
);

export default useExampleStore;
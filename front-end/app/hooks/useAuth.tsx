import { useTypedSelector } from './useTypesSelector';

export const useAuth = () => useTypedSelector((state) => state.auth);

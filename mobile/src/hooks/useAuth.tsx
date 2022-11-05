import { useContext } from 'react'
import { AuthContext, AuthContextDataProps } from '../contexts/AuthContext';

export function useAuth(): AuthContextDataProps {
    const context = useContext(AuthContext)

    return context
}

// transformando o contexto em um hook
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import ContaInfo from "./ContaInfo"

const mockContextLoggedIn = {
    name: 'Nathaly Souza',
    email: 'nath@dio.bank',
    isLoggedIn: true,
    setIsLoggedIn: jest.fn(),
    setUserData: jest.fn()
}

const mockContextLoggedOut = {
    name: '',
    email: '',
    isLoggedIn: false,
    setIsLoggedIn: jest.fn(),
    setUserData: jest.fn()
}

describe('ContaInfo', () => {
    it('Deve exibir o nome do usuário quando logado', () => {
        render(
            <MemoryRouter>
                <AppContext.Provider value={mockContextLoggedIn}>
                    <ContaInfo />
                </AppContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getByText(/Nathaly Souza/i)).toBeInTheDocument()
    })

    it('Deve exibir o email do usuário quando logado', () => {
        render(
            <MemoryRouter>
                <AppContext.Provider value={mockContextLoggedIn}>
                    <ContaInfo />
                </AppContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getByText(/nath@dio.bank/i)).toBeInTheDocument()
    })

    it('Deve exibir campos vazios quando não logado', () => {
        render(
            <MemoryRouter>
                <AppContext.Provider value={mockContextLoggedOut}>
                    <ContaInfo />
                </AppContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getByText('Informações do usuário')).toBeInTheDocument()
    })
})

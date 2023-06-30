import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentarios', () => {
        render(<PostComment/>)

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'Comentario 1 adc'
            }
        })
        fireEvent.click(screen.getByTestId('botao'))

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'Comentario 2 adc'
            }
        })
        fireEvent.click(screen.getByTestId('botao'))
        
        expect(screen.getAllByTestId('comentario-pronto')).toHaveLength(2)
    })
});
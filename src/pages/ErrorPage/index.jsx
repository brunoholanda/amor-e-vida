import styles from './PaginaDeErro.module.scss';
import erro404 from './404.png';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';

export default function ErrorPage() {

    const navegar = useNavigate ();

    return (
        <section className={styles.erro}>
            <img src={erro404} alt="imagem da pagina de erro" />
            <div>
                <h1>Ops... Pagina não encontrada... Clique em voltar!</h1>
                <div onClick={() => navegar(-1)}>
                    <Button>VOLTAR</Button>
                </div>
            </div>
        </section>
    )
}


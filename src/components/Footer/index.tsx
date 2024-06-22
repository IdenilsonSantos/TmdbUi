import "./styles.scss";

function Footer() {
  return (
    <footer>
      <nav>
        <div className="join">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="The Movie Database (TMDB)"
            width="130"
            height="94"
          />

          <a className="rounded" href="/signup">
            Junte-se a Comunidade
          </a>
        </div>

        <div>
          <h3>O básico</h3>
          <ul>
            <li>
              <a href="#">Sobre o TMDB</a>
            </li>
            <li>
              <a href="#">Contate-nos</a>
            </li>
            <li>
              <a href="/talk">Suporte</a>
            </li>
            <li>
              <a href="#" target="_blank">
                API
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener">
                Status do Sistema
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Envolva-se</h3>
          <ul>
            <li>
              <a href="#">Adicionar um novo Filme</a>
            </li>
            <li>
              <a href="#">Adicionar uma nova Série</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Comunidade</h3>
          <ul>
            <li>
              <a href="#">Diretrizes</a>
            </li>
            <li>
              <a href="#">Discussões</a>
            </li>
            <li>
              <a href="#">Placar de colaboradores</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Legalidade</h3>
          <ul>
            <li>
              <a href="#">Termos de uso</a>
            </li>
            <li>
              <a href="#">Termos de Uso da API</a>
            </li>
            <li>
              <a href="#">Política de privacidade</a>
            </li>
            <li>
              <a href="#">Política DMCA</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;

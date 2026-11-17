import './WorksCited.css'

import { useLocation } from 'react-router-dom';

import Header from '../../Components/Header/Header'
import CustomScrollbar from '../../Components/CustomScrollBar/CustomScrollBar';


function TourWorksCited() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <CustomScrollbar />

      <main className={`page-scroll ${
        pathname.startsWith("/tdf") ? "department-scroll" : ""
      }`}>
        <div className="works-cited-bg"></div>
        <div className="works-cited">
          <h2>Works Cited</h2>

          <ol>
            <li>
              “AOP Produits laitiers : fromages, beurres et crèmes.”{" "}
              <em>Produits Laitiers AOP</em>,{" "}
              <a href="https://www.produits-laitiers-aop.fr/" target="_blank" rel="noreferrer">
                www.produits-laitiers-aop.fr
              </a>.
              Accessed 16 Nov. 2026.
            </li>

            <li>
              “Jura Tourisme : Séjour, loisirs et locations de vacances dans le Jura.”{" "}
              <em>Jura Tourisme</em>,{" "}
              <a href="https://www.jura-tourism.com/" target="_blank" rel="noreferrer">
                www.jura-tourism.com
              </a>.
              Accessed 16 Nov. 2026.
            </li>

            <li>
              “Ministère de l’Agriculture, de l’Agro-alimentaire et de la Souveraineté alimentaire.”{" "}
              <em>Ministère de l’Agriculture</em>,{" "}
              <a href="https://agriculture.gouv.fr/" target="_blank" rel="noreferrer">
                agriculture.gouv.fr
              </a>.
              Accessed 16 Nov. 2026.
            </li>

            <li>
              “Liste des fromages AOP français.”{" "}
              <em>Reblochon Paccard</em>, 9 Apr. 2025,{" "}
              <a href="https://www.reblochon-paccard.fr/liste-des-fromages-aop-francais/" target="_blank" rel="noreferrer">
                www.reblochon-paccard.fr/liste-des-fromages-aop-francais/
              </a>.
              Accessed 16 Nov. 2026.
            </li>

            <li>
              Institut national de l’origine et de la qualité.{" "}
              <em>INAO</em>,{" "}
              <a href="https://www.inao.gouv.fr/" target="_blank" rel="noreferrer">
                www.inao.gouv.fr
              </a>.
              Accessed 16 Nov. 2026.
            </li>

            <li>
              Conseil national des appellations d’origine laitières, Institut national de l’origine et de la qualité, and ODG laitiers.{" "}
              <em>Chiffres clés 2023 : Des produits sous signes de la qualité et de l’origine — Produits laitiers AOP et IGP</em>,{" "}
              Sept. 2024,{" "}
              <a href="https://www.inao.gouv.fr/sites/default/files/2024-11/Chiffres-cl%C3%A9s-laitier-AOP-IGP-2024.pdf" target="_blank" rel="noreferrer">
                www.inao.gouv.fr/sites/default/files/2024-11/Chiffres-cl%C3%A9s-laitier-AOP-IGP-2024.pdf
              </a>.
              Accessed 16 Nov. 2026.
            </li>

            <li>
              “Tome des Bauges, une tome de montagne.”{" "}
              <em>Fromage de Savoie AOC</em>,{" "}
              <a href="https://www.tome-des-bauges.com/" target="_blank" rel="noreferrer">
                www.tome-des-bauges.com
              </a>.
              Accessed 16 Nov. 2026.
            </li>

            <li>
              Centre National Interprofessionnel de l’Économie Laitière.
              <em>Produits Laitiers de France : Tout savoir sur le fromage, la crème et le beurre</em>,
              <a href="https://www.produits-laitiers-de-france.com/" target="_blank" rel="noreferrer">
                www.produits-laitiers-de-france.com
              </a>.
              Accessed 16 Nov. 2026.
            </li>
          </ol>
        </div>
      </main>
    </>
  )
}

export default TourWorksCited
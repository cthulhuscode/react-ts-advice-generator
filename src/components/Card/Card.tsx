import { useGetAdviceQuery } from "../../store/apis/adviceApi"

import patternMobile from "../../assets/pattern-divider-mobile.svg";
import patternDesktop from "../../assets/pattern-divider-desktop.svg";
import dice from "../../assets/icon-dice.svg";

import "./Card.scss";

export const Card = () => {

  const {data, isLoading} = useGetAdviceQuery(undefined);   
  

  return (    
    // <div>{isLoading ? "Loading" : slip.advice}</div>
    <div className="card">
      <h4 className="card__num">Advice #{data?.slip.id}</h4>

      <h1 className="card__advice">"{data?.slip.advice}"</h1>
      
      <picture>
        <source media="(min-width: )" srcSet={`${patternDesktop} 444w`} />
        <source media="(min-width: )" srcSet={`${patternMobile} 295w`} />
        <img className="card__img" src={patternMobile} alt="Divider" />
      </picture>

      <div className="card__dice-circle">
        <img className="card__dice" src={dice} alt="dice" />
      </div>
    </div>
  )
}

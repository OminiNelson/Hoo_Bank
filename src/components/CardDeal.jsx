import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"


const CardDeal = () => {
  return (
    <section className={layout.section} >
      <div className={layout.sectionInfo}>
        <h2
        className={styles.heading2}
        >
          Find a better card deal <br className="sm:block hidden" /> in few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        nulla rem incidunt, sunt delectus, neque accusantium officia molestias, quo inventore tenetur autem dolorum excepturi nihil libero repellendus deserunt assumenda impedit quaerat at.
        </p>
        <Button styles="mt-5" />
      </div>

      <div
      className={layout.sectionImg}
      >
        <img src={card} alt="card" 
          className="w-[100%] h-[100%] "
        />

      </div>
    </section>
  )
}

export default CardDeal
import { stats} from "../constants";
import styles from "../style";

const Stats = () => (
    <section
    className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}
    > {
      stats.map((stat) => (
        <div
        key={stat.id}
        className={`flex-1 justify-start items-center flex-row m-3`}
        >
          <h4
          className="font-poppins font-semibold text-white text-[30px] leading-[43px] xs:leading-[53px] xs:text-[40px]"
          >{stat.value}</h4>
          <p
          className="font-poppins font-normal text-gradient text-[15px] leading-[21px] xs:leading-[26px] xs:text-[20px]"
          >{stat.title}</p>
        </div>
      ))
    }

    </section>
  )


export default Stats
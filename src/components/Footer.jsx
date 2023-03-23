import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer>
      <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
      >
        <div
        className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}
        >
          <div
          className="flex flex-1 flex-col justify-start mr-10 mb-6"
          >
            <img
              src={logo}
              alt="hoobank"
              className="w-[266px] h-[72px] object-contain "
            />
            <p
            className={`${styles.paragraph} mt-4 max-w-[310px]`}
            >
              A new way to make payments easy, reliable and secure.
            </p>
          </div>
          {/* links */}

          <div
          className="flex-[1.5] w-full flex flex-row justify-between flex-wrap mt10 md:mt-0 "
          >
            {footerLinks.map((footerLink) => (
              <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4
                className="text-white font-poppins font-normal text-[18px] leading-[27px]"
                >
                  {footerLink.title}
                </h4>
                <ul
                className="list-none mt-4"
                >
                  {footerLink.links.map((link, index) => (
                    <li key={link.name}
                    className={` font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-secondary ${index !== footerLink.links.length -1 ? 'mb-2' : 'mb-0' } `}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div
        className=" w-full flex flex-col items-center md:flex-row sm:justify-between pt-6 border-t-[1px] border-t-[#3f3r45]"
        >
          <div>
            <p
            className="text-white font-poppins font-normal text-center text-[18px] leading-[27px]"
            >
              2023 HooBank. All Rights Reserved.
            </p>
          </div>
          <div
          className="flex flex-row mt-6 md:mt-0"
          >
            {socialMedia.map((mediaIcon, index) => (
              <img 
                key={mediaIcon.id}
                src={mediaIcon.icon}
                alt={mediaIcon.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer svg-secondary ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0' }`}
              />
            ))}
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
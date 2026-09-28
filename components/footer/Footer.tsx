import Image from "next/image";

import type { Dictionary } from "@/app/[lang]/dictionaries";

import styles from "./Footer.module.css";

type FooterProps = Readonly<{
  dictionary: Dictionary["footer"];
}>;

type SocialsProps = Readonly<{
  idSuffix: "desktop" | "mobile";
}>;

function Copyright() {
  return (
    <p className={styles.copy}>
      © Copyright Cin-Cin Pay, {new Date().getFullYear()}.
      <br /> All rights reserved.
    </p>
  );
}

function Socials({ idSuffix }: SocialsProps) {
  const instagramMaskId = `footer-instagram-mask-${idSuffix}`;

  return (
    <div className={styles.socials}>
      <a
        aria-label="Telegram"
        href="https://t.me/cincin_exchange"
        rel="noreferrer noopener"
        target="_blank"
      >
        <svg aria-hidden="true" viewBox="0 0 40 40">
          <path
            d="M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20Z"
            fill="black"
          />
          <path
            d="M6.52922 19.8562L12.0496 21.7267L25.1556 13.733C25.3456 13.6171 25.5402 13.8745 25.3764 14.025L15.4541 23.1366L15.0852 28.2377C15.0571 28.6257 15.5256 28.8418 15.8037 28.569L18.8587 25.5719L24.4436 29.7898C25.0456 30.2445 25.9173 29.924 26.0797 29.1884L29.9684 11.5725C30.1903 10.5676 29.2033 9.71961 28.24 10.0876L6.50113 18.3926C5.81919 18.6531 5.83776 19.622 6.52922 19.8562Z"
            fill="white"
          />
        </svg>
      </a>

      <a
        aria-label="Instagram"
        href="https://www.instagram.com/cincin_exchange/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <svg aria-hidden="true" viewBox="0 0 40 40">
          <path
            d="M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20Z"
            fill="black"
          />
          <mask
            id={instagramMaskId}
            height="40"
            maskUnits="userSpaceOnUse"
            width="40"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d="M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20Z"
              fill="white"
              fillRule="evenodd"
            />
          </mask>
          <g mask={`url(#${instagramMaskId})`}>
            <path
              d="M19.9995 9.33325C22.8958 9.33326 23.2584 9.34594 24.396 9.39771C25.5313 9.44972 26.3069 9.62909 26.9868 9.89282C27.689 10.165 28.2822 10.53 28.8755 11.1233C29.4688 11.7162 29.8336 12.3114 30.1069 13.0129C30.3691 13.6911 30.5487 14.4663 30.6021 15.6018C30.6532 16.7396 30.6665 17.1034 30.6665 20.0002C30.6665 22.897 30.6532 23.2599 30.6021 24.3977C30.5487 25.5327 30.3691 26.3082 30.1069 26.9866C29.8336 27.6878 29.4687 28.2824 28.8755 28.8752C28.2829 29.4685 27.689 29.8343 26.9878 30.1067C26.3091 30.3705 25.5325 30.5508 24.397 30.6028C23.2594 30.6546 22.8964 30.6672 19.9995 30.6672C17.1032 30.6672 16.7397 30.6546 15.6021 30.6028C14.4667 30.5508 13.6909 30.3705 13.0122 30.1067C12.3113 29.8343 11.7161 29.4685 11.1235 28.8752C10.5307 28.2825 10.1657 27.6879 9.89307 26.9866C9.62951 26.3083 9.45017 25.5323 9.39795 24.3967C9.34641 23.2593 9.3335 22.8966 9.3335 20.0002C9.3335 17.1035 9.34707 16.7394 9.39795 15.6018C9.44905 14.4669 9.62869 13.6913 9.89307 13.0129C10.1664 12.3116 10.5312 11.7162 11.1245 11.1233C11.7174 10.5302 12.3126 10.1653 13.0142 9.89282C13.6923 9.62911 14.4676 9.4497 15.603 9.39771C16.7405 9.34594 17.1042 9.33326 19.9995 9.33325ZM19.0444 11.2532C17.0564 11.2554 16.6749 11.2683 15.6909 11.3127C14.651 11.3605 14.0865 11.5342 13.7104 11.6809C13.2128 11.8747 12.8571 12.1056 12.4839 12.4788C12.1106 12.8521 11.8784 13.2076 11.6851 13.7053C11.5391 14.0813 11.3654 14.6459 11.3179 15.6858C11.2668 16.8102 11.2563 17.1469 11.2563 19.9954C11.2563 22.8434 11.2668 23.1815 11.3179 24.3059C11.3652 25.3455 11.5391 25.9099 11.6851 26.2854C11.8788 26.7834 12.1105 27.1386 12.4839 27.512C12.8571 27.8851 13.2128 28.1165 13.7104 28.3098C14.0867 28.4558 14.6512 28.629 15.6909 28.677C16.8154 28.7281 17.1532 28.7395 20.0015 28.7395C22.8489 28.7395 23.1869 28.7281 24.311 28.677C25.3507 28.6295 25.9159 28.4565 26.2915 28.3098C26.7895 28.1165 27.1447 27.8853 27.5181 27.512C27.8913 27.1389 28.1226 26.7841 28.3159 26.2864C28.4619 25.9109 28.6355 25.3465 28.6831 24.3069C28.7342 23.1824 28.7456 22.844 28.7456 19.9973C28.7456 17.1509 28.7342 16.8131 28.6831 15.6887C28.6358 14.6487 28.4619 14.0838 28.3159 13.7083C28.1222 13.2107 27.8913 12.8549 27.5181 12.4817C27.145 12.1084 26.7893 11.8772 26.2915 11.6838C25.9155 11.5379 25.3506 11.3642 24.311 11.3167C23.1867 11.2656 22.8489 11.2551 20.0015 11.2551C19.6455 11.2551 19.3284 11.2547 19.0444 11.2551V11.2532ZM20.0005 14.5217C23.0256 14.5217 25.478 16.9751 25.478 20.0002C25.4779 23.0252 23.0264 25.4766 20.0015 25.4768C16.9764 25.4768 14.5231 23.0253 14.5229 20.0002C14.5229 16.9753 16.9757 14.5221 20.0005 14.5217ZM20.0015 16.4446C18.0377 16.4446 16.4458 18.0364 16.4458 20.0002C16.4459 21.9637 18.0377 23.5559 20.0015 23.5559C21.9648 23.5557 23.557 21.9636 23.5571 20.0002C23.5571 18.0365 21.9649 16.4447 20.0015 16.4446ZM25.6948 13.0266C26.4014 13.0266 26.9749 13.5994 26.9751 14.3059C26.9751 15.0126 26.4015 15.5862 25.6948 15.5862C24.9882 15.5861 24.4146 15.0125 24.4146 14.3059C24.4147 13.6434 24.9189 13.099 25.564 13.0334L25.6948 13.0266Z"
              fill="white"
            />
          </g>
        </svg>
      </a>

      <a
        aria-label="X"
        href="https://x.com/Cincin_Exchange"
        rel="noreferrer noopener"
        target="_blank"
      >
        <svg aria-hidden="true" viewBox="0 0 40 40">
          <path
            className={styles.hoverCircle}
            d="M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20Z"
            fill="black"
          />
          <path
            d="M26.5898 9.4834H30.1039L22.4268 18.2579L31.4583 30.1979H24.3867L18.8479 22.9564L12.5103 30.1979H8.99416L17.2056 20.8127L8.54163 9.4834H15.7928L20.7993 16.1025L26.5898 9.4834ZM25.3565 28.0946H27.3037L14.7347 11.4762H12.6452L25.3565 28.0946Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
}

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.bottomLeftDecoration}>
        <div className={styles.bottomRightDecoration}>
          <div className={styles.footerSkeletonDecoration}>
            <div className={styles.footerContainer}>
              <div className={styles.fullFooter}>
                <div className={styles.desktopCopy}>
                  <Copyright />
                </div>

                <nav aria-label={dictionary.mainMenuLabel} className={styles.mainMenu}>
                  <ul>
                    {dictionary.mainMenu.map((item) => (
                      <li key={item.url}>
                        <a href={item.url}>{item.label}</a>
                        {item.children.length > 0 ? (
                          <ul className={styles.subMenu}>
                            {item.children.map((child) => (
                              <li key={child.url}>
                                <a href={child.url}>{child.label}</a>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </nav>

                <nav
                  aria-label={dictionary.secondaryMenuLabel}
                  className={styles.secondaryMenu}
                >
                  <ul>
                    {dictionary.secondaryMenu.map((item) => (
                      <li key={item.url}>
                        <a href={item.url}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className={styles.desktopSocials}>
                  <Socials idSuffix="desktop" />
                </div>
              </div>

              <div className={styles.mobileFooter}>
                <Copyright />
                <Socials idSuffix="mobile" />
              </div>
            </div>

            <div className={styles.footerLogo}>
              <Image
                alt="CinCin"
                height={304}
                src="/images/CinCin.svg"
                width={1200}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

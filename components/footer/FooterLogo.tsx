import Image from "next/image";

export function FooterLogo() {
  return (
    <footer className="footer" id="footer">
      <div className="bottom-left-decoration">
        <div className="bottom-right-decoration">
          <div className="footer-skeleton-decoration">
            <div className="footer-logo">
              <Image
                alt="CinCin"
                height="304"
                src="/images/CinCin.svg"
                width="1200"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

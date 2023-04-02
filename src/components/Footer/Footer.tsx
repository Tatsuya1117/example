import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";

export function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footer}>
          <Link
            href={"/"}
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            Thanks by{" "}
            <Image
              src={"/vercel.svg"}
              alt={"Vercel logo"}
              className={styles.vercelLogo}
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>
      </footer>
    </>
  );
}
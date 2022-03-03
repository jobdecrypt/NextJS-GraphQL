import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function LoginSample() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Account</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <br />
          <div>
            <a href="http://localhost:3000">Home</a>
          </div>
        </main>
      </div>
    </>
  );
}

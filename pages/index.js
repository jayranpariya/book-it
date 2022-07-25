import Head from "next/head";
import Image from "next/image";
import Layout from "../controller/layout/layout";
import Home from "../controller/Home";
import styles from "../styles/Home.module.css";

export default function index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import AdaptiveMusicCard from "~/components/Cards/AdaptiveMusicCard";
import AdaptiveYTCard from "~/components/Cards/AdaptiveYTCard";
import LiteracyCard from "~/components/Cards/LiteracyCard";

const Home = () => {
  return (
    <>
      <div className="alert shadow-lg flex-col text-center py-8 mb-12">
        <h1 className="text-2xl mb-4">Welcome to my portfolio</h1>

        <div className="grid sm:grid-cols-2">
          <a
            className="btn btn-primary btn-lg"
            href="https://github.com/EnakNalla"
            target="_blank"
            rel="noreferrer"
          >
            See my github <BsGithub className="ml-2" />
          </a>

          <Link href="/contact">
            <a className="btn btn-lg btn-secondary">Contact</a>
          </Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-rows-1">
        <LiteracyCard />

        <AdaptiveYTCard />
        <AdaptiveMusicCard />
      </div>
    </>
  );
};

export default Home;

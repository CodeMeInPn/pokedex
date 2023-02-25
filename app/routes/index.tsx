import Header from "~/components/Header";
import Searchbar from "~/components/Searchbar";

export async function action() {
  return null;
}

export default function Index() {
  return (
    <section className="mx-4 my-6">
      <Header />
      <Searchbar />
    </section>
  );
}

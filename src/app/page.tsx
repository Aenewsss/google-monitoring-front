import Image from "next/image";
import ResultsList from "./components/result-list";
import SearchForm from "./components/search-form";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-8 p-24 bg-brand-primary">
      <Image className="flex self-center" src="https://cdn.prod.website-files.com/605b962d5e846a3de31701a8/6495de9d500d8383c085a8fb_brandmonitor-logo-dark.svg" width={150} height={42} alt="Logo Brand" />
      <div className="flex lg:flex-row flex-col gap-10">
        <SearchForm />
        <ResultsList />
      </div>
    </main>
  );
}

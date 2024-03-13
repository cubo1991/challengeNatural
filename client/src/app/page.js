import Image from "next/image";
import { PokemonList } from "./pokemonList/PokemonList";

export default function Home() {
  return (
    <div>
      <PokemonList/>
    </div>
  );
}

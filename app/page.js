import Navbar from "@/components/Navbar";

export const Animals = ["cat", "dog", "hamster"];
export default function Home() {
  return (
    <div>
      <Navbar />
      <div>가장 귀여운 동물은?</div>
    </div>
  );
}

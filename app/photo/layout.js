import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex_column background">
      <Navbar />
      <div>동물 사진 보기</div>
      {children}
    </div>
  );
}

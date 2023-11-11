import Image from "next/image";
import Link from "next/link";

export default function RecordItem({ id, image, text }) {
  return (
    <Link href={{ pathname: `/detail/${id}` }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          margin: "20px",
          paddingBottom: "30px",
        }}
      >
        <p style={{ width: "500px", textAlign: "center", margin: "10px 0" }}>
          {text}
        </p>
        <div style={{ position: "relative", width: "500px", height: "300px" }}>
          <Image
            src={image}
            alt="pic"
            sizes="500px"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </Link>
  );
}

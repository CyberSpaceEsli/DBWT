export default function Footer() {
  return (
    <footer
    className="mt-2 bg-red-50 text-center lg:text-left">
    {/* <!--Check responsiveness--> */}
    <div className="lg:mx-20 p-6 text-neutral-800">
      <div className="flex flex-col md:flex-row md:gap-2 md:container md:mx-auto">
        <div className="mb-6 md:mb-0">
          <h5 className="text-lg text-red-700 mb-2 font-semibold">Projekt</h5>

          <p className="mb-4">
            Dies ist ein Projekt enstanden aus dem Modul Datenbanken und Webtechniken.
            Verwirklicht wurde das Projekt von Ilse Loehr.
            atque ea quis molestias. Fugiat pariatur maxime quis culpa
            corporis vitae repudiandae aliquam voluptatem veniam, est atque
            cumque eum delectus sint!
          </p>
        </div>

        <div className="mb-6 md:mb-0">
          <p className="text-lg text-red-700 mb-2 font-semibold">Datenquelle</p>

          <p className="mb-4">
            Die verwendeten Daten für dieses Projekt stammen vom Open Data Portal Chemnitz.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            atque ea quis molestias. Fugiat pariatur maxime quis culpa
            corporis vitae repudiandae aliquam voluptatem veniam, est atque
            cumque eum delectus sint!
          </p>
        </div>
      </div>
    </div>

    {/* <!--Copyright section--> */}
    <div
      className="bg-red-400 p-4 text-center text-red-50 rounded-t-lg">
      © 2024 Copyright:
      <a
        className="text-red-50 pl-0.5"
        href="#"
      >Ilse Loehr</a>
    </div>
  </footer>
  );
}
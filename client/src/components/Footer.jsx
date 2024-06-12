export default function Footer() {
  return (
    <footer
    className="mt-2 bg-red-50 text-center lg:text-left">
    {/* <!--Check responsiveness--> */}
    <div className="lg:mx-20 p-6 text-neutral-800">
      <div className="flex flex-col md:flex-row md:gap-6 md:container md:mx-auto">
        <div className="mb-6 md:mb-0">
          <h5 className="text-lg text-red-700 mb-2 font-semibold">Projekt DBWT</h5>

          <p className="mb-4">
            Dieses Projekt entstand im Rahmen des Moduls Datenbanken und Webtechniken im Masterstudium 
            an der Technischen Universität Chemnitz. Die Anforderungen des Projekts umfassten 
            die Umsetzung einer Full-Stack-Webanwendung sowie die Erstellung einer eigenen API.
          </p>
        </div>

        <div className="mb-6 md:mb-0">
          <p className="text-lg text-red-700 mb-2 font-semibold">Datenquelle</p>

          <p className="mb-4">
            Die verwendeten Daten für dieses Projekt stammen aus dem <a href="https://portal-chemnitz.opendata.arcgis.com/search?tags=bildungfamilie" target="_blank" className="underline hover:text-green-500">Open Data Portal von Chemnitz</a>. 
            Sie umfassen Informationen zu Institutionen aus den Bereichen Bildung, Familie und Soziales, 
            darunter Schulen, Kindergärten, Schulsozialarbeiten und Jugendberufshilfen.
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
      >Ilse Löhr</a>
    </div>
  </footer>
  );
}
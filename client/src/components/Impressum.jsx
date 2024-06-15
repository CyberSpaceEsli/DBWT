import { ServerIcon, CircleStackIcon, EnvelopeIcon, ComputerDesktopIcon  } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Datenbankanbindung.',
    description:
      'Im Projekt wird die dokumentenbasierte NoSQL-Datenbank MongoDB verwendet, um die Daten von Schulen, Kindergärten, Jugendberufshilfen und Schulsozialarbeitseinrichtungen zu speichern.',
    icon: CircleStackIcon,
  },
  {
    name: 'Backend & Server.',
    description: 'Express und Node.js bilden das in der Mitte liegende Backend. Express.js ist ein serverseitiges Web-Framework und Node.js eine beliebte und leistungsstarke JavaScript-Serverplattform.',
    icon: ServerIcon,
  },
  {
    name: 'Schnittstelle.',
    description: 'Eine weitere Anforderung des Projekts ist die Bereitstellung einer API. Hierfür wurden die Endpunkte selbst definiert. Die erstellten Endpunkte sind im Reiter Dokumentation zu finden und mit Swagger beschrieben.',
    icon: EnvelopeIcon,
  },
  {
    name: 'Frontend.',
    description: 'Das deklarative JavaScript-Framework React bildet das Frotend der Webapplikation. React ermöglicht es, komplexe Benutzeroberflächen durch einfache Komponenten zu erstellen und als HTML zu rendern.',
    icon: ComputerDesktopIcon,
  },
]

export default function Impressum() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
    
          <div className="flex justify-center lg:pr-8 lg:pt-4">
            <div className="lg:max-w-2xl">
              <h2 className="text-base font-semibold leading-7 text-red-400">Alles Wichtige</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Impressum</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Im Modul Datenbanken & Webtechniken bestand die Anforderung, eine Full-Stack-Webanwendung zu entwickeln, 
                wobei die Wahl der Technologien freigestellt war. Für die Realisierung dieses Projekts entschied ich mich 
                für den MERN-Stack:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-400" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Zur Umsetzung des Projekts wurden weitere Bibliotheken und Tools verwendet, um die Entwicklung der Webanwendung zu erleichtern:
              </p>
              <p className="mt-6 text-base leading-8 text-gray-600">
                <a href="https://v2.tailwindcss.com/" className="font-semibold text-green-500 text-md hover:text-green-600">TailwindCSS.</a> Ein CSS-Framework zum schnellen erstellen von UI-Komponenten durch den Utility-First Ansatz, wobei die CSS-Klassen direkt im Markup eingebunden werden.
              </p>
              <p className="mt-6 text-base leading-8 text-gray-600">
                <a href="https://headlessui.com/" className="font-semibold text-green-500 text-md hover:text-green-600">HeadlessUI.</a> Liefert ungestylte, dafür vollständig zugängliche UI-Komponenten, diee nahtlos mit Tailwind CSS integriert werden können.
              </p>
              <p className="mt-6 text-base leading-8 text-gray-600">
                <a href="https://heroicons.com/outline" className="font-semibold text-green-500 text-md hover:text-green-600">HeroIcons.</a> Enthält eine handgemachte Sammlung an SVG-Symbolen, welche von den Entwicklern von TailwindCSS designed wurden.
              </p>
              <p className="mt-6 text-base leading-8 text-gray-600">
                <a href="https://mongoosejs.com/" className="font-semibold text-green-500 text-md hover:text-green-600">Mongoose.</a> Eine Node.js-Bibliothek für MongoDB, die die Interaktion mit MongoDB-Datenbanken erleichtert, indem Schemas definiert und Daten validiert werden.
              </p>
              <p className="mt-6 text-base leading-8 text-gray-600">
                <a href="https://swagger.io/tools/swagger-ui/" className="font-semibold text-green-500 text-md hover:text-green-600">SwaggerUI.</a> Das Tool ermöglicht es die Ressourcen der API zu visualisieren und damit zu interagieren, ohne dass die Implementationslogik bereits vorhanden sein muss.
              </p>
              <p className="mt-6 text-base leading-8 text-gray-600">
                <a href="https://leafletjs.com/examples/quick-start/" className="font-semibold text-green-500 text-md hover:text-green-600">Leaflet.</a> Verantwortlich für die Darstellung der interaktiven Karte ist die Open-Source JS-Bibliothek Leaflet, das mit Open Street Map zusammenabreit. Zusätzlich gibt es <a href="https://react-leaflet.js.org/docs/start-introduction/" className="underline hover:text-green-600">React Leaflet</a>, welches das Zusammnspiel der beiden Technologien vereinfacht.
              </p>
              <p className="mt-6 text-base leading-8 text-gray-600">
                <a href="https://nominatim.org/" className="font-semibold text-green-500 text-md hover:text-green-600">Nominatim.</a> Für zusätzliche Daten zu Orten auf der Erde eignet sich das Open-Source Tool Nominatim. Mit der Adresse oder den Koordniaten werden weitere Open Street Map Daten zu Einrichtungen gefunden. 
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Das <a href="https://www.flaticon.com/de/kostenloses-icon/sehenswurdigkeit_11729889" className=" text-gray-900 underline text-md hover:text-green-600" target="_blank">Logo</a> für diese Webanwedung stammt aus der Icon-Bibliothek FlatIcon.
              </p>
            </div>
          </div>
          
        </div>
    </div>
  )
}
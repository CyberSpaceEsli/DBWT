
export default function FavFacilityButton() {

  return (
    <div>
        <button type="button" label="Fav_Facility" title="Favourite Facility" className="h-8 w-48 px-1.5 rounded bg-indigo-600 text-white mb-3 hover:bg-indigo-500" onClick={() => { console.log("Button pressed")}}>Favorite Einrichtung speichern</button> <br />
     </div>
  )
}
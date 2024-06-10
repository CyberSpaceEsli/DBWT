import PropTypes from 'prop-types';

export default function FavFacilityDisplayName({ facilityName }) {

  return (
    <div>
         <p className="mt-2 block text-sm leading-6 text-gray-900">{facilityName}</p>
    </div>
  )
}

FavFacilityDisplayName.propTypes = {
  facilityName: PropTypes.string,
}
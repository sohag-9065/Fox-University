import facilityData from '../../data/facilitiesData';
import FacilitiesCard from './FacilitiesCard';

const Facilities = () => { 
    return (
        <div>
            <div className='grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-4  '>
                {
                    facilityData.map((facility, index) => <FacilitiesCard
                        key={index}
                        facility={facility}
                    ></FacilitiesCard>)
                }
            </div>
        </div>
    );
};

export default Facilities;
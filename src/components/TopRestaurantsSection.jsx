import React from 'react'
import RestaurantCard from './RestaurantCard'


const TopRestaurants = ({data}) => {
  return (
    <div className='px-40'>
      <div className=' flex items-center justify-between mb-9'>
          <div className='text-xl font-bold '>Top restaurant chains in Bhubaneswar</div>
          <div>
            <button>👌</button>
            <button>👍</button>
          </div>
      </div>
      <div className='scroll-hide flex overflow-x-auto gap-4 '>

        {data.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resdata={restaurants} />
        ))}

      </div>
    </div>
  )
}

export default TopRestaurants
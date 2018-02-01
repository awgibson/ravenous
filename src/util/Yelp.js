const apiKey = 'z9i0Gp1FHYmXM1ROQEVF_MlgJ8Z-tY5kEt55bUQFR-dH46s-7iv48I2m0DfuMeemhCbFN1T8dgbPCuzH5YktlsR22V1ByksyzTIZq0hIi9wgv7BuZ-vnjPPUHx5zWnYx';

const Yelp = {
  search(term, location, sortBy){
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
       Authorization: 'Bearer ${apiKey}' }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
          }));
        }
    });
  }
};

export default Yelp;
